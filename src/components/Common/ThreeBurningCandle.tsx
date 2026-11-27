import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeBurningCandleProps {
  /** Whether the flame is actively burning */
  isBurning: boolean;
  /** 0.0 (fresh full candle) -> 1.0 (burned down) */
  burnProgress: number;
  className?: string;
}

function createSoftGlowTexture(innerColor: string, midColor: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(64, 64, 2, 64, 64, 62);
  grad.addColorStop(0, innerColor);
  grad.addColorStop(0.4, midColor);
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

export const ThreeBurningCandle: React.FC<ThreeBurningCandleProps> = ({
  isBurning,
  burnProgress,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ isBurning, burnProgress });
  const [webglError, setWebglError] = useState(false);

  useEffect(() => {
    stateRef.current = { isBurning, burnProgress };
  }, [isBurning, burnProgress]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      setWebglError(true);
      return;
    }

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 340;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 50);
    camera.position.set(0, 1.35, 5.1);
    camera.lookAt(0, 0.55, 0);

    // Ambient & rim studio lighting
    const ambientLight = new THREE.AmbientLight(0xfff1e0, 0.45);
    scene.add(ambientLight);
    const rimLight = new THREE.DirectionalLight(0x93c5fd, 0.55);
    rimLight.position.set(-3, 4, -2);
    scene.add(rimLight);

    // Warm flickering flame PointLight
    const flameLight = new THREE.PointLight(0xff922b, 3.2, 8, 1.6);
    scene.add(flameLight);

    // Brass pedestal saucer
    const saucerGeo = new THREE.CylinderGeometry(1.15, 0.92, 0.16, 40);
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xb8860b,
      metalness: 0.78,
      roughness: 0.28,
    });
    const saucer = new THREE.Mesh(saucerGeo, brassMat);
    saucer.position.y = -1.1;
    scene.add(saucer);

    const rimGeo = new THREE.TorusGeometry(1.14, 0.045, 16, 48);
    const rim = new THREE.Mesh(rimGeo, brassMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = -1.03;
    scene.add(rim);

    // Candle wax pillar (pivot at bottom so it melts downward)
    const baseWaxHeight = 1.95;
    const waxGeo = new THREE.CylinderGeometry(0.46, 0.48, baseWaxHeight, 36, 1);
    waxGeo.translate(0, baseWaxHeight / 2, 0);
    const waxMat = new THREE.MeshStandardMaterial({
      color: 0xfaf0dc,
      roughness: 0.52,
      metalness: 0.04,
      emissive: 0xff6b1a,
      emissiveIntensity: 0.08,
    });
    const waxMesh = new THREE.Mesh(waxGeo, waxMat);
    waxMesh.position.y = -1.02;
    scene.add(waxMesh);

    // Melted wax pool ring at top
    const poolGeo = new THREE.TorusGeometry(0.41, 0.055, 12, 32);
    const poolMesh = new THREE.Mesh(poolGeo, waxMat);
    poolMesh.rotation.x = Math.PI / 2;
    scene.add(poolMesh);

    // Wick
    const wickGeo = new THREE.CylinderGeometry(0.022, 0.028, 0.22, 10);
    const wickMat = new THREE.MeshStandardMaterial({ color: 0x1e1b18, roughness: 0.9 });
    const wick = new THREE.Mesh(wickGeo, wickMat);
    scene.add(wick);

    // Glowing ember tip
    const emberGeo = new THREE.SphereGeometry(0.028, 10, 10);
    const emberMat = new THREE.MeshBasicMaterial({ color: 0xff5400 });
    const ember = new THREE.Mesh(emberGeo, emberMat);
    scene.add(ember);

    // Sculpted Outer Flame Mesh (teardrop with dynamic vertex displacement)
    const outerFlameGeo = new THREE.SphereGeometry(0.18, 24, 24);
    const outerBasePos = outerFlameGeo.attributes.position.array.slice() as Float32Array;
    for (let i = 0; i < outerBasePos.length; i += 3) {
      const x = outerBasePos[i];
      const y = outerBasePos[i + 1];
      const z = outerBasePos[i + 2];
      const normY = (y + 0.18) / 0.36; // 0 bottom -> 1 top
      const taper = Math.pow(Math.max(0, 1 - normY * 0.85), 0.72);
      outerBasePos[i] = x * taper * 0.95;
      outerBasePos[i + 1] = normY * 0.72;
      outerBasePos[i + 2] = z * taper * 0.95;
    }
    outerFlameGeo.attributes.position.array.set(outerBasePos);
    outerFlameGeo.computeVertexNormals();

    const outerFlameMat = new THREE.MeshBasicMaterial({
      color: 0xff6d00,
      transparent: true,
      opacity: 0.86,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const outerFlame = new THREE.Mesh(outerFlameGeo, outerFlameMat);
    scene.add(outerFlame);

    // Inner White-Gold Flame Core
    const innerFlameGeo = new THREE.SphereGeometry(0.095, 18, 18);
    const innerBasePos = innerFlameGeo.attributes.position.array.slice() as Float32Array;
    for (let i = 0; i < innerBasePos.length; i += 3) {
      const y = innerBasePos[i + 1];
      const normY = (y + 0.095) / 0.19;
      const taper = Math.pow(Math.max(0, 1 - normY * 0.82), 0.75);
      innerBasePos[i] *= taper;
      innerBasePos[i + 1] = normY * 0.42;
      innerBasePos[i + 2] *= taper;
    }
    innerFlameGeo.attributes.position.array.set(innerBasePos);
    innerFlameGeo.computeVertexNormals();

    const innerFlameMat = new THREE.MeshBasicMaterial({
      color: 0xfff3b0,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const innerFlame = new THREE.Mesh(innerFlameGeo, innerFlameMat);
    scene.add(innerFlame);

    // Soft Volumetric Halo Sprite
    const haloTex = createSoftGlowTexture('rgba(255, 220, 130, 0.85)', 'rgba(255, 105, 15, 0.28)');
    const haloMat = new THREE.SpriteMaterial({
      map: haloTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const haloSprite = new THREE.Sprite(haloMat);
    haloSprite.scale.set(1.5, 1.8, 1);
    scene.add(haloSprite);

    // Rising Smoke / Fumes Particle System
    const SMOKE_COUNT = 72;
    const smokePositions = new Float32Array(SMOKE_COUNT * 3);
    const smokeMeta = Array.from({ length: SMOKE_COUNT }, (_, idx) => ({
      age: (idx / SMOKE_COUNT) * 3.2,
      life: 2.4 + Math.random() * 1.4,
      driftX: (Math.random() - 0.5) * 0.22,
      driftZ: (Math.random() - 0.5) * 0.22,
      speed: 0.48 + Math.random() * 0.35,
      phase: Math.random() * Math.PI * 2,
    }));

    const smokeGeo = new THREE.BufferGeometry();
    smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokePositions, 3));
    const smokeTex = createSoftGlowTexture('rgba(210, 215, 225, 0.36)', 'rgba(180, 185, 198, 0.12)');
    const smokeMat = new THREE.PointsMaterial({
      size: 0.36,
      map: smokeTex,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
    const smokePoints = new THREE.Points(smokeGeo, smokeMat);
    scene.add(smokePoints);

    // ResizeObserver for crisp responsive canvas
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    let animId = 0;
    let lastTime = performance.now();
    let flameStrength = stateRef.current.isBurning ? 1 : 0.08;

    const animate = (now: number) => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      const t = now * 0.001;

      const { isBurning: burning, burnProgress: prog } = stateRef.current;
      const targetStrength = burning ? 1.0 : 0.0;
      flameStrength += (targetStrength - flameStrength) * Math.min(1, dt * 6);

      // Melt wax down smoothly from 1.0 -> 0.28
      const clampedProg = Math.max(0, Math.min(1, prog));
      const waxScaleY = 1.0 - clampedProg * 0.72;
      waxMesh.scale.y = waxScaleY;
      const waxTopY = -1.02 + baseWaxHeight * waxScaleY;

      poolMesh.position.y = waxTopY - 0.01;
      wick.position.y = waxTopY + 0.08;
      ember.position.y = waxTopY + 0.19;
      emberMat.color.setHex(burning ? 0xff6a00 : 0x552200);

      // Flame sway & organic turbulence
      const swayX = Math.sin(t * 4.3) * 0.025 + Math.cos(t * 7.1) * 0.012;
      const swayZ = Math.cos(t * 3.7) * 0.02;
      const stretchY = 1 + Math.sin(t * 9.5) * 0.08 + Math.cos(t * 14.2) * 0.04;

      const outerArr = outerFlameGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < outerArr.length; i += 3) {
        const bx = outerBasePos[i];
        const by = outerBasePos[i + 1];
        const bz = outerBasePos[i + 2];
        const hRatio = Math.min(1, by / 0.72);
        const wave = Math.sin(t * 11 + by * 9) * 0.022 * hRatio;
        outerArr[i] = bx + (swayX * 1.8 + wave) * hRatio;
        outerArr[i + 1] = by * stretchY;
        outerArr[i + 2] = bz + swayZ * hRatio;
      }
      outerFlameGeo.attributes.position.needsUpdate = true;

      const flameBaseY = waxTopY + 0.17;
      outerFlame.position.set(0, flameBaseY, 0);
      outerFlame.scale.setScalar(Math.max(0.001, flameStrength));
      outerFlameMat.opacity = 0.86 * flameStrength;

      innerFlame.position.set(swayX * 0.35, flameBaseY + 0.02, swayZ * 0.35);
      innerFlame.scale.set(
        Math.max(0.001, flameStrength),
        Math.max(0.001, flameStrength * stretchY),
        Math.max(0.001, flameStrength)
      );
      innerFlameMat.opacity = 0.95 * flameStrength;

      haloSprite.position.set(swayX * 0.5, flameBaseY + 0.3, 0);
      haloMat.opacity = 0.72 * flameStrength;

      flameLight.position.set(swayX * 2, flameBaseY + 0.35, 0.25);
      flameLight.intensity = (2.8 + Math.sin(t * 13) * 0.45 + Math.cos(t * 21) * 0.25) * flameStrength;
      waxMat.emissiveIntensity = 0.14 * flameStrength;

      // Update rising smoke / fumes particles
      const smokeStartY = flameBaseY + (burning ? 0.58 : 0.06);
      const posAttr = smokeGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < SMOKE_COUNT; i++) {
        const m = smokeMeta[i];
        m.age += dt;
        if (m.age >= m.life) {
          m.age = 0;
        }
        const pRatio = m.age / m.life;
        const curlX = Math.sin(t * 1.8 + m.phase + pRatio * 5.0) * (0.08 + pRatio * 0.24);
        const curlZ = Math.cos(t * 1.5 + m.phase + pRatio * 4.0) * (0.06 + pRatio * 0.18);

        posAttr.setXYZ(
          i,
          m.driftX * pRatio + curlX,
          smokeStartY + m.age * m.speed,
          m.driftZ * pRatio + curlZ
        );
      }
      posAttr.needsUpdate = true;
      smokeMat.opacity = burning ? 0.36 : 0.55;

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      saucerGeo.dispose();
      rimGeo.dispose();
      waxGeo.dispose();
      poolGeo.dispose();
      wickGeo.dispose();
      emberGeo.dispose();
      outerFlameGeo.dispose();
      innerFlameGeo.dispose();
      smokeGeo.dispose();
      brassMat.dispose();
      waxMat.dispose();
      wickMat.dispose();
      emberMat.dispose();
      outerFlameMat.dispose();
      innerFlameMat.dispose();
      haloMat.dispose();
      smokeMat.dispose();
      haloTex.dispose();
      smokeTex.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (webglError) {
    return (
      <div className={`flex flex-col items-center justify-center rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] p-6 ${className}`}>
        <div className="text-3xl mb-2">{isBurning ? '🕯️' : '💨'}</div>
        <span className="text-xs font-mono text-[var(--text-muted)]">
          {isBurning ? 'Focus flame burning' : 'Candle paused'}
        </span>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-[300px] sm:h-[340px] rounded-2xl bg-gradient-to-b from-[#07070a]/70 via-[#0e0b09]/60 to-[var(--bg-base)] border border-[var(--border-subtle)] overflow-hidden ${className}`}
    />
  );
};

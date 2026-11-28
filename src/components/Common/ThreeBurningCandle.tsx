import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeBurningCandleProps {
  /** Whether the flame is actively burning */
  isBurning: boolean;
  /** 0.0 (fresh full candle) -> 1.0 (burned down) */
  burnProgress: number;
  /** Compact 1-inch framing for floating corner widget */
  compact?: boolean;
  /** Ultra-compact 36x36px mascot framing for top header beside SAMVIDHAN branding */
  headerMini?: boolean;
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
  compact = false,
  headerMini = false,
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

    const isMini = compact || headerMini;
    const width = container.clientWidth || (headerMini ? 28 : compact ? 64 : 320);
    const height = container.clientHeight || (headerMini ? 28 : compact ? 64 : 260);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const candleGroup = new THREE.Group();
    scene.add(candleGroup);
    const camera = new THREE.PerspectiveCamera(headerMini ? 40 : isMini ? 34 : 36, width / height, 0.1, 50);
    if (headerMini) {
      camera.position.set(0, 0.55, 5.15);
      camera.lookAt(0, 0.08, 0);
    } else if (compact) {
      camera.position.set(0, 1.0, 4.35);
      camera.lookAt(0, 0.28, 0);
    } else {
      camera.position.set(0, 1.35, 5.1);
      camera.lookAt(0, 0.55, 0);
    }

    // Ambient & rim studio lighting
    const ambientLight = new THREE.AmbientLight(0xfff1e0, 0.45);
    scene.add(ambientLight);
    const rimLight = new THREE.DirectionalLight(0x93c5fd, 0.55);
    rimLight.position.set(-3, 4, -2);
    scene.add(rimLight);

    // Warm flickering flame PointLight
    const flameLight = new THREE.PointLight(0xff922b, 3.2, 8, 1.6);
    candleGroup.add(flameLight);

    // Cute brass pedestal saucer with tiny side ring handle
    const saucerGeo = new THREE.CylinderGeometry(1.08, 0.86, 0.16, 40);
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xc9962b,
      metalness: 0.72,
      roughness: 0.28,
    });
    const saucer = new THREE.Mesh(saucerGeo, brassMat);
    saucer.position.y = -1.1;
    candleGroup.add(saucer);

    const rimGeo = new THREE.TorusGeometry(1.07, 0.05, 16, 48);
    const rim = new THREE.Mesh(rimGeo, brassMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = -1.03;
    candleGroup.add(rim);

    const handleGeo = new THREE.TorusGeometry(0.16, 0.032, 12, 24);
    const handleMesh = new THREE.Mesh(handleGeo, brassMat);
    handleMesh.position.set(1.16, -0.98, 0);
    handleMesh.rotation.y = Math.PI * 0.15;
    candleGroup.add(handleMesh);

    // Cute chubby game-style candle wax pillar (pivot at bottom so it melts downward)
    const baseWaxHeight = isMini ? 1.38 : 1.85;
    const waxRadius = isMini ? 0.58 : 0.5;
    const waxGeo = new THREE.CylinderGeometry(waxRadius - 0.02, waxRadius + 0.02, baseWaxHeight, 36, 1);
    waxGeo.translate(0, baseWaxHeight / 2, 0);
    const waxMat = new THREE.MeshStandardMaterial({
      color: 0xfff4df,
      roughness: 0.44,
      metalness: 0.02,
      emissive: 0xff8a3d,
      emissiveIntensity: 0.11,
    });
    const waxMesh = new THREE.Mesh(waxGeo, waxMat);
    waxMesh.position.y = -1.02;
    candleGroup.add(waxMesh);

    // Cute game-style face on the front of the candle (eyes + catchlights + rosy cheeks + tiny smile)
    const faceGroup = new THREE.Group();
    const eyeGeo = new THREE.SphereGeometry(0.068, 14, 14);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x2b1d14 });
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.17, 0.06, waxRadius - 0.01);
    leftEye.scale.set(1, 1.15, 0.5);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.17, 0.06, waxRadius - 0.01);
    rightEye.scale.set(1, 1.15, 0.5);

    const sparkleGeo = new THREE.SphereGeometry(0.022, 10, 10);
    const sparkleMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const leftSparkle = new THREE.Mesh(sparkleGeo, sparkleMat);
    leftSparkle.position.set(-0.15, 0.085, waxRadius + 0.022);
    const rightSparkle = new THREE.Mesh(sparkleGeo, sparkleMat);
    rightSparkle.position.set(0.19, 0.085, waxRadius + 0.022);

    const blushGeo = new THREE.SphereGeometry(0.065, 12, 12);
    const blushMat = new THREE.MeshBasicMaterial({
      color: 0xff8fa3,
      transparent: true,
      opacity: 0.72,
    });
    const leftBlush = new THREE.Mesh(blushGeo, blushMat);
    leftBlush.position.set(-0.27, -0.02, waxRadius - 0.025);
    leftBlush.scale.set(1.25, 0.75, 0.4);
    const rightBlush = new THREE.Mesh(blushGeo, blushMat);
    rightBlush.position.set(0.27, -0.02, waxRadius - 0.025);
    rightBlush.scale.set(1.25, 0.75, 0.4);

    const smileGeo = new THREE.TorusGeometry(0.065, 0.014, 8, 16, Math.PI);
    const smileMesh = new THREE.Mesh(smileGeo, eyeMat);
    smileMesh.position.set(0, -0.01, waxRadius - 0.005);
    smileMesh.rotation.z = Math.PI;

    faceGroup.add(leftEye, rightEye, leftSparkle, rightSparkle, leftBlush, rightBlush, smileMesh);
    candleGroup.add(faceGroup);

    // Melted wax pool ring at top
    const poolGeo = new THREE.TorusGeometry(waxRadius - 0.07, 0.06, 12, 32);
    const poolMesh = new THREE.Mesh(poolGeo, waxMat);
    poolMesh.rotation.x = Math.PI / 2;
    candleGroup.add(poolMesh);

    // Melted wax puddle gathering at the bottom on the saucer
    const bottomPuddleGeo = new THREE.CylinderGeometry(waxRadius + 0.08, waxRadius + 0.16, 0.055, 32);
    const bottomPuddle = new THREE.Mesh(bottomPuddleGeo, waxMat);
    bottomPuddle.position.y = -1.005;
    candleGroup.add(bottomPuddle);

    // Slow dripping liquid wax drops & solidified rim streaks
    const dripMat = new THREE.MeshStandardMaterial({
      color: 0xfff7e8,
      roughness: 0.18,
      metalness: 0.06,
      emissive: 0xff8c2a,
      emissiveIntensity: 0.16,
      transparent: true,
      opacity: 0.95,
    });
    const dripGeo = new THREE.SphereGeometry(0.044, 12, 12);
    const DRIP_COUNT = 5;
    const drips = Array.from({ length: DRIP_COUNT }, (_, idx) => {
      const mesh = new THREE.Mesh(dripGeo, dripMat);
      candleGroup.add(mesh);
      return {
        mesh,
        angle: -Math.PI * 0.38 + (idx / (DRIP_COUNT - 1)) * Math.PI * 0.76,
        cycle: idx / DRIP_COUNT,
        // Very slow viscous wax drip (~28-40s per drop)
        speed: 0.024 + (idx % 3) * 0.008,
        size: 0.85 + (idx % 2) * 0.25,
      };
    });

    const streakGeo = new THREE.CylinderGeometry(0.02, 0.034, 0.2, 10);
    const streaks = Array.from({ length: 4 }, (_, idx) => {
      const mesh = new THREE.Mesh(streakGeo, waxMat);
      candleGroup.add(mesh);
      return {
        mesh,
        angle: -Math.PI * 0.34 + idx * 0.72,
        lenScale: 0.7 + (idx % 2) * 0.35,
      };
    });

    // Wick
    const wickGeo = new THREE.CylinderGeometry(0.022, 0.028, 0.22, 10);
    const wickMat = new THREE.MeshStandardMaterial({ color: 0x1e1b18, roughness: 0.9 });
    const wick = new THREE.Mesh(wickGeo, wickMat);
    candleGroup.add(wick);

    // Glowing ember tip
    const emberGeo = new THREE.SphereGeometry(0.028, 10, 10);
    const emberMat = new THREE.MeshBasicMaterial({ color: 0xff5400 });
    const ember = new THREE.Mesh(emberGeo, emberMat);
    candleGroup.add(ember);

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
    candleGroup.add(outerFlame);

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
    candleGroup.add(innerFlame);

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
    candleGroup.add(haloSprite);

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
    candleGroup.add(smokePoints);

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

      // Keep candle fixed in place (no floating bobbing)
      candleGroup.rotation.y = headerMini ? 0 : Math.sin(t * 0.65) * 0.06;
      candleGroup.position.y = 0;

      // Melt wax down smoothly from 1.0 -> 0.28
      const clampedProg = Math.max(0, Math.min(1, prog));
      const waxScaleY = 1.0 - clampedProg * 0.72;
      waxMesh.scale.y = waxScaleY;
      const waxTopY = -1.02 + baseWaxHeight * waxScaleY;

      poolMesh.position.y = waxTopY - 0.01;
      wick.position.y = waxTopY + 0.08;
      ember.position.y = waxTopY + 0.19;
      emberMat.color.setHex(burning ? 0xff6a00 : 0x552200);

      // Keep cute game-style face centered on the remaining wax & animate blinking
      faceGroup.position.y = -1.02 + baseWaxHeight * waxScaleY * 0.46;
      const blinkCycle = t % 4.2;
      const isBlinking = !burning || (blinkCycle > 3.95 && blinkCycle < 4.1);
      const eyeScaleY = isBlinking ? 0.18 : 1.15;
      leftEye.scale.y = eyeScaleY;
      rightEye.scale.y = eyeScaleY;
      leftSparkle.visible = !isBlinking;
      rightSparkle.visible = !isBlinking;

      // Grow melted wax puddle at the bottom as candle melts over time
      const puddleGrowth = 0.72 + clampedProg * 0.68;
      bottomPuddle.scale.set(puddleGrowth, 0.55 + clampedProg * 0.9, puddleGrowth);

      // Update solidified rim streaks as wax melts
      const streakScale = (0.45 + clampedProg * 0.85) * waxScaleY;
      const surfaceRadius = waxRadius - 0.012;
      for (const s of streaks) {
        s.mesh.position.set(
          Math.sin(s.angle) * surfaceRadius,
          waxTopY - 0.09 * s.lenScale * streakScale,
          Math.cos(s.angle) * surfaceRadius
        );
        s.mesh.scale.set(1, s.lenScale * streakScale, 1);
      }

      // Update slow dripping liquid wax drops that gather into the bottom puddle
      const meltSpeedMult = 1 + clampedProg * 0.5;
      const fallHeight = Math.max(0.2, waxTopY - -1.01);
      for (const d of drips) {
        if (burning) {
          d.cycle = (d.cycle + dt * d.speed * meltSpeedMult) % 1;
        }
        // 0..0.35: swell at rim; 0.35..0.90: slide slowly down; 0.90..1.0: pool/flatten at bottom
        if (d.cycle < 0.35) {
          const swell = d.cycle / 0.35;
          d.mesh.position.set(
            Math.sin(d.angle) * (surfaceRadius + 0.005),
            waxTopY - 0.02 - swell * 0.025,
            Math.cos(d.angle) * (surfaceRadius + 0.005)
          );
          d.mesh.scale.setScalar(d.size * (0.3 + swell * 0.7));
        } else if (d.cycle < 0.9) {
          const fall = (d.cycle - 0.35) / 0.55;
          const easeFall = fall * fall * 0.55 + fall * 0.45;
          const dropY = waxTopY - 0.045 - easeFall * fallHeight;
          d.mesh.position.set(
            Math.sin(d.angle) * (surfaceRadius + 0.01),
            dropY,
            Math.cos(d.angle) * (surfaceRadius + 0.01)
          );
          d.mesh.scale.set(
            d.size * 0.78,
            d.size * (1.05 + fall * 1.15),
            d.size * 0.78
          );
        } else {
          const poolPhase = (d.cycle - 0.9) / 0.1;
          d.mesh.position.set(
            Math.sin(d.angle) * (surfaceRadius + 0.04 + poolPhase * 0.08),
            -0.995,
            Math.cos(d.angle) * (surfaceRadius + 0.04 + poolPhase * 0.08)
          );
          const fade = 1 - poolPhase * 0.85;
          d.mesh.scale.set(
            d.size * (1.25 + poolPhase * 0.65) * fade,
            d.size * 0.32 * fade,
            d.size * (1.25 + poolPhase * 0.65) * fade
          );
        }
      }

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
      handleGeo.dispose();
      waxGeo.dispose();
      poolGeo.dispose();
      bottomPuddleGeo.dispose();
      wickGeo.dispose();
      emberGeo.dispose();
      eyeGeo.dispose();
      sparkleGeo.dispose();
      blushGeo.dispose();
      smileGeo.dispose();
      dripGeo.dispose();
      streakGeo.dispose();
      outerFlameGeo.dispose();
      innerFlameGeo.dispose();
      smokeGeo.dispose();
      brassMat.dispose();
      waxMat.dispose();
      eyeMat.dispose();
      sparkleMat.dispose();
      blushMat.dispose();
      dripMat.dispose();
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
      <div
        className={`flex flex-col items-center justify-center rounded-2xl bg-[var(--bg-base)] border border-[var(--border-subtle)] ${
          headerMini ? 'w-7 h-7 p-0.5' : compact ? 'w-16 h-16 p-1' : 'p-6'
        } ${className}`}
      >
        <div className={headerMini ? 'text-sm' : compact ? 'text-xl' : 'text-3xl mb-2'}>{isBurning ? '🕯️' : '💨'}</div>
        {!compact && !headerMini && (
          <span className="text-xs font-mono text-[var(--text-muted)]">
            {isBurning ? 'Focus flame burning' : 'Candle paused'}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={
        headerMini
          ? `relative w-7 h-7 bg-transparent overflow-visible ${className}`
          : compact
          ? `relative w-16 h-16 bg-transparent overflow-visible ${className}`
          : `relative w-full h-[230px] sm:h-[265px] rounded-2xl bg-gradient-to-b from-[#07070a]/70 via-[#0e0b09]/60 to-[var(--bg-base)] border border-[var(--border-subtle)] overflow-hidden ${className}`
      }
    />
  );
};

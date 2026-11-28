import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeSandHourglassProps {
  /** Whether the timer is actively running */
  isRunning: boolean;
  /** 0.0 (full top bulb) -> 1.0 (sand drained to bottom bulb) */
  progress: number;
  className?: string;
}

export const ThreeSandHourglass: React.FC<ThreeSandHourglassProps> = ({
  isRunning,
  progress,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ isRunning, progress });
  const [webglError, setWebglError] = useState(false);

  useEffect(() => {
    stateRef.current = { isRunning, progress };
  }, [isRunning, progress]);

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

    const width = container.clientWidth || 84;
    const height = container.clientHeight || 84;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const hourglassGroup = new THREE.Group();
    scene.add(hourglassGroup);

    // Generous camera framing so zero geometry is ever clipped
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
    camera.position.set(0, 0.25, 4.45);
    camera.lookAt(0, 0, 0);

    // Studio & warm sand lighting
    const ambient = new THREE.AmbientLight(0xfff5e4, 0.85);
    scene.add(ambient);
    const keyLight = new THREE.DirectionalLight(0xfff0d4, 1.35);
    keyLight.position.set(2.5, 4, 3.5);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0x93c5fd, 0.65);
    rimLight.position.set(-3, 2, -2.5);
    scene.add(rimLight);
    const sandGlow = new THREE.PointLight(0xffb74d, 1.4, 5, 1.6);
    sandGlow.position.set(0, 0.2, 1.2);
    scene.add(sandGlow);

    // Brass frame material
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd4a238,
      metalness: 0.78,
      roughness: 0.24,
    });
    const darkWoodMat = new THREE.MeshStandardMaterial({
      color: 0x5c3419,
      roughness: 0.55,
      metalness: 0.08,
    });

    // Top & Bottom caps
    const capGeo = new THREE.CylinderGeometry(0.66, 0.66, 0.1, 32);
    const capRimGeo = new THREE.TorusGeometry(0.64, 0.045, 12, 32);

    const topCap = new THREE.Mesh(capGeo, darkWoodMat);
    topCap.position.y = 0.96;
    hourglassGroup.add(topCap);

    const topRim = new THREE.Mesh(capRimGeo, brassMat);
    topRim.rotation.x = Math.PI / 2;
    topRim.position.y = 0.92;
    hourglassGroup.add(topRim);

    const bottomCap = new THREE.Mesh(capGeo, darkWoodMat);
    bottomCap.position.y = -0.96;
    hourglassGroup.add(bottomCap);

    const bottomRim = new THREE.Mesh(capRimGeo, brassMat);
    bottomRim.rotation.x = Math.PI / 2;
    bottomRim.position.y = -0.92;
    hourglassGroup.add(bottomRim);

    // 3 slender brass pillars
    const pillarGeo = new THREE.CylinderGeometry(0.032, 0.032, 1.84, 12);
    const pillarAngles = [Math.PI * 0.22, Math.PI * 0.88, Math.PI * 1.55];
    pillarAngles.forEach((ang) => {
      const pillar = new THREE.Mesh(pillarGeo, brassMat);
      pillar.position.set(Math.cos(ang) * 0.56, 0, Math.sin(ang) * 0.56);
      hourglassGroup.add(pillar);
    });

    // Translucent blown-glass bulbs (upper & lower cones)
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0xe0f2fe,
      transparent: true,
      opacity: 0.22,
      roughness: 0.08,
      metalness: 0.18,
      depthWrite: false,
    });

    const bulbGeo = new THREE.ConeGeometry(0.48, 0.88, 32, 1, false);
    const topGlass = new THREE.Mesh(bulbGeo, glassMat);
    topGlass.rotation.x = Math.PI; // point down to waist
    topGlass.position.y = 0.46;
    hourglassGroup.add(topGlass);

    const bottomGlass = new THREE.Mesh(bulbGeo, glassMat);
    bottomGlass.position.y = -0.46;
    hourglassGroup.add(bottomGlass);

    // Brass waist collar
    const waistGeo = new THREE.TorusGeometry(0.08, 0.025, 10, 24);
    const waistRing = new THREE.Mesh(waistGeo, brassMat);
    waistRing.rotation.x = Math.PI / 2;
    hourglassGroup.add(waistRing);

    // Golden sand material
    const sandMat = new THREE.MeshStandardMaterial({
      color: 0xf6c453,
      roughness: 0.72,
      metalness: 0.05,
      emissive: 0xd97706,
      emissiveIntensity: 0.18,
    });

    // Top sand (inverted cone anchored at waist y = 0.04 so it shrinks downward)
    const topSandGeo = new THREE.ConeGeometry(0.41, 0.72, 28);
    topSandGeo.rotateX(Math.PI);
    topSandGeo.translate(0, 0.36, 0); // tip at y=0, base at y=0.72
    const topSand = new THREE.Mesh(topSandGeo, sandMat);
    topSand.position.y = 0.04;
    hourglassGroup.add(topSand);

    // Bottom sand mound (upright cone anchored at y = -0.89 so it grows upward)
    const bottomSandGeo = new THREE.ConeGeometry(0.42, 0.74, 28);
    bottomSandGeo.translate(0, 0.37, 0); // base at y=0
    const bottomSand = new THREE.Mesh(bottomSandGeo, sandMat);
    bottomSand.position.y = -0.89;
    hourglassGroup.add(bottomSand);

    // Trickling sand stream from waist to bottom mound
    const streamGeo = new THREE.CylinderGeometry(0.014, 0.02, 0.85, 8);
    streamGeo.translate(0, -0.425, 0);
    const streamMat = new THREE.MeshBasicMaterial({
      color: 0xfde047,
      transparent: true,
      opacity: 0.85,
    });
    const streamMesh = new THREE.Mesh(streamGeo, streamMat);
    streamMesh.position.y = 0.02;
    hourglassGroup.add(streamMesh);

    // Falling golden sand grain particles
    const GRAIN_COUNT = 24;
    const grainPos = new Float32Array(GRAIN_COUNT * 3);
    const grainMeta = Array.from({ length: GRAIN_COUNT }, (_, i) => ({
      t: i / GRAIN_COUNT,
      speed: 1.2 + Math.random() * 0.6,
      ox: (Math.random() - 0.5) * 0.045,
      oz: (Math.random() - 0.5) * 0.045,
    }));
    const grainGeo = new THREE.BufferGeometry();
    grainGeo.setAttribute('position', new THREE.BufferAttribute(grainPos, 3));
    const grainMat = new THREE.PointsMaterial({
      color: 0xfef08a,
      size: 0.048,
      transparent: true,
      opacity: 0.9,
    });
    const grainPoints = new THREE.Points(grainGeo, grainMat);
    hourglassGroup.add(grainPoints);

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
    let streamAlpha = stateRef.current.isRunning ? 1 : 0;

    const animate = (now: number) => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      const t = now * 0.001;

      const { isRunning: running, progress: prog } = stateRef.current;
      const clampedProg = Math.max(0.02, Math.min(0.98, prog));

      // Gentle game-style idle turn & float
      hourglassGroup.rotation.y = Math.sin(t * 0.75) * 0.24;
      hourglassGroup.position.y = Math.sin(t * 1.5) * 0.028;

      // Top sand shrinks, bottom sand mound grows
      const topScale = Math.max(0.08, 1 - clampedProg);
      topSand.scale.set(Math.pow(topScale, 0.45), topScale, Math.pow(topScale, 0.45));

      const bottomScale = Math.max(0.12, clampedProg);
      bottomSand.scale.set(0.55 + bottomScale * 0.45, bottomScale, 0.55 + bottomScale * 0.45);

      // Stream & falling grains when running
      const targetStream = running && prog < 0.995 ? 1 : 0;
      streamAlpha += (targetStream - streamAlpha) * Math.min(1, dt * 8);

      const streamLen = Math.max(0.15, 0.9 - bottomScale * 0.72);
      streamMesh.scale.set(1 + Math.sin(t * 18) * 0.15, streamLen / 0.85, 1 + Math.cos(t * 16) * 0.15);
      streamMat.opacity = 0.85 * streamAlpha;
      streamMesh.visible = streamAlpha > 0.02;

      const posAttr = grainGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < GRAIN_COUNT; i++) {
        const g = grainMeta[i];
        if (running) {
          g.t = (g.t + dt * g.speed) % 1;
        }
        const y = 0.02 - g.t * streamLen;
        posAttr.setXYZ(i, g.ox * (0.4 + g.t * 1.4), y, g.oz * (0.4 + g.t * 1.4));
      }
      posAttr.needsUpdate = true;
      grainMat.opacity = 0.9 * streamAlpha;
      grainPoints.visible = streamAlpha > 0.02;

      sandGlow.intensity = running ? 1.5 + Math.sin(t * 4) * 0.2 : 0.9;

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      capGeo.dispose();
      capRimGeo.dispose();
      pillarGeo.dispose();
      bulbGeo.dispose();
      waistGeo.dispose();
      topSandGeo.dispose();
      bottomSandGeo.dispose();
      streamGeo.dispose();
      grainGeo.dispose();
      brassMat.dispose();
      darkWoodMat.dispose();
      glassMat.dispose();
      sandMat.dispose();
      streamMat.dispose();
      grainMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (webglError) {
    return (
      <div className={`w-[84px] h-[84px] flex items-center justify-center text-2xl ${className}`}>
        ⏳
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`relative w-[84px] h-[84px] bg-transparent overflow-visible ${className}`}
    />
  );
};

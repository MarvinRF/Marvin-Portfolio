import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import * as THREE from 'three';

const R2D2 = ({ isMobile }) => {
  const groupRef = useRef();
  const { scene } = useGLTF('./r2d2/scene.gltf');

  // Centralizar o modelo
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center); // move o centro do modelo para a origem
  }, [scene]);

  // Rotação automática
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0001; // velocidade de rotação
    }
  });

  return (
    <group ref={groupRef}>
      <hemisphereLight intensity={0.8} groundColor="gray" />
      <directionalLight intensity={1} position={[5, 5, 5]} castShadow />
      <spotLight intensity={1} position={[0, 5, 5]} angle={0.3} penumbra={0.5} castShadow />
      <primitive
        object={scene}
        scale={isMobile ? 0.015 : 0.01}
        position-y={isMobile ? -0.5 : -0.75}
      />
    </group>
  );
};

const R2D2Canvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handler = e => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ fov: 50, near: 0.1, far: 100, position: [3, 3, 3] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <R2D2 isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default R2D2Canvas;

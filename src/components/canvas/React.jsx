/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const React = ({ isMobile }) => {
  const react_logo = useGLTF('./react_logo/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />

      <primitive
        object={react_logo.scene}
        scale={isMobile ? 0.9 : 1.1}
        position-y={isMobile ? -1.2 : -1.4}
        rotation-y={0}
      />
    </mesh>
  );
};

const ReactLogo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = e => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 55,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <React isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ReactLogo;

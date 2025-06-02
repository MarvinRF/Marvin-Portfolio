import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import CanvasLoader from '../Loader';
import * as THREE from 'three';

const R2D2 = ({ isMobile }) => {
  const { scene, animations } = useGLTF('./r2d2/scene.gltf');
  const { actions, mixer } = useAnimations(animations, scene);

  // Update the mixer on each frame
  useFrame((_, delta) => {
    mixer.update(delta);
  });

  useEffect(() => {
    // Check if the actions and the specific animation exist
    if (actions && actions['Animation']) {
      // Set the animation to loop and play it
      actions['Animation'].setLoop(THREE.LoopRepeat, Infinity).play();
    }

    // Cleanup to stop the animation when the component unmounts
    return () => {
      if (actions && actions['Animation']) {
        actions['Animation'].stop();
      }
    };
  }, [actions]);

  return (
    <mesh>
      <hemisphereLight intensity={6} groundColor="black" />
      <directionalLight intensity={6} position={[1, 7, 6]} castShadow />
      <pointLight intensity={10} position={[2, 3, 2]} distance={10} />
      <spotLight intensity={8} position={[2, 5, 2]} angle={0.3} penumbra={0.5} castShadow />
      <primitive
        object={scene}
        scale={isMobile ? 5.5 : 5}
        position-y={isMobile ? -2.2 : -2.5}
        position-x={isMobile ? 0 : 0}
        rotation-y={0}
      />
    </mesh>
  );
};

const R2D2Canvas = () => {
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
        <R2D2 isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default R2D2Canvas;

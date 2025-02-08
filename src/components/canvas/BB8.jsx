/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from '@react-three/drei';
import CanvasLoader from '../Loader';
import * as THREE from 'three';

const Bb8 = ({ isMobile }) => {
  const { scene, animations } = useGLTF('./bb8_animated/scene.gltf');
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    // A animação "Animation" começa automaticamente quando o modelo é carregado
    if (actions && actions['Animation']) {
      actions['Animation'].play(); // Inicia a animação "Animation"
      actions['Animation'].setLoop(THREE.LoopRepeat, Infinity); // Define o loop da animação
    }
  }, [actions]); // Vai ser chamado apenas quando actions for definido

  return (
    <mesh>
      <hemisphereLight intensity={6} groundColor="black" />
      <directionalLight intensity={6} position={[1, 7, 6]} castShadow />
      <pointLight intensity={10} position={[2, 3, 2]} distance={10} />
      <spotLight
        intensity={8}
        position={[2, 5, 2]}
        angle={0.3}
        penumbra={0.5}
        castShadow
      />
      <primitive
        object={scene}
        scale={isMobile ? 4 : 3}
        position-y={isMobile ? -2.2 : -2.9}
        rotation-y={0}
      />
    </mesh>
  );
};

const Bb8Canvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
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
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Bb8 isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Bb8Canvas;

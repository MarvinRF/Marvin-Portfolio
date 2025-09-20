import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'; // Adicionado useFrame
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import CanvasLoader from '../Loader';
import * as THREE from 'three';

const Bb8 = ({ isMobile }) => {
  const { scene, animations } = useGLTF('./bb8_animated/scene.gltf');
  const { actions, mixer } = useAnimations(animations, scene);

  // Adicionado hook para atualizar o mixer
  useFrame((_, delta) => {
    mixer.update(delta);
  });

  useEffect(() => {
    if (actions && actions.Animation) {
      // Configuração correta da animação
      actions.Animation.setLoop(THREE.LoopRepeat, Infinity) // Configura loop primeiro
        .play(); // Depois inicia a animação
    }

    // Cleanup para parar animação ao desmontar
    return () => {
      if (actions && actions.Animation) {
        actions.Animation.stop();
      }
    };
  }, [actions]);

  return (
    <mesh>
      <hemisphereLight intensity={20} groundColor="gray" />
      <directionalLight
        intensity={10} // antes 6
        position={[5, 5, 5]}
        castShadow
      />
      <spotLight intensity={1} position={[0, 5, 5]} angle={0.3} penumbra={0.5} castShadow />
      <pointLight intensity={10} position={[2, 3, 2]} distance={10} />
      <primitive
        object={scene}
        scale={isMobile ? 0.025 : 0.03}
        position-y={isMobile ? -1.2 : -1.1}
        position-x={isMobile ? 0 : 0}
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
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 50,
        near: 0.1,
        far: 100,
        position: [0, 1, 3], // mais perto e centralizado
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
        <Bb8 isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Bb8Canvas;

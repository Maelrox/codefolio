import { Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { useThree } from '@react-three/fiber';
import DevRoomModel from "./DevRoomModel";
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three'; // This imports the THREE namespace

const Scene = ({ setCameras, tvNumber, textureUrl, updateTvImages }) => {
    const { scene } = useThree();
    const spotLightRef = useRef();
    const pointLightRef = useRef();
  
    // Scene custom illumination
    useEffect(() => {
      if (spotLightRef.current) {
        const spotLightHelper = new THREE.SpotLightHelper(spotLightRef.current);
        scene.add(spotLightHelper);
      }
      if (pointLightRef.current) {
        const pointLightHelper = new THREE.PointLightHelper(pointLightRef.current, 1);
        scene.add(pointLightHelper);
      }
    }, [scene]);
  
    return (
      <>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <DevRoomModel tvNumber={tvNumber} textureUrl={textureUrl} setModel={() => {}} setCameras={setCameras} updateTvImages={updateTvImages} />
          <Environment environmentIntensity={0.10} files="/assets/3d/royal_esplanade_1k.hdr" background />
        </Suspense>
        <EffectComposer>
          <Bloom luminanceThreshold={0.4} luminanceSmoothing={0.1} height={300} intensity={1} />
        </EffectComposer>
      </>
    );
  };

export default Scene;

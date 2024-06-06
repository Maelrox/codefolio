import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import { useEffect, useRef } from "react";
import { useThree } from '@react-three/fiber';

const Controls = () => {
    const { gl, invalidate } = useThree();
    const controlsRef = useRef(null);
  
    useEffect(() => {
      if (controlsRef.current) {
        controlsRef.current.update();
        controlsRef.current.target.set(1,3,1);
      }
    }, []);
  
    return (
      <OrbitControls
        ref={controlsRef}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.7}
        minDistance={2}
        maxDistance={10}
        onUpdate={() => invalidate()}
      />
    );
  };

export default Controls;
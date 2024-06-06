import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const CameraTracker = ({ setCameraPosition, setCameraRotation, setCameraFov }) => {
  const { camera } = useThree();
  const prevPosition = useRef(camera.position.clone());
  const prevRotation = useRef(camera.rotation.clone());
  const prevFov = useRef(camera.fov);

  useFrame(() => {
    // Only update if there are changes
    if (!prevPosition.current.equals(camera.position)) {
      setCameraPosition({
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z
      });
      prevPosition.current.copy(camera.position);
    }
    
    if (!prevRotation.current.equals(camera.rotation)) {
      setCameraRotation({
        x: camera.rotation.x,
        y: camera.rotation.y,
        z: camera.rotation.z
      });
      prevRotation.current.copy(camera.rotation);
    }
    
    if (prevFov.current !== camera.fov) {
      setCameraFov(camera.fov);
      prevFov.current = camera.fov;
    }
  });

  return null;
};

export default CameraTracker;
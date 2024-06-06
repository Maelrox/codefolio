import { useEffect } from "react";
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const CameraManager = ({ cameraToView }) => {
    const { camera } = useThree();

    useEffect(() => {
        if (cameraToView) {
            let frameId;
            const duration = 1000;
            const frameRate = 60;
            const totalFrames = (duration / 1000) * frameRate;
            let currentFrame = 0;

            const initialPosition = camera.position.clone();
            const targetPosition = new THREE.Vector3(cameraToView.position.x, cameraToView.position.y, cameraToView.position.z);

            const initialRotation = camera.rotation.clone();
            const targetRotation = new THREE.Euler(cameraToView.rotation._x, cameraToView.rotation._y, cameraToView.rotation._z);

            const initialFov = camera.fov;
            const targetFov = cameraToView.fov;

            const animate = () => {
                const progress = currentFrame / totalFrames;
                const lerp = (start, end, alpha) => start * (1 - alpha) + end * alpha;
                camera.position.lerpVectors(initialPosition, targetPosition, progress);
                camera.rotation.set(
                    lerp(initialRotation.x, targetRotation.x, progress),
                    lerp(initialRotation.y, targetRotation.y, progress),
                    lerp(initialRotation.z, targetRotation.z, progress)
                );
                camera.fov = lerp(initialFov, targetFov, progress);
                camera.updateProjectionMatrix();
                if (currentFrame < totalFrames) {
                    currentFrame++;
                    frameId = requestAnimationFrame(animate);
                }
            };
            frameId = requestAnimationFrame(animate);
            return () => {
                cancelAnimationFrame(frameId);
            };
        }
    }, [camera, cameraToView]);

    return null;
};

export default CameraManager;
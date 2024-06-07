import { useEffect, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import * as THREE from "three";

const DevRoomModel = ({
  tvNumber,
  textureUrl,
  setModel,
  setCameras,
  updateTvImages
}) => {

  const gltf = useLoader(GLTFLoader, "/assets/3d/dev-room2.glb");
  const newTexture = useLoader(THREE.TextureLoader, textureUrl);
  const emissiveColor = new THREE.Color(0xffffff);

  const processedModel = useMemo(() => {
    if (gltf.cameras && gltf.cameras.length > 0) {
      setCameras(gltf.cameras);
    }
    if (updateTvImages) {
      gltf.scene.traverse((child) => {
        if (child.isMesh && child.material) {
          if (child.material.name === tvNumber) {
            newTexture.center.set(0.5, 0.5);
            newTexture.flipY = false;
            child.material.emissive = emissiveColor;
            child.material.emissiveIntensity = 0.85;
            child.material.roughness = 0.2;
            child.material.metalness = 0.0;
            child.material.needsUpdate = true;
            child.material.emissiveMap = newTexture;
          }
        }
      });
    }
    return gltf.scene;
  }, [
    gltf.cameras,
    gltf.scene,
    newTexture,
    setCameras,
    tvNumber,
    updateTvImages,
  ]);

  useEffect(() => {
    setModel(processedModel);
  }, [processedModel, setModel]);
  return <primitive object={processedModel} />;
};

export default DevRoomModel;

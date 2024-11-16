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

  const processedModel = useMemo(() => {
    if (gltf.cameras && gltf.cameras.length > 0) {
      setCameras(gltf.cameras);
    }
    
    if (updateTvImages) {
      gltf.scene.traverse((child) => {
        if (child.isMesh && child.material) {
          if (child.material.name === tvNumber) {
            // Store original material properties
            const originalEmissive = child.material.emissive.clone();
            const originalEmissiveIntensity = child.material.emissiveIntensity;
            const originalEmissiveMap = child.material.emissiveMap;
            
            // Copy properties from original texture to new texture
            if (originalEmissiveMap) {
              newTexture.colorSpace = originalEmissiveMap.colorSpace;
              newTexture.wrapS = originalEmissiveMap.wrapS;
              newTexture.wrapT = originalEmissiveMap.wrapT;
              newTexture.repeat.copy(originalEmissiveMap.repeat);
              newTexture.offset.copy(originalEmissiveMap.offset);
              newTexture.center.copy(originalEmissiveMap.center);
              newTexture.rotation = originalEmissiveMap.rotation;
              newTexture.minFilter = originalEmissiveMap.minFilter;
              newTexture.magFilter = originalEmissiveMap.magFilter;
              newTexture.format = originalEmissiveMap.format;
              newTexture.type = originalEmissiveMap.type;
              newTexture.anisotropy = originalEmissiveMap.anisotropy;
              newTexture.generateMipmaps = originalEmissiveMap.generateMipmaps;
              newTexture.premultiplyAlpha = originalEmissiveMap.premultiplyAlpha;
              newTexture.unpackAlignment = originalEmissiveMap.unpackAlignment;
              newTexture.encoding = originalEmissiveMap.encoding;
            }
            
            // Setup new texture
            newTexture.center.set(0.5, 0.5);
            newTexture.flipY = false;
            
            // Create new material while preserving properties
            const newMaterial = child.material.clone();
            newMaterial.emissive = originalEmissive;
            newMaterial.emissiveIntensity = originalEmissiveIntensity;
            newMaterial.emissiveMap = newTexture;
            
            // Preserve other material properties
            newMaterial.roughness = child.material.roughness;
            newMaterial.metalness = child.material.metalness;
            newMaterial.needsUpdate = true;
            
            // Apply the new material
            child.material = newMaterial;
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
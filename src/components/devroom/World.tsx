import { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import CameraTracker from "./CameraTracker";
import Controls from "./Controls";
import CameraManager from "./CameraManager";
import Scene from "./Scene";
import CameraStats from "./CameraStats";

const World = ({
  viewName,
  tvNumber,
  textureUrl,
  updateTvImages,
}) => {
  const [cameras, setCameras] = useState([]);
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 0 });
  const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0, z: 0 });
  const [cameraToView, setCameraToView] = useState();
  const [cameraFov, setCameraFov] = useState(45);
  const [controlsEnabled, setControlsEnabled] = useState(false);

  //Get the camera by name from glb model
  useEffect(() => {
    if (cameras.length > 0) {
      const matchingCamera = cameras.find((camera) => camera.name === viewName);
      if (matchingCamera) {
        setCameraToView(matchingCamera);
        console.log("Camera view changed to: " + viewName);
      }
    }
  }, [cameras, viewName]);

  //Avoid re-rendering camera tracker if the camera haven't changed its position
  const memoizedCameraPosition = useMemo(
    () => cameraPosition,
    [cameraPosition]
  );

  const toggleControls = () => {
    setControlsEnabled(!controlsEnabled);
  };

  return (
    <div>
      <button
        className="fixed z-10 right-0 bg-pink-700 p-2 text-white"
        onClick={toggleControls}
      >
        {controlsEnabled ? "Disable Controls" : "Enable Controls"}
      </button>
      <Canvas style={{ width: "100vw", height: "45vh" }}>
        <Stats className="gpu-stats" />
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <Scene
            setCameras={setCameras}
            tvNumber={tvNumber}
            textureUrl={textureUrl}
            updateTvImages={updateTvImages}
          />
        </Suspense>
        <CameraManager cameraToView={cameraToView} />
        {controlsEnabled && <Controls />}
        <CameraTracker
          setCameraPosition={setCameraPosition}
          setCameraRotation={setCameraRotation}
          setCameraFov={setCameraFov}
        />
      </Canvas>
      <CameraStats
        cameraPosition={memoizedCameraPosition}
        cameraRotation={cameraRotation}
      />
    </div>
  );
};

export default World;

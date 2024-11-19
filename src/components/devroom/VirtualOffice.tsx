import { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import CameraTracker from "./CameraTracker";
import Controls from "./Controls";
import CameraManager from "./CameraManager";
import Scene from "./Scene";
import CameraStats from "./CameraStats";

const VirtualOffice = ({
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
  const [isMobile, setIsMobile] = useState(false);

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

  const memoizedCameraPosition = useMemo(
    () => cameraPosition,
    [cameraPosition]
  );

  const toggleControls = () => {
    setControlsEnabled(!controlsEnabled);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 960);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  return (
    <div>
      <button
        className="absolute z-10 right-0 md:right-1/2 bg-primary-100 p-2 text-white"
        onClick={toggleControls}
      >
        {controlsEnabled ? "Disable Controls" : "Enable Controls"}
      </button>
      <Canvas style={{
        width: isMobile ? "100vw" : "50vw",
        height: "45vh"
      }}>
        <Stats className="gpu-stats !absolute" />
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

export default VirtualOffice;

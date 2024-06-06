const CameraStats = ({ cameraPosition, cameraRotation }) => {
  return (
    <div className="absolute top-20 text-sm text-white ">
      {cameraPosition && cameraRotation ? (
        <>
          Camera Position:{" "}
          {`x: ${cameraPosition.x.toFixed(2)}, y: ${cameraPosition.y.toFixed(2)}, z: ${cameraPosition.z.toFixed(2)}`}
          <br />
          Camera Rotation:{" "}
          {`x: ${(cameraRotation.x * (180 / Math.PI)).toFixed(2)}°, y: ${(cameraRotation.y * (180 / Math.PI)).toFixed(2)}°, z: ${(cameraRotation.z * (180 / Math.PI)).toFixed(2)}°`}
        </>
      ) : (
        <p>Waiting for camera data...</p>
      )}
    </div>
  );
};

export default CameraStats;

import React, { useState } from "react";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Repository from "../components/Repository";
import World from "../components/devroom/World";

const HomePage: React.FC = () => {
  // Controls camera position using camera name from glb model
  const [viewName, setViewName] = useState("InitialView");
  // Controls tv images
  const [tvNumber, setTvNumber] = useState("");
  const [textureUrl, setTextureUrl] = useState("/assets/3d/white.jpg");
  const [updateTvImages, setUpdateTvImages] = useState(false); //Don't update images use the default glb texture for tvs

  const handleViewChange = (
    newView: string,
    tv: string,
    textureUrl: string
  ) => {
    setViewName(newView);
    setTvNumber(tv);
    setTextureUrl(textureUrl);
    setUpdateTvImages(true);
  };

  return (
    <div>
      <Header />
      <World viewName={viewName} tvNumber={tvNumber} textureUrl={textureUrl} updateTvImages={updateTvImages} />
      <Portfolio onViewChange={handleViewChange} />
      <Repository />
    </div>
  );
};

export default HomePage;

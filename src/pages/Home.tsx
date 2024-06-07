import React, { useState } from "react";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import World from "../components/devroom/World";
import Repository from "../components/Repository";

const Home: React.FC = () => {

  const [viewName, setViewName] = useState("InitialView");
  const [tvNumber, setTvNumber] = useState("");
  const [textureUrl, setTextureUrl] = useState("/assets/3d/white.jpg");
  const [updateTvImages, setUpdateTvImages] = useState(false); //Don't update images use the default glb texture for tvs
  const [categoryName, setCategoryName] = useState("Backend Development");

  const handleViewChange = (
    newView: string,
    tv: string,
    textureUrl: string,
    name: string,
  ) => {
    setViewName(newView);
    setTvNumber(tv);
    setTextureUrl(textureUrl);
    setUpdateTvImages(true);
    setCategoryName(name);
  };

  return (
    <div>
      <Header />
      <World viewName={viewName} tvNumber={tvNumber} textureUrl={textureUrl} updateTvImages={updateTvImages} />
      <Portfolio onViewChange={handleViewChange} />
      <Repository category={categoryName}/>
    </div>
  );
};

export default Home;

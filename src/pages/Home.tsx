import React, { useState } from "react";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Repository from "../components/Repository";
import VirtualOffice from "../components/devroom/VirtualOffice";

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
      <div className="flex flex-col lg:flex-row h-full">
        <div className="flex-1 h-full">
          <VirtualOffice viewName={viewName} tvNumber={tvNumber} textureUrl={textureUrl} updateTvImages={updateTvImages} />
        </div>
        <div className="flex-1 h-full">
          <Portfolio onViewChange={handleViewChange} />
        </div>
      </div>
      <div>
        <Repository category={categoryName} />
      </div>
    </div>
  );
};

export default Home;

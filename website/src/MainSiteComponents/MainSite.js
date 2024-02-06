import React, { useState } from "react";
import LivvysBestQuotes from "./LivvysBestQuotes";
import OurYearTogether from "./OurYearTogether";
import PlayerBios from "./PlayerBios";
import AllTimeTopPhotos from "./AllTimeTopPhotos";
import './MainSiteComponents.css';

const MainSite = () => {
  const [selectedTab, setSelectedTab] = useState("LivvysBestQuotes");

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  const tabs = [
    { label: "Livvy's Best Quotes", id: "LivvysBestQuotes" },
    { label: "Player Bios", id: "PlayerBios" },
    { label: "All-Time Top Photos", id: "AllTimeTopPhotos" },
    { label: "Our Year Together!", id: "OurYearTogether" },
  ];

  const tabComponents = {
    LivvysBestQuotes: <LivvysBestQuotes />,
    PlayerBios: <PlayerBios />,
    AllTimeTopPhotos: <AllTimeTopPhotos />,
    OurYearTogether: <OurYearTogether />
  };

  return (
    <div>
      <nav className="horizontal-nav">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={selectedTab === tab.id ? "active" : ""}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </nav>
      {tabComponents[selectedTab]}
    </div>
  );
};

export default MainSite;

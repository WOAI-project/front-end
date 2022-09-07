import React, { useState } from "react";
import './Tabs.css';

import ZeroMint from "../AllTabs/ZeroMint";
import ZeroGenerate from "../AllTabs/ZeroGenerate";
import ZeroView from "../AllTabs/ZeroView";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("ZeroMint");
  const handleZeroMint = () => {
    setActiveTab("ZeroMint");
  };
  const handleZeroGenerate = () => {
    setActiveTab("ZeroGenerate");
  };
  const handleZeroView = () => {
    setActiveTab("ZeroView");
  };
  return (
    <div className="Tabs">
      <ul className="nav">
        <li className={activeTab === "ZeroMint" ? "active" : ""} onClick={handleZeroMint}>Mint</li>
        <li className={activeTab === "ZeroGenerate" ? "active" : ""} onClick={handleZeroGenerate}>Generate</li>
        <li className={activeTab === "ZeroView" ? "active" : ""} onClick={handleZeroView}>View</li>
      </ul>
      <div className="outlet">
        {activeTab === "ZeroMint" ? <ZeroMint /> : activeTab === "ZeroGenerate" ? <ZeroGenerate /> : <ZeroView />}
      </div>
    </div>
  );
};
export default Tabs;
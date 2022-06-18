import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters";

function App() {
  const [areaData, setAreaData] = useState([]);
  const [hostData, setHostData] = useState([]);
  const [selectedHost, setSelectedHost] = useState('');

  useEffect(() => {
    fetch("http://localhost:3001/areas")
      .then(r => r.json())
      .then(areas => setAreaData(areas))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then(r => r.json())
      .then(hosts => setHostData(hosts))
  }, [])

  const handleSelectedHost = (host) => {
    setSelectedHost(host)
  }
  
  const updateStatus = (updatedHost) => {
    const updatedHosts = hostData.map(host => {
      if (host.id === updatedHost.id) return updatedHost;
      return host;
    })
    setHostData(updatedHosts);
    setSelectedHost(updatedHost)
  }

  return (
    <Segment id="app">
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      <WestworldMap 
        hostData={hostData} 
        areaData={areaData} 
        selectedHost={selectedHost}
        handleSelectedHost={handleSelectedHost}
      />
      <Headquarters 
        hostData={hostData} 
        selectedHost={selectedHost} 
        handleSelectedHost={handleSelectedHost}
        updateStatus={updateStatus} 
        areaData={areaData}
      />
    </Segment>
  );
}

export default App;

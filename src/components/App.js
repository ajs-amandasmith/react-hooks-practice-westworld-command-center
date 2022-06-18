import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters";

function App() {
  const [hostData, setHostData] = useState([]);
  const [selectedHost, setSelectedHost] = useState('');

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then(r => r.json())
      .then(hosts => setHostData(hosts))
  }, [])

  const handleSelectedHost = (host) => {
    setSelectedHost(host)
  }
  
  const updateActiveStatus = (updatedHost) => {
    console.log(updatedHost)
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
      <WestworldMap hostData={hostData} />
      <Headquarters 
        hostData={hostData} 
        selectedHost={selectedHost} 
        handleSelectedHost={handleSelectedHost}
        updateActiveStatus={updateActiveStatus} 
      />
    </Segment>
  );
}

export default App;

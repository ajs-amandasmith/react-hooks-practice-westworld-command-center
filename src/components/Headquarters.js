import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage"
import LogPanel from "./LogPanel";

function Headquarters({ hostData, selectedHost, handleSelectedHost, updateStatus, areaData, activateAll }) {
  const [currentLogs, setCurrentLogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/logs")
      .then(r => r.json())
      .then(allLogs => setCurrentLogs(allLogs))
  }, [])

  function updateLogs(newLog) {
    fetch("http://localhost:3001/logs", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newLog)
    })
      .then(r => r.json())
      .then(log => {
        const newLogs = [newLog, ...currentLogs];
        setCurrentLogs(newLogs);
      })
  }

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage 
          hostData={hostData} 
          selectedHost={selectedHost} 
          handleSelectedHost={handleSelectedHost} 
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details 
          selectedHost={selectedHost} 
          updateStatus={updateStatus} 
          areaData={areaData}
          hostData={hostData}
          updateLogs={updateLogs}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        <LogPanel 
          updateStatus={updateStatus} 
          hostData={hostData} 
          activateAll={activateAll} 
          currentLogs={currentLogs}
          updateLogs={updateLogs}
        />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;

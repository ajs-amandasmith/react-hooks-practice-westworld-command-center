import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters";

function App() {
  const [hostData, setHostData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then(r => r.json())
      .then(hosts => setHostData(hosts))
  }, [])

  return (
    <Segment id="app">
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      <WestworldMap hostData={hostData} />
      <Headquarters hostData={hostData} />
    </Segment>
  );
}

export default App;

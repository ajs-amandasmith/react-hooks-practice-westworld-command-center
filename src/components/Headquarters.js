import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage"

function Headquarters({ hostData, selectedHost, handleSelectedHost, updateStatus, areaData }) {
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
        />
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;

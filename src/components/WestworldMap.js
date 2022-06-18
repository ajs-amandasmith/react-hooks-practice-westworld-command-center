import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({ hostData, areaData, selectedHost, handleSelectedHost }) {

  const displayAreas = areaData.map(area => (
    <Area 
      key={area.id} 
      area={area} 
      hostData={hostData} 
      selectedHost={selectedHost} 
      handleSelectedHost={handleSelectedHost}
    />
  ))

  return (
    <Segment id="map">
      {/* What should we render on the map? */}
      {displayAreas}
    </Segment>
  );
}

export default WestworldMap;

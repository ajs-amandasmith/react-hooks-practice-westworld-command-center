import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({ hostData }) {
  const [areaData, setAreaData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/areas")
      .then(r => r.json())
      .then(areas => setAreaData(areas))
  }, [])

  const displayAreas = areaData.map(area => (
    <Area key ={area.id} area={area} hostData={hostData} />
  ))

  return (
    <Segment id="map">
      {/* What should we render on the map? */}
      {displayAreas}
    </Segment>
  );
}

export default WestworldMap;

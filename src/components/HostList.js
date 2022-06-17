import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({ hostData, selectedHost, handleSelectedHost }) {
  const displayHosts = hostData.map(host => (
    <Host 
      key={host.id} 
      host={host} 
      selectedHost={selectedHost} 
      handleSelectedHost={handleSelectedHost} 
    />
  ))
  return (
    <Card.Group itemsPerRow={6}>{displayHosts}</Card.Group>
  );
}

export default HostList;

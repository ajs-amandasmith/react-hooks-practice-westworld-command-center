import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({ hostData }) {
  const displayHosts = hostData.map(host => (
    <Host key={host.id} host={host} />
  ))
  return (
    <Card.Group itemsPerRow={6}>{displayHosts}</Card.Group>
  );
}

export default HostList;

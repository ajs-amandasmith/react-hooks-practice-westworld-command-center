import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, selectedHost, handleSelectedHost }) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  return (
    <Card
      className={host.id === selectedHost.id ? "host selected" : "host"}
      onClick={e => handleSelectedHost(host)}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;

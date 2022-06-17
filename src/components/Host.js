import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host }) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  return (
    <Card
      className="host selected"
      onClick={/* On Click what? */ null}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;

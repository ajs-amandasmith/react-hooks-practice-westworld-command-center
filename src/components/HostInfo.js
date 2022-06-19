import React, { useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({ selectedHost, updateStatus, areaData, hostData }) {
  // This state is just to show how the dropdown component works.
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.

  // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  const cleanHost = selectedHost.area.replace(/_/g, ' ').split().map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  const cleanArea = areaData.map(area => area.name.replace(/_/g, ' ').split().map(word => word[0].toUpperCase() + word.slice(1)).join(' '))
  const areaArray = cleanArea.map(area => {
    return {key: area, text: area, value: area}
  })

  const [options] = useState(areaArray);

  function handleOptionChange(e, { value }) {
    const newValue = value.replace(/ /g, '_').toLowerCase();
    const hostCount = hostData.filter(host => host.area === newValue).length
    const area = areaData.filter(area => area.name === newValue)[0]
    if ((hostCount + 1) <= area.limit) {
      fetch(`http://localhost:3001/hosts/${selectedHost.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          area: newValue
        })
      })
        .then(r => r.json())
        .then(updatedHost => updateStatus(updatedHost))
    } else {
      alert (`HEY!! You got too many hosts in ${area.name}. The limit for that area is ${area.limit}. You gotta fix that!`)
    }
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  function handleRadioChange() {
    fetch(`http://localhost:3001/hosts/${selectedHost.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        active: !selectedHost.active
    })
    })
      .then(r => r.json())
      .then(host => updateStatus(host))
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={selectedHost.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {selectedHost.firstName} | {selectedHost.gender === 'Male' ? <Icon name="man" /> : <Icon name="woman" />}
              {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={selectedHost.active ? "Active" : "Decommissioned"}
                checked={selectedHost.active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={cleanHost}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;

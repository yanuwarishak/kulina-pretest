import React from "react";

import {
  LocationCard,
  AlamatPengantaran,
  Destination,
  ArrowIcon,
  DownArrowIcon,
  DestinationContainer,
} from "./location-container.styles";

class LocationContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      location: [],
    };
  }

  render() {
    return (
      <LocationCard>
        <ArrowIcon>&#8592;</ArrowIcon>
        <div>
          <AlamatPengantaran>ALAMAT PENGANTARAN</AlamatPengantaran>
          <DestinationContainer>
            <Destination>Tokopedia Tower</Destination>
            <DownArrowIcon>&#8964;</DownArrowIcon>
          </DestinationContainer>
        </div>
      </LocationCard>
    );
  }
}

export default LocationContainer;

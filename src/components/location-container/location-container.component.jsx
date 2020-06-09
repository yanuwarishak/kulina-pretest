import React, { useState } from "react";

import LocationModal from "../location-modal/location-modal.component";

import {
  LocationCard,
  AlamatPengantaran,
  Destination,
  ArrowIcon,
  DownArrowIcon,
  DestinationContainer,
} from "./location-container.styles";

const LocationContainer = () => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div>
      <LocationCard>
        <ArrowIcon>&#8592;</ArrowIcon>
        <div>
          <AlamatPengantaran>ALAMAT PENGANTARAN</AlamatPengantaran>
          <DestinationContainer>
            <Destination>Tokopedia Tower</Destination>
            <DownArrowIcon onClick={openModal}>&#8964;</DownArrowIcon>
          </DestinationContainer>
        </div>
      </LocationCard>
      {show ? <LocationModal closeModal={closeModal} /> : null}
    </div>
  );
};

export default LocationContainer;

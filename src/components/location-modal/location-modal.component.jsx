import React from "react";

import {
  ModalContainer,
  CloseButton,
  //   ModalOverlay,
  ModalText,
  SearchInput,
  PoweredBy,
} from "./location-modal.styles";
import "./location-modal.styles";

const LocationModal = (props) => {
  const { closeModal } = props;
  return (
    <ModalContainer>
      <CloseButton onClick={closeModal}>X</CloseButton>
      <ModalText>Cek makanan yang tersedia di lokasi kamu!</ModalText>
      <SearchInput placeholder="Search Locations" type="text" />
      <PoweredBy>Powered by Google</PoweredBy>
    </ModalContainer>
  );
};

export default LocationModal;

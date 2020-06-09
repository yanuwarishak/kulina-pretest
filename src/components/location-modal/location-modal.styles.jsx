import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 8px 8px 0px 0px;
  font-family: Helvetica, Arial, sans-serif;

  transform: translateY(100%);
`;

export const PoweredBy = styled.p`
  font-size: 12px;
  font-weight: 250;
`;

export const SearchInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 75%;
  color: black;
  background: white;
  border-radius: 3px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  text-align: center;
  top: 0;
  bottom: 0;
  width: 370px;
  height: 100%;
  background: #0000003a;
  transition: opacity 0.2s ease;
`;

export const CloseButton = styled.h3`
  padding: 12px;
  text-align: right;
  cursor: pointer;
`;

export const ModalText = styled.h3`
  text-align: left;
  margin-left: 12px;
  margin-top: -12px;
`;

import styled, { css } from "styled-components";

export const TabContainer = styled.div`
  text-align: center;
  margin: 0px 25px;
  display: flex;
  border-radius: 8px;
`;

export const TabButton = styled.button`
  width: 50%;
  font-family: "Open Sans Condensed";
  color: #6e7679;
  font-weight: 500;
  font-size: 12px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 1;
  background: white;
  border: 1px;
  border-style: solid;
  border-color: #424749;
  outline: 0;
  border-radius: ${(props) => {
    if (props.type === "Lunch") {
      return "8px 0px 0px 8px";
    } else if (props.type === "Dinner") {
      return "0px 8px 8px 0px";
    }
  }};

  ${({ active }) =>
    active &&
    `
    background: #424749;
    color: white;
    opacity: 1;
    
  `}
`;

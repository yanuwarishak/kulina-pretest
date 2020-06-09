import styled from "styled-components";

export const CartContainerStyled = styled.div`
  width: 350px;
  height: 50px;
  text-align: center;

  background-color: #a23530;
  color: white;

  border-radius: 6px;
  border: 1px solid #a23530;

  position: fixed;
  bottom: 0%;
  margin-bottom: 20px;
`;

export const CartInformation = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemsPrice = styled.p`
  font-family: "Open Sans Condensed";
  font-size: 12px;
  text-align: left;
  font-weight: 500;
  color: white;
  margin: 8px 0px 0px 8px;
`;

export const OngkosKirim = styled.p`
  font-family: "Open Sans Condensed";
  font-size: 12px;
  text-align: left;
  font-weight: 250;
  color: white;
  margin: 0px 0px 8px 8px;
`;

export const Title = styled.h2`
  font-family: "Open Sans Condensed";
  color: #424749;
  font-size: 16px;
  margin: 6px 0px 12px 0px;
`;

export const AddButton = styled.button`
  float: right;
  border-radius: 6px;
  margin: 6px 0px 12px 0px;
  width: 80px;
  height: 30px;
  font-size: 12px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  background-color: #f9423a;
  color: white;
  border: none;
  text-align: center;
`;

export const CartIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  text-align: center;
  margin: 12px 12px 12px 0px;
`;

export const ArrowIcon = styled.div`
  margin-left: 8px;
`;

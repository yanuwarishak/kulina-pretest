import styled from "styled-components";

export const FoodCard = styled.div`
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: 25px;
  margin-top: 25px;

  &:last-child {
        margin-bottom: 75px;
    }
`;

export const PhotoContainer = styled.img`
  width: 325px;
  height: 250px;
  border-radius: 5px;
  object-fit: cover;
`;

export const Rating = styled.p`
  font-family: 'Open Sans Condensed';
  color: #6e7679;
  font-weight: 500;
  margin: 6px 0px 0px 0px;
  font-size: 12px;
`

export const Title = styled.h2`
  font-family: 'Open Sans Condensed';
  color: #424749;
  font-size: 16px;
  margin: 6px 0px 12px 0px;
`

export const ProvidedBy = styled.p`
  font-family: 'Open Sans Condensed';
  font-size: 12px;
  font-weight: 500;
  color: #6e7679;
  margin: -10px 0px 12px 0px;
`

export const Price = styled.p`
  font-family: 'Open Sans Condensed';
  text-align: center;
  color: #424749;
  font-weight: 500;
  margin: 6px 0px 12px 0px;
  font-size: 16px;

`

export const TextContainer = styled.div`
  text-align: left;
  margin-left: 10px;
`;

export const PriceAndCart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
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
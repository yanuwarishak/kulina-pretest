import React from "react";
import { connect } from "react-redux";

import {
  FoodCard,
  PhotoContainer,
  TextContainer,
  PriceAndCart,
  Title,
  Price,
  ProvidedBy,
  Rating,
  AddButton
} from "./food-menu.styles";

import { addItem } from "../../redux/cart/cart.actions";

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

const FoodMenu = ({ addItem, title, imageUrl, price, providedBy, kitchen, rating }) => (
  <FoodCard>
    <PhotoContainer src={imageUrl} />
    <TextContainer>
      <Rating>{rating} &#9733;</Rating>
      <Title>{title}</Title>
      <ProvidedBy>by {providedBy} &#183; {kitchen}</ProvidedBy>
    </TextContainer>
    <PriceAndCart>
      <Price>Rp. {price.toLocaleString('id-ID')}</Price>
      <AddButton type="button" onClick={() => addItem({title, providedBy, kitchen, price})}>
        ADD +
      </AddButton>
    </PriceAndCart>
  </FoodCard>
);

export default connect(null, mapDispatchToProps)(FoodMenu);
// export default FoodMenu;

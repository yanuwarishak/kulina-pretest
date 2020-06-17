import React from "react";
import { connect } from "react-redux";

import { ReactComponent as CartIcon } from "../../assets/shopping-cart.svg";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
  CartContainerStyled,
  CartInformation,
  ItemsPrice,
  OngkosKirim,
  CartIconContainer,
  ArrowIcon,
} from "./cart-container.styles";
// import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

const CartContainer = ({ toggleCartHidden, cartItems }) => {
  const cartPrice = cartItems.map(a => a.price);
  const total = cartPrice.reduce((prev, next) => { return prev + next}, 0);

  return (
    <CartContainerStyled onClick={toggleCartHidden}>
      <CartInformation>
        <div>
          <ItemsPrice>
            {cartItems.length} Items | Rp. {total.toLocaleString('id-ID')}
          </ItemsPrice>
          <OngkosKirim>Termasuk Ongkos Kirim</OngkosKirim>
        </div>
        <CartIconContainer>
          <CartIcon fill="white" />
          <ArrowIcon>&#62;</ArrowIcon>
        </CartIconContainer>
      </CartInformation>
    </CartContainerStyled>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

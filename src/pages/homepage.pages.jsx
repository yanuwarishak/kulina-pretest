import React from "react";
import { connect } from "react-redux";

import { HomepageContainer } from "./homepage.styles";


import MenuContainer from "../components/menu-container/menu-container.component";
import CartContainer from "../components/cart-container/cart-container.component";
import Header from "../components/header/header.component";

// import DatePicker from "react-horizontal-datepicker";

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

const Homepage = ({cartItems}) => (
  <HomepageContainer>
    <Header/>
    <MenuContainer />
    {cartItems.length ? <CartContainer /> : null}
  </HomepageContainer>
);

export default connect(mapStateToProps)(Homepage);

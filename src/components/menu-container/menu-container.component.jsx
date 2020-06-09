import React from "react";

import FoodMenu from "../food-menu/food-menu.component";

import MENU_LIST from "./food-menu.data";

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: MENU_LIST,
    };
  }

  render() {
    const { menu } = this.state;
    return (
      <div>
        {menu.map(({ id, ...otherProps }) => (
          <FoodMenu key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default MenuContainer;

import React from "react";

import { HeaderCard, DateNow, DatePickerContainer } from "./header.styles";

import LocationContainer from "../location-container/location-container.component";
import LunchDinnerContainer from "../lunchdinner-container/lunchdinner-container.component";
import DatePicker from "../datepicker/DatePicker";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      dateNow: "",
    };
  }

  selectedDay = (val) => {
    const date = val.toString();
    this.setState({
      dateNow: date,
    });
  };

  render() {
    return (
      <HeaderCard>
        <LocationContainer />
        <DatePickerContainer>
          <DatePicker
            endDate={14}
            color={"#424749"}
            getSelectedDay={this.selectedDay}
          />
        </DatePickerContainer>
        <LunchDinnerContainer />
        <DateNow>{this.state.dateNow}</DateNow>
      </HeaderCard>
    );
  }
}

export default Header;

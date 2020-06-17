import React from "react";
import { connect } from "react-redux";
import { DateContainer, DateText } from "./selected-date.styles";

const mapStateToProps = ({ date: { activeDay } }) => ({
  activeDay,
});

const SelectedDate = ({ activeDay }) => (
  <DateContainer>
    <DateText>{activeDay}</DateText>
  </DateContainer>
);

export default connect(mapStateToProps)(SelectedDate);

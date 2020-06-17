import React from "react";
import { connect } from "react-redux";

import { HeaderCard, DatePickerContainer } from "./header.styles";
import { setActiveDay } from "../../redux/date/date.actions";

import LocationContainer from "../location-container/location-container.component";
import LunchDinnerContainer from "../lunchdinner-container/lunchdinner-container.component";
import DatePicker from "../datepicker/DatePicker";

const mapDispatchToProps = (dispatch) => ({
  setActiveDay: (item) => dispatch(setActiveDay(item)),
});

const Header = ({setActiveDay}) => {
  const selectedDay = (val) => {
    const date = val.toString();
    var dateNow = date.substring(8, 10);
    var monthNow = date.substring(4, 7);
    var yearNow = date.substring(11, 15);
    var dayNow = date.substring(0, 3);

    switch (dayNow) {
      case "Sun":
        dayNow = "Minggu";
        break;
      case "Mon":
        dayNow = "Senin";
        break;
      case "Tue":
        dayNow = "Selasa";
        break;
      case "Wed":
        dayNow = "Rabu";
        break;
      case "Thu":
        dayNow = "Kamis";
        break;
      case "Fri":
        dayNow = "Jum'at";
        break;
      case "Sat":
        dayNow = "Sabtu";
        break;
      default:
    }

    switch (monthNow) {
      case "Jan":
        monthNow = "Januari";
        break;
      case "Feb":
        monthNow = "Februari";
        break;
      case "Mar":
        monthNow = "Maret";
        break;
      case "Apr":
        monthNow = "April";
        break;
      case "May":
        monthNow = "Mei";
        break;
      case "Jun":
        monthNow = "Juni";
        break;
      case "Jul":
        monthNow = "Juli";
        break;
      case "Aug":
        monthNow = "Agustus";
        break;
      case "Sep":
        monthNow = "September";
        break;
      case "Oct":
        monthNow = "Oktober";
        break;
      case "Nov":
        monthNow = "November";
        break;
      case "Dec":
        monthNow = "Desember";
        break;
      default:
    }

    const activeDay = dayNow + ", " + dateNow + " " + monthNow + " " + yearNow;
    setActiveDay(activeDay);
    console.log(activeDay);
  };

  return (
    <HeaderCard>
      <LocationContainer />
      <DatePickerContainer>
        <DatePicker color={"#424749"} getSelectedDay={selectedDay} />
      </DatePickerContainer>
      <LunchDinnerContainer />
    </HeaderCard>
  );
};

export default connect(null, mapDispatchToProps)(Header);
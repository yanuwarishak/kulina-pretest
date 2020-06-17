/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./DatePicker.module.css";
import { addDays, format, isSameDay, isWeekend } from "date-fns";
import { id } from "date-fns/locale";

export default function DatePicker({
  selectDate,
  getSelectedDay,
  color,
  //   labelFormat,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const firstSection = { marginLeft: "0px" };
  const startDate = new Date();
  const primaryColor = color || "rgb(54, 105, 238)";

  const selectedStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: `2px solid ${primaryColor}`,
    color: "rgb(255,255,255)",
    background: primaryColor,
  };

  const disabledStyle = {
    width: "45px",
    height: "45px",
    color: "#dddddd",
    borderRadius: "50%",
    background: "rgb(255,255,255)",
    cursor: "default",
  };

  const getStyles = (day) => {
    if (isSameDay(day, selectedDate) && !isWeekend(day)) {
      return selectedStyle;
    } else if (isWeekend(day)) {
      return disabledStyle;
    }
    return null;
  };

  const getDisabled = (day) => {
    if (isWeekend(day)) {
      return true;
    }
  };

  const getId = (day) => {
    if (isSameDay(day, selectedDate)) {
      return "selected";
    } else {
      return "";
    }
  };

  function renderDays() {
    const dayFormat = "E";
    const dateFormat = "d";
    const dateCollection = [];
    let days = [];
    for (let i = 0; i <= 0; i++) {
      //This evaluate j = 17
      for (let j = 0; j <= 14; j++) {
        days.push(
          <button
            id={`${getId(addDays(startDate, j))}`}
            className={styles.dateDayItem}
            style={getStyles(addDays(startDate, j))}
            key={addDays(startDate, j)}
            onClick={() => onDateClick(addDays(startDate, j))}
            disabled={getDisabled(addDays(startDate, j))}
          >
            <div className={styles.dayLabel}>
              {format(addDays(startDate, j), dayFormat, {
                locale: id,
              }).toUpperCase()}
            </div>
            <div className={styles.dateLabel}>
              {format(addDays(startDate, j), dateFormat)}
            </div>
          </button>
        );
      }
      dateCollection.push(
        <div
          className={styles.daysContainer}
          style={i === 0 ? firstSection : null}
        >
          {days}
        </div>
      );
      days = [];
    }

    return (
      <div
        id={"container"}
        className={styles.dateListScrollable}
        disabled={isWeekend(days)}
      >
        {dateCollection}
      </div>
    );
  }

  const onDateClick = (day) => {
    setSelectedDate(day);
    if (getSelectedDay) {
      getSelectedDay(day);
    }
  };

  useEffect(() => {
    if (getSelectedDay) {
      if (selectDate) {
        getSelectedDay(selectDate);
      } else {
        getSelectedDay(startDate);
      }
    }
  }, []);

  useEffect(() => {
    if (selectDate) {
      if (!isSameDay(selectedDate, selectDate)) {
        setSelectedDate(selectDate);
        setTimeout(() => {
          let view = document.getElementById("selected");
          if (view) {
            view.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
          }
        }, 20);
      }
    }
  }, [selectDate]);

  return <div className={styles.container}>{renderDays()}</div>;
}

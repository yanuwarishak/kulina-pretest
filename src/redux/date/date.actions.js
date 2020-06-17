import dateActionTypes from "./date.types";

export const setActiveDay = (item) => ({
  type: dateActionTypes.SET_ACTIVE_DAY,
  payload: item,
});

import dateActionTypes from "./date.types";

const INITIAL_STATE = {
  activeDay: "",
};

const dateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dateActionTypes.SET_ACTIVE_DAY:
      return {
        activeDay: [action.payload],
      };
    default:
      return state;
  }
};

export default dateReducer;

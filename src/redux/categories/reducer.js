import {
  ERROR_FETCHING_CATEGORIES,
  START_FETCHING_CATEGORIES,
  SUCCESS_FETCHING_CATEGORIES,
} from "./constans";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statusList.idle,
};

export default function reducer(state = initialState, action) {
  // console.log("Reducer called:", action.type, "State before:", state);
  switch (action.type) {
    case START_FETCHING_CATEGORIES:
      return {
        ...state,
        status: statusList.process,
      };

    case SUCCESS_FETCHING_CATEGORIES:
      // console.log("Updating data with:", action.categories);
      return { ...state, status: statusList.success, data: action.categories };

    case ERROR_FETCHING_CATEGORIES:
      return { ...state, status: statusList.error };

    default:
      return state;
  }
}

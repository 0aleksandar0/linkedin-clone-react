import { SET_LOADING_STATUS, GET_ARTICLES } from "../actions/actionType";

export const initState = {
  articles: [],
  loading: false, // is used for not seeing the loading circle at the start
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case SET_LOADING_STATUS:
      return {
        ...state, // return whatever the state previously was and then load the loading state on top
        loading: action.status,
      };
    default:
      return state;
  }
};

export default articleReducer;

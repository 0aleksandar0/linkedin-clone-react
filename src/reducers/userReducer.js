/* import { bindActionCreators } from "redux"; */
import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  // reducers updates the state in this case userReducer is the state updater
  switch (action.type) {
    case SET_USER:
      return {
        ...state, //the case is that SET_USER takes the existing state
        user: action.user, // and it adds the new user to it
      };
    default:
      return state; // if the state doesn't change, it just returns the default state of whatever it was before the user was there
  }
};

// redux is immutable
// every state is a new created state

export default userReducer;

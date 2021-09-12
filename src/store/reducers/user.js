import actionTypes from "../actions/type";

const initialState = null;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return (state = payload);
    default:
      return state;
  }
};

export default reducer;

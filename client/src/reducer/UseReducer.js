export const initialstate = null;
const UseReducer = (state, action) => {
  if (action.type === "USER") {
    return action.payload;
  }
  return state;
};

export default UseReducer;

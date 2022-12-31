export const initialState = {
  name: "",
  desc: "",
  category: "",
  tags: [],
  qty: 0,
};

export const formReducer = (state, action) => {
  switch (state.action) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_TAG":
      return {
        tags: [...state.tags, action.payload],
      };
    case "REMOVE_TAG":
      return {
        ...state,
        tags: state.tags.filter((data) => {
          return data !== action.payload;
        }),
      };
    case "ADD_QTY":
      return {
        ...state,
        qty: state.qty + 1,
      };
    case "REMOVE_QTY":
      return {
        ...state,
        qty: state.qty - 1,
      };
    default:
      return state;
  }
};

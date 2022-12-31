export const initialState = {
  posts: [],
  loading: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        posts: [],
        loading: true,
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        loading: true,
      };

    case "FETCH_FAILED":
      return {
        ...state,
        posts: [],
        loading: true,
      };

    default:
      return state;
  }
};

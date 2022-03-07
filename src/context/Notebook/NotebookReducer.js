const notebookReducer = (state, action) => {
  switch (action.type) {
    case "GET_NOTEBOOKS":
      return {
        ...state,
        notebooks: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default notebookReducer;

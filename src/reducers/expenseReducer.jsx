const expenserReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];

    case "DELETE_EXPENSE":
      return state.filter((exp) => exp.id !== action.payload);

    case "UPDATE_EXPENSE":
      return state.map((exp) =>
        exp.id === action.payload.id ? action.payload : exp
      );

    case "SET_EXPENSES":
      return action.payload;

    default:
      return state;
  }
};

export { expenserReducer };

// End code

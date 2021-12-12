export default function reducer(state, action) {
  if (action.type === "INITIATE") {
    const newList = action.payload.map((item) => {
      return { ...item, qty: 1 };
    });
    return newList;
  }
  if (action.type === "CLEAR") {
    return [];
  }
  if (action.type === "REMOVE_ITEM") {
    return state.filter((item) => {
      return item.id !== action.payload;
    });
  }

  if (action.type === "INCREASE") {
    const newList = state.map((item) => {
      if (item.id === action.payload) {
        item.qty = item.qty + 1;
      }
      return item;
    });
    return newList;
  }
  if (action.type === "DECREASE") {
    const newList = state.map((item) => {
      if (item.id === action.payload) {
        item.qty = item.qty - 1;
      }
      return item;
    });
    return newList;
  }
}

export const initialState = 0;
export function penumpangReducer(state, action) {
  switch (action.type) {
    case "tampung":
      return action.penumpang;
    default:
      return state;
  }
}

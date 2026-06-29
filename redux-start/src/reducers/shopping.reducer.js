import { ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM } from "../actions/shopping.actions";

const initialState = {
  items: []
};

let nextId = 1;

export default function ShoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: nextId++,
            text: action.payload,
            completed: false
          }
        ]
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        )
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}

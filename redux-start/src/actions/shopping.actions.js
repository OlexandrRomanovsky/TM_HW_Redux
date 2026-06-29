export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const addItem = payload => ({
  type: ADD_ITEM,
  payload
});

export const toggleItem = payload => ({
  type: TOGGLE_ITEM,
  payload
});

export const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload
});

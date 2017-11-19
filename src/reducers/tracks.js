const initialState = ['Ed Sheeran - Shape Of You', "Ed Sheeran - Don't"];

export default function tracks(state = initialState, action) {
  console.log('call reducer', state, action);
  if (action.type === 'ADD_ITEM') {
    return [...state, action.payload];
  } else if (action.type === 'DELETE_ITEM') {
    // some logic here
    return state;
  }
  return state;
}

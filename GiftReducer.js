
const initialState = {
  awnsers: []
};

const GiftReducer = (state = initialState, action) => {

  if(action.type == 'dispatchStoreAnwser') {
    return {...state, awnsers:action.payload.awnsers.concat(action.payload.awnsers)};
  }

	return state;
}

export default GiftReducer;

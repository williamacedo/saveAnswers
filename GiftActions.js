export const pushText = data => dispatch => {

    dispatch({
        type: 'dispatchStoreAnwser',
        payload: {
            awnsers: data
        }
    });    
}

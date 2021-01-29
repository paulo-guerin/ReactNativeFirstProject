export const newAdd = (add) => {
    return (dispatch, getState) => {
        //make async call to db
        dispatch({type: 'NEW_ADD', add});

    }

};
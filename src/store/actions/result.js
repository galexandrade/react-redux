import * as actionTypes from './actionsTypes';

export const saveResults = (result) => {
    /* const updatedResult = result * 2; */

    return {
        type: actionTypes.STORE_RESULT,
        result: result /* updatedResult */
    };
}

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            //Get the state
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResults(result));
        },2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: id
    };
};
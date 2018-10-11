import * as actionTypes from './actionsTypes';

export const saveResults = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
}

export const storeResult = (result) => {
    return dispatch => {
        setTimeout(() => {
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
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add = (value) => {
    return {
        type: ADD,
        payload: value
    };
};

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        payload: value
    };
};

export const saveResults = (result) => {
    return {
        type: STORE_RESULT,
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
        type: DELETE_RESULT,
        id: id
    };
};
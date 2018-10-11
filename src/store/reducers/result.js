import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    results: []
}

const storeResult = (state, action) => {
    return {
        ...state,
        //CONCAT returns a NEW array. PUSH touches the original array, witch is not allowed here
        results: state.results.concat({
            id: new Date(),
            value: action.result
        })
    }
}

const deleteResult = (state, action) => {
    /* WAY OF UPDATE THE ARRAY IMMUTABLY
    const fakeIdx = 1;
    //Create a coppy of the array NOT DEEPLY
    const newArray = [...state.results]
    newArray.splice(fakeIdx, 1);
    */

    //Return a new array
    const newArray = state.results.filter(el => el.id !== action.id );

    return {
        ...state,
        //CONCAT returns a NEW array. PUSH touches the original array, witch is not allowed here
        results: newArray
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return storeResult(state, action);
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
    }

    return state;
}

export default reducer;
import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility'; 

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            return updateObject(state, {counter: state.counter + 1});
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
        case actionTypes.ADD:
            /* It remains here just as a sample
            return {
                ...state,
                counter: state.counter + action.payload
            }
            */
            return updateObject(state, {counter: state.counter + action.payload});
        case actionTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.payload});
    }

    return state;
}

export default reducer;
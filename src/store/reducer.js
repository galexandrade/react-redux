const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            //Create a clono, not a DEEP clone
            const newState = Object.assign({}, state)
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case 'STORE_RESULT':
            return {
                ...state,
                //CONCAT returns a NEW array. PUSH touches the original array, witch is not allowed here
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter
                })
            }
        case 'DELETE_RESULT':
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

    return state;
}

export default reducer;
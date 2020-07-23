import { INCREASE_COUNTER, SAY_MY_NAME } from './constants'
import { DECREASE_COUNTER } from './constants'

const initialState = {
    counter: 10
}

export const handleTheCount = (state=initialState, action={}) => {
    switch(action.type) {
        case INCREASE_COUNTER:
            return Object.assign({}, state, {counter: state.counter + 1});
        case DECREASE_COUNTER:
            // return Object.assign({}, state, {counter: state.counter - 1});
            return ({
                ...state,
                counter: state.counter - 1,
            })

        default:
            return state;
    }
}

const initialNameState = {
    textfield: ''
}


export const sayMyName = (state=initialNameState, action={}) => {
    switch(action.type) {
        case SAY_MY_NAME:
            const field = document.getElementById("field")
            if (field.value) {
                return Object.assign({}, state, {textfield: field.value});
            } else {
                return state
            }
            default:
                return state;
            }
}
import { INCREASE_COUNTER } from './constants'
import { DECREASE_COUNTER } from './constants'
import { SAY_MY_NAME } from './constants'

export const handleIncrement = () => {
    return ({
        type: INCREASE_COUNTER
    })
}

export const handleDecrement = () => {
    return ({
        type: DECREASE_COUNTER
    })
}

export const sayName = (event) => {
    return({
        type: SAY_MY_NAME
    })
} 
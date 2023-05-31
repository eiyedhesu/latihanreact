import * as counter from './constants'

export const increement = (value) => {
    return {
        type: counter.INC,
        value: value
    }
}

export const decreement = (value) => {
    return {
        type: counter.DEC,
        value: value
    }
}

export const decreementWitchCheckingAction = (value) => {
    return (dispatch, getState) => {
        if (getState ().counter.count >0){
            dispatch(decreement(value))
        }
    }
}
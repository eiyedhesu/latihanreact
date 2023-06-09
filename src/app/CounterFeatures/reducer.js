import * as counter from './constants'

let InitialState = {
    count : 0
}

const counterReducer = (state = InitialState, action) => {
    switch(action.type){
        case counter.INC :
            return {
                ...state,
                count: state.count +1
            }     
        case counter.DEC :
            return {   
                count: state.count -1
            }     
        default :
        return state
     }
}

export default counterReducer

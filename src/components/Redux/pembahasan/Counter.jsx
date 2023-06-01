
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {  decreementWitchCheckingAction, increement } from "../../../app/CounterFeatures/action"

function Counter  () {
    const {count} = useSelector (state => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
           
            <Button variant="dark" onClick={() => dispatch(decreementWitchCheckingAction(1))}> - </Button>
            {' '}<span>{count}</span>{' '}
            <Button variant="dark" onClick={() => dispatch(increement(1))}> + </Button>
           
        </div>
    )
}

export default Counter
import React from 'react'
import './Counter.css'
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {

    const { count, name } = useSelector(state => ({
        ...state.counterReducer,
        ...state.nameReducer
    }))
    const dispatch = useDispatch();

    const incrementeCount = () => {
        dispatch({
            type: 'INCR'
        })
    }
    const decrementeCount = () => {
        dispatch({
            type: 'DECR'
        })
    }


    return (
        <div>
            <h2>Compteur :{count}</h2>
            <div className="counterBlock">
                <button onClick={incrementeCount}>+</button>
                <button onClick={decrementeCount}>-</button>
            </div>
            <h2>{name}</h2>
        </div>
    )
}

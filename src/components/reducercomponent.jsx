import React, { useReducer } from "react";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";

const initialState = {
    firstCount: 0,
    secondCount: 100
};

const reducerFunc = (countState, action) => {
    switch (action.type) {
        case "increment1":
            return { ...countState, firstCount: countState.firstCount + action.value };
        case "decrement1":
            return { ...countState, firstCount: countState.firstCount - action.value };
        case "increment2":
            return { ...countState, secondCount: countState.secondCount + action.value };
        case "decrement2":
            return { ...countState, secondCount: countState.secondCount - action.value };
        case "reset1":
            return { ...countState, firstCount: initialState.firstCount };
        case "reset2":
            return { ...countState, secondCount: initialState.secondCount };
        default:
            return countState;
    }
}

const ReducerCounter = () => {
    const [count, dispatch] = useReducer(reducerFunc, initialState);
    return (
        <>
            <h2>カウント１：{count.firstCount}</h2>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => dispatch({ type: "increment1", value: 1 })}>increment</Button>
                <Button onClick={() => dispatch({ type: "decrement1", value: 1 })}>decrement</Button>
                <Button onClick={() => dispatch({ type: "reset1" })}>reset</Button>
            </ButtonGroup>
            <h2>カウント２：{count.secondCount}</h2>
            <ButtonGroup color="secondary" aria-label="outlined primary button group">
                <Button onClick={() => dispatch({ type: "increment2", value: 100 })}>increment</Button>
                <Button onClick={() => dispatch({ type: "decrement2", value: 100 })}>decrement</Button>
                <Button onClick={() => dispatch({ type: "reset2" })}>reset</Button>
            </ButtonGroup>
        </>
    )
}

export default ReducerCounter;

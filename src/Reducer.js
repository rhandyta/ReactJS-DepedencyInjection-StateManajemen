import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + action.payload;
        case "decrement":
            return state - action.payload;
        default:
            throw new Error("error brok");
    }
}

export default function Reducer() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
                +
            </button>
            <span>{count}</span>
            <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
                -
            </button>
        </>
    );
}

import React from 'react'

export default (props) => {
    return (
        <div>
            <button onClick={props.onIncrementar}>+</button>
            <button onClick={props.onDecrementar}>-</button>
        </div>
    );
};
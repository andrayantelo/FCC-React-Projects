import React from 'react';

const Key = (props) => {
    const btnClass = props.keyType.type || "";

    return (
        <div id={props.keyType.name}>
            <button className={`ui button ${btnClass}`}>
                {props.keyType.value}
            </button>
        </div>
    )
}

export default Key;
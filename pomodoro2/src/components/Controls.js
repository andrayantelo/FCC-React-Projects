import React from 'react';

const Controls = (props) => {
    return (
        <div className="controls">
            <i
                id="start"
                className="big play circle outline icon"
                onClick={props.handleClick}
            ></i>
            <i
                id="pause"
                className="big pause circle outline icon"
                onClick={props.handleClick}
            ></i>
            <i
                id="reset"
                className="big redo icon"
                onClick={props.handleClick}
            ></i>
        </div>
    )
}

export default Controls;
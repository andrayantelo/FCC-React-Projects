import React from 'react';
import { updateWork } from '../actions';
import { formatTime } from '../helpers';

const Session = (props) => {
    return (
        <div className="session">
            <h4 className="ui large header">{ props.title } Length</h4>
            <div className="session-display-container">
                <i
                    id="increment"
                    className="session-item big arrow alternate circle up outline icon"
                    onClick={() => console.log("increment") }
                ></i>
                <div className="session-item session-display">
                    {formatTime(5*60000)}
                </div>
                <i
                    id="decrement"
                    className="session-item big arrow alternate circle down outline icon"
                    onClick={() => console.log("decrement") }
                ></i>
            </div>
        </div>
    )
}

export default Session;
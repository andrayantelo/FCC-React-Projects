import React from 'react';
import { formatTime } from '../helpers';

const Session = (props) => {
    return (
        <div className="session">
            <h4 className="ui large header">{ props.title } Length</h4>
            <div className="session-display-container">
                <i
                    id="up"
                    className="session-item big arrow alternate circle up outline icon"
                    onClick={() => props.incrementLength(props.title) }
                ></i>
                <div className="session-item session-display">
                    {formatTime(props.sessionLength)}
                </div>
                <i
                    id="down"
                    className="session-item big arrow alternate circle down outline icon"
                    onClick={() => props.decrementLength(props.title) }
                ></i>
            </div>
        </div>
    )
}

export default Session;
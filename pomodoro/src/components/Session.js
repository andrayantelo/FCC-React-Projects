import React from 'react';

const Session = ({ title, handler, display }) => {

    const handleClick = (event) => {
        const change = event.target.id;
        handler(display, change);
    }

    return (
        <div className="session">
            <h4 className="ui header">{title}</h4>
            <div className="session-display-container">
                <i
                    id="up"
                    className="session-item big arrow alternate circle up outline icon"
                    onClick={handleClick}
                ></i>
                <div className="session-item session-display">
                    {display}
                </div>
                <i
                    id="down"
                    className="session-item big arrow alternate circle down outline icon"
                    onClick={handleClick}
                ></i>
            </div>
        </div>
    )
}

export default Session;
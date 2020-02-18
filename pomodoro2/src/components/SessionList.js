import React from 'react';
import Session from './Session';

const SessionList = (props) => {
    const { breakLength, workLength, incrementLength, decrementLength } = props;
    return (
        <div className="sessions-container">
            <Session
                title="Break"
                sessionLength={breakLength}
                incrementLength={incrementLength}
                decrementLength={decrementLength}
            />
            <Session
                title="Session"
                sessionLength={workLength}
                incrementLength={incrementLength}
                decrementLength={decrementLength}
            />
        </div>
    )
}

export default SessionList;
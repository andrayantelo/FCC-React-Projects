import React from 'react';
import Session from './Session';

const SessionList = () => {
    return (
        <div className="sessions-container">
            <Session
                title="Break"
            />
            <Session
                title="Session"
            />
        </div>
    )
}

export default SessionList;
import React from 'react';
import KeyList from './KeyList';
import Controls from './Controls';

const Display = () => {
    return (
        <div id="display" className="two column row">
            <div className="center aligned column">
                <KeyList />
            </div>
            <div className="center aligned column">
                <Controls />
            </div>
        </div>
    )
}

export default Display;
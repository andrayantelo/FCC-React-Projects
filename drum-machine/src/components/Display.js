import React from 'react';
import KeyList from './KeyList';
import Controls from './Controls';

const Display = () => {
    return (
        <div id="display" className="ui inverted container">
                <div className="features">
                    <Controls />
                </div>
                <div className="features">
                    <KeyList />
                </div>
        </div>
    )
}

export default Display;
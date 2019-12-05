import React from 'react';
import KeyList from './KeyList';
import Controls from './Controls';

const Display = () => {
    return (
        <div id="display" className="ui middle aligned grid">
            <div className="two column row">
                <div className="right aligned column">
                    <KeyList />
                </div>
                <div className="left aligned column">
                    <Controls />
                </div>
            </div>
        </div>
    )
}

export default Display;
import React from 'react';
import Key from './Key';

const KeyList = () => {
    
    return (
        <div className="keypad">
            The calculator keys will live here.
            <div className="keyContainer">
                <Key />
            </div>
        </div>
    )
}

export default KeyList;
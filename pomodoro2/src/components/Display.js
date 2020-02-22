import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import { formatTime } from '../helpers';

const Display = () => {
    return(
        <div className="outer-display-container">
            <div className="display-container">
                <h3 className="ui header">
                    Session
                </h3>
                <div className="display">
                    {formatTime(5*60000)}
                </div>
                <Controls />
            </div>
        </div>
    )
}


export default connect()(Display);
import React from 'react';
import Display from './Display';
import KeyList from './KeyList';
import './style.css';

const App = () => {
    return (
        <div className="outer-container">
            <div className="ui inverted segment">
                <div className="outer-row">
                    <Display />
                </div>
                <div className="outer-row">
                    <KeyList />
                </div>  
            </div>
        </div>
    )
}

export default App;
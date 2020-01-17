import React from 'react';
import SessionList from './SessionList';
import Display from './Display';
import './style.css';

const App = () => {
    return (
        <div className="container">
            <div className="inner-container">
                <div className="outer-row">
                    <h1 className="ui centered header">Pomodoro</h1>
                </div>
                <div className="outer-row">
                    <SessionList />
                </div>
                <div className="outer-row">
                    <Display />
                </div>
            </div>
        </div>
    )
}

export default App;
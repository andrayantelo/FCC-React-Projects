import React from 'react';
import Break from './Break';
import Work from './Session';
import Display from './Display';

const App = () => {
   
    return (
        <div className="container">
            <div className="inner-container ui teal inverted segment">
                <div className="outer-row">
                    <h1 className="ui centered huge header">Pomodoro</h1>
                </div>
                <div className="outer-row">
                    <Break />
                    <Work />
                </div>
                <div className="outer-row">
                    <Display />
                </div>
            </div>
        </div>
    )
}

export default App;
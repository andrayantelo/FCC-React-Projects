import React from 'react';
import Previewer from './Previewer';
import Editor from './Editor';

import './App.css';

// Two child components: Previewer and Editor

const App = () => {
    return (
        <div>
            <div className="app-header ui center aligned huge header">FCC Markdown Previewer Project</div>
            <div className="ui grid">
                <div className="right floated seven wide column">
                    <Editor />
                </div>
                <div className="left floated seven wide column">
                    <Previewer />
                </div>
                
            </div>
        </div>
    )
}

export default App;
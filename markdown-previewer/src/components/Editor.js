import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

import { setMarkdown } from '../actions';
import './Editor.css';

const window = (new JSDOM('')).window;
const DOMPurify = createDOMPurify(window);


const Editor = (props) => {
    const handleChange = (event) => {
        const markdown = DOMPurify.sanitize(event.target.value)
        props.setMarkdown(markdown);
    }
    
    // eq to componentDidUpdate (props)
    //useEffect(() => {
    //    console.log(DOMPurify.sanitize('<svg><g/onload=alert(2)//<p>'));
    //}, [props])


    return (
        <div className="ui segment">
            <h3 className="ui block header">
                Editor
            </h3>
            <textarea
                id="editor"
                value={props.markdown}
                onChange={handleChange}
            />
        </div>
    )
}

/* The plain object returned will be 
merged into the wrapped component's props
  */
const mapStateToProps = (state) => {
    return { markdown: state.markdown }
}

/* The connect function connects 
a React component to a Redux store
It provides its connected component
with the pieces of data it needs from the
store, and the functions it can use to
dispatch actions to the store.
It does not modify the component you pass
into it, instead it returns a new, connected
component class that wraps the component
you passed in*/
export default connect(
    mapStateToProps,
    { setMarkdown }
)(Editor);
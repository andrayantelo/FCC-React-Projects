import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

const renderer = new marked.Renderer();
marked.setOptions({
    renderer,
   });

const Previewer = (props) => {
    return (

        <div className="ui segment">
            <h3 className="ui block header">
                Previewer
            </h3>
            <div id="preview"
            dangerouslySetInnerHTML={{__html: marked(props.markdown.replace(/&gt;+/g, '>'))}}
            />
        </div>
        
       
    )
};

const mapStateToProps = (state) => {
    return { markdown: state.markdown }
}

export default connect(
    mapStateToProps
)(Previewer);
import React from 'react';
import { connect } from 'react-redux';
import Key from './Key';
import { toggleBank } from '../actions';
import { audioLinks, altAudioLinks } from '../apis/soundlinks.js';


const KeyList = (props) => {
    const audioSrc = props.bank? altAudioLinks: audioLinks;
    const renderedList = audioSrc.map((keyName, index) => {
        return <Key key={audioSrc[index].id} audioSrc={audioSrc[index]} />
    })
    return (
        <div className="keyPad ui inverted segment">
            {renderedList} 
        </div>
    )
}

const mapStateToProps = (state) => {
    return { bank: state.bank }
}


export default connect(
    mapStateToProps,
    { toggleBank }
)(KeyList);
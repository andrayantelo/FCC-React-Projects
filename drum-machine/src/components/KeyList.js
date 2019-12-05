import React from 'react';
import Key from './Key';
import { audioLinks } from '../apis/soundlinks.js';


const keyNames = ['Q', 'W', 'E', 'A',
  'S', 'D', 'Z', 'X', 'C']

const KeyList = () => {
    const renderedList = keyNames.map((keyName, index) => {
        return <Key key={keyName} keyName={keyName} audioSrc={audioLinks[index]} />
    })
    return (
        <div>
            {renderedList} 
        </div>
    )
}

export default KeyList;
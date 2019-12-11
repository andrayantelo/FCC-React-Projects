import React from 'react';
import Key from './Key';
import { numbers, operators, extras } from '../apis/keys.js';


const KeyList = () => {
    const numbersList = numbers.map((number, index) => {
        return <Key key={number.id} keyType={number} />
    })

    const operatorsList = operators.map((operator, index) => {
        return <Key key={operator.id} keyType={operator} />
    })
    
    const extrasList = extras.map((extra, index) => {
        return <Key key={extra.id} keyType={extra} />
    })
    
    return (
        
        <div className="keyPad">
            {operatorsList}
            {numbersList}
            {extrasList}
        </div>
        
    )
}

export default KeyList;
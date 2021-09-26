/*
Data that is being populated into the list is returned after the render of the DOM.
Have yet to figure out how to handle this, but I do have error handling in place that
prevents crashing.
*/

import {useState, useEffect} from 'react'
import processDataFile from './processData';

const DisplayData = ({ data, color }) => {
    
    let keys = [];
    let key = 0;
    const generateKey = () => {
        if(!keys.indexOf >= 0){
            key = Math.random().toString()
            keys.push(key)
        }
        return key
    }

    return (
        <div className="names">
            <h3 id="listColor">{color.toUpperCase() + " GROUP"}</h3>
            <ol>{ data ? data.map((element) => <li key={() => generateKey}>{ element }</li>) : <p>NO DATA FOUND</p> }</ol>
        </div>
    )
}

export default DisplayData

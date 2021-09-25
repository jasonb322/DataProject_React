import React from 'react'
import TableData from './TableData';

export const Selector = () => {
    let selectedColor = "none"

    function handleChange(e) {
        console.log("Before: " + selectedColor)
        selectedColor = e.target.value
        console.log("After: " + selectedColor)
    }

    return (
        <div>
            <label htmlFor="colorChoice">Select Client Grouping: </label>

            <select className="colorChoice" onChange={handleChange}>
                <option value="">None</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            
            <TableData  color={selectedColor}/>
        </div>

       
    )
}


export default Selector;

import React from 'react'
import DisplayData from './DisplayData';
import processDataFile from './processData';
import { useState } from 'react'

const Selector = () => {
    const [selectedColor, setSelectedColor] = useState('PICK A COLOR')
    const [displayDataArray, setDisplayDataArray] = useState([])

    const handleChange = (e) => {
        setSelectedColor(e.target.value)
        console.log(selectedColor)
        setDisplayDataArray(processDataFile(selectedColor))
        console.log(displayDataArray)
    }

    return (
        <div>
            <label htmlFor="colorChoice">Select Client Grouping: </label>
            <select className="colorChoice" onChange={ handleChange }>
                <option value="">None</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            <DisplayData data={ displayDataArray } color={ selectedColor }/>
        </div>
    )
}


export default Selector;

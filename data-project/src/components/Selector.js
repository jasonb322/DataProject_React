import React from 'react'
import NamesList from './NamesList';
import { useState, useEffect } from 'react'

const Selector = () => {
    const [color, setColor] = useState('')
    const [names, setNames] = useState([])

    const handleChange = (e) => {
        setColor(e.target.value)
    }

    useEffect(() => {
        fetch('./dataFile.txt')
        .then(res => res.text())
        .then(txt => txt.split("\n\n"))
        .then(splitText => splitText.filter(element => element.includes('Color:' + color)).sort())
        .then(result => result.map(
            element => element.substring(element.indexOf('Name:') + 5, element.indexOf('Company:') - 1)
        ))
        .then(names => setNames(names))
        .catch(err => console.log("Error: " + err))
    }, [color])

    return (
        <div>
            <label htmlFor="colorChoice"><b>Select Team Color: </b></label>
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

            <h3 id="listColor">{color === '' ? "NO TEAM SELECTED" : color.toUpperCase() + " TEAM"}</h3>

            {names && <NamesList names={names} color={color}/>}

        </div>
    )
}


export default Selector;

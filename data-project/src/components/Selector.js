import React from 'react'

export const Selector = () => {
    const colorSelection = () => {
        // this needs to be updated, but it works
        console.log("Selector Changed")
    }

    return (
        <div>
            <label for="colorChoice">Select Client Grouping: </label>

            <select name="colorChoice" id="colors" onChange={colorSelection}>
                <option value="">None</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
        </div>
    )
}


export default Selector;

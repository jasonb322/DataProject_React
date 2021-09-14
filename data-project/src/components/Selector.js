import React from 'react'

export const Selector = () => {
    return (
        <div>
            <label for="colorChoice">Select Client Grouping: </label>

            <select name="colorChoice" id="colors">
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

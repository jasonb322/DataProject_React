/*
    Map names to DOM
*/

import NameCard from "./NameCard"

const NamesList = ({ names, color }) => {

    return (
        <div className="names-list">
            {names.map((name, idx) => <NameCard key={idx} name={name} color={color} />)}
        </div>
    )
}

export default NamesList

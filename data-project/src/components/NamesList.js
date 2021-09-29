/*
    Map names to DOM
*/

import NameCard from "./NameCard"

const NamesList = ({ names }) => {

    return (
        <div className="names-list">
            {names.map((name, idx) => <NameCard key={idx} name={name} />)}
        </div>
    )
}

export default NamesList

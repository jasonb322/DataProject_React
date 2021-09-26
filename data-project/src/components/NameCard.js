import React from 'react'
import { useState } from 'react'

const NameCard = ({ name, company }) => {
    const [name, setName] = useState(null)
    const [company, setCompany] = useState(null)

    return (
        <div className='nameCard'>
            <h3>{ name }</h3>
            <h4>{ company }</h4>
        </div>
    )
}

export default NameCard

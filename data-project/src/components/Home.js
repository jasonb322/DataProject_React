import React from 'react'
import Header from "./Header";
import Selector from "./Selector";
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <div className="topSpan">
                <Header />
                <Link className="link" to='./TideWatch'>I'd rather be surfing!</Link>
            </div>
            <Selector />
        </div>

    )
}

export default Home

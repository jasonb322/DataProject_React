import React from 'react'
import { Link } from 'react-router-dom'
import Header from "./Header";
import Selector from "./Selector";
import { HomeDiv } from './homeStyle'


const Home = () => {
    return (
        <HomeDiv>
            <div className="topSpan">
                <Header />
                <Link className='link' to='./TideWatch'>I'd rather be surfing!</Link>
            </div>
            <Selector />
        </HomeDiv>
    )
}

export default Home

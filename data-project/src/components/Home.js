import React from 'react'
import Header from "./components/Header";
import Selector from "./components/Selector";

const Home = () => {
    return (
        <div className="home">
            <div className="topSpan">
                <Header />
                <a className="link" href="https://www.google.com">I'd rather be surfing!</a>
            </div>
            <Selector />
        </div>

    )
}

export default Home

import React from 'react'
import "./style.css"
import Banner from './Banner'
import Header from '../../components/Header'
import Feature from './Feature'
import Frequently from './Frequently'


function Home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Feature />
            <Frequently />
        </div>
    )
}

export default Home
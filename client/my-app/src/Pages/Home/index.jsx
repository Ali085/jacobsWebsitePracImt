import React from 'react'
import HomeHead from '../../Components/HomeHead'
import Users from '../../Components/Users'
import Varieties from '../../Components/Varieties'
import Navbar from '../../Layouts/Navbar'

function Home() {
    return (
        <>
            <Navbar />
            <HomeHead />    
            <Varieties />
            <Users/>
        </>

    )
}

export default Home
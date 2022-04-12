import React, { useContext } from 'react'
import { MainContext } from '../Components/Context'

const Home = () => {
    const { user } = useContext(MainContext)
    return (
        <div>
            <h2><center>Welcome {user}</center></h2>
            {/* <h2><center>Welcome {localStorage.getItem('username')}</center></h2> */}
        </div>
    )
}

export default Home

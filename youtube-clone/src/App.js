import React, { useEffect, useState } from 'react'

// including components
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar'

// screens
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'

// bootstrap components
import {Container} from 'react-bootstrap'

// sass file
import './_app.scss'

function App() {

    // hamburger
    const [sidebar , toggleSidebar] = useState(false)

    // toggle function
    const handleToggleSidebar = () =>toggleSidebar( value => !value)


    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar}/>

            <div className="app_container" border border-info>
                <SideBar sidebar={sidebar}  handleToggleSidebar={handleToggleSidebar}/>

                <Container fluid className="app_main" border border-warning>
                    <HomeScreen />
                </Container>
            </div>
        </>
    )
}

export default App

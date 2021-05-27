import React from 'react'

// sass file
import './_sidebar.scss'

// icons
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
} from 'react-icons/md'

function SideBar( { sidebar, handleToggleSidebar }  ) {
    return (
        <nav 
        className= {sidebar? "sidebar open": "sidebar"} 
        onClick={() =>handleToggleSidebar(false)}
        >
            
            <li>
                <MdHome size = {23} />
                <span>Home</span>
            </li>

            <li>
                <MdSubscriptions size = {23} />
                <span>Subscriptions</span>
            </li>

            <li>
                <MdThumbUp size = {23} />
                <span>Liked Videos</span>
            </li>

            <li>
                <MdHistory size = {23} />
                <span>History</span>
            </li>

            <li>
                <MdLibraryBooks size = {23} />
                <span>Library</span>
            </li>

            <li>
                <MdSentimentDissatisfied size = {23} />
                <span>I don't know</span>
            </li>


            <hr />

            <li>
                <MdExitToApp size = {23} />
                <span>Log Out</span>
            </li>

            <hr />

        </nav>
    )
}

export default SideBar

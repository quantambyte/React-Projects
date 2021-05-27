import React from 'react'

// sass file
import './_header.scss'

// icons
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications , MdApps } from 'react-icons/md'

function Header(  {handleToggleSidebar} ) {
    return (
        <div className= "border border-dark header">
            
            <FaBars className= 'header_menu' size = {26}
            
            onClick= {() => handleToggleSidebar()}
            />
            
            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="youtube-logo" className="header_logo" />

            <form >

                <input type="text" placeholder="Search"/>
                <button type="submit">
                    <AiOutlineSearch size={22}/>
                </button>

            </form>

            <div className="header_icons">
                <MdNotifications size={28}/>
                <MdApps size={28}/>
                <img src="https://pbs.twimg.com/profile_images/795714894343639040/na4pAKRx.jpg" alt="avatar" />
            </div>

        </div>
    )
}

export default Header

import React from 'react'

// sass file
import './_video.scss'

// icon
import {AiFillEye} from 'react-icons/ai'

function Video() {
    return (
        <div>
            <div className="video">

                <div className="video_top">
                    <img src="https://i.ytimg.com/vi/jU2ZTETfqRM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAs8zOs9N_NRTnldecs5KLDH5PxTg" alt="" />
                    <span>00:69</span>
                </div>

                <div className="video_title">
                    IDK What lol
                </div>

                <div className="video_details">
                    <span>
                        <AiFillEye /> 5M Views • 
                    </span>

                    <span>69 days ago</span>
                </div>

                <div className="video_channel">
                    <img src="https://yt3.ggpht.com/ytc/AAUvwnga3eXKkQgGU-3j1_jccZ0K9m6MbjepV0ksd7eBEw=s68-c-k-c0x00ffffff-no-rj" alt="" />
                    <p>PewDiePie</p>
                </div>

            </div>
        </div>
    )
}

export default Video

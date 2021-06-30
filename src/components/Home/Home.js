import React from 'react'
import CreatePost from '../CreatePost/CreatePost'
import Feed from '../Feed/Feed'
import './Home.css'

function Home() {
    return (
        <div className="home-container">
            <div>
            <CreatePost />
            <Feed/>
            </div>
        </div>
    )
}

export default Home

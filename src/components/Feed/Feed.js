import React, {useContext} from 'react'
import { userContext } from "../../Context";
import './Feed.css'

function Feed() {
    const [state, setState] = useContext(userContext);
    const {posts} = state

    return (
        <div className="feed-container">
        {posts.map(item => (
        <div className="feed-post">
            <p>{item.text}</p>
            { item.gif &&
            <img src={item.gif} alt="gif"/>
            }
        </div>
        )
        )}
        </div>  
    )
}

export default Feed

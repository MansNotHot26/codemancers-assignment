import React, { useState, useContext } from "react";
import Gif from "../../assets/gif.png";
import "./CreatePost.css";
import GifModal from "../GifModal/GifModal";
import { userContext } from "../../Context";

function CreatePost() {
  const [text, setText] = useState("");
  const [gif, setGif] = useState();
  const [openGifModal, setOpenGifModal] = useState(false);
  const [state, setState] = useContext(userContext);
  const { posts } = state;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSelectGif = () => {
    setOpenGifModal((openGifModal) => !openGifModal);
  };

  const handleSetGIf = (url) => {
    setGif(url);
  };

  const handlePost = () => {
    setText('')
    setGif('')
    setState({ ...state, posts: [...posts, { text, gif }] });
  };

  const handleRemoveGif = () => {
    setGif('')
  }

  return (
    <div className="post-container">
      <div className="post-heading">
        <h1>Create Post </h1>
      </div>
      <div className="post-textarea">
        <textarea
         value={text}
          type="text"
          placeholder="Whats on your mind?"
          onChange={(event) => handleTextChange(event)}
        />
      </div>
      {gif && (
        <>
          <div className="post-selected-gif">
            <img src={gif} alt="gif" />
            <i class="fas fa-times fa-2x" onClick={handleRemoveGif}></i>
          </div>
        </>
      )}
      <div className="post-gif">
        <button className="post-gif-button" onClick={handleSelectGif}>
          <img src={Gif} alt="gif" /> GIF
        </button>
      </div>
      {openGifModal && (
        <GifModal closeModal={handleSelectGif} setGif={handleSetGIf} />
      )}
      <button className="post-post-button" onClick={handlePost}>
        Post
      </button>
    </div>
  );
}

export default CreatePost;

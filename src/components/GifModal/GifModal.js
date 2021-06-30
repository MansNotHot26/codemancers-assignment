import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GifModal.css";
import backArrow from "../../assets/back-arrow.png";
import Spinner from "../Spinner/Spinner";
import _ from 'lodash';

function GifModal({ closeModal, setGif }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchGif, setSearchGif] = useState("");

  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "YshgJjuxRVO8Os1XkgAA4wC49q6NArpf",
        },
      });
      setGifs(results.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  };

  const fetchSearchData = async (keyword) => {
      setLoading(true);
    try {
        const results = await axios("https://api.giphy.com/v1/gifs/search", {
          params: {
            api_key: "YshgJjuxRVO8Os1XkgAA4wC49q6NArpf",
            q: keyword
          },
        });
        setGifs(results.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(true);
      }
  }

  const handleSearchGif = (event) => {
    setSearchGif(event.target.value);
    // _.debounce(fetchSearchData, 500)
    fetchSearchData(event.target.value)
  };

  const handleSelectGif = (gif) => {
      setGif(gif)
      closeModal()
      
  } 

  const renderGifs = () => {
    return gifs.map((el) => (
      <div className="gif" key={el.id} onClick={() => handleSelectGif(el.images.original.url)}>
        <img src={el.images.original.url} alt="gif" />
      </div>
    ));
  };
  return (
    <div className="gif-modal-container">
      <div className="gif-modal-header">
        <div
          onClick={closeModal}
          style={{ flex: 0.5, marginLeft: "10px", cursor: "pointer" }}
        >
          <img src={backArrow} alt="goBack" />
        </div>
        <div>
          <h2>Choose a GIF</h2>
        </div>
      </div>
      <div className="gif-modal-search">
        <input
           value={searchGif} 
          placeholder="Search gifs"
          type="text"
          onChange={(event) => handleSearchGif(event)}
        />
      </div>
      {!loading ? (
        <div style={{ overflowX: "hidden", overflowY: "auto" }}>
          {renderGifs()}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default GifModal;

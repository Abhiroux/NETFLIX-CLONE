import axios from ".././axios";
import React, { useEffect, useState } from "react";
import requests from "../request";
import "./css/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  //fetching data for banner
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);

  //truncate funtion
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner_contents">
        {/* title */}
        <h1 className="Banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="Banner_buttons">
          <button className="Banner_button">Play</button>
          <button className="Banner_button">My List</button>
        </div>
        <h1 className="Banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="Banner_fadebutton"></div>
    </header>
  );
}

export default Banner;

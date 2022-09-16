import React from "react";
import './App.css'
import { useState, useEffect } from "react";
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";


// I plan to finish this assigment later.  I am having a hard time putting together a rating system. 



// main page

//API link
const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=ac4543f";
const Banner = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      searchMovies("The Mummy");
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
  
      setMovies(data.Search);
    };
  
    return (
      <div className="app">
        <div>
            <img src="https://t3.ftcdn.net/jpg/03/67/26/58/360_F_367265859_t9oDOkonHpCUtyR4Z0Lh1TryWpVzOHm7.jpg" alt="Pirate ship"></img>
        </div>
        <h1>The Pirate Harbor</h1>
  
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
  
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    );
  };
export default Banner
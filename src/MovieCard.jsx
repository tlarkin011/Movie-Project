import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type, imdbRating } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
        <h4> IMDB rating : {imdbRating}</h4>
      </div>
    </div>
  );
}

export default MovieCard;
import React from "react";
import { movies } from "../data";

const displayMovies = movies.map((movie)=>{
  return (
    <div key={movie.title}>
      {movie.title}
      <br/>
      {movie.time}
      {movie.genres.map((genre)=>{
        return <ul>
          <li key={genre}>
            {genre}
          </li>
        </ul>
      })}
    </div>
  )
})

function Movies() {
  return (
    <>
      <h1>Movies Page</h1>
      {displayMovies}
    </>
  )
}

export default Movies;

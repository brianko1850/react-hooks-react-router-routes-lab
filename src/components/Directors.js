import React from "react";
import { directors } from "../data";

const displayDirectors= directors.map((director)=>{
  return (
    <div key={director.name}>
      {director.name}
      {director.movies.map((movie)=>{
        return <ul>
          <li>
            {movie}
          </li>
        </ul>
      })}
    </div>
  )
})

function Directors() {
  return (
    <>
    <h1>Directors Page</h1>
      {displayDirectors}
    </>
  )
}

export default Directors;

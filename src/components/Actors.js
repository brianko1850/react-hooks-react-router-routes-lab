import React from "react";
import { actors } from "../data";

const displayActors = actors.map((actor)=>{
  return(
    <div key={actor.name}>
      {actor.name}
      {actor.movies.map((movie)=>{
        return <ul>
          <li>
            {movie}
          </li>
        </ul>
      })}
    </div>
  )
})

function Actors() {
  return (
  <>
    <h1>Actors Page</h1>
    {displayActors}
  </>
  )
}

export default Actors;

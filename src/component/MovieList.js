import React from "react"

const MovieList = ({ movies,handleFavouriteClick,favouriteComponent }) => {
  const Favourite=favouriteComponent
  return (
    <>
      {movies.map((movie, index) => (<div className="image-container d-flex justify-content-start m3" index={index}>
          <img src={movie.Poster} />
        <div onClick={()=>handleFavouriteClick(movie)} className="overlay d-flex align-items-center justify-content-center" >
          <Favourite/>
        </div>
        </div>)
      )}
    </>
  )
}

export default MovieList

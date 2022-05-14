import React, { useState, useEffect } from "react"
import MovieList from "./component/MovieList"
import MovieListHeading from "./component/MovieListHeading"
import SearchBox from "./component/SearchBox"
import AddToFav from "./component/AddToFav"
import Remove from "./component/Remove"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
function App() {
  const [movies, setMovies] = useState([])
  const [search,setSearch]=useState('')
  const [favourites,setFavourites]=useState([])
  
   const getMovieRequest=async(search)=>{
     const url=`http://www.omdbapi.com/?s=${search}&apikey=79555010`;
     const response=await fetch(url)
     const responseJson=await response.json()
    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
   }
   useEffect(()=>{
    getMovieRequest(search)
   },[search])
  const saveTolocal=(items)=>{
    localStorage.setItem('items',JSON.stringify(items))
  }
  
  

   const AddFavouriteMovie=(movie)=>{
      const newFav=[...favourites,movie];
      setFavourites(newFav);
      saveTolocal(newFav)
   }
   const RemoveClick=(movie)=>{
      const newArray=favourites.filter((favourite)=>
        favourite.imdbID !== movie.imdbID
      )
      setFavourites(newArray)
      saveTolocal(newArray)
   }
  return (
    <div className="container-fluid movie-app">
     <div className="heading">
     <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading  heading="Movies" />
      </div>
      <SearchBox search={search} setSearch={setSearch} />
     </div>
     
      <div className="row"> 
       <div className="col col-sm-3">
       <div className="movieList">
       <MovieList movies={movies}
        handleFavouriteClick={AddFavouriteMovie}
        favouriteComponent={AddToFav}
        />
       </div>
         </div>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4"> 
        <MovieListHeading heading="Favourites"
        />
      </div>
      <div className="row"> 
       <div className="col col-sm-3">
       <div className="movieList">
       <MovieList movies={favourites}
       handleFavouriteClick={RemoveClick}
       favouriteComponent={Remove}
       />
       </div>
         </div>
      </div>
    </div>
  )
}

export default App

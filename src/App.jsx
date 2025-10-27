import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import movieListData from  "./assets/movieListData.json"
import MovieCard from "./components/MovieCard"
import {Link} from "react-router"

function App() {
    console.log(movieListData.results)
    /** todos : 메인화면 레이아웃 
     * 1-1 단계
     */
  return (
    <>
    <div className='movie_container'>
      {movieListData.results.map((movie, _)=> (
        <Link to="/details">
        <MovieCard key={movie.id} movie={movie} />
        </Link>
      ))}
      </div>
    </>
  )
}

export default App

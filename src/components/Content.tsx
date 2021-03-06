import React from "react"
import { MovieProps } from "../App";
import { MovieCard } from '../components/MovieCard';
import '../styles/content.scss';

interface ContentProps{
  movies: MovieProps[],
  selectedGenre: {
    title: string;
  }
}


export function Content(props:ContentProps) {
  // Complete aqui
  return(
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props.movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}
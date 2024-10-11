import MovieItems from "./movie-item";

const Movies = (props)=>{
    return props.myMovies.map(
        (movie)=>{
            return <MovieItems mymovie={movie} key={movie.imdbID}/>
        }
        
    );
}

export default Movies;
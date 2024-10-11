import MovieItems from "./movie-item";

const Movies = (props)=>{
    return props.myMovies.map(
        (movie)=>{
            return <MovieItems myMovie = {movie}/>
        }
        
    );
}

export default Movies;
import { useEffect } from "react";


const MovieItems = (props)=>{


    
    useEffect(
        ()=>{

        },[]
    );
    return(

        <div>
            <h1>{props.myMovie.Title}</h1>
            <p>{props.myMovie.Year}</p>
            <img src= {props.myMovie.Poster}/>
            
        </div>


    );
}

export default MovieItems;
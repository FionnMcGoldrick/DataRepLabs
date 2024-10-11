import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

const MovieItems = (props)=>{



    useEffect(
        ()=>{
            console.log("Movie Item:", props.mymovie);
        },[props.mymovie]);

    return(
  <div>
      <Card>
        <Card.Header>{props.mymovie.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mymovie.Poster} alt={props.mymovie.Title} />
            <footer>{props.mymovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>


    );
}

export default MovieItems;
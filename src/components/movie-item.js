import { useEffect } from "react"; // Import useEffect hook from React
import Card from 'react-bootstrap/Card'; // Import Card component from react-bootstrap

const MovieItems = (props) => {
    // useEffect to log the movie item whenever it changes
    useEffect(() => {
        console.log("Movie Item:", props.mymovie); // Log the current movie item to the console
    }, [props.mymovie]); // Dependency array to run effect when mymovie changes

    return (
        <div>
            <Card>
                <Card.Header>{props.mymovie.Title}</Card.Header> {/* Display the movie title in the card header */}
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img 
                            src={props.mymovie.Poster} 
                            alt={props.mymovie.Title} // Set alt attribute for accessibility
                        />
                        <footer>{props.mymovie.Year}</footer> {/* Display the movie year */}
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieItems; // Export the MovieItems component for use in other parts of the application

import { useEffect, useState } from "react"; // Import React hooks: useEffect for side effects and useState for managing state
import Movies from "./movies"; // Import the Movies component
import axios from "axios"; // Import axios for making HTTP requests

const Read = () => {
    // Initialize state to hold the movie data
    const [movies, setMovies] = useState([]); 

    /*useState is a built-in hook in React that allows you
     to add state variables to functional components.
      Before useState, managing state in components
       was only possible in class components, but
        with this hook, functional components can
         now store and manage state as well.*/
    useEffect(() => {
        // Make a GET request to the specified API endpoint
        axios.get("https://jsonblob.com/api/jsonblob/1287718524221775872")
            .then((response) => {
                // Log the fetched data to the console
                console.log(response.data);
                // Update the movies state with the fetched data
                setMovies(response.data.movies);
            })
            .catch((error) => {
                // Log any errors that occur during the fetch
                console.error("Error fetching data:", error);
            });
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div>
            <h1>hello</h1>
            {/* Pass the movies state to the Movies component as a prop */}
            <Movies myMovies={movies} /> 
        </div>
    );
};

export default Read; // Export the Read component for use in other parts of the application

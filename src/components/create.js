import { useState } from "react"; // Import the useState hook from React

const Create = () => {
    // Initialize state for the movie title with an empty string
    const [title, setTitle] = useState(""); // Correctly call useState to manage the title state

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log(title); // Log the current title value to the console
    };

    return (
        <div>
            <h1>Add a Movie</h1> {/* Header for the form */}
            <form onSubmit={handleSubmit}> {/* Handle form submission with handleSubmit function */}

                <div>
                    <label>Add Movie Title: </label> {/* Label for the input field */}
                    <input 
                        type="text" 
                        className="form-control" 
                        value={title} // Bind the input value to the title state
                        onChange={(e) => setTitle(e.target.value)} // Update the title state on input change
                    />
                </div>

                <div>
                    <input type="submit" value="Add Movie" /> {/* Submit button to add the movie */}
                </div>
            </form>
        </div>
    );
};

export default Create; // Export the Create component for use in other parts of the application

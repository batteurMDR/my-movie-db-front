import React from 'react'

class DisplayMovies extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

    
    render() {
        return (
            <div className="moviesList">
                <h1>All Movies : </h1>
                { this.state.movies.map((movie, index) => (
                    <article key={index}>
                        <p>Title : {movie.title}</p>
                        <p>Duration : {movie.duration}</p>
                    </article>
                ))}
            </div>
        );
    }
    
}

export default DisplayMovies

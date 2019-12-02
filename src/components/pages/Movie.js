import React, { Component } from "react";
import axios from "axios";
class Movie extends Component {
  state = {
    movie: {},
    imdbLink: ""
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.setState({ imdbLink: `https://www.imdb.com/title/${params.movieId}` });
    axios
      .get(`http://www.omdbapi.com/?apikey=f06073bd&i=${params.movieId}`)
      .then(res => {
        const movie = res.data;
        this.setState({ movie });
        document.title = `${movie.Title} (${movie.Year}) | OMDB Frontend`;
        console.log(movie);
      });
  }
  render() {
    return (
      <div className="movie-info">
        <section className="movie-summary card">
          <div className="movie-poster">
            <img src={this.state.movie.Poster} />
          </div>
          <div className="movie-summary-text">
            <h1>
              {`${this.state.movie.Title} (${this.state.movie.Year})`}{" "}
              <span>{this.state.movie.Rated}</span> <span className="header-link-right">{this.state.imdbLink ? (
              <a href={this.state.imdbLink} target="_blank">
                View on IMBd
              </a>
            ) : (
              ""
            )}</span>
            </h1>
            <p>
              {this.state.movie.Runtime} | {this.state.movie.Genre} |{" "}
              {this.state.movie.Type}
            </p>
            

            <h4>Synopsis</h4>
            <p>{this.state.movie.Plot}</p>
          </div>
        </section>

       <div className="row">
          <section className="movie-details card">
            <h3 className="card-title">More Details</h3>
            <hr />
            <div className="card-body">
            <p>Director: {this.state.movie.Director}</p>
            <p>Writers: {this.state.movie.Writer}</p>
            <p>Actors: {this.state.movie.Actors}</p>
            <p>Awards: {this.state.movie.Awards}</p></div>
          </section>

          <section className="movie-stats card">
            <h3 className="card-title">Stats </h3>
            <hr />
            <div className="card-body">
            <p>Cinema Release: {this.state.movie.Released}</p>
            <p>Dvd Release: {this.state.movie.DVD}</p>
            <p>Language: {this.state.movie.Language}</p>
            <p>Country: {this.state.movie.Country}</p>

            <div className="movie-ratings">
              {this.state.movie.Ratings
                ? this.state.movie.Ratings.map(rating => (
                    <div>
                      <p>{rating.Source}: <span>{rating.Value}</span></p>
                    </div>
                  ))
                : ""}
            </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Movie;

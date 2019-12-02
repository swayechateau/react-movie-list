import React, { Component } from "react";
import axios from "axios";
import GridList from "../GridList";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      movies: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  searchMovie(query) {
    axios
      .get(`http://www.omdbapi.com/?apikey=f06073bd&s=${query}`)
      .then(res => {
        const movies = res.data.Search;
        this.setState({ movies });
        console.log(movies);
      });
  }
  componentDidMount() {
    this.searchMovie("");
    document.title = `OMDB Frontend`
  }
  handleChange(e) {
    e.preventDefault();
    const search = e.target.value;
    this.setState({ search });
    this.searchMovie(search);
    console.log(e);
  }
  render() {
    return (
      <div className="App">
        <input
          className="search-input"
          type="text"
          placeholder="search for movie..."
          onChange={this.handleChange}
          value={this.state.search}
        />
        <section className="App-Results">
          {this.state.movies ? (
            <GridList movies={this.state.movies} />
          ) : (
            <h1 className="no-results">No Results Found!</h1>
          )}
        </section>
      </div>
    );
  }
}

export default Main;

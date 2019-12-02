import React, { Component } from "react";
import { Link } from "react-router-dom";
import GridItem from "./GridItem";
class GridList extends Component {
  render() {
    return (
      <div class="grid-container">
        {this.props.movies.map(movie => (
            <Link to={`/${movie.imdbID}`}>
              <GridItem key={movie.imdbID} movie={movie} />
            </Link>
        ))}
      </div>
    );
  }
}

export default GridList;

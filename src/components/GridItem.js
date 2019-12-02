import React, { Component } from "react";
class GridItem extends Component {
  render() {
    return (
      <div id={this.props.movie.imdbID} class="grid-item">
        <img src={this.props.movie.Poster} alt={this.props.movie.Title} title={this.props.movie.Title}/>
      </div>
    );
  }
}

export default GridItem;

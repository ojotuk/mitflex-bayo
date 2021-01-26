import React, { Component } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
class App extends Component {
  state = {
    movies: [],
    searched: [],
  };
  componentDidMount() {
    this.getMovies();
  }
  getMovies = async () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=6981bf3dbfa3f6ce5e76b87c5cfe4512&sort_by=popularity.desc&page=1"
    )
      .then((movies) => movies.json())
      .then((data) => {
        this.setState({
          movies: data.results,
        });
        const { movies } = this.state;
        // console.log(movies);
      });
  };
  searchMovie = (value) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6981bf3dbfa3f6ce5e76b87c5cfe4512&query=${value}`
    )
      .then((movies) => movies.json())
      .then((data) => {
        this.setState({
          movies: data.results,
        });

        // console.log(this.state.movies);
      });
  };
  render() {
    return (
      <div>
        <Header searchMovie={this.searchMovie} />
        <div className="titleList">
          <div className="title">
            <h1>Movies</h1>
            <div className="titles-wrapper">
              {this.state.movies.map((eachMovie) => (
                <Movie movie={eachMovie} key={eachMovie.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

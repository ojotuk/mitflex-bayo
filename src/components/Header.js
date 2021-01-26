import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  state = {
    searchValue: "",
  };

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.searchValue) return null;
    this.props.searchMovie(this.state.searchValue);
  }
  render() {
    return (
      <header className="header">
        <a href="/">
          <img
            src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
            alt="netflix-font"
            border="0"
          />
        </a>
        <form
          id="search"
          className="search"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <input
            type="search"
            placeholder="Search for a title..."
            value={this.state.searchValue}
            onChange={(e) => this.setState({ searchValue: e.target.value })}
          />
        </form>
      </header>
    );
  }
}

export default Header;

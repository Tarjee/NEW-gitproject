import React from "react";
class SearchBar extends React.Component {
  state = { term: "" };
  onFormHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormHandler}>
          <div className="field">
            <label id="image">Image Search</label>
            <input
              type="text"
              id="image"
              value={this.state.term}
              onChange={(event) => {
                this.setState({ term: event.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;

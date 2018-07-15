import React from "react";
import { Component } from "react";
// eslint-disable-next-line
import "./styles/SearchResults.css";
import * as api from "../../utils/api";

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
  }

  componentWillMount() {
    api
      .fetchSearchResultsList()
      .then(searchResults => {
        this.setState(
          searchResults
        );
        console.log(this.state);
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.props.history.push("/404");
        }
      });
    // debugger;
    //after react get mounted
    // when the data is accessible
  }
  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="SearchResults">
        <h1>test</h1>
      </div>
    );
  }
}

export default SearchResults;

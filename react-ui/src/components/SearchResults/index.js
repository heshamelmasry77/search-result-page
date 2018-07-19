import React from "react";
import { Component } from "react";
// eslint-disable-next-line
import "./styles/SearchResults.css";
import * as api from "../../utils/api";
import CardPreview from "../CardPreview";
import Sorting from "../Sorting";
import _ from "lodash";

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      orderBy: "country",
      order: "asc",
      names: [
        [
          "price",
          "Lowest price first",
          "asc"], [
          "price",
          "Highest price first",
          "desc"],
        [
          "length",
          "Longest tour first",
          "desc"],
        [
          "length",
          "Shortest tour first",
          "asc"]
      ]
    };
    this.doOrderBy = this.doOrderBy.bind(this);
  }

  doOrderBy(e) {
    e.preventDefault();
    const newOrderBy = e.target.getAttribute("data-value");
    const newSortBy = e.target.getAttribute("data-order");
    this.setState(
      {
        orderBy: newOrderBy,
        order: newSortBy
      }
    );
  }


  componentWillMount() {
    api
      .fetchSearchResultsList()
      .then(searchResults => {
        this.setState({
          searchResults: searchResults
        });
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
  }

  render() {
    const orderBy = this.state.orderBy;
    const order = this.state.order;
    let sorted = this.state.searchResults;

    // sorting
    sorted = _.orderBy(sorted, (item) => {
      return item[orderBy];
    }, order);

    return (
      <div className="SearchResults">
        <Sorting
          doOrderBy={this.doOrderBy}
          orderBy={this.state.orderBy}
          order={this.state.order}
          names={this.state.names}/>
        {sorted.map((result, i) => <CardPreview key={i} {...result} />)}
      </div>
    );
  }
}

export default SearchResults;

import React, { Component } from "react";
// import PropTypes from 'prop-types'; // ES6
// import {Link} from 'react-router-dom';
import "./styles/CardPreview.css";

class CardPreview extends Component {

  render() {
    let destinations = this.props.destinations.map((destination, i) => {
      return (

          <li key={i}>
            {destination}/
          </li>
      );
    });
    return (
      <div className="CardPreview">
        <div className="item-a"><img src={this.props.tour_image} alt={this.props.tour_name}/></div>
        <div className="item-b"><img src={this.props.map_image} alt={this.props.tour_name}/></div>
        <div className="item-c">
          <h3>{this.props.description}</h3>
          <div>
            <span>destinations</span>
            <ul>{destinations}</ul>
          </div>
          <div><span>starts/ ends in </span> <span>{this.props.country}</span></div>
          <div><span>age range </span><span>{this.props.age_from} to {this.props.age_to} year old</span></div>
          <div><span>country </span> <span>{this.props.country}</span></div>
          <div><span>operator </span> <span>{this.props.tour_operator}</span></div>
        </div>
        <div className="item-d">
          <div className="our-savings">our saving</div>
          <div className="from-price">from</div>
          <div className="savings">€ {this.props.saving}</div>
          <div className="price">€ {this.props.price}</div>
          <div className="days-number">{this.props.length} <span>days</span></div>
        </div>

      </div>
    );
  }
}


export default CardPreview;

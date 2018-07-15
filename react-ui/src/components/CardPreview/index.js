import React, { Component } from "react";
// import PropTypes from 'prop-types'; // ES6
// import {Link} from 'react-router-dom';
import "./styles/CardPreview.css";

class CardPreview extends Component {


  render() {
    return (
      <div className="CardPreview">
        {/*<Link to={'/projects/' + this.props.name}>*/}
        {/*<figure>*/}
        {/*<img src={'data:image/png;' + this.props.picture.data.data}*/}
        {/*alt={'photo of ' + this.props.name}/>*/}
        {/*<figcaption>*/}
        {/*<p>*/}
        {/*{this.props.description}*/}
        {/*<br/>*/}
        {/*<span>-View-</span>*/}
        {/*</p>*/}
        {/*</figcaption>*/}
        {/*</figure>*/}
        {/*</Link>*/}

        {/*<div className="tour-image"><img src={this.props.tour_image}/> </div>*/}

        {/*<div className="container">*/}
          <div className="item-a"></div>
          <div className="item-b"></div>
          <div className="item-c"></div>
          <div className="item-d"></div>
        {/*</div>*/}

      </div>
    );
  }
}


export default CardPreview;

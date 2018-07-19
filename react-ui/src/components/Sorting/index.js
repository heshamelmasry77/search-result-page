import React from 'react';
import {Component} from 'react';
import './styles/Sorting.css';
import DropDown from './components/DropDown';

class Sorting extends Component {
  render() {
    const {orderBy, doOrderBy, names} = this.props;
    
    return (
        <div className="Sorting-wrapper">
          <div className="Sorting">
            <DropDown orderBy={orderBy} doOrderBy={doOrderBy}
                       names={names}/>
          </div>
        </div>
    );
  }
}

export default Sorting;

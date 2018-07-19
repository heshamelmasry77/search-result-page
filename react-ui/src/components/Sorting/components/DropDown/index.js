import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/DropDown.css";
import MdArrowDropDown from "react-icons/lib/md/arrow-drop-down";

class DropDown extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      popupVisible: false
    };
  }

  handleClick() {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      popupVisible: !prevState.popupVisible
    }));
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  }

  render() {
    const { orderBy, doOrderBy, names } = this.props;
    return (
      <div className="DropDown" ref={node => {
        this.node = node;
      }}>
        <div className={this.state.popupVisible
          ? "custom-dropdown open"
          : "custom-dropdown"}>
          <button className="shadow dropdown-btn" onClick={this.handleClick}>
            <span>Sort by</span>
            <MdArrowDropDown/>
          </button>
          {this.state.popupVisible && (
            <ul className="custom-dropdown-menu">
              {names.map((item, i) => {
                return <li key={i}>
                  <Link to={""} onClick={doOrderBy} key={i}
                        data-value={item[0]} data-order={item[2]}>{item[1]} {orderBy === item[0]
                    ? <span className="glyphicon glyphicon-ok"> </span>
                    : null}</Link>
                </li>;
              })}

              <li className="divider"></li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default DropDown;

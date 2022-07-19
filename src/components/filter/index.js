import React, { Component } from "react";
import "./style.scss";
import RemoveIcon from "../../images/icon-remove.svg";
export default class Filter extends Component {
  render() {
    if (this.props.data.length < 1) return;

    return (
      <div className="filter-section">
        <div className="selected-language">
          {this.props.data.map((i) => {
            return (
              <span className="filter-options">
                <span className="language-option" key={i}>
                  {i}
                </span>
                <span
                  className="remove-icon"
                  onClick={() => {
                    this.props.onClear(i);
                  }}
                >
                  <img alt="removeIcon" src={RemoveIcon}></img>
                </span>
              </span>
            );
          })}
        </div>
        <div onClick={this.props.onClearAll} className="clear-button">
          Clear
        </div>
      </div>
    );
  }
}

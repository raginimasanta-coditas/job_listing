import React, { Component } from "react";
import Logo from "../../images/loop-studios.svg";
import "./style.scss";

export default class Card extends Component {
  render() {
    const { languages, logo, position, postedAt, contract, location, company } =
      this.props.data;
    let s = "../.";
    let imageurl = s + logo;
    console.log(imageurl);
    return (
      <div className="card">
        <div className="left-section">
          <div className="icon">
            <img src={`../../images/${logo}`} alt={company}></img>
          </div>
          <div className="details">
            <div className="top-section">
              <div className="company">{company}</div>
              {Number(postedAt[0]) < 2 && postedAt[1] === "d" ? (
               <span> <span className="new">NEW!!</span> <span className="featured">Featured</span></span>
              ) : (
                ""
              )}
            </div>
            <div className="middle-section">{position}</div>
            <div className="bottom-section">
              <span>{postedAt}</span>
              <span>.</span>
              <span>{contract}</span>
              <span>.</span>
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="right-section">
          <div className="languages">
            {languages.map((i, index) => (
              <span key={index} onClick={() => this.props.addLanguage(i)}>
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

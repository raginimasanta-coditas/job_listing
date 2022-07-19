import React, { Component } from 'react';
import Card from '../card';
import './style.scss';

export default class Cards extends Component {
  render() {
    return (
      <div className="cards">
        {this.props.dataList.map((i) => (
          <Card addLanguage={this.props.addLanguage} data={i} key={i.id} />
        ))}
      </div>
    );
  }
}

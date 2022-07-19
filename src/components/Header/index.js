import React, { Component } from 'react';
import BigHeaderDesktop from '../../images/bg-header-desktop.svg';
import './style.scss';
export default class Header extends Component {
  render() {
    return (
      <img
        className={'headerImage'}
        src={BigHeaderDesktop}
        alt="Header Design"
      />
    );
  }
}

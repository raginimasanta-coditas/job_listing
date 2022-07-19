import data from "./fixtures/data.json";
import "./App.scss";

import React, { Component } from "react";
import Header from "./components/Header";
import Cards from "./components/cards";
import Filter from "./components/filter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageList: [],
      filteredDataList: [...data],
      hasFiltered: false,
    };
    this.addLanguage = this.addLanguage.bind(this);
    this.removeLanguage = this.removeLanguage.bind(this);
    this.clearAllLanguage = this.clearAllLanguage.bind(this);
  }

  removeLanguage(lang) {
    let index = this.state.languageList.indexOf(lang);
    let newLanguageList = [...this.state.languageList];
    newLanguageList.splice(index, 1);
    this.setState({
      languageList: [...newLanguageList],
      hasFiltered: false,
    });
  }

  addLanguage(lang) {
    let newLanguageList = [...this.state.languageList];

    if (newLanguageList.includes(lang)) {
      return;
    }

    newLanguageList.push(lang);
    this.setState({
      languageList: newLanguageList,
      hasFiltered: false,
    });
  }

  clearAllLanguage() {
    this.setState({
      languageList: [],
      hasFiltered: false,
    });
  }

  componentDidUpdate() {
    let tempDataList = [];
    let tempLanguageList = [...this.state.languageList];
    if (!this.state.hasFiltered) {
      for (let i = 0; i < data.length; i++) {
        let flag = true;
        for (let j = 0; j < tempLanguageList.length; j++) {
          if (data[i].languages.includes(tempLanguageList[j])) continue;
          else flag = false;
        }
        flag && tempDataList.push(data[i]);
        this.setState({
          filteredDataList: tempDataList,
          hasFiltered: true,
        });
      }
    }
  }

  render() {
    return (
      <>
        <Header />
        <Filter
          onClearAll={this.clearAllLanguage}
          onClear={this.removeLanguage}
          data={this.state.languageList}
        />
        <Cards
          addLanguage={this.addLanguage}
          dataList={this.state.filteredDataList}
        />
      </>
    );
  }
}

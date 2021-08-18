import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    isWelcomeTitle: true,
    isReadMore: false,
    isBurgerOpen: false,
  };

  changeTitle = () => {
    this.setState({
      isWelcomeTitle: !this.state.isWelcomeTitle,
    });
  };

  isReadMoreHandle = () => {
    this.setState({
      isReadMore: !this.state.isReadMore,
    });
  };

  trigerBurger = () => {
    this.setState({
      isBurgerOpen: !this.state.isBurgerOpen,
    });
    document.querySelectorAll("li").forEach((item, i) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `menuLinkFade 0.5s ease forwards ${i / 7}s`;
      }
    });
  };

  render() {
    return (
      <div className="app-container">
        <Header
          trigerBurger={this.trigerBurger}
          isBurgerOpen={this.state.isBurgerOpen}
        />
        <div className="main-slide">
          <h1 className="welcome-title" onClick={this.changeTitle}>
            {this.state.isWelcomeTitle
              ? "Takao：Kaohsiung"
              : "Have a Good Time!"}
          </h1>
        </div>
        <MainContent isReadMore={this.state.isReadMore} />
        <button className="action-btn" onClick={this.isReadMoreHandle}>
          {this.state.isReadMore ? "Close" : "Read more"}
        </button>
        <Footer />
      </div>
    );
  }
}

export default App;

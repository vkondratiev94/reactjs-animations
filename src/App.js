import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isModalOpen: false,
    isBlockDisplayed: false
  }

  showModal = () => {
    this.setState({ isModalOpen: true })
  }

  closeModal = () => {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          onClick={() => this.setState(
            ({ isBlockDisplayed }) => ({ isBlockDisplayed: !isBlockDisplayed })
          )}>Toggle</button>
        <Modal
          show={this.state.isModalOpen}
          closed={this.closeModal}
        />
        {this.state.isModalOpen && <Backdrop show />}
        <button
          className="Button"
          onClick={this.showModal}
        >Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;

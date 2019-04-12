import React, { Component } from "react";
import Transition from 'react-transition-group/Transition'

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
        <Transition
          in={this.state.isBlockDisplayed}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {state => (
            <div style={{
              backgroundColor: 'red',
              width: 100,
              height: 100,
              margin: 'auto',
              transition: 'opacity 1s ease-out',
              opacity: state === 'exiting' ? 0 : 1,
            }}></div>
          )}
        </Transition>
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

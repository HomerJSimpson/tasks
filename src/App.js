import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
    this.addGroup = this.addTask.bind(this);
  }

  addTask(e) {
    document.body.querySelector('nav>input').checked = false;
    console.log('add:', e);
  }

  render() {
    return (
      <div className="App">
        <nav className="demo">
          <a href="#x" className="brand">tasks</a>

          <input id="cmenug" type="checkbox" className="show" />
          <label htmlFor="cmenug" className="burger pseudo button">&#8801;</label>

          <div className="menu">
            <a href="#addTask" className="button" onClick={this.addTask}>add task</a>
            <a href="#addGroup" className="button" onClick={this.addGroup}>add group</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;

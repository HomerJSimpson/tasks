import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { add_task } from './actions';
import './App.css';
import Tasks from './Tasks'

export class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.addTask = this.add.bind(this);
    this.addGroup = this.add.bind(this);
  }

  add(e) {
	this.props.addTask({name: 'one' });
    document.body.querySelector('nav>input').checked = false;
    console.log('add:', e.target.hash, e);
    console.log();
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
        <Tasks taskData={{tasks:this.props.tasks, groups:this.props.groups}} />
      </div>
    );
  }
}

AppComponent.propTypes = {
	addTask: PropTypes.func.isRequired
};

const mapStateToProps = state => state.tasksApp;

const mapDispatchToProps = dispatch => ({
	addTask: (o) => {
		dispatch(add_task(o));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);


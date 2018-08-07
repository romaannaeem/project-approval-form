import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions';

import ApprovalForm from './ApprovalForm.js';
import Description from './Description.js';

class App extends Component {
  onSend = values => {
    console.log(this.props);
    axios.post('/api/send', values);
  };

  render() {
    return (
      <div className="container">
        <Description />
        <ApprovalForm onSubmit={this.onSend} />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);

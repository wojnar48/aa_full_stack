import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { loginGuest } from '../actions/session_actions';

class App extends Component {
  static propTypes = {
    loginGuest: PropTypes.func.isRequired,
    children: PropTypes.node,
  };

  render() {
    return (
      <section>
        <header className="header-container">
          <div><i className="fa fa-bug"></i></div>
          <div>
            <Link to="/login">
              <button className="button login">Log in</button>
            </Link>
            <Link to="/signup">
              <button className="button logout">Sign up</button>
            </Link>
            <button onClick={this.props.loginGuest} className="button login">Guest</button>
          </div>
        </header>
        <div className="landing-page">
          {this.props.children}
        </div>
      </section>
    );
  }
}

const mapDispatch = (dispatch) => ({
  loginGuest: () => dispatch(loginGuest())
});

export default connect(null, mapDispatch)(App);
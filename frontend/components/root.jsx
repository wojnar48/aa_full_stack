import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import FormContainer from './session/session_form_container';
// import NavContainer from './nav/nav_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {

    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <Route
            path='/login'
            component={ FormContainer }
            onEnter={ _redirectIfLoggedIn } />

          <Route
            path='/signup'
            component={ FormContainer }
            onEnter={ _redirectIfLoggedIn } />

        </Route>
      </Router>
    </Provider>
  );
};

// <Route path="/chat" component={ NavContainer } />
export default Root;

import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Context from '../../stores/context';

class PrivateRoute extends Component {
  static contextType = Context;

  render() {
    const { component: Component, ...rest } = this.props;
    const { sessionStore } = this.context;

    return (
      <Route
        {...rest}
        render={props => (sessionStore.auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        ))
        }
      />
    );
  }
}

export { PrivateRoute };

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;

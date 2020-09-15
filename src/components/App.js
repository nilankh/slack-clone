import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SignIn, Slack } from './';
import { UserContext } from '../providers/UserProvider';

const PrivateRoute = ({ component: Component, isLoggedIn, ...others }) => {
  return (
    <Route
      {...others}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

function App() {
  const auth = useContext(UserContext);
  console.log('App -> auth', auth);

  if (auth.loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignIn} />
        <PrivateRoute
          exact
          path="/"
          component={Slack}
          isLoggedIn={auth.user ? true : false}
        />
      </Switch>
    </div>
  );
}

export default App;

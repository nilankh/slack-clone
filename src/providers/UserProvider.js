import React, { Component, createContext } from 'react';

const initialUserState = { user: null, loading: false };
export const UserContext = createContext(initialUserState);

class UserProvider extends Component {
  state = initialUserState;
  render() {
    console.log('this.props', this.props);
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;

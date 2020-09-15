import React, { Component, createContext } from 'react';
import { auth, createOrGetUserProfileDocument } from '../firebase';

const initialUserState = { user: null, loading: true };
export const UserContext = createContext(initialUserState);

class UserProvider extends Component {
  state = initialUserState;

  componentDidMount = async () => {
    // this is bacially a listener
    // will be fire whenever you go from loggef in to logged out state or vice versa
    auth.onAuthStateChanged(async (userAuth) => {
      // console.log('UserProvider -> componentDidMount -> userAuth', userAuth);
      if (userAuth) {
        const userRef = await createOrGetUserProfileDocument(userAuth);

        // console.log('userRef', userRef);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            user: { uid: snapshot.id, ...snapshot.data() },
            loading: false,
          });
        });
        this.setState({ user: userAuth, loading: false });
      }
    });
  };

  render() {
    const { user, loading } = this.state;
    const { children } = this.props;
    return (
      <UserContext.Provider value={{ user, loading }}>
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;

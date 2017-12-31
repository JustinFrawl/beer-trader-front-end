import { adapter } from '../services';

export const fetchUser = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  console.log('it happened')
  adapter.auth.getCurrentUser().then(user => {
    dispatch({ type: 'SET_CURRENT_USER', user });
    console.log("user",user.id)
  });
  // adapter.auth.fetchProfile(this.props.user.id);
};

export const fetchAllUsers = () => dispatch => {
  dispatch({type: 'ASYNC_START'});
  console.log("details happening");
  adapter.auth.getAllUsers()
  .then(user => {

    dispatch({ type: 'SET_ALL_USERS', user })
  })
}

export const fetchAllBeers = () => dispatch => {
  dispatch({type: 'ASYNC_START'});
  console.log("details happening");
  adapter.auth.getAllBeers()
  .then(user => {

    dispatch({ type: 'SET_ALL_BEERS', user })
  })
}

export const fetchAllTrades = () => dispatch => {
  dispatch({type: 'ASYNC_START'});
  console.log("details happening");
  adapter.auth.getAllTrades()
  .then(user => {

    dispatch({ type: 'SET_ALL_TRADES', user })
  })
}

export const fetchAllMessages = () => dispatch => {
  dispatch({type: 'ASYNC_START'});
  console.log("messages retrieved");
  adapter.auth.getAllMessages()
  .then(user => {

    dispatch({ type: 'SET_ALL_MESSAGES', user })
  })
}

export const loginUser = (user_name, password, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  console.log('it happened')
  adapter.auth.login({ user_name, password }).then(user => {
    localStorage.setItem('token', user.jwt);
    dispatch({ type: 'SET_CURRENT_USER', user });
    history.push('/profile');
  });
  // adapter.auth.getAllUsers().then(users => {
  //   dispatch({users})
  // })
};

export const registerUser = (user_name, password, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  console.log('it happened')
  adapter.auth.register({user : { user_name, password }}).then(user => {
    dispatch({ type: 'REGISTER_USER', user });
  });
  // adapter.auth.getAllUsers().then(users => {
  //   dispatch({users})
  // })
};

export const createUserTrade = (creator_id, receiver_id, creator_beer_id, receiver_beer_id, status) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  console.log('it happened')
  adapter.auth.createTrade({ creator_id, receiver_id, creator_beer_id, receiver_beer_id, status }).then(user => {
    // localStorage.setItem('token', user.jwt);
    dispatch({ type: 'SET_NEW_TRADE', user });
    // history.push('/profile');
  });
  // adapter.auth.getAllUsers().then(users => {
  //   dispatch({users})
  // })
};

export const createUserBeer = ( name, description, abv, style ) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  console.log('it happened')
  adapter.auth.createBeer({  name, description, abv, style  }).then(user => {
    // localStorage.setItem('token', user.jwt);
    dispatch({ type: 'SET_NEW_BEER', user });
    // history.push('/profile');
  });
  // adapter.auth.getAllUsers().then(users => {
  //   dispatch({users})
  // })
};
export const addUserBeer = ( user_id, beer_id ) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  console.log('it happened')
  adapter.auth.addBeer({  user_id, beer_id  }).then(user => {
    // localStorage.setItem('token', user.jwt);
    dispatch({ type: 'ADD_BEER_TO_USER', user });
    // history.push('/profile');
  });
  // adapter.auth.getAllUsers().then(users => {
  //   dispatch({users})
  // })
};


// export const fetchUsers = () => dispatch => {
//   dispatch({type: 'ASYNC_START'});
//   adapter.auth.getAllUsers().then(users => {
//     dispatch({ type: 'SET_CURRENT_USER', users})
//   })
//   console.log('this is in actions, getallusers', adapter.auth.getAllUsers());
// }

export const logoutUser = () => {
  localStorage.removeItem('token');
  return { type: 'LOGOUT_USER' };
};

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

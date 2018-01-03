const API_ROOT = `http://localhost:3000/api/v1`;

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

const getWithToken = url => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': token }
  }).then(res => res.json())
};

const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`);

};

const getAllUsers = () => {
  return fetch(`${API_ROOT}/users/`)
   .then(res => res.json())
}

const getAllBeers = () => {
  return fetch(`${API_ROOT}/beers/`)
   .then(res => res.json())
}

const getAllTrades = () => {
  return fetch(`${API_ROOT}/trades/`)
   .then(res => res.json())
}

const getAllMessages = () => {
  return fetch(`${API_ROOT}/messages/`)
   .then(res => res.json())
}


export function fetchProfile(userId) {
  return function(dispatch) {
    dispatch({ type: 'ASYNC_START' });
    fetch(`${API_ROOT}/users/${userId}`)
      .then(r => r.json())
      .then(r => console.log(r))
      .then(user => {
        const id = user.id;
        const user_name = user.user_name;
        const messages = user.messages;
        const beers = user.beers;
        const trades = user.trades;


      });
  };
}

const login = data => {
  return fetch(`${API_ROOT}/login/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const register = data => {
  return fetch(`${API_ROOT}/users/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const createTrade = data => {
  return fetch(`${API_ROOT}/trades/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const acceptTrade = data => {
  return fetch(`${API_ROOT}/trades/${data}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({'status':'true'})
  }).then(res => res.json());
};

const destroyTrade = data => {
  return fetch(`${API_ROOT}/trades/${data}`,
  {
    method: 'DELETE'
  }).then(res => res.json());
}

const createBeer = data => {
  return fetch(`${API_ROOT}/beers/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const createMessage = data => {
  return fetch(`${API_ROOT}/messages/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const addBeer = data => {
  return fetch(`${API_ROOT}/beer_lists/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

export const adapter = {
  auth: {
    login,
    getCurrentUser,
    getAllUsers,
    fetchProfile,
    getAllBeers,
    getAllTrades,
    createTrade,
    createBeer,
    addBeer,
    register,
    getAllMessages,
    createMessage,
    destroyTrade,
    acceptTrade
  }
};

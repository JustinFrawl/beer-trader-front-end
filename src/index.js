import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './App';

const initialState = { currentUser: {}};
const authReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case 'SET_CURRENT_USER':
      const { id, user_name } = action.user;

      return { ...state, currentUser: { id, user_name} };
    case 'LOGOUT_USER':
      return { ...state, currentUser: {}, users: [] };
    case 'SET_ALL_USERS':
      const users = action.user;
      return { ...state, users: users};
    case 'SET_ALL_BEERS':
      const beers = action.user;
      return { ...state, beers: beers};
    case 'SET_ALL_TRADES':
      const trades = action.user;
      return { ...state, trades: trades};
    case 'SET_NEW_TRADE':
      const trade = action.user;
      const myTrades = [...state.trades, trade]
      return {...state, trades: myTrades}
    case 'SET_NEW_BEER':
      const beer = action.user;
    case 'ADD_BEER_TO_USER':
      const addedBeer = action.user;
    case 'REGISTER_USER':
      const newUser = action.user;
    case 'SET_ALL_MESSAGES':
      const messages = action.user;
      return {...state, messages: messages};
    case 'SET_NEW_MESSAGE':
      const message = action.user;
      const myMessages = [...state.messages, message]
      return {...state, messages: myMessages};
    case 'DELETE_TRADE':
    // debugger
      const deleteTrade = action.user;
      const tradeRemoved = state.trades.filter(trade => {
        if(!(trade.date_created === deleteTrade.date_created)){
          return trade
        }
      })
      return {...state, trades: tradeRemoved}

    default:
      return state;
  }
};
// const usersReducer =

const rootReducer = combineReducers({
  auth: authReducer
  // users: usersReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const Root = ({ store }) => {
  return (
    <Router>
      <Provider store={store}>
        <Route path="/" component={App} />
      </Provider>
    </Router>
  );
};

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

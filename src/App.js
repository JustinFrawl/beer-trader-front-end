import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Profile from './Profile';
import Users from './Users';
import * as actions from './actions';
import UserBeers from './UserBeers';
import UserTrades from './UserTrades';
import SearchBeers from './SearchBeers';

class App extends Component {
  render() {
    return (
      <div className="App">


        <h2>Welcome to the App</h2>
        <ul>
          <li>
            {this.props.loggedIn ? (
              <a
                onClick={e => {
                  e.preventDefault();
                  this.props.logoutUser();
                }}
              >

                Sign Out
              </a>
            ) : (
              <Link to="/login">Go to Login</Link>
            )}
          </li>
          <li>
            <Link to="/profile">Go to Profile</Link>
          </li>
          <li>
            <Link to="/users">Go to Users</Link>
          </li>
          <li>
            <Link to="/trades">Look at My Pending Trades!</Link>
          </li>
          <li>
            <Link to='/mybeer'>Look at My Beers!</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={Users} />
          <Route path="/trades" component={UserTrades} />
          <Route path="/search" component={SearchBeers} />
          <Route path="/mybeer" component={UserBeers} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id

});
export default connect(mapStateToProps, actions)(App);

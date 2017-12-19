import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Profile from './Profile';
import Users from './Users';
import * as actions from './actions';
import UserBeers from './UserBeers';
import NewTradeForm from './NewTradeForm.js';
import SearchBeers from './SearchBeers';
import { Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">


        <h2>Welcome to the App</h2>
        <Header as='h2' icon textAlign='center'>
        <ul>

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


            <Link to="/profile">Go to Profile</Link>


            <Link to="/users">Go to Users</Link>


            <Link to="/trades">Start a New Trade</Link>


            <Link to='/mybeer'>Look at My Beers!</Link>

        </ul>
        </Header>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={Users} />
          <Route path="/trades" component={NewTradeForm} />
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

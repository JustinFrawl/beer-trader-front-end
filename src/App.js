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
import Trades from './Trades.js';
import NewBeerForm from './NewBeerForm.js';
import RegisterUser from './RegisterUser.js';
import Messages from './Messages.js';
import TradesContainer from './TradesContainer.js';


class App extends Component {
  render() {
    return (
      <div className="App">


        <h2 textAlign='center'>Beer Trader, Pokemon Cards for the Grown Man</h2>
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
              <div>
              <Link to="/login">/ Go to Login</Link>
              </div>
            )}


            <Link to="/profile">/ Go to Profile</Link>


            <Link to="/users">/ Go to Users</Link>




            <Link to='/mybeer'>/ Look at My Beers!</Link>

            <Link to='/inbox'>/ Inbox</Link>


        </ul>
        </Header>
        <Switch>
          <Route path="/register" component={RegisterUser} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={Users} />
          <Route path="/trades" component={NewTradeForm} />
          <Route path="/search" component={SearchBeers} />
          <Route path="/mybeer" component={UserBeers} />
          <Route path="/mytrades" component={TradesContainer} />
          <Route path="/newbeer" component={NewBeerForm} />
          <Route path="/inbox" component={Messages} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id

});
export default connect(mapStateToProps, actions)(App);

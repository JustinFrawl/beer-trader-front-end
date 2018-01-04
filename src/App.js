import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Profile from './Profile';
import Users from './Users';
import * as actions from './actions';
import UserBeers from './UserBeers';
import NewTradeForm from './NewTradeForm.js';
import { Header, Menu, Container, Button, Segment } from 'semantic-ui-react';
import Trades from './Trades.js';
import NewBeerForm from './NewBeerForm.js';
import RegisterUser from './RegisterUser.js';
import Messages from './Messages.js';
import TradesContainer from './TradesContainer.js';
import UsersContainer from './UsersContainer.js';
import BeersContainer from './BeersContainer.js';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Segment
            inverted
            color='yellow'
            textAlign='center'
            style={{ fontSize: '1em', fontWeight: 'normal', maxHeight: 253, padding: '1em 0em' }}
            vertical
          >
      <Container>
      <Header
              as='h1'
              content='Beer Trader, Pokemon Cards for Grown Men'
              style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: '1em', marginTop: '1em' }}
            />
      </Container>
      <Container>
              <Menu pointing secondary size='massive' color='yellow'>
                <Menu.Item as='a'><Link to="/profile">My Profile</Link></Menu.Item>
                <Menu.Item as='a'><Link to='/mybeer'>Look at Your Beers!</Link></Menu.Item>
                <Menu.Item as='a'><Link to="/users">Browser Users</Link></Menu.Item>
                <Menu.Item as='a'><Link to="/mytrades">Manage Your Trades</Link></Menu.Item>
                <Menu.Item as='a'><Link to="/search">Search Beers</Link></Menu.Item>
                <Menu.Item position='right'>
                {this.props.loggedIn ? (
                  <a
                    inverted style={{ marginLeft: '0.5em' }}
                    onClick={e => {
                      e.preventDefault();
                      this.props.logoutUser();
                    }}
                  >

                    Sign Out
                  </a>
                ) : (
                  <div>
                  <Link to="/login">Login</Link>
                  </div>
                )}
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

        <Switch>
          <Route path="/register" component={RegisterUser} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/trades" component={NewTradeForm} />
          <Route path="/search" component={BeersContainer} />
          <Route path="/mybeer" component={UserBeers} />
          <Route path="/mytrades" component={TradesContainer} />
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

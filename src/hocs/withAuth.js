import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions';

const withAuth = WrappedComponent => {
  class AuthedComponent extends React.Component {
    state = {
      authCompleted: this.props.loggedIn
    };

    componentDidMount() {
      if (localStorage.getItem('token')) {
        this.props.fetchUser();
        this.props.fetchAllUsers();
        this.props.fetchAllBeers();
        this.props.fetchAllTrades();
        this.props.fetchAllMessages();
        // this.props.fetchProfile(state.auth.currentUser.id)
        // this.props.fetchUsers();
      } else {
        this.setState({ authCompleted: true });
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        this.setState({ authCompleted: true });
      }
    }

    render() {
      if (this.state.authCompleted) {

        return this.props.loggedIn ? (
          <WrappedComponent {...this.props} />
        ) : (
          <Redirect to="/login"
            state={this.state}/>
        );
      } else {
        return null;
      }
    }
  }

  // const mapStateToProps = state =>{
  //   console.log("this is my state inside hoc",state.auth.messages);
  //   return {
  //     loggedIn: !!state.auth.currentUser.id,
  //     user: state.auth.currentUser,
  //     users: state.auth.users,
  //     beers: state.auth.beers,
  //     trades: state.auth.trades,
  //     messages: state.auth.messages
  //
  //     // users: state.auth.
  //   }
  // };
  const mapStateToProps = state => ({
    loggedIn: !!state.auth.currentUser.id,
    user: state.auth.currentUser,
    users: state.auth.users,
    beers: state.auth.beers,
    trades: state.auth.trades,
    messages: state.auth.messages

    // users: state.auth.
  });

  return connect(mapStateToProps, actions)(AuthedComponent);
};

export default withAuth;

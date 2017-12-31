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
        console.log(!!this.props.user.user_name, this.props)
        // this.props.fetchProfile(state.auth.currentUser.id)
        // this.props.fetchUsers();
        console.log('in with auth', this.props)
      } else {
        this.setState({ authCompleted: true });
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        console.log("props after logging in here", !!this.props.user.user_name)
        this.setState({ authCompleted: true });
        // console.log(this.props.fetchProfileDetails(this.props.user.id));
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

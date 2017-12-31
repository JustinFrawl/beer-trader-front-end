import React, { Component } from 'react';
import withAuth from './hocs/withAuth';
import { Link, Switch, Route } from 'react-router-dom';
import UserBeers from './UserBeers';
import NewTradeForm from './NewTradeForm';
import SearchBeers from './SearchBeers';

class Profile extends Component {

componentDidMount = (props) => {
  // this.props.fetchProfileDetails()
}


render() {
  console.log(this.props)
  return (
    <div>
      <h1>Welcome {this.props.user.user_name}!</h1>
      <h2>What would you like to do?</h2>
      <ul>
      <li>
        <Link to="/search">Look for Beers to Trade!</Link>
      </li>
      <li>
        <Link to="/mytrades">Look at Your Trade History!</Link>
      </li>


      </ul>


    </div>
  );
};
}
export default withAuth(Profile);

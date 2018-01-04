import React, { Component } from 'react';
import withAuth from './hocs/withAuth';
import { Link, Switch, Route } from 'react-router-dom';
import UserBeers from './UserBeers';
import NewTradeForm from './NewTradeForm';
import Beers from './Beers';
import {Container} from 'semantic-ui-react';

class Profile extends Component {

componentDidMount = (props) => {
  // this.props.fetchProfileDetails()
}


render() {
  return (
    <div>
    <Container>
      <h1>Welcome {this.props.user.user_name}!</h1>


      </Container>
    </div>
  );
};
}
export default withAuth(Profile);

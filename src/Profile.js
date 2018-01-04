import React, { Component } from 'react';
import withAuth from './hocs/withAuth';
import { Link, Switch, Route } from 'react-router-dom';
import UserBeers from './UserBeers';
import NewTradeForm from './NewTradeForm';
import Beers from './Beers';
import {Container} from 'semantic-ui-react';
import { Header, Icon, Image, Segment } from 'semantic-ui-react'

class Profile extends Component {

componentDidMount = (props) => {
  // this.props.fetchProfileDetails()
}



render() {
  console.log(this.props)
  if(!this.props.users){
    return (
      <h1>
      Loading.....
      </h1>
    )
  }
  const fullUser = this.props.users.filter(user => user.id === this.props.user.id)
  const renderBeer = fullUser[0].beers.map(beer => {
    return (
      <div>
      {beer.name}
      <br/>
      {beer.description}
      </div>
    )
  });
  console.log(fullUser)
  return (
    <div>
    <Container>
    <Segment
      textAligh='center'>

    <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>
        {this.props.user.user_name}
      </Header.Content>
    </Header>
  </div>
    <Container textAlign='center'>
      <h3>Your Address</h3>
      {fullUser[0].address}
      <h3>Your Beers</h3>
        <ul>
          {renderBeer}
        </ul>
      <h3>Trades</h3>
      <h4>You have participated in {fullUser[0].trades.length} trades</h4>
      <h3>Disclaimer</h3>
      <h4>While it is totally legal to trade beers that you have purchased with your own money, your chosen method of getting beer to a trader may not be.
      Please be advised on the facts of the 3 major postal services available to you.
      <br/>
      Under federal law, the USPS is prohibited from shipping alcohol in any form.
      <br/>
      UPS will ship alcohol but you must have an account with UPS for liability purposes.
      <br/>
      FedEx will also ship alcohol but you will nee to sign a shipping agreement for liability and compliant labels are not available to fast print.
      <br/>
      While you take full responsibility for any consequences of shipping beer for trades on this site, we must stress that you follow all laws and regulations.
      </h4>
      </Container>

      </Segment>
      </Container>
    </div>
  );
};
}
export default withAuth(Profile);

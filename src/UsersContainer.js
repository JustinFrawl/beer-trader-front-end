import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './hocs/withAuth.js';
import { Grid, Segment, Button, Container } from 'semantic-ui-react';
import Users from './Users.js';
import User from './User.js';
import UserDetail from './UserDetail.js';



class UsersContainer extends Component {
// const API_LINK = 'https://auction-back-end.herokuapp.com/api/v1/auctions'

constructor(props){
  super(props)

  this.state = {

    selectedUser: null,

  }
  // this.updateAuctions = this.updateAuctions.bind(this)
}

componentDidMount(){

}


  render() {
    if(!this.props.trades){
      return <div><Container> LOADING </Container></div>
    }


    return (
            <div>
            <Container>
              <Grid columns={2} divided>
                <Grid.Row stretched>
                  <Grid.Column width={4}>



              <Users
                onUserSelect={selectedUser => this.setState({selectedUser})}
                users={this.props.users}
                />
            </Grid.Column>
            <Grid.Column width={12}>
              <UserDetail
                user={this.state.selectedUser}
                loggedUser={this.props.user}
                messages={this.props.messages}
                users={this.props.users}
                beers={this.props.beers}

                />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
          </div>


    );
  }
}

export default withAuth(UsersContainer);

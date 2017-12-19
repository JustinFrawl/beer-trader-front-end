import React from 'react';
import Beer from './Beer.js';
import { Button, Segment } from 'semantic-ui-react'

const User = (props) => {
  // renderBeers = () => {
  //
  // }
  const thisBeerList = props.selectedUser.beers.map(beer => {
    return (
      <Beer
        key={beer.id}
        beer={beer}
      />
    )
  })
  return (
    <Segment attached>
        {props.selectedUser.user_name}
        <Button
          positive
          floated='right'
          >
            View beers for trade!
        </Button>
    </Segment>
  )
}

export default User;

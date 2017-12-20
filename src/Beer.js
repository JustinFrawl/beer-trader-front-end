import React from 'react';
import { Button, Segment } from 'semantic-ui-react'
import AddToBeersButton from './AddToBeersButton.js';

const Beer = (props) => {
  {console.log(props)}
  return (
    <Segment attached>
        {props.beer.name}
        <AddToBeersButton
          beerID={props.beer.id}
          userID={props.user.id}
          addUserBeer={props.addUserBeer}
        />
    </Segment>
  )
}

export default Beer;

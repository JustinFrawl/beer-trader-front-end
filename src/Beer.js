import React from 'react';
import { Button, Segment } from 'semantic-ui-react'
import AddToBeersButton from './AddToBeersButton.js';

const Beer = (props) => {
  console.log('in beer', props)
  if(!props.beer || !props.user){
    <div>
      loading
    </div>
  }
  return (
    <Segment attached>
        <AddToBeersButton
          beerID={props.beer.id}
          userID={props.user.id}
          addUserBeer={props.addUserBeer}
        />
        <li>
        {props.beer.name}
        </li>
        <li>
        {props.beer.description}
        </li>
    </Segment>
  )
}

export default Beer;

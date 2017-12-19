import React from 'react';
import { Button, Segment } from 'semantic-ui-react'

const Beer = (props) => {
  return (

    <Segment attached>
        {props.beer.name}
        <Button positive floated='right'>Add To My Beers</Button>
    </Segment>
  )
}

export default Beer;

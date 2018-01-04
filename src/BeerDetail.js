import React from 'react';
import { Grid, Segment, Image, Header, Card, Icon } from 'semantic-ui-react'
import NewBeerForm from './NewBeerForm.js';


const BeerDetail = (props) => {
  if(!props.beer) {
    return(
    <div>
    <h1>Welcome!
                  Take a closer look at each beers stats!!!</h1>
                  <NewBeerForm/>


    </div>
  )
  }
return(
<div>

  <div>
<h1>  {props.beer.name} </h1>
  </div>

  <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
      <Icon name='beer' size='large'/>
        {props.beer.name}
      </Grid.Column>
      <Grid.Column width={8}>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8}>
      </Grid.Column>
      <Grid.Column width={8}>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)
}

export default BeerDetail;

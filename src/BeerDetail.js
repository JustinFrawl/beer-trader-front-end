import React from 'react';
import { Grid, Segment, Image, Header, Card, Icon } from 'semantic-ui-react'
import NewBeerForm from './NewBeerForm.js';
import AddToBeersButton from './AddToBeersButton.js';


const BeerDetail = (props) => {
  if(!props.beer) {
    return(
    <div>

                  <Header
                          as='h1'
                          content='Welcome, Select a Beer Or List a New One'
                          style={{color: 'white'}}
                          />
                  <NewBeerForm/>


    </div>
  )
  }
return(
<div>

<div>
</div>

  <Card>

    <Card.Content>
      <Card.Header
      textAlign='center'>
        {props.beer.name}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
        </span>
      </Card.Meta>
      <Card.Description
      textAlign='center'>
        <h3>Description:</h3>
        {props.beer.description}
      </Card.Description>
      <Card.Description
      textAlign='center'>
        <h3>Style:</h3>
        {props.beer.style}
      </Card.Description>
      <Card.Description
      textAlign='center'>
        <h3>ABV:</h3>
        %{props.beer.abv}
      </Card.Description>
      <Card.Description
      textAlign='center'>
        <h3>Brewed by:</h3>
        {props.beer.brewery}
      </Card.Description>

    </Card.Content>
    <Card.Content extra>
      <a>
      <AddToBeersButton
        beerID={props.beer.id}
        userID={props.user.id}
        addUserBeer={props.addUserBeer}
      />

      </a>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>
  </div>
)
}

export default BeerDetail;

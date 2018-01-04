import React from 'react'
import withAuth from './hocs/withAuth';
import Beer from './Beer.js';
import { Link} from 'react-router-dom';
import {Card, Button} from 'semantic-ui-react';



const Beers = (props) => {
if(!props.beers){
  return(
    <h2>
      Please wait one sec while we check the records
    </h2>
  )
}
const beerListItems = props.beers.map((beer) => {
  return (

    <Card>

      <Card.Content>
        <Card.Header>
          {beer.name}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
          </span>
        </Card.Meta>
        <Card.Description>
          {beer.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <button
            onClick={() => props.onBeerSelect(beer)}>
              View This Trade
          </button>

        </a>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>

  )
});
return(

<div>
  <h1>
    All Beers Currently Available for Trade
  </h1>
  <Button basic color='blue'
    onClick={props.onButtonCLick}
    >
    Add a Beer
    </Button>
  {beerListItems}
</div>
)
}

export default withAuth(Beers);

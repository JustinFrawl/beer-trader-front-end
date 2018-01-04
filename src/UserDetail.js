import React from 'react';
import { Grid, Segment, Image, Header, Card, Icon } from 'semantic-ui-react'


const UserDetail = (props) => {
  if(!props.user) {
    return(
    <div>
    <Header
            as='h1'
            content='Click on a User to See Their Stats'
            style={{color: 'white'}}
            />
    </div>
  )
  }
  const renderBeer = props.user.beers.map(beer => {
    return (

      <Card.Description
      textAlign='center'>
      {beer.name}:
      <br/>
      {beer.description}
      </Card.Description>

    )
  });
return(
  <div>

  <div>
  </div>

    <Card>

      <Card.Content>
        <Card.Header
        textAlign='center'>
          {props.user.user_name}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
          </span>
        </Card.Meta>
        <Card.Description
        textAlign='center'>
          <h3>Description:</h3>
          {props.user.description}
        </Card.Description>
        <Card.Description
        textAlign='center'>
          <h3>Beers:</h3>
          {renderBeer}
        </Card.Description>
        <Card.Description
        textAlign='center'>
          <h3>Number of Trades:</h3>
          {props.user.trades.length}
        </Card.Description>
      </Card.Content>
    </Card>
    </div>
)
}

export default UserDetail;

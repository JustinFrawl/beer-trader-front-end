import React from 'react';
import Message from './Message.js';
import NewMessageForm from './NewMessageForm.js';
import NewTradeForm from './NewTradeForm.js';
import DeleteTradeButton from './DeleteTradeButton.js';
import AcceptTradeButton from './AcceptTradeButton.js';

import { Grid, Segment, Image, Header, Card, Button, Container } from 'semantic-ui-react'


const TradeDetail = (props) => {



  if(!props.trade) {
    return(
    <div>
    <h1>Welcome!
                  View Your Trades or Start a New One!!</h1>
                  <NewTradeForm/>


    </div>
  )
  }
  const initiator = props.users.filter(user => user.id === props.trade.creator_id)
  const receiver = props.users.filter(user => user.id === props.trade.receiver_id)
  const initiatorBeer = props.beers.filter(beer => beer.id === props.trade.creator_beer_id)
  const receiverBeer = props.beers.filter(beer => beer.id === props.trade.receiver_beer_id)
  const userName = initiator[0].user_name
  const traderName = receiver[0].user_name
  const userBeer = initiatorBeer[0].name
  const traderBeer = receiverBeer[0].name
  const messageList = props.messages.filter(message => message.trade_id === props.trade.id)
  const messagesList = messageList.map(message => {
     const senderName = props.users.filter(user => user.id === message.user_id)
     return (
       <div>
       <Message
        key={message.id}
        senderName={senderName}
        message={message}
        />
      </div>

     )
   }
)
  console.log(props.trade.status)
 if(props.trade.status === false && props.user.id === props.trade.receiver_id){
  return(

    <div>
    <Segment>
    <DeleteTradeButton
      trade={props.trade}
      deleteTrade={props.deleteTrade}
      handleDelete={props.handleDelete}

      />
    <AcceptTradeButton
      trade={props.trade}
      acceptTrade={props.acceptTrade}
    />
    <h1 textAlign='center'>Trade Details</h1>
    <Grid columns={2} divided>
      <Grid.Row stretched>
        <Grid.Column width={8}>
        <Card>

          <Card.Content>
            <Card.Header
            textAlign='center'>
              <h2>{initiator[0].user_name}</h2>
              <h3>{userBeer}</h3>
            </Card.Header>
            <Card.Meta>
              <span className='date'
              textAlign='center'>
                {initiatorBeer[0].style}
                <br/>
                {initiatorBeer[0].abv}%
              </span>
            </Card.Meta>
            <Card.Description
            textAlign='center'>
              {initiatorBeer[0].description}
            </Card.Description>
            <Card.Description
            textAlign='center'>
            <h3>Shipping Address</h3>
              {initiator[0].address}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>

            </a>
          </Card.Content>
          <Card.Content extra>
          Hey there
          </Card.Content>
        </Card>
        </Grid.Column>
        <Grid.Column width={8}>
        <Card>

          <Card.Content>
            <Card.Header>
              <h2>{receiver[0].user_name}</h2>
              <h3>{traderBeer}</h3>
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                {receiverBeer[0].style}
                <br/>
                {receiverBeer[0].abv}%
              </span>
            </Card.Meta>
            <Card.Description>
              {receiverBeer[0].description}
            </Card.Description>
            <Card.Description
            textAlign='center'>
            <h3>Shipping Address</h3>
              {receiver[0].address}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>

            </a>
          </Card.Content>
          <Card.Content extra>
          Hey there
          </Card.Content>
        </Card>
        </Grid.Column>
      </Grid.Row>
      </Grid>
    <Segment
      textAlign='center'
    >
    <Container>
    {messagesList}
    </Container>
    </Segment>
    <NewMessageForm
      traderName={traderName}
      userName={userName}
      receiver_id={receiver[0].id}
      sender_id={initiator[0].id}
      trade={props.trade}
      refreshMessages={props.refreshMessages}
    />
    </Segment>
    </div>
  )
}
return(

  <div>
  <Segment>
  <Segment
    textAlign='center'
    >
  <h1 textAlign='center'>Trade Details</h1>

  <Grid columns={2} divided>
    <Grid.Row stretched>
      <Grid.Column width={8}>
      <Card>

        <Card.Content>
          <Card.Header
          textAlign='center'>
          <h2>{initiator[0].user_name}</h2>
            <h3>{userBeer}</h3>
          </Card.Header>
          <Card.Meta>
            <span className='date'
            textAlign='center'>
              {initiatorBeer[0].style}
              <br/>
              {initiatorBeer[0].abv}%
            </span>
          </Card.Meta>
          <Card.Description
          textAlign='center'>
            {initiatorBeer[0].description}
          </Card.Description>
          <Card.Description
          textAlign='center'>
          <h3>Shipping Address</h3>
            {initiator[0].address}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>

          </a>
        </Card.Content>
        <Card.Content extra>
        Hey there
        </Card.Content>
      </Card>
      </Grid.Column>
      <Grid.Column width={8}>
      <Card floated='right'>

        <Card.Content>
          <Card.Header>
          <h2>{receiver[0].user_name}</h2>
            <h3>{traderBeer}</h3>
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {receiverBeer[0].style}
              <br/>
              {receiverBeer[0].abv}%
            </span>
          </Card.Meta>
          <Card.Description>
            {receiverBeer[0].description}
          </Card.Description>
          <Card.Description
          textAlign='center'>
          <h3>Shipping Address</h3>
            {receiver[0].address}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>

          </a>
        </Card.Content>
        <Card.Content extra>
        Hey there
        </Card.Content>
      </Card>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    </Segment>
    <Segment
      textAlign='center'
    >
    <Container>
    {messagesList}
    </Container>
    </Segment>
  <NewMessageForm
    traderName={traderName}
    userName={userName}
    receiver_id={receiver[0].id}
    sender_id={initiator[0].id}
    trade={props.trade}
    refreshMessages={props.refreshMessages}
  />
  </Segment>
  </div>
)
}

export default TradeDetail;

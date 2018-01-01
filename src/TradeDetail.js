import React from 'react';
import Message from './Message.js';
import NewMessageForm from './NewMessageForm.js';

import { Grid, Segment, Image, Header } from 'semantic-ui-react'


const TradeDetail = (props) => {



  if(!props.trade) {
    return <div><h1>Welcome!
                  Please Log In and Select an Auction in order to place a bid!</h1>


    </div>;
  }
  const initiator = props.users.filter(user => user.id === props.trade.creator_id)
  const receiver = props.users.filter(user => user.id === props.trade.receiver_id)
  const initiatorBeer = props.beers.filter(beer => beer.id === props.trade.creator_beer_id)
  const receiverBeer = props.beers.filter(beer => beer.id === props.trade.receiver_beer_id)
  const userName = initiator[0].user_name
  const traderName = receiver[0].user_name
  const userBeer = initiatorBeer[0].name
  const traderBeer = receiverBeer[0].name
  const messageList = props.trade.messages.map(message => {
     const senderName = props.users.filter(user => user.id === message.user_id)
     console.log(senderName)
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

  return(

    <div>
    {userName} is trading {traderName}, {userBeer} for {traderBeer}
    {messageList}
    <NewMessageForm
      traderName={traderName}
      receiver_id={receiver[0].id}
      sender_id={initiator[0].id}
      trade={props.trade}
    />

    </div>
  )
}

export default TradeDetail;

import React from 'react';
import withAuth from './hocs/withAuth';
import Trade from './Trade.js';
import { Button } from 'semantic-ui-react'


const Trades = (props) => {
  if(!props.trades || !props.users){
    return(
      <h2>
        Go Fuck Yourself
      </h2>
    )
  }
  const renderTrade = props.trades.map(trade => {
    if( trade.creator_id === props.user.id || trade.receiver_id === props.user.id){
    const initiator = props.users.filter(user => user.id === trade.creator_id)
    const receiver = props.users.filter(user => user.id === trade.receiver_id)
    const initiatorBeer = props.beers.filter(beer => beer.id === trade.creator_beer_id)
    const receiverBeer = props.beers.filter(beer => beer.id === trade.receiver_beer_id)
    // debugger
    return (
      <li>
    <Trade
      key={trade.id}
      trade={trade}
      initiator={initiator}
      receiver={receiver}
      initiatorBeer={initiatorBeer}
      receiverBeer={receiverBeer}
      onTradeSelect={props.onTradeSelect}
      />
      </li>
    )
  };
})
  return (
    <ul>
    <Button basic color='blue'
      onClick={props.onButtonCLick}
      >
      Start a New Trade
      </Button>
    {renderTrade}
    </ul>
  )
}


export default withAuth(Trades);

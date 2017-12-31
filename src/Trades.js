import React from 'react';
import withAuth from './hocs/withAuth';
import Trade from './Trade.js';


const Trades = (props) => {
  if(!props.trades || !props.users){
    return(
      <h2>
        Go Fuck Yourself
      </h2>
    )
  }
  const myTrades = props.trades.filter(trade => trade.creator_id === props.user.id || trade.receiver_id === props.user.id);
  const renderTrade = myTrades.map(trade => {
    const initiator = props.users.filter(user => user.id === trade.creator_id)
    const receiver = props.users.filter(user => user.id === trade.receiver_id)
    const initiatorBeer = props.beers.filter(beer => beer.id === trade.creator_beer_id)
    const receiverBeer = props.beers.filter(beer => beer.id === trade.receiver_beer_id)
    return (
      <li>
    <Trade
      trade={trade}
      initiator={initiator}
      receiver={receiver}
      initiatorBeer={initiatorBeer}
      receiverBeer={receiverBeer}
      />
      </li>
    )
  });
  return (
    <ul>
    {renderTrade}
    </ul>
  )
}

export default withAuth(Trades);

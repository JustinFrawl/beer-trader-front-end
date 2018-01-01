import React from 'react';

import { Grid, Segment, Image, Header, Message } from 'semantic-ui-react'


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

  return(

    <div>
    {console.log(props)}
    {userName} is trading {traderName}, {userBeer} for {traderBeer}

    </div>
  )
}

export default TradeDetail;

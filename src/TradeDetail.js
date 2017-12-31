import React from 'react';

import { Grid, Segment, Image, Header, Message } from 'semantic-ui-react'


const TradeDetail = (props) => {
  if(!props.trade) {
    return <div><h1>Welcome!
                  Please Log In and Select an Auction in order to place a bid!</h1>


    </div>;
  }


  return(
    <div>
    HI

    </div>
  )
}

export default TradeDetail;

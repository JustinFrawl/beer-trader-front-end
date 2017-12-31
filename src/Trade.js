import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const Trade = (props) => {
  if(!props.initiator && !props.receiver){
    return (
      <div>
      be patient please, this job is hard
      </div>
    )
  }
  const userName = props.initiator[0].user_name
  const traderName = props.receiver[0].user_name
  const userBeer = props.initiatorBeer[0].name
  const traderBeer = props.receiverBeer[0].name
return (
  <Card>

    <Card.Content>
      <Card.Header>
        Trade Between {userName} and {traderName}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {props.trade.status}
        </span>
      </Card.Meta>
      <Card.Description>
        {userName} is trading {userBeer} for {traderName} {traderBeer}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <button>View This Trade</button>

      </a>
    </Card.Content>
  </Card>
)
}

export default Trade

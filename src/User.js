import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const User = (props) => {

  return (
    <Card>

      <Card.Content>
        <Card.Header>
          <h3>{props.user.user_name}</h3>
        </Card.Header>
        <Card.Meta>
          <span className='date'>
          Has {props.user.beers.length} beer up for trade
          </span>
        </Card.Meta>
        <Card.Description>
        HI
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <button
            onClick={() => props.onUserSelect(props.user)}>
              View This User
          </button>

        </a>
      </Card.Content>
      <Card.Content extra>
      Hey there
      </Card.Content>
    </Card>

  )
}

export default User;

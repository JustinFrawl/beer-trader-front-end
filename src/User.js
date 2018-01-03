import React from 'react';
import { Button, Segment } from 'semantic-ui-react'

const User = (props) => {
  // renderBeers = () => {
  //
  // }
  const thisBeerList = props.selectedUser.beers.map(beer => {
    return (
      <li>
        {beer.name}
      </li>
    )
  })
  return (
    <Segment attached>


        <h3>{props.selectedUser.user_name}</h3>
        {thisBeerList}
    </Segment>
  )
}

export default User;

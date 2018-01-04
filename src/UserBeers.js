import React from 'react'
import withAuth from './hocs/withAuth';
import {Container} from 'semantic-ui-react';


const UserBeers = ({beers, users, user}) => {
if(!users){
  return(
    <Container>
    <h2>
      Please wait one sec while we check the records
    </h2>
    </Container>
  )
}
// props.users.filter(user => user.id === props.bid.user_id)
const userBeerList = users.filter(searchUser => searchUser.id === user.id)
const renderBeer = userBeerList[0].beers.map(beer => {
  return (
    <li>
    {beer.name}:
    {beer.description}
    </li>
  )
});

return(

<div>
<Container>
  <h1 floated='center'>
    Your Current Beers
  </h1>
  <ul>
    {renderBeer}
  </ul>
  </Container>
</div>
)
}

export default withAuth(UserBeers);

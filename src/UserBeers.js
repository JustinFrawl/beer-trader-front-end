import React from 'react'
import withAuth from './hocs/withAuth';


const UserBeers = ({beers, users, user}) => {
if(!users){
  return(
    <h2>
      Please wait one sec while we check the records
    </h2>
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


  console.log(renderBeer)




// const beerListItems = beers.map((beer) => {
//   return (
//     <li>
//     {beer.name}:
//     {beer.description}
//     </li>
//   )
// });
return(

<div>
  <h1>
    Your Current Beers
  </h1>
  <ul>
    {renderBeer}
  </ul>
</div>
)
}

export default withAuth(UserBeers);

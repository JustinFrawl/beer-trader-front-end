import React from 'react'
import withAuth from './hocs/withAuth';


const SearchBeers = ({beers}) => {
if(!beers){
  return(
    <h2>
      Please wait one sec while we check the records
    </h2>
  )
}
const beerListItems = beers.map((beer) => {
  return (
    <li>
    {beer.name}:
    {beer.description}
    </li>
  )
});
return(

<div>
  <h1>
    All Beers Currently Available for Trade
  </h1>
  <ul>
  {beerListItems}
  </ul>
</div>
)
}

export default withAuth(SearchBeers);

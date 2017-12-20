import React from 'react'
import withAuth from './hocs/withAuth';
import Beer from './Beer.js';
import { Link } from 'react-router-dom';



const SearchBeers = (props) => {
if(!props.beers){
  return(
    <h2>
      Please wait one sec while we check the records
    </h2>
  )
}
const beerListItems = props.beers.map((beer) => {
  return (

    <Beer
        // onAuctionSelect={props.onAuctionSelect}
        key={beer.id}
        beer={beer}
        user={props.user}
        addUserBeer={props.addUserBeer}
      />

  )
});
return(

<div>
  <h1>
    All Beers Currently Available for Trade
  </h1>
  <Link to="newbeer" float='center'>Add a Beer!</Link>
  <ul>
  {beerListItems}
  </ul>
</div>
)
}

export default withAuth(SearchBeers);

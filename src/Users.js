import React, {Component} from 'react'
import withAuth from './hocs/withAuth';
import User from './User.js';


const Users = (props) => {
if(!props.users){
  return(
    <h2>
      Please wait one sec while we check the records
    </h2>
  )
}
const userList = props.users.map((user) => {
  if(user.id === props.user.id){
  return (
    <div>You
    <User
        // onAuctionSelect={props.onAuctionSelect}
        key={user.id}
        selectedUser={user}
        user={props.user}
      />
    </div>
  )
}
  return (
    <User
        // onAuctionSelect={props.onAuctionSelect}
        key={user.id}
        selectedUser={user}
        user={props.user}
        beers={props.user.beers}
      />
  )
});
return(

<div>
  <h1>
    All Beers Currently Available for Trade
  </h1>
  <ul>
  {userList}
  </ul>
</div>
)
}

export default withAuth(Users);

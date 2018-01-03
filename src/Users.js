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
        onUserSelect={props.onUserSelect}
        key={user.id}
        user={user}
      />
    </div>
  )
}
  return (
    <User
        onUserSelect={props.onUserSelect}
        key={user.id}
        selectedUser={user}
        user={user}
        beers={props.user.beers}
      />
  )
});
return(

<div>
  <h1>
    List of Users
  </h1>
  <ul>
  {userList}
  </ul>
</div>
)
}

export default withAuth(Users);

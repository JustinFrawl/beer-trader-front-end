import React, {Component} from 'react'
import withAuth from './hocs/withAuth';
import User from './User.js';
import { Header } from 'semantic-ui-react';


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

<div style={{height:"70vh", maxHeight:"70vh", overflow: "auto"}}>
  <Header
          as='h1'
          content='List of Users'
          style={{color: 'white'}}
          />

  {userList}

</div>
)
}

export default withAuth(Users);

import React from 'react';
import { Grid, Segment, Image, Header, Card, Button } from 'semantic-ui-react'


const UserDetail = (props) => {


console.log(props)
  if(!props.user) {
    return(
    <div>
    <h1>Welcome!
                  Take a closer look at each users stats!!!</h1>


    </div>
  )
  }
return(

  <div>
<h1>  {props.user.user_name} </h1>
  </div>
)
}

export default UserDetail;

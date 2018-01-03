import React from 'react';
import { Grid, Segment, Image, Header, Card, Icon } from 'semantic-ui-react'


const UserDetail = (props) => {
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

  <div>
<h1>  {props.user.user_name} </h1>
  </div>

  <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
      <Icon name='user' size='large'/>
        {props.user.user_name}
      </Grid.Column>
      <Grid.Column width={8}>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8}>
      </Grid.Column>
      <Grid.Column width={8}>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)
}

export default UserDetail;

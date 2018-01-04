import React from 'react';
import { Grid, Segment, Image, Header, Card, Icon } from 'semantic-ui-react'


const UserDetail = (props) => {
  if(!props.user) {
    return(
    <div>
    <Header
            as='h1'
            content='Click on a User to See Their Stats'
            style={{color: 'white'}}
            />
    </div>
  )
  }
return(
<div>
<Segment>

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
  </Segment>
  </div>
)
}

export default UserDetail;

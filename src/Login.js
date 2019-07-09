import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as actions from './actions';
import Card from './Card.js';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        user_name: 'frawlcity',
        password: 'kenneth'
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fields: { user_name, password } } = this.state;
    this.props.loginUser(user_name, password, this.props.history);
  };

  render() {
    const { fields } = this.state;
    return (
      <div className='login-form'>
      <style>{`
      body > div,
      body > div > div,
      body > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
     textAlign='center'
     style={{ height: '100%' }}
     verticalAlign='middle'
   >
   <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
         </Header>
        {this.state.error ? <h1>Try Again</h1> : null}
          <Form size='large'
          onSubmit={this.handleSubmit}>
          <Segment stacked>
            <div className="ui field">
              <label>user_name</label>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                name="user_name"
                placeholder="user_name"
                value={fields.user_name}
                onChange={this.handleChange}
              />

              <label>Password</label>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name="password"
                type="password"
                placeholder="password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <Button color='yellow' fluid size='large'>Login</Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/register">Create an Account Here</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
    );
  }
}

export default withRouter(connect(null, actions)(Login));

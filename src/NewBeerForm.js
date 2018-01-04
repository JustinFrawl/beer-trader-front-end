import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from './actions';
import Card from './Card.js';
import withAuth from './hocs/withAuth';
import {Segment} from 'semantic-ui-react';

class NewTradeForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      error: false,
      fields: {

        name: '',
        description: '',
        abv: '',
        style: '',
        brewery: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const receiver = this.convertUserName(receiver_id)
    // const creator_beer = this.convertSenderBeerName(creator_beer_id)
    // const receiver_beer = this.convertRecevierBeerName(receiver_beer_id)
    const { fields: { name, description, abv, style, brewery } } = this.state;
    this.props.createUserBeer(name, description, abv, style, brewery);

  };

  render() {
    const { fields } = this.state;
    return (
      <div>
      <Segment>
        {this.state.error ? <h1>Try Again</h1> : null}
        <div className="ui form">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Beer Name</label>
              <input
                name="name"
                placeholder="name"
                value={fields.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Describe It!</label>
              <input
                name="description"
                placeholder="description"
                value={fields.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>What is the ABV (Ex: 8.4)</label>
              <input
                name="abv"
                placeholder="abv"
                value={fields.abv}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>What Style is it?</label>
              <input
                name="style"
                placeholder="style"
                value={fields.style}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>What Style is it?</label>
              <input
                name="brewery"
                placeholder="brewery"
                value={fields.brewery}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="ui basic green button">
              List This Beer
            </button>
          </form>
        </div>
        </Segment>
      </div>
    );
  }
}

export default withAuth(NewTradeForm);

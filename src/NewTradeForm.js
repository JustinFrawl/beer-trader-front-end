import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from './actions';
import Card from './Card.js';
import withAuth from './hocs/withAuth';

class NewTradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      fields: {

        creator_id: this.props.user.id,
        receiver_id: '',
        creator_beer_id: '',
        receiver_beer_id: '',
        status: false
      },
      messageFields: {

      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  convertUserName = e => {
    const receiver_name = this.state.fields.receiver_id
    const user = this.props.users.filter(user => user.user_name === receiver_name)
      return user[0].id

  }
  convertSenderBeerName = e => {
    const beer_name = this.state.fields.creator_beer_id
    const beer = this.props.beers.filter(beer => beer.name === beer_name)
    return beer[0].id
  }

  convertRecevierBeerName = e => {
    const beer_name = this.state.fields.receiver_beer_id
    const beer = this.props.beers.filter(beer => beer.name === beer_name)
    return beer[0].id
  }

  handleSubmit = e => {
    e.preventDefault();
    const receiver = this.convertUserName(receiver_id)
    const creator_beer = this.convertSenderBeerName(creator_beer_id)
    const receiver_beer = this.convertRecevierBeerName(receiver_beer_id)
    const { fields: { creator_id, receiver_id, creator_beer_id, receiver_beer_id, status } } = this.state;
    this.props.createUserTrade(creator_id, receiver, creator_beer, receiver_beer, status);

  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        {this.state.error ? <h1>Try Again</h1> : null}
        <div className="ui form">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Who Would You Like to Trade With?</label>
              <input
                name="receiver_id"
                placeholder="receiver_id"
                value={fields.receiver_id}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>What Beer do You Want To Trade?</label>
              <input
                name="creator_beer_id"
                placeholder="creator_beer_id"
                value={fields.creator_beer_id}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>What Beer do You Want To Trade For?</label>
              <input
                name="receiver_beer_id"
                placeholder="receiver_beer_id"
                value={fields.receiver_beer_id}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="ui basic green button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(NewTradeForm);

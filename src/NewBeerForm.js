import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from './actions';
import Card from './Card.js';
import withAuth from './hocs/withAuth';

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
        style: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  // convertUserName = e => {
  //   const receiver_name = this.state.fields.receiver_id
  //   const user = this.props.users.filter(user => user.user_name === receiver_name)
  //     return user[0].id
  //
  // }
  // convertSenderBeerName = e => {
  //   const beer_name = this.state.fields.creator_beer_id
  //   const beer = this.props.beers.filter(beer => beer.name === beer_name)
  //   debugger
  //   return beer[0].id
  // }
  //
  // convertRecevierBeerName = e => {
  //   const beer_name = this.state.fields.receiver_beer_id
  //   const beer = this.props.beers.filter(beer => beer.name === beer_name)
  //   debugger
  //   return beer[0].id
  // }

  handleSubmit = e => {
    e.preventDefault();
    // const receiver = this.convertUserName(receiver_id)
    // const creator_beer = this.convertSenderBeerName(creator_beer_id)
    // const receiver_beer = this.convertRecevierBeerName(receiver_beer_id)
    const { fields: { name, description, abv, style } } = this.state;
    this.props.createUserBeer(name, description, abv, style);

  };

  render() {
    const { fields } = this.state;
    return (
      <div>
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
            <button type="submit" className="ui basic green button">
              List This Beer
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(NewTradeForm);

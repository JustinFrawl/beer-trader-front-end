import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from './actions';
import Card from './Card.js';
import withAuth from './hocs/withAuth';

class NewMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      fields: {

        user_id: this.props.user.id,
        receiver_id: this.props.receiver_id,
        trade_id: this.props.trade.id,
        content: ''
      },
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fields: { user_id, receiver_id, trade_id, content } } = this.state;
    this.props.createUserMessage(user_id, receiver_id, trade_id, content);
    this.forceUpdate()

  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        {this.state.error ? <h1>Try Again</h1> : null}
        <div className="ui form">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Send a Message to {this.props.traderName}</label>
              <input
                name="content"
                placeholder="Write Your Message"
                value={fields.content}
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="ui basic green button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(NewMessageForm);

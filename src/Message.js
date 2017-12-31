import React from 'react';
import { Segment } from 'semantic-ui-react'
// import withAuth from './hocs/withAuth.js';

const Message = (props) => {
  return(
  <Segment attached>
  {props.senderName[0].user_name}
  <li>
  {props.message.content}
  </li>
  </Segment>
)
}

export default Message;

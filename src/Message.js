import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'// import withAuth from './hocs/withAuth.js';

const Message = (props) => {
  return(


<Comment >
      <Comment.Content>
        <Comment.Author as='a'>{props.senderName[0].user_name}</Comment.Author>
        <Comment.Actions>
          <Comment.Text>{props.message.content}</Comment.Text>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
)
}
export default Message;

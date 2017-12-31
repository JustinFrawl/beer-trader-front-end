import React from 'react'
import withAuth from './hocs/withAuth';
import Message from './Message.js';

const Messages = (props) => {
  console.log('this is the props in messages', props)
  if(!props.messages){
    return (
      <div>
        Loading....
      </div>
    )
  }
  const messageList = props.messages.map(message => {
   if(  props.user.id === message.user_id || props.user.id === message.receiver_id){
     const senderName = props.users.filter(user => user.id === message.user_id)
     console.log(senderName)
     return (
       <div>
       <Message
        key={message.id}
        senderName={senderName}
        message={message}
        />
      </div>

     )
   }
 }
)
  console.log('messageList', messageList)
  return(
    <div>
    <h1>
    All messages
    </h1>
    <ul>
   {messageList}
   </ul>
    </div>
  )

}

export default withAuth(Messages);

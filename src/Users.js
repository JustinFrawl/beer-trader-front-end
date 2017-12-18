import React from 'react';
import withAuth from './hocs/withAuth';

const Users = (props) => {

  return (
    <div>
      <h1>Congrats {props.user.user_name}, You are Logged In</h1>
      {console.log(props)}
      
    </div>
  );
};

export default withAuth(Users);

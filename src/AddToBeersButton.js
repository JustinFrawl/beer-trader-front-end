import React from 'react';
import { Button, Segment } from 'semantic-ui-react'
import withAuth from './hocs/withAuth';



class AddToBeersButton extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fields: {
        user_id: this.props.userID,
        beer_id: this.props.beerID
      }
    }
  }
  handleClick = e => {
    console.log(this.state)
    const { fields: { user_id, beer_id } } = this.state;
    this.props.addUserBeer(user_id, beer_id);

  }
  render(){
    // if(!this.props.user){
    //   return(
    //     <h2>
    //       Please wait one sec while we check the records
    //     </h2>
    //   )
    // }
    console.log(this.props)
    return (
    <div>
      <Button
        positive
        floated='right'
        onClick={this.handleClick}
        >
          Add To My Beers
        </Button>
    </div>
  )
  }
}
export default AddToBeersButton

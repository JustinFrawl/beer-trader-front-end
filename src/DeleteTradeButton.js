import React from 'react';
import { Button } from 'semantic-ui-react';

class DeleteTradeButton extends React.Component {
  constructor(props){
    super(props);
  }

  handleDelete = (data) => {
    this.props.handleDelete()
    this.props.deleteTrade(this.props.trade.id)

  }
  render() {
    return(
      <div>
      <Button basic color='red'
        onClick={this.handleDelete}
        >
        Reject Trade
      </Button>
      </div>
    )
  }
}
export default DeleteTradeButton

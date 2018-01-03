import React from 'react';
import { Button } from 'semantic-ui-react';

class AcceptTradeButton extends React.Component {
  constructor(props){
    super(props);
  }

  handleAccept = (data) => {
    this.props.acceptTrade(this.props.trade.id)

  }
  render() {
    return(
      <div>
      <Button basic color='green'
        onClick={this.handleAccept}
        >
        Accept Trade
      </Button>
      </div>
    )
  }
}
export default AcceptTradeButton

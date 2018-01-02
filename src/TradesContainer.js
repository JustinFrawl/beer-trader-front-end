import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './hocs/withAuth.js';
import { Grid, Segment } from 'semantic-ui-react';
import Trades from './Trades.js';
import Trade from './Trade.js';
import TradeDetail from './TradeDetail.js';



class TradesContainer extends Component {
// const API_LINK = 'https://auction-back-end.herokuapp.com/api/v1/auctions'

constructor(props){
  super(props)

  this.state = {

    selectedTrade: null,
    trades: this.props.trades

  }
  // this.updateAuctions = this.updateAuctions.bind(this)
}

componentDidMount(){

}

messageUpdate = () => {
  this.props.fetchAllTrades()
  this.setState({
    trades: this.props.trades
  })
}

// updateTrades = () => {
//     fetch('https://localhost:3000/api/v1/trades')
//     .then(res => res.json())
//     .then(res => {
//       const stateSelected = this.state.selectedTrade;
//       const updatedSelected = res.filter(selected => selected.id === stateSelected.id)
//       // this.setState({
//       //   selectedTrade: updatedSelected[0]
//       // });
//       console.log(updatedSelected)
//     });
// }


  render() {
    if(this.props.trades < 1){
      return <div> LOADING </div>
    }


    return (
            <div>
              <Grid columns={2} divided>
                <Grid.Row stretched>
                  <Grid.Column width={4}>

              <Segment>
              <Link to="/trades">Start a New Trade</Link>
              <Trades
                onTradeSelect={selectedTrade => this.setState({selectedTrade})}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column width={12}>
              <TradeDetail
                trade={this.state.selectedTrade}
                user={this.props.user}
                messages={this.props.messages}
                users={this.props.users}
                beers={this.props.beers}
                grabTradeId={this.grabTradeId}
                currentUser={this.props.user}
                refreshMessages={this.messageUpdate}

                />
            </Grid.Column>
          </Grid.Row>
        </Grid>
          </div>


    );
  }
}

export default withAuth(TradesContainer);

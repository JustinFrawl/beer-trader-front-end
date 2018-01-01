import React, { Component } from 'react';
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

    selectedTrade: null

  }
  // this.updateAuctions = this.updateAuctions.bind(this)
}

componentDidMount(){

}



  render() {
    if(this.props.trades < 1){
      return <div> LOADING </div>
    }
    return (
            <div>
              <Grid columns={2} divided>
                <Grid.Row stretched>
                  <Grid.Column width={3}>

              <Segment>
              <Trades
                onTradeSelect={selectedTrade => this.setState({selectedTrade})}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column width={13}>
              <TradeDetail
                trade={this.state.selectedTrade}
                users={this.props.users}
                beers={this.props.beers}
                grabTradeId={this.grabTradeId}
                currentUser={this.props.user}
                userList={this.props.users}
                refreshBid={this.bidRefresh}
                />
            </Grid.Column>
          </Grid.Row>
        </Grid>
          </div>


    );
  }
}

export default withAuth(TradesContainer);

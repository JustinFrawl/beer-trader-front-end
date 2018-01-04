import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './hocs/withAuth.js';
import { Grid, Segment, Button, Container } from 'semantic-ui-react';
import Beers from './Beers.js';
import Beer from './Beer.js';
import BeerDetail from './BeerDetail.js';
import BeerSearchBar from './BeerSearchBar.js';



class BeersContainer extends Component {
// const API_LINK = 'https://auction-back-end.herokuapp.com/api/v1/auctions'

constructor(props){
  super(props)

  this.state = {
    searchTerm: '',
    selectedBeer: null

  }
  // this.updateAuctions = this.updateAuctions.bind(this)
}

componentDidMount(){

}
filterResults = () => {
  // console.log(this.state)
  if(!this.props.beers){
    return this.props.beers
  }
   let newList = this.props.beers.filter(beer => {
     if(beer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
       return beer
     }
   })
    return newList
 }

messageUpdate = () => {
  // this.props.fetchAllBeers()
  // this.setState({
  //   trades: this.props.trades
  // })
}


// updateBeers = () => {
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
    if(!this.props.beers){
      <Container>
      return <div> LOADING </div>
      </Container>
    }

    return (
            <div>
            <Container style={{marginTop: '1em'}}>
              <Grid columns={2} divided>
                <Grid.Row stretched>
                  <Grid.Column width={4}>

              <Segment>
              <BeerSearchBar
              searchTerm={this.state.searchTerm}
              handleSearchTerm={searchTerm => this.setState({searchTerm})}
              />

              <Beers
                onBeerSelect={selectedBeer => this.setState({selectedBeer})}
                onButtonCLick={selectedBeer => this.setState({selectedBeer: null})}
                users={this.props.users}
                beers={this.props.beers}
                searchBeers={this.filterResults()}
                user={this.props.user}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column width={12}>
              <BeerDetail
                beer={this.state.selectedBeer}
                user={this.props.user}
                users={this.props.users}
                addUserBeer={this.props.addUserBeer}
                />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
          </div>


    );
  }
}

export default withAuth(BeersContainer);

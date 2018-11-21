import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from "../components/Scroll";
import {setSearchField} from '../actions';

const mapStateToProps = state => {
  // console.log(state);
  return {
    searchfield: state.searchfield
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
   }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
		  robots : []
	    // searchfield :''
    }
    // this.onSearchChange = this.onSearchChange.bind(this);
    

  }	

  async componentDidMount(){
    const u1 = await fetch("https://jsonplaceholder.typicode.com/users")
    const u2 = await u1.json()
    await this.setState({ robots : u2 })
  }
  
  // // we can use the arrow function syntax which automatically bind the function .
  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value },() => console.log(this.state.searchfield));//bcoz setState works in asynchronous way
  //   //https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback 
  // }  

  render(){
    const {robots} = this.state;
    const {searchfield, onSearchChange} = this.props;
    const filteredbots = robots.filter(robo => 
      robo.name.toLowerCase().includes(searchfield.toLowerCase()));
    return !robots.length ?
      <h1>LOADING</h1> :
      (
        <div className = 'tc'>
          <h1 className='f1 light-green'> RoboFriends </h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll> 
            <ErrorBoundry>
        	   <CardList robo = { filteredbots }/>
            </ErrorBoundry>
          </Scroll> 
        </div>  
      );
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

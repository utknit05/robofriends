import React, {Component} from 'react';
import CardList from "./CardList"
import { robots } from "./robots"
import SearchBox from "./SearchBox"

class App extends Component {
  constructor(){
    super()
    this.state = {
		robots : robots,
	    searchfield :''
    }
    this.onSearchChange = this.onSearchChange.bind(this);
    // either use above statement to bind or use the arrow function syntax which automatically bind the function .
  }	
  
  onSearchChange(event){
    this.setState({ searchfield: event.target.value });
  }  

  render(){
	const filteredbots = this.state.robots.filter(robo => 
      robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
    return (
      <div className = 'tc'>
        <h1> RoboFriends </h1>
        <SearchBox searchChange={this.onSearchChange}/>
	    <CardList robots = { filteredbots }/>
      </div>
      );
   }
}

export default App;
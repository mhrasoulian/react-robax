import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchField from '../components/SearchField';
import Scroll from '../components/Scroll.js';


class App extends Component {

constructor() {
  super()
  this.state = {
    'robots' : [] ,
    'searchField': ''
  }
}

onSearchChange  = (event) => {
  this.setState({searchField:event.target.value});
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json() )
  .then(users => {this.setState({robots: users})})
}

  render(){
    const {robots, searchField} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return !robots.length ?
    <h1> Loading ... </h1>
     :
       (
        <div className='text-center'>
        <h1 className='mt-3'>Robax</h1>
        <small className='text-muted d-block mb-3'>By: Mh.rasoulian</small>
        <SearchField searchChange={this.onSearchChange}  />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
       </div>
      );
    
  }
}

export default App;

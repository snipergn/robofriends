import React, { Component } from 'react';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css'
import Scroll from '../components/Scroll'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    } 

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }


onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    
}

    render() {  
        const {robots, searchfield} = this.state;
        const filtredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? 
            <h1>Loading</h1> :
            (
                
                <div class='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange= {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filtredRobots}/>
                    </Scroll>
                    
                </div>
            );
        }
    }

export default App;
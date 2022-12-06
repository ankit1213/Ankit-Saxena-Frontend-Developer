import logo from './logo.svg';
import './App.css';

import { Component,Fragment } from 'react';
import Card from './Components/Card';
import  Modal  from './Components/Modal';
import  Filter  from './Components/Filter';
import MassFilter from './Components/MassFilter';
import CostFilter from './Components/CostFilter';

class App extends Component {

  constructor(){
    super();

    this.state={

      rockets:[],
      selectedHeight:0,
      selectedMass:0,
      
    }
  }

  componentDidMount(){
    fetch("https://api.spacexdata.com/v4/rockets")
    .then((res)=>res.json())
    .then(rockets=>{this.setState({rockets:rockets})
    console.log(rockets)
   
      
  })
  }

  handleChange=(e)=>{
    this.setState({selectedHeight:e.target.value})
  }
  handleMass=(e)=>{
    this.setState({selectedMass:e.target.value})
  }

  
  render(){
    const {rockets,selectedHeight,selectedMass}=this.state;
    const filteredRockets=rockets.filter((rocket)=>{
      return rocket.height.feet > selectedHeight && rocket.mass.kg > selectedMass 
    }
    )
    return (
     
      <div className="container">
         <h1>SpaceX Rockets</h1>

         <h3>!!! A place where Geniuses work for the Future !!!</h3>
         <Filter onChange={this.handleChange}/> 
         <MassFilter onChange={this.handleMass}/>
       
        <div className='row'>
        
        
        {filteredRockets.map((rocket)=>( 
          <Fragment>  
             
            
        <Card rocket={rocket}/>
        <Card rocket={rocket}/>
        <Modal rocket={rocket}/>
      </Fragment>
    
  ))}
        </div>
      </div>
    );
    }
  
}

export default App;

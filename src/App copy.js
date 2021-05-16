import React, {Component} from 'react'


import logo from './logo.svg';
import './App.scss';
// import './styles/style.scss';
import TopContainer from './components/topContainer';
import Info from './components/Info';
import Portfolio from './components/portfolio'



class App extends Component{
  constructor(){
  super()
    
    
    }
  
  render() {
  
    return (

  <main>
    <div className="container">
    <TopContainer/>

   <Info/>

   <Portfolio/>
    </div>
  </main>
   )
  }
};
export default App;

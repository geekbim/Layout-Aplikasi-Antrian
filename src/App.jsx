import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Center from './components/Center'
import Loket from './components/Loket';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Navbar />
        
        <Center />

        <Loket />

        <Footer/>
      
      </div>
    )
  }
}


export default App


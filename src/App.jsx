import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Center from './components/Center'
// import Loket from './components/Loket'
import Loket1 from './components/Loket1'
import Footer from './components/Footer'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
    "data_loket" : [
      {
        nama: "Loket 1",
        nomor: 1
      },
      {
        nama: "Loket 2",
        nomor: 2
      },
      {
        nama: "Loket 3",
        nomor: 3
      },
      {
        nama: "Loket 4",
        nomor: 4
      }
    ]}
  }

  render() {
    return (
      <div className="App">
        
        <Navbar />
        
        <Center />

        {/* <Loket /> */}

        <div className="container-fluid">
          <div className="row mt-3 mb-3">
            {this.state.data_loket.map((item, index) => {
              return (
                <Loket1 nama={item.nama} nomor={item.nomor}/>
              )
            })}
          </div>
        </div>

        <Footer/>
      
      </div>
    )
  }
}


export default App


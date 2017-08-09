import React, { Component } from 'react'
//import {init, animate} from './utils'
import {loadTextures} from './rainEffect/refactored'
import './App.css'

class App extends Component {
  componentDidMount(){
    //init()
    //animate()
    loadTextures()
  }
  render() {
    return (
      <div className="App" id='container'>
        TODO
      </div>
    )
  }
}

export default App

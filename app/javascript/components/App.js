import React, { Component } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ApartmentIndex from './pages/ApartmentIndex'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.readApartment()
  }

  readApartment = () => {
    fetch("/apartments")
    .then(response => response.json())
    .then(payload => this.setState({apartments: payload}))  
  }

  render() {
    const {apartments} = this.state
    console.log(apartments)
    return (
      <Router>
        <Header {...this.props} />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments} />} />   
        <Route path="/listings" element={<ApartmentIndex apartments={apartments} />} />
      </Routes>
      <Footer />
    </Router>
    )
  }
}

export default App


 
  
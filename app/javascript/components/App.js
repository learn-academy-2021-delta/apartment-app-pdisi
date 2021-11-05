import React, { Component } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <Header {...this.props} />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
      </Routes>
      <Footer />
    </Router>
    );
  }
}

export default App


  //   const {
  //     logged_in,
  //     current_user,
  //     new_user_route,
  //     sign_in_route,
  //     sign_out_route
  //   } = this.props
  //   return (
  //     <Router>
  //       <Header {...this.props} />
  // <Routes>
  //   <Route exact path="/" element={ <Home/> } />
  //   <>
  //       { logged_in &&
  //         <div>
  //           <a href={ sign_out_route }>Sign Out</a>
  //         </div>
  //       }
  //       { !logged_in &&
  //         <div>
  //           <a href={ sign_in_route }>Sign In</a>
  //         </div>
  //       }
  //     </>
  // </Routes>
  //   </Router>    
  //   )
  
import React, { Component } from 'react'
import { Button } from 'reactstrap'

class ApartmentIndex extends Component {
    render(){
        return (
            <div className="body">
                <h3>Apartments</h3>
                <br />
                  <Button>
                    More Info
                  </Button>
            ) 
            </div>
        )
    }
}


export default ApartmentIndex
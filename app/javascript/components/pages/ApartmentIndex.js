import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ApartmentIndex extends Component {
    render(){
        const { apartments }= this.props
        return (
            <div className="body">
                <h3>Apartments</h3>
                <br />
                <article className="cards">
                {apartments && apartments.map(apartment => {
            return (
              <section key={apartment.id} className="card">
                <div>
                  <FontAwesomeIcon icon={faHome} className="fa-icon" />
                    {apartment.street}
                </div>
                <div>
                  <FontAwesomeIcon icon={faCity} className="fa-icon" />
                    {apartment.city}, {apartment.state}
                </div>
                <br />
                <NavLink to={`/apartmentshow/${apartment.id}`}>
                  <Button>
                    More Info
                  </Button>
                </NavLink>
              </section>
            )
          })} 
                </article>
            </div>
        )
    }
}



export default ApartmentIndex
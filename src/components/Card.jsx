import React from 'react'
import { Bookmark } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

const Card = (props) => {

    console.log(props.company)
  return (
    
      <div className="card">
          <div className="top">
                <button className="bookmark-btn" >
                <Bookmark />
                </button>

              <h5 className="price">${props.salary}</h5>
              <h3 className="companyname">{props.company}</h3>
            </div>


            <div className="centre">
              <h2 className="centre3">Senior UI
                Developer
              </h2>

              <ArrowRight className="arrow"/>

            </div>
              

          <div className="bottom">

                <div className="bottom-logo">
                  <img src={props.logo} ></img>
                </div>

                <h5 className="bottom-text">Senior UI Developer</h5>

                <div className="view">
                  <h5 className="view-content">View</h5>
                </div>
            </div>

            <div className="divider"></div>


      </div>

    
    
  )
}

export default Card
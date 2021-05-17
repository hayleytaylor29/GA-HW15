import React from 'react'

const Card2 = (props) => {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img
          src="https://images.unsplash.com/photo-1498712964741-5d33ab9e5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=600"
         className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
                {props.text}
              </p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  )
}

export default Card2
import React, { Fragment } from 'react'

const DataList = (props) => {
  return (
    <Fragment>
    
    <div className="item">
    <div className="d-flex">
    <img className="image" src={props.image} alt=""/>
    <p className="d-inline py-3 fs-4" style={{color:'black' ,fontWeight:'bold'}}>{props.item.name}</p>
    </div>
    <p className="font" style={{color:'black' ,fontWeight:'bold'}}>{props.item.description}</p>
    </div>
    
    </Fragment>
  )
}

export default DataList

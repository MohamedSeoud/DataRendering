import React, { Fragment } from 'react';
import { Row } from "react-bootstrap";


const DataActions = (props) => {
  return (
    <Fragment>
        
    <Row >
    <div className="justify-content-between d-flex font" sm='80' style={{color:'white',fontSize:'30px' ,fontWeight:'bold'}} >
    <button className="style" onClick={props.onRemove}>مسح الكل</button>
    <button className="style" onClick={props.onView}>عرض البيانات</button>

    </div>
    </Row>

    </Fragment>
  )
}

export default DataActions

import { Button, Col, Container, Row } from "react-bootstrap";
import { Fragment, useState } from "react";
import image from './images/download.png';
import DataList from "./Components/DataList";
import DataActions from "./Components/DataActions";
import DataEmpty from "./Components/DataEmpty";
import { Data } from "./Data/DataRender";


function App() {

const [items,setItems] =useState([]);

const onRemoveHandler= ()=>{
  setItems([])
}

const onViewHandler= ()=>{
  setItems(Data)
}



  return (
    <Fragment>
    <Container className="py-5 mr-7 container">

    <Row className="justify-content-center font">
    <Col sm='80' className="ml-4" style={{color:'white',fontSize:'30px' ,fontWeight:'bold'}} >
     مرحبا ايها العالم
    </Col>
    </Row>

      <div className="rectangle">
      { items.length !== 0 ? items.map((item)=>{ return( <DataList key={item.id} item={item} image={image}/> )}) : <DataEmpty/>}
    </div>
    <DataActions onRemove={onRemoveHandler} onView={onViewHandler}/>
    </Container>
    </Fragment>

  );
}

export default App;

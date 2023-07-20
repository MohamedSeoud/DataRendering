import { Button, Col, Container, Row } from "react-bootstrap";
import { Fragment } from "react";
import image from './images/download.png';


function App() {

  const items = [
  {id:1,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:2,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:3,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:4,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:5,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:6,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:7,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:8,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:9,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:10,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:11,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:12,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:13,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:14,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:15,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:16,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
  {id:17,name:'محمد سعود عبدالفتاح',description:'انا اكون مطور مواقع'},
]




  return (
    <Fragment>
    <Container className="py-5 mr-7 container">

    <Row className="justify-content-center font">
    <Col sm='80' className="ml-4" style={{color:'white',fontSize:'30px' ,fontWeight:'bold'}} >
     مرحبا ايها العالم
    </Col>
    </Row>

    
    <Row className="justify-content-center font">
    <Col sm='80' className="ml-4" style={{color:'white',fontSize:'30px' ,fontWeight:'bold'}} >
      <div className="rectangle">
{ items.map((item,index)=>{
  return(
    
    <div className="item">
    <div className="d-flex">
    <img className="image" src={image} alt=""/>
    <p className="d-inline py-3 fs-4" style={{color:'black' ,fontWeight:'bold'}}>{item.name}</p>
    </div>
    <p className="font" style={{color:'black' ,fontWeight:'bold'}}>{item.description}</p>
    </div>

  )})
}
      

      </div>
    </Col>
    </Row>

    
    <Row >
    <Col className="justify-content-between d-flex font" sm='80' style={{color:'white',fontSize:'30px' ,fontWeight:'bold'}} >
    <button className="style">مسح الكل</button>
    <button className="style">عرض البيانات</button>

    </Col>
    </Row>

    </Container>
    </Fragment>

  );
}

export default App;

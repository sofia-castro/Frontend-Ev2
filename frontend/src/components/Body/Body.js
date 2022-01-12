import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Body extends Component {
    state = {
        productos: []
      };
    
      componentDidMount() {
        axios.get('http://localhost:8081/productos/').then(res => {
          const productos = res.data;
          this.setState({productos});
        })
      };

      getData = () => {
        axios.get('http://localhost:8081/productos/').then(res => {
          const productos = res.data;
          this.setState({productos});
        })
      };

      deleteData = (id)=>{
        axios.delete(`http://localhost:8081/productos/${id}`)
        .then(() => {
          axios.get('http://localhost:8081/productos/');
         })
        };
    
        deleteProducto(id,){
          console.log(id);
          axios.delete("http://localhost:8081/productos/" + id)
          .then(res => {
            console.log(res);
            window.location.reload(true);
          })
        };

    render() {
      
      const {productos} = this.state;
      const disponibles = productos.filter(producto => producto.deleted === false);
      return (
        <Row className = "row" xs={1} md={4}>
       { disponibles.map(producto =>
       <Col key='producto.id'  className = "col">
        <Card border="info" style={{ width: '18rem'}}>
        <Card.Header>Codigo: {producto.codigo}</Card.Header>
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text >
            Categoria : {producto.categoria}
            <br></br>
            Precio : {producto.precio} 
            <br></br>
            Caducidad: {producto.fecha_v} 
          </Card.Text>
         < Button id = 'botonDelete' variant = 'outline-info' type='submit' onClick={(e) => this.deleteProducto(producto.id,e)}>Borrar producto</Button>
        </Card.Body>
      </Card>
      </Col>
      )}
      </Row>
      );
    }
  }
  
export default Body;
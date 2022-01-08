import React, { Component } from "react";
import axios from 'axios';
import './IngresarProducto.css';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class IngresarProducto extends Component{

    constructor(props) {
		super(props)

		this.state = {
			nombre: '',
            codigo: '',
            fecha_v: '',
            precio: '',
            categoria:''
		}
        
	}
    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

    IngresarProducto = (e) =>{
        e.preventDefault()
        console.log(this.state);
        axios.post('http://localhost:8080/productos/create', this.state).then(response => {
            console.log(response);
            window.location.reload(false);
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const { nombre, codigo, fecha_v, precio, categoria} = this.state ; 
        
            return (
                <Container classname='row'>
                    
                <form onSubmit={this.IngresarProducto} >
                <Row className="justify-content-md-center">
                    <Row>
                    <h3 className="color-custom"> Complete los campos para ingresar un nuevo producto:</h3>
                    </Row>
                <div className="col-md-5">
                    <input 
                        type="text" 
                        placeholder="Ingrese Nombre del Producto" 
                        className="form-control" 
                        value={nombre}
                        name="nombre" 
                        onChange={this.changeHandler} />
                </div>
                </Row>
                <Row className="justify-content-md-center">
                <div className="col-md-5">
                    <input 
                        type="float" 
                        placeholder="Ingrese Código del Producto" 
                        className="form-control" 
                        value={codigo}
                        name="codigo"
                        
                        onChange={this.changeHandler} />
                </div>
                </Row >
                <Row className="justify-content-md-center">
                <div className="col-md-5">
                    <input
                        type="date" 
                        placeholder=" Ingrese Fecha de vencimiento" 
                        className="form-control" 
                        value={fecha_v}
                        name="fecha_v"
                        onChange={this.changeHandler} />
                </div>
                </Row >
                <Row className="justify-content-md-center">
                <div className="col-md-5">
                    <input 
                        type="float" 
                        placeholder="Ingrese el Precio" 
                        className="form-control" 
                        value={precio}
                        name="precio"
                        onChange={this.changeHandler}/>
                        
                </div>
                </Row>
                <Row className="justify-content-center">
                <div className="col-md-5">
                    <input 
                        type="text" 
                        placeholder="Ingrese la Categoría" 
                        className="form-control" 
                        value={categoria}
                        name="categoria"
                        onChange={this.changeHandler}/>
                        
                </div>
                </Row>
                <Row className="justify-content-center">
                 <div className="col-md-2">
                   <Button type="submit" variant='outline-info'>Ingresar Producto</Button>
                </div>
                </Row >
            </form>
            
            </Container>
            )
        
        
        
    }
}


export default IngresarProducto;


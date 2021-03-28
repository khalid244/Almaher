import React, { Component } from 'react';
import {
    Col,
    Form,    
  } from "react-bootstrap";

class FormNumber extends Component {
    state = { nameOfForm : '' , }
    render() { 
        
        return ( 
        <>
            <Form.Group xs as={Col} controlId="formBasicEmail">
            {this.props.title ? <Form.Label>{this.props.title}</Form.Label> : < ></> }
                <Form.Control
                key={this.props.id}
                id={this.props.id}
                name={this.nameOfForm}
                type="number"
                ref={node => (this.nameOfForm = node)}
                placeholder={this.props.placeholder}
                step={this.props.step}
                min="0"
                />
                
            </Form.Group>
        </>
            
         );
    }
}
 
export default FormNumber;
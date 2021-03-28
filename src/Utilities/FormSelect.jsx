import React, { Component } from 'react';
import {
    Col,
    Form,    
  } from "react-bootstrap";

class FormSelect extends Component {
    state = { 
      enabled : true,
     }
     setEnabled(value) {
       this.setState({enabled : value});
     }
     inputName = this.props.id;
      
    render() { 

        // function displaySelect(boleanValueDisable) {
        //   document.getElementById(this.props.id).disabled = boleanValueDisable;
        // }

        function OptionsList(props) {
            return props.list.map((value, index) => {
              if (value == props.selectIndex){return <option value={index} selected>{value}</option>;}else{return <option value={index} >{value}</option>;}
              
            });
          }
         
        // document.getElementById(this.props.id).disabled = true;

        // console.log(this.enabled==false);
        console.log(this.state.enabled);

        return (  
            <>
            <Form.Group md={this.props.md} as={Col} >                
            {this.props.title ? <Form.Label>{this.props.title}</Form.Label> : < ></> }
                <Form.Control  as="select" ref={node => (this.inputName = node)} variant={this.state.enabled ? "primary" : null} disabled={this.state.enabled==false} >
                    <OptionsList key = {this.props.id} list={this.props.list} selectIndex = {this.props.index} />
                </Form.Control>
            </Form.Group>
                    
            </>
        );
    }
}
 
export default FormSelect;
import React, { Component } from 'react';
import {
    Button,
    DropdownButton,
    Dropdown,
    Container,
    Row,
    Col,
    Card,
    Form,
    Nav,
    Navbar,
  } from "react-bootstrap";
  
class ComponentList extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target[0].value)
    console.log(event.target.elements.username.value)
    console.log(event.target.username.value)
    console.log(this.inputNode.value)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            ref={node => (this.inputNode = node)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
 }

 

export default ComponentList;
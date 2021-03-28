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

class PlanTable extends Component {
    state = { 
        table : [],
        headTable : [[['التاريخ',"2"],['الدرس',"4"],['طول','1'],['المراجعة الصغرى',"4"],['طول','1'],['المراجعة الكبرى',"4"],['طول','1']],[['اليوم','1'],['التاريخ','1'],['من','2'],['إلى','2'],['الدرس','1'],['من','2'],['إلى','2'],['المراجعة','1'],['من','2'],['إلى','2'],['الكبرى','1']]],
     }
    
     
    render() { 
        
        return ( 
        <>             
        <Container className="mt-4"  dir="rtl">
        <Row className="justify-content-md-center">
          <Col xs lg="2" />
          <Col>
            {" "}
            <table className="table table-dark" id="myTable">
              <thead id="headTable">
                {/* <tr >
                <th scope="col" colSpan="2">
                التاريخ
                  </th>
                  <th scope="col" colSpan="4">
                    الدرس
                  </th>
                  <th scope="col" >
                    طول
                  </th>
                  <th scope="col" colSpan="4">
                    المراجعة الصغرى
                  </th>
                  <th scope="col" >
                    طول
                  </th>
                  <th scope="col" colSpan="4">
                    المراجعة الكبرى
                  </th>                                   
                  <th scope="col" >
                    طول
                  </th>
                </tr>
                
                <tr>
                <th scope="col" >
                اليوم
                  </th>
                  <th scope="col" >
                  التاريخ
                  </th>
                  <th scope="col" colSpan="2">
                    من
                  </th>
                  <th scope="col" colSpan="2">
                    إلى
                  </th>
                  <th scope="col" >
                    الدرس
                  </th>
                  <th scope="col" colSpan="2">
                    من
                  </th>
                  <th scope="col" colSpan="2">
                    إلى
                  </th>
                  <th scope="col" >
                    المراجعة
                  </th>
                  <th scope="col" colSpan="2">
                    من
                  </th>
                  <th scope="col" colSpan="2">
                    إلى
                  </th>                                   
                  <th scope="col" >
                    الكبرى
                  </th>
                  
                </tr> */}

                {this.state.headTable.map((row, index) => {     

                return <tr id={index}> {row.map((cell,cIndex) => {  return <th id={cIndex} scope="col" colSpan={cell[1]}>{cell[0]} </th> }) }  </tr>;

                })}

              </thead>

              <tbody id="planTable">
                {this.state.table.map((row, index) => {     

                return <tr id={index}> {row.map((cell,cIndex) => {return <td id={cIndex}>{cell}</td>}) }  </tr>;

                })}
              </tbody>

            </table>
          </Col>
          <Col xs lg="2" />
        </Row>
      </Container>
        </>
         );
    }
}
 
export default PlanTable;
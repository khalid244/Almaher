// import React, { Component } from 'react';
// import {
//     Col,
//     Form,
//   } from "react-bootstrap";
// class numberOfLine extends Component {
//     state = {  }
//     render() { 
//         const numberOfLineInTable = bettwenTowNumber(3001);
//         function bettwenTowNumber(num) {
//             var arrayNum = [];
//             // var end = num+1;
//             for (let i = 1; num > i; i++) {
//               arrayNum.push(i);
//             }
//             // console.log("num:" + num);
//             // // console.log('end:'+end);
//             // console.log("arrayNum:" + arrayNum);
//             return arrayNum;
//           }
//           function OptionsList(props) {
//             return props.list.map((value, index) => {
//               return <option value={index}>{value}</option>;
//             });
//           }
//         return (<><Form.Label>عدد الأسطر في الخطة</Form.Label>
//                               <Form.Row>
//                                 <Form.Group xs as={Col} controlId="formBasicEmail">
//                                 <Form.Control id='numberOfLineInTable' as="select" index={0}>
//                                     <OptionsList list={numberOfLineInTable} />
//                                   </Form.Control>
//                                 </Form.Group>
//                               </Form.Row></>
            
//           );
//     }
// }
 
// export default numberOfLine;

import React, { Component } from 'react';
import {
    Col,
    Form,
  } from "react-bootstrap";

class NumberOfLine extends Component {
    state = {  }
    render() { 
        const numberOfLineInTable = bettwenTowNumber(3001);
                function bettwenTowNumber(num) {
                    var arrayNum = [];
                    // var end = num+1;
                    for (let i = 1; num > i; i++) {
                      arrayNum.push(i);
                    }
                    // console.log("num:" + num);
                    // // console.log('end:'+end);
                    // console.log("arrayNum:" + arrayNum);
                    return arrayNum;
                  }
                  function OptionsList(props) {
                    return props.list.map((value, index) => {
                      if (value == 20){return <option value={index} selected>{value}</option>;}else{return <option value={index} >{value}</option>;}
                      
                    });
                  }
                return (<>
                            <Form.Label>عدد الأسطر في الخطة</Form.Label>
                            <Form.Row>
                              <Form.Group xs as={Col} controlId="formBasicEmail">
                                <Form.Control id={this.props.id} as="select" index={0}>
                                  <OptionsList key={this.props.id} list={numberOfLineInTable} />
                                </Form.Control>
                              </Form.Group>
                            </Form.Row>
                        </>        
          );
    }
}
 
export default NumberOfLine;
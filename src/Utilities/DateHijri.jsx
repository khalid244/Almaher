// import React, { Component } from 'react';
// import Moment from 'react-moment';


// class DateHijri extends Component {
//     constructor(props) {
//         super(props);
        
//       }
          
//       render() {
//           const dateToFormat = '1976-04-19T12:59-0500';
//           var day = this.props.value;
//         return (
//             <>
//             <Moment>{dateToFormat}</Moment><br/>
//             <Moment>{dateToFormat}</Moment><br/>
//             <Moment>{dateToFormat}</Moment><br/>
//             <Moment date={day} format="YYYY/MM/DD"/>
//             console.log(day);
            
//             <div class="form-group row">
//             <label for="example-date-input" class="col-2 col-form-label">Date</label>
//                 <div class="col-10">
//                     <input class="form-control" type="date"  id="example-date-input"/>
//                 </div>
//             </div>
//             </>
            

//         );
//       }
// }
 
// export default DateHijri;


import React, { Component } from 'react';
import ReactDOM from  'react-dom';
import HijriDatePicker from 'hijri-date-picker';
import moment from "moment-hijri";
import {
    Button,} from "react-bootstrap";
import Moment from 'moment';

// import moment
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class Example extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  
  
  // moment = require('moment-hijri');
  
 
   displayDate(params) {
   
    var arr = {Sunday : "الأحَد" , Monday : "الإثنين" , Tuesday : "الثلاثاء" , Wednesday : "الأربعاء" , Thursday : "الخميس" , Friday : "الجمعة" , Saturday : "السبت" }  , array = {};

    var x = document.getElementsByClassName('form-control hijiri-date')[0].value;

    var day = moment(x, 'iYYYY/iM/iD');

    // day.add(1, 'iYear');
    // day.add(2, 'iMonth');
    // day.format('iYYYY/iM/iD'); 
    // day.add(1, 'iYear');
    // day.add(1, 'iYear');
    // day.add(1, 'iYear');
    // day.add(1, 'iYear');
    // day.startOf('iMonth');
    
    // console.log(x,day.format('dddd'),arr[day.format('dddd')]);
    // day.add(1, 'days');
    console.log(day.format('iYYYY/iM/iD'),day.format('dddd'),arr[day.format('dddd')]);
    var mday = Moment(day.format('YYYY/M/D'));
    console.log(mday.format('YYYY/MM/DD'),mday.format('dddd'));

        var y = 1;
        for (let i = 0; i < 2*5; i++) {
         array[i] = [mday.format('YYYY/MM/DD'),mday.format('dddd')] ;
         mday.add(1, 'days');

         if (y == 5) {
           mday.add(7 - 5, 'days');
           y = 1
         }

         y++
      }
  
      
    console.log(array);
    console.log(mday.format('YYYY/MM/DD'),mday.format('dddd')); 
    console.log( moment(mday.format('YYYY/MM/DD'), 'YYYY M D').format('iYYYY/iM/iD'),arr[mday.format('dddd')]);

    // console.log(x);
    // document.getElementById("demo").innerHTML = x;
    // console.log(day.format('YYYY/M/D'));
    // var mday = Moment(day.format('YYYY/M/D'));
    // console.log(mday.format('YYYY/MM/DD')); 
    // console.log(arr[mday.format('dddd')]); 
    // mday.add(1, 'days');
    // console.log(mday.format('YYYY/MM/DD')); 
    // console.log(arr[mday.format('dddd')]); 
    // console.log( moment(mday.format('YYYY/MM/DD'), 'YYYY M D').format('iYYYY/iM/iD'));

}

 myFunction() {
    var x = document.getElementById("myDate").value;
    document.getElementById("demo").innerHTML = x;
    
  }
 
  

  render() {
    return (<>

{/* <HijriDatePicker inputName="hijri_date" className="form-control" selectedDate="1439/08/02" dateFormat="iYYYY/iMM/iDD" quickSelect /> */}

    <HijriDatePicker inputName="hijri_date" id = "hijri_date" className="form-control hijiri-date" selectedDate="1439/08/02" dateFormat="iYYYY/iMM/iDD" quickSelect />
    {/* <hijri-date-picker input-name="hijri_date" class-name="form-control" selected-date="1439/08/02" date-format="iMM/iYYYY/iDD" quick-select="true" /> */}
    <Button variant="secondary "onClick={() => this.displayDate(this.props.value)}>Button</Button>
        <br/><br/>
        <input type="date" id="myDate" value="2000-05-05" />

        

        <Button  onClick={() => this.myFunction()}>Try it</Button><br/>
        <p id="demo"></p>
         </>
         );

         

  }
}

export default Example;
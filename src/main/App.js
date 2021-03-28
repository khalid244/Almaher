import "./App.css";
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
// import NumberOfLine from '../Utilities/numberOfLine';
// import List from '../Utilities/ComponentList';
import HijriDatePicker from 'hijri-date-picker';
import moment from "moment-hijri";
import Moment from 'moment';
import FormSelect from "../Utilities/FormSelect";
import FormNumber from "../Utilities/FormNumber";
import PlanTable from "../Utilities/PlanTable";
// import { Children } from "react";

function App() {
  function httpGet(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
  }

  function bettwenTowNumber(num) {
    var arrayNum = [];
   
    for (let i = 1; num > i; i++) {
      arrayNum.push(i);
    }
    
    return arrayNum;
  }

    function chickDate(dateHijri,EndDateHijri) {
      
    

      var day = moment(dateHijri, 'iYYYY/iM/iD')
      var EndDateHijri = moment(EndDateHijri, 'iYYYY/iM/iD')
    
        
      if(EndDateHijri.iYear() <= day.iYear() && EndDateHijri.iMonth() <= day.iMonth() && EndDateHijri.iDate() <= day.iDate()){ return true}

      return false
    }

  function addRow(EndDateHijri) {
    deleteAllRowInTable();
    const murajaea = parseInt(getSmallMurajaea.nameOfForm.value);
 
    if( murajaea >= 1){
      addRowToTable.push(3);
    }  

      if (addRowToTable.length == 0 || !addRowToTable.includes(1)) {
        deleteAllRowInTable();
        return ;  
                  }

    var x = 0 ,f,o;
    var data = [];
    (arrayForAllMurajaea[x][2] == arrayForAllDaras[0][2] && arrayForAllMurajaea[x][3] > arrayForAllDaras[0][3]) ? f = 0 : f = 1;
    
      
      for (let i = 0; i < arrayForAllDaras.length; i++) {

      data[0] = allDateHijiri[i][1];
      data[1] = allDateHijiri[i][0];

      if(addRowToTable.includes(1)){

      data[2] = arrayForAllDaras[i][0];
      data[3] = arrayForAllDaras[i][1];
      data[4] = arrayForAllDaras[i][2];
      data[5] = arrayForAllDaras[i][3];
      data[6] = arrayForAllDaras[i][4];
    }     
      //===========================   

    var y = i - 1;
      if (i != 0 && addRowToTable.includes(3)) {
        if (murajaea <= i) {

          data[7] = arrayForAllDaras[i - murajaea][0];
          data[8] = arrayForAllDaras[i - murajaea][1];
          
        } else {

          data[7] = arrayForAllDaras[0][0];
          data[8] = arrayForAllDaras[0][1];
          
        }

        data[9] = arrayForAllDaras[y][2];
        data[10] = arrayForAllDaras[y][3];
        data[11] = arrayForAllDaras[y][4];

      }else if(addRowToTable.includes(3)){
        data[7] = "";
        data[8] = "";
        data[9] = "";
        data[10] = "";
        data[11] = "";
      }
      
      if(i != 0){
        (arrayForAllMurajaea[x][2] == arrayForAllDaras[y][2] && arrayForAllMurajaea[x][3] > arrayForAllDaras[y][3]) ? f = 0 : f = 1 ;
      }

        if(o == 1 && f == 0){
          f = 1;
          x = 0;
        }
      if(f == 1 && addRowToTable.includes(2)){

        data[12] = arrayForAllMurajaea[x][0];
        data[13] = arrayForAllMurajaea[x][1];
        data[14] = arrayForAllMurajaea[x][2];
        data[15] = arrayForAllMurajaea[x][3];
        data[16] = arrayForAllMurajaea[x][4];        
        o = 1
        x++;
      }
      if (i % 100 == 0) {
        var copyOfPlaneTable = planTable
        copyOfPlaneTable[i] = ["يرجى ","اللأنتظار ","عدد ","الأسطر ","الباقية ",arrayForAllDaras.length - i];
        // console.log(i % 10);
        // console.log(copyOfPlaneTable);
        child.setState({table : copyOfPlaneTable , headTable : headPlanTable});
      }
      
      if (addRowToTable.length == 3) {
        headPlanTable =  [[['التاريخ',"2"],['الدرس',"4"],['طول','1'],['المراجعة الصغرى',"4"],['طول','1'],['المراجعة الكبرى',"4"],['طول','1']],[['اليوم','1'],['التاريخ','1'],['من','2'],['إلى','2'],['الدرس','1'],['من','2'],['إلى','2'],['المراجعة','1'],['من','2'],['إلى','2'],['الكبرى','1']]]
        planTable[i] = [data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7],data[8],data[9],data[10],data[11],data[12],data[13],data[14],data[15],data[16]];
      }else if (addRowToTable.length == 2 && addRowToTable.includes(3)) {
        headPlanTable = [[['التاريخ',"2"],['الدرس',"4"],['طول','1'],['المراجعة الصغرى',"4"],['طول','1']],[['اليوم','1'],['التاريخ','1'],['من','2'],['إلى','2'],['الدرس','1'],['من','2'],['إلى','2'],['المراجعة','1']]]
        planTable[i] = [data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7],data[8],data[9],data[10],data[11]];
      }else if (addRowToTable.length == 2) {
       headPlanTable = [[['التاريخ',"2"],['الدرس',"4"],['طول','1'],['المراجعة الكبرى',"4"],['طول','1']],[['اليوم','1'],['التاريخ','1'],['من','2'],['إلى','2'],['الدرس','1'],['من','2'],['إلى','2'],['الكبرى','1']]]
        planTable[i] = [data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[12],data[13],data[14],data[15],data[16]];
      }else{
        headPlanTable = [[['التاريخ',"2"],['الدرس',"4"],['طول','1']],[['اليوم','1'],['التاريخ','1'],['من','2'],['إلى','2'],['الدرس','1']]]
        planTable[i] = [data[0],data[1],data[2],data[3],data[4],data[5],data[6]];
      }
        
        if(chickDate(allDateHijiri[i][2],EndDateHijri)){return}
    }
    
    while (addRowToTable.length > 0) {
      addRowToTable.pop();
    }
    console.log("Done");
  }

  function deleteAllRowInTable() {

      headPlanTable = []
      planTable = []

  }

  function getStopPoint(StartPoint,endOfLesson,methodForDaras,numOfLine) {
    var StopPoint,lengthForChickStopPoint,lengthForChickStopPointRealeLength,lineCloser = numOfLine*0.33333333333333333333333333333333333333333333333;
    
    StopPoint = httpGet(
      `${httpName}/quran/findCloserStopPointById/${(methodForDaras == 0) ? StartPoint.RID : StartPoint.LID}/${lineCloser}/${methodForDaras}`
    );

    lengthForChickStopPoint = httpGet(
      `${httpName}/quran/findRealeLength/${endOfLesson.Sorah}/${endOfLesson.Ayah}/${StopPoint.Sorah}/${StopPoint.Ayah}/${methodForDaras}/`
    );
    // Math.abs()
    lengthForChickStopPointRealeLength = Math.abs(lengthForChickStopPoint.RealLength) - endOfLesson.Length;
    // lengthForChickStopPointRealeLength = StopPoint.LSum - endOfLesson.LSum ;
    
    console.log("soarh stopPoint : ",StopPoint.Sorah," ayah : ",StopPoint.Ayah," lengthForChickStopPointRealeLength : ",lengthForChickStopPointRealeLength," <= ","(numOfLine*0.3) : ",lineCloser);
    console.log("endOfLesson.Length :"+endOfLesson.Length);
    console.log(lengthForChickStopPointRealeLength <= lineCloser);
    if (lengthForChickStopPointRealeLength <= lineCloser) {
      return StopPoint;      
    }
    return endOfLesson;
  }

  function createArrayOfAllDaras(sorah, ayah, endOfDaras, numOfLine,methodForDaras,numberOfRowInTable,lam,typeForDaras) {
    var FSoarh = sorah - 1;
    var FAyah = ayah;
    var LAyah ;
    var LSoarh ;
    var endOfLesson = endOfDaras;
    var realeLengthForDars;
    var StartPoint;
    var lengthForChickStopPoint;

    for (let i = 0; i <numberOfLineInTable[numberOfRowInTable]; i++) {
    
      realeLengthForDars = httpGet(
        `${httpName}/quran/findRealeLength/${FSoarh + 1}/${FAyah}/${endOfLesson.Sorah}/${endOfLesson.Ayah}/${methodForDaras}/`
      );

      if (endOfLesson.Ayah == 0) {
        LSoarh = (methodForDaras == 0) ? endOfLesson.Sorah - 2 : endOfLesson.Sorah ;
        LAyah = lastAyahInSoarh[LSoarh];
      }else{
        LAyah = endOfLesson.Ayah
        LSoarh = endOfLesson.Sorah - 1 ;
      }

      // LAyah = endOfLesson.Ayah
      //   LSoarh = endOfLesson.Sorah - 1 ;
      
      arrayForAllDaras[i] = [
        sour[FSoarh],
        FAyah,
        sour[LSoarh],
        LAyah,
        realeLengthForDars.RealLength,
      ];

      if(lam){        
        var FSoarhForEndOfLesson = endOfLesson.Sorah - 1;
        var FAyahForEndOfLesson = endOfLesson.Ayah;
        console.log("before set endoflesson :sorah = ",endOfLesson.Sorah,"  Ayah = ",endOfLesson.Ayah," methoed: ",methodForDaras);
      
        endOfLesson = (typeForDaras == 2) ? httpGet(`${httpName}/quran/findCloserAyahWayHizbById/${endOfLesson.RID}/${numOfLine}/`) :  httpGet(`${httpName}/quran/findCloserAyahById/${(methodForDaras == 0) ? ++endOfLesson.RID : ++endOfLesson.LID}/${numOfLine}/${methodForDaras}`);
        console.log("after set end of lesson: sorah ="+endOfLesson.Sorah+"  Ayah ="+endOfLesson.Ayah+"methoed: "+methodForDaras);
        console.log('endOfLesson.Ayah + 1 :'+(endOfLesson.Ayah + 1));
        var nextAyah = httpGet(
          `${httpName}/quran/getID/${endOfLesson.Sorah}/${endOfLesson.Ayah + 1}/`
        );

        console.log("endOfLesson.Length > nextAyah.Length : " + endOfLesson.Length +'>'+ nextAyah.Length );
        console.log(endOfLesson.Length > nextAyah.Length  );
        console.log("==================================================================");

        FSoarh = FSoarhForEndOfLesson;
        FAyah = FAyahForEndOfLesson;
        endOfLesson = (endOfLesson.Length > nextAyah.Length ) ? nextAyah : endOfLesson;
        
      }else{

        console.log("lastAyahInSoarh[endOfLesson.Sorah - 1] : ",lastAyahInSoarh[endOfLesson.Sorah - 1]);
        if (endOfLesson.Ayah >= lastAyahInSoarh[endOfLesson.Sorah - 1]) {
          FSoarh = endOfLesson.Sorah - 2 ;
          FAyah = 1 ;
        }else{
          FSoarh = endOfLesson.Sorah - 1;
          FAyah = endOfLesson.Ayah + 1 ;
        }
        
        // FSoarh = endOfLesson.Sorah - 1;
        // FAyah = endOfLesson.Ayah + 1 ;

        console.log("before set endoflesson :sorah =",endOfLesson.Sorah,"  Ayah =",endOfLesson.Ayah," methoed : ",methodForDaras,'Soarh : ',sour[endOfLesson.Sorah - 1]);
        console.log("endOfLesson B:",endOfLesson.RID,"endOfLesson A:",(endOfLesson.RID+1));
        
        StartPoint = endOfLesson ;
        
        endOfLesson = (typeForDaras == 2) ? httpGet(`${httpName}/quran/findCloserAyahWayHizbById/${endOfLesson.RID}/${numOfLine}/`) : httpGet(`${httpName}/quran/findCloserAyahById/${(methodForDaras == 0) ? (endOfLesson.RID+1) : (endOfLesson.LID+1)}/${numOfLine}/${methodForDaras}`);
        console.log("after set end of lesson: sorah = ",endOfLesson.Sorah,"  Ayah = ",endOfLesson.Ayah," methoed: ",methodForDaras,' Soarh : ',sour[endOfLesson.Sorah - 1]);
        console.log('endOfLesson.Ayah + 1 :'+(endOfLesson.Ayah + 1));

        // StopPoint = httpGet(
        //   `${httpName}/quran/findCloserStopPointById/${(methodForDaras == 0) ? ++endOfLesson.RID : ++endOfLesson.LID}/${(numOfLine*0.333)}/${methodForDaras}`
        // );

        // lengthForChickStopPoint = httpGet(
        //   `${httpName}/quran/findRealeLength/${endOfLesson.Sorah}/${endOfLesson.Ayah}/${StopPoint.Sorah}/${StopPoint.Ayah}/${methodForDaras}/`
        // );

        // console.log("soarh stopPoint : "+StopPoint.Sorah+"ayah : "+StopPoint.Ayah+" lengthForChickStopPoint :"+lengthForChickStopPoint.RealLength+"<"+"(numOfLine*0.333) :"+(numOfLine*0.333));
        // console.log(lengthForChickStopPoint < (numOfLine*0.333));

        
          endOfLesson = getStopPoint(StartPoint,endOfLesson,methodForDaras,numOfLine);
        

      }
      
      
    }
  }

  function createArrayOfAllMurajaea(sorah, ayah, endOfDaras, numOfLine,methodForMurajaea,numberOfRowInTable,typeForMurajaea) {
    var FSoarh = sorah - 1;
    var FAyah = ayah;
    var endOfLesson = endOfDaras;
    var realeLengthForDars;
    
    for (let i = 0; i < numberOfLineInTable[numberOfRowInTable]; i++) {
      
      if(arrayForAllDaras[arrayForAllDaras.length-1][2] == endOfLesson.sorah  && arrayForAllDaras[arrayForAllDaras.length-1][3] < endOfLesson.Ayah){
          arrayForAllMurajaea[i] = [
            sour[FSoarh],
            FAyah,
            arrayForAllDaras[arrayForAllDaras.length-1][2],
            arrayForAllDaras[arrayForAllDaras.length-1][3],
            arrayForAllDaras[arrayForAllDaras.length-1][4],
          ];   
        return ;
     }
     
     realeLengthForDars = httpGet(
      `${httpName}/quran/findRealeLength/${FSoarh + 1}/${FAyah}/${endOfLesson.Sorah}/${endOfLesson.Ayah}/${methodForMurajaea}/`
    );

      arrayForAllMurajaea[i] = [
        sour[FSoarh],
        FAyah,
        sour[endOfLesson.Sorah - 1],
        endOfLesson.Ayah,
        realeLengthForDars.RealLength,
      ];
      FSoarh = endOfLesson.Sorah - 1;
      FAyah = endOfLesson.Ayah + 1;
      endOfLesson = (typeForMurajaea == 2) ? httpGet(`${httpName}/quran/findCloserAyahWayHizbById/${endOfLesson.RID}/${numOfLine}/`) :  httpGet(`${httpName}/quran/findCloserAyahById/${(methodForMurajaea == 0) ? ++endOfLesson.RID : ++endOfLesson.LID}/${numOfLine}/${methodForMurajaea}`);
    }   
  }



  window.onload = function () {

    getSorahForDaras.inputName.onclick = function numOfAyah() {
      const result = httpGet(
        `${httpName}/quran/findLastAyahInSorah/${
          parseInt(getSorahForDaras.inputName.value) + 1
        }`
      );

      numberOfAyahForSoarh = bettwenTowNumber(++result.lastAyah);

      var x = getAyahForDaras.inputName;

      console.log(x);

      while (x.options.length > 0) {
        x.remove(0);
      }

      for (let i = 0; i < numberOfAyahForSoarh.length; i++) {
        var option = document.createElement("option");
        option.text = numberOfAyahForSoarh[i].toString();
        x.add(option);
      }
    };

    getSorahForMurajaea.inputName.onclick = function numOfAyah() {
      const result = httpGet(
        `${httpName}/quran/findLastAyahInSorah/${
          parseInt(getSorahForMurajaea.inputName.value) + 1
        }`
      );

      numberOfAyahForSoarh = bettwenTowNumber(++result.lastAyah);

      var x = getAyahForMurajaea.inputName;

      console.log(x);

      while (x.options.length > 0) {
        x.remove(0);
      }

      for (let i = 0; i < numberOfAyahForSoarh.length; i++) {
        var option = document.createElement("option");
        option.text = numberOfAyahForSoarh[i].toString();
        x.add(option);
      }
    };

    getTypeForDaras.inputName.onclick = function displaySelectOfTypeDars() {
           
      var theWayOfDars = parseInt(getTypeForDaras.inputName.value);
      getmethodForDaras.setEnabled((theWayOfDars != 2))

    }

  };

  function createAllDateHijiri(dateHijri,numberOfDayInWeek) {
    var day = moment(dateHijri, 'iYYYY/iM/iD');
    var y = 1;
        for (let i = 0; i < arrayForAllDaras.length ; i++) {
         allDateHijiri[i] = [day.format('iM/iD'),weekDay[day.format('dddd')],day.format('iYYYY/iM/iD')] ;
         day.add(1, 'days');

         if (y == numberOfDayInWeek && numberOfDayInWeek != 7) {
           day.add(7 - numberOfDayInWeek, 'days');
           y = 1
         }else{
           y++
          }

         
      }
  }

  function createPlan() {
    console.log("createPlan");

    childTest.setState({nameOfForm : getLengthOfDars});
    const sorahForDaras = parseInt(getSorahForDaras.inputName.value) + 1;
    const ayahForDaras = parseInt(getAyahForDaras.inputName.value ) ;
    const lengthForDaras = parseFloat(childTest.nameOfForm.value);
    const methodForDaras = parseInt(getmethodForDaras.inputName.value );
    const typeForDaras = parseInt( getTypeForDaras.inputName.value);
    const numberOflineForFirstAyah = 0 ;
    var numOfLineForDaras = 0.0;
    // ===========================================================================================
    
    const dateHijri = document.getElementsByClassName("form-control hijiri-date")[0].value;
    // const EndDateHijri = moment(document.getElementsByClassName("form-control hijiri-date")[1].value, 'iYYYY/iM/iD');
    const EndDateHijri = document.getElementsByClassName("form-control hijiri-date")[1].value;
    const numberOfDayInWeek = parseInt(getNumberOfWeek.inputName.value);
    const numberOfRowInTable = parseInt(getNumberOfLineInTable.inputName.value) + 1 ;
    const lam = getLam.checked;
        
    //===============================================================================
    const sorahForMurajaea = parseInt( getSorahForMurajaea.inputName.value) + 1;
    const ayahForMurajaea = parseInt(getAyahForMurajaea.inputName.value) + 1;
    const lengthForMurajaea = parseFloat(getLengthForMurajaea.nameOfForm.value);
    const methodForMurajaea = parseInt(getMethodForMurajaea.inputName.value);
    const typeForMurajaea = parseInt(getTypeForMurajaea.inputName.value);
    var numOfLineForMurajea = 0.0;

  
    if (typeForDaras == 0) {
      numOfLineForDaras = numOfLineForDaras + lengthForDaras * 15;
    } else {
      numOfLineForDaras = lengthForDaras;
    }

    if (typeForMurajaea == 0) {
      numOfLineForMurajea = numOfLineForMurajea + lengthForMurajaea * 15;
    } else {
      numOfLineForMurajea = lengthForMurajaea;
    }

      var IdOfFirstDaras = httpGet(
        `${httpName}/quran/getID/${sorahForDaras}/${ayahForDaras }/`
      );

      IdOfFirstDaras = (methodForDaras == 0 || typeForDaras == 2) ? IdOfFirstDaras.RID : IdOfFirstDaras.LID;

      if (typeForDaras == 2) {
        var check = httpGet(`${httpName}/quran/findCloserAyahWayHizbById/${IdOfFirstDaras}/0/`);

        var endOfFirstDaras = (check.RealLength > 7.5) ? httpGet(`${httpName}/quran/findCloserAyahWayHizbById/${IdOfFirstDaras}/${numOfLineForDaras-1}/`) :  httpGet(`${httpName}/quran/findCloserStopPointById/${IdOfFirstDaras}/${numOfLineForDaras}/`);        
        console.log("hizb");
      }else{
        var endOfFirstDaras = httpGet(
          `${httpName}/quran/findCloserAyahById/${IdOfFirstDaras}/${numOfLineForDaras}/${methodForDaras}`
        );
        console.log("Before incramet :",endOfFirstDaras.RID);
        console.log("After incramet :",++endOfFirstDaras.RID);
        console.log("currect RID ,After incremant :",endOfFirstDaras.RID);
      }

      endOfFirstDaras = getStopPoint(endOfFirstDaras,endOfFirstDaras,methodForDaras,numOfLineForDaras);

      createArrayOfAllDaras(sorahForDaras, ayahForDaras , endOfFirstDaras, numOfLineForDaras,methodForDaras,numberOfRowInTable,lam,typeForDaras);
    
      var IdOfFirstMurajaea = httpGet(
        `${httpName}/quran/getID/${sorahForMurajaea}/${ayahForMurajaea}/`
      );

      IdOfFirstMurajaea = (methodForMurajaea == 0) ? IdOfFirstMurajaea.RID : IdOfFirstMurajaea.LID;

      if (typeForMurajaea == 2) {
        var check = httpGet(`${httpName}/quran/findCloserAyahWayHizbById/${IdOfFirstMurajaea}/0/`);

        var endOfFirstMurajaea = (check.RealLength > 7.5) ? httpGet(`${httpName}/quran/findCloserAyahWayHizbById/${IdOfFirstMurajaea}/${numOfLineForMurajea-1}/`) :  httpGet(`${httpName}/quran/findCloserStopPointById/${IdOfFirstMurajaea}/${numOfLineForMurajea}/`);        
        console.log("hizbMurajaea");
      }else{        
          var endOfFirstMurajaea = httpGet(
            `${httpName}/quran/findCloserAyahById/${IdOfFirstMurajaea}/${numOfLineForMurajea}/${methodForMurajaea}`
          );
        console.log("Before incramet :",endOfFirstMurajaea.RID);
        console.log("After incramet :",++endOfFirstMurajaea.RID);
        console.log("currect RID ,After incremant :",endOfFirstMurajaea.RID);
      }

      endOfFirstMurajaea = getStopPoint(endOfFirstMurajaea,endOfFirstMurajaea,methodForMurajaea,numOfLineForMurajea);

      createArrayOfAllMurajaea(sorahForMurajaea, ayahForMurajaea, endOfFirstMurajaea, numOfLineForMurajea,methodForMurajaea,numberOfRowInTable,typeForMurajaea);
    
    if ( arrayForAllDaras[0][2] != null && lengthForDaras != 0) {
      addRowToTable.push(1);
    }
    if ( arrayForAllMurajaea[0][2] != null && lengthForMurajaea != 0) {
      addRowToTable.push(2);
    }

    createAllDateHijiri(dateHijri,numberOfDayInWeek);

    addRow(EndDateHijri);
     
    child.setState({table : planTable , headTable : headPlanTable});
  }

  function OptionsList(props) {
    return props.list.map((value, index) => {
      return <option key={index} value={index}>{value}</option>;
    });
  }
  
  const httpName = "http://localhost:9000"
  var arrayForAllMurajaea = [];
  var numberOfAyahForSoarh = [];
  var arrayForAllDaras = [];
  var addRowToTable = [];
  var allDateHijiri = [];
  var planTable = [];
  var headPlanTable = [];
  var child ,getLengthOfDars ,getLam ,getmethodForDaras ,getNumberOfWeek ,hijri_date ,getNumberOfLineInTable ,getSmallMurajaea ,getTypeForDaras ,getAyahForDaras ,getSorahForDaras ,getSorahForMurajaea ,getAyahForMurajaea ,childTest ,getLengthForMurajaea ,getMethodForMurajaea ,getTypeForMurajaea;
  var weekDay = {Sunday : "الأحَد" , Monday : "الإثنين" , Tuesday : "الثلاثاء" , Wednesday : "الأربعاء" , Thursday : "الخميس" , Friday : "الجمعة" , Saturday : "السبت" }  , array = {};
  const numberOfLineInTable = bettwenTowNumber(3001);
  const type = ["وجه", "سطر","ثمن"];
  const method = ["من الفاتحة إلى الناس", "من الناس إلى الفاتحة"];
  const sour = ["الفاتحة","البقرة","آلعمران","النساء","المائدة","الأنعام","الأعراف","الأنفال","التوبة","يونس","هود","يوسف","الرعد","إبراهيم","الحجر","النحل","الإسراء","الكهف","مريم","طه","الأنبياء","الحج","المؤمنون","النور","الفرقان","الشعراء","النمل","القصص","العنكبوت","الروم","لقمان","السجدة","الأحزاب","سبأ","فاطر","يس","الصافات","ص","الزمر","غافر","فصلت","الشورى","الزخرف","الدخان","الجاثية","الأحقاف","محمد","الفتح","الحجرات","ق","الذاريات","الطور","النجم","القمر","الرحمن","الواقعة","الحديد","المجادلة","الحشر","الممتحنة","الصف","الجمعة","المنافقون","التغابن","الطلاق","التحريم","الملك","القلم","الحاقة","المعارج","نوح","الجن","المزمل","المدثر","القيامة","الإنسان","المرسلات","النبأ","النازعات","عبس","التكوير","الانفطار","المطففين","الانشقاق","البروج","الطارق","الأعلى","الغاشية","الفجر","البلد","الشمس","الليل","الضحى","الشرح","التين","العلق","القدر","البينة","الزلزلة","العاديات","القارعة","التكاثر","العصر","الهمزة","الفيل","قريش","الماعون","الكوثر","الكافرون","النصر","المسد","الإخلاص","الفلق","الناس",];
  const lastAyahInSoarh = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6];

  return (
    <div className="App">

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" dir="rtl">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-4" dir="rtl">
        <Row className="justify-content-md-center">
          <Col xs lg="2" />
          <Col md="auto">
            <Card bg={"dark"}  text={"white"}>
              <Card.Header as="h3">اعدادات الخطة</Card.Header>
              <Card.Body className="justify-content-md-center">
                <Row>
                  <Card
                    className="mx-2 mb-3"
                    bg={"dark"}
                    
                    text={"white"}
                    style={{ width: "18rem" }}
                  >
                    <Card.Header as="h5">الدرس</Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Label>مقدار الدرس</Form.Label>
                        <Form.Row>

                          <FormNumber id='getLengthOfDars' ref={ref => (childTest = ref)} placeholder="1, 1.5" step={0.25} />

                           <FormSelect md="auto" id ='getTypeForDaras' ref={node => (getTypeForDaras = node)}  index = {0} list = {type}/>
                          <div>
                            <input ref={ref => (getLam = ref)} type="checkbox" className="btn-check" id="btn-check-outlined" autocomplete="off"/>
                            <label className="btn btn-outline-primary" for="btn-check-outlined">اللام</label> 
                          </div>
                            
                            
                        </Form.Row>

                        <Form.Row>
                        
                          <FormSelect  id ='getSorahForDaras' ref={node => (getSorahForDaras = node)} title = 'بداية الدرس السورة' index = {0} list = {sour}/>
                        
                          <FormSelect md = "auto" id ='getAyahForDaras' ref={node => (getAyahForDaras = node)} title = 'الاية' index = {1} list = {[0,1,2,3,4,5,6,7]}/>
                        </Form.Row>

                         <Form.Row>
                          <FormSelect id = 'getmethodForDaras'  ref={node => (getmethodForDaras = node)} name='getmethodForDaras' title = 'طريقة الدرس' index = {20} list = {method}/>
                        </Form.Row>
                      </Form>
                    </Card.Body>
                  </Card>

                  <Card
                    className="mx-2 mb-3"
                    bg={"dark"}
                    
                    text={"white"}
                    style={{ width: "18rem" }}
                  >
                    <Card.Header as="h5">المراجعةالكبرى</Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Label>مقدار المراجعة الكبرى</Form.Label>
                        <Form.Row>
                          <FormNumber id='getLengthForMurajaea' ref={node => (getLengthForMurajaea = node)} placeholder="1, 1.5" step={1} />

                           <FormSelect md="auto" id = 'getTypeForMurajaea' ref={node => (getTypeForMurajaea = node)} title = '' index = {0} list = {type}/>                        
                        </Form.Row>

                        <Form.Row>
                          <FormSelect  id ='getSorahForMurajaea' ref={node => (getSorahForMurajaea = node)} title = 'بداية المراجعة السورة' index = {0} list = {sour}/>
                         
                           <FormSelect md = "auto" id ='getAyahForMurajaea' ref={node => (getAyahForMurajaea = node)} title = 'الاية' index = {0} list = {[1,2,3,4,5,6,7]}/>
                        </Form.Row>

                       
                        <Form.Row>
                          <FormSelect md id ='getMethodForMurajaea' ref={node => (getMethodForMurajaea = node)} title = 'طريقة المراجعة الكبرى' index = {0} list = {method}/>
                      
                        </Form.Row>
                      </Form>
                    </Card.Body>
                  </Card>

                  

                  <Card
                    className="mx-2 mb-3"
                    bg={"dark"}
                    
                    text={"white"}
                    style={{ width: "18rem" }}
                  >
                    <Card.Header as="h5">المراجعة</Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Label>مقدار المراجعة الصغرى</Form.Label>
                        <Form.Row>
                          <FormNumber id='getSmallMurajaea' ref={node => (getSmallMurajaea = node)} placeholder="1, 1.5" step={1} />
                          
                        </Form.Row>
                        
                      </Form>
                    </Card.Body>
                  </Card>

                  <Card
                    className="mx-2 mb-3"
                    bg={"dark"}
                    
                    text={"white"}
                    style={{ width: "18rem" }}
                  >
                    <Card.Header as="h5">إعدادات الجدول</Card.Header>
                    <Card.Body>
                      <Form>

                      <Form.Row >
                      <Form.Group xs as={Col} controlId="formBasicEmail">
                        <Form.Label>تاريخ البداية</Form.Label>
                          <HijriDatePicker inputName="hijri_date" id = "hijri_date" ref={node => (hijri_date = node)} className="form-control hijiri-date" selectedDate="1439/08/02" dateFormat="iYYYY/iMM/iDD" quickSelect />
                        </Form.Group>

                        <Form.Group xs as={Col} controlId="formBasicEmailSecondry">
                        <Form.Label>تاريخ النهاية</Form.Label>
                          <HijriDatePicker inputName="hijri_date" id = "hijri_date" ref={node => (hijri_date = node)} className="form-control hijiri-date" selectedDate="1444/09/02" dateFormat="iYYYY/iMM/iDD" quickSelect />
                        </Form.Group>
                      </Form.Row>    

                      <Form.Row >

                          <FormSelect md id ='getNumberOfWeek' ref={node => (getNumberOfWeek = node)} title = 'عدد أيام الاسبوع' index = {5} list = {[1,2,3,4,5,6,7]}/>
                                        
                         </Form.Row>

                          <Form.Row>
                            <FormSelect md id ='getNumberOfLineInTable' ref={node => (getNumberOfLineInTable = node)} title = 'عدد الأسطر في الخطة' index = {200} list = {numberOfLineInTable}/>
                          </Form.Row>

                      </Form>
                    </Card.Body>
                  </Card>

                  <Card
                    className="mx-2 mb-3"
                    bg={"dark"}

                    text={"white"}
                    style={{ width: "18rem" }}
                  >
                    <Card.Header as="h5">RESULT</Card.Header>
                    <Card.Body>
                      <Form>
                        <p id="demo"></p>
                      </Form>
                    </Card.Body>
                  </Card>
                </Row>

                <Col>
                  <Button variant="secondary">شرح للخطط</Button>{" "}
                  <Button variant="primary" onClick={createPlan}>
                    إنشاء خطة
                  </Button>{" "}
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="2" />
        </Row>
      </Container>

      <PlanTable  ref={ref => (child = ref)} />
      <br />
    </div>
  );
}

export default App;

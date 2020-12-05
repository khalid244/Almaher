import './App.css';
import { Button, DropdownButton, Dropdown, Container, Row, Col, Card, Form, Nav, Navbar } from 'react-bootstrap';


function App() {

  function httpGet(url) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", url, false ); // false for synchronous request
      xmlHttp.send( null );
      return JSON.parse(xmlHttp.responseText);
  }


  function createPlan() {
    console.log('createPlan');

    const sorah = document.getElementById("sorah").value;
    const ayah = document.getElementById("ayah").value;
    const length = document.getElementById("length").value;
    const method = document.getElementById("method").value;

    const t = httpGet(`http://localhost:9000/quran/findCloserAyah/${sorah}/${ayah}/${length}/${method}`)
    console.log(t);
  }

  function OptionsList(props) {
    return props.list.map((value, index) => {
      return <option value={index}>{value}</option>;
    })
  }

  const type = ["وجه", "سطر"];
  const method = ["من الفاتحة إلى الناس", "من الناس إلى الفاتحة"];
  const sour = ["الفاتحة","البقرة","آل عمران","النساء","المائدة","الأنعام","الأعراف","الأنفال","التوبة","يونس","هود","يوسف","الرعد","إبراهيم","الحجر","النحل","الإسراء","الكهف","مريم","طه","الأنبياء","الحج","المؤمنون","النور","الفرقان","الشعراء","النمل","القصص","العنكبوت","الروم","لقمان","السجدة","الأحزاب","سبأ","فاطر","يس","الصافات","ص","الزمر","غافر","فصلت","الشورى","الزخرف","الدخان","الجاثية","الأحقاف","محمد","الفتح","الحجرات","ق","الذاريات","الطور","النجم","القمر","الرحمن","الواقعة","الحديد","المجادلة","الحشر","الممتحنة","الصف","الجمعة","المنافقون","التغابن","الطلاق","التحريم","الملك","القلم","الحاقة","المعارج","نوح","الجن","المزمل","المدثر","القيامة","الإنسان","المرسلات","النبأ","النازعات","عبس","التكوير","الانفطار","المطففين","الانشقاق","البروج","الطارق","الأعلى","الغاشية","الفجر","البلد","الشمس","الليل","الضحى","الشرح","التين","العلق","القدر","البينة","الزلزلة","العاديات","القارعة","التكاثر","العصر","الهمزة","الفيل","قريش","الماعون","الكوثر","الكافرون","النصر","المسد","الإخلاص","الفلق","الناس"];

  return (
    <div className="App">
      {/* <div className="topBar">
        <div className="flexSpace"/>
        <div className="topBarItem button">اختبار عشوائي</div>
        <div className="topBarItem button">صناعة الخطة</div>
      </div> */}

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
          <Col xs lg="2"/>
          <Col md="auto">
            <Card bg={'dark'} key={'1'} text={'white'}>
              <Card.Header as="h3">اعدادات الخطة</Card.Header>
              <Card.Body className="justify-content-md-center">

                <Row>
                  <Card className="mx-2 mb-3" bg={'dark'} key={'1'} text={'white'} style={{ width: '18rem' }}>
                    <Card.Header as="h5">الدرس</Card.Header>
                    <Card.Body>
                      <Form>

                      <Form.Label>مقدار الدرس</Form.Label>
                      <Form.Row>
                        <Form.Group xs as={Col} controlId="formBasicEmail">
                          <Form.Control type="number" placeholder="1, 1.5" step={0.5}/>
                        </Form.Group>
                        <Form.Group md="auto" as={Col} controlId="formBasicEmail">
                          <Form.Control as="select" index={0}>
                            <OptionsList list={type}/>
                          </Form.Control>
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group xs as={Col} controlId="formBasicEmail">
                        <Form.Label>بداية الدرس السورة</Form.Label>
                          <Form.Control as="select" index={0}>
                            <OptionsList list={sour}/>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group md="auto" as={Col} controlId="formBasicEmail">
                          <Form.Label>الاية</Form.Label>
                          <Form.Control as="select" index={0}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                          </Form.Control>
                        </Form.Group>
                      </Form.Row>


                      <Form.Row>
                        <Form.Group as={Col} controlId="formBasicEmail">
                          <Form.Label>طريقة الدرس</Form.Label>
                          <Form.Control as="select" index={0}>
                            <OptionsList list={method}/>
                          </Form.Control>
                        </Form.Group>
                      </Form.Row>


                {/* <Card className="mb-3 group" bg={'dark'} key={'1'} text={'white'} style={{ width: '18rem' }}>
                  <Card.Header>المراجعة الكبرى</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <div>رقم السورة</div>
                      <input type="number" id="sorah" name="sorah"/><br/><br/>
                      <div>رقم الاية</div>
                      <input type="number" id="ayah" name="ayah"/><br/><br/>
                      <div>عدد اسطر الحفظ</div>
                      <input type="number" id="length" name="length"/><br/><br/>
                      <div>الطريقة</div>
                      <Select id="method" index={0} options={["من الفاتحة إلى الناس", "من الناس إلى الفاتحة"]}/>

                    </Card.Text>
                  </Card.Body>
                </Card> */}

                      </Form>
                    </Card.Body>
                  </Card>

                  <Card className="mx-2 mb-3" bg={'dark'} key={'1'} text={'white'} style={{ width: '18rem' }}>
                    <Card.Header as="h5">المراجعة</Card.Header>
                    <Card.Body>
                      <Form>

                      <Form.Label>مقدار المراجعة الصغرى</Form.Label>
                      <Form.Row>
                        <Form.Group xs as={Col} controlId="formBasicEmail">
                          <Form.Control type="number" placeholder="1, 1.5" step={0.5}/>
                        </Form.Group>
                        <Form.Group md="auto" as={Col} controlId="formBasicEmail">
                          <Form.Control as="select" index={0}>
                            <OptionsList list={type}/>
                          </Form.Control>
                        </Form.Group>
                      </Form.Row>

                      <Form.Label>مقدار المراجعة الكبرى</Form.Label>
                      <Form.Row>
                        <Form.Group xs as={Col} controlId="formBasicEmail">
                          <Form.Control type="number" placeholder="1, 1.5" step={0.5}/>
                        </Form.Group>
                        <Form.Group md="auto" as={Col} controlId="formBasicEmail">
                          <Form.Control as="select" index={0}>
                            <OptionsList list={type}/>
                          </Form.Control>
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group xs as={Col} controlId="formBasicEmail">
                        <Form.Label>بداية المراجعة الكبرى</Form.Label>
                          <Form.Control as="select" index={0}>
                            <OptionsList list={sour}/>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group md="auto" as={Col} controlId="formBasicEmail">
                          <Form.Label>الاية</Form.Label>
                          <Form.Control as="select" index={0}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                          </Form.Control>
                        </Form.Group>
                      </Form.Row>



                      </Form>
                    </Card.Body>
                  </Card>

                  <Card className="mx-2 mb-3" bg={'dark'} key={'1'} text={'white'} style={{ width: '18rem' }}>
                    <Card.Header as="h5">التاريخ</Card.Header>
                    <Card.Body>
                      <Form>

                      </Form>
                    </Card.Body>
                  </Card>

                  <Card className="mx-2 mb-3" bg={'dark'} key={'1'} text={'white'} style={{ width: '18rem' }}>
                    <Card.Header as="h5">الاسبوع</Card.Header>
                    <Card.Body>
                      <Form>

                      </Form>
                    </Card.Body>
                  </Card>
                  
                </Row>

                <Col>
                  <Button variant="secondary">شرح للخطط</Button>{' '}
                  <Button variant="primary" onClick={createPlan}>إنشاء خطة</Button>{' '}
                </Col>

              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="2"/>
        </Row>
      </Container>
      <br/>
      

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

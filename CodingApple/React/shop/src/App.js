import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import 슈즈1 from './img/shoes1.jpg';

function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' style={{ backgroundImage : `url(${슈즈1})`}}></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={`${슈즈1}`} width='80%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + '/shoes2.jpg'} width='80%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + '/shoes3.jpg'} width='80%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

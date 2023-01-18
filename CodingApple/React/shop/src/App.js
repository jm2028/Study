import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import 데이터 from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'

function App() {
  let [shoes] = useState(데이터);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Link to='/'>홈</Link>
          <Link to='/detail'>디테일</Link>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
          <Route path='/' element={
            <>
            <div className='main-bg' style={{ backgroundImage : `url(${process.env.PUBLIC_URL + '/shoes1.jpg'})`}}></div>
            <div className='container'>
              <div className='row'>
                {
                  shoes.map((data, idx)=>{
                    return <Item shoes={data} key={idx}></Item>;
                  })
                }
              </div>
            </div>
            </>
          }/>
          <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </div>                    
  );
}

function Item (props) {
  return (
    <div className='col-md-4'>
      <img src={props.shoes.src} alt={props.shoes.title} width='80%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;

/** Route
 * Route 안에 Routes로 페이지 생성 가능
 * <Link>로 해당 페이지로 이동 가능
 */
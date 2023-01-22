import { createContext, lazy, Suspense, useDeferredValue, useEffect, useState, useTransition } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import 데이터 from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
// import Detail from './routes/Detail.js'
// import Cart from './routes/Cart.js'
import axios from 'axios';
import { useQuery } from 'react-query';

export let Context1 = createContext()

const Detail = lazy(() => import('./routes/Detail.js'));
const Cart = lazy(() => import('./routes/Cart.js'));

function App() {
  let [name, setName] = useState('');
  let test = new Array(10000).fill(0);
  let [isPending, startTransition] = useTransition();
  let state = useDeferredValue(name);

  let [shoes, setShoes] = useState(데이터);
  let [재고] = useState([10, 11, 12])
  let navigate = useNavigate();

  let result = useQuery('작명', ()=>{
    return axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{ 
      console.log('재요청함?')
      return a.data 
    })
  })

  useEffect(()=>{
    !localStorage.getItem('watched') && localStorage.setItem('watched', JSON.stringify([]));
  }, [])

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/1')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            { result.isLoading ? '로딩중' : result.data.name }
          </Nav>
        </Container>
      </Navbar>

      <Suspense fallback={<div>로딩중임</div>}>
        <Routes>
            <Route path='/' element={
              <>

              <input onChange={(e)=>{
                startTransition(()=> {
                  setName(e.target.value);
                })
              }}/>
              {
                isPending ? '로딩중' :
                test.map(()=>{
                  return <div>{state}</div>
                })
              }

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
              <button onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result)=>{
                    setShoes([...shoes,...result.data]);
                  })
                  .catch(()=>{
                    console.log('실패')
                  })
              }}>버튼</button>
              </>
            }/>
            <Route path='/detail/:id' element={
                <Context1.Provider value={{ 재고, shoes }}>
                  <Detail shoes={shoes}/>
                </Context1.Provider>
            }/>
            <Route path='/cart' element={ <Cart></Cart>}></Route>

            <Route path='/about' element={<About/>}>
              <Route path='member' element={<div>멤버페이지임</div>}></Route>
              <Route path='location' element={<div>위치정보임</div>}></Route>
            </Route>
            <Route path='/event' element={<Event/>}>
              <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>}/>
              <Route path='two' element={<p>생일기념 쿠폰받기</p>}/>
            </Route>
            <Route path='*' element={<div>404페이지</div>}></Route>
        </Routes>
      </Suspense>
    </div>                    
  );
}

function Event () {
  return (
    <>
      <h4>오늘의 이벤트</h4> 
      <Outlet></Outlet>
    </>
  );
}

function About () {
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Item (props) {
  let navigate = useNavigate();
  return (
    <div className='col-md-4' onClick={()=>{navigate(`/detail/${props.shoes.id}`)}}>
      <img src={props.shoes.src} alt={props.shoes.title} width='80%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;

/** Route
 * Routes 안에 Route로 페이지 생성 가능
 * <Link>로 해당 페이지로 이동 가능
 * useNavigate 훅으로 navigate() 형식으로 페이지 이동 가능 -1은 뒤로가기 +1은 앞으로가기 -2면 두번뒤로가기
 */

/** NestedRoute
 * Route 안에 Route로 생성하며 /about/member 형식으로 이동 가능하게 됨
 * 이동한 페이지에는 부모 페이지인 about의 내용과 member의 내용이 나오며 member의 내용은 부모 컴포넌트의 <Outlet></Outlet>에 위치하게 됨  
 */

/** useParams()
 * /:{파라미터} 로 {파라미터} 값을 가져올 수 있음
 * /:{파라미터1}/:{파라미터2} 처럼 몇번이고 사용 가능
 */

 /** axios
  * axios는 결과를 바로 object로 변환해줌
  */
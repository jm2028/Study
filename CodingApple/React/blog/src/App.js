import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, set글제목] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, set따봉] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <span onClick={()=>{set글제목(['여자 코트 추천', '강남 우동맛집', '파이썬독학'])}}>글바꾸기</span>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{set따봉(따봉 + 1)}}>😍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;

/** useState
 * let [getValue, setValue] = useState('값');
 * getValue로 값을 불러오고 setValue로 값을 세팅한다 setValue(value)
 */

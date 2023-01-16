import './App.css';
import React, { useState } from 'react';

function App() {

  let [글제목, set글제목] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, set따봉] = useState(글제목.map(()=>{return 0}));
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(null);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      
      {
        글제목.map(function (title, i) {
          return(
            <div className="list" key={i}>
              <h4 
                onClick={()=>{
                  setModal(!modal);
                  setModalTitle(title);
                }}>
                { title } 
                <span 
                  onClick={(e)=>{
                    e.stopPropagation();
                    let ddabbong = [...따봉];
                    ddabbong[i] = ddabbong[i] + 1;
                    set따봉(ddabbong);
                  }}>😍
                </span>
                {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let arr = [...글제목];
                let arrDdabong = [...따봉];
                arr.splice(i, 1);
                arrDdabong.splice(i, 1);
                set글제목(arr);
                set따봉(arrDdabong);
              }}>삭제</button>
            </div>
          );
        })
      }

      <input type="text" onChange={(e)=>{
        입력값변경(e.target.value);
      }}/>

      <button onClick={()=>{
        if (입력값.length === 0) return;
        let arr = [...글제목];
        let arrDdabong = [...따봉];
        arr.unshift(입력값);
        arrDdabong.unshift(0);
        set글제목(arr);
        set따봉(arrDdabong);
      }}>추가</button>

      {
        modal && <Modal 글제목={modalTitle}/>
      }
      <Modal2></Modal2>
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render() {
    return(
      <div>안녕 {this.state.age}
        <button onClick={()=>{
          this.setState({age: 21})
        }}></button>
      </div>
    )
  }
}

export default App;

/** useState
 * let [getValue, setValue] = useState('값');
 * getValue로 값을 불러오고 setValue로 값을 세팅한다 setValue(value)
 */

/** setState
 * setState시 array를 수정할 경우 참조를 수정해줘야 값변경을 인식하기 때문에 deepCopy후 사용한다.
 */

/** component
 * 컴포넌트에 props는 파라미터의 객체로 전달이된다 사용처에 attribute 형식으로 사용하면 됨
 */

/** 동적 UI 만들기
 * 1. html css 미리 디자인
 * 2. 현재 UI 상태를 state에 저장해둠
 * 3. state에 따라 UI가 어떻게 보일지 작성
 */
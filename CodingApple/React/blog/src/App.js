import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, set글제목] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, set따봉] = useState(글제목.map(()=>{return 0}));
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(null);

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
                  onClick={()=>{
                    let ddabbong = [...따봉];
                    ddabbong[i] = ddabbong[i] + 1;
                    set따봉(ddabbong);
                  }}>😍
                </span>
                {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          );
        })
      }

      {
        modal && <Modal 글제목={modalTitle}/>
      }
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
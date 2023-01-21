import { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { addItem } from "./../store.js";
import {Context1} from './../App.js'

let YellowBtn = styled.button`
    background: yellow;
    color: black;
    padding: 10px;
`;

const Detail = (props) => {
    let {재고, shoes} = useContext(Context1);
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    

    let [count, setCount] = useState(0);
    let [sale, setSale] = useState(true);
    let [입력값, 입력값변경] = useState('');
    let [숫자만써요, 숫자가아닌가요] = useState(false);
    let [탭, 탭변경] = useState(0);
    let [fade, setFade] = useState('');
    let {id} = useParams();
    let thisProduct = props.shoes.find(item => item.id === Number(id));
    
    useEffect(()=>{
        let timer = setTimeout(()=>{ setSale(false) }, 2000);
        
        return ()=>{
            clearTimeout(timer);
        }
    }, []);

    useEffect(()=>{
        if (isNaN(입력값)) {
            숫자가아닌가요(true);
        }
        else {
            숫자가아닌가요(false);
        }
    }, [입력값]);

    useEffect(()=>{
        setFade('end')
        return ()=>{
            setFade('');
        }
    }, [])
    
    return (
        <div className={`container start ${fade}`}>
            {
                sale && 
                <div className="alert alert-warning">
                    2초 이내 구매시 할인
                </div>
            }
            {count}
            <button onClick={()=>{setCount(count+1)}}>버어튼</button>
            <YellowBtn>버튼</YellowBtn>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    {
                        숫자만써요&&
                        <h4 className="pt-5">
                            숫자만쓰세요..
                        </h4>
                    }
                    <input onChange={(e)=>{
                        입력값변경(e.target.value);
                    }}/>
                    <h4 className="pt-5">{thisProduct.title}</h4>
                    <p>{thisProduct.content}</p>
                    <p>{thisProduct.price}</p>
                    <button className="btn btn-danger" onClick={()=>{
                        console.log(thisProduct)
                        dispatch(addItem({id : thisProduct.id, name : thisProduct.title, count : 1}));
                    }}>주문하기</button> 
                </div>
            </div>
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>{탭변경(0)}}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=>{탭변경(1)}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=>{탭변경(2)}}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={탭} shoes={props.shoes}/>
            
        </div> 
    );
};

function TabContent({탭, shoes}) {
    let [fade, setFade] = useState('');
    let {재고} = useContext(Context1);

    useEffect(()=>{
        setTimeout(() => {
            setFade('end');
        }, 10);

        return ()=> {
            setFade('');
        }
    }, [탭])

    return (
        <div className={`start ${fade}`}>
            {[<div>{shoes[탭].title}</div>, <div>{shoes[탭].title}</div>, <div>{shoes[탭].title}</div> ][탭]}
        </div>
    );
}
export default Detail;

/** useEffect
 * 컴포넌트가 mount(생성), update(재렌더링), unmount(제거) 될 때 실행됩니다
 * html렌더링이 완료 된 이후에 동작하기때문에 시간이 오래걸리는 반복연산, 데이터 가져오는작업, 타이머 등을 넣어서 최적화 할 수 있음
 * useEffect의 둘째 파라미터로 []를 넣을수 있음 변수나 스테이트를 넣게되면 컴포넌트가 mount될 때와 해당 변수나 스테이트가 변경될 때만 실행됨 (여러개 삽입 가능)
 * 둘째 파라미터를 아무것도 넣지 않으면 1회만 실행하게 됨
 * return 에 코드를 작성하면 useEffect 가 동작하기 전에 실행됨 (clean up function)
 * unmount 시에도 clean up function이 실행됨
 */
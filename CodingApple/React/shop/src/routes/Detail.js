import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button`
    background: yellow;
    color: black;
    padding: 10px;
`;

const Detail = (props) => {

    
    let [count, setCount] = useState(0);
    let [sale, setSale] = useState(true);
    let [입력값, 입력값변경] = useState('');
    let [숫자만써요, 숫자가아닌가요] = useState(false);
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
    
    return (
        <div className="container">
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
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    );
};

export default Detail;
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addCount, deleteItem, subtractCount } from './../store.js';

function Cart() {

    let state = useSelector(state => state);
    let dispatch = useDispatch();

    return (
        <div>
            {state.user.name}의 장바구니
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                        <th>삭제하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.item.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
                                    <td>
                                        <button onClick={()=>{
                                            dispatch(addCount(item.id))
                                        }}>+</button>
                                        <button onClick={()=>{
                                            dispatch(subtractCount(item.id))
                                        }}>-</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>{
                                            dispatch(deleteItem(item.id))
                                        }}>삭제</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table> 
        </div>
    );
}

export default Cart

/** Redux State 변경
 * state 변경함수 만들기
 * 변경함수 export
 * 사용하려는 곳에서 useDispatch 훅 사용
 * dispatch(변경함수)로 변경
 */
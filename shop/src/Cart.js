import React from 'react';
import { Table } from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';

const Cart = (props) => {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.reducer.map((el, i) => {
                            return (
                                <tr key={i}>
                                    <td>{el.id}</td>
                                    <td>{el.name}</td>
                                    <td>{el.quantity}</td>
                                    <td>
                                        <button onClick={() => { dispatch({ type: '수량증가', payload: el.id }) }}>+</button>
                                        <button onClick={() => { dispatch({ type: '수량감소', payload: el.id }) }}>-</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {
                state.alertReducer === true
                    ? (
                        <div className="customAlertYellow">
                            <p>지금 구매하시면 타임세일 20%</p>
                            <button onClick={() => { dispatch({ type: 'closeAlert' }) }}>X</button>
                        </div>
                    )
                    : null
            }
        </div>
    )
}

// const convertStoreDataToProps = (state) => { // redux store 데이터 props로 변환
//     return {
//         state: state.reducer, // state 데이터를 state라는 이름의 props로 바꾸기
//         alertState: state.alertReducer
//     }
// }

// export default connect(convertStoreDataToProps)(Cart);
export default Cart;
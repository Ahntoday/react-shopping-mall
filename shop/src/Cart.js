import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

const Cart = (props) => {
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
                <CartItem state={props.state} />
            </Table>
        </div>
    )
}

const convertStoreDataToProps = (state) => { // redux store 데이터 props로 변환
    return {
        state: state // state 데이터를 state라는 이름의 props로 바꾸기
    }
}

const CartItem = (props) => {
    let data = props.state.map((el, idx) => {
        return (
            <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.quantity}</td>
                <td>0</td>
            </tr>
        )
    });

    return (
        <tbody>
            {data}
        </tbody>
    )
}

export default connect(convertStoreDataToProps)(Cart);
// export default Cart;
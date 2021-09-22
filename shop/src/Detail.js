/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import './Detail.scss';

const Detail = (props) => {
    let [showAlert, showAlertChange] = useState(true);
    let [inputData, inputDataChange] = useState('');
    let [pushedTab, pushedTabChange] = useState(0);
    let [aniSwitch, aniSwitchChange] = useState(false);

    useEffect(() => {
        // 2초 후 알람창 안보이게
        let timer = setTimeout(() => {
            showAlertChange(false);
        }, 2000);
        return () => { clearTimeout(timer) }
    }, [showAlert]);

    let { id } = useParams();
    let history = useHistory();
    let findedShoppingItem = props.shoes.find((item) => {
        return item.id == id
    });

    return (
        <div className="container">
            {inputData}
            <input onChange={e => { inputDataChange(e.target.value) }}></input>
            {
                showAlert === true
                    ? <Alert />
                    : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (findedShoppingItem.id + 1) + ".jpg"} alt="신발상세사진" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5"> {findedShoppingItem.title}</h4>
                    <p>{findedShoppingItem.content}</p>
                    <p>{findedShoppingItem.price}</p>
                    <Stock stock={props.stock} id={id} />
                    <button className="btn btn-danger" onClick={() => {
                        props.dispatch({ type: '항목추가', payload: { id: findedShoppingItem.id, name: findedShoppingItem.title, quantity: props.stock[id] } });
                        history.push('/cart');
                    }}>주문하기</button>
                    <button className="btn btn-danger" onClick={() => {
                        history.goBack();
                    }}>뒤로가기</button>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={() => { aniSwitchChange(false); pushedTabChange(0) }}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => { aniSwitchChange(false); pushedTabChange(1) }}>Option 2</Nav.Link>
                </Nav.Item>
            </Nav>
            <CSSTransition in={aniSwitch} classNames="wow" timeout={500}>
                <TabContent pushedTab={pushedTab} aniSwitchChange={aniSwitchChange} />
            </CSSTransition>

        </div>
    )
}

const Alert = () => {
    return (
        <div className="customAlertYellow">
            <p>재고가 얼마 남지 않았습니다</p>
        </div>
    )
}

const Stock = (props) => {
    return (
        <p>재고: { props.stock[props.id]} </p>
    )
}

const TabContent = (props) => {
    useEffect(() => {
        props.aniSwitchChange(true);
    })
    if (props.pushedTab === 0) {
        return <div>0번째 내용입니다</div>
    } else if (props.pushedTab === 1) {
        return <div>1번째 내용입니다</div>
    } else if (props.pushedTab === 2) {
        return <div>2번째 내용입니다</div>
    }
}

const convertStoreDataToProps = (state) => { // redux store 데이터 props로 변환
    return {
        state: state.reducer, // state 데이터를 state라는 이름의 props로 바꾸기
        alertState: state.alertReducer
    }
}

export default connect(convertStoreDataToProps)(Detail);
// export default Detail
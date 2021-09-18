/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Detail.scss';

const Detail = (props) => {
    let [showAlert, showAlertChange] = useState(true);
    let [inputData, inputDataChange] = useState('');

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
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger" onClick={() => {
                        history.goBack();
                    }}>뒤로가기</button>
                </div>
            </div>
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

export default Detail
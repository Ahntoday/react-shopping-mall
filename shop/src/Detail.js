/* eslint-disable */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Detail = (props) => {
    let { id } = useParams();
    let findedShoppingItem = props.shoes.find((item) => {
        return item.id == id
    });

    let history = useHistory();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={findedShoppingItem.img} alt="신발상세사진" width="100%" />
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

export default Detail
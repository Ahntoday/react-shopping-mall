/* eslint-disable */
import React, { useState, useContext } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import shoesData from './shoes-data.js';
import { Link, Route, useHistory } from 'react-router-dom';
import Detail from './Detail.js';
import Cart from './Cart.js';
import axios from 'axios';

let stockContext = React.createContext();

function App() {
  let [shoes, shoesChange] = useState(shoesData);
  let [showloadingUI, showloadingUIChange] = useState(false);
  let [stock, stockChange] = useState([10, 11, 12]); // 재고데이터

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SeoAn's Shoes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" > Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Route exact path="/">
        <div className="main">
          <button className="main-detail">행사상품보기</button>
        </div>
        <div className="container">
          <ShoppingItem shoes={shoes} />
          {
            showloadingUI === true
              ? <LoadingUI />
              : null
          }
          <button className="btn btn-primary" onClick={() => {
            showloadingUIChange(true);
            axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result) => {
                showloadingUIChange(false); // 로딩중 UI 안보이게
                shoesChange([...shoes, ...result.data]);
              })
              .catch(() => {
                showloadingUIChange(false);
                console.log('실패');
              });
          }}>더보기</button>
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail shoes={shoes} stock={stock} stockChange={stockChange} />
      </Route>
      <Route path="/:id">
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </div>
  );
}

const ShoppingItem = (props) => {
  let stock = useContext(stockContext);
  let history = useHistory();

  let data = props.shoes.map((el, i) => {
    return (
      <div className="col-md-4" key={i} onClick={() => { history.push('/detail/' + el.id) }}>
        <img src={"https://codingapple1.github.io/shop/shoes" + (el.id + 1) + ".jpg"} alt="신발상세사진"></img>
        <h4> {el.title}</h4>
        <p className="goods-detail">{el.content} & {el.price} </p>
        {stock}
      </div>
    )
  });

  return (
    <div className="row">
      {data}
    </div>
  )
}

const LoadingUI = () => {
  return (
    <div className="loadingUI">
      <p>로딩중입니다</p>
    </div>
  )
}


export default App;

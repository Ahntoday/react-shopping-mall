/* eslint-disable */
import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import shoesData from './shoes-data.js';

function App() {
  let [shoes, shoesChange] = useState(shoesData);
  let [shoesImg, shoesImgChange] = useState(["https://codingapple1.github.io/shop/shoes1.jpg", "https://codingapple1.github.io/shop/shoes2.jpg", "https://codingapple1.github.io/shop/shoes3.jpg"]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SeoAn's Shoes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
      <div className="main">
        <button className="main-detail">행사상품보기</button>
      </div>
      <div className="container">
        <ShoppingItem shoes={shoes} shoesImg={shoesImg} />
      </div>
    </div>
  );
}

const ShoppingItem = (props) => {
  let data = props.shoes.map((el, i) => {
    return (
      <div className="col-md-4" key={i}>
        <img src={props.shoesImg[i]}></img>
        <h4> {el.title}</h4>
        <p className="goods-detail">{el.content} & {el.price} </p>
      </div>
    )
  });

  return (
    <div className="row">
      {data}
    </div>
  )

}

export default App;

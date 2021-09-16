import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import shoesData from './shoes-data.js';

function App() {
  let [shoes, shoesChange] = useState(shoesData);

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
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg"></img>
            <h4> {shoesData[0].title} </h4>
            <p className="goods-detail">{shoes[0].content} & {shoes[0].price} </p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg"></img>
            <h4> {shoesData[1].title} </h4>
            <p className="goods-detail">{shoes[1].content} & {shoes[1].price} </p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg"></img>
            <h4> {shoesData[2].title}</h4>
            <p className="goods-detail">{shoes[2].content} & {shoes[2].price} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

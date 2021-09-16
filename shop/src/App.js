/* eslint-disable */
import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import shoesData from './shoes-data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';

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
              <Nav.Link > <Link to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link to="/detail">Detail</Link></Nav.Link>
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
      <Switch>
        <Route exact path="/">
          <div className="main">
            <button className="main-detail">행사상품보기</button>
          </div>
          <div className="container">
            <ShoppingItem shoes={shoes} />
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
        <Route path="/:id">

        </Route>
      </Switch>
    </div>
  );
}

const ShoppingItem = (props) => {
  let data = props.shoes.map((el, i) => {
    return (
      <div className="col-md-4" key={i}>
        <img src={el.img} alt="신발상세사진"></img>
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

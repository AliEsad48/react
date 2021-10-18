import React from "react"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
const Menu = () => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Link to="/">Homepage</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/birthday">Birthday</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/bs-classic">Bootstrap Classic</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/bs-react">Bootstrap React</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/clock-1">Clock1</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/clock-2">Clock2</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/countries">Countries</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/ctitle">Change Title</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/ucards">User Cards</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/rimages">Random İmages</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/props">Props</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/profile">Profile</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/jsx">Jsx</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/counter">Counter</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/hello">Hello</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/comp">Comp</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/form1">Form1</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/form2">Form2</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/form3">Form3</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/form4">Form4</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/shop">Shop</Link>
      </ListGroup.Item>
    </ListGroup>
  )
}
export default Menu

import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Note from "./Note"
const Notes = (props) => {
  return (
    <Container>
      <Row>
        {props.notes.map((note) => {
          return (
            <Col md={4}>
              <Note />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
export default Notes

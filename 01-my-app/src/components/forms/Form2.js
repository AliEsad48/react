import React, { useState } from "react"
import { Col, Container, Form, Row, Button } from "react-bootstrap"

const Form2 = () => {
  const [ad, setAd] = useState("")
  const [soyad, setSoyad] = useState("")
  const [email, setEmail] = useState("")
  const [telefon, setTelefon] = useState("")
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          <Form>
            <Form.Group className="mb-3" controlId="ad">
              <Form.Label>Adınız</Form.Label>
              <Form.Control type="text" placeholder="Adınızı Giriniz" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="soyad">
              <Form.Label>Soyad</Form.Label>
              <Form.Control type="text" placeholder="Soydınızı Giriniz" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Emailinizi Giriniz" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ad">
              <Form.Label>Telefon</Form.Label>
              <Form.Control type="text" placeholder="Telefonunuzu Giriniz" />
            </Form.Group>
            <Button variant="info" />
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Form2

import React, { useState } from "react"
import { Container, Card, Button } from "react-bootstrap"

const RandomImages = () => {
  const [sayi, setSayi] = useState(0)

  const sayiUret = () => {
    const rastgeleSayi = Math.floor(Math.random() * 9 + 1)
    setSayi(rastgeleSayi)
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Button variant="primary" onClick={sayiUret}>
            Değiştir
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default RandomImages

import React from "react"
import { useState } from "react"
import { Button, Container, Row } from "react-bootstrap"

const RenkDegistir = () => {
  const [renk, setRenk] = useState("black")
  const [variant, setVariant] = useState("dark")
  const renkDegistir = () => {
    renk == "black" ? setRenk("white") : setRenk("black")
    variant == "dark" ? setVariant("light") : setVariant("dark")
  }

  return (
    <>
      <Container
        style={{ width: "100%", height: "100%", backgroundColor: `${renk}` }}
      ></Container>
      <Button onClick={renkDegistir} variant={variant}>
        Renk Değiştir
      </Button>
    </>
  )
}

export default RenkDegistir

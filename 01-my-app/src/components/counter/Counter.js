import React from "react"
import { Button, ButtonGroup } from "react-bootstrap"

const Counter = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <ButtonGroup aria-label="Basic example">
        <Button variant="warning">+</Button>
        <Button variant="secondary"></Button>
        <Button variant="warning">-</Button>
        <Button variant="danger">Reset</Button>
      </ButtonGroup>
    </div>
  )
}

export default Counter

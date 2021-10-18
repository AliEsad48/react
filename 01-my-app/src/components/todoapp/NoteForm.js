import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
const NoteForm = (props) => {
  const [note, setNote] = useState("")
  const handleClick = () => {
    const yeniNote = {
      id: Date.now(),
      note: note,
    }
    props.ekle(yeniNote)
  }

  return (
    <div style={{ backgroundColor: "#efefef", padding: "1rem" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Notunuzu giriniz</Form.Label>
          <Form.Control
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </Form.Group>
        <Button variant="warning" onClick={handleClick}>
          Ekle
        </Button>
      </Form>
    </div>
  )
}
export default NoteForm

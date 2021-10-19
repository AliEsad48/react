import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const HomePage = () => {
  return (
    <div className="text-center mt-5">
      <h1>Hoşgeldin</h1>
      <Button variant="success" as={Link} to="/login">
        Giriş Yap
      </Button>
    </div>
  )
}

export default HomePage

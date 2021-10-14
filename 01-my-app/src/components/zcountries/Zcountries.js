import React, { useState, useEffect } from "react"
import { Container, Table, Image, Spinner } from "react-bootstrap"
import axios from "axios"

const Zcountries = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios("https://restcountries.com/v2/all")
      .then((resp) => {
        setCountries(resp.data)
        console.log(resp.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Container className="mt-5">
      <h1 style={{ textAlign: "center" }}>Ülkeler</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Bayrak</th>
            <th>Ülke</th>
            <th>Başkent</th>
            <th>Nüfus</th>
            <th>Yüzölçümü</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>
                <Image src={country.flag} fluid width="100" />
              </td>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.population}</td>
              <td>
                {country.area}km<sup>2</sup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Spinner
        animation="border"
        variant="success"
        className={loading ? "d-block" : "d-none"}
      />
    </Container>
  )
}

export default Zcountries

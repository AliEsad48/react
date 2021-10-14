import React, { useState, useEffect } from "react"
import { Container, Table, Image } from "react-bootstrap"

const Zcountries = () => {
  const [countries, setCountries] = useState([])
  return (
    <Container className="mt-5">
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
            <tr>
              <td>{index}</td>
              <td>
                <Image src={country.flag} rounded />
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
    </Container>
  )
}

export default Zcountries

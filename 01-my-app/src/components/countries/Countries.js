import React, { useState, useEffect } from "react"
import { Container, Spinner, Col, Table } from "react-bootstrap"
import Baskent from "./Baskent"
import Bayrak from "./Bayrak"

import Isim from "./Isim"
import Millet from "./Millet"
import Nufus from "./Nufus"
import Rakam from "./Rakam"

const Countries = () => {
  const [country, setCountry] = useState([])
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setIndex(index + 1)
    fetch("https://restcountries.com/v2/all")
      .then((resp) => resp.json())
      .then((data) => {
        setCountry(data)
        setLoading(false)
      })
  }, [])

  return (
    <body style={{ backgroundColor: "black" }}>
      <Container className="mt-4">
        <Spinner
          animation="border"
          variant="primary"
          className={loading ? "d-block" : "d-none"}
        />
        <Table variant="dark">
          <thead>
            <tr>
              <td>#</td>
              <td>Bayrak</td>
              <td>Ad</td>
              <td>Millet</td>
              <td>Nufus</td>
              <td>Başkent</td>
            </tr>
          </thead>
          <tbody>
            {country.map((country, Index) => {
              return (
                <tr>
                  <td>
                    <Rakam index={Index} />
                  </td>

                  <td>
                    <Bayrak image={country.flags.png} />
                  </td>
                  <td>
                    <Isim isim={country.name} />
                  </td>
                  <td>
                    <Millet millet={country.demonym} />
                  </td>
                  <td>
                    <Nufus nufus={country.population} />
                  </td>
                  <td>
                    <Baskent baskent={country.capital} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </body>
  )
}

export default Countries

import React from "react";
import { Card } from "react-bootstrap";
import Person from "./Person";
import data from "../../data/persons.json";

const Birthday = () => {
  return (
    <Card>
      <Card.Body>
        <h1>Bugün Doğanlar</h1>
        <p>Bugün doğan 5 kişi bulundu</p>

        {data.map((item) => {
          const { id, image, name, age } = item;
          return <Person image={image} name={name} age={age} key={id} />;
        })}
      </Card.Body>
    </Card>
  );
};

export default Birthday;

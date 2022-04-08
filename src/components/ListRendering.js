import React from "react";
import Person from "./Person";

function ListRendering() {
  //const names = ["Bek", "Alex", "Betty"];
  //const nameList = names.map((name) => <h3>{name}</h3>);

  const persons = [
    {
      id: 1,
      name: "Bek",
      age: 28,
      skill: "React",
    },
    {
      id: 2,
      name: "Alex",
      age: 24,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Betty",
      age: 19,
      skill: "Vue",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));
  return <div>{personList}</div>;
}

export default ListRendering;

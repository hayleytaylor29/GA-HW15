import React from "react";
import "./styles.css";
//import card1
import Card from "./components/Card";
import Card2 from "./components/Card2";
import cardsArr from './data'

export default function App(props) {
  const cards = cardsArr.map((ele, index) => { 
    return ( 
    <Card 
          {...ele}
          key={index}
          /> 
          ); 
        }) 
        console.log('this is cards:', cards);

  console.log('this is cardsArr:', cardsArr)
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">'
        {cards}
        {/* <Card1 />
        <Card2 title={props.title}/> */}
      </section>
    </div>
  );
}

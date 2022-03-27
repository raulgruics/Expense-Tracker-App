import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //useState() is a state called Hook
  //using state we can make the function to be recalled
  // const [] is called array distructuring , title is the value , and seTitle is to set the new value
  //the constant bellow goes into React memory and it can be recalled from there

  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  // function clickHander() {}
  // Name your functions clickHandler () {} if they are triggered in an event.

  const clickHandler = () => {
    //setTitle will be executed again from react memory
    setTitle("Updates!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

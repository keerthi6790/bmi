import React from "react";
import Check from "./calculation";
function Calculator() {
  return (
    <div>
      <h1>
        <center>BMI CALCULATOR</center>
      </h1>
      <center>
        <div class="container">
          <p id="a1">Enter weight in kg</p>
          <input type="number" id="weight" placeholder="Enter the Weight" />
          <br />
          <p id="a2">Enter height in cm</p>
          <input type="number" id="height" placeholder="Enter the Height" />
          <br />
          <input type="button" value="Check" onClick={Check} id="butt" />
        </div>
        <p id="output"></p>
      </center>
    </div>
  );
}
export default Calculator;

import React from "react";

const Check = () => {
  let a = document.getElementById("weight").value;
  let b = document.getElementById("height").value;
  let out = document.getElementById("output");
  if (a != 0 && b != 0) {
    let bmi = (a / (b * b)) * 10000;
    if (bmi < 18.5) {
      out.innerText = `BMI=${bmi.toFixed(2)} \n Condition=UnderWeight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      out.innerText = `BMI=${bmi.toFixed(2)} \n  Condition=Healthy`;
    } else if (bmi > 25.0 && bmi <= 29.9) {
      out.innerText = `BMI=${bmi.toFixed(2)} \n Condition=OverWeight`;
    } else {
      out.innerText = `BMI=${bmi.toFixed(2)} \n Condition=Obese`;
    }
  } else {
    out.innerText = "Enter correct values";
  }
};
export default Check;

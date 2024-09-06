/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const generate = () => {
  const first = ["Martha", "Freddy", "Mavis", "Marvin", "PeeWee"];
  const middle = ["Von", "Van", "O", "La"];
  const domain = [
    "Izzle.com",
    "Trump.edu",
    "PeeWee.us",
    "Bjorn.net",
    "Bingbong.org"
  ];

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < middle.length; j++) {
      for (let k = 0; k < domain.length; k++) {
        const name = first[i] + middle[j] + domain[k];
        console.log(name);
      }
    }
  }
};
generate();

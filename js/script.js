"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const elem = document.querySelectorAll("span"),
    resetBtn = document.querySelector("button");
  let numReserve = [];

  function random() {
    while (numReserve.length < 15) {
      let randomNumber = Math.ceil(Math.random() * 15);
      let found = false;
      for (let i = 0; i < numReserve.length; i++) {
        if (numReserve[i] === randomNumber) {
          found = true;
          break;
        }
      }
      if (!found) {
        numReserve[numReserve.length] = randomNumber;
      }
    }
    numReserve[15] = 0;
    uploadPage();
  }
  //События при наведении
  elem.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("active");
    });
  });

  elem.forEach((item) => {
    item.addEventListener("mouseout", () => {
      item.classList.remove("active");
    });
  });
  //reset btn
  resetBtn.addEventListener("click", () => {
    numReserve = [];
    random();
  });

  random();

  function chekPosition() {
    elem.forEach((item, key) => {
      item.addEventListener("click", (e) => {
        console.log(e.target.textContent);
        let tempContent = e.target.textContent;
        checkZero(tempContent, key);
      });
    });
  }

  function checkZero(target, key) {
    console.log(`${target}---${key} ---- ${numReserve[key + 1]}`);

    if (numReserve[key + 1] == 0) {
      numReserve[key] = 0;
      numReserve[key + 1] = +target;
      uploadPage();
    }
    if (numReserve[key - 1] == 0) {
      numReserve[key] = 0;
      numReserve[key - 1] = +target;
      uploadPage();
    }
    if (numReserve[key + 4] == 0) {
      numReserve[key] = 0;
      numReserve[key + 4] = +target;
      uploadPage();
    }
    if (numReserve[key - 4] == 0) {
      numReserve[key] = 0;
      numReserve[key - 4] = +target;
      uploadPage();
    }
  }
  chekPosition();

  //upload window
  function uploadPage() {
    elem.forEach((items, key) => {
      if (numReserve[key] === 0) {
        items.style.background = "goldenrod";
      } else {
        items.style.background = "white";
      }
      items.textContent = numReserve[key];
    });
    if (numReserve === [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) {
      alert("Good Game. You win!!!");
    }
    console.log(numReserve);
  }
});

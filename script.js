let container = document.querySelector(".container");

function createDivs(number) {
  // container.style.width = `${number * 30}px`;
  const pixelSize = 800 / number;
  for (let i = 0; i < number * number; i++) {
    let div = document.createElement("div");
    div.style.height = `${pixelSize}px`;
    div.style.width = `${pixelSize}px`;
    container.appendChild(div);
  }
}

function hoverEffect() {
  const divs = document.querySelectorAll(".container div");
  let divArray = Array.from(divs);
  divArray.forEach(div => {
    div.addEventListener("mouseover", () => {
      const randomA = Math.floor(Math.random() * 255);
      const randomB = Math.floor(Math.random() * 255);
      const randomC = Math.floor(Math.random() * 255);

      if (div.style.backgroundColor !== "" && parseFloat(div.style.opacity) <
        1) {
        div.style.opacity = `${parseFloat(div.style.opacity) + 0.1}`;
      }
      else if (div.style.backgroundColor === "") {
        div.style.opacity = `0.1`;
        div.style.backgroundColor = "rgb(" + randomA + "," + randomB + "," +
          randomC + ")";
      }

      // setTimeout(() =>{
      //   div.style.backgroundColor = "";
      //   }, 100)
    });

    // div.addEventListener("mouseout", () => {
    //   div.style.backgroundColor = "";
    // });
  });
}

createDivs(16);
hoverEffect();

const changeGrid = document.querySelector("#gridBtn");
const modal = document.querySelector(".gridDialog");
const confirmBtn = document.querySelector("#confirmBtn");
const resetBtn = document.querySelector("#resetBtn");
const modalForm = document.querySelector("#squareNums");

let numOfSquares = 0;
changeGrid.addEventListener("click", () => {
  modal.showModal();
});

confirmBtn.addEventListener("click", (e) => {
  if (modalForm.value <= 0) {
    alert("The value must be above 0!!!");
    e.preventDefault();
    return false;
  }
  else if (modalForm.value > 100) {
    alert("Value can't be bigger than 100!!!");
    e.preventDefault();
    return false;
  }
  else {
    numOfSquares = modalForm.value;
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    createDivs(numOfSquares);
  }
  hoverEffect();
});

resetBtn.addEventListener("click", () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  if (numOfSquares !== 0) {
    createDivs(numOfSquares);
  }
  else {
    createDivs(16);
  }
  hoverEffect();
});
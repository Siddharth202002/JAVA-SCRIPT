const val = "0123456789ABCDEF";
const btn = document.querySelector("#button");

const randomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += val[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeColor = () => {
  document.body.style.backgroundColor = randomColor();
};

btn.addEventListener("click" , changeColor);
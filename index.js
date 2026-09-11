var result = document.getElementById("result");
result.style.color = "red";

function increment() {
  +result.innerHTML++;
  result.style.color = "blue";
}

function decrement() {
  if (result.innerHTML <= 1) {
    result.innerHTML = "0";
    result.style.color = "red";
  } else {
    +result.innerHTML--;
    result.style.color = "blue";
  }
}

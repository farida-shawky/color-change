var allbuttons = document.querySelectorAll("button");
var _div = document.querySelector("div");

allbuttons.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-danger")) {
      e.target.parentNode.classList.remove("bg-primary", "bg-dark");
      e.target.parentNode.classList.add("bg-danger");
    } else if (e.target.classList.contains("btn-primary")) {
      e.target.parentNode.classList.remove("bg-danger", "bg-dark");
      e.target.parentNode.classList.add("bg-primary");
    } else if (e.target.classList.contains("btn-dark")) {
      e.target.parentNode.classList.remove("bg-danger", "bg-primary");
      e.target.parentNode.classList.add("bg-dark");
    }
  });
});

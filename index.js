var allbuttons = document.querySelectorAll("button");
var _div = document.querySelector("div");
var currentbg = "";

allbuttons.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    if (currentbg) {
      _div.classList.remove(currentbg);
    }

    _div.classList.add(e.target.value);
    currentbg = e.target.value;

    /*_div.classList.replace(currentcolor, e.target.dataset.color);
    currentcolor = e.target.dataset.color;*/
  });
});

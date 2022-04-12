// rating click event code, use event delegation
let ratingWrap = document.querySelector(".rating-wrap");
let selectedNumber = 0;

ratingWrap.addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("rating")) {
    if (target.classList.contains("clicked"))
      target.classList.remove("clicked");
    else target.classList.add("clicked");
  }
  selectedNumber = target.innerText;
});

// submit event
let submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  let ratingState = document.querySelector(".rating-state-wrap");
  let thankuState = document.querySelector(".thanku-state-wrap");

  ratingState.classList.add("hidden");
  thankuState.classList.remove("hidden");

  let inputArea = document.querySelector(".selected_number");
  inputArea.innerText = selectedNumber;
});

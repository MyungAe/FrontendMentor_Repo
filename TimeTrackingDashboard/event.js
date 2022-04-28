const form = document.querySelector(".dashboard-term");

form.addEventListener("click", (e) => {
  let target = e.target;
  if (!target.classList.contains("dashboard-term")) Handler(target);
});

const Handler = (target) => {
  ClickHandler(target);
  NoneHandler(target);
};

const ClickHandler = (target) => {
  const label = document.querySelector(
    `label[for='${target.innerText.toLowerCase()}']`
  );
  if (label.classList.contains("clicked")) label.classList.remove("clicked");
  else label.classList.add("clicked");
};

const NoneHandler = (target) => {
  const times = document.querySelectorAll("." + target.innerText.toLowerCase());
  times.forEach((i) => {
    if (i.classList.contains("none")) i.classList.remove("none");
    else i.classList.add("none");
  });
};

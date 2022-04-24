let id = "",
  advice = "";

const idDOM = document.querySelector(".id");
const paragraphDOM = document.querySelector(".paragraph");

const getAdvice = () =>
  fetch("https://api.adviceslip.com/advice").then((response) =>
    response.json()
  );

const setVariable = async (id, advice) => {
  try {
    let json = await getAdvice();
    id = json.slip.id;
    advice = json.slip.advice;
    idDOM.innerText += id;
    paragraphDOM.innerText += `"${advice}"`;
  } catch (e) {
    console.error(e);
  }
};

setVariable();

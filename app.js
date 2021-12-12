"use strict";
const paras = document.querySelectorAll(".para p");

const searchWord = document.querySelector(".word-search");
const replaceWord = document.querySelector(".word-replace");
const btn = document.querySelector(".btn");

let pattern = "";

btn.addEventListener("click", () => {
  const replaceValue = replaceWord.value;
  paras.forEach((para) => {
    para.innerHTML = para.textContent.replace(pattern, replaceValue);
  });
  searchWord.value = "";
  replaceWord.value = "";
});

searchWord.addEventListener("keyup", (word) => {
  const searchValue = word.target.value;
  // sent variable to globle scope
  pattern = new RegExp(`${searchValue}`, "gi");

  if (searchValue !== "") {
    paras.forEach((para) => {
      para.innerHTML = para.textContent.replace(
        pattern,
        (match) => `<mark>${match}</mark>`
      );
    });
  } else {
    paras.forEach((para) => {
      para.innerHTML = para.textContent.replace(pattern, (match) => `${match}`);

      //   second way to unselect **********8
      //   para.innerHTML = para.textContent.replace(`<mark>`, "");
      //   para.innerHTML = para.textContent.replace(`</mark>`, "");
    });
  }
});

const btnOpen = document.querySelectorAll(".list-item__btn");
btnOpen.forEach((el) => {
  el.addEventListener("click", (elem) => {
    let current = elem.currentTarget;
    let parrentBlock = current.closest(".list-item__content");
    console.log(parrentBlock);
    parrentBlock
      .querySelector(".list-item__info")
      .classList.toggle("list-item__info--open");
      current.classList.toggle("list-item__btn--close");
  });
});

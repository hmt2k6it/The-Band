const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modalContainer = document.querySelector(".modal-container");
function showBuyTicket() {
  modal.classList.add("open-modal");
}
// Hàm gỡ bỏ open-modal
function closeBuyTicket() {
  modal.classList.remove("open-modal");
}
// Nghe hành vi click vào buy button
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTicket);
}
// Nghe hành vi click vào modalClose
modalClose.addEventListener("click", closeBuyTicket);
modal.addEventListener("click", closeBuyTicket);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

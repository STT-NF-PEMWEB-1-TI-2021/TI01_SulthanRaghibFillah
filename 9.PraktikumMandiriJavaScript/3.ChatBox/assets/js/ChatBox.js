let kolomChat = document.querySelector(".coloum-chat");
const inputChat = document.querySelector(".input-chat");
const kirimChat = document.querySelector(".send-chat");

kirimChat.addEventListener("click", function () {
  kolomChat.innerHTML = kolomChat.innerHTML + "<br>" + inputChat.value;
});

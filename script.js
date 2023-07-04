document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});

const onlineTicket = document.querySelector(".button__online-ticket");
const paperTicket = document.querySelector(".button__paper-ticket");
const iFrame = document.querySelector(".iframe");

onlineTicket.addEventListener("click", () => {
  iFrame.src = "./online-ticket.html";
  iFrame.height = "580";
  onlineTicket.classList.remove("button-blue");
  onlineTicket.classList.add("button-white");
  paperTicket.classList.add("button-blue");
});

paperTicket.addEventListener("click", () => {
  iFrame.src = "./paper-ticket.html";
  iFrame.height = "970";
  paperTicket.classList.remove("button-blue");
  paperTicket.classList.add("button-white");
  onlineTicket.classList.add("button-blue");
});

////////////////////////////////// * Burger menu

const openCloseBurgerMenu = () => {
  const burgerMenu = document.querySelector(".burger");
  const navbar = document.querySelector(".nav");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navbar.classList.toggle("open");
  });
};
openCloseBurgerMenu();

//////////////////////////////// *iframe

const changeIframe = () => {
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
    iFrame.height = "1200";
    paperTicket.classList.remove("button-blue");
    paperTicket.classList.add("button-white");
    onlineTicket.classList.add("button-blue");
  });
};
changeIframe();

////////////////////////////////////////// * Accordion

const openPanel = () => {
  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
};
openPanel();

////////////////////////////////////////// * Check-registration

const showCheckRegistration = () => {
  const onlineTicket = document.querySelector(".button__online-ticket");
  const paperTicket = document.querySelector(".button__paper-ticket");
  const checkRegistration = document.querySelector(".check-registration");

  paperTicket.addEventListener("click", () => {
    checkRegistration.style.display = "flex";
  });

  onlineTicket.addEventListener("click", () => {
    checkRegistration.style.display = "none";
  });
};
showCheckRegistration();

// * Change img

const changeImg = () => {
  const onlineTicket = document.querySelector(".button__online-ticket");
  const paperTicket = document.querySelector(".button__paper-ticket");
  const ticketImg = document.querySelector(".ticket-img");

  paperTicket.addEventListener("click", () => {
    ticketImg.src = "./assets/img/paper-ticket-img.png";
  });

  onlineTicket.addEventListener("click", () => {
    ticketImg.src = "./assets/img/online-ticket-img.png";
  });
};
changeImg();

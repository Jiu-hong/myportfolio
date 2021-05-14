const navButton = document.querySelector(".navbutton");
const nav = document.querySelector("nav");

const closebtn = document.querySelector(".closebtn");

navButton.addEventListener("click", () => {
  nav.classList.toggle("show");
});

nav.addEventListener("click", () => {
  nav.classList.remove("show");
});

//modal
const projectContainer = document.querySelector(".project-container");

projectContainer.addEventListener("click", (e) => {
  e.preventDefault();
  const go = e.target.closest(".go");
  if (!go) return;

  const modal = go.parentNode.nextElementSibling;
  const closeButton = modal.querySelector(".closemodal");

  const modalOPen = () => {
    modal.classList.add("modal-open");
    document.body.style.overflowY = "hidden";
    // modal.style.overflowY = "scroll";
    modal.style.animation = "modalIn 1000ms forwards";
  };

  modalOPen();

  const closeModal = () => {
    modal.classList.remove("modal-open");
    document.body.style.overflowY = "scroll";
    modal.removeEventListener("animationend", closeModal);
  };

  closeButton.addEventListener("click", () => {
    modal.style.animation = "modalOut 1000ms forwards";
    modal.addEventListener("animationend", closeModal);
  });
});

import "./style.css";

const menuButton =
  document.querySelector<HTMLButtonElement>("button.menu-icon")!;

const closeMenuButton = document.querySelector<HTMLButtonElement>(
  "button.close-menu-icon"
)!;

const mobileMenuOverlay =
  document.querySelector<HTMLDivElement>(".menu-mobile")!;

menuButton.addEventListener("click", () => {
  mobileMenuOverlay.classList.add("is-visible");
  mobileMenuOverlay.classList.remove("is-hidden");

  closeMenuButton.addEventListener("click", () => {
    mobileMenuOverlay.classList.remove("is-visible");
    mobileMenuOverlay.classList.add("is-hidden");
  });
});

const menuButton = document.querySelector<HTMLButtonElement>(
  ".navbar__hamburguer-icon"
)!;

const closeMenuButton = document.querySelector<HTMLButtonElement>(
  ".navbar__times-icon"
)!;

const menuItems = document.querySelectorAll<HTMLAnchorElement>(
  ".expanded-mobile-menu__item"
)!;

const mobileMenuOverlay = document.querySelector<HTMLDivElement>(
  ".expanded-mobile-menu"
)!;

menuButton.addEventListener("click", () => {
  mobileMenuOverlay.style.display = "flex";
});

closeMenuButton.addEventListener("click", () => {
  mobileMenuOverlay.style.display = "none";
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    mobileMenuOverlay.style.display = "none";
  });
});

export {};

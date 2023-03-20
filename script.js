const place = document.querySelectorAll(".place");
const icons = document.querySelectorAll(".icon-and-text");
place.forEach((item) =>
  item.addEventListener("mouseover", () => {
    item.classList.add("increase-z-index");
  })
);

place.forEach((item) =>
  item.addEventListener("mouseout", () => {
    item.classList.remove("increase-z-index");
  })
);

icons.forEach((icon) =>
  icon.addEventListener("mouseover", () => {
    icon.classList.add("hover-on-icon");
  })
);

icons.forEach((icon) =>
  icon.addEventListener("mouseout", () => {
    icon.classList.remove("hover-on-icon");
  })
);

let activeIcon;
icons.forEach((icon) =>
  icon.addEventListener("click", () => {
    if (activeIcon) {
      activeIcon.classList.remove("click-on-icon");
    }
    icon.classList.add("click-on-icon");
    activeIcon = icon;
  })
);

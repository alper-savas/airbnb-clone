// Select necessary items on page
const place = document.querySelectorAll(".place");
const icons = document.querySelectorAll(".icon-and-text");
const profile = document.querySelector(".last-bar-icons");
const expandProfile = document.querySelector(".expand-profile");
const abs = document.querySelector(".abs");

// Add event listener
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

profile.addEventListener("click", () => {
  expandProfile.classList.toggle("visible");
  console.log(expandProfile);
});

// Implement sticky navigation
window.addEventListener("scroll", () => {
  if (window.scrollY > 21) {
    abs.classList.remove("abs");
    abs.classList.add("sticky-second");
  } else {
    abs.classList.add("abs");
    abs.classList.remove("sticky-second");
  }
});

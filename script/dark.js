let lightMode = true;
const switcher = document.querySelector("#switcher");

const darkMode = () => {
  const buttons = document.querySelectorAll(".container button");
  if (lightMode) {
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        btn.style["border"] = "5px solid rgb(201, 153, 23)";
      });
      btn.addEventListener("mouseleave", () => (btn.style["border"] = "none"));
    });
    document.body.style["background-color"] = "rgba(13, 13, 14, 0.986)";
    document.body.style["color"] = "white";
    lightMode = false;
  } else {
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        btn.style["border"] = "5px solid black";
      });
      btn.addEventListener("mouseleave", () => (btn.style["border"] = "none"));
    });
    document.body.style["background-color"] = "white";
    document.body.style["color"] = "black";
    lightMode = true;
  }
};

switcher.addEventListener("click", darkMode);

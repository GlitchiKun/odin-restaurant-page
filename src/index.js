import "./styles.css";
import { HomePage } from "./home.js";
import { MenuPage } from "./menu.js";

const content = document.getElementById("content");

function clearContent() {
  for (const child of content.children) {
    child.remove();
  }
}

const home_button = document.getElementById("home-button");
home_button.addEventListener("click", (e) => {
  clearContent();
  content.appendChild(HomePage.generateDiv());
});

const menu_button = document.getElementById("menu-button");
menu_button.addEventListener("click", (e) => {
  clearContent();
  content.appendChild(MenuPage.generateDiv());
});

document.addEventListener("DOMContentLoaded", (e) => {
  content.appendChild(HomePage.generateDiv());
});

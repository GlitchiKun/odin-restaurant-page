import "./styles.css";
import { HomePage } from "./home.js";

document.addEventListener("DOMContentLoaded", (e) => {
  const content = document.getElementById("content");
  content.appendChild(HomePage.generateDiv());
});

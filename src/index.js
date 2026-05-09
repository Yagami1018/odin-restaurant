import "./styles.css";
import About from "./Components/About.js";
import Home from "./Components/Home.js";
import Menu from "./Components/Menu.js";

//DOM References
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

//Event Listeners
menuBtn.addEventListener("click", Menu);
homeBtn.addEventListener("click", Home);
aboutBtn.addEventListener("click", About);

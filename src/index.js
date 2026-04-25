import "./styles.css";
import wallpaper from "./wallpaper.jpg";
import { greeting } from "./greeting.js";

const image = document.createElement("img");
image.src = wallpaper;

document.body.appendChild(image);

console.log(greeting);

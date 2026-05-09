import { content } from "./Content.js";

export default function Home(){
  content.innerHTML = "";
  const newElement = document.createElement("h1");
  newElement.textContent = `Welcome to ${this.textContent}`;
  content.appendChild(newElement);
};

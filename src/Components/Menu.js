import { content } from "./Content.js";
import Dishes from "./Dishes.js";

export default function Menu() {
  content.innerHTML = "";
  document.body.style.minWidth="max-content"

  //DOM References
  const newElement = document.createElement("h1");
  const cardContainer = document.createElement("div");
  newElement.textContent = `Welcome to ${this.textContent}`;

  for (let dish of Dishes) {
    //DOM References
    const card = document.createElement("div");
    const name = document.createElement("div");
    const description = document.createElement("div");
    const price = document.createElement("div");

    //Text Contents
    name.textContent = `Name: ${dish.name}`;
    description.textContent = `${dish.desc}`;
    price.textContent = `Price: ${dish.price}`;

    //Card Style
    card.classList.add("card");
    name.classList.add("dish-name");
    description.classList.add("dish-desc");
    price.classList.add("dish-price");

    card.append(name, description, price);

    cardContainer.classList.add("card-container");

    cardContainer.appendChild(card);
  }

  content.append(newElement, cardContainer);
}

import { content } from "./Content.js";

export default function Home() {
  content.innerHTML = "";

  //DOM References
  const newElement = document.createElement("h1");
  const welcome = document.createElement("p");

  //Text Contents
  newElement.textContent = `Welcome to ${this.textContent}`;
  welcome.textContent = `Welcome to my Restaurant. We are proud to receive you, we know for sure that you likely fall in love with our tasteful meals, prepared with love an effort for clients like you that decided to visit one of the most excellent restaurants of our beloved city. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam perspiciatis consequatur deserunt repellendus. Nulla in iste rerum quibusdam ipsum at cumque, eaque atque voluptate repudiandae sunt, voluptas, soluta vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam perspiciatis consequatur deserunt repellendus. Nulla in iste rerum quibusdam ipsum at cumque, eaque atque voluptate repudiandae sunt, voluptas, soluta vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam perspiciatis consequatur deserunt repellendus. Nulla in iste rerum quibusdam ipsum at cumque, eaque atque voluptate repudiandae sunt, voluptas, soluta vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam perspiciatis consequatur deserunt repellendus. Nulla in iste rerum quibusdam ipsum at cumque, eaque atque voluptate repudiandae sunt, voluptas, soluta vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam perspiciatis consequatur deserunt repellendus. Nulla in iste rerum quibusdam ipsum at cumque, eaque atque voluptate repudiandae sunt, voluptas, soluta vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam perspiciatis consequatur deserunt repellendus. Nulla in iste rerum quibusdam ipsum at cumque, eaque atque voluptate repudiandae sunt, voluptas, soluta vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsam perspiciatis consequatur deserunt repellendus. Nulla in iste rerum quibusdam ipsum at cumque, eaque atque voluptate repudiandae sunt, voluptas, soluta vitae.`;

  content.appendChild(newElement);
  content.appendChild(welcome);
}

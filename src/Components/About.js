import { content } from "./Content.js";

export default function About() {
    content.innerHTML = "";

    //DOM References
    const newElement = document.createElement("h1");
    const ul = document.createElement("ul");
    const address = document.createElement("li");
    const email = document.createElement("li");
    const phone = document.createElement("li");

    //Text Contents
    newElement.textContent = `Welcome to ${this.textContent}`;
    address.textContent =
        "Fake Adress: 1st between 20th avenue and Malcolm Street, Harlem Neighborhood, California";
    email.textContent = "Email: fakeaccount@fakemail.com";
    phone.textContent = "Phone: 1-1456-7854";

    ul.append(address, email, phone);

    content.append(newElement, ul);
}

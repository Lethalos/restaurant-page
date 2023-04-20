import _, { add, forEach } from "lodash";
import "./style.css";

import FoodImages from "./food-images/images.js";

const header = document.createElement("header");
header.classList.add("navbar");

const content = document.createElement("div");
content.id = "content";

const footer = document.createElement("footer");

document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);

// Header Buttons
const title = document.createElement("h1");
title.innerText = "Keep Fit";

const buttons = document.createElement("div");
buttons.classList.add("buttons");

const homeBtn = document.createElement("button");
homeBtn.innerText = "Home";
homeBtn.id = "home";

const menuBtn = document.createElement("button");
menuBtn.innerText = "Menu";
menuBtn.id = "menu";

const contactBtn = document.createElement("button");
contactBtn.innerText = "Contact";
contactBtn.id = "contact";

header.appendChild(title);
header.appendChild(buttons);
buttons.appendChild(homeBtn);
buttons.appendChild(menuBtn);
buttons.appendChild(contactBtn);

// Home Page
const homePage = document.createElement("div");
homePage.id = "homePage";

const homeTitle = document.createElement("h1");
homeTitle.innerText = "EASY TO BE HEALTHY";

const homeText = document.createElement("p");
homeText.innerText =
  "Healthy doesn’t have to be hard. We’re the health nuts, so you don’t have to be";

const homeMenuBtn = document.createElement("button");
homeMenuBtn.classList.add("homeMenuBtn");
homeMenuBtn.innerText = "Checkout the Menu";

homePage.appendChild(homeTitle);
homePage.appendChild(homeText);
homePage.appendChild(homeMenuBtn);

// Menu Page
const menuPage = document.createElement("div");
menuPage.id = "menuPage";

const menuTitle = document.createElement("h1");
menuTitle.innerText = "Menu";

const foods = document.createElement("div");
foods.classList.add("foods");

forEach(FoodImages, (value, key) => {
  const foodCard = document.createElement("div");
  foodCard.classList.add("foodCard");

  const food = new Image();
  food.src = value;

  const cardTitle = document.createElement("h2");
  cardTitle.innerText = key;

  const cardDescription = document.createElement("p");
  cardDescription.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nis";

  foodCard.appendChild(food);
  foodCard.appendChild(cardTitle);
  foodCard.appendChild(cardDescription);

  foods.appendChild(foodCard);
});

menuPage.appendChild(menuTitle);
menuPage.appendChild(foods);

// Contact Page
const contactPage = document.createElement("div");
contactPage.id = "contactPage";

const contactTitle = document.createElement("h1");
contactTitle.classList.add("contactTitle");
contactTitle.innerText = "Contact Us";

const phone = document.createElement("p");
phone.classList.add("phone");
phone.innerText = "Phone: 123-456-7890";

const email = document.createElement("p");
email.classList.add("email");
email.innerText = "Email: keepfit@gmail.com";

const address = document.createElement("p");
address.classList.add("address");
address.innerText = "Address: 1234 Main St, City, State, 12345";

const map = document.createElement("iframe");
map.classList.add("map");
map.src =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d84726.42903603791!2d-81.39880118385516!3d29.58825511842685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1682000240104!5m2!1str!2str";

contactPage.appendChild(contactTitle);
contactPage.appendChild(phone);
contactPage.appendChild(email);
contactPage.appendChild(address);
contactPage.appendChild(map);

// Footer
const footerText = document.createElement("p");
footerText.classList.add("footerText");
footerText.innerText = "Created by: ";

const footerLink = document.createElement("a");
footerLink.classList.add("footerLink");
footerLink.innerText = "Kaan Ozdogan";
footerLink.href = "https://github.com/Lethalos";
footerLink.target = "_blank";

footerText.appendChild(footerLink);

footer.appendChild(footerText);

// Event Listeners
homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(homePage);
});

menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(menuPage);
});

contactBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(contactPage);
});

homeMenuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(menuPage);
});

// Default Page
content.appendChild(homePage);

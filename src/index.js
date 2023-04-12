const header = document.createElement("header");
header.classList.add("navbar");

const content = document.createElement("div");
content.id = "content";

const footer = document.createElement("footer");

document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);

// Header Buttons
const homeBtn = document.createElement("button");
homeBtn.innerText = "Home";
homeBtn.id = "home";

const menuBtn = document.createElement("button");
menuBtn.innerText = "Menu";
menuBtn.id = "menu";

const contactBtn = document.createElement("button");
contactBtn.innerText = "Contact";
contactBtn.id = "contact";

header.appendChild(homeBtn);
header.appendChild(menuBtn);
header.appendChild(contactBtn);

// Home Page
const homePage = document.createElement("div");
homePage.id = "homePage";

const homeTitle = document.createElement("h1");
homeTitle.innerText = "Welcome to the Home Page";

const homeText = document.createElement("p");
homeText.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nis";

homePage.appendChild(homeTitle);
homePage.appendChild(homeText);

// Menu Page
const menuPage = document.createElement("div");
menuPage.id = "menuPage";

const menuTitle = document.createElement("h1");
menuTitle.innerText = "Welcome to the Menu Page";

const menuText = document.createElement("p");
menuText.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nis";

menuPage.appendChild(menuTitle);
menuPage.appendChild(menuText);

// Contact Page
const contactPage = document.createElement("div");
contactPage.id = "contactPage";

const contactTitle = document.createElement("h1");
contactTitle.innerText = "Welcome to the Contact Page";

const contactText = document.createElement("p");
contactText.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nis";

contactPage.appendChild(contactTitle);
contactPage.appendChild(contactText);

// Footer
const footerText = document.createElement("p");
footerText.innerText = "Created by: Kaan Ozdogan";

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

// Default Page
content.appendChild(homePage);


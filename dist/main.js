(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIik7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4vLyBIZWFkZXIgQnV0dG9uc1xuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5ob21lQnRuLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuaG9tZUJ0bi5pZCA9IFwiaG9tZVwiO1xuXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm1lbnVCdG4uaW5uZXJUZXh0ID0gXCJNZW51XCI7XG5tZW51QnRuLmlkID0gXCJtZW51XCI7XG5cbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29udGFjdEJ0bi5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcbmNvbnRhY3RCdG4uaWQgPSBcImNvbnRhY3RcIjtcblxuaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4vLyBIb21lIFBhZ2VcbmNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmhvbWVQYWdlLmlkID0gXCJob21lUGFnZVwiO1xuXG5jb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5ob21lVGl0bGUuaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIHRoZSBIb21lIFBhZ2VcIjtcblxuY29uc3QgaG9tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmhvbWVUZXh0LmlubmVyVGV4dCA9XG4gIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGV1aXNtb2QsIG5pc2wgdml0YWUgYWxpcXVhbSBsYWNpbmlhLCBuaXNsIG5pc2wgYWxpcXVldCBuaXNsLCBlZ2V0IGFsaXF1YW0gbmlzXCI7XG5cbmhvbWVQYWdlLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG5ob21lUGFnZS5hcHBlbmRDaGlsZChob21lVGV4dCk7XG5cbi8vIE1lbnUgUGFnZVxuY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubWVudVBhZ2UuaWQgPSBcIm1lbnVQYWdlXCI7XG5cbmNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbm1lbnVUaXRsZS5pbm5lclRleHQgPSBcIldlbGNvbWUgdG8gdGhlIE1lbnUgUGFnZVwiO1xuXG5jb25zdCBtZW51VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xubWVudVRleHQuaW5uZXJUZXh0ID1cbiAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgZXVpc21vZCwgbmlzbCB2aXRhZSBhbGlxdWFtIGxhY2luaWEsIG5pc2wgbmlzbCBhbGlxdWV0IG5pc2wsIGVnZXQgYWxpcXVhbSBuaXNcIjtcblxubWVudVBhZ2UuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbm1lbnVQYWdlLmFwcGVuZENoaWxkKG1lbnVUZXh0KTtcblxuLy8gQ29udGFjdCBQYWdlXG5jb25zdCBjb250YWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWN0UGFnZS5pZCA9IFwiY29udGFjdFBhZ2VcIjtcblxuY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuY29udGFjdFRpdGxlLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byB0aGUgQ29udGFjdCBQYWdlXCI7XG5cbmNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb250YWN0VGV4dC5pbm5lclRleHQgPVxuICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBldWlzbW9kLCBuaXNsIHZpdGFlIGFsaXF1YW0gbGFjaW5pYSwgbmlzbCBuaXNsIGFsaXF1ZXQgbmlzbCwgZWdldCBhbGlxdWFtIG5pc1wiO1xuXG5jb250YWN0UGFnZS5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQpO1xuXG4vLyBGb290ZXJcbmNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmZvb3RlclRleHQuaW5uZXJUZXh0ID0gXCJDcmVhdGVkIGJ5OiBLYWFuIE96ZG9nYW5cIjtcblxuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG4vLyBFdmVudCBMaXN0ZW5lcnNcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVQYWdlKTtcbn0pO1xuXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVBhZ2UpO1xufSk7XG5cbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0UGFnZSk7XG59KTtcblxuLy8gRGVmYXVsdCBQYWdlXG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWVQYWdlKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
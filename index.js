let main = document.querySelector("#main");
let contact = document.querySelector("#contact");
let rmSection = document.querySelector("#about");
let contactP = document.querySelector("#contact>p");
main.removeChild(rmSection);
let title = document.querySelector("title");
title.textContent = "Fruits & Vegetables Corp";

let section = document.createElement("section");
let h2a = document.createElement("h2");
h2a.textContent = "About"
let p = document.createElement("p");
p.textContent = "We're the best in fruits & vegetables";
section.appendChild(h2a);
section.appendChild(p);
main.insertBefore(section, contact);

let h2b = document.createElement("h2");
h2b.textContent = "Contact";
contact.insertBefore(h2b, contactP);


let h1 = document.querySelector("h1");
h1.textContent = "Fruits & Vegetables Corp";
h1.style.color = "red";

let aElements = document.querySelectorAll("a");
aElements[2].textContent = "Vegetables";
aElements[2].setAttribute("href", "#vegetables");
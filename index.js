let main = document.querySelector("#main");
let contact = document.querySelector("#contact");
let rmSection = document.querySelector("#about");
let contactP = document.querySelector("#contact>p");
main.removeChild(rmSection);

document.title = "Fruits & Vegetables Corp";
let head = document.querySelector("head");
let link = document.createElement("link");
link.setAttribute("href", "main.css");
link.setAttribute("rel", "stylesheet");
head.insertBefore(link, document.querySelector("script"));

let section = document.createElement("section");
section.id = "about";
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

let aElements = document.querySelectorAll("a");
aElements[2].textContent = "Vegetables";
aElements[2].setAttribute("href", "#vegetables");

let tdChild1 = document.querySelector("thead td:first-child");
let tdChild2 = document.querySelector("thead td:last-child");
let tr = document.querySelector("thead>tr");
tr.removeChild(tdChild1);
tr.removeChild(tdChild2);
let th1 = document.createElement("th")
let th2 = document.createElement("th")
th1.textContent = "Name";
th2.textContent = "Email";
tr.appendChild(th1);
tr.appendChild(th2);
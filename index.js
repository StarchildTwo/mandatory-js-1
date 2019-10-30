let main = document.querySelector("#main");
let contact = document.querySelector("#contact");
let rmSection = document.querySelector("#about");
let contactP = document.querySelector("#contact>p");
main.removeChild(rmSection);

document.title = "Fruits & Vegetables Corp";
let link = document.createElement("link");
link.setAttribute("href", "main.css");
link.setAttribute("rel", "stylesheet");
document.head.insertBefore(link, document.querySelector("script"));

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


// Changing <td> to <th>.
let tdChild = document.querySelectorAll("thead td");
let tr = document.querySelector("thead>tr");
for (let i = 0; i < tdChild.length; i++) {
    let th = document.createElement("th")
    th.textContent = tdChild[i].textContent;
    tr.replaceChild(th, tdChild[i]);
}
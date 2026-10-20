import { watches } from "./data.js";

console.log(watches);

const list = document.querySelector("#list");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
const loading = document.querySelector("#loading");

const cheap = ["ring-2", "ring-emerald-500"];
const expensive = ["ring-2", "ring-blue-500"];

function createCard(watch) {
    const card = document.createElement("article");
    card.className = "rounded-lg bg-slate-800 p-4 shadow";
    card.dataset.id = watch.id;

    const image = document.createElement("img"); 
    image.src = watch.image;
    image.alt = watch.name;
    image.className = "mb-3 w-full rounded";
    console.log(image);
    
    
    const name = document.createElement("h2");
    name.className = "font-semibold";
    name.textContent = watch.name;

    const price = document.createElement("p");
    price.textContent = `${watch.price} EUR`;
    

    const link = document.createElement("a");
    link.href = watch.url;
    link.className = "text-blue-700 underline";
    link.textContent = "Više o satu";

    card.append(image, name, price, link);

    if (watch.price < 100) {
        card.classList.add(...cheap);
    }

    if (watch.price > 500) {
        card.classList.add(...expensive);
    }

    return card;

}
function render(items) {
    list.innerHTML = "";

    const fragment = document.createDocumentFragment();
    for (const item of items) {
        fragment.append(createCard(item));
    }

    count.textContent = `Prikazani satovi: ${items.length}`;

    empty.classList.toggle("hidden", items.length > 0);

    list.append(fragment);
}

const mains = watches
    .filter(watch => watch.category === "sat")
    .sort((a, b) => a.name.localeCompare(b.name));

//render(watches);
render(watches);

loading.remove();
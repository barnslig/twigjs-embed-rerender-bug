import tmpl from "@templates/index.html.twig";

const $el = document.createElement("div");

// first render works
$el.innerHTML = tmpl();

// second render fails
$el.innerHTML = tmpl();

document.body.appendChild($el);

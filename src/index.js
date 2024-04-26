document.write("Hello, world!");

function component(text) {
  const element = document.createElement("h1");
  element.textContent = text;
  return element;
}

document.body.prepend(component("Проект собран на Webpack"));
document.body.prepend(component("тест 33"));

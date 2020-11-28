// Import stylesheets
import "./css/style.css";

// Components
import header from "./components/header";
import footer from "./components/footer";
import router from "./router";

const render = () => {
  const hash = window.location.hash;

  // Add to Dom
  document.body.innerHTML = `
    ${header.template}
    ${router[hash].template}
    ${footer.template}
  `;

  // Initialize after adding to dom. Event listeners e.t.c
  header.init();
  router[hash].init();
  footer.init();
};

render();

window.addEventListener("hashchange", render);

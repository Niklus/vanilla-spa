// Import stylesheets
import "./css/style.css";

// Components
import header from "./components/header";
import footer from "./components/footer";
import router from "./router";

const render = () => {
  const hash = window.location.hash;
  document.body.innerHTML = `
    ${header.template}
    ${router[hash].template}
    ${footer.template}
  `;
  router[hash].init();
};

render();

window.addEventListener("hashchange", render);

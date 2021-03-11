// Import stylesheets
import "./css/style.css";

// Components
import header from "./components/header";
import footer from "./components/footer";
import pages from "./router";

const render = () => {
  // Render to DOM
  document.body.innerHTML = `
    ${header.template}
    ${pages[location.hash].template}
    ${footer.template}
  `;
  // Initialize after adding to DOM => init() adds listeners e.t.c
  header.init();
  pages[location.hash].init();
  footer.init();
};

render();

window.addEventListener("hashchange", render);

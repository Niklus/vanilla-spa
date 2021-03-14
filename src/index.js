// Import stylesheets
import "./css/style.css";

// Components
import header from "./components/header";
import footer from "./components/footer";
import pages from "./router";

// State
import state from "./state/state";

const render = () => {
  header.init(state);
  pages[location.hash].init(state);
  footer.init(state);
};

render();

window.addEventListener("hashchange", render);

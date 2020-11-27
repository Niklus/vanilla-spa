import page1 from "./components/page1";
import page2 from "./components/page2";
import page3 from "./components/page3";

// Dynamic pages: router
let pages = {
  "": {
    template: page1.template,
    init: () => {
      // Place your public methods here
      page1.addEventListeners();
    },
  },

  "#page1": {
    template: page1.template,
    init: () => {
      page1.addEventListeners();
    },
  },

  "#page2": {
    template: page2.template,
    init: () => {
      page2.getData();
    },
  },

  "#page3": {
    template: page3.template,
    init: () => {
      page3.addEventListeners();
      page3.getTodos();
    },
  },
};

export default pages;

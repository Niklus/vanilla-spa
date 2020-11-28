import page1 from "./components/page1";
import page2 from "./components/page2";
import page3 from "./components/page3";

// Dynamic pages: router
let pages = {
  "": page1,
  "#page1": page1,
  "#page2": page2,
  "#page3": page3,
};

export default pages;

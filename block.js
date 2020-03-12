import "./src/blocks/tab/block";
import "./src/blocks/tab/style.scss";
import "./src/blocks/tabs/editor.scss";
import "./src/blocks/tabs/style.scss";
import "./src/blocks/tabs/block";
import "a11y-accordion-tabs";

const tabs = document.querySelectorAll(".js-tabs");
console.log(tabs);
tabs.forEach(element => {
  console.log(element);
  new AccordionTabs(element);
});

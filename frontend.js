/**
 * Styles and scripts that goes to the frontend
 */

import './src/blocks/tabs/style.scss';
import 'a11y-accordion-tabs';

if(window.location.hash) {
    var hash = window.location.hash.substring(1);
    console.log(hash);
    var element = document.getElementById(hash);
    if(element){
        let count = 0;
        while( (element = element.previousSibling ) != null) {
            count++;
        }
        console.log(count);
        const tabs = document.getElementsByClassName('wp-block-ubc-tabs');
        console.log(tabs[0].dataset.selectedTab);
        tabs[0].dataset.selectedTab = count;
        console.log(tabs[0].dataset.selectedTab);
    }
}
var tabs = document.querySelectorAll('.wp-block-ubc-tabs');
tabs.forEach(tab => new AccordionTabs(tab))
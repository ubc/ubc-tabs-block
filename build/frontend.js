/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend.js":
/*!*********************!*\
  !*** ./frontend.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_blocks_tabs_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/blocks/tabs/style.scss */ "./src/blocks/tabs/style.scss");
/* harmony import */ var _src_blocks_tabs_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_tabs_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var a11y_accordion_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! a11y-accordion-tabs */ "./node_modules/a11y-accordion-tabs/a11y-accordion-tabs.js");
/* harmony import */ var a11y_accordion_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(a11y_accordion_tabs__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Styles and scripts that goes to the frontend
 */



/***/ }),

/***/ "./node_modules/a11y-accordion-tabs/a11y-accordion-tabs.js":
/*!*****************************************************************!*\
  !*** ./node_modules/a11y-accordion-tabs/a11y-accordion-tabs.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
*  Accessible AccordionTabs, by Matthias Ott (@m_ott)
*
*  Based on the work of @stowball (https://codepen.io/stowball/pen/xVWwWe)
*
*/
(function () {

  'use strict';

  function AccordionTabs (el, options) {

    if (!el) {
      return;
    }

    this.el = el;
    this.tabTriggers = this.el.getElementsByClassName('js-tabs-trigger');
    this.tabPanels = this.el.getElementsByClassName('js-tabs-panel');
    this.accordeonTriggers = this.el.getElementsByClassName('js-accordeon-trigger');

    this.options = this._extend({
      breakpoint: 640,
      tabsAllowed: true,
      selectedTab: 0,
      startCollapsed: false
    }, options);

    if(el.getAttribute('data-tabs-allowed') == "true"){
      this.options.tabsAllowed = true;
    } else if (el.getAttribute('data-tabs-allowed') == "false") {
      this.options.tabsAllowed = false;
    }

    if(el.getAttribute('data-breakpoint')){
      this.options.breakpoint = parseInt(el.getAttribute('data-breakpoint'));
    }

    if(el.getAttribute('data-selected-tab')){
      this.options.selectedTab = parseInt(el.getAttribute('data-selected-tab'));
    }

    if(el.getAttribute('data-start-collapsed')){
      this.options.startCollapsed = el.getAttribute('data-start-collapsed');
    }

    if (this.tabTriggers.length === 0 || this.tabTriggers.length !== this.tabPanels.length) {
      return;
    }

    this._init();
  }

  AccordionTabs.prototype._init = function () {

    var _this = this;

    this.tabTriggersLength = this.tabTriggers.length;
    this.accordeonTriggersLength = this.accordeonTriggers.length;
    this.selectedTab = 0;
    this.prevSelectedTab = null;
    this.clickListener = this._clickEvent.bind(this);
    this.keydownListener = this._keydownEvent.bind(this);
    this.keys = {
      prev: 37,
      next: 39,
      space: 32,
      enter: 13
    };

    if(window.innerWidth >= this.options.breakpoint && this.options.tabsAllowed) {
        this.isAccordeon = false;
    } else {
        this.isAccordeon = true;
    }

    for (var i = 0; i < this.tabTriggersLength; i++) {
      this.tabTriggers[i].index = i;
      this.tabTriggers[i].addEventListener('click', this.clickListener, false);
      this.tabTriggers[i].addEventListener('keydown', this.keydownListener, false);

      if (this.tabTriggers[i].classList.contains('is-selected')) {
        this.selectedTab = i;
      }

      this._hide(i);
    }

    for (var i = 0; i < this.accordeonTriggersLength; i++) {
      this.accordeonTriggers[i].index = i;
      this.accordeonTriggers[i].addEventListener('click', this.clickListener, false);
      this.accordeonTriggers[i].addEventListener('keydown', this.keydownListener, false);

      if (this.accordeonTriggers[i].classList.contains('is-selected')) {
        this.selectedTab = i;
      }
    }

    if (!isNaN(this.options.selectedTab)) {
      this.selectedTab = this.options.selectedTab < this.tabTriggersLength ? this.options.selectedTab : this.tabTriggersLength - 1;
    }

    this.el.classList.add('is-initialized');
    if (this.options.tabsAllowed) {
      this.el.classList.add('tabs-allowed');
    }

    // If the accordion should not start collapsed, open the first element
    if(this.options.startCollapsed != "true"){
      this.selectTab(this.selectedTab, false);
    }

    var resizeTabs = this._debounce(function() {
      // This gets delayed for performance reasons
      if(window.innerWidth >= _this.options.breakpoint && _this.options.tabsAllowed) {
        _this.isAccordeon = false;
        if (_this.options.tabsAllowed) {
          _this.el.classList.add('tabs-allowed');
        }
        _this.selectTab(_this.selectedTab);
      } else {
        _this.isAccordeon = true;
        _this.el.classList.remove('tabs-allowed');
        _this.selectTab(_this.selectedTab);
      }

    }, 50);

    window.addEventListener('resize', resizeTabs);

  };

  AccordionTabs.prototype._clickEvent = function (e) {

    e.preventDefault();

    var closestTrigger = this._getClosest(e.target, '.js-tabs-trigger');
    var closestTab = 0;

    if (closestTrigger == null) {
      closestTrigger = this._getClosest(e.target, '.js-accordeon-trigger');
      closestTab = this._getClosest(closestTrigger, '.js-tabs-panel');
      this.isAccordeon = true;
    } else {
      this.isAccordeon = false;
    }

    var targetIndex = e.target.index != null ? e.target.index : closestTab.index;

    if (targetIndex === this.selectedTab && !this.isAccordeon) {
      return;
    }

    this.selectTab(targetIndex, true);
  };

  AccordionTabs.prototype._keydownEvent = function (e) {

    var targetIndex;

    if (e.keyCode === this.keys.prev || e.keyCode === this.keys.next || e.keyCode === this.keys.space || e.keyCode === this.keys.enter) {
      e.preventDefault();
    }
    else {
      return;
    }

    if (e.keyCode === this.keys.prev && e.target.index > 0 && !this.isAccordeon) {
      targetIndex = e.target.index - 1;
    }
    else if (e.keyCode === this.keys.next && e.target.index < this.tabTriggersLength - 1 && !this.isAccordeon) {
      targetIndex = e.target.index + 1;
    }
    else if (e.keyCode === this.keys.space || e.keyCode === this.keys.enter) {
      targetIndex = e.target.index;
    }
    else {
      return;
    }

    this.selectTab(targetIndex, true);
  };

  AccordionTabs.prototype._show = function (index, userInvoked) {

    this.tabPanels[index].removeAttribute('tabindex');

    this.tabTriggers[index].removeAttribute('tabindex');
    this.tabTriggers[index].classList.add('is-selected');
    this.tabTriggers[index].setAttribute('aria-selected', true);

    this.accordeonTriggers[index].setAttribute('aria-expanded', true);

    var panelContent = this.tabPanels[index].getElementsByClassName("content")[0];
    panelContent.setAttribute('aria-hidden', false);
    panelContent.classList.remove('is-hidden');
    panelContent.classList.add('is-open');

    this.tabPanels[index].classList.remove('is-hidden');
    this.tabPanels[index].classList.add('is-open');

    if (userInvoked) {
      this.tabTriggers[index].focus();
    }
  };

  AccordionTabs.prototype._hide = function (index) {

    this.tabTriggers[index].classList.remove('is-selected');
    this.tabTriggers[index].setAttribute('aria-selected', false);
    this.tabTriggers[index].setAttribute('tabindex', -1);

    this.accordeonTriggers[index].setAttribute('aria-expanded', false);

    var panelContent = this.tabPanels[index].getElementsByClassName("content")[0];
    panelContent.setAttribute('aria-hidden', true);
    panelContent.classList.remove('is-open');
    panelContent.classList.add('is-hidden');

    this.tabPanels[index].classList.remove('is-open');
    this.tabPanels[index].classList.add('is-hidden');
    this.tabPanels[index].setAttribute('tabindex', -1);
  };

  AccordionTabs.prototype.selectTab = function (index, userInvoked) {

    if (index === null) {
      if(this.isAccordeon) {
        return;
      } else {
        index = 0;
      }
    }

    if(!this.tabPanels[index].classList.contains('is-hidden') && userInvoked) {

      if (index === this.selectedTab) {
        this.selectedTab = null;
      } else {
        this.selectedTab = null;
        this.prevSelectedTab = index;
      }

      this._hide(index);

      return;
    }

    if (this.isAccordeon) {

      this.prevSelectedTab = this.selectedTab;
      this.selectedTab = index;

    } else {
      if (this.prevSelectedTab === null || !this.isAccordeon) {
        for (var i = 0; i < this.tabTriggersLength; i++) {
          if (i !== index) {
            this._hide(i);
          }
        }
      }
      else {
        this._hide(this.selectedTab);
      }

      this.prevSelectedTab = this.selectedTab;
      this.selectedTab = index;
    }

    this._show(this.selectedTab, userInvoked);

  };

  AccordionTabs.prototype.destroy = function () {

    for (var i = 0; i < this.tabTriggersLength; i++) {
      this.tabTriggers[i].classList.remove('is-selected');
      this.tabTriggers[i].removeAttribute('aria-selected');
      this.tabTriggers[i].removeAttribute('tabindex');

      this.tabPanels[i].classList.remove('is-hidden');
      this.tabPanels[i].removeAttribute('aria-hidden');
      this.tabPanels[i].removeAttribute('tabindex');

      this.tabTriggers[i].removeEventListener('click', this.clickListener, false);
      this.tabTriggers[i].removeEventListener('keydown', this.keydownListener, false);

      delete this.tabTriggers[i].index;
    }

    this.el.classList.remove('is-initialized');
  };

  /**
    * Get the closest matching element up the DOM tree.
    * @private
    * @param  {Element} elem     Starting element
    * @param  {String}  selector Selector to match against
    * @return {Boolean|Element}  Returns null if not match found
    */
  AccordionTabs.prototype._getClosest = function ( elem, selector ) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Get closest match
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }

    return null;

  };

  // Pass in the objects to merge as arguments.
  // For a deep extend, set the first argument to `true`.
  AccordionTabs.prototype._extend = function () {

      // Variables
      var extended = {};
      var deep = false;
      var i = 0;
      var length = arguments.length;

      // Check if a deep merge
      if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
          deep = arguments[0];
          i++;
      }

      // Merge the object into the extended object
      var merge = function (obj) {
          for ( var prop in obj ) {
              if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
                  // If deep merge and property is an object, merge properties
                  if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
                      extended[prop] = extend( true, extended[prop], obj[prop] );
                  } else {
                      extended[prop] = obj[prop];
                  }
              }
          }
      };

      // Loop through each object and conduct a merge
      for ( ; i < length; i++ ) {
          var obj = arguments[i];
          merge(obj);
      }

      return extended;

  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  AccordionTabs.prototype._debounce = function (func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) { func.apply(context, args); };
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) { func.apply(context, args) };
    };
  };

  var slice = Array.prototype.slice;

  function $(expr, con) {
    return typeof expr === "string" ? (con || document).querySelector(expr) : expr || null;
  }

  function $$(expr, con) {
    return slice.call((con || document).querySelectorAll(expr));
  }

  // Initialization

  function init() {
    $$(".js-tabs").forEach(function (input) {
      new AccordionTabs(input);
    });
  }

  // Are we in a browser? Check for Document constructor
  if (typeof Document !== "undefined") {
    // DOM already loaded?
    if (document.readyState !== "loading") {
      init();
    }
    else {
      // Wait for it
      document.addEventListener("DOMContentLoaded", init);
    }
  }

  // Export on self when in a browser
  if (typeof self !== "undefined") {
    self.AccordionTabs = AccordionTabs;
  }

  // Expose as a CJS module
  if ( true && module.exports) {
    module.exports = AccordionTabs;
  }

  return AccordionTabs;

})();


/***/ }),

/***/ "./src/blocks/tabs/style.scss":
/*!************************************!*\
  !*** ./src/blocks/tabs/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./block.js":
/*!******************!*\
  !*** ./block.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_blocks_tab_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/blocks/tab/block */ "./src/blocks/tab/block.js");
/* harmony import */ var _src_blocks_tabs_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/blocks/tabs/block */ "./src/blocks/tabs/block.js");
/* harmony import */ var _src_blocks_tabs_editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/blocks/tabs/editor.scss */ "./src/blocks/tabs/editor.scss");
/* harmony import */ var _src_blocks_tabs_editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_tabs_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/**
 * styles and scripts that goes into editor
 */




/***/ }),

/***/ "./src/blocks/tab/attributes.js":
/*!**************************************!*\
  !*** ./src/blocks/tab/attributes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * BLOCK: Call To Action - Attributes
 */
const attributes = {
  index: {
    type: 'number',
    default: null
  },
  title: {
    type: 'string',
    default: 'Tab'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/blocks/tab/block.js":
/*!*********************************!*\
  !*** ./src/blocks/tab/block.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/tab/edit.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/tab/attributes.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/tab/save.js");
/**
 * BLOCK: Call To Action.
 */
// Import block dependencies and components.



const __ = wp.i18n.__;
const registerBlockType = wp.blocks.registerBlockType;
registerBlockType('ubc/tab', {
  parent: ['ubc/tabs'],
  title: 'UBC Tab Block',
  description: 'Some description',
  icon: 'book-alt',
  keywords: [__('tab'), __('accordion')],
  category: 'layout',
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/tab/edit.js":
/*!********************************!*\
  !*** ./src/blocks/tab/edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabs/context */ "./src/blocks/tabs/context.js");

const InnerBlocks = wp.blockEditor.InnerBlocks;
const _wp$element = wp.element,
      useContext = _wp$element.useContext,
      useEffect = _wp$element.useEffect;
const compose = wp.compose.compose;
const withSelect = wp.data.withSelect;

const Edit = props => {
  const getBlockTypes = props.getBlockTypes,
        setAttributes = props.setAttributes,
        attributes = props.attributes;
  const index = attributes.index;

  const _useContext = useContext(_tabs_context__WEBPACK_IMPORTED_MODULE_0__["default"]),
        currentTabSelected = _useContext.currentTabSelected,
        tabs = _useContext.tabs,
        tabTitles = _useContext.tabTitles; // Tab block does not allowed tabs block or tab block to be nested inside.


  const allowedBlocks = getBlockTypes().map(block => {
    return block.name;
  }).filter(blockName => {
    return blockName !== 'ubc/tabs' && blockName !== 'ubc/tab';
  });
  /**
   * Reset current tab block position index and title if tab titles array from parent block changed. triggered by moveUp, moveDown, Remove actions in the parent block.
   * Make sure child block always know what's their correct index and title in the parent block.
   */

  useEffect(() => {
    const newIndex = tabs.findIndex(clientId => {
      return clientId === props.clientId;
    });

    if (index === newIndex) {
      setAttributes({
        title: tabTitles[index]
      });
    } else {
      setAttributes({
        index: newIndex
      });
    }
  }, [tabTitles]);
  return currentTabSelected === index ? React.createElement("section", {
    index: index + 1,
    className: "wp-block-ubc-tab ubc-accordion-tabs__tabs-panel",
    id: `section${index + 1}`,
    role: "tabpanel",
    "aria-labelledby": `tab${index + 1}`
  }, React.createElement("div", {
    className: "content is-open",
    "aria-hidden": true
  }, React.createElement(InnerBlocks, {
    templateLock: false,
    allowedBlocks: allowedBlocks
  }))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(select => {
  const _select = select('core/blocks'),
        getBlockTypes = _select.getBlockTypes;

  return {
    getBlockTypes
  };
})])(Edit));

/***/ }),

/***/ "./src/blocks/tab/save.js":
/*!********************************!*\
  !*** ./src/blocks/tab/save.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const InnerBlocks = wp.blockEditor.InnerBlocks;
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const _props$attributes = props.attributes,
        index = _props$attributes.index,
        title = _props$attributes.title;
  return React.createElement("section", {
    index: index + 1,
    className: `ubc-accordion-tabs__tabs-panel js-tabs-panel${index === 0 ? ' active' : ''}`,
    id: `section${index + 1}`,
    role: "tabpanel",
    "aria-labelledby": `tab${index + 1}`
  }, React.createElement("div", {
    className: "ubc-accordion-tabs__accordion-trigger js-accordeon-trigger",
    "aria-controls": `section${index + 1}`,
    tabIndex: "0"
  }, title, React.createElement("div", {
    className: "ubc-accordion-tabs__accordion-trigger-icon"
  }, React.createElement("span", {
    className: "label--open"
  }, "Open"), React.createElement("span", {
    className: "label--close"
  }, "Close"), React.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 20 20"
  }, React.createElement("rect", {
    className: "vert",
    height: "18",
    width: "2",
    fill: "currentColor",
    y: "1",
    x: "9"
  }), React.createElement("rect", {
    height: "2",
    width: "18",
    fill: "currentColor",
    y: "9",
    x: "1"
  })))), React.createElement("div", {
    className: "content"
  }, React.createElement(InnerBlocks.Content, null)));
});

/***/ }),

/***/ "./src/blocks/tabs/attributes.js":
/*!***************************************!*\
  !*** ./src/blocks/tabs/attributes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * BLOCK: Call To Action - Attributes
 */
const attributes = {
  tabTitles: {
    type: 'array',
    default: ['Tab1', 'Tab2']
  },
  initialTabSelected: {
    type: 'number',
    default: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/blocks/tabs/block.js":
/*!**********************************!*\
  !*** ./src/blocks/tabs/block.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/blocks/tabs/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/tabs/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/tabs/save.js");
/**
 * BLOCK: Call To Action.
 */
// Import block dependencies and components.



const __ = wp.i18n.__;
const registerBlockType = wp.blocks.registerBlockType;
registerBlockType('ubc/tabs', {
  title: __('UBC Tabs Block', 'ubc-tabs'),
  description: __('Some description', 'ubc-tabs'),
  icon: 'book-alt',
  keywords: [__('tabs', 'ubc-tabs'), __('accordion', 'ubc-tabs')],
  category: 'layout',
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  styles: [{
    name: 'default',
    label: __('Default', 'ubc-tabs'),
    isDefault: true
  }, {
    name: 'bordered',
    label: __('Bordered', 'ubc-tabs'),
    isDefault: false
  }]
});

/***/ }),

/***/ "./src/blocks/tabs/context.js":
/*!************************************!*\
  !*** ./src/blocks/tabs/context.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createContext = wp.element.createContext;
const TabsContext = createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (TabsContext);

/***/ }),

/***/ "./src/blocks/tabs/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/tabs/edit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/blocks/tabs/context.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * BLOCK: Tabs
 */

const InspectorControls = wp.blockEditor.InspectorControls;
const _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      PanelRow = _wp$components.PanelRow,
      Button = _wp$components.Button,
      ButtonGroup = _wp$components.ButtonGroup;
const _wp$blockEditor = wp.blockEditor,
      RichText = _wp$blockEditor.RichText,
      InnerBlocks = _wp$blockEditor.InnerBlocks;
const compose = wp.compose.compose;
const _wp$data = wp.data,
      withDispatch = _wp$data.withDispatch,
      withSelect = _wp$data.withSelect;
const useState = wp.element.useState;
/**
 * This component create editor UI for tabs block.
 * A tabs block contains two parts
 * 	- Tab title, an array of tab titles associated with attribute 'tabTitles'
 *  - Tab content, an array of child tab block rendered by innderblock template.
 * Tab titles and Tab content are complete seprate. For example, action such as move tab position or delete a tab will envolve actions for both tab title and tab content.
 * @param {object} props block props.
 */

const Edit = props => {
  const attributes = props.attributes,
        setAttributes = props.setAttributes,
        removeBlock = props.removeBlock,
        onMoveUp = props.onMoveUp,
        onMoveDown = props.onMoveDown,
        tabs = props.tabs,
        isSelected = props.isSelected;
  const tabTitles = attributes.tabTitles,
        initialTabSelected = attributes.initialTabSelected,
        className = attributes.className; // Keep current selected tab in editor as a state defaults to initialSelected tab attribute.

  const _useState = useState(initialTabSelected),
        _useState2 = _slicedToArray(_useState, 2),
        currentTabSelected = _useState2[0],
        setCurrentTabSelected = _useState2[1];

  const allowedBlocks = 'ubc/tab';
  /**
   * Render innerblocks { tab blocks } based on the length of tab titles array.
   */

  const getInnerBlockTemplates = () => {
    return tabTitles.map(function (title, key) {
      return ['ubc/tab', {
        index: key
      }];
    });
  };
  /**
   * Abstracted setter for tab title based on index in the tab titles array
   *
   * @param {number} key index of the tab in the array.
   * @param {string} text new title to be updated.
   */


  const updateSingleTitle = (key, text) => {
    const tabTitlesClone = [...tabTitles];
    tabTitlesClone[key] = text;
    setAttributes({
      tabTitles: tabTitlesClone
    });
  };
  /**
   * Check if it is the first tab in the array.
   *
   * @param {number} index index of the tab in the array
   * @return {boolean} if index is the first in the array.
   */


  const isFirst = index => {
    return index === 0;
  };
  /**
   * Check if it is the last tab in the array.
   *
   * @param {number} index index of the tab in the array
   * @return {boolean} if index is the last in the array.
   */


  const isLast = index => {
    return index === tabTitles.length - 1;
  };
  /**
   * Render Toolbar buttons including re-order, remove, add, etc for each tab
   *
   * @param {number} key index of the tab.
   */


  const renderToolbar = key => {
    return currentTabSelected === key ? React.createElement("div", {
      className: "ubc-accordion-tabs__tab-toolbar"
    }, React.createElement(Button, {
      onClick: event => {
        event.preventDefault(); // move tab title up inside tab titles array

        const newTabTitles = [...tabTitles];
        var _ref = [newTabTitles[key], newTabTitles[key - 1]];
        newTabTitles[key - 1] = _ref[0];
        newTabTitles[key] = _ref[1];
        setAttributes({
          tabTitles: newTabTitles
        }); // Move the actual tab block up

        onMoveUp(key); // Move focus as well to make sure action does not cause different tab to be selected.

        setCurrentTabSelected(key - 1);
      },
      disabled: isFirst(key) || tabTitles.length <= 1
    }, React.createElement("span", {
      className: "dashicons dashicons-arrow-left-alt2"
    })), React.createElement(Button, {
      onClick: event => {
        event.preventDefault(); // Move tab title down inside tab titles array

        const newTabTitles = [...tabTitles];
        var _ref2 = [newTabTitles[key + 1], newTabTitles[key]];
        newTabTitles[key] = _ref2[0];
        newTabTitles[key + 1] = _ref2[1];
        setAttributes({
          tabTitles: newTabTitles
        }); // Move the actual tab block down

        onMoveDown(key); // Move focus as well to make sure action does not cause different tab to be selected.

        setCurrentTabSelected(key + 1);
      },
      disabled: isLast(key) || tabTitles.length <= 1
    }, React.createElement("span", {
      className: "dashicons dashicons-arrow-right-alt2"
    })), React.createElement(Button, {
      onClick: event => {
        event.preventDefault(); // Remove tab title from tab titles array

        const remainingTabs = tabTitles.filter((title, index) => key !== index);
        setAttributes({
          tabTitles: remainingTabs
        }); // Remove the actual tab block

        removeBlock(key); // Set focus to the first tab of the remaining tabs

        if (remainingTabs.length !== 0) {
          setCurrentTabSelected(0);
        }
      }
    }, React.createElement("span", {
      className: "dashicons dashicons-trash"
    })), React.createElement(Button, {
      onClick: event => {
        event.preventDefault(); // Add new tab is as simple as append a new string in the tab titles array.
        // A new tab block will be automatically created because innerblock template will match the length of tab titles array.

        setAttributes({
          tabTitles: [...tabTitles, 'Tab']
        });
      }
    }, React.createElement("span", {
      className: "dashicons dashicons-plus",
      style: {
        marginTop: '3px'
      }
    }))) : null;
  };

  return React.createElement("section", {
    className: `ubc-accordion-tabs ${className ? className : ''}`
  }, React.createElement("ul", {
    className: "ubc-accordion-tabs__tab-list",
    role: "tablist"
  }, tabTitles.map((singleTitle, key) => {
    return React.createElement("li", {
      role: "presentation",
      key: key
    }, isSelected ? renderToolbar(key) : null, React.createElement("button", {
      role: "tab",
      id: `tab${key}`,
      "aria-controls": `section${key} `,
      "aria-selected": key === currentTabSelected,
      href: `#section${key + 1}`,
      className: `ubc-accordion-tabs__button${key === currentTabSelected ? ' is-active' : ''}`,
      onClick: event => {
        event.preventDefault();
        setCurrentTabSelected(key);
      }
    }, React.createElement(RichText, {
      value: singleTitle,
      onChange: newContent => updateSingleTitle(key, newContent)
    })));
  })), React.createElement(_context__WEBPACK_IMPORTED_MODULE_0__["default"].Provider, {
    value: {
      currentTabSelected,
      tabs,
      tabTitles
    }
  }, React.createElement(InnerBlocks, {
    template: getInnerBlockTemplates(),
    templateLock: 'all',
    allowedBlocks: allowedBlocks
  })), React.createElement(InspectorControls, null, React.createElement(PanelBody, {
    title: "Settings",
    initialOpen: true
  }, React.createElement(PanelRow, null, "Initial tab selected"), React.createElement(ButtonGroup, {
    style: {
      marginTop: '10px'
    }
  }, tabTitles.map((tabTitle, index) => {
    return React.createElement(Button, {
      onClick: event => {
        event.preventDefault();
        setAttributes({
          initialTabSelected: index
        });
      },
      key: index,
      isPrimary: initialTabSelected === index,
      isDefault: initialTabSelected !== index
    }, tabTitle);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect((select, ownProps) => {
  const _select = select('core/block-editor'),
        getBlockOrder = _select.getBlockOrder;

  return {
    // Get an array of child blocks( tab blocks ) client ID in order.
    tabs: getBlockOrder(ownProps.clientId)
  };
}), withDispatch((dispatch, {
  tabs,
  clientId
}) => {
  const _dispatch = dispatch('core/block-editor'),
        removeBlock = _dispatch.removeBlock,
        moveBlocksDown = _dispatch.moveBlocksDown,
        moveBlocksUp = _dispatch.moveBlocksUp;

  return {
    /**
     * Move specific tab block down, switch position with next tab block.
     * @param {integer} index position index in the child tab blocks array.
     */
    onMoveDown(index) {
      moveBlocksDown(tabs[index], clientId);
    },

    /**
     * Move specific tab block up, switch position with previous tab block.
     * @param {integer} index position index in the child tab blocks array.
     */
    onMoveUp(index) {
      moveBlocksUp(tabs[index], clientId);
    },

    /**
     * Remove specific tab block.
     * @param {integer} index position index in the child tab blocks array.
     */
    removeBlock(index) {
      removeBlock(tabs[index]);
    }

  };
})])(Edit));

/***/ }),

/***/ "./src/blocks/tabs/editor.scss":
/*!*************************************!*\
  !*** ./src/blocks/tabs/editor.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/tabs/save.js":
/*!*********************************!*\
  !*** ./src/blocks/tabs/save.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * BLOCK: Call To Action
 */
const InnerBlocks = wp.blockEditor.InnerBlocks;

const Save = props => {
  const attributes = props.attributes;
  const tabTitles = attributes.tabTitles,
        initialTabSelected = attributes.initialTabSelected,
        className = attributes.className;
  return React.createElement("section", {
    className: `ubc-accordion-tabs ${className ? className : ''}`,
    "data-selected-tab": initialTabSelected
  }, React.createElement("ul", {
    className: "ubc-accordion-tabs__tab-list",
    role: "tablist"
  }, tabTitles.map((singleTitle, key) => {
    const id = singleTitle.toLowerCase().replace(/ /g, '-');
    return React.createElement("li", {
      id: id,
      role: "presentation",
      key: key
    }, React.createElement("a", {
      role: "tab",
      id: `tab${key + 1}`,
      "aria-controls": `section${key + 1} `,
      "aria-selected": key === initialTabSelected,
      className: "ubc-accordion-tabs__tabs-trigger js-tabs-trigger",
      href: `#section${key + 1}`
    }, singleTitle));
  })), React.createElement(InnerBlocks.Content, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ })

/******/ });
//# sourceMappingURL=block.js.map
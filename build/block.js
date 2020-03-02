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
/* harmony import */ var _src_blocks_tab_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/blocks/tab/style.scss */ "./src/blocks/tab/style.scss");
/* harmony import */ var _src_blocks_tab_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_tab_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_blocks_tabs_editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/blocks/tabs/editor.scss */ "./src/blocks/tabs/editor.scss");
/* harmony import */ var _src_blocks_tabs_editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_tabs_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_blocks_tabs_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/blocks/tabs/style.scss */ "./src/blocks/tabs/style.scss");
/* harmony import */ var _src_blocks_tabs_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_blocks_tabs_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_blocks_tabs_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/blocks/tabs/block */ "./src/blocks/tabs/block.js");






/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


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
  blockID: {
    type: "string",
    default: null
  },
  index: {
    type: "number",
    default: null
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/tab/edit.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/tab/attributes.js");
/**
 * BLOCK: Call To Action.
 */
// Import block dependencies and components.



const __ = wp.i18n.__;
const registerBlockType = wp.blocks.registerBlockType;
const RichText = wp.blockEditor.RichText;
const Fragment = wp.element.Fragment;
const InnerBlocks = wp.blockEditor.InnerBlocks;
registerBlockType("ubc/tab", {
  title: 'UBC Tab Block',
  description: 'Some description',
  icon: 'book-alt',
  keywords: [__("tab"), __("accordian")],
  category: 'layout',
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => React.createElement(InnerBlocks.Content, null),
  styles: [{
    name: 'default',
    label: __('default'),
    isDefault: true
  }, {
    name: 'isolate tabs',
    label: __('isolate tabs'),
    isDefault: false
  }]
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
const InnerBlocks = wp.blockEditor.InnerBlocks;
/* harmony default export */ __webpack_exports__["default"] = (props => {
  console.log(props.attributes);
  return React.createElement("section", {
    "block-id": props.attributes.blockID,
    index: props.attributes.index,
    class: `tab-content${props.attributes.index === 0 ? ' active' : ''}`
  }, React.createElement(InnerBlocks, {
    templateLock: false
  }));
});

/***/ }),

/***/ "./src/blocks/tab/style.scss":
/*!***********************************!*\
  !*** ./src/blocks/tab/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
  tabTitle: {
    type: "array",
    default: ["title", "title"]
  },
  tabSelected: {
    type: "number",
    default: 0
  },
  blockID: {
    type: "string",
    default: null
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/tabs/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/tabs/edit.js");
/**
 * BLOCK: Call To Action.
 */
// Import block dependencies and components.



const __ = wp.i18n.__;
const _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      registerBlockStyle = _wp$blocks.registerBlockStyle;
const RichText = wp.blockEditor.RichText;
const Fragment = wp.element.Fragment;
registerBlockType("ubc/tabs", {
  title: 'UBC Tabs Block',
  description: 'Some description',
  icon: 'book-alt',
  keywords: [__("tabs"), __("accordian")],
  category: 'layout',
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => 'test',
  styles: [{
    name: 'default',
    label: __('default'),
    isDefault: true
  }, {
    name: 'isolate tabs',
    label: __('isolate tabs'),
    isDefault: false
  }]
});
registerBlockStyle("ubc/tabs", {
  name: 'default',
  label: 'default'
});

/***/ }),

/***/ "./src/blocks/tabs/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/tabs/edit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * BLOCK: Call To Action
 */
const InspectorControls = wp.editor.InspectorControls;
const _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      PanelRow = _wp$components.PanelRow,
      Button = _wp$components.Button;
const _wp$blockEditor = wp.blockEditor,
      RichText = _wp$blockEditor.RichText,
      InnerBlocks = _wp$blockEditor.InnerBlocks;
const compose = wp.compose.compose;
const withSelect = wp.data.withSelect;

const Edit = props => {
  const attributes = props.attributes,
        setAttributes = props.setAttributes;
  const tabTitle = attributes.tabTitle,
        tabSelected = attributes.tabSelected,
        blockID = attributes.blockID;
  let innerBlocks = null;
  let allowedBlocks = props.getBlockTypes().map(function (block) {
    return block.name;
  }).filter(function (name) {
    return name != 'ubc/tab';
  });

  if (!blockID) {
    setAttributes({
      blockID: props.clientId
    });
  }

  const updateSingleTitle = (key, text) => {
    const tabTitleClone = [...tabTitle];
    tabTitleClone[key] = text;
    setAttributes({
      tabTitle: tabTitleClone
    });
  };

  const selectTabContent = key => {
    const elements = document.querySelectorAll(`.tab-content[block-id='${attributes.blockID}'][index='${key}']`);
    const allElements = document.querySelectorAll(`.tab-content[block-id='${attributes.blockID}']`);
    allElements.forEach(element => {
      element.classList.remove('active');
    });
    elements[0].classList.add('active');
  };

  if (blockID) {
    innerBlocks = tabTitle.map(function (title, key) {
      return ['ubc/tab', {
        blockID: attributes.blockID,
        index: key
      }];
    });
  }

  console.log(innerBlocks);
  return React.createElement(React.Fragment, null, React.createElement("ul", null, tabTitle.map((singleTitle, key) => {
    return React.createElement("li", null, React.createElement(Button, {
      onClick: () => {
        setAttributes({
          tabSelected: key
        });
        selectTabContent(key);
      }
    }, React.createElement(RichText, {
      value: singleTitle,
      onChange: newContent => updateSingleTitle(key, newContent)
    })));
  })), React.createElement("div", {
    class: "ubc-tab-content"
  }, blockID ? React.createElement(InnerBlocks, {
    template: innerBlocks,
    templateLock: false,
    allowedBlocks: allowedBlocks
  }) : null), React.createElement(InspectorControls, null, React.createElement(PanelBody, {
    title: "My Block Settings",
    initialOpen: true
  }, React.createElement(PanelRow, null, "My Panel Inputs and Labels"))));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect((select, props) => {
  const _select = select('core/blocks'),
        getBlockTypes = _select.getBlockTypes;

  return {
    getBlockTypes
  };
}))(Edit));

/***/ }),

/***/ "./src/blocks/tabs/editor.scss":
/*!*************************************!*\
  !*** ./src/blocks/tabs/editor.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
//# sourceMappingURL=block.js.map
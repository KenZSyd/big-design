webpackHotUpdate("static/development/pages/Table/TablePage.js",{

/***/ "./components/CodePreview/CodePreview.tsx":
/*!************************************************!*\
  !*** ./components/CodePreview/CodePreview.tsx ***!
  \************************************************/
/*! exports provided: CodePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePreview", function() { return CodePreview; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_standalone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/standalone */ "../../node_modules/@babel/standalone/babel.js");
/* harmony import */ var _babel_standalone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_standalone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/big-design */ "../big-design/dist/big-design.es.js");
/* harmony import */ var _bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/big-design-icons */ "../big-design-icons/dist/big-design-icons.es.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clipboard-copy */ "../../node_modules/clipboard-copy/index.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prettier_parser_babylon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prettier/parser-babylon */ "../../node_modules/prettier/parser-babylon.js");
/* harmony import */ var prettier_parser_babylon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prettier_parser_babylon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prettier_standalone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prettier/standalone */ "../../node_modules/prettier/standalone.js");
/* harmony import */ var prettier_standalone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prettier_standalone__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-live */ "../../node_modules/react-live/dist/react-live.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SnippetControls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../SnippetControls */ "./components/SnippetControls/index.tsx");
/* harmony import */ var _StoryWrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../StoryWrapper/StoryWrapper */ "./components/StoryWrapper/StoryWrapper.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styled */ "./components/CodePreview/styled.tsx");


var _jsxFileName = "/Users/daniel.almaguer/dev/bigcommerce/big-design/packages/docs/components/CodePreview/CodePreview.tsx";













var defaultScope = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_3__, _bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_4__, {
  React: react__WEBPACK_IMPORTED_MODULE_8___default.a,
  styled: styled_components__WEBPACK_IMPORTED_MODULE_10__["default"]
});

function getInitialCode(children) {
  if (typeof children !== 'string') {
    throw new Error('<CodePreview> children must be of type string');
  }

  var code = Object(_babel_standalone__WEBPACK_IMPORTED_MODULE_2__["transform"])(children, {
    compact: false,
    retainLines: true,
    presets: [['typescript', {
      allExtensions: true,
      isTSX: true,
      jsxPragma: 'preserve'
    }]]
  }).code;
  return prettier_standalone__WEBPACK_IMPORTED_MODULE_7___default.a.format(code, {
    parser: 'babel',
    plugins: [prettier_parser_babylon__WEBPACK_IMPORTED_MODULE_6___default.a]
  });
}

function transformCode(input) {
  try {
    return Object(_babel_standalone__WEBPACK_IMPORTED_MODULE_2__["transform"])(input, {
      presets: [['typescript', {
        allExtensions: true,
        isTSX: true
      }], 'react']
    }).code;
  } catch (e) {
    return input;
  }
}

var CodePreview = function CodePreview(props) {
  var children = props.children,
      language = props.language;
  var initialCode = getInitialCode(children);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(initialCode),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      code = _useState2[0],
      setCode = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_8__["useContext"])(_StoryWrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_12__["CodeEditorContext"]),
      editorTheme = _useContext.theme;

  var scope = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultScope, props.scope);

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    border: "box",
    marginBottom: "xxLarge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_live__WEBPACK_IMPORTED_MODULE_9__["LiveProvider"], {
    code: code,
    scope: scope,
    theme: editorTheme,
    language: language,
    transformCode: transformCode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    padding: "medium",
    backgroundColor: "white",
    borderBottom: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_live__WEBPACK_IMPORTED_MODULE_9__["LivePreview"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SnippetControls__WEBPACK_IMPORTED_MODULE_11__["SnippetControls"], {
    copyToClipboard: function copyToClipboard() {
      return clipboard_copy__WEBPACK_IMPORTED_MODULE_5___default()(code);
    },
    resetCode: function resetCode() {
      return setCode(initialCode);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_live__WEBPACK_IMPORTED_MODULE_9__["LiveEditor"], {
    onChange: setCode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_13__["StyledLiveError"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })));
};
CodePreview.defaultProps = {
  language: 'tsx',
  scope: defaultScope
};

/***/ }),

/***/ "./components/CodeSnippet/CodeSnippet.tsx":
/*!************************************************!*\
  !*** ./components/CodeSnippet/CodeSnippet.tsx ***!
  \************************************************/
/*! exports provided: CodeSnippet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippet", function() { return CodeSnippet; });
/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/big-design */ "../big-design/dist/big-design.es.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboard-copy */ "../../node_modules/clipboard-copy/index.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-live */ "../../node_modules/react-live/dist/react-live.es.js");
/* harmony import */ var _SnippetControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SnippetControls */ "./components/SnippetControls/index.tsx");
/* harmony import */ var _StoryWrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StoryWrapper/StoryWrapper */ "./components/StoryWrapper/StoryWrapper.tsx");
var _jsxFileName = "/Users/daniel.almaguer/dev/bigcommerce/big-design/packages/docs/components/CodeSnippet/CodeSnippet.tsx";







function formatCode(code) {
  var lines = code.split('\n'); // Remove first line if empty (multiline)

  if (lines[0].trim() === '') {
    lines.splice(0, 1);
  } // Remove last line if empty (multiline)


  if (lines[lines.length - 1].trim() === '') {
    lines.pop();
  } // Number of whitespaces to remove from each line


  var padding = lines[0].search(/\S|$/);
  return lines.map(function (line) {
    return line.substr(padding);
  }).join('\n');
}

function getCode(children) {
  if (typeof children !== 'string') {
    throw new Error('<CodeSnippet> children must be of type string');
  }

  return formatCode(children);
}

var CodeSnippet = function CodeSnippet(props) {
  var children = props.children,
      language = props.language,
      showControls = props.showControls;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_StoryWrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_5__["CodeEditorContext"]),
      editorTheme = _useContext.theme;

  var code = getCode(children);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    border: "box",
    marginBottom: "xxLarge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, showControls && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SnippetControls__WEBPACK_IMPORTED_MODULE_4__["SnippetControls"], {
    copyToClipboard: function copyToClipboard() {
      return clipboard_copy__WEBPACK_IMPORTED_MODULE_1___default()(code);
    },
    helperText: "Code example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_live__WEBPACK_IMPORTED_MODULE_3__["Editor"], {
    code: code,
    theme: editorTheme,
    language: language,
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }));
};
CodeSnippet.defaultProps = {
  language: 'jsx',
  showControls: true
};

/***/ }),

/***/ "./components/SnippetControls/SnippetControls.tsx":
/*!********************************************************!*\
  !*** ./components/SnippetControls/SnippetControls.tsx ***!
  \********************************************************/
/*! exports provided: SnippetControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnippetControls", function() { return SnippetControls; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/big-design */ "../big-design/dist/big-design.es.js");
/* harmony import */ var _bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/big-design-icons */ "../big-design-icons/dist/big-design-icons.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StoryWrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StoryWrapper/StoryWrapper */ "./components/StoryWrapper/StoryWrapper.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./components/SnippetControls/styled.tsx");

var _jsxFileName = "/Users/daniel.almaguer/dev/bigcommerce/big-design/packages/docs/components/SnippetControls/SnippetControls.tsx";






function getCopyToClipboardIcon(isCopying) {
  return isCopying ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_2__["CheckIcon"], {
    title: "Copying",
    color: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_2__["AssignmentIcon"], {
    title: "Copy",
    color: "secondary60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  });
}

function onCopy(setIsCopying, copyToClipboard) {
  setIsCopying(true);
  copyToClipboard();
  setTimeout(function () {
    setIsCopying(false);
  }, 1000);
}

var SnippetControls = function SnippetControls(props) {
  var copyToClipboard = props.copyToClipboard,
      helperText = props.helperText,
      resetCode = props.resetCode;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isCopying = _useState2[0],
      setIsCopying = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_StoryWrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_4__["CodeEditorContext"]),
      toggleEditorTheme = _useContext.toggleTheme;

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["StyledFlex"], {
    borderBottom: "box",
    backgroundColor: "secondary20",
    justifyContent: "flex-end",
    alignItems: "center",
    style: {
      zIndex: 999
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    flexGrow: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Small"], {
    marginHorizontal: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, helperText)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    borderLeft: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    iconOnly: getCopyToClipboardIcon(isCopying),
    variant: "subtle",
    onClick: function onClick() {
      return onCopy(setIsCopying, copyToClipboard);
    },
    disabled: isCopying,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), resetCode && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    borderLeft: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    iconOnly: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_2__["RestoreIcon"], {
      title: "Reset",
      color: "secondary60",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }),
    variant: "subtle",
    onClick: resetCode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    borderLeft: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    iconOnly: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_2__["InvertColorsIcon"], {
      title: "Toggle Theme",
      color: "secondary60",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }),
    variant: "subtle",
    onClick: toggleEditorTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })));
};
SnippetControls.defaultProps = {
  helperText: 'Edit the code below to see your changes live!'
};

/***/ }),

/***/ "./components/StoryWrapper/StoryWrapper.tsx":
/*!**************************************************!*\
  !*** ./components/StoryWrapper/StoryWrapper.tsx ***!
  \**************************************************/
/*! exports provided: CodeEditorContext, StoryWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeEditorContext", function() { return CodeEditorContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryWrapper", function() { return StoryWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/big-design */ "../big-design/dist/big-design.es.js");
/* harmony import */ var prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prism-react-renderer/themes/github */ "../../node_modules/prism-react-renderer/themes/github/index.js");
/* harmony import */ var prism_react_renderer_themes_oceanicNext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prism-react-renderer/themes/oceanicNext */ "../../node_modules/prism-react-renderer/themes/oceanicNext/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/daniel.almaguer/dev/bigcommerce/big-design/packages/docs/components/StoryWrapper/StoryWrapper.tsx";




var CodeEditorContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])({
  editorLanguage: 'tsx',
  theme: prism_react_renderer_themes_oceanicNext__WEBPACK_IMPORTED_MODULE_3__["default"],
  // tslint:disable-next-line: no-empty
  toggleTheme: function toggleTheme() {}
});
var StoryWrapper = function StoryWrapper(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(prism_react_renderer_themes_oceanicNext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      editorTheme = _useState2[0],
      setEditorTheme = _useState2[1];

  var toggleEditorTheme = function toggleEditorTheme() {
    return setEditorTheme(editorTheme === prism_react_renderer_themes_oceanicNext__WEBPACK_IMPORTED_MODULE_3__["default"] ? prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_2__["default"] : prism_react_renderer_themes_oceanicNext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Panel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CodeEditorContext.Provider, {
    value: {
      theme: editorTheme,
      toggleTheme: toggleEditorTheme
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.children));
};

/***/ }),

/***/ "./components/StoryWrapper/index.tsx":
/*!*******************************************!*\
  !*** ./components/StoryWrapper/index.tsx ***!
  \*******************************************/
/*! exports provided: CodeEditorContext, StoryWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StoryWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoryWrapper */ "./components/StoryWrapper/StoryWrapper.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeEditorContext", function() { return _StoryWrapper__WEBPACK_IMPORTED_MODULE_0__["CodeEditorContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoryWrapper", function() { return _StoryWrapper__WEBPACK_IMPORTED_MODULE_0__["StoryWrapper"]; });



/***/ }),

/***/ "./components/index.tsx":
/*!******************************!*\
  !*** ./components/index.tsx ***!
  \******************************/
/*! exports provided: Collapsible, BetaRibbon, Code, List, NextLink, PropTable, SideNav, CodePreview, CodeSnippet, CodeEditorContext, StoryWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BetaRibbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BetaRibbon */ "./components/BetaRibbon/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BetaRibbon", function() { return _BetaRibbon__WEBPACK_IMPORTED_MODULE_0__["BetaRibbon"]; });

/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Code */ "./components/Code/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _Code__WEBPACK_IMPORTED_MODULE_1__["Code"]; });

/* harmony import */ var _CodePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodePreview */ "./components/CodePreview/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodePreview", function() { return _CodePreview__WEBPACK_IMPORTED_MODULE_2__["CodePreview"]; });

/* harmony import */ var _CodeSnippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CodeSnippet */ "./components/CodeSnippet/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeSnippet", function() { return _CodeSnippet__WEBPACK_IMPORTED_MODULE_3__["CodeSnippet"]; });

/* harmony import */ var _Collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Collapsible */ "./components/Collapsible/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collapsible", function() { return _Collapsible__WEBPACK_IMPORTED_MODULE_4__["Collapsible"]; });

/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./List */ "./components/List/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _List__WEBPACK_IMPORTED_MODULE_5__["List"]; });

/* harmony import */ var _NextLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NextLink */ "./components/NextLink/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NextLink", function() { return _NextLink__WEBPACK_IMPORTED_MODULE_6__["NextLink"]; });

/* harmony import */ var _PropTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PropTable */ "./components/PropTable/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropTable", function() { return _PropTable__WEBPACK_IMPORTED_MODULE_7__["PropTable"]; });

/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SideNav */ "./components/SideNav/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNav", function() { return _SideNav__WEBPACK_IMPORTED_MODULE_8__["SideNav"]; });

/* harmony import */ var _StoryWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StoryWrapper */ "./components/StoryWrapper/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeEditorContext", function() { return _StoryWrapper__WEBPACK_IMPORTED_MODULE_9__["CodeEditorContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoryWrapper", function() { return _StoryWrapper__WEBPACK_IMPORTED_MODULE_9__["StoryWrapper"]; });












/***/ })

})
//# sourceMappingURL=TablePage.js.161c1128249ce094f0db.hot-update.js.map
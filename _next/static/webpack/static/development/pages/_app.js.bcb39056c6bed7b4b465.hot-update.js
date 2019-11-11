webpackHotUpdate("static/development/pages/_app.js",{

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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_8__["useContext"])(_StoryWrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_12__["CodeEditorContext"]),
      editorTheme = _useContext.theme,
      editorLanguage = _useContext.language;

  var initialCode = getInitialCode(children);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(initialCode),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      code = _useState2[0],
      setCode = _useState2[1];

  var scope = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultScope, props.scope);

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    border: "box",
    marginBottom: "xxLarge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
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
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    padding: "medium",
    backgroundColor: "white",
    borderBottom: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_live__WEBPACK_IMPORTED_MODULE_9__["LivePreview"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
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
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_live__WEBPACK_IMPORTED_MODULE_9__["LiveEditor"], {
    onChange: setCode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_13__["StyledLiveError"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })));
};
CodePreview.defaultProps = {
  language: 'tsx',
  scope: defaultScope
};

/***/ })

})
//# sourceMappingURL=_app.js.bcb39056c6bed7b4b465.hot-update.js.map
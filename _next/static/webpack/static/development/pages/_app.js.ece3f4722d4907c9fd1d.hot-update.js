webpackHotUpdate("static/development/pages/_app.js",{

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
  language: 'tsx',
  theme: prism_react_renderer_themes_oceanicNext__WEBPACK_IMPORTED_MODULE_3__["default"],
  // tslint:disable-next-line: no-empty
  setLanguage: function setLanguage() {},
  // tslint:disable-next-line: no-empty
  toggleTheme: function toggleTheme() {}
});
var StoryWrapper = function StoryWrapper(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(prism_react_renderer_themes_oceanicNext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      editorTheme = _useState2[0],
      setEditorTheme = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('tsx'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      language = _useState4[0],
      setLanguage = _useState4[1];

  var toggleEditorTheme = function toggleEditorTheme() {
    return setEditorTheme(editorTheme === prism_react_renderer_themes_oceanicNext__WEBPACK_IMPORTED_MODULE_3__["default"] ? prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_2__["default"] : prism_react_renderer_themes_oceanicNext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Panel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CodeEditorContext.Provider, {
    value: {
      theme: editorTheme,
      toggleTheme: toggleEditorTheme,
      language: language,
      setLanguage: setLanguage
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.children));
};

/***/ })

})
//# sourceMappingURL=_app.js.ece3f4722d4907c9fd1d.hot-update.js.map
webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _Icons_JavascriptIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/JavascriptIcon */ "./components/Icons/JavascriptIcon.tsx");
/* harmony import */ var _StoryWrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StoryWrapper/StoryWrapper */ "./components/StoryWrapper/StoryWrapper.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./components/SnippetControls/styled.tsx");

var _jsxFileName = "/Users/daniel.almaguer/dev/bigcommerce/big-design/packages/docs/components/SnippetControls/SnippetControls.tsx";







function getCopyToClipboardIcon(isCopying) {
  return isCopying ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_2__["CheckIcon"], {
    title: "Copying",
    color: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_2__["AssignmentIcon"], {
    title: "Copy",
    color: "secondary60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_StoryWrapper_StoryWrapper__WEBPACK_IMPORTED_MODULE_5__["CodeEditorContext"]),
      toggleEditorTheme = _useContext.toggleTheme;

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_6__["StyledFlex"], {
    borderBottom: "box",
    backgroundColor: "secondary20",
    justifyContent: "flex-end",
    alignItems: "center",
    style: {
      zIndex: 999
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    flexGrow: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Small"], {
    marginHorizontal: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, helperText)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    borderLeft: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    iconOnly: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TypescriptIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }),
    variant: "subtle",
    onClick: function onClick() {
      return onCopy(setIsCopying, copyToClipboard);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    borderLeft: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    iconOnly: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icons_JavascriptIcon__WEBPACK_IMPORTED_MODULE_4__["JavascriptIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }),
    variant: "subtle",
    onClick: function onClick() {
      return onCopy(setIsCopying, copyToClipboard);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    borderLeft: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
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
      lineNumber: 67
    },
    __self: this
  })), resetCode && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    borderLeft: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    iconOnly: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_2__["RestoreIcon"], {
      title: "Reset",
      color: "secondary60",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }),
    variant: "subtle",
    onClick: resetCode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    borderLeft: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    iconOnly: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_2__["InvertColorsIcon"], {
      title: "Toggle Theme",
      color: "secondary60",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }),
    variant: "subtle",
    onClick: toggleEditorTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })));
};
SnippetControls.defaultProps = {
  helperText: 'Edit the code below to see your changes live!'
};

/***/ })

})
//# sourceMappingURL=_app.js.799c9c47b8869726bb72.hot-update.js.map
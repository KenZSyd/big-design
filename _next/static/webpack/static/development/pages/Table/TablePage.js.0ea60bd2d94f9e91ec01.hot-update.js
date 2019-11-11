webpackHotUpdate("static/development/pages/Table/TablePage.js",{

/***/ "./pages/Table/TablePage.tsx":
/*!***********************************!*\
  !*** ./pages/Table/TablePage.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/big-design */ "../big-design/dist/big-design.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./components/index.tsx");
/* harmony import */ var _PropTables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PropTables */ "./PropTables/index.ts");
var _jsxFileName = "/Users/daniel.almaguer/dev/bigcommerce/big-design/packages/docs/pages/Table/TablePage.tsx";




var data = [{
  sku: 'ABS',
  name: '[Sample] Able Brewing System',
  stock: 225
}, {
  sku: 'CC3C',
  name: '[Sample] Chemex Coffeemaker 3 cup',
  stock: 49
}, {
  sku: 'CGLD',
  name: '[Sample] Laundry Detergent',
  stock: 29
}, {
  sku: 'CLC',
  name: '[Sample] Canvas Laundry Cart',
  stock: 2
}, {
  sku: 'DPB',
  name: '[Sample] Dustpan & Brush',
  stock: 34
}, {
  sku: 'OCG',
  name: '[Sample] Oak Cheese Grater',
  stock: 34
}, {
  sku: 'OFSUC',
  name: '[Sample] Utility Caddy',
  stock: 45
}];
var columns = [{
  header: 'Sku',
  hash: 'sku',
  render: function render(_ref) {
    var sku = _ref.sku;
    return sku;
  }
}, {
  header: 'Name',
  hash: 'name',
  render: function render(_ref2) {
    var name = _ref2.name;
    return name;
  }
}, {
  header: 'Stock',
  hash: 'stocck',
  render: function render(_ref3) {
    var stock = _ref3.stock;
    return stock;
  }
}];

var sort = function sort(items, columnHash, direction) {
  return items.concat().sort(function (a, b) {
    return direction === 'ASC' ? a[columnHash] >= b[columnHash] ? 1 : -1 : a[columnHash] <= b[columnHash] ? 1 : -1;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["H0"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Table"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CodePreview"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "<Table\n  columns={[\n    { header: 'Sku', hash: 'sku', render: ({ sku }) => sku },\n    { header: 'Name', hash: 'name', render: ({ name }) => name },\n    { header: 'Stock', hash: 'stock', render: ({ stock }) => stock },\n  ]}\n  items={[\n    { sku: 'SM13', name: '[Sample] Smith Journal 13', stock: 25 },\n    { sku: 'DPB', name: '[Sample] Dustpan & Brush', stock: 34 },\n    { sku: 'OFSUC', name: '[Sample] Utility Caddy', stock: 45 },\n    { sku: 'CLC', name: '[Sample] Canvas Laundry Cart', stock: 2 },\n    { sku: 'CGLD', name: '[Sample] Laundry Detergent', stock: 29 },\n  ]}\n  stickyHeader\n/>"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["H1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "API"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PropTables__WEBPACK_IMPORTED_MODULE_3__["TablePropTable"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PropTables__WEBPACK_IMPORTED_MODULE_3__["TableColumnsPropTable"], {
    id: "table-columns-prop-table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PropTables__WEBPACK_IMPORTED_MODULE_3__["TableSelectablePropTable"], {
    id: "table-selectable-prop-table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PropTables__WEBPACK_IMPORTED_MODULE_3__["TableSortablePropTable"], {
    id: "table-sortable-prop-table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["H1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Usage with selectable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CodePreview"], {
    scope: {
      data: data,
      columns: columns
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "function Example() {\n  const [selectedItems, setSelectedItems] = React.useState<Item[]>([]);\n\n  return (\n    <Table\n      keyField=\"sku\"\n      columns={columns}\n      items={data}\n      itemName=\"Products\"\n      selectable={{\n        selectedItems,\n        onSelectionChange: setSelectedItems,\n      }}\n    />\n  );\n}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["H1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Usage with pagination"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CodePreview"], {
    scope: {
      data: data,
      columns: columns
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "function Example() {\n  const [currentPage, setCurrentPage] = React.useState(1);\n  const [itemsPerPageOptions] = React.useState([5, 10, 20, 30]);\n  const [itemsPerPage, setItemsPerPage] = React.useState(5);\n  const [currentItems, setCurrentItems] = React.useState<Item[]>([]);\n\n  const onItemsPerPageChange = newRange => {\n    setCurrentPage(1);\n    setItemsPerPage(newRange);\n  };\n\n  React.useEffect(() => {\n    const maxItems = currentPage * itemsPerPage;\n    const lastItem = Math.min(maxItems, data.length);\n    const firstItem = Math.max(0, maxItems - itemsPerPage);\n\n    setCurrentItems(data.slice(firstItem, lastItem));\n  }, [currentPage, data, itemsPerPage]);\n\n  return (\n    <Table\n      keyField=\"sku\"\n      columns={columns}\n      items={currentItems}\n      itemName=\"Products\"\n      pagination={{\n        currentPage,\n        totalItems: data.length,\n        onPageChange: setCurrentPage,\n        itemsPerPageOptions,\n        onItemsPerPageChange,\n        itemsPerPage,\n      }}\n      stickyHeader\n    />\n  );\n}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["H1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Usage with sortable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CodePreview"], {
    scope: {
      data: data,
      columns: columns,
      sort: sort
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "function Example() {\n  const [items, setItems] = React.useState(data);\n  const [columnHash, setColumnHash] = React.useState('');\n  const [direction, setDirection] = React.useState<'ASC' | 'DESC'>('ASC');\n\n  const onSort = (newColumnHash, newDirection) => {\n    setColumnHash(newColumnHash);\n    setDirection(newDirection);\n    setItems(currentItems => sort(currentItems, newColumnHash, newDirection));\n  };\n\n  return (\n    <Table\n      keyField=\"sku\"\n      columns={[\n        { header: 'Sku', hash: 'sku', render: ({ sku }) => sku, isSortable: true },\n        { header: 'Name', hash: 'name', render: ({ name }) => name, isSortable: true },\n        { header: 'Stock', hash: 'stocck', render: ({ stock }) => stock, isSortable: true },\n      ]}\n      items={items}\n      itemName=\"Products\"\n      sortable={{\n        columnHash,\n        direction,\n        onSort,\n      }}\n    />\n  );\n}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_0__["H1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Customization Example"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CodePreview"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "<Table\n  columns={[\n    { header: 'Sku', hash: 'sku', render: ({ sku }) => sku },\n    {\n      header: 'Name',\n      hash: 'name',\n      render: ({ name }) => name,\n      align: 'center',\n    },\n    {\n      header: 'Stock',\n      hash: 'stock',\n      render: ({ stock }) =>\n        stock > 5 ? <Text color=\"success\">{stock}</Text> : <Text color=\"danger\">{stock}</Text>,\n    },\n  ]}\n  items={[\n    { sku: 'SM13', name: '[Sample] Smith Journal 13', stock: 25 },\n    { sku: 'DPB', name: '[Sample] Dustpan & Brush', stock: 34 },\n    { sku: 'OFSUC', name: '[Sample] Utility Caddy', stock: 45 },\n    { sku: 'CLC', name: '[Sample] Canvas Laundry Cart', stock: 2 },\n    { sku: 'CGLD', name: '[Sample] Laundry Detergent', stock: 29 },\n  ]}\n/>"));
});

/***/ })

})
//# sourceMappingURL=TablePage.js.0ea60bd2d94f9e91ec01.hot-update.js.map
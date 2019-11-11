(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{Uim9:function(e,t,n){"use strict";n.r(t);var a=n("+Ls6"),s=n("ERkP"),r=n.n(s),o=n("GsAr"),l=n("pneb"),c=n("R5dR"),i=n("nFRM"),m=[{name:"columns",types:r.a.createElement(c.a,{href:"#table-columns-prop-table"},"Columns[]"),description:r.a.createElement(r.a.Fragment,null,"See ",r.a.createElement(c.a,{href:"#table-columns-prop-table"},"below")," for usage."),required:!0},{name:"items",types:"any[]",description:"The array of items to display.",required:!0},{name:"itemName",types:"string",description:"Item name displayed on the table actions section."},{name:"keyField",types:"string",defaultValue:"id",description:"Unique property identifier for items."},{name:"pagination",types:r.a.createElement(c.a,{href:"/Pagination/PaginationPage",as:"/pagination"},"Pagination"),description:"See pagination component for details."},{name:"selectable",types:r.a.createElement(c.a,{href:"#table-selectable-prop-table"},"Selectable"),description:r.a.createElement(r.a.Fragment,null,"See ",r.a.createElement(c.a,{href:"#table-selectable-prop-table"},"below")," for usage.")},{name:"sortable",types:r.a.createElement(c.a,{href:"#table-sortable-prop-table"},"Sortable"),description:r.a.createElement(r.a.Fragment,null,"See ",r.a.createElement(c.a,{href:"#table-sortable-prop-table"},"below")," for usage.")},{name:"stickyHeader",types:"boolean",description:"Makes the table header and actions fixed."}],u=[{name:"render",types:"React.ComponentType<Item>",required:!0,description:"Component used to render a column."},{name:"header",types:"string",required:!0,description:"Header title."},{name:"align",types:["left","center","right"],defaultValue:"left",description:"Sets alignment for column."},{name:"hash",types:"string",required:!0,description:"Unique identifier for column."},{name:"isSortable",types:"boolean",defaultValue:"false",description:"Defines if the column is sortable."},{name:"verticalAlign",types:["top","center"],defaultValue:"top",description:"Sets vertical alignment for column (td only)."},{name:"width",types:["string","number"],description:"Sets column width."},{name:"withPadding",types:"boolean",defaultValue:!0,description:"Toggles padding on td elements."}],d=[{name:"selectedItems",types:"Item[]",description:"Defines which items are selected.",required:!0},{name:"onSelectionChange",types:"(selectedItems: Item[]) => void",description:"Function to be called when item selection changes.",required:!0}],p=[{name:"direction",types:["ASC","DESC"],required:!0,description:"Defines sort direction."},{name:"columnHash",types:"string",description:"Defines which column is currently sorted."},{name:"onSort",types:"(columnHash: string, direction: TableSortDirection, column: TableColumn<T>): void;",description:"Function to be called when a sortable header is clicked.",required:!0}],h=function(e){return r.a.createElement(i.a,Object(l.a)({title:"Table",propList:m},e))},k=function(e){return r.a.createElement(i.a,Object(l.a)({title:"Table[Columns]",propList:u},e))},b=function(e){return r.a.createElement(i.a,Object(l.a)({title:"Table[Selectable]",propList:d},e))},g=function(e){return r.a.createElement(i.a,Object(l.a)({title:"Table[Sortable]",propList:p},e))},S=[{sku:"ABS",name:"[Sample] Able Brewing System",stock:225},{sku:"CC3C",name:"[Sample] Chemex Coffeemaker 3 cup",stock:49},{sku:"CGLD",name:"[Sample] Laundry Detergent",stock:29},{sku:"CLC",name:"[Sample] Canvas Laundry Cart",stock:2},{sku:"DPB",name:"[Sample] Dustpan & Brush",stock:34},{sku:"OCG",name:"[Sample] Oak Cheese Grater",stock:34},{sku:"OFSUC",name:"[Sample] Utility Caddy",stock:45}],f=[{header:"Sku",hash:"sku",render:function(e){return e.sku}},{header:"Name",hash:"name",render:function(e){return e.name}},{header:"Stock",hash:"stocck",render:function(e){return e.stock}}],C=function(e,t,n){return e.concat().sort(function(e,a){return"ASC"===n?e[t]>=a[t]?1:-1:e[t]<=a[t]?1:-1})};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.H0,null,"Table"),r.a.createElement(o.a,null,"<Table\n  columns={[\n    { header: 'Sku', hash: 'sku', render: ({ sku }) => sku },\n    { header: 'Name', hash: 'name', render: ({ name }) => name },\n    { header: 'Stock', hash: 'stock', render: ({ stock }) => stock },\n  ]}\n  items={[\n    { sku: 'SM13', name: '[Sample] Smith Journal 13', stock: 25 },\n    { sku: 'DPB', name: '[Sample] Dustpan & Brush', stock: 34 },\n    { sku: 'OFSUC', name: '[Sample] Utility Caddy', stock: 45 },\n    { sku: 'CLC', name: '[Sample] Canvas Laundry Cart', stock: 2 },\n    { sku: 'CGLD', name: '[Sample] Laundry Detergent', stock: 29 },\n  ]}\n  stickyHeader\n/>"),r.a.createElement(a.H1,null,"API"),r.a.createElement(h,null),r.a.createElement(k,{id:"table-columns-prop-table"}),r.a.createElement(b,{id:"table-selectable-prop-table"}),r.a.createElement(g,{id:"table-sortable-prop-table"}),r.a.createElement(a.H1,null,"Usage with selectable"),r.a.createElement(o.a,{scope:{data:S,columns:f}},'function Example() {\n  const [selectedItems, setSelectedItems] = React.useState<Item[]>([]);\n\n  return (\n    <Table\n      keyField="sku"\n      columns={columns}\n      items={data}\n      itemName="Products"\n      selectable={{\n        selectedItems,\n        onSelectionChange: setSelectedItems,\n      }}\n    />\n  );\n}'),r.a.createElement(a.H1,null,"Usage with pagination"),r.a.createElement(o.a,{scope:{data:S,columns:f}},'function Example() {\n  const [currentPage, setCurrentPage] = React.useState(1);\n  const [itemsPerPageOptions] = React.useState([5, 10, 20, 30]);\n  const [itemsPerPage, setItemsPerPage] = React.useState(5);\n  const [currentItems, setCurrentItems] = React.useState<Item[]>([]);\n\n  const onItemsPerPageChange = newRange => {\n    setCurrentPage(1);\n    setItemsPerPage(newRange);\n  };\n\n  React.useEffect(() => {\n    const maxItems = currentPage * itemsPerPage;\n    const lastItem = Math.min(maxItems, data.length);\n    const firstItem = Math.max(0, maxItems - itemsPerPage);\n\n    setCurrentItems(data.slice(firstItem, lastItem));\n  }, [currentPage, data, itemsPerPage]);\n\n  return (\n    <Table\n      keyField="sku"\n      columns={columns}\n      items={currentItems}\n      itemName="Products"\n      pagination={{\n        currentPage,\n        totalItems: data.length,\n        onPageChange: setCurrentPage,\n        itemsPerPageOptions,\n        onItemsPerPageChange,\n        itemsPerPage,\n      }}\n      stickyHeader\n    />\n  );\n}'),r.a.createElement(a.H1,null,"Usage with sortable"),r.a.createElement(o.a,{scope:{data:S,columns:f,sort:C}},"function Example() {\n  const [items, setItems] = React.useState(data);\n  const [columnHash, setColumnHash] = React.useState('');\n  const [direction, setDirection] = React.useState<'ASC' | 'DESC'>('ASC');\n\n  const onSort = (newColumnHash, newDirection) => {\n    setColumnHash(newColumnHash);\n    setDirection(newDirection);\n    setItems(currentItems => sort(currentItems, newColumnHash, newDirection));\n  };\n\n  return (\n    <Table\n      keyField=\"sku\"\n      columns={[\n        { header: 'Sku', hash: 'sku', render: ({ sku }) => sku, isSortable: true },\n        { header: 'Name', hash: 'name', render: ({ name }) => name, isSortable: true },\n        { header: 'Stock', hash: 'stocck', render: ({ stock }) => stock, isSortable: true },\n      ]}\n      items={items}\n      itemName=\"Products\"\n      sortable={{\n        columnHash,\n        direction,\n        onSort,\n      }}\n    />\n  );\n}"),r.a.createElement(a.H1,null,"Customization Example"),r.a.createElement(o.a,null,"<Table\n  columns={[\n    { header: 'Sku', hash: 'sku', render: ({ sku }) => sku },\n    {\n      header: 'Name',\n      hash: 'name',\n      render: ({ name }) => name,\n      align: 'center',\n    },\n    {\n      header: 'Stock',\n      hash: 'stock',\n      render: ({ stock }) =>\n        stock > 5 ? <Text color=\"success\">{stock}</Text> : <Text color=\"danger\">{stock}</Text>,\n    },\n  ]}\n  items={[\n    { sku: 'SM13', name: '[Sample] Smith Journal 13', stock: 25 },\n    { sku: 'DPB', name: '[Sample] Dustpan & Brush', stock: 34 },\n    { sku: 'OFSUC', name: '[Sample] Utility Caddy', stock: 45 },\n    { sku: 'CLC', name: '[Sample] Canvas Laundry Cart', stock: 2 },\n    { sku: 'CGLD', name: '[Sample] Laundry Detergent', stock: 29 },\n  ]}\n/>"))}},ZHx6:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Table/TablePage",function(){var e=n("Uim9");return{page:e.default||e}}])}},[["ZHx6",1,0]]]);
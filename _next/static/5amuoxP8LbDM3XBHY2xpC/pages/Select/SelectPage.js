(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"2pL5":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Select/SelectPage",function(){var e=t("WdXb");return{page:e.default||e}}])},WdXb:function(e,n,t){"use strict";t.r(n);var a=t("+Ls6"),l=t("ERkP"),o=t.n(l),r=t("GsAr"),i=t("lIm4"),c=t("pneb"),u=t("R5dR"),s=t("nFRM"),p=[{name:"action",types:"Action",description:"Action option displayed at the end of the list."},{name:"disabled",types:"boolean",description:"Disables the select component."},{name:"error",types:"string",description:"Displays a form error around the field."},{name:"filterable",types:"boolean",defaultValue:"true",description:o.a.createElement(o.a.Fragment,null,"Allows you to filter the ",o.a.createElement(i.a,null,"Options")," in the ",o.a.createElement(i.a,null,"Select"),".")},{name:"inputRef",types:"React.Ref<HTMLInputElement> | React.RefObject<HTMLInputElement>",description:o.a.createElement(o.a.Fragment,null,"The provided ref will be used for the underlying input element used in the ",o.a.createElement(i.a,null,"Select"),".")},{name:"label",types:"string",description:"Adds a label to the field."},{name:"maxHeight",types:"number",defaultValue:"250",description:o.a.createElement(o.a.Fragment,null,"Sets a ",o.a.createElement(i.a,null,"max-height")," to the dropdown.")},{name:"multi",types:"boolean",description:"Renders a multiselect component."},{name:"options",types:"Array<Options>",required:!0,description:o.a.createElement(o.a.Fragment,null,"Accepts an array of ",o.a.createElement(i.a,null,"Options"),". See example for usage.")},{name:"placement",types:["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],defaultValue:"bottom-start",description:"Determines the location in which the dropdown will be placed."},{name:"positionFixed",defaultValue:"false",types:"boolean",description:o.a.createElement(o.a.Fragment,null,"If set, uses ",o.a.createElement(i.a,null,"position: fixed")," instead of ",o.a.createElement(i.a,null,"position: absolute")," to position the items.")},{name:"required",types:"boolean",description:"Sets the field as required."},{name:"value",types:"string | number | Array<string | number>",description:o.a.createElement(o.a.Fragment,null,"Modifies the current selected value of the field. If rendering a ",o.a.createElement(i.a,null,"multiselect")," component,"," ",o.a.createElement(i.a,null,"value")," expects an array.")},{name:"onItemChange",types:"(value: string | number | Array<string | number>) => void",required:!0,description:"Callback called with value of selected option."}],m=[{name:"disabled",types:"boolean",description:"Sets the Option to disabled."},{name:"content",types:"string",required:!0,description:"Sets the text content of the Option."},{name:"icon",types:o.a.createElement(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:o.a.createElement(o.a.Fragment,null,"Pass in an"," ",o.a.createElement(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the left of the text.")},{name:"value",types:"string | number | Array<string | number>",required:!0,description:"Stored value of the Option."}],d=[{name:"actionType",types:["normal","destructive"],defaultValue:"normal",description:"Indicates whether the Action is of normal or destructive nature."},{name:"disabled",types:"boolean",description:"Sets the Action to disabled."},{name:"content",types:"string",required:!0,description:"Sets the text content of the Action."},{name:"icon",types:o.a.createElement(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:o.a.createElement(o.a.Fragment,null,"Pass in an"," ",o.a.createElement(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the left of the text.")},{name:"onClick",types:"(inputText: string): void",description:"Returns the current text in the input."}],h=function(e){return o.a.createElement(s.a,Object(c.a)({title:"Select",propList:p},e))},v=function(e){return o.a.createElement(s.a,Object(c.a)({title:"Select[Option]",propList:m},e))},b=function(e){return o.a.createElement(s.a,Object(c.a)({title:"Select[Action]",propList:d},e))};n.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.H0,null,"Selects"),o.a.createElement(a.Text,null,"Select are typeable inputs with selectable dropdown items."," ",o.a.createElement(a.Link,{href:"https://design.bigcommerce.com/components/selects",target:"_blank"},"Selects Design Guidelines"),"."),o.a.createElement(r.a,null,"function Example() {\n  const [value, setValue] = React.useState(undefined);\n  const handleChange = val => setValue(val);\n\n  return (\n    <Form.Group>\n      <Select\n        action={{\n          actionType: 'destructive',\n          content: 'Remove Country',\n          icon: <DeleteIcon />,\n          onClick: () => null,\n        }}\n        filterable={true}\n        label=\"Countries\"\n        maxHeight={300}\n        onItemChange={handleChange}\n        options={[\n          { value: 'us', content: 'United States' },\n          { value: 'mx', content: 'Mexico' },\n          { value: 'ca', content: 'Canada' },\n          { value: 'en', content: 'England' },\n          { value: 'fr', content: 'France' },\n          { value: 'gr', content: 'Germany' },\n          { value: 'ar', content: 'Argentina' },\n          { value: 'ru', content: 'Russia', disabled: true },\n          { value: 'ch', content: 'Chile' },\n          { value: 'bo', content: 'Bolivia' },\n          { value: 'jp', content: 'Japan' },\n          { value: 'cn', content: 'China' },\n          { value: 'sk', content: 'South Korea' },\n          { value: 'au', content: 'Australia' },\n          { value: 'ug', content: 'Uganda' },\n        ]}\n        placeholder={'Choose country'}\n        placement={'bottom-start'}\n        required\n        value={value}\n      />\n    </Form.Group>\n  );\n}"),o.a.createElement(a.H1,null,"API"),o.a.createElement(h,null),o.a.createElement(v,null),o.a.createElement(b,null),o.a.createElement(a.H1,null,"Multiselect"),o.a.createElement(a.Text,null,"Select has the ability to render a list of items as multiselectable. Select will return an ",o.a.createElement(i.a,null,"array")," of the select options."),o.a.createElement(r.a,null,"function Example() {\n  const [value, setValue] = React.useState([]);\n  const handleChange = val => setValue(val);\n\n  return (\n    <Form.Group>\n      <Select\n        label=\"States\"\n        maxHeight={300}\n        multi={true}\n        onItemChange={handleChange}\n        options={[\n          { value: 'tx', content: 'Texas' },\n          { value: 'ca', content: 'California' },\n          { value: 'or', content: 'Oregon' },\n          { value: 'ar', content: 'Arkansas' },\n          { value: 'nv', content: 'Nevada', disabled: true },\n        ]}\n        placeholder={'Choose states'}\n        placement={'bottom-start'}\n        required\n        value={value}\n      />\n    </Form.Group>\n  );\n}"),o.a.createElement(a.H1,null,"Position"),o.a.createElement(a.Text,null,"Select can be anchored in different directions with the ",o.a.createElement(i.a,{primary:!0},"position")," property. It will automatically find a position if there's not enough space in the chosen direction."),o.a.createElement(r.a,null,"<Grid gridColumns=\"repeat(4, 1fr)\">\n  <Select\n    label=\"Select\"\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from above\"\n    placement=\"top\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from below\"\n    placement=\"bottom-start\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from the right\"\n    placement=\"right-start\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from the left\"\n    placement=\"left-end\"\n    required\n  />\n</Grid>"),o.a.createElement(a.H1,null,"Max Height"),o.a.createElement(a.Text,null,"Once the content is longer than the max-height, the Dropdown will be scrollable. It is possible to modify the dimension by passing a ",o.a.createElement(i.a,{primary:!0},"maxHeight")," property."),o.a.createElement(r.a,null,"<Grid gridColumns=\"repeat(3, 1fr)\">\n  <Select\n    label=\"Select\"\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Default\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Default\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    maxHeight={150}\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Smaller\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    maxHeight={350}\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Larger\"\n    required\n  />\n</Grid>"),o.a.createElement(a.H1,null,"Disabled"),o.a.createElement(a.Text,null,"It is possible to disable the entire select component, similar to how you would disable a native HTML select element, by using the ",o.a.createElement(i.a,{primary:!0},"disabled")," property."),o.a.createElement(r.a,null,"<Select\n  disabled\n  label=\"Select\"\n  maxHeight={350}\n  onItemChange={() => null}\n  options={[\n    { value: 1, content: 'Option' },\n    { value: 2, content: 'Option' },\n    { value: 3, content: 'Option' },\n    { value: 4, content: 'Option' },\n  ]}\n  placeholder=\"Larger\"\n  required\n/>"),o.a.createElement(a.H1,null,"Action"),o.a.createElement(a.Text,null,"Accepts an ",o.a.createElement(i.a,null,"action")," object to display at the end of the list."),o.a.createElement(r.a,null,"<Select\n  action={{\n    actionType: 'destructive',\n    content: 'Remove Country',\n    icon: <DeleteIcon />,\n    onClick: () => null,\n  }}\n  label=\"Countries\"\n  onItemChange={() => null}\n  options={[\n    { value: 'us', content: 'United States' },\n    { value: 'mx', content: 'Mexico' },\n    { value: 'ca', content: 'Canada' },\n    { value: 'en', content: 'England' },\n  ]}\n  placeholder={'Choose country'}\n  placement={'bottom-start'}\n  required\n/>"),o.a.createElement(a.H1,null,"Error"),o.a.createElement(a.Text,null,"An ",o.a.createElement(i.a,null,"error")," prop receives a ",o.a.createElement(i.a,null,"string")," to display."),o.a.createElement(r.a,null,"<Form.Group>\n  <Select\n    label=\"Countries\"\n    error=\"Need to choose a country before proceeding\"\n    onItemChange={() => null}\n    options={[\n      { value: 'us', content: 'United States' },\n      { value: 'mx', content: 'Mexico' },\n      { value: 'ca', content: 'Canada' },\n      { value: 'en', content: 'England' },\n    ]}\n    placeholder={'Choose country'}\n    placement={'bottom-start'}\n    required\n  />\n</Form.Group>"))}}},[["2pL5",1,0]]]);
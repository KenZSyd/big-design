(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{XWwo:function(e,n,t){"use strict";t.r(n);var a=t("+Ls6"),r=t("ERkP"),l=t.n(r),o=t("lIm4"),u=t("GsAr"),i=t("pneb"),m=t("nFRM"),p=function(e){var n=e.id;return l.a.createElement(l.a.Fragment,null,l.a.createElement(a.H2,{id:n},"Form.Error"),l.a.createElement(a.Text,null,"Supports all native ",l.a.createElement(o.a,null,"<p />")," element attributes."))},c=[{name:"fullWidth",types:"boolean",defaultValue:"false",description:"Sets the form width to 100%"}],s=[{name:"description",types:"ReactChild",description:"Pass in a description to display in the fieldset."},{name:"legend",types:"ReactChild",description:"Pass in a legend to display in the fieldset."}],d=function(e){return l.a.createElement(m.a,Object(i.a)({title:"Form.Fieldset",propList:s},e))},E=function(e){var n=e.id;return l.a.createElement(l.a.Fragment,null,l.a.createElement(a.H2,{id:n},"Form.Label"),l.a.createElement(a.Text,null,"Supports all native ",l.a.createElement(o.a,null,"<label />")," element attributes."))},h=[{name:"errors",types:["React.ReactChild","React.ReactChild[]"],description:"Pass error(s) into the form group to override child input errors."}],F=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(a.Text,null,"Supports all native ",l.a.createElement(o.a,null,"<form />")," element attributes."),l.a.createElement(m.a,Object(i.a)({title:"Form",propList:c},e)))},b=function(e){return l.a.createElement(m.a,Object(i.a)({title:"Form.Group",propList:h},e))};n.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(a.H0,null,"Forms"),l.a.createElement(a.Text,null,"Form fields are essential to any website or web application. ",l.a.createElement(o.a,null,"id"),"'s' will be auto-generated for input/textarea and labels ",l.a.createElement(o.a,null,"for")," attribute, unless manually specifying one."," ",l.a.createElement(a.Link,{href:"https://design.bigcommerce.com/components/forms",target:"_blank"},"Form Fields Design Guidelines"),"."),l.a.createElement(u.a,null,'<Form>\n  <Form.Group>\n    <Input\n      label="Email"\n      type="email"\n      description="Please provide a valid email address."\n      placeholder="Email address"\n    />\n  </Form.Group>\n  <Form.Group>\n    <Input label="Password" type="password" placeholder="Password" />\n  </Form.Group>\n  <Box marginTop="xxLarge">\n    <Button>Sign In</Button>\n  </Box>\n</Form>'),l.a.createElement(a.H1,null,"API"),l.a.createElement(F,null),l.a.createElement(p,{id:"error"}),l.a.createElement(d,null),l.a.createElement(E,{id:"label"}),l.a.createElement(b,null),l.a.createElement(a.H1,null,"Input Types"),l.a.createElement(a.Text,null,"BigDesign comes with various input types: ",l.a.createElement(o.a,null,"Input"),", ",l.a.createElement(o.a,null,"Checkbox"),", ",l.a.createElement(o.a,null,"Radio"),","," ",l.a.createElement(o.a,null,"Select"),", and ",l.a.createElement(o.a,null,"Textarea"),"."),l.a.createElement(u.a,null,'<Form>\n  <Form.Group>\n    <Input label="Example Input" placeholder="Example" />\n  </Form.Group>\n  <Form.Group>\n    <Checkbox checked={true} onChange={() => null} label="Example Checkbox" />\n  </Form.Group>\n  <Form.Group>\n    <Radio checked={true} onChange={() => null} label="Example Radio" />\n  </Form.Group>\n  <Form.Group>\n    <Select\n      label="Example Select"\n      onItemChange={() => null}\n      options={[\n        { value: 1, content: \'Option\' },\n        { value: 2, content: \'Option\' },\n        { value: 3, content: \'Option\' },\n        { value: 4, content: \'Option\' },\n      ]}\n      placeholder="Example"\n    />\n  </Form.Group>\n  <Form.Group>\n    <Textarea label="Example Textarea" placeholder="Example" />\n  </Form.Group>\n</Form>'),l.a.createElement(a.H1,null,"Layout"),l.a.createElement(a.Text,null,"You can up to 3 ",l.a.createElement(o.a,null,"Input")," components in row to add more dimension to a ",l.a.createElement(o.a,null,"Form.Group"),"."," ",l.a.createElement(o.a,null,"Radio")," and ",l.a.createElement(o.a,null,"Checkbox")," components will never display inline inside a ",l.a.createElement(o.a,null,"Form.Group"),"."),l.a.createElement(u.a,null,'<Form>\n  <Form.Group>\n    <Input label="Company" placeholder="BigCommerce" required />\n  </Form.Group>\n  <Form.Group>\n    <Input label="First Name" placeholder="John" required />\n    <Input label="Last Name" placeholder="Doe" required />\n  </Form.Group>\n  <Form.Group>\n    <Input label="City" placeholder="Austin" required />\n    <Input label="State" placeholder="Texas" required />\n    <Input label="Postal Code" placeholder="78726" required />\n  </Form.Group>\n  <Form.Fieldset legend="Shipping Method">\n    <Form.Group>\n      <Radio label="Free \u2013 Three Day Shipping" checked onChange={() => null} />\n      <Radio label="$4.99 \u2013 Two Day Shipping" />\n      <Radio label="$9.99 \u2013 One Day Shipping" />\n    </Form.Group>\n  </Form.Fieldset>\n</Form>'),l.a.createElement(a.H1,null,"Validation"),l.a.createElement(a.Text,null,"All form controls are tied to ",l.a.createElement(o.a,{primary:!0},"onChange")," or equivalent event handlers. Validation messages can be passed through the ",l.a.createElement(o.a,null,"error")," prop. All input errors in an ",l.a.createElement(o.a,null,"Form.Group")," will appear at the bottom of the group component component."),l.a.createElement(u.a,null,'function Example() {\n  const ERROR_MSG = \'Must be less than or equal to 3 characters long.\';\n\n  const [value, setValue] = React.useState(\'BigCommerce\');\n  const [error, setError] = React.useState(ERROR_MSG);\n\n  const handleSubmit = event => {\n    const form = event.currentTarget;\n\n    if (form.checkValidity() === false) {\n      event.preventDefault();\n      event.stopPropagation();\n    }\n  };\n\n  const handleChange = event => {\n    const { target } = event;\n    const regex = RegExp(target.pattern, \'g\');\n\n    regex.test(target.value) ? setError(\'\') : setError(ERROR_MSG);\n\n    setValue(target.value);\n  };\n\n  return (\n    <Form onSubmit={handleSubmit}>\n      <Form.Group>\n        <Input\n          label="Example"\n          description="Remove characters to preview validation."\n          value={value}\n          error={error}\n          onChange={handleChange}\n          pattern="^.{1,3}$"\n          required\n        />\n      </Form.Group>\n      <Form.Group>\n        <Input label="City" error="You must enter a valid City." placeholder="Austin" required />\n        <Input label="State" placeholder="Texas" required />\n        <Input label="Postal Code" error="You must enter a valid Postal Code." placeholder="78726" required />\n      </Form.Group>\n    </Form>\n  );\n}'))}},ybwp:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Form/FormPage",function(){var e=t("XWwo");return{page:e.default||e}}])}},[["ybwp",1,0]]]);
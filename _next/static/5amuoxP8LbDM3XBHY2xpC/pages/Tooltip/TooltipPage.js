(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{AyO2:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Tooltip/TooltipPage",function(){var t=n("dpPe");return{page:t.default||t}}])},dpPe:function(t,e,n){"use strict";n.r(e);var o=n("+Ls6"),i=n("ERkP"),l=n.n(i),a=n("GsAr"),r=n("lIm4"),p=n("pneb"),m=n("nFRM"),c=[{name:"trigger",types:"ReactNode",required:!0,description:"React Node that triggers the tooltip on hover."},{name:"placement",defaultValue:"top",types:["auto","auto-end","auto-start","bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"],description:"Sets the position of the Tooltip."}],u=function(t){return l.a.createElement(m.a,Object(p.a)({title:"Tooltip",propList:c},t))};e.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.H0,null,"Tooltips"),l.a.createElement(o.Text,null,"Tooltips contain information to help users understand actions or page elements. They are short, and triggered by a user hovering with their keyboard or mouse over a UI element."," ",l.a.createElement(o.Link,{href:"https://design.bigcommerce.com/components/tooltips",target:"_blank"},"Tooltips Design Guidelines"),"."),l.a.createElement(a.a,null,'<Tooltip trigger={<Button>Hover</Button>} placement="right">\n  Tooltip Content\n</Tooltip>'),l.a.createElement(o.H1,null,"API"),l.a.createElement(u,null),l.a.createElement(o.H1,null,"Examples"),l.a.createElement(o.H2,null,"Anchor"),l.a.createElement(o.Text,null,"Tooltips can wrap any ",l.a.createElement(r.a,null,"Element"),". Tooltip will show on hover."),l.a.createElement(a.a,null,'<Flex alignItems="center">\n  <Box marginRight="medium">\n    <Tooltip trigger={<Button>Button</Button>} placement="right">\n      Tooltip Content\n    </Tooltip>\n  </Box>\n\n  <Box marginRight="medium">\n    <Tooltip trigger={<WarningIcon />} placement="right">\n      Tooltip Content\n    </Tooltip>\n  </Box>\n  <Box marginRight="medium">\n    <Tooltip trigger={<span>Span</span>} placement="right">\n      Tooltip Content\n    </Tooltip>\n  </Box>\n</Flex>'),l.a.createElement(o.H2,null,"Placement"),l.a.createElement(o.Text,null,"Tooltip can be anchored in different directions with the ",l.a.createElement(r.a,{primary:!0},"placement")," property. It will automatically find a position if there's not enough space in the chosen direction."),l.a.createElement(a.a,null,'<Grid gridColumns="repeat(4, min-content)">\n  <Tooltip trigger={<Button>Right</Button>} placement="right">\n    Tooltip Content\n  </Tooltip>\n  <Tooltip trigger={<Button>Top</Button>} placement="top">\n    Tooltip Content\n  </Tooltip>\n  <Tooltip trigger={<Button>Left</Button>} placement="left">\n    Tooltip Content\n  </Tooltip>\n  <Tooltip trigger={<Button>Bottom</Button>} placement="bottom">\n    Tooltip Content\n  </Tooltip>\n</Grid>\n'))}}},[["AyO2",1,0]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(115)),i={id:"doc-py-byb",sidebar_label:"Before you start...",title:"What to know"},c={unversionedId:"py/s1/doc-py-byb",id:"py/s1/doc-py-byb",isDocsHomePage:!1,title:"What to know",description:"---",source:"@site/docs/py/s1/byb.md",slug:"/py/s1/doc-py-byb",permalink:"/discord-bot-guide/docs/py/s1/doc-py-byb",editUrl:"https://github.com/DeepWebDevelopers/discord-bot-guide/docs/py/s1/byb.md",version:"current",sidebar_label:"Before you start...",sidebar:"docs",previous:{title:"Getting Your Bot Up & Running",permalink:"/discord-bot-guide/docs/js/s2/installings/doc-bot-up"},next:{title:"Setup",permalink:"/discord-bot-guide/docs/py/s1/installings/doc-py-deps"}},l=[{value:"Prior knowledge",id:"prior-knowledge",children:[]},{value:"A place to edit code",id:"a-place-to-edit-code",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("h2",{id:"prior-knowledge"},"Prior knowledge"),Object(a.b)("p",null,"Before you start this tutorial, I strongly recommend learning some basic Python. Unless you have a basic understanding of Python syntax, this tutorial might not be of great use to you as lots of things may not make sense."),Object(a.b)("p",null,"Some things that you need to understand are"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Data types (Strings, integers, floats)"),Object(a.b)("li",{parentName:"ul"},"Collection types (Lists, tuples, dictionaries)"),Object(a.b)("li",{parentName:"ul"},"Type conversion"),Object(a.b)("li",{parentName:"ul"},"Variables"),Object(a.b)("li",{parentName:"ul"},"Built-in functions and functions"),Object(a.b)("li",{parentName:"ul"},"Classes")),Object(a.b)("p",null,"I understand that you may want a discord bot to be your first project, but try experimenting with basic python first.\nI recommend starting off with the ",Object(a.b)("a",{parentName:"p",href:"https://python.readthedocs.io/en/latest/tutorial/index.html"},"Python Documentation")),Object(a.b)("h2",{id:"a-place-to-edit-code"},"A place to edit code"),Object(a.b)("p",null,"Of course, you need a place to actually write the code! Some free choices include"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.jetbrains.com/pycharm-edu/"},"Pycharm")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.sublimetext.com/"},"Sublime Text"))),Object(a.b)("p",null,"I'm sure there are separate documents for each of those programs, so learn how to set those up, and come back once you're done."))}u.isMDXComponent=!0},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,y=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(y,c(c({ref:t},s),{},{components:n})):o.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
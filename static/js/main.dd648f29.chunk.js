(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(5),s=(c(18),c(19),c(2)),r=(c(20),c(6)),i=c.n(r),l=c(0),j=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(l.jsx)(a.c,{to:"/people",className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})})},o=c(4),b=c(1),d="https://mate-academy.github.io/react_people-table/api/people.json";function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(d)})).then((function(e){return e.json()}));var e}c(22);var u=function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.person;return Object(l.jsx)("td",{children:Object(l.jsx)(a.b,{to:"/people/".concat(t.slug),className:i()({"has-text-danger":"f"===(null===t||void 0===t?void 0:t.sex)}),children:t.name})})},x=function(e){var t=e.people,c=e.errorMessage,n=e.loading,a=e.selectedPersonSlug;function s(e){return t.find((function(t){return t.name===e}))||null}return Object(l.jsx)("div",{className:"block",children:n?Object(l.jsx)("div",{className:"box table-container",children:Object(l.jsx)(u,{})}):Object(l.jsxs)("div",{className:"box table-container",children:[Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:c}),0===t.length&&Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){var t=s(e.motherName),c=s(e.fatherName);return Object(l.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":e.slug===a}),children:[Object(l.jsx)(O,{person:e}),Object(l.jsx)("td",{children:e.sex}),Object(l.jsx)("td",{children:e.born}),Object(l.jsx)("td",{children:e.died}),t?Object(l.jsx)(O,{person:t}):Object(l.jsx)("td",{children:e.motherName||"-"}),c?Object(l.jsx)(O,{person:c}):Object(l.jsx)("td",{children:e.fatherName||"-"})]},e.slug)}))})]})]})})},p=function(){var e=Object(b.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(""),r=Object(o.a)(a,2),i=r[0],j=r[1],d=Object(b.useState)(!0),u=Object(o.a)(d,2),O=u[0],p=u[1],m=Object(s.g)("/people/:slug"),g=null===m||void 0===m?void 0:m.params.slug;return Object(b.useEffect)((function(){setTimeout((function(){p(!1)}),500)}),[]),Object(b.useEffect)((function(){O&&h().then(n).catch((function(){return j("Something went wrong")}))}),[c]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"block",children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)(x,{people:c,errorMessage:i,loading:O,selectedPersonSlug:g})]})})},m=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(j,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{path:"/",element:Object(l.jsx)("h1",{className:"title",children:"Home Page"})}),Object(l.jsx)(s.b,{path:"/people",element:Object(l.jsx)(p,{})}),Object(l.jsx)(s.b,{path:"/people/:slug",element:Object(l.jsx)(p,{})}),Object(l.jsx)(s.b,{path:"/home",element:Object(l.jsx)(s.a,{to:"/",replace:!0})}),Object(l.jsx)(s.b,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(m,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.dd648f29.chunk.js.map
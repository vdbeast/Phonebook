"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[314],{7314:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(2791),a=n(9439),s=n(9434),o=n(2479),u=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t},l=function(e){return e.phonebook.contacts},c=function(e){return e.filter.filter},i=function(e){return e.phonebook.isLoading},d=function(e){return e.phonebook.error},h=n(184),f=function(){var e=(0,s.I0)(),t=(0,r.useState)(""),n=(0,a.Z)(t,2),c=n[0],i=n[1],d=(0,r.useState)(""),f=(0,a.Z)(d,2),m=f[0],p=f[1],b=(0,s.v9)(l);return(0,h.jsxs)("form",{className:"submit_form",onSubmit:function(t){t.preventDefault(),b.find((function(e){return e.name===c}))?alert("Contact already exists"):(e((0,o.uK)({id:u(),name:c,number:m})),i(""),p(""))},children:[(0,h.jsx)("label",{className:"label",children:(0,h.jsx)("input",{type:"text",placeholder:"Name",value:c,onChange:function(e){return i(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,h.jsx)("label",{className:"label",children:(0,h.jsx)("input",{type:"tel",placeholder:"Number",value:m,onChange:function(e){return p(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,h.jsx)("button",{type:"submit",className:"submit_btn",children:"Add Contact"})]})},m=function(e){var t=e.contact,n=e.onDelete;return(0,h.jsxs)("li",{children:[t.name,": ",t.number,(0,h.jsx)("button",{className:"delete_btn",onClick:function(){return n(t.id)},children:"Delete"})]})},p=function(){var e=(0,s.v9)(l),t=(0,s.v9)(c),n=(0,s.I0)(),a=(0,r.useCallback)((function(e){n((0,o.GK)(e))}),[n]),u=e.filter((function(e){return e.name.toLowerCase().includes(t)}));return(0,h.jsx)("ul",{children:u.map((function(e){return(0,h.jsx)(m,{contact:e,onDelete:a},e.id)}))})},b=n(1819),x=function(){var e=(0,s.v9)(c),t=(0,s.I0)();return(0,h.jsx)("div",{children:(0,h.jsxs)("label",{className:"label",children:["Filter contacts:",(0,h.jsx)("input",{type:"text",value:e,onChange:function(e){t((0,b.T)(e.target.value))}})]})})},v=n(2639),j=function(){var e=(0,s.I0)(),t=(0,s.v9)(i),n=(0,s.v9)(d);return(0,r.useEffect)((function(){e((0,o.yF)())}),[e]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(f,{}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(x,{}),t&&(0,h.jsx)(v.Z,{}),n&&(0,h.jsx)("p",{className:"error",children:n}),!t&&!n&&(0,h.jsx)(p,{})]})}}}]);
//# sourceMappingURL=314.920df90e.chunk.js.map
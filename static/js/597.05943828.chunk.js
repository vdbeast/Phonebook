"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{9597:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(2791),a=t(9439),o=t(9434),u=t(2479),i=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n},c=function(e){return e.phonebook.contacts},l=function(e){return e.filter.filter},s=function(e){return e.phonebook.isLoading},m=function(e){return e.phonebook.error},f=t(3874),d=t(142),h="ContactForm_input_wrapper__U443b",v=t(184),p=function(){var e=(0,o.I0)(),n=(0,r.useState)(""),t=(0,a.Z)(n,2),l=t[0],s=t[1],m=(0,r.useState)(""),p=(0,a.Z)(m,2),x=p[0],b=p[1],j=(0,o.v9)(c);return(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault(),j.find((function(e){return e.name===l}))?alert("Contact already exists"):(e((0,u.uK)({id:i(),name:l,number:x})),s(""),b(""))},children:[(0,v.jsxs)("div",{className:h,children:[(0,v.jsx)(f.Z,{margin:"normal",required:!0,type:"text",value:l,label:"Name",onChange:function(e){return s(e.target.value)}}),(0,v.jsx)(f.Z,{margin:"normal",required:!0,type:"tel",value:x,label:"Number",onChange:function(e){return b(e.target.value)}})]}),(0,v.jsx)(d.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add Contact"})]})},x=function(e){var n=e.contact,t=e.onDelete;return(0,v.jsxs)("li",{children:[n.name,": ",n.number,(0,v.jsx)("button",{className:"delete_btn",onClick:function(){return t(n.id)},children:"Delete"})]})},b=function(){var e=(0,o.v9)(c),n=(0,o.v9)(l),t=(0,o.I0)(),a=(0,r.useCallback)((function(e){t((0,u.GK)(e))}),[t]),i=e.filter((function(e){return e.name.toLowerCase().includes(n)}));return(0,v.jsx)("ol",{children:i.map((function(e){return(0,v.jsx)(x,{contact:e,onDelete:a},e.id)}))})},j=t(1819),g=function(){var e=(0,o.I0)();return(0,v.jsx)("div",{children:(0,v.jsx)(f.Z,{margin:"normal",fullWidth:!0,id:"query",label:"Search name",name:"name",autoComplete:"name",autoFocus:!0,onChange:function(n){e((0,j.T)(n.target.value))}})})},_=t(2639),C="ContactPage_container__2go0r",k="ContactPage_phonebook_title__Bh77G",y=function(){var e=(0,o.I0)(),n=(0,o.v9)(s),t=(0,o.v9)(m);return(0,r.useEffect)((function(){e((0,u.yF)())}),[e]),(0,v.jsxs)("div",{className:C,children:[(0,v.jsx)("h1",{className:k,children:"Phonebook"}),(0,v.jsx)(p,{}),(0,v.jsx)("h2",{className:k,children:"Contact List"}),(0,v.jsx)(g,{}),n&&(0,v.jsx)(_.Z,{}),t&&(0,v.jsx)("p",{className:"error",children:t}),!n&&!t&&(0,v.jsx)(b,{})]})}}}]);
//# sourceMappingURL=597.05943828.chunk.js.map
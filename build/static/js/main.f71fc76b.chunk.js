(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(31),s=n.n(r),j=(n(48),n(8)),a=n(10),b=n.n(a),o=n(11),i=n(5),l=n(12),u=n.n(l),O=n(1);var d=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(i.a)(s,2),l=a[0],d=a[1],x=function(){var e=Object(o.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("https://student-to-mentor.herokuapp.com/mentor",{name:n,courseHandling:l});case 2:console.log(n+" "+l);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Create Mentor"}),Object(O.jsx)("label",{children:"Name"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){r(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:"courseHandling"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){d(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:x,children:"Add"}),Object(O.jsx)(j.b,{to:"/",children:Object(O.jsx)("button",{children:"Back"})})]})};var x=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(i.a)(s,2),l=a[0],d=a[1],x=function(){var e=Object(o.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("https://student-to-mentor.herokuapp.com/student",{name:n,courseJoined:l});case 2:console.log(n+" "+l);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Create Student"}),Object(O.jsx)("label",{children:"Name"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){r(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:"courseJoined"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",onChange:function(e){d(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:x,children:"Add"}),Object(O.jsx)(j.b,{to:"/",children:Object(O.jsx)("button",{children:"Back"})})]})},h=n(78);var p=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)(Object(o.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://student-to-mentor.herokuapp.com/");case 3:t=e.sent,console.log(t),r(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Welcome to create Student & Mentor"}),Object(O.jsx)(j.b,{to:"/mentor",children:Object(O.jsx)("button",{children:" Create Mentor"})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(j.b,{to:"/student",children:Object(O.jsx)("button",{children:" Create Student"})}),Object(O.jsxs)(h.a,{singleLine:!0,children:[Object(O.jsx)(h.a.Header,{children:Object(O.jsxs)(h.a.Row,{children:[Object(O.jsx)(h.a.HeaderCell,{children:"Name"}),Object(O.jsx)(h.a.HeaderCell,{children:"courses"}),Object(O.jsx)(h.a.HeaderCell,{children:"Mentor"})]})}),Object(O.jsx)(h.a.Body,{children:n.map((function(e){return Object(O.jsxs)(h.a.Row,{children:[Object(O.jsx)(h.a.Cell,{children:e.student},1),Object(O.jsx)(h.a.Cell,{children:e.courseJoined},2),Object(O.jsxs)(h.a.Cell,{children:[e.mentor?e.courseJoined===e.courseHandling:"yet to be assigned"," "]},3)]},e._id)}))})]})]})},m=(n(72),n(2));var f=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(m.c,{children:[Object(O.jsx)(m.a,{exact:!0,path:"/",element:Object(O.jsx)(p,{})}),Object(O.jsx)(m.a,{path:"/mentor",element:Object(O.jsx)(d,{})}),Object(O.jsx)(m.a,{path:"/student",element:Object(O.jsx)(x,{})})]})})};n(73);s.a.render(Object(O.jsx)(j.a,{children:Object(O.jsx)(f,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.f71fc76b.chunk.js.map
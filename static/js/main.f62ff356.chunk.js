(this["webpackJsonpstatic-portofolio"]=this["webpackJsonpstatic-portofolio"]||[]).push([[0],{33:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){},54:function(e,c,t){},55:function(e,c,t){},56:function(e,c,t){},57:function(e,c,t){},63:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t(0),a=t.n(s),i=t(23),r=t.n(i),j=(t(33),t(25)),o=t(2);t(34),t(35);var l=function(){return Object(n.jsxs)("div",{className:"banner",children:[Object(n.jsxs)("div",{className:"name",children:[Object(n.jsx)("h5",{children:"nur muhammad husnul"}),Object(n.jsx)("h1",{children:"habib"}),Object(n.jsx)("h5",{children:"yahya"})]}),Object(n.jsx)("div",{className:"middle-line"})]})},d=t(27),h=t(24),u=t.n(h);t(54);var b=function(e){var c=e.project,t=c.title,i=c.description,r=c.link,j=c.language;return Object(s.useEffect)((function(){document.querySelectorAll(".project-card").forEach((function(e){e.className="project-card"}))}),[]),Object(n.jsx)(a.a.Fragment,{children:Object(n.jsx)("div",{className:"cardArea",children:Object(n.jsxs)("div",{className:"project-card hide",children:[Object(n.jsx)("h4",{className:"p-language",children:j}),Object(n.jsx)("h1",{className:"p-title",children:t}),Object(n.jsx)("p",{className:"p-description",children:i}),Object(n.jsx)("h5",{className:"p-link",children:r})]})})})};t(55);var f=function(e){return Object(n.jsx)("div",{className:"cardHolder",children:e.projects.map((function(e){return Object(n.jsx)(b,{project:e})}))})},p=(t(56),function(e){var c=document.createElement("script");c.src=e,c.async=!0,document.body.appendChild(c)});var O=function(){var e=Object(s.useState)([]),c=Object(d.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){u.a.get("https://api.jsonbin.io/b/6002df93e31fbc3bdef45f66/4",{headers:{"secret-key":"$2b$10$EEfsGSaGNPVMfRmz1.zuP.G02OKjb3jv1JWwxXia.bus9E6CTal8m"}}).then((function(e){a(e.data),p("/scripts/cardAnimation.js")})).then((function(){console.log("data loaded")}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"showcase-project-title",children:"Showcased Projects"}),Object(n.jsxs)("div",{className:"cardContainer",children:[Object(n.jsx)(f,{projects:t.slice(0,t.length/2)}),Object(n.jsx)(f,{projects:t.slice(t.length/2)})]})]})};t(57);var m=function(){return Object(n.jsxs)("div",{className:"parent-section",children:[Object(n.jsx)("div",{className:"section section1",children:Object(n.jsx)(l,{})}),Object(n.jsx)("div",{className:"section section2",children:Object(n.jsx)(O,{})})]})};var x=function(){return Object(n.jsx)(j.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(o.a,{exact:!0,path:"/",component:m})})})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,64)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),v()}},[[63,1,2]]]);
//# sourceMappingURL=main.f62ff356.chunk.js.map
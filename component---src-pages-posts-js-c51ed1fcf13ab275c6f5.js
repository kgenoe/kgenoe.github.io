(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),o=a(186),l=a(187),i=a(190);t.default=function(e){var t=e.data;return console.log(s(t)),r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"Projects"}),s(t))};var c="3153649863";function s(e){var t=[];return e.allMarkdownRemark.edges.forEach(function(e){var a=e.node;t.push(r.a.createElement("div",null,r.a.createElement(o.a,{to:"/posts/"+a.fields.slug,activeStyle:{color:"darkGrey"},style:{textDecoration:"none",color:"black"}},r.a.createElement("h2",null,a.frontmatter.title)),r.a.createElement("p",null,a.frontmatter.date," - ",a.excerpt),r.a.createElement("hr",null)))}),t}},185:function(e,t,a){var n;e.exports=(n=a(189))&&n.default||n},186:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(58),l=a.n(o);a.d(t,"a",function(){return l.a});a(185),r.a.createContext({})},187:function(e,t,a){"use strict";var n=a(188),r=a(0),o=a.n(r),l=a(186),i=function(e){return o.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},o.a.createElement(l.a,{to:e.to,activeStyle:{color:"black"},style:{textDecoration:"none",color:"darkGray",margin:"0 0.5rem 0 0"}},e.children))},c=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{marginBottom:"1.45rem"}},o.a.createElement("div",{style:{textAlign:"center",margin:"0 auto",maxWidth:960,padding:"2.5rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(l.a,{to:"/",style:{color:"black",textDecoration:"none"}},t))),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("ul",{style:{listStyle:"none"}},o.a.createElement(i,{to:"/about/"},"ABOUT"),o.a.createElement(i,{to:"/projects/"},"PROJECTS"),o.a.createElement(i,{to:"/contact/"},"CONTACT"))))};c.defaultProps={siteTitle:""};var s=c;a(192),t.a=function(e){var t=e.children,a=n.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{siteTitle:a.site.siteMetadata.title}),o.a.createElement("div",{style:{maxWidth:950,margin:"auto",padding:"3em"}},o.a.createElement("main",null,t)))}},188:function(e){e.exports={data:{site:{siteMetadata:{title:"Kyle Genoe"}}}}},189:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),r=a.n(n),o=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},190:function(e,t,a){"use strict";var n=a(191),r=a(0),o=a.n(r),l=a(193),i=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,c=n.data.site,s=t||c.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},191:function(e){e.exports={data:{site:{siteMetadata:{title:"Kyle Genoe",description:"The personal website of Kyle Genoe.",author:"Kyle Genoe"}}}}}}]);
//# sourceMappingURL=component---src-pages-posts-js-c51ed1fcf13ab275c6f5.js.map
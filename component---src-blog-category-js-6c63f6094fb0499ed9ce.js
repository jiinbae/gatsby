(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{rj7o:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d})),a.d(t,"blogListQuery",(function(){return u}));var r=a("q1tI"),s=a.n(r),n=a("zq6j"),l=a("Wbzz"),c=(a("2hOx"),function(e){return s.a.createElement("div",{className:"w-100 f6 pv3 flex items-center tracked ttu sans-serif justify-around mw5"},s.a.createElement(l.a,{to:"/",className:"dark-gray"},"Home"),s.a.createElement("span",null," > "),s.a.createElement(l.a,{to:e.lastPath,className:"dark-gray"},e.lastName),s.a.createElement("span",null," > "),s.a.createElement("span",{className:"mid-gray"},e.currentPage))}),m=a("9eSz"),o=a.n(m),i=function(e){return s.a.createElement("div",{className:"pv3 flex justify-center items-center flex-wrap"},s.a.createElement(o.a,{className:"w-100 mw6 h-100",fluid:e.fluidImage,alt:""}),s.a.createElement("div",{className:"mw7 pa2 ph4-ns"},s.a.createElement("span",{className:"db f2 display"},s.a.createElement(l.a,{className:"dark-gray no-underline",to:e.slug},e.title)),s.a.createElement("div",{className:"mv3 mb5-ns flex justify-between"},s.a.createElement("div",{className:"db f6 silver ttu tracked sans-serif"},e.date),s.a.createElement("div",{className:"db f6 silver ttu tracked sans-serif"},"TAGGED: ",e.category)),s.a.createElement("div",{className:"serif f4 lh-copy"},e.description)))},p=a("Ibv9");var d=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.posts.edges,t=this.props.data.posts.pageInfo.hasNextPage,a=this.props.pageContext.category;return s.a.createElement(n.a,null,s.a.createElement(p.a,{title:"Posts Tagged "+a+" - Page "+this.props.pageContext.pageNumber}),s.a.createElement("div",{className:"pv5 flex items-center justify-center bg-washed-red"},s.a.createElement("h1",{className:"fw1 tc f2 display"},"Posts Tagged ",a)),s.a.createElement("div",{className:"mw9 center"},s.a.createElement(c,{lastName:a,lastPath:""+a,currentPage:"Page "+this.props.pageContext.pageNumber}),e.map((function(e){var t=e.node;return s.a.createElement(i,{fluidImage:t.frontmatter.postImage.childImageSharp.fluid,slug:t.frontmatter.slug,title:t.frontmatter.title,date:t.frontmatter.date,category:t.frontmatter.category,description:t.frontmatter.metaDescription})})),s.a.createElement("div",{className:"pv5 flex w-100"},t&&s.a.createElement(l.a,{className:"dark-gray sans-serif ttu tracked no-underline",to:this.props.pageContext.nextPage},"Next Page →"))))},r}(s.a.Component),u="3530339935"}}]);
//# sourceMappingURL=component---src-blog-category-js-6c63f6094fb0499ed9ce.js.map
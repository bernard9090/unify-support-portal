_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("nKUr"),o=(n("q1tI"),n("YFqc")),a=n.n(o),c=n("vRNQ"),i=n.n(c),s=n("bgFo"),l=n("/MKj"),u=(n("wRJ9"),"#3989DD");function f(){Object(l.b)();var e=Object(l.c)((function(e){return e.exampleReducer})),t=e.items;e.loading,e.error;return console.log(t),Object(r.jsxs)("div",{className:i.a.container,children:[Object(r.jsx)("h3",{className:"text-header",children:"USSD Portal Compnents"}),Object(r.jsx)("p",{className:"text",children:"This is a normal text"}),Object(r.jsx)(s.e,{inputProps:{placeholder:"Enter name here"},error:!0,errorString:"Enter name",useLabel:!0,label:"Enter name",required:!0}),Object(r.jsx)(s.e,{inputProps:{placeholder:"Enter password here"},error:!0,errorString:"please enter password",useLabel:!0,label:"Password"}),Object(r.jsx)(a.a,{href:"/dashboard/home",children:Object(r.jsx)(s.b,{inverse:!1,textColor:"white",color:u,text:"Dashboard",onClick:function(){},loading:!1})}),Object(r.jsx)(s.b,{style:{width:300,margin:16},inverse:!0,color:u,text:"Loading",textColor:u,loading:!0}),t.map((function(e,t){return Object(r.jsx)("p",{children:e},t)}))]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,_=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=a.Children.only(v),j=g&&"object"===typeof g&&g.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),w=r(x,2),E=w[0],y=w[1],O=a.default.useCallback((function(e){E(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,E]);(0,a.useEffect)((function(){var e=y&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(n,d,p,{locale:r})}),[p,d,y,b,t,n]);var R={ref:O,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,p,_,h,m,b)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var N="undefined"!==typeof b?b:n&&n.locale,L=(0,c.getDomainLocale)(p,N,n&&n.locales,n&&n.domainLocales);R.href=L||(0,c.addBasePath)((0,c.addLocale)(p,N,n&&n.defaultLocale))}return a.default.cloneElement(g,R)};t.default=f},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,o=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){i||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var a=n("q1tI"),c=o(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3,4]]]);
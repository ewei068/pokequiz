(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5568)}])},5240:function(e,t,r){"use strict";var o=(0,r(7294).createContext)();t.Z=o},5568:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var o=r(4924),n=r(828),a=r(5893),i=r(7294),p=r(9008),l=r.n(p),c=r(4298),s=r.n(c);function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var u=["keyOverride"],d={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},m=function(e,t,r){void 0===t&&(t=[]);var o=void 0===r?{}:r,n=o.defaultWidth,a=o.defaultHeight;return t.reduce(function(t,r,o){return t.push(i.createElement("meta",{key:"og:"+e+":0"+o,property:"og:"+e,content:r.url})),r.alt&&t.push(i.createElement("meta",{key:"og:"+e+":alt0"+o,property:"og:"+e+":alt",content:r.alt})),r.secureUrl&&t.push(i.createElement("meta",{key:"og:"+e+":secure_url0"+o,property:"og:"+e+":secure_url",content:r.secureUrl.toString()})),r.type&&t.push(i.createElement("meta",{key:"og:"+e+":type0"+o,property:"og:"+e+":type",content:r.type.toString()})),r.width?t.push(i.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:r.width.toString()})):n&&t.push(i.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:n.toString()})),r.height?t.push(i.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:r.height.toString()})):a&&t.push(i.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:a.toString()})),t},[])},f=function(e){var t,r,o,n,a,p=[];e.titleTemplate&&(d.templateTitle=e.titleTemplate);var l="";e.title?(l=e.title,d.templateTitle&&(l=d.templateTitle.replace(/%s/g,function(){return l}))):e.defaultTitle&&(l=e.defaultTitle),l&&p.push(i.createElement("title",{key:"title"},l));var c=e.noindex||d.noindex||e.dangerouslySetAllPagesToNoIndex,s=e.nofollow||d.nofollow||e.dangerouslySetAllPagesToNoFollow,f="";if(e.robotsProps){var g=e.robotsProps,y=g.nosnippet,k=g.maxSnippet,v=g.maxImagePreview,G=g.maxVideoPreview,b=g.noarchive,w=g.noimageindex,E=g.notranslate,x=g.unavailableAfter;f=(y?",nosnippet":"")+(k?",max-snippet:"+k:"")+(v?",max-image-preview:"+v:"")+(b?",noarchive":"")+(x?",unavailable_after:"+x:"")+(w?",noimageindex":"")+(G?",max-video-preview:"+G:"")+(E?",notranslate":"")}if(c||s?(e.dangerouslySetAllPagesToNoIndex&&(d.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(d.nofollow=!0),p.push(i.createElement("meta",{key:"robots",name:"robots",content:(c?"noindex":"index")+","+(s?"nofollow":"follow")+f}))):p.push(i.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+f})),e.description&&p.push(i.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&p.push(i.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&p.push(i.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){p.push(i.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&p.push(i.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&p.push(i.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&p.push(i.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&p.push(i.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||l)&&p.push(i.createElement("meta",{key:"og:title",property:"og:title",content:(null==(n=e.openGraph)?void 0:n.title)||l})),(null!=(r=e.openGraph)&&r.description||e.description)&&p.push(i.createElement("meta",{key:"og:description",property:"og:description",content:(null==(a=e.openGraph)?void 0:a.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&p.push(i.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var _=e.openGraph.type.toLowerCase();p.push(i.createElement("meta",{key:"og:type",property:"og:type",content:_})),"profile"===_&&e.openGraph.profile?(e.openGraph.profile.firstName&&p.push(i.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&p.push(i.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&p.push(i.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&p.push(i.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===_&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){p.push(i.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&p.push(i.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&p.push(i.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){p.push(i.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===_&&e.openGraph.article?(e.openGraph.article.publishedTime&&p.push(i.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&p.push(i.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&p.push(i.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){p.push(i.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&p.push(i.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){p.push(i.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===_||"video.episode"===_||"video.tv_show"===_||"video.other"===_)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&p.push(i.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&p.push(i.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){p.push(i.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){p.push(i.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&p.push(i.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&p.push(i.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){p.push(i.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&p.push(i.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(d.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(d.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&p.push.apply(p,m("image",e.openGraph.images,{defaultWidth:d.defaultOpenGraphImageWidth,defaultHeight:d.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(d.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(d.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&p.push.apply(p,m("video",e.openGraph.videos,{defaultWidth:d.defaultOpenGraphVideoWidth,defaultHeight:d.defaultOpenGraphVideoHeight})),e.openGraph.audio&&p.push.apply(p,m("audio",e.openGraph.audio)),e.openGraph.locale&&p.push(i.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&p.push(i.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&p.push(i.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,r,o=e.keyOverride,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,u);p.push(i.createElement("meta",h({key:"meta:"+(null!=(t=null!=(r=null!=o?o:n.name)?r:n.property)?t:n.httpEquiv)},n)))}),null!=(o=e.additionalLinkTags)&&o.length&&e.additionalLinkTags.forEach(function(e){var t;p.push(i.createElement("link",h({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),p},g=function(e){return i.createElement(l(),null,f(e))},y=function(e){var t=e.title,r=e.themeColor,o=e.noindex,n=void 0!==o&&o,a=e.nofollow,p=e.robotsProps,l=e.description,c=e.canonical,s=e.openGraph,h=e.facebook,u=e.twitter,d=e.additionalMetaTags,m=e.titleTemplate,y=e.defaultTitle,k=e.mobileAlternate,v=e.languageAlternates,G=e.additionalLinkTags,b=e.useAppDir;return i.createElement(i.Fragment,null,void 0!==b&&b?f({title:t,themeColor:r,noindex:n,nofollow:a,robotsProps:p,description:l,canonical:c,facebook:h,openGraph:s,additionalMetaTags:d,twitter:u,titleTemplate:m,defaultTitle:y,mobileAlternate:k,languageAlternates:v,additionalLinkTags:G}):i.createElement(g,{title:t,themeColor:r,noindex:n,nofollow:a,robotsProps:p,description:l,canonical:c,facebook:h,openGraph:s,additionalMetaTags:d,twitter:u,titleTemplate:m,defaultTitle:y,mobileAlternate:k,languageAlternates:v,additionalLinkTags:G}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g");var k=r(5240);r(5656),r(894);var v=function(e){var t=e.Component,r=e.pageProps,p=(0,n.Z)((0,i.useState)({}),2),c=p[0],h=p[1];return(0,a.jsxs)("div",{children:[(0,a.jsx)(s(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=G-Z821NCJYBE"}),(0,a.jsx)(s(),{id:"google-analytics",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'G-Z821NCJYBE', {\n              page_path: window.location.pathname,\n            });\n          "}}),(0,a.jsxs)(l(),{children:[(0,a.jsx)("meta",{name:"google-site-verification",content:"sjNS_-1SsZyHECFHhJwVwJqgpFtP-q5vZ1we6rUAPKA"}),(0,a.jsx)("link",{rel:"shortcut icon",href:"".concat("/pokequiz","/pokemon.ico")}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",rel:"stylesheet"})]}),(0,a.jsx)(y,{title:"PokeQuiz: Who's That Pokemon?",description:"Machine Learning powered Pokemon Quiz to create the hardest Pokemon Quiz ever! Test your Pokemon knowledge and see how many you can get right!"}),(0,a.jsxs)("div",{className:"background",style:c,children:[(0,a.jsx)(k.Z.Provider,{value:{flashBackground:function(e){h({backgroundColor:e?"#00ff00":"red",transition:"background-color 0.6s ease"});var t=setInterval(function(){h({}),clearInterval(t)},200)}},children:(0,a.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){(0,o.Z)(e,t,r[t])})}return e}({},r))}),(0,a.jsxs)("div",{className:"footer",children:["Made with love by Elvis Wei",(0,a.jsx)("br",{}),(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ewei068/pokequiz",children:"Github"}),"\xa0\xa0--\xa0\xa0",(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/ewei068/",children:"LinkedIn"}),"\xa0\xa0--\xa0\xa0",(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://portosaurus.github.io/ewei068/",children:"Portfolio"}),(0,a.jsx)("br",{}),"Inspired by ",(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pokemoncries.com/",children:"Pokemon Cries"})]})]})]})}},894:function(){},5656:function(){},9008:function(e,t,r){e.exports=r(3121)},4298:function(e,t,r){e.exports=r(3573)},943:function(e,t,r){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}r.d(t,{Z:function(){return o}})},4924:function(e,t,r){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return o}})},3375:function(e,t,r){"use strict";function o(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(t,{Z:function(){return o}})},828:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var o=r(3375),n=r(1566);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,o.Z)(e,t)||(0,n.Z)(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var o=r(943);function n(e,t){if(e){if("string"==typeof e)return(0,o.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return(0,o.Z)(e,t)}}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);
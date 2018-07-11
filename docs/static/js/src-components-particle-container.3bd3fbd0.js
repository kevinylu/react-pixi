(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/ParticleContainer.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),o=n.n(t),r=n("./node_modules/@mdx-js/tag/dist/index.js"),p=n("./node_modules/docz/dist/index.m.js"),m=n("./src/stage/index.js"),s=n("./node_modules/pixi.js/lib/index.js"),l=n("./src/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function d(e,a){return!a||"object"!==c(a)&&"function"!==typeof a?g(e):a}function u(e,a){return(u=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function a(){var e,n,t;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var o=arguments.length,r=new Array(o),p=0;p<o;p++)r[p]=arguments[p];return d(t,(n=t=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))),Object.defineProperty(g(t),"state",{configurable:!0,enumerable:!0,writable:!0,value:{loaded:!1}}),Object.defineProperty(g(t),"loader",{configurable:!0,enumerable:!0,writable:!0,value:null}),n))}var n,t,r;return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&u(e,a)}(a,o.a.PureComponent),n=a,(t=[{key:"componentDidMount",value:function(){var e=this;this.loader=new s.loaders.Loader,this.loader.add("https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png").load(function(){e.setState({loaded:!0})})}},{key:"componentWillUnmount",value:function(){this.loader&&this.loader.destroy()}},{key:"render",value:function(){return this.state.loaded?o.a.createElement(l.f,this.props):null}}])&&i(n.prototype,t),r&&i(n,r),a}();a.default=function(e){var a=e.components;return o.a.createElement(r.MDXTag,{name:"wrapper",components:a},o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"particlecontainer"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#particlecontainer"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"ParticleContainer"),o.a.createElement(r.MDXTag,{name:"p",components:a},"NOTE: Writing PIXI apps in vanilla js (the imperative way) is always more performant.\nThe React reconciler needs to pass and validate props which can be costly when dealing with lots of components. "),o.a.createElement(r.MDXTag,{name:"blockquote",components:a},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"blockquote"},"Most of the time you won't notice any difference though (rendering 1000 sprites in a particle container is still fast).")),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"props"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#props"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Props"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://pixijs.download/dev/docs/PIXI.particles.ParticleContainer.html"}},"http://pixijs.download/dev/docs/PIXI.particles.ParticleContainer.html")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"maxsize"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{"aria-hidden":!0,href:"#maxsize"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"maxSize"),o.a.createElement(r.MDXTag,{name:"p",components:a},"The maximum number of particles that can be rendered by the container. Affects size of allocated buffers.\nThis will only affect the component once and will be applied during creation."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"properties"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{"aria-hidden":!0,href:"#properties"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"http://pixijs.download/dev/docs/PIXI.particles.ParticleContainer.html#ParticleContainer"}},"properties")),o.a.createElement(r.MDXTag,{name:"p",components:a},"The properties of children that should be uploaded to the gpu and applied."),o.a.createElement(r.MDXTag,{name:"table",components:a},o.a.createElement(r.MDXTag,{name:"thead",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Prop"),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Default Value"),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"vertices ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"boolean")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"When true, vertices be uploaded and applied. if sprite's ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"scale/anchor/trim/frame/orig")," is dynamic, please set true.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"position ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"boolean")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"true"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"When true, position be uploaded and applied.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"rotation ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"boolean")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"When true, rotation be uploaded and applied.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"uvs ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"boolean")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"When true, uvs be uploaded and applied.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"tint ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"boolean")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"When true, alpha and tint be uploaded and applied.")))),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"batchsize"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{"aria-hidden":!0,href:"#batchsize"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"batchSize"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Number of particles per batch. If less than ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"maxSize"),", it uses maxSize instead."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"autoresize"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{"aria-hidden":!0,href:"#autoresize"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"autoResize"),o.a.createElement(r.MDXTag,{name:"p",components:a},"If true, container allocates more batches in case there are more than ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"maxSize")," particles."),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"usage"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#usage"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Usage"),o.a.createElement(p.d,{__code:function(e){return e&&o.a.createElement(e.pre,{className:"react-prism language-jsx"},o.a.createElement("code",null,'<Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>\n  <ParticleContainer position={[150, 150]} properties={{ position: true }}>\n    <Sprite\n      anchor={0.5}\n      x={-75}\n      y={-75}\n      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"\n    />\n    <Sprite\n      anchor={0.5}\n      x={0}\n      y={0}\n      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"\n    />\n    <Sprite\n      anchor={0.5}\n      x={75}\n      y={75}\n      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"\n    />\n  </ParticleContainer>\n</Stage>'))}},o.a.createElement(m.a,{width:300,height:300,options:{backgroundColor:15659509}},o.a.createElement(h,{position:[150,150],properties:{position:!0}},o.a.createElement(l.h,{anchor:.5,x:-75,y:-75,image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"}),o.a.createElement(l.h,{anchor:.5,x:0,y:0,image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"}),o.a.createElement(l.h,{anchor:.5,x:75,y:75,image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"})))),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"example"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#example"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Example"),o.a.createElement("iframe",{height:600,scrolling:"no",title:"Container",src:"//codepen.io/inlet/embed/db5dc6ecfb42bbf8dd5322a1015dff70/?height=600&theme-id=33987&default-tab=result&embed-version=2",frameBorder:"no",allowtransparency:"true",allowFullScreen:"true",style:{width:"100%"}}))}}}]);
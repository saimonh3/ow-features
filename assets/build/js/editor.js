!function(r){var n={};function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=r,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=23)}([function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.primitives}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t){!function(){e.exports=this.wp.date}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t,r){e.exports=r(17)()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var c={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"==n||"number"==n)e.push(r);else if(Array.isArray(r)&&r.length){var a=l.apply(null,r);a&&e.push(a)}else if("object"==n)for(var o in r)c.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},function(e,t){!function(){e.exports=this.wp.url}()},function(e,t){!function(){e.exports=this.wp.coreData}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e};function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=l(r(19));l(r(20));function l(e){return e&&e.__esModule?e:{default:e}}var i=0,s=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,c.default.Component),a(u,[{key:"createForm",value:function(){var r=this;if(window.hbspt){if(null===this.el)return;var e=n({},this.props);delete e.loading,delete e.onSubmit,delete e.onReady;var t=n({},e,{target:"#"+this.el.getAttribute("id"),onFormSubmit:function(e){var t=e.serializeArray();r.props.onSubmit(t)}});return window.hbspt.forms.create(t),!0}setTimeout(this.createForm,1)}},{key:"loadScript",value:function(){var e=this,t=document.createElement("script");t.defer=!0,t.onload=function(){e.createForm(),e.findFormElement()},t.src="//js.hsforms.net/forms/v2.js",document.head.appendChild(t)}},{key:"findFormElement",value:function(){var e;null!==this.el&&((e=this.el.querySelector("iframe"))?(this.setState({loaded:!0}),this.props.onReady&&this.props.onReady(e)):setTimeout(this.findFormElement,1))}},{key:"componentDidMount",value:function(){window.hbspt||this.props.noScript?(this.createForm(),this.findFormElement()):this.loadScript()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var t=this;return c.default.createElement("div",null,c.default.createElement("div",{ref:function(e){return t.el=e},id:"reactHubspotForm"+this.id,style:{display:this.state.loaded?"block":"none"}}),!this.state.loaded&&this.props.loading)}}]),u);function u(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));return t.state={loaded:!1},t.id=i++,t.createForm=t.createForm.bind(t),t.findFormElement=t.findFormElement.bind(t),t}t.default=s,e.exports=t.default},,function(e,t,r){},function(e,t,r){"use strict";var l=r(18);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,a,o){if(o!==l){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}var r={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return r.PropTypes=r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){!function(){e.exports=this.React}()},function(e,t){!function(){e.exports=this.ReactDOM}()},,,function(e,t,r){"use strict";r.r(t);r(16);var n=r(4),S=r(0),a=[{name:"no-border",label:Object(S.__)("No Border","ow-features"),isDefault:!0}];wp.domReady(function(){a.forEach(function(e){return Object(n.registerBlockStyle)("core/quote",a)}),Object(n.registerBlockStyle)("core/list",{name:"arrow",label:Object(S.__)("Arrow","ow-features")}),Object(n.unregisterBlockStyle)("core/quote","large")});function d(){return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"color: blue",width:"57",height:"79",viewBox:"0 0 57 79"},React.createElement("path",{fill:"#0058fe",d:"M30.922 67.453L71.453 39.545 71.453 38.362 30.922 10.453 30.922 15.581 57.154 36.882 -6.453 36.882 -6.453 41.024 57.154 41.024 30.922 62.325z",transform:"translate(-153 -3565) translate(149 3565.693) matrix(0 -1 -1 0 71.453 71.453)"}))}function p(){return React.createElement("svg",{width:"66px",height:"13px",viewBox:"0 0 66 13",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},React.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",strokeLinecap:"square"},React.createElement("g",{id:"components/learnmore",transform:"translate(-143.000000, -7.000000)",stroke:"#000000"},React.createElement("g",{id:"Group-22",transform:"translate(0.000000, -2.000000)"},React.createElement("g",{id:"Group",transform:"translate(144.000000, 9.000000)"},React.createElement("g",{transform:"translate(32.500000, 6.500000) scale(-1, 1) translate(-32.500000, -6.500000) "},React.createElement("line",{x1:"7",y1:"13",x2:"0.5",y2:"6.5",id:"Line-Copy"}),React.createElement("line",{x1:"7",y1:"7",x2:"0.5",y2:"0.5",id:"Line-Copy-3",transform:"translate(3.500000, 3.500000) scale(1, -1) translate(-3.500000, -3.500000) "}),React.createElement("line",{x1:"64.6734694",y1:"6.5",x2:"1.32653061",y2:"6.5",id:"Line"})))))))}var T=r(3),N=r(2),A=r(1),o=r(11),f=r.n(o);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e){var t=e.attributes,r=e.setAttributes,n=Object(T.useBlockProps)(),a=t.title,o=t.description,c=t.showTopBar,l=t.showIcon,i=t.arrowUpward,s=React.createElement(T.InspectorControls,{key:"hero-inspector"},React.createElement(A.Panel,null,React.createElement(A.PanelBody,{title:Object(S.__)("Hero number settings","ow-features"),initialOpen:!0},React.createElement(A.PanelRow,null,React.createElement(A.TextControl,{label:Object(S.__)("Title","ow-features"),value:a,onChange:function(e){return r({title:e})}})),React.createElement(A.PanelRow,null,React.createElement(A.TextControl,{label:Object(S.__)("Description","ow-features"),value:o,onChange:function(e){return r({description:e})}})),React.createElement(A.PanelRow,null,React.createElement(A.ToggleControl,{label:Object(S.__)("Toggle Top Bar","ow-features"),checked:c,onChange:function(){r({showTopBar:!c})}})),React.createElement(A.PanelRow,null,React.createElement(A.ToggleControl,{label:Object(S.__)("Toggle Icon","ow-features"),checked:l,onChange:function(){r({showIcon:!l})}})),React.createElement(A.PanelRow,null,React.createElement(A.ToggleControl,{label:Object(S.__)("Toggle Arrow Direction","ow-features"),checked:i,onChange:function(){r({arrowUpward:!i})}}))))),u=f()({title:!0,"border-top":c,"arrow-downward":!i});return React.createElement(N.Fragment,null,s,React.createElement("div",m({key:"hero-number"},n),React.createElement("div",{className:u},l&&React.createElement(d,null),a),React.createElement("p",{className:"description"},o)))}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}Object(n.registerBlockType)("ow-feature-block/hero-numbers",{apiVersion:2,title:Object(S.__)("Hero Numbers","ow-features"),description:Object(S.__)("Set your hero numbers","ow-features"),icon:"money-alt",category:"open-web",example:{},attributes:{title:{type:"string",default:Object(S.__)("23.24%","ow-features")},description:{type:"string",default:Object(S.__)("Lift in time on site","ow-features")},showTopBar:{type:"boolean",default:!0},showIcon:{type:"boolean",default:!0},arrowUpward:{type:"boolean",default:!0}},edit:c});function i(e){var t=e.attributes,r=e.setAttributes,n=Object(T.useBlockProps)(),a=t.title,o=t.description,c=t.makeSquare;return[React.createElement(T.InspectorControls,{key:"info-inspector"},React.createElement(A.Panel,null,React.createElement(A.PanelBody,{title:Object(S.__)("Info Box Settings","ow-features"),initialOpen:!0},React.createElement(A.PanelRow,null,React.createElement(A.TextControl,{label:Object(S.__)("Title","ow-features"),value:a,onChange:function(e){return r({title:e})}})),React.createElement(A.PanelRow,null,React.createElement(A.TextareaControl,{label:Object(S.__)("Description","ow-features"),value:o,onChange:function(e){return r({description:e})}})),React.createElement(A.PanelRow,null,React.createElement(A.ToggleControl,{label:Object(S.__)("Make Square Shape","ow-features"),checked:c,onChange:function(){r({makeSquare:!c})}}))))),React.createElement("div",l({key:"info-box"},n),!c&&React.createElement("div",{className:"outer-div"}),React.createElement("div",{className:c?"inner-div square-shape":"inner-div"},React.createElement("div",{className:"title"},a),React.createElement("p",{className:"description"},o)))]}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e){var t=e.attributes,r=T.useBlockProps.save(),n=t.title,a=t.description,o=t.makeSquare;return React.createElement("div",s({key:"info-box"},r),!o&&React.createElement("div",{className:"outer-div"}),React.createElement("div",{className:o?"inner-div square-shape":"inner-div"},React.createElement("div",{className:"title"},n),React.createElement("p",{className:"description"},a)))}Object(n.registerBlockType)("ow-feature-block/info-box",{apiVersion:2,title:Object(S.__)("Info Box","ow-features"),description:Object(S.__)("Info Box","ow-features"),icon:"info",category:"open-web",example:{},attributes:{title:{type:"string",source:"html",selector:".title",default:Object(S.__)("Quality Conversations","ow-features")},description:{type:"string",source:"html",selector:".description",default:Object(S.__)("High-quality, civil discussions that attract users and create value.","ow-features")},makeSquare:{type:"boolean",default:!1}},edit:i,save:u});function b(e){var t=e.addMediaHandler,r=e.removeMediaHandler,n=e.media,a=e.mediaId,o=e.isIcon?Object(S.__)("icon","ow-features"):Object(S.__)("image","ow-features");return React.createElement("div",{className:"editor-post-featured-image"},React.createElement(T.MediaUploadCheck,null,React.createElement(T.MediaUpload,{onSelect:t,value:a,allowedTypes:["image"],render:function(e){var t=e.open;return React.createElement(A.Button,{className:0===a?"editor-post-featured-image__toggle":"editor-post-featured-image__preview",onClick:t},!a&&Object(S.sprintf)(Object(S.__)("Choose an %s","ow-features"),o),void 0!==n&&React.createElement(A.ResponsiveWrapper,{naturalWidth:n.media_details.width,naturalHeight:n.media_details.height},React.createElement("img",{src:n.source_url})))}})),0!==a&&React.createElement(T.MediaUploadCheck,null,React.createElement(T.MediaUpload,{title:Object(S.sprintf)(Object(S.__)("Replace %s","ow-features"),o),value:a,onSelect:t,allowedTypes:["image"],render:function(e){var t=e.open;return React.createElement(A.Button,{onClick:t,isSecondary:!0},Object(S.sprintf)(Object(S.__)("Replace %s","ow-features"),o))}})),0!==a&&React.createElement(T.MediaUploadCheck,null,React.createElement(A.Button,{onClick:r,isLink:!0,isDestructive:!0},Object(S.sprintf)(Object(S.__)("Remove %s","ow-features"),o))))}var F=r(10);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e){var t=e.attributes,r=T.useBlockProps.save(),n=t.title,a=t.description,o=t.linkTitle,c=t.linkUrl,l=t.mediaUrl,i=t.iconUrl;return React.createElement("div",r,i&&React.createElement("div",{className:"featured-info-icon"},React.createElement("img",{src:i,alt:"image alt"})),React.createElement("div",{className:"featured-info-block"},React.createElement("div",{className:"featured-info-block__left featured-info-block__item"},React.createElement("h2",{className:"featured-info-block__left__title"},n),React.createElement("p",{className:"featured-info-block__left__desc"},a),React.createElement("a",{href:c,className:"featured-info-block__left__link"},o,React.createElement(p,null))),l&&React.createElement("div",{className:"featured-info-block__right featured-info-block__item"},React.createElement("img",{src:l,alt:"image alt"}))))}var h,_,v,w,R=Object(F.withSelect)(function(e,t){return{image:t.attributes.mediaId?e("core").getMedia(t.attributes.mediaId):void 0,icon:t.attributes.iconId?e("core").getMedia(t.attributes.iconId):void 0}})(function(e){var t=e.attributes,r=e.setAttributes,n=e.image,a=e.icon,o=Object(T.useBlockProps)(),c=t.title,l=t.description,i=t.mediaId,s=t.mediaUrl,u=t.iconId,d=t.iconUrl,f=t.linkTitle,m=t.linkUrl;return[React.createElement(T.InspectorControls,{key:"featured-info-inspector"},React.createElement(A.Panel,null,React.createElement(A.PanelBody,{title:Object(S.__)("Featured Info Settings","ow-features"),initialOpen:!0},React.createElement(A.PanelRow,null,React.createElement(A.TextControl,{label:Object(S.__)("Title","ow-features"),value:c,onChange:function(e){return r({title:e})}})),React.createElement(A.PanelRow,null,React.createElement(A.TextareaControl,{label:Object(S.__)("Description","ow-features"),value:l,onChange:function(e){return r({description:e})}})),React.createElement(A.PanelRow,null,React.createElement(A.TextControl,{label:Object(S.__)("Link Title","ow-features"),value:f,onChange:function(e){return r({linkTitle:e})}})),React.createElement(A.PanelRow,null,React.createElement(A.TextControl,{label:Object(S.__)("Link URL","ow-features"),value:m,onChange:function(e){return r({linkUrl:e})}}))),React.createElement(A.PanelBody,{title:Object(S.__)("Featured Image","ow-features"),initialOpen:!1},React.createElement(A.PanelRow,null,React.createElement(b,{addMediaHandler:function(e){r({mediaId:e.id,mediaUrl:e.url})},removeMediaHandler:function(){r({mediaId:0,mediaUrl:""})},media:n,mediaId:i}))),React.createElement(A.PanelBody,{title:Object(S.__)("Featured Icon","ow-features"),initialOpen:!1},React.createElement(A.PanelRow,null,React.createElement(b,{addMediaHandler:function(e){r({iconId:e.id,iconUrl:e.url})},removeMediaHandler:function(){r({iconId:0,iconUrl:""})},media:a,mediaId:u,isIcon:!0}))))),React.createElement("div",g({key:"featured-info"},o),d&&React.createElement("div",{className:"featured-info-icon"},React.createElement("img",{src:d,alt:"image alt"})),React.createElement("div",{className:"featured-info-block"},React.createElement("div",{className:"featured-info-block__left featured-info-block__item"},React.createElement("h2",{className:"featured-info-block__left__title"},c),React.createElement("p",{className:"featured-info-block__left__desc"},l),React.createElement("a",{href:m,className:"featured-info-block__left__link"},f,React.createElement(p,null))),s&&React.createElement("div",{className:"featured-info-block__right featured-info-block__item"},React.createElement("img",{src:s,alt:"image alt"}))))]}),O=null===(h=window)||void 0===h||null===(_=h.owFeatures)||void 0===_?void 0:_.featuredInfoIcon,E=null===(v=window)||void 0===v||null===(w=v.owFeatures)||void 0===w?void 0:w.featuredInfoImage;Object(n.registerBlockType)("ow-feature-block/featured-info",{apiVersion:2,title:Object(S.__)("Featured Info","ow-features"),description:Object(S.__)("Featured Info","ow-features"),icon:"info-outline",category:"open-web",example:{},attributes:{title:{type:"string",source:"html",selector:".featured-info-block__left__title",default:Object(S.__)("Featured Info","ow-features")},description:{type:"string",source:"html",selector:".featured-info-block__left__desc",default:Object(S.__)("Move from readers to registered users. Leverage best-in-class social experiences, registration funnels, and context-driven monetization while building first-party data to future-proof your businesses.","ow-features")},mediaId:{type:"number",default:0},mediaUrl:{type:"string",default:E},iconId:{type:"number",default:0},iconUrl:{type:"string",default:O},linkUrl:{type:"string",default:""},linkTitle:{type:"string",default:Object(S.__)("Learn more about Experience","ow-features")}},edit:R,save:y});function B(e){var t=e.post,r=e.renderFeaturedImage,n=e.displayCategory,a=e.displayPostContent,o=e.addLinkToFeaturedImage,c=e.displayPostDate,l=e.currentAuthor,i=e.displayAuthor,s=e.displayPostContentRadio,u=e.categoryNames,d=e.titleTrimmed,f=e.featuredImage,m=e.postExcerpt,p=e.dateFormat;return React.createElement("article",{className:"wp-block-ow-feature-block-recent-posts__item"},r&&React.createElement("figure",{className:"wp-block-ow-feature-block-recent-posts__header"},o?React.createElement("a",{href:t.link,rel:"noreferrer noopener"},f):f),React.createElement("div",{className:"wp-block-ow-feature-block-recent-posts__content"},n&&React.createElement("p",{className:"wp-block-ow-feature-block-recent-posts__category"},u),React.createElement("a",{href:t.link,rel:"noreferrer noopener",className:"wp-block-ow-feature-block-recent-posts__title"},d),a&&"excerpt"===s&&React.createElement("div",{className:"wp-block-ow-feature-block-recent-posts__excerpt"},m),a&&"full_post"===s&&React.createElement("div",{className:"wp-block-ow-feature-block-recent-posts__full-content"},React.createElement(N.RawHTML,{key:"html"},t.content.raw.trim())),React.createElement("div",{className:"wp-block-ow-feature-block-recent-posts__footer"},c&&t.date_gmt&&React.createElement("time",{dateTime:Object(M.format)("c",t.date_gmt),className:"wp-block-ow-feature-block-recent-posts__date"},Object(M.dateI18n)(p,t.date_gmt)),i&&l&&React.createElement("p",{className:"wp-block-ow-feature-block-recent-posts__author"},"By ",React.createElement("strong",null,l.name)))))}var L=r(6),M=r(7),j=r(8),D=r.n(j),U=r(12),k=r(5),H=Object(N.createElement)(k.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(N.createElement)(k.Path,{d:"M10.44 3.02l1.82-1.82 6.36 6.35-1.83 1.82c-1.05-.68-2.48-.57-3.41.36l-.75.75c-.92.93-1.04 2.35-.35 3.41l-1.83 1.82-2.41-2.41-2.8 2.79c-.42.42-3.38 2.71-3.8 2.29s1.86-3.39 2.28-3.81l2.79-2.79L4.1 9.36l1.83-1.82c1.05.69 2.48.57 3.4-.36l.75-.75c.93-.92 1.05-2.35.36-3.41z"})),q=r(13);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function x(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function V(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach(function(e){G(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e){var t=e.attributes,r=e.setAttributes,n=t.headline,s=t.postsToShow,u=t.order,d=t.orderBy,f=t.categories,m=t.selectedAuthor,p=t.displayFeaturedImage,b=t.displayPostContentRadio,g=t.displayPostContent,y=t.displayPostDate,h=t.displayCategory,_=t.displayAuthor,v=(t.columns,t.excerptLength),w=t.featuredImageSizeSlug,R=t.addLinkToFeaturedImage,a=Object(F.useSelect)(function(e){var t=e(q.store),r=t.getEntityRecords,n=t.getMedia,a=(0,e(T.store).getSettings)(),o=a.imageSizes,c=a.imageDimensions,l=f&&0<f.length?f.map(function(e){return e.id}):[],i=r("postType","post",Object(L.pickBy)({categories:l,author:m,order:u,orderby:d,per_page:s},function(e){return!Object(L.isUndefined)(e)}));return{defaultImageWidth:Object(L.get)(c,[w,"width"],0),defaultImageHeight:Object(L.get)(c,[w,"height"],0),imageSizeOptions:o.filter(function(e){return"full"!==e.slug}).map(function(e){var t=e.name;return{value:e.slug,label:t}}),latestPosts:Array.isArray(i)?i.map(function(e){if(!e.featured_media)return e;var t=n(e.featured_media),r={url:Object(L.get)(t,["media_details","sizes",w,"source_url"],null)||Object(L.get)(t,"source_url",null),alt:null==t?void 0:t.alt_text};return V(V({},e),{},{featuredImageInfo:r})}):i}},[w,s,u,d,f,m]).latestPosts,o=W(Object(N.useState)([]),2),c=o[0],l=o[1],i=W(Object(N.useState)([]),2),O=i[0],E=i[1],j=c.reduce(function(e,t){return V(V({},e),{},G({},t.name,t))},{}),k=Object(N.useRef)();Object(N.useEffect)(function(){return k.current=!0,D()({path:Object(U.addQueryArgs)("/wp/v2/categories",Q)}).then(function(e){k.current&&l(e)}).catch(function(){k.current&&l([])}),D()({path:Object(U.addQueryArgs)("/wp/v2/users",$)}).then(function(e){k.current&&E(e)}).catch(function(){k.current&&E([])}),function(){k.current=!1}},[]);var P=Object(M.__experimentalGetSettings)().formats.date,x=React.createElement(T.InspectorControls,null,React.createElement(A.PanelBody,{title:Object(S.__)("Post content settings"),initialOpen:!0},React.createElement(A.ToggleControl,{label:Object(S.__)("Post content"),checked:g,onChange:function(e){return r({displayPostContent:e})}}),g&&React.createElement(A.RadioControl,{label:Object(S.__)("Show:"),selected:b,options:[{label:Object(S.__)("Excerpt"),value:"excerpt"},{label:Object(S.__)("Full post"),value:"full_post"}],onChange:function(e){return r({displayPostContentRadio:e})}}),g&&"excerpt"===b&&React.createElement(A.RangeControl,{label:Object(S.__)("Max number of words in excerpt"),value:v,onChange:function(e){return r({excerptLength:e})},min:10,max:100})),React.createElement(A.PanelBody,{title:Object(S.__)("Post meta settings")},React.createElement(A.ToggleControl,{label:Object(S.__)("Display author name"),checked:_,onChange:function(e){return r({displayAuthor:e})}}),React.createElement(A.ToggleControl,{label:Object(S.__)("Display post date"),checked:y,onChange:function(e){return r({displayPostDate:e})}}),React.createElement(A.ToggleControl,{label:Object(S.__)("Display post category"),checked:h,onChange:function(e){return r({displayCategory:e})}})),React.createElement(A.PanelBody,{title:Object(S.__)("Featured image settings")},React.createElement(A.ToggleControl,{label:Object(S.__)("Display featured image"),checked:p,onChange:function(e){return r({displayFeaturedImage:e})}}),p&&React.createElement(A.ToggleControl,{label:Object(S.__)("Add link to featured image"),checked:R,onChange:function(e){return r({addLinkToFeaturedImage:e})}})),React.createElement(A.PanelBody,{title:Object(S.__)("Sorting and filtering")},React.createElement(A.QueryControls,z({order:u,orderBy:d},{numberOfItems:s,onOrderChange:function(e){return r({order:e})},onOrderByChange:function(e){return r({orderBy:e})},onNumberOfItemsChange:function(e){return r({postsToShow:e})},categorySuggestions:j,onCategoryChange:function(e){if(!e.some(function(e){return"string"==typeof e&&!j[e]})){var t=e.map(function(e){return"string"==typeof e?j[e]:e});if(Object(L.includes)(t,null))return!1;r({categories:t})}},selectedCategories:f,onAuthorChange:function(e){return r({selectedAuthor:""!==e?Number(e):void 0})},authorList:O,selectedAuthorId:m})))),C=Object(T.useBlockProps)();if(!(Array.isArray(a)&&a.length))return React.createElement("div",C,x,React.createElement(A.Placeholder,{icon:H,label:Object(S.__)("Recent Posts")},Array.isArray(a)?Object(S.__)("No posts found."):React.createElement(A.Spinner,null)));var I=a.length>s?a.slice(0,s):a;return React.createElement("div",null,x,React.createElement("div",C,React.createElement(T.RichText,{className:"wp-block-ow-feature-block-recent-posts__headline",tagName:"h1",value:n,allowedFormats:["core/bold","core/italic"],onChange:function(e){return r({headline:e})}}),React.createElement("div",{className:"wp-block-ow-feature-block-recent-posts__items"},I.map(function(t,e){var r=Object(L.invoke)(t,["title","rendered","trim"]),n=(n=null==t?void 0:t.category_names)&&n.slice(0,2).join(", "),a=t.excerpt.rendered,o=document.createElement("div");o.innerHTML=a,a=o.textContent||o.innerText||"";var c=v<a.trim().split(" ").length&&""===t.excerpt.raw?React.createElement(React.Fragment,null,a.trim().split(" ",v).join(" "),Object(S.__)(" … "),React.createElement("a",{href:t.link,rel:"noopener noreferrer"},Object(S.__)("Read more","ow-features"))):a,l=O.find(function(e){return e.id===t.author}),i=t.featuredImageInfo,s=(i=void 0===i?{}:i).url,u=i.alt,d=!(!p||!s),f=d?React.createElement("img",{src:s,alt:u,height:"320",width:"600"}):{};return React.createElement(B,{key:e,post:t,renderFeaturedImage:d,displayCategory:h,displayPostContent:g,addLinkToFeaturedImage:R,displayPostDate:y,currentAuthor:l,displayAuthor:_,displayPostContentRadio:b,categoryNames:n,titleTrimmed:r,featuredImage:f,postExcerpt:c,dateFormat:P})}))))}var Q={per_page:-1},$={per_page:-1};function I(e,t){if(null==e)return{};var r,n=function(e,t){if(null==e)return{};for(var r,n={},a=Object.keys(e),o=0;o<a.length;o++)r=a[o],0<=t.indexOf(r)||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),o=0;o<a.length;o++)r=a[o],0<=t.indexOf(r)||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r]);return n}function Y(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function J(a){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(o),!0).forEach(function(e){var t,r,n;t=a,n=o[r=e],r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):Y(Object(o)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(o,e))})}return a}Object(n.registerBlockType)("ow-feature-block/recent-posts",{apiVersion:2,title:Object(S.__)("Recent Posts","ow-features"),description:Object(S.__)("Recent Posts","ow-features"),icon:"text-page",category:"open-web",example:{},attributes:{headline:{type:"string",default:Object(S.__)("From the Open Blog","ow-features")},categories:{type:"array",items:{type:"object"}},selectedAuthor:{type:"number"},postsToShow:{type:"number",default:4},displayPostContent:{type:"boolean",default:!1},displayCategory:{type:"boolean",default:!0},displayPostContentRadio:{type:"string",default:"excerpt"},excerptLength:{type:"number",default:55},displayAuthor:{type:"boolean",default:!0},displayPostDate:{type:"boolean",default:!0},order:{type:"string",default:"desc"},orderBy:{type:"string",default:"date"},displayFeaturedImage:{type:"boolean",default:!0},featuredImageSizeSlug:{type:"string",default:"large"},featuredImageSizeWidth:{type:"number",default:null},featuredImageSizeHeight:{type:"number",default:null},addLinkToFeaturedImage:{type:"boolean",default:!0}},edit:C});function K(e){var t=e.icon,r=e.size,n=void 0===r?24:r,a=I(e,["icon","size"]);return Object(N.cloneElement)(t,J({width:n,height:n},a))}var X=Object(N.createElement)(k.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(N.createElement)(k.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})),Z=Object(N.createElement)(k.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(N.createElement)(k.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}));function ee(e){return function(e){if(Array.isArray(e))return te(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return te(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return te(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function re(e){var n=e.testimonials,a=e.setSelectedTestimonials,r=function(e,t){var r=ee(n);r.splice(t,0,r.splice(e,1).pop()),a(r)};return React.createElement("div",{className:"ow-testimonial-block-sort-items"},1<=!n.length?React.createElement("em",null,Object(S.__)("Please select some testimonials first","ow-feature")):React.createElement(N.Fragment,null,n.map(function(e,t){return React.createElement(A.Flex,{className:"ow-testimonial-block-sort-items-item"},React.createElement(A.FlexItem,null,e.author_name),React.createElement(A.FlexItem,null,React.createElement(A.Button,{icon:React.createElement(K,{icon:X}),isSmall:!0,disabled:0===t,onClick:function(){var e;0!==(e=t)&&r(e,e-1)}}),React.createElement(A.Button,{icon:React.createElement(K,{icon:Z}),isSmall:!0,disabled:t===n.length-1,onClick:function(){var e;(e=t)!==n.length-1&&r(e,e+1)}})))})))}function ne(e){var t=e.testimonials;return React.createElement("div",{class:"ow-testimonial-block-slider"},t.map(function(e){return React.createElement("div",{className:"slider-item-wrapper"},React.createElement("div",{className:"slider-item",key:e.id},React.createElement("div",{className:"slider-top"},React.createElement("div",{className:"slider-logo"},React.createElement("img",{src:e.logo[0],alt:"".concat(e.author_name," logo")})),React.createElement("div",{className:"slider-content"},e.content)),React.createElement("div",{className:"slider-bottom"},React.createElement("div",{className:"slider-author"},React.createElement("div",{className:"slider-author-image"},React.createElement("img",{src:e.author_profile_picture[0],alt:e.author_name})),React.createElement("div",{className:"slider-author-info"},React.createElement("h4",null,e.author_name),React.createElement("p",null,e.author_designation))))))}))}function ae(e){return function(e){if(Array.isArray(e))return ie(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||le(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t,r,n,a,o,c){try{var l=e[o](c),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(n,a)}function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||le(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){if(e){if("string"==typeof e)return ie(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ie(e,t):void 0}}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function se(e){var t=e.attributes,r=e.setAttributes,a=t.testimonials,n=t.pageLinkText,o=t.pageLink,c=ce(Object(N.useState)([]),2),l=c[0],i=c[1],s=ce(Object(N.useState)(),2),u=s[0],d=s[1],f=ce(Object(N.useState)(!0),2),m=f[0],p=f[1],b=function(){var l,e=(l=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D()({path:"/ow-features/v1/testimonials"});case 3:t=e.sent,window.owFeatures.testimonials=t,i(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),null!==e.t0&&void 0!==e.t0&&e.t0.message&&d(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}},e,null,[[0,8,11,14]])}),function(){var e=this,c=arguments;return new Promise(function(t,r){var n=l.apply(e,c);function a(e){oe(n,t,r,a,o,"next",e)}function o(e){oe(n,t,r,a,o,"throw",e)}a(void 0)})});return function(){return e.apply(this,arguments)}}();function g(e){r({testimonials:e})}return Object(N.useEffect)(function(){window.owFeatures.testimonials?(p(!1),i(window.owFeatures.testimonials)):b()},[]),m?React.createElement("div",{className:"wp-block-embed is-loading"},React.createElement(A.Spinner,null),React.createElement("p",null,Object(S.__)("Fetching Testimonials","ow-features"),"...")):u?React.createElement("div",{className:"wp-block-embed is-loading"},u):l.length<1?React.createElement("div",{className:"wp-block-embed is-loading"},Object(S.__)("No testimonial found","ow-features")):React.createElement(N.Fragment,null,React.createElement(T.InspectorControls,null,React.createElement(A.Panel,null,React.createElement(A.PanelBody,{title:Object(S.__)("Select Testimonials","ow-features")},React.createElement("div",{className:"ow-testimonial-block-select-items"},l.map(function(n){return React.createElement(A.CheckboxControl,{key:n.id,label:n.author_name,checked:(t=n,0<=a.findIndex(function(e){return e.id===t.id})),onChange:function(){return t=n,void(0<=(r=a.findIndex(function(e){return e.id===t.id}))?((e=ae(a)).splice(r,1),g(e)):g([].concat(ae(a),[t])));var t,e,r}});var t}))),React.createElement(A.PanelBody,{title:Object(S.__)("Sort items","ow-features")},React.createElement(re,{testimonials:a,setSelectedTestimonials:g})),React.createElement(A.PanelBody,{title:Object(S.__)("Page Link","ow-features")},React.createElement(A.TextControl,{label:Object(S.__)("Page Link Text","ow-features"),value:n,onChange:function(e){return r({pageLinkText:e})}}),React.createElement(A.TextControl,{label:Object(S.__)("Page Link","ow-features"),value:o,onChange:function(e){return r({pageLink:e})}})))),a.length<1?React.createElement("div",{className:"wp-block-embed is-loading"},Object(S.__)("No testimonial selected","ow-features")):React.createElement(ne,{testimonials:a}))}Object(n.registerBlockType)("ow-feature-block/testimonials",{title:Object(S.__)("Testimonials","ow-features"),description:Object(S.__)("List of testimonials","ow-features"),icon:"format-status",category:"open-web",supports:{alignWide:!0},example:{},attributes:{testimonials:{type:"array",default:[]},pageLinkText:{type:"string",default:""},pageLink:{type:"string",default:""}},edit:se});function ue(e){var t=e.formId,r=e.portalId,n=e.setSubmitted,a=e.tagName;return t?React.createElement(pe.a,{portalId:r,formId:t,onSubmit:function(){"function"==typeof n&&n(!0),void 0!==window.dataLayer&&tagParent&&window.dataLayer.push({event:"formAction",cfEventTag:a})}}):null}var de=r(9),fe=r.n(de),me=r(14),pe=r.n(me);ue.propTypes={formId:fe.a.string.isRequired,portalId:fe.a.string.isRequired,tagName:fe.a.string,tagParent:fe.a.string},ue.defaultProps={tagName:"",tagParent:""};function be(e){var t=e.attributes,r=e.setAttributes,n=Object(T.useBlockProps)(),a=t.title,o=t.portalId,c=t.formId,l=React.createElement(T.InspectorControls,null,React.createElement(A.Panel,null,React.createElement(A.PanelBody,{title:Object(S.__)("Contact Form Settings","ow-features"),initialOpen:!0},React.createElement(A.PanelRow,null,React.createElement(A.TextControl,{label:Object(S.__)("Hubspot Portal ID","ow-features"),value:o,onChange:function(e){return r({portalId:e})}})),React.createElement(A.PanelRow,null,React.createElement(A.TextControl,{label:Object(S.__)("Hubspot Form ID","ow-features"),value:c,onChange:function(e){return r({formId:e})}})))));return React.createElement(N.Fragment,null,l,React.createElement("div",n,React.createElement(T.RichText,{className:"contact-form__title contact-form__item",tagName:"h2",value:a,allowedFormats:["core/bold","core/italic"],onChange:function(e){return r({title:e})},placeholder:Object(S.__)("Heading...")}),React.createElement("div",{className:"contact-form__fields contact-form__item"},React.createElement(ge,{portalId:o,formId:c,tagName:"Contact_Submit"}))))}var ge=ue;Object(n.registerBlockType)("ow-feature-block/contact-form",{apiVersion:2,title:Object(S.__)("Contact Form","ow-features"),description:Object(S.__)("Contact Form","ow-features"),icon:"buddicons-pm",category:"open-web",example:{},attributes:{title:{type:"string",default:Object(S.__)("Quality Conversations","ow-features")},portalId:{type:"string",default:"5731985"},formId:{type:"string",default:"7b7241c1-3c38-4235-b002-a4772b18294b"}},edit:be})}]);
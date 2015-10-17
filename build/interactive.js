!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(3),a=r(o),l=n(8),s=n(7),i=n(2),c=n(1);!function(){function e(e,t){var n=e.id,r=e.type,o=e.tagName.toLowerCase(),a=void 0,i=void 0;"input"!==o||r||(r="text"),a=r&&r.length?o+' [type="'+r+'"]':o,i=s.getAttributeValue(e,"for"),i&&i.length&&(a+=' [for="'+i+'"]'),n&&n.length&&(a+=' [id="'+n+'"]');var u={title:"INTERACTIVE INFO",element:a,accName:l.getAccessibleName(e)};return c.formatInfo(u)}var t=[{selector:"input",color:"navy",label:"input"},{selector:"button",color:"purple",label:"button"},{selector:"label",color:"olive",label:"label"},{selector:"keygen",color:"teal",label:"keygen"},{selector:"select",color:"green",label:"select"},{selector:"textarea",color:"brown",label:"textarea"},{selector:"audio",color:"maroon",label:"audio"},{selector:"embed",color:"gray",label:"embed"},{selector:"iframe",color:"navy",label:"iframe"},{selector:"img",color:"purple",label:"img"},{selector:"area",color:"maroon",label:"area"},{selector:"object",color:"teal",label:"object"},{selector:"svg",color:"green",label:"svg"},{selector:"video",color:"brown",label:"video"},{selector:"a",color:"olive",label:"a"},{selector:"details",color:"gray",label:"details"},{selector:"[tabindex]",color:"navy",label:"tabindex"}],n=t.map(function(e){return e.selector}).join(", "),r={msgTitle:"Interactive",msgText:"No interactive elements ("+n+") found.",targetList:t,cssClass:i.interactiveCss,getInfo:e,dndFlag:!0},o=new a["default"]("a11yInteractive",r);o.run()}()},function(e,t){"use strict";function n(){var e,t="undefined"==typeof window.pageXOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollLeft?e:document.body).ScrollLeft:window.pageXOffset,n="undefined"==typeof window.pageYOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollTop?e:document.body).ScrollTop:window.pageYOffset;return{x:t,y:n}}function r(e,t,r){function o(t){t||(t=window.event);var r=n();e.style.left=t.clientX+r.x-d+"px",e.style.top=t.clientY+r.y-m+"px",e.style.cursor="move",t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function a(t){t||(t=window.event),e.style.cursor="grab",e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab",document.removeEventListener?(document.removeEventListener("mouseup",a,!0),document.removeEventListener("mousemove",o,!0)):document.detachEvent&&(e.detachEvent("onlosecapture",a),e.detachEvent("onmouseup",a),e.detachEvent("onmousemove",o),e.releaseCapture()),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var l=n(),s=r.clientX+l.x,i=r.clientY+l.y,c=e.offsetLeft,u=e.offsetTop,d=s-c,m=i-u;t&&t(e),document.addEventListener?(document.addEventListener("mousemove",o,!0),document.addEventListener("mouseup",a,!0)):document.attachEvent&&(e.setCapture(),e.attachEvent("onmousemove",o),e.attachEvent("onmouseup",a),e.attachEvent("onlosecapture",a)),r.stopPropagation?r.stopPropagation():r.cancelBubble=!0,r.preventDefault?r.preventDefault():r.returnValue=!1}function o(e){var t="",n=e.title,r=e.element,o=e.accName,a=e.role,l=e.props;return t+="=== "+n+" ===",r&&(t+="\nELEMENT: "+r),o&&(t+="\nACC. NAME: "+o.name+"\nFROM: "+o.source),a&&(t+="\nARIA ROLE: "+a),l&&(t+="\nPROPERTIES: "+l),t}Object.defineProperty(t,"__esModule",{value:!0}),t.getScrollOffsets=n,t.drag=r,t.formatInfo=o},function(e,t,n){"use strict";function r(e){function t(e){for(var t=!0;t;){var n=e;if(r=o=a=l=s=void 0,t=!1,n.nodeType===Node.DOCUMENT_NODE)return!0;var r=window.getComputedStyle(n,null),o=r.getPropertyValue("display"),a=r.getPropertyValue("visibility"),l=n.getAttribute("hidden"),s=n.getAttribute("aria-hidden");if("none"===o||"hidden"===a||null!==l||"true"===s)return!1;e=n.parentNode,t=!0}}return t(e)}function o(e,t){for(var n=0,r=e.firstElementChild;r;)t.indexOf(r.tagName)>-1&&(n+=1),r=r.nextElementSibling;return n}function a(e,t){if("function"==typeof e.closest)for(var n=0;n<t.length;n++)if(e.closest(t[n]))return!0;return!1}function l(e){var t=e.targetList,n=e.cssClass,o=e.getInfo,a=e.dndFlag,l=0;return t.forEach(function(e){var t=document.querySelectorAll(e.selector);"function"==typeof e.filter&&(t=Array.prototype.filter.call(t,e.filter)),Array.prototype.forEach.call(t,function(t){var s,c;r(t)&&(s=t.getBoundingClientRect(),c=i.createOverlay(e,s,n),a&&i.addDragAndDrop(c),o&&(c.title=o(t,e)),document.body.appendChild(c),l+=1)})}),l}function s(e){var t="div."+e,n=document.querySelectorAll(t);Array.prototype.forEach.call(n,function(e){document.body.removeChild(e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.countChildrenWithTagNames=o,t.isDescendantOf=a,t.addNodes=l,t.removeNodes=s;var i=n(5),c="a11yGfdXALm0";t.formsCss=c;var u="a11yGfdXALm1";t.headingsCss=u;var d="a11yGfdXALm2";t.imagesCss=d;var m="a11yGfdXALm3";t.landmarksCss=m;var f="a11yGfdXALm4";t.listsCss=f;var p="a11yGfdXALm5";t.interactiveCss=p},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),s=n(4),i=r(s),c=function(){var e=function(t,n){var r=this;return o(this,e),"object"==typeof window[t]?window[t]:(this.cssClass=n.cssClass,this.msgTitle=n.msgTitle,this.msgText=n.msgText,this.params=n,this.show=!1,window.addEventListener("resize",function(e){l.removeNodes(r.cssClass),i.resize(),r.show=!1}),void(window[t]=this))};return a(e,[{key:"run",value:function(){i.hide(),this.show=!this.show,this.show?0===l.addNodes(this.params)&&(i.show(this.msgTitle,this.msgText),this.show=!1):l.removeNodes(this.cssClass)}}]),e}();t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){var t=window.innerWidth/3.2,n=window.innerWidth/2-t/2,r=c.getScrollOffsets();e.style.width=t+"px",e.style.left=r.x+n+"px",e.style.top=r.y+30+"px"}function o(e){var t=document.createElement("div"),n=document.createElement("button");return t.className="oaa-message-dialog",r(t),n.onclick=e,t.appendChild(n),document.body.appendChild(t),t}function a(e){e&&document.body.removeChild(e)}function l(e,t){var n,r;window[u]||(window[u]=o(s)),n=document.createElement("h2"),n.innerHTML=e,window[u].appendChild(n),r=document.createElement("div"),r.innerHTML=t,window[u].appendChild(r)}function s(){window[u]&&(a(window[u]),delete window[u])}function i(){window[u]&&r(window[u])}Object.defineProperty(t,"__esModule",{value:!0}),t.show=l,t.hide=s,t.resize=i;var c=n(1),u="a11yMessageDialog"},function(e,t,n){"use strict";function r(e,t,n){var r=document.createElement("div"),o=a.getScrollOffsets(),s="background-color: "+e.color,i=34,c=27;return r.setAttribute("class",[n,"oaa-element-overlay"].join(" ")),r.startLeft=t.left+o.x+"px",r.startTop=t.top+o.y+"px",r.style.left=r.startLeft,r.style.top=r.startTop,r.style.width=Math.max(t.width,i)+"px",r.style.height=Math.max(t.height,c)+"px",r.style.borderColor=e.color,r.style.zIndex=l,r.innerHTML='<div style="'+s+'">'+e.label+"</div>",r}function o(e){function t(e){var t=100;e.style.zIndex=l+=t}function n(e){e.style.left=e.startLeft,e.style.top=e.startTop}var r=e.firstChild;r.onmousedown=function(e){a.drag(this.parentNode,t,e)},r.ondblclick=function(e){n(this.parentNode)}}Object.defineProperty(t,"__esModule",{value:!0}),t.createOverlay=r,t.addDragAndDrop=o;var a=n(1),l=1e5},,function(e,t){"use strict";function n(e){var t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;return e.replace(t,"").replace(/\s+/g," ")}function r(e,t){var r=e.getAttribute(t);return null===r?"":n(r)}function o(e){var t=e.tagName.toLowerCase();switch(t){case"img":case"area":return!0;case"input":return e.type&&"image"===e.type}return!1}function a(e){var t,n=e.tagName.toLowerCase();switch(n){case"input":switch(t=e.type){case"text":case"password":case"search":case"tel":case"email":case"url":return!0;default:return!1}break;case"textarea":return!0}return!1}function l(e){function t(e,a){var l,s;switch(e.nodeType){case Node.ELEMENT_NODE:o(e)?(l=r(e,"alt"),l.length&&a.push(l)):e.hasChildNodes()&&Array.prototype.forEach.call(e.childNodes,function(e){t(e,a)});break;case Node.TEXT_NODE:s=n(e.textContent),s.length&&a.push(s)}return a}var a;return a=t(e,[]),a.length?a.join(" "):""}function s(e){function t(e,l){var s,i,c;switch(e.nodeType){case Node.ELEMENT_NODE:o(e)?(s=r(e,"alt"),s.length&&l.push(s)):a(e)?(i=n(e.value),i.length&&l.push(i)):e.hasChildNodes()&&Array.prototype.forEach.call(e.childNodes,function(e){t(e,l)});break;case Node.TEXT_NODE:c=n(e.textContent),c.length&&l.push(c)}return l}var l;return l=t(e,[]),l.length?l.join(" "):""}function i(e){var t;return t=r(e,"aria-label"),t.length?{name:t,source:"aria-label"}:null}function c(e){var t;return t=l(e),t.length?{name:t,source:"contents"}:null}function u(e,t){var n;return n=r(e,t),n.length?{name:n,source:t}:null}function d(e){var t=void 0;return t=e.getAttribute("alt"),null!==t?(t=n(t),t.length?{name:t,source:"alt"}:{name:"<empty>",source:"alt"}):null}function m(e){var t=void 0,n=void 0;return e.id&&(n=document.querySelector('[for="'+e.id+'"]'),n&&(t=s(n),t.length))?{name:t,source:"label[for=id]"}:"function"==typeof e.closest&&(n=e.closest("label"),n&&(t=s(n),t.length))?{name:t,source:"label container"}:null}function f(e){var t=void 0,n=void 0;return n=e.querySelector("title"),n&&(t=l(n),t.length)?{name:t,source:"title element"}:null}Object.defineProperty(t,"__esModule",{value:!0}),t.getAttributeValue=r,t.getElementContents=l,t.getLabelContents=s,t.nameFromAriaLabel=i,t.nameFromContents=c,t.nameFromAttribute=u,t.nameFromAltAttribute=d,t.nameFromLabelElement=m,t.nameFromTitleElement=f},function(e,t,n){"use strict";function r(e,t){for(var n=!0;n;){var r=e,o=t;a=l=s=void 0,n=!1;var a=void 0,l=void 0,s=void 0;if("function"!=typeof r.closest||!(a=r.closest("fieldset")))return o;l=a.querySelector("legend"),l&&(s=i.getElementContents(l),s.length&&(o?(o.name=s+" "+o.name,o.source="fieldset/legend + "+o.source):o={name:s,source:"fieldset/legend"})),e=a.parentNode,t=o,n=!0}}function o(e,t){var n=e.tagName.toLowerCase();switch(n){case"input":"hidden"!==e.type&&(t=r(e,t));break;case"button":case"keygen":case"select":case"textarea":t=r(e,t)}return t}function a(e){var t=e.tagName.toLowerCase(),n=null;switch(t){case"input":switch(e.type){case"hidden":break;case"email":case"password":case"search":case"tel":case"text":case"url":n=i.nameFromLabelElement(e),null===n&&(n=i.nameFromAttribute(e,"placeholder"));break;case"button":n=i.nameFromAttribute(e,"value");break;case"image":n=i.nameFromAltAttribute(e),null===n&&(n=i.nameFromAttribute(e,"value"));break;case"reset":n={name:"Reset",source:"default"};break;case"submit":n={name:"Submit",source:"default"};break;default:n=i.nameFromLabelElement(e)}break;case"button":n=i.nameFromContents(e);break;case"label":n=i.nameFromContents(e);break;case"keygen":case"select":n=i.nameFromLabelElement(e);break;case"textarea":n=i.nameFromLabelElement(e),null===n&&(n=i.nameFromAttribute(e,"placeholder"));break;case"audio":n={name:"NOT YET IMPLEMENTED",source:""};break;case"embed":n={name:"NOT YET IMPLEMENTED",source:""};break;case"iframe":n=i.nameFromAttribute(e,"title");break;case"img":case"area":n=i.nameFromAltAttribute(e);break;case"object":n={name:"NOT YET IMPLEMENTED",source:""};break;case"svg":n=i.nameFromTitleElement(e);break;case"video":n={name:"NOT YET IMPLEMENTED",source:""};break;case"a":n=i.nameFromContents(e);break;case"details":n={name:"NOT YET IMPLEMENTED",source:""};break;default:n=i.nameFromContents(e)}return null===n&&(n=i.nameFromAttribute(e,"title")),n}function l(e){var t,n,r,o,a=e.getAttribute("aria-labelledby"),l=[];if(a&&a.length)for(t=a.split(" "),n=0;n<t.length;n++)r=document.getElementById(t[n]),o=s(r,!0),o&&o.name.length&&l.push(o.name);return l.length?{name:l.join(" "),source:"aria-labelledby"}:null}function s(e){var t=void 0===arguments[1]?!1:arguments[1],n=null;return t||(n=l(e)),null===n&&(n=i.nameFromAriaLabel(e)),null===n&&(n=a(e)),n=o(e,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.nameFromNativeSemantics=a,t.getAccessibleName=s;var i=n(7)}]);
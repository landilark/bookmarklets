!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=r(6),o=n(a),s=r(1),i=r(8),l=r(3),u=r(4);!function(){function e(e,t){var r={title:"INTERACTIVE INFO",element:l.getElementInfo(e),accName:i.getAccessibleName(e),role:u.getAriaRole(e)};return r}function t(e,t){t.color=null===e.accName?"red":"blue"}var r=[{selector:"input",color:"navy",label:"input"},{selector:"button",color:"olive",label:"button"},{selector:"label",color:"purple",label:"label"},{selector:"keygen",color:"teal",label:"keygen"},{selector:"meter",color:"maroon",label:"meter"},{selector:"output",color:"brown",label:"output"},{selector:"progress",color:"gray",label:"progress"},{selector:"select",color:"green",label:"select"},{selector:"textarea",color:"navy",label:"textarea"},{selector:"audio",color:"olive",label:"audio"},{selector:"embed",color:"purple",label:"embed"},{selector:"iframe",color:"teal",label:"iframe"},{selector:"img",color:"maroon",label:"img"},{selector:"area",color:"brown",label:"area"},{selector:"object",color:"gray",label:"object"},{selector:"svg",color:"green",label:"svg"},{selector:"video",color:"navy",label:"video"},{selector:"a",color:"olive",label:"a"},{selector:"details",color:"purple",label:"details"},{selector:"[tabindex]",color:"teal",label:"tabindex"}],n=r.map(function(e){return e.selector}).join(", "),a={msgTitle:"Interactive",msgText:"No interactive elements ("+n+") found.",targetList:r,cssClass:s.interactiveCss,getInfo:e,evalInfo:t,dndFlag:!0},c=new o["default"]("a11yInteractive",a);c.run()}()},function(e,t,r){"use strict";function n(e){function t(e){for(var t=!0;t;){var r=e;if(n=a=o=s=i=void 0,t=!1,r.nodeType===Node.DOCUMENT_NODE)return!0;var n=window.getComputedStyle(r,null),a=n.getPropertyValue("display"),o=n.getPropertyValue("visibility"),s=r.getAttribute("hidden"),i=r.getAttribute("aria-hidden");if("none"===a||"hidden"===o||null!==s||"true"===i)return!1;e=r.parentNode,t=!0}}return t(e)}function a(e,t){for(var r=0,n=e.firstElementChild;n;)t.indexOf(n.tagName)>-1&&(r+=1),n=n.nextElementSibling;return r}function o(e,t){return"function"==typeof e.closest?t.some(function(t){return null!==e.closest(t)}):!1}function s(e,t){var r=e.parentElement.tagName.toLowerCase();return r?t.some(function(e){return r===e}):!1}function i(e){var t=e.targetList,r=e.cssClass,a=e.getInfo,o=e.evalInfo,s=e.dndFlag,i=0;return t.forEach(function(e){var t=document.querySelectorAll(e.selector);"function"==typeof e.filter&&(t=Array.prototype.filter.call(t,e.filter)),Array.prototype.forEach.call(t,function(t){if(n(t)){var l=a(t,e);o&&o(l,e);var d=t.getBoundingClientRect(),m=u.createOverlay(e,d,r);s&&u.addDragAndDrop(m),m.title=c.formatInfo(l),document.body.appendChild(m),i+=1}})}),i}function l(e){var t="div."+e,r=document.querySelectorAll(t);Array.prototype.forEach.call(r,function(e){document.body.removeChild(e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.countChildrenWithTagNames=a,t.isDescendantOf=o,t.hasParentWithName=s,t.addNodes=i,t.removeNodes=l;var u=r(9),c=r(3),d="a11yGfdXALm0";t.formsCss=d;var m="a11yGfdXALm1";t.headingsCss=m;var f="a11yGfdXALm2";t.imagesCss=f;var b="a11yGfdXALm3";t.landmarksCss=b;var p="a11yGfdXALm4";t.listsCss=p;var h="a11yGfdXALm5";t.interactiveCss=h},function(e,t){"use strict";function r(e){var t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;return e.replace(t,"").replace(/\s+/g," ")}function n(e,t){var n=e.getAttribute(t);return null===n?"":r(n)}function a(e){var t=e.tagName.toLowerCase();switch(t){case"img":case"area":return!0;case"input":return e.type&&"image"===e.type}return!1}function o(e){var t=e.getAttribute("alt");return null!==t?0===r(t).length:!1}function s(e){var t=e.tagName.toLowerCase(),r=e.type;switch(t){case"input":switch(r){case"email":case"search":case"tel":case"text":case"url":return!0;default:return!1}break;case"textarea":return!0}return!1}function i(e){var t=e.tagName.toLowerCase(),r=e.type;switch(t){case"input":return"hidden"!==r;case"button":case"keygen":case"meter":case"output":case"progress":case"select":case"textarea":return!0;default:return!1}}function l(e){function t(e,o){var s=void 0,i=void 0;switch(e.nodeType){case Node.ELEMENT_NODE:a(e)?(s=n(e,"alt"),s.length&&o.push(s)):e.hasChildNodes()&&Array.prototype.forEach.call(e.childNodes,function(e){t(e,o)});break;case Node.TEXT_NODE:i=r(e.textContent),i.length&&o.push(i)}return o}var o=void 0;return o=t(e,[]),o.length?o.join(" "):""}function u(e){function t(e,o){var i=void 0,l=void 0,u=void 0;switch(e.nodeType){case Node.ELEMENT_NODE:a(e)?(i=n(e,"alt"),i.length&&o.push(i)):s(e)?(l=r(e.value),l.length&&o.push(l)):e.hasChildNodes()&&Array.prototype.forEach.call(e.childNodes,function(e){t(e,o)});break;case Node.TEXT_NODE:u=r(e.textContent),u.length&&o.push(u)}return o}var o=void 0;return o=t(e,[]),o.length?o.join(" "):""}function c(e,t){var n=[],a=void 0;return Array.prototype.forEach.call(e.childNodes,function(e){switch(e.nodeType){case Node.ELEMENT_NODE:t(e)&&(a=l(e),a.length&&n.push(a));break;case Node.TEXT_NODE:a=r(e.textContent),a.length&&n.push(a)}}),n.length?n.join(" "):""}function d(e){var t=void 0;return t=n(e,"aria-label"),t.length?{name:t,source:"aria-label"}:null}function m(e){var t=void 0;return t=l(e),t.length?{name:t,source:"contents"}:null}function f(e,t){var r=void 0;return r=n(e,t),r.length?{name:r,source:t}:null}function b(e){var t=e.getAttribute("alt");return null!==t?(t=r(t),t.length?{name:t,source:"alt"}:{name:"<empty>",source:"alt"}):null}function p(e){var t=void 0,r=void 0;return e.id&&(r=document.querySelector('[for="'+e.id+'"]'),r&&(t=u(r),t.length))?{name:t,source:"label [for=id]"}:"function"==typeof e.closest&&(r=e.closest("label"),r&&(t=u(r),t.length))?{name:t,source:"label container"}:null}function h(e){var t=void 0,r=void 0;return r=e.querySelector("title"),r&&(t=l(r),t.length)?{name:t,source:"title element"}:null}function v(e){function t(e){return e.hasAttribute("open")}var r=void 0,n=void 0;if(n=e.querySelector("summary"),n&&(r=l(n)),t(e)){if(r+=c(e,function(e){return"summary"!==e.tagName.toLowerCase()}),r.length)return{name:r,source:"contents"}}else if(r.length)return{name:r,source:"summary element"};return null}Object.defineProperty(t,"__esModule",{value:!0}),t.getAttributeValue=n,t.hasEmptyAltText=o,t.isLabelableElement=i,t.getElementContents=l,t.getLabelContents=u,t.nameFromAriaLabel=d,t.nameFromContents=m,t.nameFromAttribute=f,t.nameFromAltAttribute=b,t.nameFromLabelElement=p,t.nameFromTitleElement=h,t.nameFromDetailsOrSummary=v},function(e,t,r){"use strict";function n(e){var t=e.tagName.toLowerCase(),r=t;if("input"===t){var n=e.type;n&&n.length&&(r+=' [type="'+n+'"]')}if("label"===t){var a=o.getAttributeValue(e,"for");a.length&&(r+=' [for="'+a+'"]')}if(o.isLabelableElement(e)){var s=e.id;s&&s.length&&(r+=' [id="'+s+'"]')}if(e.hasAttribute("role")){var i=o.getAttributeValue(e,"role");i.length&&(r+=' [role="'+i+'"]')}return r}function a(e){var t="",r=e.title,n=e.element,a=e.accName,o=e.role,s=e.props;return t+="=== "+r+" ===",n&&(t+="\nELEMENT: "+n),a&&(t+="\nACC. NAME: "+a.name+"\nFROM: "+a.source),o&&(t+="\nROLE: "+o),s&&(t+="\nPROPERTIES: "+s),t}Object.defineProperty(t,"__esModule",{value:!0}),t.getElementInfo=n,t.formatInfo=a;var o=r(2)},function(e,t,r){"use strict";function n(e){var t=e.parentElement,r=t.tagName.toLowerCase(),n=t.parentElement.tagName.toLowerCase();return"select"===r?!0:"optgroup"===r&&"select"===n?!0:"datalist"===r?!0:!1}function a(e){var t=e.tagName.toLowerCase(),r=e.type;if(e.hasAttribute("role"))return i.getAttributeValue(e,"role");switch(t){case"a":if(e.hasAttribute("href"))return"link";break;case"area":if(e.hasAttribute("href"))return"link";break;case"article":return"article";case"aside":return"complementary";case"body":return"document";case"button":return"button";case"datalist":return"listbox";case"details":return"group";case"dialog":return"dialog";case"dl":return"list";case"fieldset":return"group";case"footer":if(!s.isDescendantOf(e,["article","section"]))return"contentinfo";break;case"form":return"form";case"h1":return"heading";case"h2":return"heading";case"h3":return"heading";case"h4":return"heading";case"h5":return"heading";case"h6":return"heading";case"header":if(!s.isDescendantOf(e,["article","section"]))return"banner";break;case"hr":return"separator";case"img":if(!i.hasEmptyAltText(e))return"img";break;case"input":if("button"===r)return"button";if("checkbox"===r)return"checkbox";if("email"===r)return e.hasAttribute("list")?"combobox":"textbox";if("image"===r)return"button";if("number"===r)return"spinbutton";if("password"===r)return"textbox";if("radio"===r)return"radio";if("range"===r)return"slider";if("reset"===r)return"button";if("search"===r)return e.hasAttribute("list")?"combobox":"textbox";if("submit"===r)return"button";if("tel"===r)return e.hasAttribute("list")?"combobox":"textbox";if("text"===r)return e.hasAttribute("list")?"combobox":"textbox";if("url"===r)return e.hasAttribute("list")?"combobox":"textbox";break;case"li":if(s.hasParentWithName(e,["ol","ul"]))return"listitem";break;case"link":if(e.hasAttribute("href"))return"link";break;case"main":return"main";case"menu":if("toolbar"===r)return"toolbar";break;case"menuitem":if("command"===r)return"menuitem";if("checkbox"===r)return"menuitemcheckbox";if("radio"===r)return"menuitemradio";break;case"meter":return"progressbar";case"nav":return"navigation";case"ol":return"list";case"option":if(n(e))return"option";break;case"output":return"status";case"progress":return"progressbar";case"section":return"region";case"select":return"listbox";case"summary":return"button";case"tbody":return"rowgroup";case"tfoot":return"rowgroup";case"thead":return"rowgroup";case"textarea":return"textbox";case"th":return"columnheader";case"ul":return"list"}return null}function o(e){var t=a(e);if(null===t)return!1;switch(t){case"button":case"checkbox":case"columnheader":case"directory":case"gridcell":case"heading":case"link":case"listitem":case"menuitem":case"menuitemcheckbox":case"menuitemradio":case"option":case"radio":case"row":case"rowgroup":case"rowheader":case"tab":case"tooltip":case"treeitem":return!0;default:return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.getAriaRole=a,t.nameFromIncludesContents=o;var s=r(1),i=r(2)},function(e,t){"use strict";function r(){var e,t="undefined"==typeof window.pageXOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollLeft?e:document.body).ScrollLeft:window.pageXOffset,r="undefined"==typeof window.pageYOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollTop?e:document.body).ScrollTop:window.pageYOffset;return{x:t,y:r}}function n(e,t,n){function a(t){t||(t=window.event);var n=r();e.style.left=t.clientX+n.x-d+"px",e.style.top=t.clientY+n.y-m+"px",e.style.cursor="move",t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function o(t){t||(t=window.event),e.style.cursor="grab",e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab",document.removeEventListener?(document.removeEventListener("mouseup",o,!0),document.removeEventListener("mousemove",a,!0)):document.detachEvent&&(e.detachEvent("onlosecapture",o),e.detachEvent("onmouseup",o),e.detachEvent("onmousemove",a),e.releaseCapture()),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var s=r(),i=n.clientX+s.x,l=n.clientY+s.y,u=e.offsetLeft,c=e.offsetTop,d=i-u,m=l-c;t&&t(e),document.addEventListener?(document.addEventListener("mousemove",a,!0),document.addEventListener("mouseup",o,!0)):document.attachEvent&&(e.setCapture(),e.attachEvent("onmousemove",a),e.attachEvent("onmouseup",o),e.attachEvent("onlosecapture",o)),n.stopPropagation?n.stopPropagation():n.cancelBubble=!0,n.preventDefault?n.preventDefault():n.returnValue=!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getScrollOffsets=r,t.drag=n},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(1),i=r(7),l=n(i),u=function(){function e(t,r){var n=this;return a(this,e),"object"==typeof window[t]?window[t]:(this.cssClass=r.cssClass,this.msgTitle=r.msgTitle,this.msgText=r.msgText,this.params=r,this.show=!1,window.addEventListener("resize",function(e){s.removeNodes(n.cssClass),l.resize(),n.show=!1}),void(window[t]=this))}return o(e,[{key:"run",value:function(){l.hide(),this.show=!this.show,this.show?0===s.addNodes(this.params)&&(l.show(this.msgTitle,this.msgText),this.show=!1):s.removeNodes(this.cssClass)}}]),e}();t["default"]=u,e.exports=t["default"]},function(e,t,r){"use strict";function n(e){var t=window.innerWidth/3.2,r=window.innerWidth/2-t/2,n=u.getScrollOffsets();e.style.width=t+"px",e.style.left=n.x+r+"px",e.style.top=n.y+30+"px"}function a(e){var t=document.createElement("div"),r=document.createElement("button");return t.className="oaa-message-dialog",n(t),r.onclick=e,t.appendChild(r),document.body.appendChild(t),t}function o(e){e&&document.body.removeChild(e)}function s(e,t){var r,n;window[c]||(window[c]=a(i)),r=document.createElement("h2"),r.innerHTML=e,window[c].appendChild(r),n=document.createElement("div"),n.innerHTML=t,window[c].appendChild(n)}function i(){window[c]&&(o(window[c]),delete window[c])}function l(){window[c]&&n(window[c])}Object.defineProperty(t,"__esModule",{value:!0}),t.show=s,t.hide=i,t.resize=l;var u=r(5),c="a11yMessageDialog"},function(e,t,r){"use strict";function n(e,t){for(var r=!0;r;){var n=e,a=t;o=s=l=void 0,r=!1;var o=void 0,s=void 0,l=void 0;if("function"!=typeof n.closest||!(o=n.closest("fieldset")))return a;s=o.querySelector("legend"),s&&(l=i.getElementContents(s),l.length&&(a?(a.name=l+" "+a.name,a.source="fieldset/legend + "+a.source):a={name:l,source:"fieldset/legend"})),e=o.parentNode,t=a,r=!0}}function a(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],r=e.tagName.toLowerCase(),n=null;switch(r){case"input":switch(e.type){case"hidden":break;case"email":case"search":case"tel":case"text":case"url":n=i.nameFromLabelElement(e),null===n&&(n=i.nameFromAttribute(e,"placeholder"));break;case"button":n=i.nameFromAttribute(e,"value");break;case"reset":n=i.nameFromAttribute(e,"value"),null===n&&(n={name:"Reset",source:"default"});break;case"submit":n=i.nameFromAttribute(e,"value"),null===n&&(n={name:"Submit",source:"default"});break;case"image":n=i.nameFromAltAttribute(e),null===n&&(n=i.nameFromAttribute(e,"value"));break;default:n=i.nameFromLabelElement(e)}break;case"button":n=i.nameFromContents(e);break;case"label":n=i.nameFromContents(e);break;case"keygen":case"meter":case"output":case"progress":case"select":n=i.nameFromLabelElement(e);break;case"textarea":n=i.nameFromLabelElement(e),null===n&&(n=i.nameFromAttribute(e,"placeholder"));break;case"audio":n={name:"NOT YET IMPLEMENTED",source:""};break;case"embed":n={name:"NOT YET IMPLEMENTED",source:""};break;case"iframe":n=i.nameFromAttribute(e,"title");break;case"img":case"area":n=i.nameFromAltAttribute(e);break;case"object":n={name:"NOT YET IMPLEMENTED",source:""};break;case"svg":n=i.nameFromTitleElement(e);break;case"video":n={name:"NOT YET IMPLEMENTED",source:""};break;case"a":n=i.nameFromContents(e);break;case"details":n=i.nameFromDetailsOrSummary(e);break;default:(l.nameFromIncludesContents(e)||t)&&(n=i.nameFromContents(e))}return null===n&&(n=i.nameFromAttribute(e,"title")),n}function o(e){var t=e.getAttribute("aria-labelledby"),r=void 0,n=void 0,a=void 0,o=void 0,i=[];if(t&&t.length)for(r=t.split(" "),n=0;n<r.length;n++)a=document.getElementById(r[n]),o=s(a,!0),o&&o.name.length&&i.push(o.name);return i.length?{name:i.join(" "),source:"aria-labelledby"}:null}function s(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],r=null;return t||(r=o(e)),null===r&&(r=i.nameFromAriaLabel(e)),null===r&&(r=a(e,t)),i.isLabelableElement(e)&&(r=n(e,r)),r}Object.defineProperty(t,"__esModule",{value:!0}),t.nameFromNativeSemantics=a,t.getAccessibleName=s;var i=r(2),l=r(4)},function(e,t,r){"use strict";function n(e,t,r){var n=document.createElement("div"),a=o.getScrollOffsets(),i="background-color: "+e.color,l=34,u=27;return n.setAttribute("class",[r,"oaa-element-overlay"].join(" ")),n.startLeft=t.left+a.x+"px",n.startTop=t.top+a.y+"px",n.style.left=n.startLeft,n.style.top=n.startTop,n.style.width=Math.max(t.width,l)+"px",n.style.height=Math.max(t.height,u)+"px",n.style.borderColor=e.color,n.style.zIndex=s,n.innerHTML='<div style="'+i+'">'+e.label+"</div>",n}function a(e){function t(e){var t=100;e.style.zIndex=s+=t}function r(e){e.style.left=e.startLeft,e.style.top=e.startTop}var n=e.firstChild;n.onmousedown=function(e){o.drag(this.parentNode,t,e)},n.ondblclick=function(e){r(this.parentNode)}}Object.defineProperty(t,"__esModule",{value:!0}),t.createOverlay=n,t.addDragAndDrop=a;var o=r(5),s=1e5}]);
define("lodash-amd/modern/collections/contains",function(require){return require("underscore").contains}),define("lodash-amd/modern/collections/toArray",function(require){return require("underscore").toArray}),define("lodash-amd/modern/arrays/flatten",function(require){return require("underscore").flatten}),define("lodash-amd/modern/arrays/last",function(require){return require("underscore").last}),define("lodash-amd/modern/utilities/escape",function(require){return require("underscore").escape}),define("lodash-amd/modern/objects/assign",function(require){return require("underscore").extend}),define("lodash-amd/modern/objects/defaults",function(require){return require("underscore").defaults}),define("lodash-amd/modern/arrays/pull",[],function(){function pull(e){for(var r=arguments,o=0,a=r.length,i=e?e.length:0;++o<a;)for(var n=-1,s=r[o];++n<i;)e[n]===s&&(t.call(e,n--,1),i--);return e}var e=[],t=e.splice;return pull}),define("plugins/core/commands/indent",[],function(){return function(){return function(e){var t=new e.api.Command("indent");t.queryEnabled=function(){var t=new e.api.Selection,n=t.getContaining(function(e){return"UL"===e.nodeName||"OL"===e.nodeName});return e.api.Command.prototype.queryEnabled.call(this)&&e.allowsBlockElements()&&!n},e.commands.indent=t}}}),define("plugins/core/commands/insert-list",[],function(){return function(){return function(e){var t=function(t){e.api.Command.call(this,t)};t.prototype=Object.create(e.api.Command.prototype),t.prototype.constructor=t,t.prototype.execute=function(o){function splitList(e){if(e.length>0){var n=document.createElement(t.nodeName);e.forEach(function(e){n.appendChild(e)}),t.parentNode.insertBefore(n,t.nextElementSibling)}}if(this.queryState()){var n=new e.api.Selection,i=n.range,t=n.getContaining(function(e){return"OL"===e.nodeName||"UL"===e.nodeName}),r=n.getContaining(function(e){return"LI"===e.nodeName});e.transactionManager.run(function(){if(r){var c=new e.api.Node(r).nextAll();splitList(c),n.placeMarkers();var a=document.createElement("p");a.innerHTML=r.innerHTML,t.parentNode.insertBefore(a,t.nextElementSibling),r.parentNode.removeChild(r)}else{var o=Array.prototype.map.call(t.querySelectorAll("li"),function(e){return i.intersectsNode(e)&&e}).filter(function(e){return e}),u=o.slice(-1)[0],d=new e.api.Node(u).nextAll();splitList(d),n.placeMarkers();var s=document.createDocumentFragment();o.forEach(function(t){var e=document.createElement("p");e.innerHTML=t.innerHTML,s.appendChild(e)}),t.parentNode.insertBefore(s,t.nextElementSibling),o.forEach(function(e){e.parentNode.removeChild(e)})}0===t.childNodes.length&&t.parentNode.removeChild(t),n.selectMarkers()}.bind(this))}else e.api.Command.prototype.execute.call(this,o)},t.prototype.queryEnabled=function(){return e.api.Command.prototype.queryEnabled.call(this)&&e.allowsBlockElements()},e.commands.insertOrderedList=new t("insertOrderedList"),e.commands.insertUnorderedList=new t("insertUnorderedList")}}}),define("plugins/core/commands/outdent",[],function(){return function(){return function(e){var t=new e.api.Command("outdent");t.queryEnabled=function(){var t=new e.api.Selection,n=t.getContaining(function(e){return"UL"===e.nodeName||"OL"===e.nodeName});return e.api.Command.prototype.queryEnabled.call(this)&&e.allowsBlockElements()&&!n},e.commands.outdent=t}}}),define("plugins/core/commands/redo",[],function(){return function(){return function(e){var t=new e.api.Command("redo");t.execute=function(){e.undoManager.redo()},t.queryEnabled=function(){return e.undoManager.position>0},e.commands.redo=t,e.options.undo.enabled&&e.el.addEventListener("keydown",function(e){e.shiftKey&&(e.metaKey||e.ctrlKey)&&90===e.keyCode&&(e.preventDefault(),t.execute())})}}}),define("plugins/core/commands/subscript",[],function(){return function(){return function(e){var t=new e.api.Command("subscript");e.commands.subscript=t}}}),define("plugins/core/commands/superscript",[],function(){return function(){return function(e){var t=new e.api.Command("superscript");e.commands.superscript=t}}}),define("plugins/core/commands/undo",[],function(){return function(){return function(e){var t=new e.api.Command("undo");t.execute=function(){e.undoManager.undo()},t.queryEnabled=function(){return e.undoManager.position<e.undoManager.length},e.commands.undo=t,e.options.undo.enabled&&e.el.addEventListener("keydown",function(e){e.shiftKey||!e.metaKey&&!e.ctrlKey||90!==e.keyCode||(e.preventDefault(),t.execute())})}}}),define("plugins/core/commands",["./commands/indent","./commands/insert-list","./commands/outdent","./commands/redo","./commands/subscript","./commands/superscript","./commands/undo"],function(e,t,n,r,o,i,a){return{indent:e,insertList:t,outdent:n,redo:r,subscript:o,superscript:i,undo:a}}),define("element",["lodash-amd/modern/collections/contains"],function(e){function isBlockElement(n){return e(t,n.nodeName)}function isSelectionMarkerNode(e){return e.nodeType===Node.ELEMENT_NODE&&"scribe-marker"===e.className}function isCaretPositionNode(e){return e.nodeType===Node.ELEMENT_NODE&&"caret-position"===e.className}function unwrap(t,e){for(;e.childNodes.length>0;)t.insertBefore(e.childNodes[0],e);t.removeChild(e)}var t=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","CANVAS","DD","DIV","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","LI","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TD","TH","TFOOT","UL","VIDEO"];return{isBlockElement:isBlockElement,isSelectionMarkerNode:isSelectionMarkerNode,isCaretPositionNode:isCaretPositionNode,unwrap:unwrap}}),define("node",[],function(){function isEmptyTextNode(e){return e.nodeType===Node.TEXT_NODE&&""===e.textContent}function insertAfter(t,e){return e.parentNode.insertBefore(t,e.nextSibling)}function removeNode(e){return e.parentNode.removeChild(e)}return{isEmptyTextNode:isEmptyTextNode,insertAfter:insertAfter,removeNode:removeNode}}),define("dom-observer",["lodash-amd/modern/arrays/flatten","lodash-amd/modern/collections/toArray","./element","./node","js/vendor/mutationObserver.v0.3.1.amd"],function(t,e,n,r,o){function observeDomChanges(a,s){function includeRealMutations(o){var i=t(o.map(function(t){var n=e(t.addedNodes),r=e(t.removedNodes);return n.concat(r)})),a=i.filter(function(e){return!r.isEmptyTextNode(e)}).filter(function(e){return!n.isSelectionMarkerNode(e)});return a.length>0}var c=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,o=!1,i=new c(function(e){if(!o&&includeRealMutations(e)){o=!0;try{s()}catch(t){throw t}finally{setTimeout(function(){o=!1},0)}}});return i.observe(a,{attributes:!0,childList:!0,subtree:!0}),i}return observeDomChanges}),define("plugins/core/events",["lodash-amd/modern/collections/contains","../../dom-observer"],function(t,e){return function(){return function(t){t.el.addEventListener("focus",function placeCaretOnFocus(){function getFirstDeepestChild(t){var e=document.createTreeWalker(t,NodeFilter.SHOW_ALL,null,!1),n=e.currentNode;return e.firstChild()?"BR"===e.currentNode.nodeName?n:getFirstDeepestChild(e.currentNode):e.currentNode}var e=new t.api.Selection;if(e.range){var o=t.allowsBlockElements()&&e.range.startContainer===t.el;if(o){var r=getFirstDeepestChild(t.el.firstChild),n=e.range;n.setStart(r,0),n.setEnd(r,0),e.selection.removeAllRanges(),e.selection.addRange(n)}}}.bind(t));var n=function(){if(!t._skipFormatters){var e=new t.api.Selection,n=e.range,r=function(){n&&e.placeMarkers(),t.setHTML(t._htmlFormatterFactory.format(t.getHTML())),e.selectMarkers()}.bind(t);t.transactionManager.run(r)}delete t._skipFormatters}.bind(t);e(t.el,n),t.allowsBlockElements()&&t.el.addEventListener("keydown",function(o){if(13===o.keyCode){var n=new t.api.Selection,e=n.range,r=n.getContaining(function(e){return/^(H[1-6])$/.test(e.nodeName)});if(r&&e.collapsed){var i=e.cloneRange();i.setEndAfter(r,0);var a=i.cloneContents();""===a.firstChild.textContent&&(o.preventDefault(),t.transactionManager.run(function(){var t=document.createElement("p"),o=document.createElement("br");t.appendChild(o),r.parentNode.insertBefore(t,r.nextElementSibling),e.setStart(t,0),e.setEnd(t,0),n.selection.removeAllRanges(),n.selection.addRange(e)}))}}}),t.allowsBlockElements()&&t.el.addEventListener("keydown",function(e){if(13===e.keyCode||8===e.keyCode){var n=new t.api.Selection,o=n.range;if(o.collapsed){var r=n.getContaining(function(e){return"LI"===e.nodeName});if(r&&""===r.textContent.trim()){e.preventDefault();var i=n.getContaining(function(e){return"UL"===e.nodeName||"OL"===e.nodeName}),a=t.getCommand("OL"===i.nodeName?"insertOrderedList":"insertUnorderedList");a.execute()}}}})}}}),define("plugins/core/formatters/html/replace-nbsp-chars",[],function(){return function(){return function(e){var t=/(\s|&nbsp;)+/g;e.registerHTMLFormatter("export",function(e){return e.replace(t," ")})}}}),define("plugins/core/formatters/html/enforce-p-elements",["lodash-amd/modern/arrays/last"],function(e){function wrapChildNodes(t,n){var r=Array.prototype.reduce.call(n.childNodes,function(r,n){function startNewGroup(){var e=[n];r.push(e)}if("EM"!==n.nodeName){var o=e(r);if(o){var i=t.element.isBlockElement(o[0]);i===t.element.isBlockElement(n)?o.push(n):startNewGroup()}else startNewGroup()}return r},[]),o=r.filter(function(e){var n=t.element.isBlockElement(e[0]);return!n});o.forEach(function(e){var t=document.createElement("p");e[0].parentNode.insertBefore(t,e[0]),e.forEach(function(e){t.appendChild(e)})}),n._isWrapped=!0}function traverse(t,n){for(var r=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,null,!1),e=r.firstChild();e;){if("BLOCKQUOTE"===e.nodeName&&!e._isWrapped){wrapChildNodes(t,e),traverse(t,n);break}e=r.nextSibling()}}return function(){return function(e){e.registerHTMLFormatter("normalize",function(n){var t=document.createElement("div");return t.innerHTML=n,wrapChildNodes(e,t),traverse(e,t),t.innerHTML})}}}),define("plugins/core/formatters/html/ensure-selectable-containers",["../../../../element","lodash-amd/modern/collections/contains"],function(n,e){function parentHasNoTextContent(t,e){return t.isCaretPositionNode(e)?!0:""===e.parentNode.textContent.trim()}function traverse(r,o){function isEmpty(e){if(0===e.children.length&&r.isBlockElement(e)||1===e.children.length&&r.isSelectionMarkerNode(e.children[0]))return!0;if(!r.isBlockElement(e)&&0===e.children.length)return parentHasNoTextContent(r,e);return!1}for(var n=o.firstElementChild;n;)r.isSelectionMarkerNode(n)||(isEmpty(n)&&""===n.textContent.trim()&&!e(t,n.nodeName)?n.appendChild(document.createElement("br")):n.children.length>0&&traverse(r,n)),n=n.nextElementSibling}var t=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];return function(){return function(e){e.registerHTMLFormatter("normalize",function(n){var t=document.createElement("div");return t.innerHTML=n,traverse(e.element,t),t.innerHTML})}}}),define("plugins/core/formatters/plain-text/escape-html-characters",["lodash-amd/modern/utilities/escape"],function(e){return function(){return function(t){t.registerPlainTextFormatter(e)}}}),define("plugins/core/inline-elements-mode",[],function(){function hasContent(t){for(var e=document.createTreeWalker(t,NodeFilter.SHOW_ALL,null,!1);e.nextNode();)if(e.currentNode&&(~["br"].indexOf(e.currentNode.nodeName.toLowerCase())||e.currentNode.length>0))return!0;return!1}return function(){return function(e){e.el.addEventListener("keydown",function(r){if(13===r.keyCode){var n=new e.api.Selection,t=n.range,o=n.getContaining(function(e){return"LI"===e.nodeName||/^(H[1-6])$/.test(e.nodeName)});o||(r.preventDefault(),e.transactionManager.run(function(){"BR"===e.el.lastChild.nodeName&&e.el.removeChild(e.el.lastChild);var r=document.createElement("br");t.insertNode(r),t.collapse(!1);var i=t.cloneRange();i.setEndAfter(e.el.lastChild,0);var a=i.cloneContents();if(!hasContent(a)){var s=document.createElement("br");t.insertNode(s)}var o=t.cloneRange();o.setStartAfter(r,0),o.setEndAfter(r,0),n.selection.removeAllRanges(),n.selection.addRange(o)}))}}.bind(this)),""===e.getHTML().trim()&&e.setContent("")}}}),define("plugins/core/patches/commands/bold",[],function(){return function(){return function(e){var t=new e.api.CommandPatch("bold");t.queryEnabled=function(){var t=new e.api.Selection,n=t.getContaining(function(e){return/^(H[1-6])$/.test(e.nodeName)});return e.api.CommandPatch.prototype.queryEnabled.apply(this,arguments)&&!n},e.commandPatches.bold=t}}}),define("plugins/core/patches/commands/indent",[],function(){var e="\ufeff";return function(){return function(t){var n=new t.api.CommandPatch("indent");n.execute=function(n){t.transactionManager.run(function(){var o=new t.api.Selection,r=o.range,s="P"===r.commonAncestorContainer.nodeName&&"<br>"===r.commonAncestorContainer.innerHTML;if(s){var i=document.createTextNode(e);r.insertNode(i),r.setStart(i,0),r.setEnd(i,0),o.selection.removeAllRanges(),o.selection.addRange(r)}t.api.CommandPatch.prototype.execute.call(this,n),o=new t.api.Selection;var a=o.getContaining(function(e){return"BLOCKQUOTE"===e.nodeName});a&&a.removeAttribute("style")}.bind(this))},t.commandPatches.indent=n}}}),define("plugins/core/patches/commands/insert-html",[],function(){return function(){return function(e){var t=new e.api.CommandPatch("insertHTML"),n=e.element;t.execute=function(t){e.transactionManager.run(function(){function sanitize(t){var r=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,null,!1),e=r.firstChild();if(!e)return;do"SPAN"===e.nodeName?n.unwrap(t,e):(e.style.lineHeight=null,""===e.getAttribute("style")&&e.removeAttribute("style")),sanitize(e);while(e=r.nextSibling())}e.api.CommandPatch.prototype.execute.call(this,t),sanitize(e.el)}.bind(this))},e.commandPatches.insertHTML=t}}}),define("plugins/core/patches/commands/insert-list",[],function(){return function(){return function(e){var r=e.element,n=e.node,t=function(t){e.api.CommandPatch.call(this,t)};t.prototype=Object.create(e.api.CommandPatch.prototype),t.prototype.constructor=t,t.prototype.execute=function(t){e.transactionManager.run(function(){if(e.api.CommandPatch.prototype.execute.call(this,t),this.queryState()){var a=new e.api.Selection,i=a.getContaining(function(e){return"OL"===e.nodeName||"UL"===e.nodeName});if(i.nextElementSibling&&0===i.nextElementSibling.childNodes.length&&n.removeNode(i.nextElementSibling),i){var o=i.parentNode;o&&/^(H[1-6]|P)$/.test(o.nodeName)&&(a.placeMarkers(),n.insertAfter(i,o),a.selectMarkers(),2===o.childNodes.length&&n.isEmptyTextNode(o.firstChild)&&n.removeNode(o),0===o.childNodes.length&&n.removeNode(o))}var s=Array.prototype.slice.call(i.childNodes);s.forEach(function(e){var t=Array.prototype.slice.call(e.childNodes);t.forEach(function(t){if("SPAN"===t.nodeName){var n=t;r.unwrap(e,n)}else t.nodeType===Node.ELEMENT_NODE&&(t.style.lineHeight=null,""===t.getAttribute("style")&&t.removeAttribute("style"))})})}}.bind(this))},e.commandPatches.insertOrderedList=new t("insertOrderedList"),e.commandPatches.insertUnorderedList=new t("insertUnorderedList")}}}),define("plugins/core/patches/commands/outdent",[],function(){return function(){return function(e){var t=new e.api.CommandPatch("outdent");t.execute=function(){e.transactionManager.run(function(){var n=new e.api.Selection,r=n.range,t=n.getContaining(function(e){return"BLOCKQUOTE"===e.nodeName});if("BLOCKQUOTE"===r.commonAncestorContainer.nodeName){n.placeMarkers(),n.selectMarkers(!0);var s=r.cloneContents();t.parentNode.insertBefore(s,t),r.deleteContents(),n.selectMarkers(),""===t.textContent&&t.parentNode.removeChild(t)}else{var o=n.getContaining(function(e){return"P"===e.nodeName});if(o){var i=new e.api.Node(o).nextAll();if(i.length){var a=document.createElement(t.nodeName);i.forEach(function(e){a.appendChild(e)}),t.parentNode.insertBefore(a,t.nextElementSibling)}n.placeMarkers(),t.parentNode.insertBefore(o,t.nextElementSibling),n.selectMarkers(),""===t.innerHTML&&t.parentNode.removeChild(t)}else e.api.CommandPatch.prototype.execute.call(this)}}.bind(this))},e.commandPatches.outdent=t}}}),define("plugins/core/patches/commands/create-link",[],function(){return function(){return function(e){var t=new e.api.CommandPatch("createLink");e.commandPatches.createLink=t,t.execute=function(r){var n=new e.api.Selection;if(n.range.collapsed){var t=document.createElement("a");t.setAttribute("href",r),t.textContent=r,n.range.insertNode(t);var o=document.createRange();o.setStartBefore(t),o.setEndAfter(t),n.selection.removeAllRanges(),n.selection.addRange(o)}else e.api.CommandPatch.prototype.execute.call(this,r)}}}}),define("plugins/core/patches/events",[],function(){return function(){return function(e){var t=e.element;e.allowsBlockElements()&&e.el.addEventListener("keyup",function(o){if(8===o.keyCode||46===o.keyCode){var n=new e.api.Selection,r=n.getContaining(function(e){return"P"===e.nodeName});r&&e.transactionManager.run(function(){n.placeMarkers();var e=Array.prototype.slice.call(r.childNodes);e.forEach(function(e){if("SPAN"===e.nodeName){var n=e;t.unwrap(r,n)}else e.nodeType===Node.ELEMENT_NODE&&(e.style.lineHeight=null,""===e.getAttribute("style")&&e.removeAttribute("style"))}),n.selectMarkers()},!0)}})}}}),define("plugins/core/patches",["./patches/commands/bold","./patches/commands/indent","./patches/commands/insert-html","./patches/commands/insert-list","./patches/commands/outdent","./patches/commands/create-link","./patches/events"],function(e,t,n,r,o,i,a){return{commands:{bold:e,indent:t,insertHTML:n,insertList:r,outdent:o,createLink:i},events:a}}),define("plugins/core/set-root-p-element",[],function(){return function(){return function(e){""===e.getHTML().trim()&&e.setContent("<p><br></p>")}}}),define("api/command-patch",[],function(){return function(e){function CommandPatch(e){this.commandName=e}return CommandPatch.prototype.execute=function(t){e.transactionManager.run(function(){document.execCommand(this.commandName,!1,t||null)}.bind(this))},CommandPatch.prototype.queryState=function(){return document.queryCommandState(this.commandName)},CommandPatch.prototype.queryEnabled=function(){return document.queryCommandEnabled(this.commandName)},CommandPatch}}),define("api/command",[],function(){return function(e){function Command(t){this.commandName=t,this.patch=e.commandPatches[this.commandName]}return Command.prototype.execute=function(t){this.patch?this.patch.execute(t):e.transactionManager.run(function(){document.execCommand(this.commandName,!1,t||null)}.bind(this))},Command.prototype.queryState=function(){return this.patch?this.patch.queryState():document.queryCommandState(this.commandName)},Command.prototype.queryEnabled=function(){return this.patch?this.patch.queryEnabled():document.queryCommandEnabled(this.commandName)},Command}}),define("api/node",[],function(){function Node(e){this.node=e}return Node.prototype.getAncestor=function(n,r){var t=function(e){return n===e};if(t(this.node))return;for(var e=this.node.parentNode;e&&!t(e);){if(r(e))return e;e=e.parentNode}},Node.prototype.nextAll=function(){for(var t=[],e=this.node.nextSibling;e;)t.push(e),e=e.nextSibling;return t},Node}),define("api/selection",["../element"],function(e){return function(e){function Selection(){for(var r=document,t=e.el.parentNode;t&&t.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&t.nodeType!==Node.DOCUMENT_NODE;)t=t.parentNode;if(t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.getSelection&&(r=t),this.selection=r.getSelection(),this.selection.rangeCount&&this.selection.anchorNode){this.range=document.createRange();var n=document.createRange();this.range.setStart(this.selection.anchorNode,this.selection.anchorOffset),n.setStart(this.selection.focusNode,this.selection.focusOffset),this.range.compareBoundaryPoints(Range.START_TO_START,n)<=0?this.range.setEnd(this.selection.focusNode,this.selection.focusOffset):(this.range=n,this.range.setEnd(this.selection.anchorNode,this.selection.anchorOffset))}}return Selection.prototype.getContaining=function(n){var r=this.range;if(!r)return;var t=new e.api.Node(this.range.commonAncestorContainer),o=t.node&&e.el===t.node;return!o&&n(t.node)?t.node:t.getAncestor(e.el,n)},Selection.prototype.placeMarkers=function(){var a=this.range;if(!a)return;if(!e.el.offsetParent)return;var r=document.createRange();r.selectNodeContents(e.el);var s=this.range.compareBoundaryPoints(Range.START_TO_START,r)>=0,c=this.range.compareBoundaryPoints(Range.END_TO_END,r)<=0;if(s&&c){var t=document.createElement("em");t.classList.add("scribe-marker");var n=document.createElement("em");n.classList.add("scribe-marker");var o=this.range.cloneRange();if(o.collapse(!1),o.insertNode(n),n.nextSibling&&n.nextSibling.nodeType===Node.TEXT_NODE&&""===n.nextSibling.data&&n.parentNode.removeChild(n.nextSibling),n.previousSibling&&n.previousSibling.nodeType===Node.TEXT_NODE&&""===n.previousSibling.data&&n.parentNode.removeChild(n.previousSibling),!this.range.collapsed){var i=this.range.cloneRange();i.collapse(!0),i.insertNode(t),t.nextSibling&&t.nextSibling.nodeType===Node.TEXT_NODE&&""===t.nextSibling.data&&t.parentNode.removeChild(t.nextSibling),t.previousSibling&&t.previousSibling.nodeType===Node.TEXT_NODE&&""===t.previousSibling.data&&t.parentNode.removeChild(t.previousSibling)}this.selection.removeAllRanges(),this.selection.addRange(this.range)}},Selection.prototype.getMarkers=function(){return e.el.querySelectorAll("em.scribe-marker")},Selection.prototype.removeMarkers=function(){var e=this.getMarkers();Array.prototype.forEach.call(e,function(e){e.parentNode.removeChild(e)})},Selection.prototype.selectMarkers=function(n){var e=this.getMarkers();if(!e.length)return;var t=document.createRange();t.setStartBefore(e[0]),e.length>=2?t.setEndAfter(e[1]):t.setEndAfter(e[0]),n||this.removeMarkers(),this.selection.removeAllRanges(),this.selection.addRange(t)},Selection.prototype.isCaretOnNewLine=function(){function isEmptyInlineElement(r){for(var n=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,null,!1),e=n.root;e;){var t=e.childNodes.length;if(t>1||1===t&&""!==e.textContent.trim())return!1;if(0===t)return""===e.textContent.trim();e=n.nextNode()}}var e=this.getContaining(function(e){return"P"===e.nodeName});return e?isEmptyInlineElement(e):!1},Selection}}),define("api/simple-command",[],function(){return function(t,e){function SimpleCommand(t,n){e.api.Command.call(this,t),this._nodeName=n}return SimpleCommand.prototype=Object.create(t.Command.prototype),SimpleCommand.prototype.constructor=SimpleCommand,SimpleCommand.prototype.queryState=function(){var t=new e.api.Selection;return e.api.Command.prototype.queryState.call(this)&&!!t.getContaining(function(e){return e.nodeName===this._nodeName}.bind(this))},SimpleCommand}}),define("api",["./api/command-patch","./api/command","./api/node","./api/selection","./api/simple-command"],function(e,t,n,r,o){return function Api(i){this.CommandPatch=e(i),this.Command=t(i),this.Node=n,this.Selection=r(i),this.SimpleCommand=o(this,i)}}),define("transaction-manager",["lodash-amd/modern/objects/assign"],function(e){return function(t){function TransactionManager(){this.history=[]}return e(TransactionManager.prototype,{start:function(){this.history.push(1)},end:function(){this.history.pop(),0===this.history.length&&(t.pushHistory(),t.trigger("content-changed"))},run:function(e,n){this.start();try{e&&e()}finally{t._forceMerge=n===!0,this.end(),t._forceMerge=!1}}}),TransactionManager}}),define("undo-manager",[],function(){function UndoManager(t,e){this._stack=[],this._limit=t,this._fireEvent="undefined"!=typeof CustomEvent&&e&&e.dispatchEvent,this._ush=e,this.position=0,this.length=0}return UndoManager.prototype.transact=function(e,t){if(arguments.length<2)throw new TypeError("Not enough arguments to UndoManager.transact.");e.execute(),this._stack.splice(0,this.position),t&&this.length?this._stack[0].push(e):this._stack.unshift([e]),this.position=0,this._limit&&this._stack.length>this._limit?this.length=this._stack.length=this._limit:this.length=this._stack.length,this._fireEvent&&this._ush.dispatchEvent(new CustomEvent("DOMTransaction",{detail:{transactions:this._stack[0].slice()},bubbles:!0,cancelable:!1}))},UndoManager.prototype.undo=function(){if(this.position<this.length){for(var e=this._stack[this.position].length-1;e>=0;e--)this._stack[this.position][e].undo();this.position++,this._fireEvent&&this._ush.dispatchEvent(new CustomEvent("undo",{detail:{transactions:this._stack[this.position-1].slice()},bubbles:!0,cancelable:!1}))}},UndoManager.prototype.redo=function(){if(this.position>0){for(var e=0,t=this._stack[this.position-1].length;t>e;e++)this._stack[this.position-1][e].redo();this.position--,this._fireEvent&&this._ush.dispatchEvent(new CustomEvent("redo",{detail:{transactions:this._stack[this.position].slice()},bubbles:!0,cancelable:!1}))}},UndoManager.prototype.item=function(e){if(e>=0&&e<this.length)return this._stack[e].slice();return null},UndoManager.prototype.clearUndo=function(){this._stack.length=this.length=this.position},UndoManager.prototype.clearRedo=function(){this._stack.splice(0,this.position),this.position=0,this.length=this._stack.length},UndoManager}),define("event-emitter",["lodash-amd/modern/arrays/pull","js/vendor/immutable"],function(t,e){function EventEmitter(){this._listeners={}}return EventEmitter.prototype.on=function(t,n){var r=this._listeners[t]||e.Set();this._listeners[t]=r.add(n)},EventEmitter.prototype.off=function(r,n){var t=this._listeners[r]||e.Set();t=n?t["delete"](n):t.clear()},EventEmitter.prototype.trigger=function(n,r){for(var t=n.split(":");t.length;){var o=t.join(":"),i=this._listeners[o]||e.Set();i.forEach(function(e){e.apply(null,r)}),t.splice(t.length-1,1)}},EventEmitter}),define("config",["lodash-amd/modern/objects/defaults"],function(t){function checkOptions(n){var r=n||{};return Object.freeze(t(r,e))}var e={allowBlockElements:!0,debug:!1,undo:{manager:!1,enabled:!0,limit:100,interval:250},defaultCommandPatches:["bold","indent","insertHTML","insertList","outdent","createLink"]};return{defaultOptions:e,checkOptions:checkOptions}}),define("scribe",["./plugins/core/commands","./plugins/core/events","./plugins/core/formatters/html/replace-nbsp-chars","./plugins/core/formatters/html/enforce-p-elements","./plugins/core/formatters/html/ensure-selectable-containers","./plugins/core/formatters/plain-text/escape-html-characters","./plugins/core/inline-elements-mode","./plugins/core/patches","./plugins/core/set-root-p-element","./api","./transaction-manager","./undo-manager","./event-emitter","./element","./node","js/vendor/immutable","./config"],function(o,s,u,m,f,h,r,t,i,a,g,c,n,d,l,e,p){function Scribe(v,y){n.call(this),this.el=v,this.commands={},this.options=p.checkOptions(y),this.commandPatches={},this._plainTextFormatterFactory=new FormatterFactory,this._htmlFormatterFactory=new HTMLFormatterFactory,this.api=new a(this),this.node=l,this.element=d,this.Immutable=e;var N=g(this);this.transactionManager=new N,this.undoManager=!1,this.options.undo.enabled&&(this.options.undo.manager?this.undoManager=this.options.undo.manager:this.undoManager=new c(this.options.undo.limit,this.el),this._merge=!1,this._forceMerge=!1,this._mergeTimer=0,this._lastItem={content:""}),this.setHTML(this.getHTML()),this.el.setAttribute("contenteditable",!0),this.el.addEventListener("input",function(){this.transactionManager.run()}.bind(this),!1),this.allowsBlockElements()?(this.use(i()),this.use(m()),this.use(f())):this.use(r());var E=e.List.of(h,u),b=e.List.of(t.events),C=e.List(this.options.defaultCommandPatches).map(function(e){return t.commands[e]}),T=e.List.of("indent","insertList","outdent","redo","subscript","superscript","undo").map(function(e){return o[e]}),M=e.List().concat(E,b,C,T);M.forEach(function(e){this.use(e())}.bind(this)),this.use(s())}function FormatterFactory(){this.formatters=e.List()}function HTMLFormatterFactory(){this.formatters={sanitize:e.List(),normalize:e.List(),"export":e.List()}}return Scribe.prototype=Object.create(n.prototype),Scribe.prototype.use=function(e){return e(this),this},Scribe.prototype.setHTML=function(e,t){this._lastItem.content=e,t&&(this._skipFormatters=!0),this.el.innerHTML!==e&&(this.el.innerHTML=e)},Scribe.prototype.getHTML=function(){return this.el.innerHTML},Scribe.prototype.getContent=function(){return this._htmlFormatterFactory.formatForExport(this.getHTML().replace(/<br>$/,""))},Scribe.prototype.getTextContent=function(){return this.el.textContent},Scribe.prototype.pushHistory=function(){var e=this;if(e.options.undo.enabled){var o=e._lastItem.content.replace(/<em class="scribe-marker">/g,"").replace(/<\/em>/g,"");if(e.getHTML()!==o){var t=new e.api.Selection;t.placeMarkers();var n=e.getHTML();t.removeMarkers();var r=e.undoManager.item(e.undoManager.position);return(e._merge||e._forceMerge)&&r&&e._lastItem==r[0]?e._lastItem.content=n:(e._lastItem={previousItem:e._lastItem,content:n,scribe:e,execute:function(){},undo:function(){this.scribe.restoreFromHistory(this.previousItem)},redo:function(){this.scribe.restoreFromHistory(this)}},e.undoManager.transact(e._lastItem,!1)),clearTimeout(e._mergeTimer),e._merge=!0,e._mergeTimer=setTimeout(function(){e._merge=!1},e.options.undo.interval),!0}}return!1},Scribe.prototype.getCommand=function(e){return this.commands[e]||this.commandPatches[e]||new this.api.Command(e)},Scribe.prototype.restoreFromHistory=function(e){this._lastItem=e,this.setHTML(e.content,!0);var t=new this.api.Selection;t.selectMarkers(),this.trigger("content-changed")},Scribe.prototype.allowsBlockElements=function(){return this.options.allowBlockElements},Scribe.prototype.setContent=function(e){this.allowsBlockElements()||(e+="<br>"),this.setHTML(e),this.trigger("content-changed")},Scribe.prototype.insertPlainText=function(e){this.insertHTML("<p>"+this._plainTextFormatterFactory.format(e)+"</p>")},Scribe.prototype.insertHTML=function(e){this.getCommand("insertHTML").execute(this._htmlFormatterFactory.format(e))},Scribe.prototype.isDebugModeEnabled=function(){return this.options.debug},Scribe.prototype.registerHTMLFormatter=function(e,t){this._htmlFormatterFactory.formatters[e]=this._htmlFormatterFactory.formatters[e].push(t)},Scribe.prototype.registerPlainTextFormatter=function(e){this._plainTextFormatterFactory.formatters=this._plainTextFormatterFactory.formatters.push(e)},FormatterFactory.prototype.format=function(e){var t=this.formatters.reduce(function(e,t){return t(e)},e);return t},HTMLFormatterFactory.prototype=Object.create(FormatterFactory.prototype),HTMLFormatterFactory.prototype.constructor=HTMLFormatterFactory,HTMLFormatterFactory.prototype.format=function(e){var t=this.formatters.sanitize.concat(this.formatters.normalize),n=t.reduce(function(e,t){return t(e)},e);return n},HTMLFormatterFactory.prototype.formatForExport=function(e){return this.formatters["export"].reduce(function(e,t){return t(e)},e)},Scribe});
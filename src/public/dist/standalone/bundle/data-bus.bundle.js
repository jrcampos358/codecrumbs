(window.webpackJsonpcodecrumbs=window.webpackJsonpcodecrumbs||[]).push([[4],{1173:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),a=n(139),u=n(137),i=n(10),c=n(15);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,l(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,r.a.Component),function(t,e,n){e&&f(t.prototype,e),n&&f(t,n)}(e,[{key:"componentDidMount",value:function(){return this.props.standalone?this.setupStandalone():this.setupLocal()}},{key:"setupStandalone",value:function(){var t=this.props;(0,t.setPredefinedState)(t.predefinedState)}},{key:"setupLocal",value:function(){var t=this;Object(u.a)(function(e){var n=e.type,o=e.data;return t.onSocketEvent(n,o)})}},{key:"handleInitSyncEvent",value:function(t){(0,this.props.setInitialSourceData)(t)}},{key:"handleUpdateSyncEvent",value:function(t){(0,this.props.setChangedSourceData)(t)}},{key:"onSocketEvent",value:function(t,e){switch(t){case i.f.INIT_SOURCE_FILES_SYNC:return this.handleInitSyncEvent(e);case i.f.UPDATE_SOURCE_FILE_SYNC:return this.handleUpdateSyncEvent(e)}}},{key:"render",value:function(){return r.a.createElement("div",{className:"DataBus-container"})}}]),e}(),d={setInitialSourceData:c.k,setChangedSourceData:c.i,setPredefinedState:c.l};e.default=Object(a.b)(null,d)(b)}}]);
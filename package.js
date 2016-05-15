
!function(a,b){function c(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function d(){return z++}function e(a){return a.match(C)[0]}function f(a){for(a=a.replace(D,"/"),a=a.replace(F,"$1/");a.match(E);)a=a.replace(E,"/");return a}function g(a){var b=a.length-1,c=a.charAt(b);return"#"===c?a.substring(0,b):".js"===a.substring(b-2)||a.indexOf("?")>0||"/"===c?a:a+".js"}function h(a){var b=u.alias;return b&&w(b[a])?b[a]:a}function i(a){var b=u.paths,c;return b&&(c=a.match(G))&&w(b[c[1]])&&(a=b[c[1]]+c[2]),a}function j(a){var b=u.vars;return b&&a.indexOf("{")>-1&&(a=a.replace(H,function(a,c){return w(b[c])?b[c]:a})),a}function k(a){var b=u.map,c=a;if(b)for(var d=0,e=b.length;e>d;d++){var f=b[d];if(c=y(f)?f(a)||a:a.replace(f[0],f[1]),c!==a)break}return c}function l(a,b){var c,d=a.charAt(0);if(I.test(a))c=a;else if("."===d)c=f((b?e(b):u.cwd)+a);else if("/"===d){var g=u.cwd.match(J);c=g?g[0]+a.substring(1):a}else c=u.base+a;return 0===c.indexOf("//")&&(c=location.protocol+c),c}function m(a,b){if(!a)return"";a=h(a),a=i(a),a=j(a),a=g(a);var c=l(a,b);return c=k(c)}function n(a){return a.hasAttribute?a.src:a.getAttribute("src",4)}function o(a,b,c){var d=K.createElement("script");if(c){var e=y(c)?c(a):c;e&&(d.charset=e)}p(d,b,a),d.async=!0,d.src=a,R=d,Q?P.insertBefore(d,Q):P.appendChild(d),R=null}function p(a,b,c){function d(){a.onload=a.onerror=a.onreadystatechange=null,u.debug||P.removeChild(a),a=null,b()}var e="onload"in a;e?(a.onload=d,a.onerror=function(){B("error",{uri:c,node:a}),d()}):a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&d()}}function q(){if(R)return R;if(S&&"interactive"===S.readyState)return S;for(var a=P.getElementsByTagName("script"),b=a.length-1;b>=0;b--){var c=a[b];if("interactive"===c.readyState)return S=c}}function r(a){var b=[];return a.replace(U,"").replace(T,function(a,c,d){d&&b.push(d)}),b}function s(a,b){this.uri=a,this.dependencies=b||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!a.seajs){var t=a.seajs={version:"2.3.0"},u=t.data={},v=c("Object"),w=c("String"),x=Array.isArray||c("Array"),y=c("Function"),z=0,A=u.events={};t.on=function(a,b){var c=A[a]||(A[a]=[]);return c.push(b),t},t.off=function(a,b){if(!a&&!b)return A=u.events={},t;var c=A[a];if(c)if(b)for(var d=c.length-1;d>=0;d--)c[d]===b&&c.splice(d,1);else delete A[a];return t};var B=t.emit=function(a,b){var c=A[a],d;if(c){c=c.slice();for(var e=0,f=c.length;f>e;e++)c[e](b)}return t},C=/[^?#]*\//,D=/\/\.\//g,E=/\/[^/]+\/\.\.\//,F=/([^:/])\/+\//g,G=/^([^/:]+)(\/.+)$/,H=/{([^{]+)}/g,I=/^\/\/.|:\//,J=/^.*?\/\/.*?\//,K=document,L=location.href&&0!==location.href.indexOf("about:")?e(location.href):"",M=K.scripts,N=K.getElementById("seajsnode")||M[M.length-1],O=e(n(N)||L);t.resolve=m;var P=K.head||K.getElementsByTagName("head")[0]||K.documentElement,Q=P.getElementsByTagName("base")[0],R,S;t.request=o;var T=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,U=/\\\\/g,V=t.cache={},W,X={},Y={},Z={},$=s.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};s.prototype.resolve=function(){for(var a=this,b=a.dependencies,c=[],d=0,e=b.length;e>d;d++)c[d]=s.resolve(b[d],a.uri);return c},s.prototype.load=function(){var a=this;if(!(a.status>=$.LOADING)){a.status=$.LOADING;var c=a.resolve();B("load",c);for(var d=a._remain=c.length,e,f=0;d>f;f++)e=s.get(c[f]),e.status<$.LOADED?e._waitings[a.uri]=(e._waitings[a.uri]||0)+1:a._remain--;if(0===a._remain)return a.onload(),b;var g={};for(f=0;d>f;f++)e=V[c[f]],e.status<$.FETCHING?e.fetch(g):e.status===$.SAVED&&e.load();for(var h in g)g.hasOwnProperty(h)&&g[h]()}},s.prototype.onload=function(){var a=this;a.status=$.LOADED,a.callback&&a.callback();var b=a._waitings,c,d;for(c in b)b.hasOwnProperty(c)&&(d=V[c],d._remain-=b[c],0===d._remain&&d.onload());delete a._waitings,delete a._remain},s.prototype.fetch=function(a){function c(){t.request(g.requestUri,g.onRequest,g.charset)}function d(){delete X[h],Y[h]=!0,W&&(s.save(f,W),W=null);var a,b=Z[h];for(delete Z[h];a=b.shift();)a.load()}var e=this,f=e.uri;e.status=$.FETCHING;var g={uri:f};B("fetch",g);var h=g.requestUri||f;return!h||Y[h]?(e.load(),b):X[h]?(Z[h].push(e),b):(X[h]=!0,Z[h]=[e],B("request",g={uri:f,requestUri:h,onRequest:d,charset:u.charset}),g.requested||(a?a[g.requestUri]=c:c()),b)},s.prototype.exec=function(){function a(b){return s.get(a.resolve(b)).exec()}var c=this;if(c.status>=$.EXECUTING)return c.exports;c.status=$.EXECUTING;var e=c.uri;a.resolve=function(a){return s.resolve(a,e)},a.async=function(b,c){return s.use(b,c,e+"_async_"+d()),a};var f=c.factory,g=y(f)?f(a,c.exports={},c):f;return g===b&&(g=c.exports),delete c.factory,c.exports=g,c.status=$.EXECUTED,B("exec",c),g},s.resolve=function(a,b){var c={id:a,refUri:b};return B("resolve",c),c.uri||t.resolve(c.id,b)},s.define=function(a,c,d){var e=arguments.length;1===e?(d=a,a=b):2===e&&(d=c,x(a)?(c=a,a=b):c=b),!x(c)&&y(d)&&(c=r(""+d));var f={id:a,uri:s.resolve(a),deps:c,factory:d};if(!f.uri&&K.attachEvent){var g=q();g&&(f.uri=g.src)}B("define",f),f.uri?s.save(f.uri,f):W=f},s.save=function(a,b){var c=s.get(a);c.status<$.SAVED&&(c.id=b.id||a,c.dependencies=b.deps||[],c.factory=b.factory,c.status=$.SAVED,B("save",c))},s.get=function(a,b){return V[a]||(V[a]=new s(a,b))},s.use=function(b,c,d){var e=s.get(d,x(b)?b:[b]);e.callback=function(){for(var b=[],d=e.resolve(),f=0,g=d.length;g>f;f++)b[f]=V[d[f]].exec();c&&c.apply(a,b),delete e.callback},e.load()},t.use=function(a,b){return s.use(a,b,u.cwd+"_use_"+d()),t},s.define.cmd={},a.define=s.define,t.Module=s,u.fetchedList=Y,u.cid=d,t.require=function(a){var b=s.get(s.resolve(a));return b.status<$.EXECUTING&&(b.onload(),b.exec()),b.exports},u.base=O,u.dir=O,u.cwd=L,u.charset="utf-8",t.config=function(a){for(var b in a){var c=a[b],d=u[b];if(d&&v(d))for(var e in c)d[e]=c[e];else x(d)?c=d.concat(c):"base"===b&&("/"!==c.slice(-1)&&(c+="/"),c=l(c)),u[b]=c}return B("config",a),t}}}(this);
var debug = false;
seajs.config({
	base 	: '/static/scripts/',
	charset : 'utf-8',
	timeout : 5*60*1000,
	debug	: debug
});


define("config/errorcode",'config/errorcode', function(require, exports, module){
	var errorMsg = {
		'-1': '服务器开小差了',
		'-2': '个人信息不完整哦',
		'-3': '参数错误',
		'-10': '服务器发生未知错误，赶快告诉薯队长吧',
		'-100': '登录态过期了，请重新登录吧',
		'-101': '未登录哦，请先登录吧',
		'-102': '您的账号处于禁言状态，请联系小红书微信号',
		'-200': '笔记发布重复了',
		'-201': '重复举报了',
		'-202': '重复购买贴纸',
		'-9000': '查找不到卖家',
		'-9001': 'email已经被注册过了',
		'-9002': '错误的登录密码',
		'-9003': '操作人不是订单所有者',
		'-9004': '非法的订单状态',
		'-9005': '错误的订单修改状态',
		'-9007': '操作人不是商品的所有者',
		'-9008': '商品不存在',
		'-9009': '该商品已被删除，无法操作',
		'-9010': '该商品已下架，无法操作',
		'-9011': '该Facebook已经被绑定过',
		'-9012': '该微博已经被绑定过',
		'-9013': '该微信已经被绑定过',
		'-9014': '该订单已经被支付过',
		'-9015': '订单已过期',
		'-9016': '购物车中的卖家不是同一个',
		'-9017': '商品不在购物车中',
		'-9018': '购物车为空',
		'-9019': '抢购已失效',
		'-9020': '小分队已失效或已经组满',
		'-9021': '已购买过此抢购，每人限购一件',
		'-9022': '已购买过此促销，每人限购一件',
		'-9023': '该商品已售完，下次赶早哦亲',
		'-9024': '收货人信息格式错误',
		'-9028': '此抢购暂不支持此支付方式'
	}
	module.exports = errorMsg;
});


define("lib/zepto",function(require, exports, module){
var Zepto=function(){function _(t){return null==t?String(t):E[S.call(t)]||"object"}function A(t){return"function"==_(t)}function L(t){return null!=t&&t==t.window}function k(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==_(t)}function Z(t){return D(t)&&!L(t)&&Object.getPrototypeOf(t)==Object.prototype}function $(t){return"number"==typeof t.length}function R(t){return a.call(t,function(t){return null!=t})}function F(t){return t.length>0?n.fn.concat.apply([],t):t}function z(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function I(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function q(t,e){return"number"!=typeof e||c[z(t)]?e:e+"px"}function U(t){var e,n;return u[t]||(e=s.createElement(t),s.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function B(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function H(n,i,r){for(e in i)r&&(Z(i[e])||M(i[e]))?(Z(i[e])&&!Z(n[e])&&(n[e]={}),M(i[e])&&!M(n[e])&&(n[e]=[]),H(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function V(t,e){return null==e?n(t):n(t).filter(e)}function X(t,e,n,i){return A(e)?e.call(t,n,i):e}function Y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function J(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n in t.childNodes)G(t.childNodes[n],e)}var t,e,n,i,j,C,r=[],o=r.slice,a=r.filter,s=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=s.createElement("table"),b=s.createElement("tr"),w={tr:s.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:b,th:b,"*":s.createElement("div")},x=/complete|loaded|interactive/,T=/^[\w-]*$/,E={},S=E.toString,P={},O=s.createElement("div"),N={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},M=Array.isArray||function(t){return t instanceof Array};return P.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~P.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},P.fragment=function(e,i,r){var a,u,f;return h.test(e)&&(a=n(s.createElement(RegExp.$1))),a||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in w||(i="*"),f=w[i],f.innerHTML=""+e,a=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),Z(r)&&(u=n(a),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),a},P.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},P.isZ=function(t){return t instanceof P.Z},P.init=function(e,i){var r;if(!e)return P.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=P.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=P.qsa(s,e)}else{if(A(e))return n(s).ready(e);if(P.isZ(e))return e;if(M(e))r=R(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=P.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=P.qsa(s,e)}}return P.Z(r,e)},n=function(t,e){return P.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){H(t,n,e)}),t},P.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],a=i||r?e.slice(1):e,s=T.test(a);return k(t)&&s&&i?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(s&&!i?r?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=function(t,e){return t!==e&&t.contains(e)},n.type=_,n.isFunction=A,n.isWindow=L,n.isArray=M,n.isPlainObject=Z,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=j,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if($(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return F(i)},n.each=function(t,e){var n,i;if($(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return a.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){E["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return x.test(s.readyState)&&s.body?t(n):s.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return A(t)?this.not(this.not(t)):n(a.call(this,function(e){return P.matches(e,t)}))},add:function(t,e){return n(C(this.concat(n(t,e))))},is:function(t){return this.length>0&&P.matches(this[0],t)},not:function(e){var i=[];if(A(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):$(e)&&A(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(P.qsa(this[0],t)):this.map(function(){return P.qsa(this,t)}):[]},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:P.matches(i,t));)i=i!==e&&!k(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!k(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return V(e,t)},parent:function(t){return V(C(this.pluck("parentNode")),t)},children:function(t){return V(this.map(function(){return B(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return V(this.map(function(t,e){return a.call(B(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=U(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=A(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=A(t);return this.each(function(i){var r=n(this),o=r.contents(),a=e?t.call(this,i):t;o.length?o.wrapAll(a):r.append(a)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var i=this.innerHTML;n(this).empty().append(X(this,t,e,i))})},text:function(e){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e===t?"":""+e})},attr:function(n,i){var r;return"string"==typeof n&&i===t?0==this.length||1!==this[0].nodeType?t:"value"==n&&"INPUT"==this[0].nodeName?this.val():!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)Y(this,e,n[e]);else Y(this,n,X(this,i,t,this.getAttribute(n)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&Y(this,t)})},prop:function(e,n){return e=N[e]||e,n===t?this[0]&&this[0][e]:this.each(function(t){this[e]=X(this,n,t,this[e])})},data:function(e,n){var i=this.attr("data-"+e.replace(m,"-$1").toLowerCase(),n);return null!==i?J(i):t},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=X(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=X(this,t,e,i.offset()),o=i.offsetParent().offset(),a={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(a.position="relative"),i.css(a)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[j(t)]||o.getPropertyValue(t);if(M(t)){var a={};return n.each(M(t)?t:[t],function(t,e){a[e]=r.style[j(e)]||o.getPropertyValue(e)}),a}}var s="";if("string"==_(t))i||0===i?s=z(t)+":"+q(t,i):this.each(function(){this.style.removeProperty(z(t))});else for(e in t)t[e]||0===t[e]?s+=z(e)+":"+q(e,t[e])+";":this.each(function(){this.style.removeProperty(z(e))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},I(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=W(this),o=X(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?W(this,""):(i=W(this),X(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(I(t)," ")}),void W(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),a=X(this,e,r,W(this));a.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||s.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,a=this[0];return r===t?L(a)?a["inner"+i]:k(a)?a.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){a=n(this),a.css(e,X(this,r,t,a[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=_(e),"object"==t||"array"==t||null==e?e:P.fragment(e)}),a=this.length>1;return r.length<1?this:this.each(function(t,s){o=i?s:s.parentNode,s=0==e?s.nextSibling:1==e?s.firstChild:2==e?s:null,r.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!o)return n(t).remove();G(o.insertBefore(t,s),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),P.Z.prototype=n.fn,P.uniq=C,P.deserializeValue=J,n.zepto=P,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(a[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,s,u,f){var h=l(e),d=a[h]||(a[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var a=p(i);a.fn=r,a.sel=s,a.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var l=u||r;a.proxy=function(t){if(t=E(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},a.i=d.length,d.push(a),"addEventListener"in e&&e.addEventListener(g(a.e),a.proxy,m(a,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function E(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(T,function(t,n){var r=i[t];e[t]=function(){return this[n]=b,r&&r.apply(i,arguments)},e[n]=w}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function S(t){var e,i={originalEvent:t};for(e in t)x.test(e)||t[e]===n||(i[e]=t[e]);return E(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},a={},s={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};s.click=s.mousedown=s.mouseup=s.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){if(r(e)){var i=function(){return e.apply(n,arguments)};return i._zid=l(e),i}if(o(n))return t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var b=function(){return!0},w=function(){return!1},x=/^([A-Z]|returnValue$|layer[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,a,s,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,a,s,e,f)}),h):(o(a)||r(u)||u===!1||(u=s,s=a,a=n),(r(s)||s===!1)&&(u=s,s=n),u===!1&&(u=w),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),a&&(l=function(e){var n,o=t(e.target).closest(a,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,s,a,l||c)}))},t.fn.off=function(e,i,a){var s=this;return e&&!o(e)?(t.each(e,function(t,e){s.off(t,i,e)}),s):(o(i)||r(a)||a===!1||(a=i,i=n),a===!1&&(a=w),s.each(function(){y(this,e,a,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):E(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(a,s){i=S(o(e)?t.Event(e):e),i._args=n,i.target=s,t.each(h(s,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(s[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),E(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":a.test(t)?"script":s.test(t)&&"xml")||"text"}function x(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function T(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=x(e.url,e.data),e.data=void 0)}function E(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function P(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?P(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,s=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,a=(t.isFunction(o)?o():o)||"jsonp"+ ++e,s=n.createElement("script"),u=window[a],c=function(e){t(s).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(s).on("load error",function(e,n){clearTimeout(h),t(s).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[a]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[a]=function(){f=arguments},s.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),n.head.appendChild(s),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),T(n),n.cache===!1&&(n.url=x(n.url,"_="+Date.now()));var a=n.dataType,s=/\?.+=\?/.test(n.url);if("jsonp"==a||s)return s||(n.url=x(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var E,u=n.accepts[a],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=b,clearTimeout(E);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){a=a||w(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==a?(1,eval)(e):"xml"==a?e=d.responseXML:"json"==a&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;var S="async"in n?n.async:!0;if(d.open(n.type,n.url,S,n.username,n.password),n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];for(r in f)y.apply(d,f[r]);return n.timeout>0&&(E=setTimeout(function(){d.onreadystatechange=b,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(E.apply(null,arguments))},t.post=function(){var e=E.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=E.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var s,r=this,a=e.split(/\s/),u=E(e,n,i),f=u.success;return a.length>1&&(u.url=a[0],s=a[1]),u.success=function(e){r.html(s?t("<div>").html(e.replace(o,"")).find(s):e),f&&f.apply(r,arguments)},t.ajax(u),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},P(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t([].slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(t){function u(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function f(){o=null,e.last&&(e.el.trigger("longTap"),e={})}function c(){o&&clearTimeout(o),o=null}function l(){n&&clearTimeout(n),i&&clearTimeout(i),r&&clearTimeout(r),o&&clearTimeout(o),n=i=r=o=null,e={}}function h(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function p(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var n,i,r,o,s,e={},a=750;t(document).ready(function(){var d,m,y,b,g=0,v=0;"MSGesture"in window&&(s=new MSGesture,s.target=document.body),t(document).bind("MSGestureEnd",function(t){var n=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;n&&(e.el.trigger("swipe"),e.el.trigger("swipe"+n))}).on("touchstart MSPointerDown pointerdown",function(i){(!(b=p(i,"down"))||h(i))&&(y=b?i:i.touches[0],i.touches&&1===i.touches.length&&e.x2&&(e.x2=void 0,e.y2=void 0),d=Date.now(),m=d-(e.last||d),e.el=t("tagName"in y.target?y.target:y.target.parentNode),n&&clearTimeout(n),e.x1=y.pageX,e.y1=y.pageY,m>0&&250>=m&&(e.isDoubleTap=!0),e.last=d,o=setTimeout(f,a),s&&b&&s.addPointer(i.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(b=p(t,"move"))||h(t))&&(y=b?t:t.touches[0],c(),e.x2=y.pageX,e.y2=y.pageY,g+=Math.abs(e.x1-e.x2),v+=Math.abs(e.y1-e.y2))}).on("touchend MSPointerUp pointerup",function(o){(!(b=p(o,"up"))||h(o))&&(c(),e.x2&&Math.abs(e.x1-e.x2)>30||e.y2&&Math.abs(e.y1-e.y2)>30?r=setTimeout(function(){e.el.trigger("swipe"),e.el.trigger("swipe"+u(e.x1,e.x2,e.y1,e.y2)),e={}},0):"last"in e&&(30>g&&30>v?i=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=l,e.el.trigger(i),e.isDoubleTap?(e.el&&e.el.trigger("doubleTap"),e={}):n=setTimeout(function(){n=null,e.el&&e.el.trigger("singleTap"),e={}},250)},0):e={}),g=v=0)}).on("touchcancel MSPointerCancel pointercancel",l),t(window).on("scroll",l)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto),function(t,e){function w(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function x(t){return i?i+t:t.toLowerCase()}var i,c,l,h,p,d,m,g,v,y,n="",a={Webkit:"webkit",Moz:"",O:"o"},s=window.document,u=s.createElement("div"),f=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,b={};t.each(a,function(t,r){return u.style[t+"TransitionProperty"]!==e?(n="-"+t.toLowerCase()+"-",i=r,!1):void 0}),c=n+"transform",b[l=n+"transition-property"]=b[h=n+"transition-duration"]=b[d=n+"transition-delay"]=b[p=n+"transition-timing-function"]=b[m=n+"animation-name"]=b[g=n+"animation-duration"]=b[y=n+"animation-delay"]=b[v=n+"animation-timing-function"]="",t.fx={off:i===e&&u.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:n,transitionEnd:x("TransitionEnd"),animationEnd:x("AnimationEnd")},t.fn.animate=function(n,i,r,o,a){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,i,r,o,a)},t.fn.anim=function(n,i,r,o,a){var s,x,S,u={},T="",E=this,P=t.fx.transitionEnd,j=!1;if(i===e&&(i=t.fx.speeds._default/1e3),a===e&&(a=0),t.fx.off&&(i=0),"string"==typeof n)u[m]=n,u[g]=i+"s",u[y]=a+"s",u[v]=r||"linear",P=t.fx.animationEnd;else{x=[];for(s in n)f.test(s)?T+=s+"("+n[s]+") ":(u[s]=n[s],x.push(w(s)));T&&(u[c]=T,x.push(c)),i>0&&"object"==typeof n&&(u[l]=x.join(", "),u[h]=i+"s",u[d]=a+"s",u[p]=r||"linear")}return S=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(P,S)}else t(this).unbind(P,S);j=!0,t(this).css(b),o&&o.call(this)},i>0&&(this.bind(P,S),setTimeout(function(){j||S.call(E)},1e3*i+25)),this.size()&&this.get(0).clientLeft,this.css(u),0>=i&&setTimeout(function(){E.each(function(){S.call(this)})},0),this},u=null}(Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),r=t.match(/(Android);?[\s\/]+([\d.]+)?/),o=!!t.match(/\(Macintosh\; Intel /),a=t.match(/(iPad).*OS\s([\d_]+)/),s=t.match(/(iPod)(.*OS\s([\d_]+))?/),u=!a&&t.match(/(iPhone\sOS)\s([\d_]+)/),f=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),c=t.match(/Windows Phone ([\d.]+)/),l=f&&t.match(/TouchPad/),h=t.match(/Kindle\/([\d.]+)/),p=t.match(/Silk\/([\d._]+)/),d=t.match(/(BlackBerry).*Version\/([\d.]+)/),m=t.match(/(BB10).*Version\/([\d.]+)/),g=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),v=t.match(/PlayBook/),y=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),b=t.match(/Firefox\/([\d.]+)/),w=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),x=!y&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),T=x||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),u&&!s&&(e.ios=e.iphone=!0,e.version=u[2].replace(/_/g,".")),a&&(e.ios=e.ipad=!0,e.version=a[2].replace(/_/g,".")),s&&(e.ios=e.ipod=!0,e.version=s[3]?s[3].replace(/_/g,"."):null),c&&(e.wp=!0,e.version=c[1]),f&&(e.webos=!0,e.version=f[2]),l&&(e.touchpad=!0),d&&(e.blackberry=!0,e.version=d[2]),m&&(e.bb10=!0,e.version=m[2]),g&&(e.rimtabletos=!0,e.version=g[2]),v&&(n.playbook=!0),h&&(e.kindle=!0,e.version=h[1]),p&&(n.silk=!0,n.version=p[1]),!p&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),y&&(n.chrome=!0,n.version=y[1]),b&&(n.firefox=!0,n.version=b[1]),w&&(n.ie=!0,n.version=w[1]),T&&(o||e.ios)&&(n.safari=!0,o&&(n.version=T[1])),x&&(n.webview=!0),e.tablet=!!(a||v||r&&!t.match(/Mobile/)||b&&t.match(/Tablet/)||w&&!t.match(/Phone/)&&t.match(/Touch/)),e.phone=!(e.tablet||e.ipod||!(r||u||f||d||m||y&&t.match(/Android/)||y&&t.match(/CriOS\/([\d.]+)/)||b&&t.match(/Mobile/)||w&&t.match(/Touch/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto);
;(function(e,t){function u(n,r,i,s,o){typeof r=="function"&&!o&&(o=r,r=t);var u={opacity:i};return s&&(u.scale=s,n.css(e.fx.cssPrefix+"transform-origin","0 0")),n.animate(u,r,null,o)}function a(t,n,r,i){return u(t,n,0,r,function(){s.call(e(this)),i&&i.call(this)})}var n=window.document,r=n.documentElement,i=e.fn.show,s=e.fn.hide,o=e.fn.toggle;e.fn.show=function(e,n){return i.call(this),e===t?e=0:this.css("opacity",0),u(this,e,1,"1,1",n)},e.fn.hide=function(e,n){return e===t?s.call(this):a(this,e,"0,0",n)},e.fn.toggle=function(n,r){return n===t||typeof n=="boolean"?o.call(this,n):this.each(function(){var t=e(this);t[t.css("display")=="none"?"show":"hide"](n,r)})},e.fn.fadeTo=function(e,t,n){return u(this,e,t,null,n)},e.fn.fadeIn=function(e,t){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,i.call(this).fadeTo(e,n,t)},e.fn.fadeOut=function(e,t){return a(this,e,null,t)},e.fn.fadeToggle=function(t,n){return this.each(function(){var r=e(this);r[r.css("opacity")==0||r.css("display")=="none"?"fadeIn":"fadeOut"](t,n)})}})(Zepto)
;(function(e,t){function n(t,n){var r=n.maxWidth,i=n.ellipsisChar;r||(r=t.width()),r*=n.maxLine;var s=e.trim(t.text()),o=t.clone().css({visibility:"hidden",whiteSpace:"nowrap",width:"auto",position:"absolute"}).appendTo(document.body),u=o.width();if(u>r){var a=Math.floor(s.length*r/u),f=s.substring(0,a)+i;u=o.text(f).width();if(u>r)while(u>r&&a>1)a--,f=s.substring(0,a)+i,u=o.text(f).width();else if(u<r){while(u<r&&a<s.length)a++,f=s.substring(0,a)+i,u=o.text(f).width();u>r&&(f=s.substring(0,a-1)+i)}f=s.substring(0,a-Math.round(n.maxLine/2))+i,t.text(f)}o.remove()}var r={maxWidth:0,maxLine:1,ellipsisChar:"..."};e.fn.ellipsis=function(t){return this.each(function(){var i=e(this),s=e.extend({},r,t);n(i,s)})},e.fn.ellipsis.options=r,e.ellipsis=function(t,n){typeof t=="string"?e(t).ellipsis(n):e.each(t,function(t,r){e(r).ellipsis(n)})}})(Zepto)
return Zepto;
});



define("lib/slip",function(require, exports, module){
	(function(f,c){_fun={ios:function(){var i=navigator.userAgent.match(/.*OS\s([\d_]+)/),h=!!i;if(!this._version_value&&h){this._version_value=i[1].replace(/_/g,".")}this.ios=function(){return h};return h},version:function(){return this._version_value},clone:function(h){function i(){}i.prototype=h;return new i}};var b={_refreshCommon:function(h,j){var i=this;i.wide_high=h||i.core[i.offset]-i.up_range;i.parent_wide_high=j||i.core.parentNode[i.offset];i._getCoreWidthSubtractShellWidth()},_initCommon:function(h,j){var i=this;i.core=h;i.startFun=j.startFun;i.moveFun=j.moveFun;i.touchEndFun=j.touchEndFun;i.endFun=j.endFun;i.direction=j.direction;i.up_range=j.up_range||0;i.down_range=j.down_range||0;if(i.direction=="x"){i.offset="offsetWidth";i._pos=i.__posX}else{i.offset="offsetHeight";i._pos=i.__posY}i.wide_high=j.wide_high||i.core[i.offset]-i.up_range;i.parent_wide_high=j.parent_wide_high||i.core.parentNode[i.offset];i._getCoreWidthSubtractShellWidth();i._bind("touchstart");i._bind("touchmove");i._bind("touchend");i._bind("webkitTransitionEnd");i.xy=0;i.y=0;i._pos(-i.up_range)},_getCoreWidthSubtractShellWidth:function(){var h=this;h.width_cut_coreWidth=h.parent_wide_high-h.wide_high;h.coreWidth_cut_width=h.wide_high-h.parent_wide_high},handleEvent:function(h){switch(h.type){case"touchstart":this._start(h);break;case"touchmove":this._move(h);break;case"touchend":case"touchcancel":this._end(h);break;case"webkitTransitionEnd":this._transitionEnd(h);break}},_bind:function(i,h){this.core.addEventListener(i,this,!!h)},_unBind:function(i,h){this.core.removeEventListener(i,this,!!h)},__posX:function(h){this.xy=h;this.core.style.webkitTransform="translate3d("+h+"px, 0px, 0px)"},__posY:function(h){this.xy=h;this.core.style.webkitTransform="translate3d(0px, "+h+"px, 0px)"},_posTime:function(h,i){this.core.style.webkitTransitionDuration=""+i+"ms";this._pos(h)}};var a=_fun.clone(b);a._init=function(h,j){var i=this;i._initCommon(h,j);i.num=j.num;i.page=0;i.change_time=j.change_time;i.lastPageFun=j.lastPageFun;i.firstPageFun=j.firstPageFun;j.change_time&&i._autoChange();j.no_follow?(i._move=i._moveNoMove,i.next_time=500):i.next_time=300};a._start=function(i){var h=this,i=i.touches[0];h._abrupt_x=0;h._abrupt_x_abs=0;h._start_x=h._start_x_clone=i.pageX;h._start_y=i.pageY;h._movestart=undefined;h.change_time&&h._stop();h.startFun&&h.startFun(i)};a._move=function(h){var i=this;i._moveShare(h);if(!i._movestart){var j=h.touches[0];h.preventDefault();i.offset_x=(i.xy>0||i.xy<i.width_cut_coreWidth)?i._dis_x/2+i.xy:i._dis_x+i.xy;i._start_x=j.pageX;if(i._abrupt_x_abs<6){i._abrupt_x+=i._dis_x;i._abrupt_x_abs=Math.abs(i._abrupt_x);return}i._pos(i.offset_x);i.moveFun&&i.moveFun(j)}};a._moveNoMove=function(h){var i=this;i._moveShare(h);if(!i._movestart){h.preventDefault();i.moveFun&&i.moveFun(e)}};a._moveShare=function(h){var i=this,j=h.touches[0];i._dis_x=j.pageX-i._start_x;i._dis_y=j.pageY-i._start_y;typeof i._movestart=="undefined"&&(i._movestart=!!(i._movestart||Math.abs(i._dis_x)<Math.abs(i._dis_y)))};a._end=function(i){if(!this._movestart){var h=this;h._end_x=i.changedTouches[0].pageX;h._range=h._end_x-h._start_x_clone;if(h._range>35){h.page!=0?h.page-=1:(h.firstPageFun&&h.firstPageFun(i))}else{if(Math.abs(h._range)>35){h.page!=h.num-1?h.page+=1:(h.lastPageFun&&h.lastPageFun(i))}}h.toPage(h.page,h.next_time);h.touchEndFun&&h.touchEndFun(i)}};a._transitionEnd=function(i){var h=this;i.stopPropagation();h.core.style.webkitTransitionDuration="0";h._stop_ing&&h._autoChange(),h._stop_ing=false;h.endFun&&h.endFun()};a.toPage=function(h,i){this._posTime(-this.parent_wide_high*h,i||0);this.page=h};a._stop=function(){clearInterval(this._autoChangeSet);this._stop_ing=true};a._autoChange=function(){var h=this;h._autoChangeSet=setInterval(function(){h.page!=h.num-1?h.page+=1:h.page=0;h.toPage(h.page,h.next_time)},h.change_time)};a.refresh=function(h,i){this._refreshCommon(h,i)};var g=_fun.clone(b);g._init=function(h,j){var i=this;i._initCommon(h,j);i.perfect=j.perfect;i.bar_no_hide=j.bar_no_hide;if(i.direction=="x"){i.page_x="pageX";i.page_y="pageY";i.width_or_height="width";i._real=i._realX;i._posBar=i.__posBarX}else{i.page_x="pageY";i.page_y="pageX";i.width_or_height="height";i._real=i._realY;i._posBar=i.__posBarY}if(i.perfect){i._transitionEnd=function(){};i._stop=i._stopPerfect;i._slipBar=i._slipBarPerfect;i._posTime=i._posTimePerfect;i._bar_upRange=i.up_range;i.no_bar=false;i._slipBarTime=function(){}}else{i.no_bar=j.no_bar;i.core.style.webkitTransitionTimingFunction="cubic-bezier(0.33, 0.66, 0.66, 1)"}if(i.bar_no_hide){i._hideBar=function(){};i._showBar=function(){}}if(_fun.ios()){i.radius=11}else{i.radius=0}if(!i.no_bar){i._insertSlipBar(j);if(i.coreWidth_cut_width<=0){i._bar_shell_opacity=0;i._showBarStorage=i._showBar;i._showBar=function(){}}}else{i._hideBar=function(){};i._showBar=function(){}}};g._start=function(i){var h=this,i=i.touches[0];h._animating=false;h._steps=[];h._abrupt_x=0;h._abrupt_x_abs=0;h._start_x=h._start_x_clone=i[h.page_x];h._start_y=i[h.page_y];h._start_time=i.timeStamp||Date.now();h._movestart=undefined;!h.perfect&&h._need_stop&&h._stop();h.core.style.webkitTransitionDuration="0";h.startFun&&h.startFun(i)};g._move=function(i){var j=this,k=i.touches[0],l=k[j.page_x],m=k[j.page_y],h=j.xy;j._dis_x=l-j._start_x;j._dis_y=m-j._start_y;(j.direction=="x"&&typeof j._movestart=="undefined")&&(j._movestart=!!(j._movestart||(Math.abs(j._dis_x)<Math.abs(j._dis_y))));if(!j._movestart){i.preventDefault();j._move_time=k.timeStamp||Date.now();j.offset_x=(h>0||h<j.width_cut_coreWidth-j.up_range)?j._dis_x/2+h:j._dis_x+h;j._start_x=l;j._start_y=m;j._showBar();if(j._abrupt_x_abs<6){j._abrupt_x+=j._dis_x;j._abrupt_x_abs=Math.abs(j._abrupt_x);return}j._pos(j.offset_x);j.no_bar||j._slipBar();if(j._move_time-j._start_time>300){j._start_time=j._move_time;j._start_x_clone=l}j.moveFun&&j.moveFun(k)}};g._end=function(l){if(!this._movestart){var j=this,l=l.changedTouches[0],k=(l.timeStamp||Date.now())-j._start_time,i=l[j.page_x]-j._start_x_clone;j._need_stop=true;if(k<300&&Math.abs(i)>10){if(j.xy>-j.up_range||j.xy<j.width_cut_coreWidth){j._rebound()}else{var h=j._momentum(i,k,-j.xy-j.up_range,j.coreWidth_cut_width+(j.xy),j.parent_wide_high);j._posTime(j.xy+h.dist,h.time);j.no_bar||j._slipBarTime(h.time)}}else{j._rebound()}j.touchEndFun&&j.touchEndFun(l)}};g._transitionEnd=function(i){var h=this;if(i.target!=h.core){return}h._rebound();h._need_stop=false};g._rebound=function(j){var i=this,h=(i.coreWidth_cut_width<=0)?0:(i.xy>=-i.up_range?-i.up_range:i.xy<=i.width_cut_coreWidth-i.up_range?i.width_cut_coreWidth-i.up_range:i.xy);if(h==i.xy){i.endFun&&i.endFun();i._hideBar();return}i._posTime(h,j||400);i.no_bar||i._slipBarTime(j)};g._insertSlipBar=function(l){var i=this;i._bar=c.createElement("div");i._bar_shell=c.createElement("div");if(i.direction=="x"){var k="height: 5px; position: absolute;z-index: 10; pointer-events: none;";var j="opacity: "+i._bar_shell_opacity+"; left:2px; bottom: 2px; right: 2px; height: 5px; position: absolute; z-index: 10; pointer-events: none;"}else{var k="width: 5px; position: absolute;z-index: 10; pointer-events: none;";var j="opacity: "+i._bar_shell_opacity+"; top:2px; bottom: 2px; right: 2px; width: 5px; position: absolute; z-index: 10; pointer-events: none; "}var h=" background-color: rgba(0, 0, 0, 0.5); border-radius: "+i.radius+"px; -webkit-transition: cubic-bezier(0.33, 0.66, 0.66, 1);";var k=k+h+l.bar_css;i._bar.style.cssText=k;i._bar_shell.style.cssText=j;i._countAboutBar();i._countBarSize();i._setBarSize();i._countWidthCutBarSize();i._bar_shell.appendChild(i._bar);i.core.parentNode.appendChild(i._bar_shell);setTimeout(function(){i._hideBar()},500)};g._posBar=function(h){};g.__posBarX=function(i){var h=this;h._bar.style.webkitTransform="translate3d("+i+"px, 0px, 0px)"};g.__posBarY=function(i){var h=this;h._bar.style.webkitTransform="translate3d(0px, "+i+"px, 0px)"};g._slipBar=function(){var h=this;var i=h._about_bar*(h.xy+h.up_range);if(i<=0){i=0}else{if(i>=h._width_cut_barSize){i=Math.round(h._width_cut_barSize)}}h._posBar(i);h._showBar()};g._slipBarPerfect=function(){var i=this;var j=i._about_bar*(i.xy+i._bar_upRange);i._bar.style[i.width_or_height]=i._bar_size+"px";if(j<0){var h=i._bar_size+j*3;i._bar.style[i.width_or_height]=Math.round(Math.max(h,5))+"px";j=0}else{if(j>=i._width_cut_barSize){var h=i._bar_size-(j-i._width_cut_barSize)*3;if(h<5){h=5}i._bar.style[i.width_or_height]=Math.round(h)+"px";j=Math.round(i._width_cut_barSize+i._bar_size-h)}}i._posBar(j)};g._slipBarTime=function(h){this._bar.style.webkitTransitionDuration=""+h+"ms";this._slipBar()};g._stop=function(){var h=this,i=h._real();h._pos(i);if(!h.no_bar){h._bar.style.webkitTransitionDuration="0";h._posBar(h._about_bar*i)}};g._stopPerfect=function(){clearTimeout(this._aniTime);this._animating=false};g._realX=function(){var h=getComputedStyle(this.core,null)["webkitTransform"].replace(/[^0-9-.,]/g,"").split(",");return h[4]*1};g._realY=function(){var h=getComputedStyle(this.core,null)["webkitTransform"].replace(/[^0-9-.,]/g,"").split(",");return h[5]*1};g._countBarSize=function(){this._bar_size=Math.round(Math.max(this.parent_wide_high*this.parent_wide_high/this.wide_high,5))};g._setBarSize=function(){this._bar.style[this.width_or_height]=this._bar_size+"px"};g._countAboutBar=function(){this._about_bar=((this.parent_wide_high-4)-(this.parent_wide_high-4)*this.parent_wide_high/this.wide_high)/this.width_cut_coreWidth};g._countWidthCutBarSize=function(){this._width_cut_barSize=(this.parent_wide_high-4)-this._bar_size};g.refresh=function(h,j){var i=this;i._refreshCommon(h,j);if(!i.no_bar){if(i.coreWidth_cut_width<=0){i._bar_shell_opacity=0;i._showBar=function(){}}else{i._showBar=i._showBarStorage||i._showBar;i._countAboutBar();i._countBarSize();i._setBarSize();i._countWidthCutBarSize()}}i._rebound(0)};g._posTimePerfect=function(h,o){var n=this,m=h,k,j;n._steps.push({x:h,time:o||0});n._startAni()};g._startAni=function(){var m=this,h=m.xy,k=Date.now(),l,j,i;if(m._animating){return}if(!m._steps.length){m._rebound();return}l=m._steps.shift();if(l.x==h){l.time=0}m._animating=true;i=function(){var n=Date.now(),o;if(n>=k+l.time){m._pos(l.x);m._animating=false;m._startAni();return}n=(n-k)/l.time-1;j=Math.sqrt(1-n*n);o=(l.x-h)*j+h;m._pos(o);if(m._animating){m._slipBar();m._aniTime=setTimeout(i,1)}};i()};g._momentum=function(o,i,m,h,q){var n=0.001,j=Math.abs(o)/i,k=(j*j)/(2*n),p=0,l=0;if(o>0&&k>m){l=q/(6/(k/j*n));m=m+l;j=j*m/k;k=m}else{if(o<0&&k>h){l=q/(6/(k/j*n));h=h+l;j=j*h/k;k=h}}k=k*(o<0?-1:1);p=j/n;return{dist:k,time:p}};g._showBar=function(){var h=this;h._bar_shell.style.webkitTransitionDelay="0ms";h._bar_shell.style.webkitTransitionDuration="0ms";h._bar_shell.style.opacity="1"};g._hideBar=function(){var h=this;h._bar_shell.style.opacity="0";h._bar_shell.style.webkitTransitionDelay="300ms";h._bar_shell.style.webkitTransitionDuration="300ms"};function d(k,h,l){l||(l={});if(_fun.ios()&&(parseInt(_fun.version())>=5&&l.direction=="x")&&l.wit){h.parentNode.style.cssText+="overflow:scroll; -webkit-overflow-scrolling:touch;"}else{switch(k){case"page":l.direction="x";if(!this.SlipPage){this.SlipPage=true;a._init(h,l);return a}else{var j=_fun.clone(a);j._init(h,l);return j}break;case"px":if(!this.SlipPx){this.SlipPx=true;g._init(h,l);return g}else{var i=_fun.clone(g);i._init(h,l);return i}break;default:break}}}f.slip=d})(window,document);
	module.exports = slip;
});


define("lib/json",function(require, exports, module){
typeof JSON!="object"&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx,escapable,gap,indent,meta,rep;typeof JSON.stringify!="function"&&(escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()
return JSON;	
})


define("lib/md5",function(require, exports, module){
var hexcase=0;var b64pad="";var chrsz=8;function hex_md5(s){return binl2hex(core_md5(str2binl(s),s.length*chrsz))}function b64_md5(s){return binl2b64(core_md5(str2binl(s),s.length*chrsz))}function str_md5(s){return binl2str(core_md5(str2binl(s),s.length*chrsz))}function hex_hmac_md5(key,data){return binl2hex(core_hmac_md5(key,data))}function b64_hmac_md5(key,data){return binl2b64(core_hmac_md5(key,data))}function str_hmac_md5(key,data){return binl2str(core_hmac_md5(key,data))}function md5_vm_test(){return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72"}function core_md5(x,len){x[len>>5]|=0x80<<((len)%32);x[(((len+64)>>>9)<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;a=md5_ff(a,b,c,d,x[i+0],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i+0],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i+0],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i+0],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd)}return Array(a,b,c,d)}function md5_cmn(q,a,b,x,s,t){return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b)}function md5_ff(a,b,c,d,x,s,t){return md5_cmn((b&c)|((~b)&d),a,b,x,s,t)}function md5_gg(a,b,c,d,x,s,t){return md5_cmn((b&d)|(c&(~d)),a,b,x,s,t)}function md5_hh(a,b,c,d,x,s,t){return md5_cmn(b^c^d,a,b,x,s,t)}function md5_ii(a,b,c,d,x,s,t){return md5_cmn(c^(b|(~d)),a,b,x,s,t)}function core_hmac_md5(key,data){var bkey=str2binl(key);if(bkey.length>16)bkey=core_md5(bkey,key.length*chrsz);var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++){ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5C5C5C5C}var hash=core_md5(ipad.concat(str2binl(data)),512+data.length*chrsz);return core_md5(opad.concat(hash),512+128)}function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF)}function bit_rol(num,cnt){return(num<<cnt)|(num>>>(32-cnt))}function str2binl(str){var bin=Array();var mask=(1<<chrsz)-1;for(var i=0;i<str.length*chrsz;i+=chrsz)bin[i>>5]|=(str.charCodeAt(i/chrsz)&mask)<<(i%32);return bin}function binl2str(bin){var str="";var mask=(1<<chrsz)-1;for(var i=0;i<bin.length*32;i+=chrsz)str+=String.fromCharCode((bin[i>>5]>>>(i%32))&mask);return str}function binl2hex(binarray){var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++){str+=hex_tab.charAt((binarray[i>>2]>>((i%4)*8+4))&0xF)+hex_tab.charAt((binarray[i>>2]>>((i%4)*8))&0xF)}return str}function binl2b64(binarray){var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var str="";for(var i=0;i<binarray.length*4;i+=3){var triplet=(((binarray[i>>2]>>8*(i%4))&0xFF)<<16)|(((binarray[i+1>>2]>>8*((i+1)%4))&0xFF)<<8)|((binarray[i+2>>2]>>8*((i+2)%4))&0xFF);for(var j=0;j<4;j++){if(i*8+j*6>binarray.length*32)str+=b64pad;else str+=tab.charAt((triplet>>6*(3-j))&0x3F)}}return str}var hexcase=0;var b64pad="";var chrsz=8;function hex_md5(s){return binl2hex(core_md5(str2binl(s),s.length*chrsz))}function b64_md5(s){return binl2b64(core_md5(str2binl(s),s.length*chrsz))}function str_md5(s){return binl2str(core_md5(str2binl(s),s.length*chrsz))}function hex_hmac_md5(key,data){return binl2hex(core_hmac_md5(key,data))}function b64_hmac_md5(key,data){return binl2b64(core_hmac_md5(key,data))}function str_hmac_md5(key,data){return binl2str(core_hmac_md5(key,data))}function md5_vm_test(){return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72"}function core_md5(x,len){x[len>>5]|=0x80<<((len)%32);x[(((len+64)>>>9)<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;a=md5_ff(a,b,c,d,x[i+0],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i+0],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i+0],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i+0],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd)}return Array(a,b,c,d)}function md5_cmn(q,a,b,x,s,t){return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b)}function md5_ff(a,b,c,d,x,s,t){return md5_cmn((b&c)|((~b)&d),a,b,x,s,t)}function md5_gg(a,b,c,d,x,s,t){return md5_cmn((b&d)|(c&(~d)),a,b,x,s,t)}function md5_hh(a,b,c,d,x,s,t){return md5_cmn(b^c^d,a,b,x,s,t)}function md5_ii(a,b,c,d,x,s,t){return md5_cmn(c^(b|(~d)),a,b,x,s,t)}function core_hmac_md5(key,data){var bkey=str2binl(key);if(bkey.length>16)bkey=core_md5(bkey,key.length*chrsz);var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++){ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5C5C5C5C}var hash=core_md5(ipad.concat(str2binl(data)),512+data.length*chrsz);return core_md5(opad.concat(hash),512+128)}function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF)}function bit_rol(num,cnt){return(num<<cnt)|(num>>>(32-cnt))}function str2binl(str){var bin=Array();var mask=(1<<chrsz)-1;for(var i=0;i<str.length*chrsz;i+=chrsz)bin[i>>5]|=(str.charCodeAt(i/chrsz)&mask)<<(i%32);return bin}function binl2str(bin){var str="";var mask=(1<<chrsz)-1;for(var i=0;i<bin.length*32;i+=chrsz)str+=String.fromCharCode((bin[i>>5]>>>(i%32))&mask);return str}function binl2hex(binarray){var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++){str+=hex_tab.charAt((binarray[i>>2]>>((i%4)*8+4))&0xF)+hex_tab.charAt((binarray[i>>2]>>((i%4)*8))&0xF)}return str}function binl2b64(binarray){var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var str="";for(var i=0;i<binarray.length*4;i+=3){var triplet=(((binarray[i>>2]>>8*(i%4))&0xFF)<<16)|(((binarray[i+1>>2]>>8*((i+1)%4))&0xFF)<<8)|((binarray[i+2>>2]>>8*((i+2)%4))&0xFF);for(var j=0;j<4;j++){if(i*8+j*6>binarray.length*32)str+=b64pad;else str+=tab.charAt((triplet>>6*(3-j))&0x3F)}}return str}
module.exports = hex_md5
});




define("module/report",function(require, exports, module){
	var uid = new Date().getTime();
	module.exports = Report = {};
	Report.reportToClick = function(url, params, callback){
		if (!url) {
			return;
		}
		var src = [url];
		if (url.indexOf('?') == -1) {
			src.push('?');
		}
		if(typeof params == 'string'){
            url.push(params);
        }else if(typeof params == 'object'){
            for(var key in params){
            	if (params.hasOwnProperty(key)) {
             	   src.push('&' + key + '=' + params[key]);	
            	}
            }
        }else if (typeof params == 'function') {
        	callback = params
        }
        src = src.join('')
        if (src.indexOf('_r') == -1) {
        	src += '&_r='+(++uid)
        }
		var img = new Image()
		img.src = src
	}
});




define("module/cgi",function(require, exports, module){

    var CGI = {
        proxy : 'http://<%=domain%>/api/remote/get',//后台代理接口
        seller : 'http://<%=domain%>/admin/seller/list',//查看卖家信息
        goods : 'http://<%=domain%>/admin/goods/list',//查看商品信息
        handleshop : 'http://<%=domain%>/admin/api/shop_object/handle',//管理店铺信息
        addComment : 'http://<%=domain%>/api/comments/save',//添加评论
        delComment : 'http://<%=domain%>/api/comment/delete',//删除评论
        getComment : 'http://<%=domain%>/api/comments/newest',//获取首页评论
        getAllComment : 'http://<%=domain%>/api/comments/list',//获取全部评论
        getUserInfo : 'http://<%=domain%>/api/usr/getinfo',//获取用户信息
        getNoteList : 'http://<%=domain%>/api/discovery/list2',//获取笔记列表
        getNoteInfo : 'http://<%=domain%>/api/discovery/item',//获取笔记详细信息
        getRelatedNodeInfo : 'http://<%=domain%>/api/discovery/related',//获取相关笔记
        like : 'http://<%=domain%>/api/discovery/like',//点赞
        dislike : 'http://<%=domain%>/api/discovery/dislike',//取消点赞
        favorite : 'http://<%=domain%>/api/fav/do',//收藏
        unfavorite : 'http://<%=domain%>/api/fav/undo',//取消收藏
        follows : 'http://<%=domain%>/api/usr/follows',//关注接口
        unfollows : 'http://<%=domain%>/api/usr/unfollows',//取消关注接口
        selling : 'http://<%=domain%>/api/goods/selling',//卖家商品信息
        order : 'http://<%=domain%>/api/order/create',//提交订单
        order2 : 'http://<%=domain%>/api/order/create2',//提交订单2
        order3 : 'http://<%=domain%>/api/order/create3',//提交订单3
        order4 : 'http://<%=domain%>/api/order/create_with_score',//提交订单4增加积分
        order5 : 'http://<%=domain%>/api/order/create_mseller',//提交订单5增加第三方
        orderPre : 'http://<%=domain%>/api/order/create/pre',//生成订单的包裹
        flashorder : 'http://<%=domain%>/api/special/order/create',//抢购提交订单
        orderSave : 'http://<%=domain%>/api/order/user_info/save',//保存用户订单填的地址等信息
        orderGet : 'http://<%=domain%>/api/order/user_info/get',//获取用户订单的地址信息
        addressUpdate : 'http://<%=domain%>/api/order/order_address/update',//更新收货信息（添加、更改、删除、设置默认）
        addressList : 'http://<%=domain%>/api/order/order_address/get',//获取收货信息列表
        pay : 'http://<%=domain%>/api/order/pay',//支付接口
        reportToContact : 'http://<%=domain%>/api/contacts/record',//点击联系TA上报
        reportToClick : 'http://<%=domain%>/api/clicks/record',//在专题页面和商品、卖家页面点击上报
        reportToClickV2 : 'http://t.xiaohongshu.com/api/collect',//t.xiaohongshu.com上的统计
        reportToPurchase : 'http://<%=domain%>/api/purchases/record',//上报立即购买
        getCart : 'http://<%=domain%>/api/shopping_cart/get',//获取购物车商品信息
        addCart : 'http://<%=domain%>/api/shopping_cart/add',//添加购物车商品
        editCart : 'http://<%=domain%>/api/shopping_cart/edit',//编辑购物车商品
        editCart2 : 'http://<%=domain%>/api/shopping_cart/edit2',//编辑购物车商品2
        removeCart : 'http://<%=domain%>/api/shopping_cart/remove',//删除购物车商品
        getDiscountShareInfo : 'http://<%=domain%>/api/discountbuy/shareinfo',//获取砍价小分队的分享信息
        getOrderList : 'http://<%=domain%>/api/order/list',//获取订单列表
        getOrderList2 : 'http://<%=domain%>/api/order/list2',//获取订单列表2
        getOrderInfo : 'http://<%=domain%>/api/order/item',//获取订单详情
        verifyIdNumber: 'http://<%=domain%>/api/id_number/verify',//检测身份证信息是否真实
        finishOrder : 'http://<%=domain%>/api/order/finished',//确认收货
        finishPackage : 'http://<%=domain%>/api/order/package/finished',//确认收货包裹
        cancelOrder : 'http://<%=domain%>/api/order/cancel',//取消订单
        deleteOrder : 'http://<%=domain%>/api/order/delete',//删除订单
        getBarrage : 'http://<%=domain%>/api/barrage/get',//获取弹幕数据
        getBarrageNew : 'http://<%=domain%>/api/barrage/get2',//新版获取弹幕数据
        getAfterSale : 'http://<%=domain%>/api/order/after_sale',//售后相关，目前只支持退货
        getTransPrice : 'http://<%=domain%>/api/order/trans_price',//获取运费数量
        smartPush : 'http://<%=domain%>/api/setting/message/customer',//福利社消息推送
        fuliNotification : 'http://<%=domain%>/api/setting/notification/store_update',//福利社消息推送2
        discountHelp : 'http://<%=domain%>/api/discountbuy/help',//砍价小分队帮忙砍价
        flashbuyQueue : 'http://<%=domain%>/api/flashbuy/queue',//抢购排队
        restartDiscount : 'http://<%=domain%>/api/discountbuy/restart',//重新发起砍价
        activeStartLottery : 'http://<%=domain%>/api/1/daily_lottery/start',//开始抽奖
        activeSetInfo : 'http://<%=domain%>/api/1/daily_lottery/update_info',//保存抽奖所需信息
        activeGetInfo : 'http://<%=domain%>/api/1/daily_lottery/info',//获取抽奖信息
        getAnonymousId : 'http://<%=domain%>/api/1/webpm/get_anonymous_id',//获取匿名私信id
        sendMessage : 'http://<%=domain%>/api/1/webpm/send',//发送私信
        getMessage : ' http://<%=domain%>/api/1/webpms/get_new',//获取对方的私信
        getMsgHistory : 'http://<%=domain%>/api/1/webpms/get_chat_history',//获取私信历史记录
        getSenderInfo : 'http://<%=domain%>/api/1/webpm/get_sender',//获取私信对象的昵称、头像等
        getLottery : 'http://<%=domain%>/api/coupon/request',//抽奖
        getCoupon: 'http://<%=domain%>/api/coupon/get',//获取署券
        resetPassword: 'http://<%=domain%>/api/s1/seller/reset_password',//重置密码
        getBoardInfo: 'http://<%=domain%>/api/fav/board/info',//获取心愿单信息
        followInBoard: 'http://<%=domain%>/api/fav/board/follow',//订阅心愿单
        unfollowInBoard: 'http://<%=domain%>/api/fav/board/unfollow',//取消心愿单订阅
        getNoteInBoard: 'http://<%=domain%>/api/discovery/list/fav_board',//board所属笔记接口
        getRankData: 'http://<%=domain%>/api/ranking/list/data',//获取排行榜列表
        createRankData: 'http://<%=domain%>/api/user/ranking/list/create',//生成排行榜
        getMyRankData: 'http://<%=domain%>/api/user/ranking/data',//获取我的榜单列表
        getAllRankData: 'http://<%=domain%>/api/topranking/data',//获取总榜排名数据
        saveUserPhone: 'http://<%=domain%>/api/usr/phone/set',//保存用户手机号
        getRankingCoupon: 'http://<%=domain%>/api/ranking/coupon/request',//获取排行榜券
        startCouponLottery: 'http://<%=domain%>/api/1/coupon/daily/start',//开始抽奖（抽薯券）
        selectCouponLottery: 'http://<%=domain%>/api/1/coupon/daily/choice',//确认选择抽中的薯券
        getZTExpressInfo: 'http://<%=domain%>/api/order/zttrack',//获取中通快递信息
        getOtherExpressInfo: 'http://<%=domain%>/api/order/kuaidi100',//获取其它快递信息
        getRedEnvelope: 'http://<%=domain%>/api/activity/redenvelope/send',//领取红包
        getRedEnvelope2: 'http://<%=domain%>/api/activity/redenvelope2/send',//领取红包
        getRedEnvelope3: 'http://<%=domain%>/api/activity/redenvelope3/send',//领取红包3
        getRedEnvelope4: 'http://<%=domain%>/api/activity/hongbao/get',//领取红包4
        getRedEnvelope5: 'http://<%=domain%>/api/activity/321/hongbao/get',//领取红包5
        getRedEnvelope418: 'http://<%=domain%>/api/activity/418/hongbao/get',//领取红包418
        getRedEnvelopeModel: 'http://<%=domain%>/api/activity/hongbao_model/get',//领取红包小鲜肉
        addRedEnvelope: 'http://<%=domain%>/api/activity/redenvelope/add',//扩大红包
        addRedEnvelope2: 'http://<%=domain%>/api/activity/redenvelope2/add',//扩大红包
        addRedEnvelope3: 'http://<%=domain%>/api/activity/redenvelope3/add',//扩大红包3
        getBaiduActiveCoupon: 'http://<%=domain%>/api/activity/lottery/baidu/start',//抽取百度渠道活动薯券
        getZoneData: 'http://<%=domain%>/api/zone',//获取省市区地址数据
        setVideoName: 'http://<%=domain%>/api/order/video/update',//更改视频名称
        getSpecialList: 'http://<%=domain%>/api/1/topic/events',//获取专题列表
        getFreeBuy: 'http://<%=domain%>/api/lottery/freebuy/get',//0元秒杀福利
        shareFreeBuy: 'http://<%=domain%>/api/lottery/freebuy/share',//0元秒杀福利分享
        getUserScore:'http://<%=domain%>/api/score/available',//获取用户积分
        getBrandTagInfo: 'http://<%=domain%>/api/tag/getinfo',//获取品牌标签信息
        getBrandUserInfo: 'http://<%=domain%>/api/usr/getinfo/other',//获取品牌用户信息
        getWishList: 'http://<%=domain%>/api/1/wishlist',//获取心愿单列表
        addWishGoods: 'http://<%=domain%>/api/1/wishlist/add',//添加
        deleteWishGoods: 'http://<%=domain%>/api/1/wishlist/delete',//获取心愿单列表以及添加心愿单以及心愿单状态
        checkWishGoods: 'http://<%=domain%>/api/1/wishlist/check',//获取商品是否加入心愿单
        getWishListCount: 'http://<%=domain%>/api/1/wishlist/count'//获取心愿单列表总数
    };
    var uid = new Date().getTime(), Domain = location.host;
    var CgiGet = {
        get : function(cgi, params, cache, domain){
            var url = [CGI[cgi].replace('<%=domain%>', domain || Domain)];
            if(!url)
            {
                throw new Error('Cgi：' + cgi + ' 不存在');
                return;
            }
            if(cgi.indexOf('?') === -1) 
            {
                url.push('?');
            }
            if( typeof params == 'string')   
            {
                url.push(params);
            }
            else if( typeof params == 'object')
            {
                for(var key in params)
                {
                    url.push('&' + key + '=' + params[key]);
                }
            }
            if(typeof cache == 'undefined' || cache === false)
            {
                url.push('&_r=' + (++uid));
            }
            return url.join('');
        },
        raw: function(key) {
            return CGI[key].replace('<%=domain%>', Domain);
        }
    };
    module.exports = CgiGet;
});


define("module/comment",function(require, exports, module){
	var $ 		= require('lib/zepto'),
		ajax	= require('util/ajax'),
		cgi		= require('module/cgi'),
		undefined;
	
	var comment = module.exports = {};
	comment.getList = function(_params, callback){
		var params = $.extend({}, _params);
		ajax.get({
			url  : cgi.get('getComment', {}, false),
			dataType : 'json',
			data : params,
			success : function(res){
				if(res.success){
					callback(0, res);
					return;
				}
				callback(-1, res);
			},
			fail : function(){
				callback(-500);
			}
		});
	};
	comment.getAllList = function(_params, callback){
		var params = $.extend({}, _params);
		ajax.get({
			url : cgi.get('getAllComment', {}, false),
			dataType : 'json',
			data : params,
			success : function(res){
				if (res.success) {
					callback(0, res);
					return;
				};
				callback(-1, res);
			},
			fail : function(){
				callback(-500);
			}
		});
	};
	comment.add = function(_params, callback){
		var params = $.extend({}, _params);
		ajax.post({
			url  : cgi.get('addComment'),
			dataType : 'json',
			data : params,
			success : function(res){
				if(res.success){
					callback(0, res);
					return;
				}
				callback(-1, res);
			},
			fail : function(){
				callback(-500);
			}
		});
	};
	comment.del = function(_params, callback){
		var params = $.extend({}, _params);
		ajax.get({
			url  : cgi.get('delComment'),
			dataType : 'json',
			data : params,
			success : function(res){
				if(res.success){
					callback(0, res);
					return;
				}
				callback(-1, res);
			},
			fail : function(){
				callback(-500);
			}
		});
	};
});



define("module/user",function(require, exports, module){
	var $ = require('lib/zepto'),
		localStorage = require('util/storage'),
		cookie = require('util/cookie'),
		cgi = require('module/cgi'),
		undefined;

	var user = module.exports = {};

	user.isLogin = function(){
		if (this.loginStatus) {
			return true;
		};




		return false;
	};

	user.checkLogin = function(callback, notLoginCallback){
		var _this = this;
		require.async('util/bridge', function(Bridge){
			if (Bridge.isApp()) {
				window.__checkLoginCallBack = function(session){
					if (!session) {
						notLoginCallback ? notLoginCallback() : _this.login();
						return;
					};
					_this.setSid(session);
					_this.checkLogin = function(callback){callback && callback()};
					callback && callback();
				}
				Bridge.getApp().getSession('__checkLoginCallBack');
			}else{
				if (_this.isLogin()) {
					_this.checkLogin = function(callback){callback && callback()};
					callback && callback();
				}else{
					notLoginCallback ? notLoginCallback() : _this.login();
				}
			}
		});
	}

	user.setLogined = function(){
		this.loginStatus = true;
	};
	user.login = function(params){
		var _this = this;
		var curHref = location.href;
		params = params || {};
		if (this.isShowLogin) {
			this.dialog.show();
		}else{
			this.isShowLogin = true;

			$('head').append('<style>.login-head{height: 45px;line-height: 45px;font-size: 13px;color: #363636;text-align: center;;border-bottom: 1px solid #acacac;}.login-area{width: 100%;margin-top: 16px;margin-bottom: 16px;}.login-act{width: 50px;float: left;}.login-act.weibo{margin-left: 73px;}.login-act.qq{margin-left: 33px;}.login-act-img{width: 100%;height: 50px;}.login-act-img img{width: 100%;height: 100%;display: block;}.login-act-title{width: 100%;height: 11px;margin-top: 8px;line-height: 11px;font-size: 11px;color: #363636;text-align: center;}</style>')
			require.async('ui/widget/dialog', function(Dialog){
				_this.dialog = new Dialog({
					content : '<div class="login-head">请选择您的登录方式</div>\
								<div class="login-area">\
									<div class="login-act weibo j_login_btn" d-type="weibo">\
										<div class="login-act-img"><img src="http://s3.xiaohongshu.com/static/img/v2/common/login/weibo.png" /></div>\
										<div class="login-act-title">微博</div>\
									</div>\
									<div class="login-act qq j_login_btn" d-type="qq">\
										<div class="login-act-img"><img src="http://s3.xiaohongshu.com/static/img/v2/common/login/qq.png" /></div>\
										<div class="login-act-title">QQ</div>\
									</div>\
									<div class="clear"></div>\
								</div>',
					onCreate : function(){



				        $('.j_login_btn').off('click').on('click', function(){
							var type = $(this).attr('d-type');
							location.href = '/login/' + type + '?display=mobile&backurl=' + curHref;
						});
					},
					onClose : function(evt){
						evt = evt || window.event;
						evt.stopPropagation && evt.stopPropagation();
						evt.cancelBubble = true;
						evt.preventDefault && evt.preventDefault();
						evt.returnValue = false;
						params.onClose && params.onClose();
					},
					onTouch : function(evt){
						evt = evt || window.event;
						evt.stopPropagation && evt.stopPropagation();
						evt.cancelBubble = true;
						evt.preventDefault && evt.preventDefault();
						evt.returnValue = false;
					}
				});
			_this.dialog.show();
			});
		}
	};
	user.logout = function(refresh){
		if (refresh == undefined) {
			refresh = true;
		};

		localStorage.remove('sid');
		if(refresh){
			var curHref = location.href;
			location.href= "/logout?backurl=" + curHref;
			return true;
		}

		return true;
	};

	user.switchLogin = function(){
		this.login();
	};
	user.getSid = function(){
		return localStorage.get('sid') || '';

	};
	user.setSid = function(sid){
		localStorage.set('sid', sid);



		return true;
	};
	user.processFuncArray = [];
	user.getInfo = function(callback){
		var _this = this;
		if (this.processing) {
			this.processFuncArray.push(function(){
				_this.getInfo(callback);
			});
		}
		this.processing = true;
		var data = {}, sid = this.getSid();
		if (sid) {
			if (sid.indexOf('session.') > -1) {
				data.sid = sid;
			}else{
				data.sid = 'session.'+sid;
			}	
		};

		require.async('util/ajax', function(ajax){
			ajax.get({
				url : cgi.get('getUserInfo'),
				data : data,
				dataType : 'json',
				success : function(res){
					if (res.success) {
						callback && callback(res);
					}
					_this.processing = false;
					var func = _this.processFuncArray.shift();
					(typeof func == 'function') && func();
				},
				fail : function(){
					_this.processing = false;
					var func = _this.processFuncArray.shift();
					(typeof func == 'function') && func();
				}
			});
		});
	};
	user.trunkNick = function(limitLength, nick){
		nick = $.trim(nick);
		var len = nick.length;
		var length = 0;
		var i = 0 
		for (; i < len && length <= limitLength; i++)
		{
			if (nick.charAt(i).match(/[^\x00-\xff]/ig) != null)
			{
				length += 2;
			}
			else
			{
				length += 1;
			}
		}
		if (length > limitLength)
		{
			nick = nick.substring(0, i - 1) + "...";
		}
		return nick;
	};
});




define("ui/template",function(){

	  var cache = {};
	  
	  var tmpl = function(str, data){


	    var fn = !/\W/.test(str) ?
	      cache[str] = cache[str] ||
	        tmpl(document.getElementById(str).innerHTML) :


	      new Function("obj",
	        "var p=[],print=function(){p.push.apply(p,arguments);};" +

	        "with(obj){p.push('" +

	        str
	          .replace(/[\r\t\n]/g, " ")
	          .split("<%").join("\t")
	          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
	          .replace(/\t=(.*?)%>/g, "',$1,'")
	          .split("\t").join("');")
	          .split("%>").join("p.push('")
	          .split("\r").join("\\'")
	      + "');}return p.join('');");

	    return data ? fn( data ) : fn;
	  };
	
	return {
		parse: tmpl
	}
});




define("ui/widget/comment",function(require, exports, module){
	var $ = require('lib/zepto'),
		ajax = require('util/ajax'),
		misc = require('util/misc'),
		Bridge = require('util/bridge'),
		cgi = require('module/cgi'),
		comment = require('module/comment'),
		template = require('ui/template'),
		Dialog = require('ui/widget/dialog'),
		undefined;

	var max_comment_num = 5;
	function Comment(options){
		this.options = $.extend({
			id: '',
			template: Comment.template,
			container: null,
			silent: true,//静默模式，开启时只会弹出下载框，其他功能全部被屏蔽掉
			callback : function(){}
		}, options);
		this.init();
	}
	Comment.template = '<div class="title">最新评论<span class="comment-num">(共有<span class="j_comment_num"><%=datas.count%></span>条评论)</span></div>\
			<div class="j_comment_list_container">\
				<% for(var i = 0, l = datas.comments.length;i < l; i ++){ %>\
					<div class="list">\
						<div class="avatar">\
							<a href="javascript:void" class="j_comment_user" d-uid="<%=datas.comments[i].user.id%>">\
								<img src="<%=datas.comments[i].user.image%>" />\
								<img class="comment-user-head-mask" src="<%=getImageUrl("/static/img/v2/common/mask.png")%>" />\
							</a>\
						</div>\
						<div class="content j_content">\
							<div class="cont-title">\
								<span class="nick"><%=escapeHTML(datas.comments[i].user.nickname)%></span><span class="date"><%=datas.comments[i].time%></span>\
							</div>\
							<div class="cont-text">\
								<% if(datas.comments[i].target_comment){%>\
									回复<%=escapeHTML(datas.comments[i].target_comment.user.nickname)%>：\
								<% } %>\
								<%=escapeHTML(datas.comments[i].content)%>\
							</div>\
							<div class="replay">\
								<a class="j_reply" d-cid="<%=datas.comments[i].id%>">回复</a>\
								<% if(datas.is_admin){%>\
									<a style="margin-right:5px;width:100px;text-align:right;" class="j_delete" d-cid="<%=datas.comments[i].id%>">删除</a>\
								<% } %>\
							</div>\
						</div>\
					</div>\
				<% } %>\
			</div>\
			<div class="load-more j_load_more" style="display:none;"><div class="loading j_loading" style="display:none;"><img src="<%=getImageUrl("/static/img/v2/common/loading.gif")%>" /></div><a href="javascript:;">查看更多评论...</a></div>';
	Comment.prototype = {
		init : function(){
			this.load();
			this.initEvent();
		},
		initEvent : function(){
			var _this = this;

			$(this.options.container).on('click', '.j_load_more a', function(){








				$('.j_loading').show();
				_this.load(true);
			});

			$(this.options.container).on('click', '.j_content', function(evt){
				if($(evt.target).hasClass('j_delete')){
					return;
				};
				if (_this.options.silent) {
					if (!Bridge.isApp()) {
						require.async('ui/page/site', function(site){
							site.download(window.__curTalkingData[window.__phoneType].other);
						});
						return;
					};
				}
				var $ele = $(this).find('.j_reply');
				var cId = $ele.attr('d-cid');
				var status = _this.options.callback($ele[0]);
				if (status) {
					$('.j_comment_cover').click();
				};
			});

			$(this.options.container).on('click', '.j_delete', function(evt){
				if (_this.options.silent) {
					if (!Bridge.isApp()) {
						require.async('ui/page/site', function(site){
							site.download(window.__curTalkingData[window.__phoneType].other);
						});
						return;
					};
				}
				var cId = $(this).attr('d-cid');
				var that = this;
				function deleteComment(){
					var id = _this.options.id;
					id = id.split('.');
					var	params = {'type':id[0], 'oid' : 'comment.'+cId};
					comment.del(params, function(status, res){
						if (status == 0) {
							$(that).parents('.list').hide();
							var num = parseInt($('.j_comment_num').text(), 10);
							$('.j_comment_num').text(num-1);
						};
					});
				}
				window.__cancelOrderCallFunc1 = function(){
					deleteComment();
					this.hide();
				};
				window.__cancelOrderCallFunc2 = function(){this.hide()};
				Dialog.alert({title:'温馨提示', 
					content:'确定删除评论吗', 
					templateData:{button:['确定', '取消'], funcArr:['__cancelOrderCallFunc1', '__cancelOrderCallFunc2']}});
			});

			$(this.options.container).on('tap', '.j_comment_user', function(){
				if (_this.options.silent) {
					if (!Bridge.isApp()) {
						require.async('ui/page/site', function(site){
							site.download(window.__curTalkingData[window.__phoneType].other);
						});
						return;
					};
					var uid = $(this).attr('d-uid');
					window.location.href = 'xhsdiscover://1/user/user.'+uid;
				}
			});
			setTimeout(function(){//fix ios bug.The event which was triggered by the cannot clicked element can not delegated.
				$('.j_content').each(function(index, item){
					if (item.clicked) {return;}
					item.clicked = true;
					$(item).on('click', function(){});
				});
				setTimeout(arguments.callee, 500);
			}, 500);
		},
		load : function(isAll){
			var _this = this,
				id = this.options.id;
			var params = {oid : id};
			function route(status, res){
				$('.j_loading').hide();
				if (status == 0) {
					_this.parse(res, isAll);
				}else{
					_this.fail();
				}
			}
			if (isAll) {
				comment.getAllList(params, route);
			}else{
				comment.getList(params, route);
			}
		},
		parse : function(res, isAll){

			if (isAll) {
				res.count = res.comments.length;
			}else{

				var comments = res.comments;
				var num = Math.min(comments.length, max_comment_num);
				comments = comments.slice(0, num);
				res.comments = comments;
			}
			res.is_admin = window.is_admin || false;//是否管理员
			$(this.options.container).html(template.parse(this.options.template, {datas: res, getImageUrl: misc.getImageUrl, escapeHTML:misc.escapeHTML}));
			if (res.count > max_comment_num && !isAll) {
				$('.j_load_more a').text('查看更多评论...');
				$('.j_load_more').show();
			}else{
				$('.j_load_more').hide();
			}
		},
		fail : function(){
			var data = {
				success: false,
				count: 0,
				comments: []
			};
			this.parse(data);
			$('.j_load_more a').text('评论加载失败，点击重新加载');
			$('.j_load_more').show();
		}
	}
	module.exports = Comment;
});




define("ui/widget/uidialog",function(require, exports, module){
	var $ = require('lib/zepto'),
		misc = require('util/misc'),
		Dialog = require('ui/widget/dialog'),
		undefined;

	var uiDialog = module.exports = {};
	uiDialog.loading = function(options){
		options = $.extend({}, options);
		if (!this.loadingDialog) {
			options.template = '<div id="<%=id%>" class="<%=mainStyle%>" style="width:32px;height:32px;z-index:101;"><img width="100%" height="100%" src="<%=getImageUrl("/static/img/v2/common/loading3.gif")%>" /></div>';
			options.useModel = options.useModel || false;
			options.onTouch = function(){};
			this.loadingDialog = new Dialog(options);
		};
		this.loadingDialog.show();
		return this.loadingDialog;
	}
	uiDialog.nothing = function(container, text, style){
		container = container || 'body';
		$(container).css('background-color', '#ebebeb');
		if ($('#nothing_container').length) {
			$('#nothing_container').remove()
		}
		style = style || {};
		var img = style.img || "/static/img/v2/common/nothing.png";
		var fontColor = style.fontColor || '#fff';
		$(container).append('<div id="nothing_container" style="width:140px;height:133px;position:absolute;left:50%;top:50%;margin-top:-66px;margin-left:-70px;">\
						<div style="width:100%;height:110px;"><img width="100%" height="100%" src="'+misc.getImageUrl(img)+'" /></div>\
						<div style="width:100%;height:13px;line-height:13px;font-size:13px;text-align:center;margin-top:10px;color:'+fontColor+';">'+text+'</div>\
						</div>');
	}
});



define("ui/widget/dialog",function(require, exports, module){
	var $ = require('lib/zepto'),
		mask = require('ui/widget/mask'),
		misc = require('util/misc'),
		Bridge = require('util/bridge'),
		Browser = require('util/browser'),
		template = require('ui/template'),
		undefined;

	var uid = 0;
	var Dialog = function(options){
		this.id = 'dialog_'+uid++;
		this.options = $.extend({
			useModel : true,
			content : '',
			showCloseButton : true,
			mainStyle : '',
			isCenter : true, //是否居中
			template : Dialog.template,
			templateData : null,
			animate : null,
			maskStyle : {},
			onCreate : function(){},
			onClose : function(){},
			onTouch : function(){this.hide()},
			onShow : function(){}
		}, options);
	}
	Dialog.template = '<div id="<%=id%>" class="mgp-dialog <%=mainStyle%>">\
	    <div class="mgp-close" id="close_<%=id%>"><img src="<%=getImageUrl("/static/img/common/cancel.png")%>" class="j_cancel_img" width="28" height="28" /></div>\
	    <div class="mgp-content"><%=content%></div>\
	</div>';
	Dialog.alertTemplate = '<div id="<%=id%>" class="mgp-dialog-alert <%=mainStyle%>">\
			<div class="mgp-dialog-alert-title"><%=title%></div>\
			<div class="mgp-dialog-alert-cont"><%=content%></div>\
			<% for (var i = 0; i < templateData.button.length; i++) { %>\
				<div class="mgp-dialog-alert-close j_alert_button" d-tap="<%=i%>"><%=templateData.button[i]%></div>\
				<% if (templateData.button.length>1 && i!=templateData.button.length-1) { %>\
					<div class="mgp-dialog-alert-partion"><img src="<%=getImageUrl("/static/img/v2/common/partion.png")%>" /></div>\
				<% } %>\
			<% } %>\
		</div>';
	Dialog.alert = function(options){
		var _this = this;
		window.__doNothing = function(){}
		var obj = {title: options.title, desc: options.content};
		if (options.close) {
			obj.button1 = options.close; 
			obj.func1 = options.func1 || '__doNothing';
			obj.button3 = obj.button2 = '';
			obj.func3 = obj.func2 = '__doNothing';
		}else{
			for (var i = 1; i <= options.templateData.button.length; i++) {
				obj['button'+i] = options.templateData.button[i-1];
				obj['func'+i] = options.templateData.funcArr[i-1] || '__doNothing';
			};
			for (; i <= 3; i++) {
				obj['button'+i] = '';
				obj['func'+i] = '__doNothing';
			};
		}
		if(Browser.ios() && Bridge.getAppVersion()>=2.1){
			Bridge.getApp().showalert(obj);
			return;
		}else if (Browser.android() && Bridge.getAppVersion()>=5) {
			Bridge.getApp().showalert(obj.title, obj.desc, obj.button1, obj.func1, obj.button2, obj.func2, obj.button3, obj.func3);
			return;
		};
		var options = $.extend({}, options);
		if (options.close) {
			var templateData = {};
			templateData.button = [options.close];
			templateData.funcArr = [options.func1 || function(evt){this.hide();}];
			options.templateData = templateData;
		}
		if (this.showAlertDialog) {
			this.showAlertDialog.destory();
		}else{
			$('head').append('<style>.mgp-dialog-alert{width: 224px;z-index:101;border-radius:5px;}\
			.mgp-dialog-alert-title{padding-top: 25px;width: 100%;height: 17px;line-height: 17px;font-size: 16px;color: #363636;font-weight: bold;text-align: center;background-color: #e1e1e1;border-top-left-radius: 5px;border-top-right-radius: 5px;}\
			.mgp-dialog-alert-cont{padding: 20px 15px 10px 15px;text-align: center;line-height: 18px;font-size: 13px;color: #363636;background-color: #e1e1e1;}\
			.mgp-dialog-alert-close{width: 100%;height: 44px;line-height: 44px;text-align: center;font-size: 16px;color: #7ecefd;font-weight: bold;background-color: #fff;}.mgp-dialog-alert-close:last-child{border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;}\
			.mgp-dialog-alert-partion{width:100%;height:1px;}.mgp-dialog-alert-partion img{width:100%;height:100%;display:block;background-color:#fff;}</style>');
		}
		options.template = Dialog.alertTemplate;
		options.onTouch = function(evt){
			evt = evt || window.event;
			evt.stopPropagation && evt.stopPropagation();
			evt.cancelBubble = true;
			evt.preventDefault && evt.preventDefault();
			evt.returnValue = false;
		};
		options.onCreate = function(evt){
			$(this.dom).on(misc.geteventType().touchStart, function(evt){
	        	evt.preventDefault && evt.preventDefault();
				evt.returnValue = false;
	        });
		};




		options.animate = function(){
			$(this.dom).fadeIn(300);
		};
		this.showAlertDialog = new Dialog(options);
    	this.showAlertDialog.show(true);
    	$('.j_alert_button').off(misc.geteventType().touchStart).on(misc.geteventType().touchStart, function(evt){
    		var tapIndex = $(this).attr('d-tap');
    		var curFunc = options.templateData.funcArr[tapIndex];
    		curFunc ? (typeof curFunc == 'function' ? curFunc.call(_this.showAlertDialog, evt) : window[curFunc].call(_this.showAlertDialog, evt)) : '';
    		evt.preventDefault && evt.preventDefault();evt.returnValue = false;
    	});
    	return this.showAlertDialog;
	}
	Dialog.prototype = {
		create : function(){
			var tplData = {}, _this = this;
			tplData.content = this.options.content;
			tplData.id = this.id;
			tplData.mainStyle = '';
			tplData.title = this.options.title;
			tplData.close = this.options.close;
			if (this.options.templateData) {
				tplData.templateData = this.options.templateData;
			};
			tplData.getImageUrl = misc.getImageUrl;
			var dialog = template.parse(this.options.template, tplData);
            $(document.body).append(dialog);
            this.dom = $('#'+this.id).get(0);
            $('#close_'+this.id).on(misc.geteventType().touchStart, function(evt){
            	_this.hide();
            	_this.options.onClose.call(_this, evt);
            });

            this.options.onCreate.call(this);
		},
		fixPosition : function(nocancel){
			var width = $(window).width(), height = $(window).height(),
	        	domWidth = $(this.dom).width(), domHeight = $(this.dom).height();
	        var left;
	        if (nocancel) {

	        	left = (width-domWidth)/2;
	        }else{

	        	left =  (width-domWidth)/2;
	        }
	        $(this.dom).css({
	        	position : 'absolute',
	        	left : left,
	        	top : (height-domHeight)/2 + $(window).scrollTop()
	        });
		},
		show : function(nocancel){
			var _this = this;
			if (!this.dom) {
				this.create();
			}
			if (this.options.animate) {
				this.options.animate.call(this);
			}else{
				$(this.dom).show();
			}
			if (this.options.isCenter) {
            	this.fixPosition(nocancel);
            };

			if (this.options.useModel) {
				mask.show(function(evt){
					_this.options.onTouch.call(_this, evt);
				}, _this.options.maskStyle);
			}
			this.options.onShow.call(_this);
		},
		hide : function(){
			if (this.options.useModel) {
				mask.hide();
			};
			$(this.dom).hide();
		},
		destory : function(){
			if (this.options.useModel) {
				mask.hide();
			};
			if (this.dom) {
				uid--;
				$(this.dom).remove();
				this.dom = null;
			};
		}
	}

	return Dialog;
});



define("ui/widget/dialog2",function(require) {
   var $ = require('lib/zepto'),
        misc = require('util/misc'),
        Bridge = require('util/bridge'),
        Browser = require('util/browser'),
        template = require('ui/template'),
        undefined;
    
    var uid = 0;
    var Dialog = function(options) {
        this.id = 'dialog_' + (++uid);
        this.dom = null;
        this.mask = null;
        this.timer = null;
        this.options = $.extend({
            title: '提示',
            toolbar: '',
            footer: '',
            content: '',
            submitButtonText: '确定',
            cancelButtonText: '取消',
            destroyWhenClosed: true,
            autoClose: false,
            autoCloseDelay: 1500,
            useModal: true,
            closeAfterSubmit: true,
            showCloseButton: true,
            showSubmitButton: true,
            showCancelButton: true,
            showHeader: true,
            showFooter: true,
            onCreated: function() {},
            onOpened: function() {},
            onClosed: function() {},
            onDestroyed: function() {},
            onSubmitted: function() {},
            onCanceled: function() {},
            onCoverClicked: function(evt){
                this.close();
                evt = evt || window.event
                evt.preventDefault && evt.preventDefault()
                evt.stopPropagation && evt.stopPropagation()
            },
            width: '224px',
            height: '141px',
            zIndex: 5000,
            mainStyle: 'popup_msg',
            template: Dialog.template,
            autoPosit: true,
            left: '50%',
            top: '50%',
            animation: 'fade',
            maskStyle:{}
        },
        options || {});

        Dialog.instances[this.id] = this;
    }
    Dialog.prototype = {
        create: function() {
            var _this = this;
            var tplData = {};
            tplData.id = this.id;
            tplData.showHeader = this.options.showHeader ? '' : 'display:none;';
            tplData.showFooter = this.options.showFooter ? '' : 'display:none;';
            tplData.showCloseButton = this.options.showCloseButton ? '' : 'display:none;';
            tplData.showSubmitButton = this.options.showSubmitButton ? '' : 'display:none;';
            tplData.showCancelButton = this.options.showCancelButton ? '' : 'display:none;';
            tplData.footer = this.options.footer ? this.options.footer : '';
            tplData.content = this.options.content.replace('<%=dialogId%>', this.id);
            tplData.getImageUrl = misc.getImageUrl;
            tplData.mainStyle = this.options.mainStyle;
            tplData = $.extend(this.options, tplData);
            if (this.options.useModal) {
                this.mask = new Dialog.Mask($.extend({
                    zIndex: this.options.zIndex - 1,
                    target: this.options.maskTarget
                }, this.options.maskStyle));
                this.mask.create();
                $(this.mask.dom).on(misc.getEventType().touchStart, function(){
                    _this.options.onCoverClicked.call(_this);
                })
            }
            var dialog = template.parse(this.options.template, tplData);
            $(document.body).append(dialog);
            this.dom = $('#' + this.id).get(0);
            $('#' + this.id + '_close').click(function() {
                _this.close();
                return false;
            });
            $('#' + this.id + '_submit').click(function() {
                if (_this.options.onSubmitted.call(_this) || _this.options.closeAfterSubmit) {
                    _this.close();
                }
                return false;
            });
            $('#' + this.id + '_cancel').click(function() {
                _this.options.onCanceled.call(_this);
                _this.close();
                return false;
            });
            this.options.onCreated.call(this);
        },
        open: function() {
            if (this.dom == null) {
                this.create();
            }
            if (this.options.autoPosit) {
                this.setPosition();
            }
            var animation = this.options.animation;
            switch(animation){
                case 'fade':
                    $(this.dom).fadeIn();
                break;
                case 'slide':
                    $(this.dom).slideDown();
                break;
                default:
                    $(this.dom).show();
                break;
            }
            var _this = this;
            if (this.options.autoClose) {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(function() {
                    _this.close();
                },
                this.options.autoCloseDelay);
            }
            if (this.mask) {
                this.mask.show();
            }
            this.options.onOpened.call(this);
        },
        close: function() {
            var animation = this.options.animation;
            switch(animation){
                case 'fade':
                    $(this.dom).fadeOut();
                break;
                case 'slide':
                    $(this.dom).slideUp();
                break;
                default:
                    $(this.dom).hide();
                break;
            }
            if (this.mask) {
                this.mask.hide();
            }
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            if (this.options && this.options.onClosed) {
                this.options.onClosed.call(this);
            }
            if (this.options && this.options.destroyWhenClosed) {
                var _this = this;
                setTimeout(function() {
                    _this.destroy();
                },
                10);
            }
        },
        changeButtonText: function(type, text) {
            switch (type) {
            case 'submit':
                var btn = $('#' + this.id + '_submit').get(0);
                break;
            case 'cancel':
                var btn = $('#' + this.id + '_cancel').get(0);
                break;
            }
            btn.innerHTML = text;
        },
        setPosition: function(){
            if(!this.options.autoPosit) {
                return;
            }
            var topPos = $(document).scrollTop() || 0,
                wh = $(window).height(),
                dh = $(this.dom).height(),
                top,
                win = window;
            if (topPos < 0) {
                topPos = 0;
            }
            if (wh < dh) {//dom太长
                if (topPos <= (dh-wh)) {
                    top = topPos;
                }else{
                    top = topPos - (dh-wh);
                }
            }else{
                top = Math.floor((wh-dh)/2) + topPos;
            }
            $(this.dom).css({
                left: Math.floor(($(window).width() - $(this.dom).width()) / 2) + 'px',
                top: top + 'px'
            });
        },
        cancelAutoClose: function(){
            if(this.timer){
                clearTimeout(this.timer);
            }
        },
        restoreAutoClose:function()
        {
             var _this = this;
            this.timer = setTimeout(function() 
            {
                _this.close();
             },this.options.autoCloseDelay);
        },
        destroy: function() {
            try {
                $(this.dom).remove();
                if (this.mask) {
                    this.mask.destroy();
                }
                this.options.onDestroyed.call(this);
                this.dom = null;
                this.options = null;
                Dialog.instances[this.id] = null;
                delete Dialog.instances[this.id];
            } catch(_) {}
        }
    };

    Dialog.template = '<div id="<%=id%>" style="position: absolute; visibility: visible; display: block; z-index: <%=zIndex%>;width:<%=width%>;">\
                        <div class="mgp-dialog2 <%=mainStyle%>">\
                            <div class="mgp-dialog-close" id="<%=id%>_close" style="<%=showCloseButton%>"><img src="<%=getImageUrl("/static/img/common/cancel.png")%>" width="28" height="28" /></div>\
                            <div class="mgp-dialog-title" style="<%=showHeader%>"><%=title%></div>\
                            <div class="mgp-dialog-content"><%=content%></div>\
                            <div class="mgp-dialog-footer" style="<%=showFooter%>">\
                                <div style="<%=showSubmitButton%>" class="mgp-dialog-submit" id="<%=id%>_submit"><%=submitButtonText%></div>\
                                <div style="<%=showCancelButton%>" class="mgp-dialog-btn-part"><img src="<%=getImageUrl("/static/img/v2/common/partion.png")%>" /></div>\
                                <div style="<%=showCancelButton%>" class="mgp-dialog-cancel" id="<%=id%>_cancel"><%=cancelButtonText%></div>\
                            </div>\
                        </div>\
                        <div>'
    Dialog.contentTemplate = '<div class="mgp-dialog-text"><%=content%></div>';
    
    Dialog.instances = {};
    Dialog.notice = function(options){
        if (Bridge.isApp()) {
            Dialog._noticeInApp(options)
        }else{
            var options = $.extend({
                showCloseButton: false
            }, options);
            options.content = template.parse(Dialog.contentTemplate, {content: options.content || ''});
            var onSubmitted = options.onSubmitted || function(){}, onCanceled = options.onCanceled || function(){};
            options.submitButtonText = options.submitButtonText || '确定';
            options.onSubmitted = function(){
                this.close()
                onSubmitted()
            }
            if (options.showCancelButton || options.cancelButtonText) {
                options.cancelButtonText = options.cancelButtonText || '取消';
                options.showCancelButton = true;
                options.onCanceled = function(){
                    this.close()
                    onCanceled()
                }
            }else{
                options.showCancelButton = false;
            }
            options.zIndex = options.zIndex || 11000;
            var dialog = new Dialog(options);
            dialog.open();
            return dialog;
        }
    };
    Dialog._noticeInApp = function(options){
        window['_btn1CallFromApp'+uid] = function(){
            options.onSubmitted && options.onSubmitted()
        }
        window['_btn2CallFromApp'+uid] = function(){
            options.onCanceled && options.onCanceled()
        }
        window['_btn3CallFromApp'+uid] = function(){}
        var obj = {'title': options.title, 'desc': options.content};
        obj.button1 = options.submitButtonText || '确定'
        obj.func1 = '_btn1CallFromApp'+uid
        if (options.showCancelButton || options.cancelButtonText) {
            obj.button2 = options.cancelButtonText || '取消';
            obj.func2 = '_btn2CallFromApp'+uid;
        }
        obj.button3 = '';
        obj.func3 = '_btn3CallFromApp'+uid;
        if (Browser.ios()) {
            Bridge.getApp().showalert(obj);
        }else{
            Bridge.getApp().showalert(obj.title, obj.desc, obj.button1, obj.func1, obj.button2, obj.func2, obj.button3, obj.func3);
        }
    };
    Dialog.close = function(id) {
        if (id) {
            Dialog.instances[id].close();
        } else {
            for (var ins in Dialog.instances) {
                Dialog.instances[ins].close();
            }
        }
    }
    Dialog.destroy = function() {
        for (var ins in Dialog.instances) {
            try {
                Dialog.instances[ins].destroy();
            } catch(ex) {}
        }
        Dialog.instances = null;
    }
    Dialog.Mask = function(options) {
        this.options = $.extend({
            target: document.body,
            zIndex: 990,
            opacity: 0.5
        },
        options || {});
        this.dom = null;
    }
    Dialog.Mask.prototype = {
        create: function() {

            var width = $(this.options.target).get(0).scrollWidth,
                height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
                zIndex = this.options.zIndex,
                opacity = this.options.opacity;
            this.dom = document.createElement('div');
            document.body.appendChild(this.dom);
            $(this.dom).css({
                'position': 'absolute',
                'zIndex': zIndex,
                'left': 0,
                'top': 0,
                'width': width + 'px',
                'height': height + 'px',
                'display': 'none'
            });
            $(this.dom).append('<div style="position:absolute; left:0; top:0; width:' + width + 'px;height:' + height + 'px; background:#000000;z-index:' + zIndex + ';opacity:' + opacity + '; filter:alpha(opacity=' + (opacity * 100) + ');-moz-opacity:' + opacity + ';"></div>');
        },
        show: function() {
            if (!this.dom) {
                this.create();
            }
            $(this.dom).show();
        },
        hide: function() {
            $(this.dom).hide();
        },
        destroy: function() {
            $(this.dom).remove();
            this.dom = null;
            this.options = null;
        }
    }
    return Dialog;
    
});



define("ui/widget/mask",function(require, exports, module){
	var $ = require('lib/zepto'),
		misc = require('util/misc'),
		undefined;
	var mask = module.exports = {};

	var dom, isShow = false, onTouch = function(){};
	mask.show = function(callback, style){
		if (!dom) {
			initDom(style);
		}
		if (isShow) {
			return;
		};
		typeof callback == 'function' && (onTouch = callback);
		isShow = true;
		var st = $(window).scrollTop();
		$(window).scrollTop(st-1);
		$(window).scrollTop(st);
		var opacity = 0.4;
		if (style) {
			opacity = style.opacity || 0.4;
		};
		dom.show().css({opacity:opacity});;
	}
	mask.hide = function(){
		dom.hide();
		isShow = false;
	}
	function initDom(style){
		var styleObj = $.extend({
			height : '100%',
			width : '100%',
			position : 'fixed',
			zIndex : 100,
			top : 0, 
			left : 0,
			display : 'block',
			background : '#000000',
			opacity : 0.4
		}, style||{});
		dom = $('<div></div>').css(styleObj).hide();
		dom.appendTo(document.body);
		dom.on(misc.geteventType().touchStart, function(evt){
			onTouch(evt);
		});
	}
});



define("ui/widget/imglazyload",function(require, exports, module){
	var $ = require('lib/zepto');
	var ImgsAry = [];
	var srcAttr;
	function Handler(callback)
	{
		var CurWinTop = $(window).height() + $(window).scrollTop();
		for(var i = 0;i < ImgsAry.length;i++)
		{
			var e = ImgsAry[i];
			if(e.top < CurWinTop)
			{
				$(e).filter('img[' + srcAttr + ']').each(function()
				{
					var img = $(this);
					var lazySrc = img.attr(srcAttr);
					img.attr("src", lazySrc);
					img.removeAttr(srcAttr);
				});
				$(e).find('img[' + srcAttr + ']').each(function()
				{
					var img = $(this);
					var lazySrc = img.attr(srcAttr);
					img.attr("src", lazySrc);
					img.removeAttr(srcAttr);
				});
				ImgsAry.splice(i,1);
				i--;
				if(ImgsAry.length <= 0)
				{

					$(window).unbind('scroll resize', Imglazyload.callback);
				}
				typeof callback == 'function' && callback(e);
			}
		}
	}
	var Imglazyload = {
		myoptions :{
			"className":".j_lazy",
			"container":'body',
			"threshold":100,
			"srcAttr": "d-lazy",
			"isAnimate": true,//加载完成是否播放动画，默认播放
			"showFunc": function(){$(this).animate({'opacity':1}, 200)}//播放动画
		},
		show:function(lzoptions){
			var _this = this;
			$.extend(this.myoptions, lzoptions);
			srcAttr = this.myoptions.srcAttr;

			var imgs = $(this.myoptions.container).find(this.myoptions.className);
			if(imgs.length)
			{
				imgs.each(function(i,e)
				{
					if (e.binded) {
						return;//只绑定一次
					};
					e.binded = true;
					var rect = $(e).attr('d-rect');
					if (rect && (rect.split('x').length == 2)) {
						var w = +rect.split('x')[0], h = +rect.split('x')[1];
						$(e).css('height', h); //固定高度防抖

						if (e.tagName.toLowerCase() == 'img') {
							$(e).css('opacity', 0);
							$(e).parent().addClass('img-parent-bg');
							var func = e.onload;
							e.onload = function() {
								func && func();
								e.onload =null;
								$(e).parent().removeClass('img-parent-bg');

								if (_this.myoptions.isAnimate) {
									_this.myoptions.showFunc.call(e);
								}else{
									$(e).css('opacity', 1);
								}
								$(window).trigger('fresh');
							};
							e.onerror = function(){
								e.onerror = null;


							}
						} else {
							var imgCount = e.getElementsByTagName('img').length;
							var loadedCount = 0;
							$(e).find('img').each(function(i, img) {
								!function(img){
									$(img).parent().addClass('img-parent-bg');
									$(img).css('opacity', 0);
									var func = img.onload;
									img.onload = function() {
										func && func();
										img.onload = null;
										$(img).parent().removeClass('img-parent-bg');
										if (_this.myoptions.isAnimate) {
											_this.myoptions.showFunc.call(e);
										}else{
											$(e).css('opacity', 1);
										}
										if (++loadedCount == imgCount) {

										}
										$(window).trigger('fresh');
									};
									img.onerror = function(){
										img.onerror = null;


									}
								}(img);
							});
						}
					}
					e.top = $(e).offset().top - Imglazyload.myoptions.threshold;
					ImgsAry.push(e);
				});
				Imglazyload.init();
			}
		},
		init:function()
		{
			var callback = this.myoptions.callback || function(){};
			Handler(callback);
			var _this = this;
			$(window).bind('scroll resize', _this.callback);
		},
		callback: function(){
			var callback = Imglazyload.myoptions.callback || function(){};
			Handler(callback);
		}
	};
	module.exports = Imglazyload;
});


define("ui/widget/share",function(require, exports, module){
	var $ = require('lib/zepto'),
		undefined;

	var Share = module.exports = {};
	var jiathis_config = {
		uid: '1946708',
		appkey:'785270868',//tsina
		url: location.href,
		title: '在小红书上发现这样一个宝贝，小伙伴们快来看看！',
		summary: '',
		pic: '',
		shortUrl: true,
		siteName: '小红书'
	}
	Share.get = function(params){
		params = params || {};
		params = $.extend(jiathis_config, params);
		var url = ['http://www.jiathis.com/send/?webid=tsina'];
		for(var key in params)
        {

            url.push('&' + key + '=' + encodeURIComponent(params[key]));
        }
        return url.join('');
	}
});


define("ui/widget/slider",function(require, exports, module){
	var $ = require('lib/zepto'),
		slip = require('lib/slip'),
		undefined;
	var Slider = {};
	module.exports = Slider;
	Slider.init = function(container){
		var $container = $(container),
			$imgLi = $container.find('.slider-ul li'),
			$sliderUl = $container.find('.slider-ul'),
			$dotUl = $container.find('.slider-dot ul'),
			$li = $container.find('.slider-dot li'),
			screendWidth = $(window).width();

		$container.width(screendWidth);
		$container.height(screendWidth);
		$imgLi.width(screendWidth);
		$sliderUl.width(screendWidth*$imgLi.length).height(screendWidth);
		if ($li.length < 1) {
			return;
		};
		var dotWidth = ($li.width()+4)*$li.length;
		$dotUl.width(dotWidth);
		$dotUl.css('margin-left', (screendWidth - dotWidth)/2+'px').show();
		slip('page', $sliderUl[0], {
	    	change_time: 4000,
	    	num: $imgLi.length,
	    	loop: true,
	    	endFun : function(){
	    		var pageNum = this.page;
	    		$li.eq(pageNum).addClass('active').siblings().removeClass('active');
	    	}
	    });
	}
});


define("ui/widget/barrage",function(require, exports, module){
	var $ = require('lib/zepto'),
		misc = require('util/misc'),
		ajax = require('util/ajax'),
		cgi = require('module/cgi'),
		template = require('ui/template'),
		undefined;

	var containerTemplate = '<section class="barrage-container j_barrage_container"></section>';
	var listTemplate = '<div class="barrage-list j_barrage_list" style="visibility:hidden;">\
							<div class="barrage-image">\
							<% if (datas.type == "purchase") { %>\
								<% if (datas.imageType == "view") { %>\
									<img src="<%=handle("/static/img/v2/common/barrage/icon-view.png")%>">\
								<% }else if (datas.imageType == "address") { %>\
									<% if (datas.pageUrl == "special") { %>\
										<img src="<%=datas.image%>" style="border-radius:13px;">\
									<% }else{ %>\
										<img src="<%=datas.userImage%>">\
									<% } %>\
								<% } %>\
							<% }else{ %>\
								<img src="<%=datas.img%>"<% if (datas.pageUrl=="special") { %> style="border-radius:13px;"<% } %>>\
							<% } %>\
							</div>\
							<% if (datas.type == "purchase") { %>\
							<div class="barrage-text">最新订单来自<%=datas.address%>的<%=datas.user.level.name%>，<%=datas.time%></div>\
							<% }else{ %>\
							<div class="barrage-text"><%=datas.text%></div>\
							<% } %>\
						</div>';
	var fileterProvince = ['北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏', '四川', '宁夏', '海南'];
	var pollTime = 60*1000, pollTimer;
	function BarrageManager(options){
		this.options = $.extend({
			url: '',
			param:{}
		}, options);
	}
	BarrageManager.prototype = {
		dataType : [{'type':'hot', 'text':'该商品为福利社热卖商品，小红薯疯抢'},
					{'type':'limit', 'text':'该商品限量供应，每位小红薯限购<%=limit%>件', 'limit':function(num){if (num>0 && num<=2) {return true};return false;}},
					{'type':'urgent', 'text':'该商品目前库存紧张，先到先得手慢无', 'limit':function(num){if (num>0 && num<=15) {return true};return false;}}],
		getIconUrl : function(type, image){
			if (this.options.pageUrl == 'special') {
				return image;
			}else{
				return misc.getImageUrl("/static/img/v2/common/barrage/"+type+".png");
			}
		},
		formatData : function(res){
			var dataArr = [], start = 0;
			if (this.options.pageUrl == 'goods') {
				if (__barrage_total <= 15 && __barrage_total > 0) {
					dataArr.push({type:this.dataType[2].type, text:this.dataType[2].text, img:this.getIconUrl(this.dataType[2].type), pageUrl:this.options.pageUrl});
				};
				if (__barrage_limit <= 2 && __barrage_limit > 0) {
					dataArr.push({type:this.dataType[1].type, text:this.dataType[1].text.replace('<%=limit%>', __barrage_limit), img:this.getIconUrl(this.dataType[1].type), pageUrl:this.options.pageUrl});
				};
				if (__barrage_hot) {
					dataArr.push({type:this.dataType[0].type, text:this.dataType[0].text, img:this.getIconUrl(this.dataType[0].type), pageUrl:this.options.pageUrl});
				};
				return dataArr;
			};
			if (this.options.pageUrl == 'special') {
				start = 1;
			};
			for(var i=this.dataType.length-1; i>=start; i--){
				var curEle = this.dataType[i], list = res.data[curEle.type] || [];
				for(var j=0, l=list.length; j<l; j++){
					if (curEle.limit && !curEle.limit(list[j].total || list[j].limit)) {
						continue;
					};
					list[j].type = curEle.type;
					list[j].text = curEle.text.replace('<%=limit%>', list[j].limit);
					list[j].img = this.getIconUrl(curEle.type, list[j].image);
					list[j].pageUrl = this.options.pageUrl;
					dataArr.push(list[j]);
					break;
				}
			}
			return dataArr;
		},
		getData : function(imageType, callback){
			var _this = this;
			if (this.timestamp) {
				this.options.param.lasttime = this.timestamp;
			};
			ajax.get({
				url: this.options.url,
				data: this.options.param,
				success: function(res){
					var data = [], otherData;
					if (res.success) {
						otherData = _this.formatData(res);
						var purchase = res.data.purchase;
						if (purchase && purchase.length) {
							for (var arr=purchase,len=arr.length,i=0; i<len; i++) {
								if (arr[i].time <= 30*60*1000) {
									var time = misc.formatTime(arr[i].time, 2);
									arr[i].time = time;
									arr[i].type = 'purchase';
									arr[i].imageType = imageType;
									data.push(arr[i]);
								};
							};
						};
						data = otherData.concat(data);
						_this.timestamp = res.timestamp;
						callback && callback(data);
					};
				}
			});
		}
	}
	function Barrage(config){
		this.options  = $.extend({
			url: '',
			param: {},
			imageType: '',
			pageUrl: 'special',
			data: [],
			container: '.j_barrage_container',
			containerTemplate: containerTemplate,
			template: listTemplate,
			domClass: '.j_barrage_list',
			itemMargin: 16,
			DISPLAY_TIME: 4000,
			ANIMATE_TIME: 600,
			FADE_OUT_TIME: 300,
			filter: true
		}, config);
		var managerConfig = {url: this.options.url, param: this.options.param, num:20, pageUrl:this.options.pageUrl};
		this.manager = new BarrageManager(managerConfig);
		this.init();
	}
	Barrage.prototype = {
		filter: function(){
			var data = [];
			for (var i = 0; i < this.options.data.length; i++) {
				var curData = this.options.data[i];
				if (curData.type != 'purchase') {
					data.push(curData);
					continue;
				};
				for (var j = 0; j < fileterProvince.length; j++) {
					if (curData.address.indexOf(fileterProvince[j])>-1) {
						curData.address = fileterProvince[j];
						data.push(curData);
					};
				};
			};
			this.options.data = data;
		},
		init: function(){
			$('body').append(this.options.containerTemplate);
			this.start();
		},
		start: function(){
			var _this = this;
			this.load();
		},
		load: function(){
			var _this = this;
			this.manager.getData(this.options.imageType || 'address', function(data){_this.run(data)});
		},
		run: function(data){
			var _this = this;
			data ? (this.options.data = this.options.data.concat(data)) : '';
			if (this.options.filter) {
				this.filter();
			};
			if (this.options.data.length) {
				setTimeout(function(){
					var d = _this.options.data.shift();
					if (d) {
						_this.animate(d);
					}else{
						_this.animate();
					}
					if (_this.options.data.length<=3) {
						clearTimeout(pollTimer);
						pollTimer = setTimeout(function(){_this.start()}, pollTime);
					};
					_this.timer = setTimeout(arguments.callee, _this.options.DISPLAY_TIME);
				}, this.options.DISPLAY_TIME);
			}else{
				clearTimeout(pollTimer);
				pollTimer = setTimeout(function(){_this.start()}, pollTime);
			}
		},
		animate: function(d){
			var _this = this;
			if (d) {
				if (d.type == 'purchase') {
					d.pageUrl = this.options.pageUrl;
					var level = d.user.level.number + 1;
					d.userImage = misc.getImageUrl('/static/img/v2/detail/weshop/icon/'+level+'.png');
				};
				$(this.options.container).append(template.parse(this.options.template, {datas:d, handle:misc.getImageUrl}));
			};
			var $list = $(this.options.domClass), $last = $list.last(), h = $list.first().height();
			var contH = $(this.options.container).height();
			if (d) {
				$last.css({'top': contH, 'visibility':'visible'});
			};
			if ($list.length == 0) {
				clearTimeout(_this.timer);
				return;
			};
			$list.each(function(index, item){
				var y = _this.getTranslateY(item), $ele = $(item);
				if (contH+y < h) {
					$ele.animate({opacity: 0, "-webkit-transform":"translateY("+(y-_this.options.itemMargin-h)+"px)"}, _this.options.ANIMATE_TIME, 'ease-out', function(){$ele.remove();});
				}else{
					$ele.animate({"-webkit-transform":"translateY("+(y-_this.options.itemMargin-h)+"px)"}, _this.options.ANIMATE_TIME, 'ease-out');
				}
			});
		},
		getTranslateY: function(d){
			var transform = $(d).css("-webkit-transform");
			return ((transform=='none') ? 0 : (parseInt(transform.match(/\-?[0-9]+/g)[0])));
		}
	}
	module.exports = Barrage;
});




define("ui/widget/barragev2",'ui/widget/barragev2', function(require, exports, module){
	var $ = require('lib/zepto'),
		misc = require('util/misc'),
		Ajax = require('util/ajax'),
		Cgi = require('module/cgi'),
		template = require('ui/template'),
		undefined;
	var containerTemplate = '<section class="barrage-container j_barrage_container"></section>';
	var listTemplate = '<div class="barrage-list j_barrage_list" style="visibility:hidden;">\
							<div class="barrage-image">\
							<img src="<%=datas.image%>" style="border-radius:13px;">\
							</div>\
							<div class="barrage-text"><%=datas.text%></div>\
						</div>';
	var fileterProvince = ['北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏', '四川', '宁夏', '海南'];
	var fileterObj = {
		'purchase': {
			'premise': function(data, maxNum, pageUrl){
				var curNum = 0, newData = [], _this = this;
				for (var i = 0; i < data.length && curNum < maxNum; i++) {
					if (data[i].time <= 30*60*1000) {
						var curData = data[i];
						for (var j = 0; j < fileterProvince.length; j++) {
							if (curData.address.indexOf(fileterProvince[j])>-1) {
								curData.address = fileterProvince[j];
								curData.time = Math.max(1000,curData.time);
								var time = misc.formatTime(curData.time, 2);
								curData.time = time;
								curData.text = _this.getText(curData.address, curData.user.level.name, curData.time);
								curData.image = _this.getImageUrl(curData, pageUrl);
								newData.push(curData);
								curNum++;
							};
						};
					};
				};
				return newData;
			},
			'getText': function(addr, name, time){
				return '最新订单来自'+addr+'的'+name+'，'+time;
			},
			'getImageUrl': function(ele, pageUrl){
				var src = '';
				if (pageUrl == 'fulishe') {
					src = ele.image;
				}else{
					src = misc.getImageUrl('/static/img/v2/detail/weshop/icon/'+(ele.user.level.number+1)+'.png');
				}
				return src;
			}
		},
		'view':{
			'premise': function(obj, allViewMaxNum, curViewMaxNum, pageUrl){
				var data = {}, text = '';
				if (obj.current_visitor >= curViewMaxNum) {
					text = this.getText(obj, 1, pageUrl);
				}else if (obj.total_visitor >= allViewMaxNum) {
					text = this.getText(obj, 2, pageUrl);
				};
				if (text) {
					data.text = text;
					data.image = this.getImageUrl();
					return [data];
				};
				return [];
			},
			'getText': function(obj, type, pageUrl){
				if (pageUrl == 'fulishe') {
					if (type == 1) {
						return '正有'+obj.current_visitor+'只小红薯和你一起抢购好物';
					}else{
						return '该场福利社已经涌入'+obj.total_visitor+'只小红薯';
					}
				}else if (pageUrl == 'goods') {
					if (type == 2) {
						return '这件好物已经吸引了'+obj.total_visitor+'只小红薯的目光';
					}else{
						return '正有'+obj.current_visitor+'只小红薯和你一起关注这件好物';
					}
				};
			},
			'getImageUrl': function(){
				return misc.getImageUrl("/static/img/v2/common/barrage/icon-view.png");
			}
		},
		'other': {
			'premise': function(obj){
				var ele, newData = [];
				if (obj.urgent && obj.urgent.length) {
					ele = this._urgent(obj.urgent);
					if (ele) {
						ele.text = this.getText('urgent');
						ele.image = this.getImageUrl('urgent');
					};
				};
				if (!ele && obj.limit && obj.limit.length) {
					ele = this._limit(obj.limit);
					if (ele) {
						ele.text = this.getText('limit');
						ele.image = this.getImageUrl('limit');
					};
				};
				if (!ele && obj.hot && obj.hot.length) {
					ele = this._hot(obj.hot);
					if (ele) {
						ele.text = this.getText('hot');
						ele.image = this.getImageUrl('hot');
					};
				};
				ele ? newData.push(ele) : '';
				return newData;
			},
			'_urgent': function(data){
				for (var i = 0; i < data.length; i++) {
					if (data[i].total <= 20 && data[i].total > 0) {
						return data[i];
					}
				};
				return null;
			},
			'_limit': function(data){
				for (var i = 0; i < data.length; i++) {
					if (data[i].limit <= 2 && data[i].limit > 0) {
						return data[i];
					}
				};
				return null;
			},
			'_hot': function(data){
				return data[0] || null;
			},
			'getText': function(type, num){
				var text;
				switch(type){
					case 'urgent':text = '该商品目前库存紧张，先到先得手慢无';break;
					case 'limit':text = '该商品限量供应，每位小红薯限购'+num+'件';break;
					case 'hot':text = '该商品为福利社热卖商品，小红薯疯抢';break;
					default: text = '';break;
				}
				return text;
			},
			'getImageUrl': function(type){
				return misc.getImageUrl("/static/img/v2/common/barrage/"+type+".png");
			}
		}
	};
	function BarrageManager(data, callback){
		this.data = $.extend({}, data || {});
		this.callback = callback || function(){};
	}
	BarrageManager.prototype.getData = function(){
		var _this = this;
		if (this.lasttime) {
			this.data.lasttime = this.lasttime;
		};
		Ajax.get({
			url: Cgi.get('getBarrageNew'),
			data: _this.data,
			success: function(res){
				if (res.success) {
					if(res.timestamp != undefined&&res.timestamp!=""){
						_this.lasttime = res.timestamp;
						_this.callback(res);
					}
				};
			}
		});
	}
	function Barrage(config){
		var _this = this;
		this.options = $.extend({
			param: {'oid': ''},
			pageUrl: 'fulishe',
			container: '.j_barrage_container',
			containerTemplate: containerTemplate,
			template: listTemplate,
			domClass: '.j_barrage_list',
			itemMargin: 16
		}, config || {});
		this.pullTime = 60*1000;
		this.showList = [];
		this.opened = true;
		this.curShowCount = 0;
		this.manager = new BarrageManager(this.options.param, function(res){_this.parse(res)});
		this.init();
	}
	Barrage.prototype = {
		init: function(){
			$('body').append(this.options.containerTemplate);
			this.run(true);
		},
		run: function(isFirst){
			var _this = this;
			if (this.showList.length) {
				_this.show();
			}else{
				_this.load(isFirst);
			}
		},
		load: function(isFirst){
			var _this = this;
			if (isFirst) {
				_this.manager.getData();
				return;
			};
			clearTimeout(this.pullTimer);
			this.pullTimer = setTimeout(function(){
				_this.manager.getData();
			}, _this.pullTime);
		},
		parse: function(res){
			var list = this.filter(res);
			this.showList = this.showList.concat(list);
			this.run();
		},
		filter: function(res){
			var list = [], maxNum;
			if (this.options.pageUrl == 'fulishe') {//外面逻辑
				if (res.data.user_orders >= 2) {
					maxNum = 2;
				}else{
					maxNum = 5;
				}
				if (!this.showPurchase) {
					this.showPurchase = 0;
					if (this.showPurchase < maxNum) {
						var data = fileterObj.purchase.premise(res.data.purchase, maxNum-this.showPurchase , this.options.pageUrl);
						if (data.length) {
							this.showPurchase += data.length;
						};
						list = list.concat(data);
					};
				};
			}else if (this.options.pageUrl == 'goods') {
				if (res.data.user_orders >= 2) {
					if (!this.showOther) {
						if (res.data.urgent.length || res.data.limit.length || res.data.hot.length) {
							var data = fileterObj.other.premise(res.data);
							if (data.length) {
								this.showOther = true;
							};
							list = list.concat(data);
						}
					};
					if (!this.showView) {
						var data = fileterObj.view.premise(res.data, 200, 20, this.options.pageUrl);
						if (data.length) {
							this.showView = true;
						};
						list = list.concat(data);
					};
				}else{
					if (!this.showPurchase) {
						this.showPurchase = 0;
						if (this.showPurchase < 2) {
							var data = fileterObj.purchase.premise(res.data.purchase, 2-this.showPurchase , this.options.pageUrl);
							if (data.length) {
								this.showPurchase += data.length;
							};
							list = list.concat(data);
						};
					};
					if (!this.showView) {
						var data = fileterObj.view.premise(res.data, 200, 20, this.options.pageUrl);
						if (data.length) {
							this.showView = true;
						};
						list = list.concat(data);
					};
					
				}
			};
			return list;
		},
		show: function(){
			var _this = this;
			if (this.opened && this.showing) {
				return;
			};
			this.showing = true;
			this.curShowCount++;//用于以后扩展，可针对每条弹幕定义间隔时间和显示时间
			var curBarrage = this.showList.shift();
			curBarrage.gapTime = 4000;
			curBarrage.showTime = 4000;
			$(this.options.container).append(template.parse(this.options.template, {datas:curBarrage, handle:misc.getImageUrl}));
			var $ele = $(this.options.domClass), h=$ele.height(), contH = $(this.options.container).height();
			$ele.css({'top': contH, 'visibility':'visible'});
			setTimeout(function(){
				$ele.animate({"-webkit-transform":"translateY("+(0-_this.options.itemMargin-h)+"px)"}, 600, 'ease-out', function(){
					setTimeout(function(){
						$ele.animate({"-webkit-transform":"translateY("+(0-_this.options.itemMargin-h)*2+"px)"}, 600, 'ease-out', function(){
							$ele.remove();
							_this.showing = false;
							_this.run();
						});
					}, curBarrage.showTime);
				});
			}, curBarrage.gapTime);
		},
		pause: function(){
			this.opened = false;
		},
		start: function(){
			this.opened = true;
			this.run();
		}
	};
	module.exports = Barrage;
});



define("ui/widget/scrollpageload",function(require, exports, module){
	var $ 		= require('lib/zepto'),
		ajax 	= require('util/ajax'),
		undefined;
	
	var config = {
		autoLoadCount : 5
	};
	function ScrollLoader(_options){
		var options = $.extend({
			heightOffset : 120,
			callback : function(){}
		}, _options);
		
		var target = window;
		
		function check(){
			if($(target).scrollTop() + options.heightOffset >= $(document).height() - $(target).height()){
				unbind();
				options.callback();
				return true;
			}
			return;
		}
		
		function handle(evt){
			if( ! check()){
				evt.stopPropagation();
			}
		}
		
		function bind(){
			unbind();
			$(target).bind('scroll', handle);
		}
		
		function unbind(){
			$(target).unbind('scroll', handle);
		}
		
		this.start = function(){
			bind();
			check();
		}
		
		this.stop = function(){
			unbind();
		};
		
		bind();
		check();
	}
	function Indicator(el, _options){
		var el = $(el);
		var callback;
		
		var options = $.extend({
			txtLoading : '正在加载，请稍后...',
			txtEnd : '没有更多了',
			txtMore : '点击加载更多',
			hideDelay : 2000
		}, _options);
		
		function showContainer(){
			el.parent().show();
		}
		
		this.showLoading = function(){
			showContainer();
			el.html(options.txtLoading);
		};
		
		this.showEnd = function(){
			showContainer();
			el.html(options.txtEnd);
			el.off('click');
			setTimeout(function(){
				el.parent().hide();
			}, options.hideDelay)
		};
		
		this.showMore = function(){
			showContainer();
			el.html(options.txtMore);
		};
		
		this.hide = function(){
			el.parent().hide();
			el.hide();
		};
		
		this.click = function(fn){
			callback = fn;
		};
		
		el.click(function(){
			callback && callback();
		});
	}
	function PageScrollLoader(_options){
		var options = $.extend({
			url : '{p}.htm',
			totalPage : 0,
			startPage : 1,
			container : '',
			loading : '',
			alwaysLoad : false,
			autoLoadCount : config.autoLoadCount
		}, _options);
		
		var scroller, indicator, isLoading, isEnd,
			currentPage = options.startPage,
			totalPage = options.totalPage,
			loadCount = 0;
		
		function callback(res){
			$(options.container).append(res);
			if(typeof options.afterContentChange == 'function'){
				options.afterContentChange();
			}
			currentPage++;
			loadCount++;
			if(currentPage < totalPage){
				indicator.showMore();
				if(options.alwaysLoad){
					scroller.start();
				}
				else if(loadCount < options.autoLoadCount){
					scroller.start();
				}
				else{
					loadCount = 0;
				}
			}
			else{
				indicator.showEnd();
			}
		}
		
		function request(){
			isLoading = true;
			indicator.showLoading();
			ajax.get({
				url : options.url.replace('{p}', currentPage),
				success : function(res){
					callback(res);
					isLoading = false;
				},
				error : function(){
					isEnd = true;
					isLoading = false;
					indicator.showEnd();
				}
			});
		}
		
		indicator = new Indicator($(options.loading), options.indicator);
		indicator.click(function(){
			if(currentPage >= totalPage || isLoading || isEnd){
				return;
			}
			request();
		});
		
		scroller = new ScrollLoader({
			heightOffset : options.heightOffset,
			callback : function(){
				if(currentPage >= totalPage || isLoading || isEnd){
					return;
				}
				request();
			}
		});
		if(options.totalPage <= options.startPage){
			isEnd = true;
			indicator.hide();
		}
	}
	
	exports.ScrollLoader 		= ScrollLoader;
	exports.PageScrollLoader 	= PageScrollLoader;
	exports.Indicator 			= Indicator;
	
});


define("ui/widget/address/addressv2",function(require, exports, module){
	var $ = require('lib/zepto'),
		Cgi = require('module/cgi'),
		Ajax = require('util/ajax'),
		undefined

	var filterArr = ['台湾省', '海外', '澳门特别行政区', '香港特别行政区']
	function Address(options){
		this.province = options.province
		this.city = options.city
		this.area = options.area
		this.address = options.address
		this.provinceInitValue = (options.provinceInitValue==undefined ? -1 : options.provinceInitValue)
		this.cityInitValue = (options.cityInitValue==undefined ? -1 : options.cityInitValue)
		this.areaInitValue = (options.areaInitValue==undefined ? -1 : options.areaInitValue)
		this.provinceTextArea = options.provinceTextArea
		this.cityTextArea = options.cityTextArea
		this.areaTextArea = options.areaTextArea
		this.init()
	}
	Address.prototype = {
		init: function(){
			this.initDefaultOption()
			this.initEvent()
			this.getProvince()
		},
		initDefaultOption: function(){
			$(this.province).html('<option value="-1">请选择</option>')
			$(this.city).html('<option value="-1">请选择</option>')
			$(this.area).html('<option value="-1">请选择</option>')
			$(this.provinceTextArea).text('请选择')
			$(this.cityTextArea).text('请选择')
			$(this.areaTextArea).text('请选择')
		},
		initEvent: function(){
			var _this = this
			$(this.province).change(function(){
				var val = $(_this.province).val()
				$(_this.city).html('<option value="-1">请选择</option>')
				$(_this.area).html('<option value="-1">请选择</option>')
				$(_this.cityTextArea).text('请选择')
				$(_this.areaTextArea).text('请选择')
				$(_this.province).find('option').each(function(index, item){
					if ($(item).attr('value') == val) {
						$(_this.provinceTextArea).text($(item).text())
					}
				})
				_this.getCity()
			})
			$(this.city).change(function(){
				var val = $(_this.city).val()
				$(_this.city).find('option').each(function(index, item){
					if ($(item).attr('value') == val) {
						$(_this.cityTextArea).text($(item).text())
					}
				})
				$(_this.area).html('<option value="-1">请选择</option>')
				$(_this.areaTextArea).text('请选择')
				_this.getArea()
			})
			$(this.area).change(function(){
				var val = $(_this.area).val()
				$(_this.area).find('option').each(function(index, item){
					if ($(item).attr('value') == val) {
						$(_this.areaTextArea).text($(item).text())
					}
				})
			})
		},
		getProvince: function(){
			var _this = this
			this.getData(function(data){
				_this.initOption('province', data)
			})
		},
		getCity: function(){
			var _this = this
			var provinceCode = $(this.province).val()
			this.getData(function(data){
				_this.initOption('city', data)
			}, provinceCode)
		},
		getArea: function(){
			var _this = this
			var cityCode = $(this.city).val()
			this.getData(function(data){
				_this.initOption('area', data)
			}, cityCode)
		},
		initOption: function(type, data){
			var optionHtml = ['<option value="-1">请选择</option>']
			if (type == 'province') {
				for (var i = 0, l=data.length; i < l; i++) {
					if (filterArr.indexOf(data[i].name) == -1) {
						optionHtml.push('<option value="'+data[i].code+'">'+data[i].name+'</option>')
					}
				}
				$(this.province).html(optionHtml.join(''))
				if (this.provinceInitValue != -1) {
					$(this.province).val(this.provinceInitValue)
					$(this.province).trigger('change')
				}
			}else if (type == 'city') {
				for (var i = 0, l=data.length; i < l; i++) {
					optionHtml.push('<option value="'+data[i].code+'">'+data[i].name+'</option>')
				}
				$(this.city).html(optionHtml.join(''))
				if (this.cityInitValue != -1) {
					$(this.city).val(this.cityInitValue)
					$(this.city).trigger('change')
				}
			}else if (type == 'area') {
				for (var i = 0, l=data.length; i < l; i++) {
					optionHtml.push('<option value="'+data[i].code+'">'+data[i].name+'</option>')
				}
				$(this.area).html(optionHtml.join(''))
				if (this.areaInitValue != -1) {
					$(this.area).val(this.areaInitValue)
					$(this.area).trigger('change')
				}
			}
		},
		getData: function(callback, upper){
			var cgiUrl = '', _this = this
			if (upper) {
				cgiUrl = Cgi.get('getZoneData', {'upper':upper})
			}else{
				cgiUrl = Cgi.get('getZoneData')
			}
			Ajax.get({
				url: cgiUrl,
				success: function(res){
					if (res.success) {
						callback(res.data)
					}
				}
			})
		}
	}
	module.exports = Address
});




define("ui/page/comment/page",function(require, exports, module){
	var $ = require('lib/zepto'),
		User = require('module/user'),
		Comment = require('module/comment'),
		template = require('ui/template'),
		misc = require('util/misc'),
		Bridge = require('util/bridge'),
		Dialog = require('ui/widget/dialog'),
		undefined;

	var id, silent;//silent 静默模式，开启时只会弹出下载框，其他功能全部被屏蔽掉
	var list_temp = '<div class="list">\
						<div class="avatar">\
							<a href="javascript:void" class="j_comment_user" d-uid="<%=datas.comment.user.id%>">\
								<img src="<%=datas.comment.user.image%>" />\
								<img class="comment-user-head-mask" src="<%=getImageUrl("/static/img/v2/common/mask.png")%>" />\
							</a>\
						</div>\
						<div class="content j_content">\
							<div class="cont-title">\
								<span class="nick"><%=escapeHTML(datas.comment.user.nickname)%></span><span class="date"><%=datas.comment.time%></span>\
							</div>\
							<div class="cont-text">\
								<% if(datas.comment.target_comment){%>\
									回复<%=escapeHTML(datas.comment.target_comment.user.nickname)%>：\
								<% } %>\
								<%=escapeHTML(datas.comment.content)%>\
							</div>\
							<div class="replay">\
								<a class="j_reply" d-cid="<%=datas.comment.id%>">回复</a>\
								<% if(datas.is_admin){%>\
									<a style="margin-right:5px;width:100px;text-align:right;" class="j_delete" d-cid="<%=datas.comment.id%>">删除</a>\
								<% } %>\
							</div>\
						</div>\
						<div class="clear"></div>\
					</div>';
	module.exports = function(oid, s){
		id = oid;
		if (s == undefined) {
			s = true;
		};
		silent = s;
		initTextArea();
		initUserInfo();
		initEvent();
	}

	function initTextArea(){
















		if (silent) {
			setTimeout(function(){
				if (!Bridge.isApp()) {
					$('.j_reply').hide();
				}else{
					$('.j_reply').show();
				}
			}, 1000);
		};
		$('.j_active active').append('<div class="j_comment_cover" style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;opacity: 0;"></div>');
	}

	function initUserInfo(){
		var user_img = $.trim($('#j_user_img_src').text());
		if (user_img) {
			$('.j_user_img').attr('src', misc.getImageUrl(user_img));
			return;
		};
		User.getInfo(function(info){
			$('.j_user_img').attr('src', info.imageb);
		});
	}
	function gotoComment(){
		if (silent) {
			if (!Bridge.isApp()) {
				require.async('ui/page/site', function(site){
					site.download(window.__curTalkingData[window.__phoneType].other);
				});
				return;
			};
		};
		var target_id = $('.j_comment_text').attr('d-tid'), url = '/mobile/comment?oid='+id;
		target_id ? (url = url+'&target_id='+target_id) : '';
		url += '&origin='+encodeURIComponent(window.location.href);
		window.location.href = url;
	}
	function initEvent(){

		$('.j_comment_cover').on('click', function(){
			gotoComment();
		});
		$('.j_comment_text').focus(gotoComment);
		$('.j_comment_text').on('click', function(){
			gotoComment();
		});
		$('.j_submit').on('click', function(){
			gotoComment();
		});
		var _timer;
		setTimeout(function(){
			if ((Bridge.isApp() && window.__showSubmitComment)) {
				$(window).on('scroll', function(){
					clearTimeout(_timer);
					var func = arguments.callee;
					_timer = setTimeout(function(){
						var wTop = $(window).height() + $(window).scrollTop(), dTop = $('.j_comment_container').offset().top;
						if (wTop>dTop) {
							$('.j_main').css('padding-bottom', '50px');
							$('.j_active').css({'position':'fixed', 'left':0, 'bottom':0}).show();
						}else{
							$('.j_main').css('padding-bottom', '0px');
							$('.j_active').hide();
						}
					}, 200); 
				});
			};
		}, 1000);
	}

	function resize(){
		var $origin = $('.j_comment_text'), $target = $('.j_comment_text_clone');
		var text = $origin.val();
		$target.val(text);
		var scrollHeight = $target[0].scrollHeight;
		$origin.height(scrollHeight);
		$origin.parent().height(scrollHeight);
	}

	function submit(){
		var content = $('.j_comment_text').val(),
			target_id = $('.j_comment_text').attr('d-tid');
		if (content == '') {
			Dialog.alert({title:'提示',content:'评论内容不能为空',close:'好的'});
			$('.j_submit a').removeAttr('disabled');
			return;
		};
		var params = {};
		params["content"] = content;
		params.oid = id;
		var sid = User.getSid();
		if (sid.indexOf('session.') == -1) {
			sid = 'session.'+sid;
		};
		params.sid = sid;
		target_id ? (params.target_id = target_id) : '';
		Comment.add(params, function(status, res){
			$('.j_submit a').removeAttr('disabled');
			if (status == 0) {
				$('.j_comment_text').val('');
				$('.j_comment_text').removeAttr('d-tid');
				$('.j_comment_text').attr('placeholder', '添加一个评论...');
				var num = parseInt($('.j_comment_num').text(), 10);
				$('.j_comment_num').text(num+1);
				res.is_admin = window.is_admin || false;//是否管理员
				$('.j_comment_list_container').append(template.parse(list_temp, {datas: res, getImageUrl: misc.getImageUrl, escapeHTML:misc.escapeHTML}));
				if (silent) {
					if (!Bridge.isApp()) {

						$('.j_reply').hide();
					}else{

						$('.j_reply').show();
					}	
				};
			}else{
				Dialog.alert({title:'提示',content:'发表失败，请稍后再试',close:'好的'})
			}
		});
	}
});




define("ui/page/site",function(require, exports, module){
	var $ = require('lib/zepto'),
		md5 = require('lib/md5'),
		browser = require('util/browser'),
		Bridge = require('util/bridge'),
		misc = require('util/misc'),
		cookie = require('util/cookie'),
		User = require('module/user'),
		Report = require('module/report'),
		Cgi = require('module/cgi'),
		Dialog = require('ui/widget/dialog'),
		undefined;
	module.exports = {
		init : function(params){
			params = params || {};
			if (browser.ios()) {
				try{
					Bridge.getApp().register()
				}catch(e){}
			}
			initLoginStatus();
			initDownload(params);
			initCommonNav()
			initGlobal();
			reportUV()
		},
		download : function(url){
			if (this.dialog) {
				this.dialog.show()
				return;
			}
			var dom = $('#click_common_download_template').html();
			dom = '<div id="<%=id%>" style="position:absolute;z-index:101;">' + dom + '</div>'
			this.dialog = new Dialog({
				'template':dom,
				'onCreate':function(){
					$('.j_click_common_download_btn').on('click', function(){
						misc.jumpToDownload(url)
					})
				},
				'onShow': function(){
					var _this = this
					$('#j_close_download').on('click', function(){
						_this.hide()
					})
				},
				'onTouch':function(evt){
					evt && evt.stopPropagation && evt.stopPropagation()
					evt && evt.preventDefault && evt.preventDefault()
					this.hide()
				}
			})
			this.dialog.show()
		}
	}
	function reportUV(){
		var uuid = cookie('uuid');
        var tLogUrl = "http://t.xiaohongshu.com/api/collect";
        Report.reportToClick(tLogUrl, {'type':'c_pv', 'oid':uuid});
		Report.reportToClick(Cgi.get('reportToClick'), {'type':'pageuv', 'oid':uuid, 'url':window.location.href})
		if(typeof __useSnowPlow != "undefined"){
			var channelFromCookie = cookie('xhs_channel'),channelFromUrl = misc.getParam("xhschannel"),nowPlatform = "mob";
			if(channelFromCookie != null && channelFromCookie != undefined){
				nowPlatform += "_" + channelFromCookie;
			}
			else{
				if(channelFromUrl != "" && channelFromUrl != undefined && channelFromUrl != "undefined"){
					var date = new Date(); 
					var expiresMins = 30;
					date.setTime(date.getTime() + expiresMins * 60 * 1000);
					document.cookie = "xhs_channel="+ channelFromUrl +"; path=/; expires=" + date.toGMTString(); 
					nowPlatform += "_" + channelFromUrl;
				}
			}
			window.snowplow("newTracker","wapT","t.xiaohongshu.com/api/collect",{appId:"xhs-wap",platform:nowPlatform,cookieDomain:"www.xiaohongshu.com",cookieName:"uuid",encodeBase64:true,respectDoNotTrack:false,userFingerprint:true,userFingerprintSeed:6385926734,pageUnloadTimer:0,forceSecureTracker:false,useLocalStorage:false,useCookies:true,writeCookies:true,post:true,bufferSize:1,maxPostBytes:450000,crossDomainLinker:function(a){return true},contexts:{performanceTiming:true,gaCookies:true,geolocation:false}});
        	window.snowplow('setUserIdFromCookie', 'uuid');
        	window.snowplow('trackPageView:wapT', {
            	schema: 'dd:com.xhs/page/json/1-0-0',
            	data: {}
        	});
		}
	}

	function initLoginStatus(){
		var status = $.trim($('#j_login_status').text());
		if(status == '1'){
			User.setLogined();
		}
	}
	function initFixed(){
		var __scrollTimer
		$(window).on('scroll touchmove', function(){
			var func = arguments.callee
			clearTimeout(__scrollTimer)
			__scrollTimer = setTimeout(function(){
				var st = $(window).scrollTop()
				if (st > 100) {
					$('.j_common_download_fixed').show()
					clearTimeout(__scrollTimer)
					$(window).off('scroll touchmove', func)
				}
			}, 1000)
		})
	}

	function initDownload(params){
		var forceShow = params.forceShow, pvUrl = params.pvUrl, downloadUrl = params.downloadUrl
		var phoneType = browser.ios() ? 'ios' : 'android'
		if (forceShow !== false && !Bridge.isApp()) {
			$('.j_c_d_header').show()
			pvUrl = pvUrl || 'http://um0.cn/8dIe9x/';
			$('.j_common_download').on('click', function(){
				if (downloadUrl) {
					window.location.href = downloadUrl
				}else{
					misc.jumpToDownload(pvUrl);
				}
			})
			$('.j_common_download_fixed').on('click', function(){
				if (downloadUrl) {
					window.location.href = downloadUrl
				}else{
					misc.jumpToDownload(window.__curTalkingData && window.__curTalkingData[phoneType].fixed);
				}
			})
			$('.j_common_download_close').on('click', function(evt){
				$(this).parents('.j_common_download_fixed').hide()
				evt && evt.stopPropagation && evt.stopPropagation()
			})
			initFixed()
		}
	}
	function initCommonNav(){
		if (Bridge.isApp()) {
			$('.j_nav').hide()
		}
	}

	function initGlobal(){
		function handleClick(){
			$('[d-url]').each(function(index, item){
				if (item.clickbinded) {
					return;
				};
				item.clickbinded = true;
				var $ele = $(item);
				$ele.on('click', function(evt){
					evt = evt || window.event;
					evt.preventDefault && evt.preventDefault();
					evt.stopPropagation && evt.stopPropagation();
					evt.cancelBubble = true;
					evt.returnValue = false;
					var url = $ele.attr('d-url');
					if (url) {
						window.location.href = url;
					};
				});
			});
			$('a').each(function(index, item){
				if (item.clickbinded) {
					return;
				};
				item.clickbinded = true;
				var $ele = $(item), href = $ele.attr('href');
				if (!href || (href.indexOf('javascript') != -1)) {
					return;
				};
				$ele.on(misc.getEventType().tap, function(evt){
					evt = evt || window.event;
					evt.preventDefault && evt.preventDefault();
					evt.stopPropagation && evt.stopPropagation();
					evt.cancelBubble = true;
					evt.returnValue = false;
					var url = $ele.attr('href');
					window.location.href = url;
				});
			});
			setTimeout(handleClick, 500);
		}
		handleClick();	
	}
});


define("util/ajax",function(require, exports, module){
    var $ 			= require('lib/zepto'),
		undefined;
	$.parseJSON = function(result){
		return window.eval("(" + result + ")");
	};
    var Ajax = {
		isSupportCors : function(options){
			var xhr = new window.XMLHttpRequest();
			if ("withCredentials" in xhr) {
				return true;
			}
			return false;
		},
		sendByCors : function(options){
			options = options || {};
			if (typeof options.withCredentials == "undefined") {
				options.withCredentials = true;
			}
			if (options.withCredentials) {
				options = $.extend(options, {
					xhrFields: {
						withCredentials: true
					}
				});
				delete options.withCredentials;
			}
			this.sendRequest(options);

		},
		sendRequest : function(options){
			if (!options.data || !options.data.sid) {
				require.async('module/user', function(User){
					options.data = options.data || {};
					var sid = User.getSid();
					if (sid) {
						if (sid.indexOf('session.') > -1) {
							options.data.sid = sid;
						}else{
							options.data.sid = 'session.'+sid;
						}
					};
					$.ajax(options);
				});
			}else{
				$.ajax(options);
			}
		},
		isDebug : function(options){
			if (window.location.href.indexOf('debug') > -1) {
				var url = options.url;
				if (url.indexOf('http://') == 0) {
					url = url.replace('xiaohongshu.com', 'b.xiaohongshu.com');
					url = url.replace('www.xiaohongshu.com', 'b.xiaohongshu.com');
					url = url.replace('localhost:8004', 'b.xiaohongshu.com');
				}else{
					if (url.charAt(0) == '/') {
						url = 'http://b.xiaohongshu.com' + url;
					}else{
						url = 'http://b.xiaohongshu.com/' + url;
					}
				}
				options.url = url;
			};
			return options;
		},
        post : function(options){
        	options.type = 'POST';
        	options = this.isDebug(options);
        	options.contentType = options.contentType || "application/x-www-form-urlencoded; charset=utf-8";
			if (options.fail && !options.error) {
				options.error = options.fail;
			}
			if (this.isSupportCors(options)) {

				this.sendRequest(options);
			} else {

				this.sendRequest(options);
			}
        },
        get : function(options){
        	options.type = 'GET';
        	options = this.isDebug(options);
        	options.contentType = options.contentType || "application/x-www-form-urlencoded; charset=utf-8";
			options.data = options.data || {};
			if (options.fail && !options.error) {
				options.error = options.fail;
			}
            if (this.isSupportCors(options)) {

				this.sendRequest(options);
			} else {

				this.sendRequest(options);
			}
        }
    };
    return Ajax;
});



define("util/browser",function(require, exports, module){
	var Browser = {
		_ua : navigator.userAgent,
		isWeiXin : function(){
			var ua = this._ua.toLowerCase();
		    if(ua.match(/MicroMessenger/i)=="micromessenger") {
		    	return true;
		    } else {
		    	return false;
		    }
		},
		android : function(){
			var regular_result = this._ua.match(/(Android)\s+([\d.]+)/),
				os_boolean = !!regular_result;
			if(!this._version_value && os_boolean){
				this._version_value = regular_result[2];
			}
			this.android = function(){return os_boolean;};
			return os_boolean;
		},
		ios : function(){
			var regular_result = this._ua.match(/.*OS\s([\d_]+)/),
				os_boolean = !!regular_result;
			if(!this._version_value && os_boolean){
				this._version_value = regular_result[1].replace(/_/g, '.');
			}
			this.ios = function(){return os_boolean;};
			return os_boolean;
		}
	}
	module.exports = Browser;
});




define("util/bridge",function(require, exports, module){
	var Bridge = {};
	module.exports = Bridge;
	var ua = navigator.userAgent, ios = false;
	ios = !!ua.match(/.*OS\s([\d_]+)/);
	Bridge.isApp = function(){
		if (ios) {
			if (window.isSupportApi) {
				return window.isSupportApi();
			}else{
				return false;
			}
		}else{//Android
			if (window.xydiscover && window.xydiscover.isSupportApi) {
				return window.xydiscover.isSupportApi();
			}else{
				return false;
			}
		}
	}
	Bridge.getAppVersion = function(){
		if (ios) {
			if (window.getAppVersion) {
				return window.getAppVersion();
			}else{
				return '1.0';
			}
		}else{//Android
			if (window.xydiscover && window.xydiscover.getAppVersion) {
				return window.xydiscover.getAppVersion();
			}else{
				return '1.0';
			}
		}
	}
	function iphoneCall(url){
		var iframe = document.createElement("IFRAME");
		iframe.setAttribute("src", url);
		iframe.setAttribute("style", "display:none;");
		iframe.setAttribute("height", "0px");
		iframe.setAttribute("width", "0px");
		iframe.setAttribute("frameborder", "0");
		document.documentElement.appendChild(iframe);
		iframe.parentNode.removeChild(iframe);
		iframe = null;
	}
	function call_ios_Function(cmd,param1,param2,param3,param4,param5,param6,param7,param8,param9){
	  	var url="callfunction::"+cmd+"::"+param1+"::"+param2+"::"+param3+"::"+param4+"::"+param5+"::"+param6+"::"+param7+"::"+param8+"::"+param9;
	  	iphoneCall(url);
	}
	function xyiphoneJS(){
	  	this.getSession=function(functionName){call_ios_Function("getSession",functionName);};
	  	this.closeWindow=function(){call_ios_Function("closeWindow");};
	  	this.addOrder=function(result){call_ios_Function("addOrder",result);};
	  	this.wechatPayClient=function(result){call_ios_Function("wechatPayClient",result);};
	  	this.alipayClient=function(result){call_ios_Function("alipayClient",result);};
	  	this.alipayResult=function(result){call_ios_Function("alipayResult",result);};
	  	this.showalert = function(alertobject){
	  		alertobject.title = alertobject.title || '';
	  		alertobject.desc = alertobject.desc || '';
	  		alertobject.button1 = alertobject.button1 || '';
	  		alertobject.button2 = alertobject.button2 || '';
	  		alertobject.button3 = alertobject.button3 || '';
	  		alertobject.func1 = alertobject.func1 || '';
	  		alertobject.func2 = alertobject.func2 || '';
	  		alertobject.func3 = alertobject.func3 || '';
	  		call_ios_Function("showalert",alertobject.title,alertobject.desc,alertobject.button1,alertobject.func1,alertobject.button2,alertobject.func2,alertobject.button3,alertobject.func3);
	  	};
	  	this.shareContent=function(type,data){call_ios_Function("shareContent",type,data);};
	  	this.register=function(){call_ios_Function("init")};//for ios
	  	this.camera = function(){call_ios_Function("camera")};
	  	this.bindWeixin = function(){call_ios_Function("bindWeixin")};
	  	this.jsCallApp = function(cmd, params){call_ios_Function("jsCallApp", cmd, params)};
	}
	Bridge.getApp = function(){
		if (window.xydiscover) {//android is registered
			return window.xydiscover;
		}else{
			window.xydiscover = new xyiphoneJS();
			return window.xydiscover;
		}
	};
	var cmdFunc = {};
	Bridge.registerFunction = function(cmd, func){
		if (!cmdFunc[cmd]) {
			cmdFunc[cmd] = [];
		}
		cmdFunc[cmd].push(func);
	}
	window.jsCallApp = function(cmd, params){
		Bridge.getApp().jsCallApp(cmd, params);
	}
	window.appCallJs = function(cmd, params){
		cmd = cmd || ''
		params = params || '{"result":0}'
		var funcArr = cmdFunc[cmd];
		if (funcArr && funcArr.length) {
			for (var i = 0; i < funcArr.length; i++) {

				(function(func){//使用闭包加异步，因为app在调用js时候会一直等待js执行完成，所以需要尽快返回app执行环境避免app挂了
					setTimeout(function(){
						func(cmd, params)
					}, 0)
				})(funcArr[i])
			}
		}
	}
});



define("util/misc",function(require, exports, module){
	var misc = {
		escapeHTML: function(str){
			return str.replace(/</g,"&lt;")
						.replace(/>/g,"&gt;")
						.replace(/"/g,"&quot;")
						.replace(/'/g,"&#39;");
		},
		unescapeHTML: function(str){
             return str.replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&quot;/g, '"')
                        .replace(/&#39;/g, "'");
		},
		convertContent : function(str, style, type){
			var arr = [',', '.', '?', '!', '，', '。', '？', '！', '\n', '\r', '\r\n', '～', '~'], indexArr = [];
			for (var i = 0; i < arr.length; i++) {
				indexArr.push(str.indexOf(arr[i]));
			};
			indexArr.sort(function(a, b){
				return a - b;
			});
			var index;
			for (var i = 0; i < indexArr.length; i++) {
				if (indexArr[i] == -1) {
					continue;
				};
				index = indexArr[i];
				break;
			};
			var title = str.slice(0, index+1), cont = str.slice(index+1);
			cont = cont.replace(/\\n/g, '<br/>');
			cont = cont.replace(/\n/g, '<br/>');
			cont = cont.replace(/\r\n/g, '<br/>');
			cont = cont.replace(/\s/g, '&nbsp;');
			cont = cont.replace(/^(<br\/>)*/, '');//去掉开头的换行符
			style = style || 'font-size:13px;line-height:18px;color:#636363';
			type = type || 'html';
			if (type == 'json') {
				return {
					title : title,
					cont : cont
				}
			}
			return '<p style='+style+'><span style="color:#f15467;">'+title+'</span>'+cont+'</p>';
		},
		unescapeHTML: function(str){
             return str.replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&quot;/g, '"')
                        .replace(/&#39;/g, "'");
		},
		getParam: function(key, type){
			var type = type || 'search', str, arr;
			switch(type){
				case 'hash':
					str = location.hash.replace(/^#/, '');
				break;
				case 'search':
					str = location.search.replace(/^\?/, '');
				break;
			}
			if(str == ''){
				return null;
			}
			arr = str.split('&');
			for(var i = 0, l = arr.length, tmp; i < l; i ++){
				tmp = arr[i].split('=');
				if(tmp[0] == key){
					return tmp[1];
				}
			}
		},
		getId : function(){
			if(this.id){
				return this.id;
			}
			var url = location.href, preg = /\/([0-9a-zA-Z]+)($|\?|#)/;
			var matches = url.match(preg);
			if(matches && matches.length){
				this.id = matches[1];
				return matches[1];
			}
			return '';
		},
        toUnicode:function(str){
      	  return escape(str).toLocaleLowerCase().replace(/%u/gi,'\\u');
      	},
      	toGB2312:function(str){
      	   return unescape(str.replace(/\\u/gi,'%u'));
      	},
      	geteventType : function(){
      		var tools = {};
      		tools.hasTouch 		= 'ontouchstart' in window;
			tools.touchStart 	= tools.hasTouch ? 'touchstart' : 'mousedown';
			tools.touchMove 	= tools.hasTouch ? 'touchmove' : 'mousemove';
			tools.touchEnd 	    = tools.hasTouch ? 'touchend' : 'mouseup';
			tools.tap			= tools.hasTouch ? 'tap' : 'click';
			return tools;
      	},
      	getEventType : function(){
      		return this.geteventType();
      	},
      	jumpToDownload : function(pvUrl){
   			pvUrl = pvUrl || '';
      		require.async('util/browser', function(browser){
      			var url;
      			url = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.xingin.xhs&g_f=996683';
      			if (browser.isWeiXin()) {
	      			url = 'http://mp.weixin.qq.com/mp/redirect?url=' + encodeURIComponent(url);
	    		}
	    		if (pvUrl) {
	    			 var img = new Image();
	        		img.src = pvUrl;
	    		};
	        	setTimeout(function(){
	        		window.location.href = url;
	        	}, 500);
      		});
      	},
      	justDownload : function(){
      		require.async('util/browser', function(browser){
      			var url = ''
      			if (browser.ios()) {
      				url = '/redirect/app_hk'
      			}else{
      				url = 'http://o3.xiaohongshu.com/d/xhs_v2.6.0.apk'
      			}
      			window.location.href = url
      		});
      	},

      	formatTime : function(time, type){
      		var mGap=60, hGap = 60*60, dGap = 24*3600, wGap = 7*24*3600;
      		var str = '还剩';
      		type = type || 1;
      		if (type == 1) {//还剩下多少时间
      			time = Math.ceil(time/1000);
      			do{
	      			if (time >= dGap) {
	      				str += (parseInt(time/dGap, 10)+'天');
	      				time = time%dGap;
	      			}else if (time >= hGap) {
	      				str += (parseInt(time/hGap, 10)+'时');
	      				time = time%hGap;
	      			}else if (time >= mGap) {
	      				str += (parseInt(time/mGap, 10)+'分');
	      				time = time%mGap;
	      				if (time == 0) {
	      					str += '0秒';
	      					break;
	      				};
	      			}else{
	      				str += (parseInt(time, 10)+'秒');
	      				break;
	      			}
	      			if (time == 0) {
	      				break;
	      			};
	      		}while(true);
      		}else if (type == 2) {//发布多长时间
      			time = Math.ceil(time/1000);
      			if (time < mGap) {
      				str = time + '秒前';
      			}else if (time < hGap) {
      				str = parseInt(time/mGap, 10) + '分钟前';
      			}else if (time < dGap) {
      				str = parseInt(time/hGap, 10) + '小时前';
      			}else if (time < wGap) {
      				str = parseInt(time/dGap, 10) + '天前';
      			}else{
      				str = parseInt(time/wGap, 10) + '周前';
      			}
      		}else if (type == 3) {//购物车，没有小时，只有分钟和秒数
      			str = '';
      			time = Math.ceil(time/1000);
				do{
		  			if (time >= mGap) {
		  				t = parseInt(time/mGap, 10);
		  				if (t<10) {
		  					t = '0'+t;
		  				};
		  				str += (t+':');
		  				time = time%mGap;
		  				if (time == 0) {
		  					str += '00';
		  					break;
		  				};
		  			}else{
		  				t = parseInt(time, 10);
		  				if (t<10) {
		  					t = '0'+t;
		  				};
		  				str += t;
		  				break;
		  			}
		  		}while(true);
		  		var arr = str.split(':');
		  		if (arr.length == 1) {
		  			arr.unshift('00');
		  		}
		  		str = arr.join(':');
      		}else{//烦死了，返回json，自己拼吧
      			var result = {};
      			str = '';
      			time = Math.ceil(time/1000);
				do{
					if (time >= hGap) {
						t = parseInt(time/hGap, 10);
						if (t<10) {
		  					t = '0'+t;
		  				};
		  				result.hour = t;
		  				time = time%hGap;
		  				if (time == 0) {
		  					result.minute = '00';
		  					result.second = '00';
		  					break;
		  				};
					}else if (time >= mGap) {
		  				t = parseInt(time/mGap, 10);
		  				if (t<10) {
		  					t = '0'+t;
		  				};
		  				result.minute = t;
		  				time = time%mGap;
		  				if (time == 0) {
		  					result.second = '00';
		  					break;
		  				};
		  			}else{
		  				t = parseInt(time, 10);
		  				if (t<10) {
		  					t = '0'+t;
		  				};
		  				result.second = t;
		  				break;
		  			}
		  		}while(true);
		  		!result.hour ? (result.hour = '00') : '';
		  		!result.minute ? (result.minute = '00') : '';
		  		!result.second ? (result.second = '00') : '';
		  		return result;
      		}
      		return str;
      	},

      	getImageUrl : function(url){
      		var href = location.href;
      		if (href.indexOf('b.xiaohongshu.com') > -1 || href.indexOf('localhost') > -1) {
      			return url;
      		};
  			url.replace('www.xiaohongshu.com', 's3.xiaohongshu.com');
  			if (url.indexOf('http://') == -1) {
  				url = 'http://s3.xiaohongshu.com' + url;
  			};
      		return url;
      	},

      	isInteger : function(num){
			var patrn=/^[0-9]*[1-9][0-9]*$/;
			if (!patrn.exec(num)){
				return false;
			}
			return true;
		},

		formatDateTime : function(date,fmt){
			var o = {
        		"M+": date.getMonth() + 1, //月份 
        		"d+": date.getDate(), //日 
        		"h+": date.getHours(), //小时 
        		"m+": date.getMinutes(), //分 
        		"s+": date.getSeconds(), //秒 
       			"q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        		"S": date.getMilliseconds() //毫秒 
    		};
    		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    		for (var k in o)
    			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    		return fmt;
		}
	}
	module.exports = misc;
	
});


define("util/cookie",function(require, exports, module){
	var $ = require('lib/zepto');
    module.exports = function (key, value, options) {
        var days, time, result, decode
        if (arguments.length > 1 && String(value) !== "[object Object]") {

            options = $.extend({}, options)

            if (value === null || value === undefined) options.expires = -1

            if (typeof options.expires === 'number') {
                days = (options.expires * 24 * 60 * 60 * 1000)
                time = options.expires = new Date()

                time.setTime(time.getTime() + days)
            }

            value = String(value)

            return (document.cookie = [
                encodeURIComponent(key), '=',
                options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '',
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''))
        }

        options = value || {}

        decode = options.raw ? function (s) { return s } : decodeURIComponent

        return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null
    };
});


define("util/storage",function(require, exports, module){
	var storage = module.exports = {};
	storage.get = function(key){
		var str = localStorage.getItem(key);
		var item;
		try{
			item= JSON.parse(str);
			if (item == null || (Object.prototype.toString.call(item) == "[object String]" && item.toLowerCase() == 'none')) {
				item = false;
			};
		}catch(e){
			item = false;
		}
		return item;
	};
	storage.set = function(key, val){
		var str;
		str = JSON.stringify(val);
		try{
			localStorage.setItem(key, str);
			return true;
		} catch(ex){
			return false;
		}
	};
	storage.remove = function(key){
		localStorage.removeItem(key);
	};
	if( ! window.localStorage){
		storage.get 	= function(){return false;};
		storage.set 	= function(){return false;};
		storage.remove 	= function(){return false;};
	}
});


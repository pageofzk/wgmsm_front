(function(){var h={},mt={},c={id:"b344979f0455853bf22b3ef05fa7b4ac",dm:["xiaohongshu.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'/hmt/icon/21|gif|20|20',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,comm:0,apps:''};var p=!0,q=null,r=!1;mt.j={};mt.j.Fa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.j.cookieEnabled=navigator.cookieEnabled;mt.j.javaEnabled=navigator.javaEnabled();mt.j.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.j.pa=(window.screen.width||0)+"x"+(window.screen.height||0);mt.j.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,d,e){var b;e.C&&(b=new Date,b.setTime(b.getTime()+e.C));document.cookie=a+"="+d+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(b?"; expires="+b.toGMTString():"")+(e.Ja?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:q};mt.p={};mt.p.Ba=function(a){return document.getElementById(a)};mt.p.Ca=function(a,d){for(d=d.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return q};
(mt.p.na=function(){function a(){if(!a.t){a.t=p;for(var d=0,e=b.length;d<e;d++)b[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(d,1);return}a()}var e=r,b=[],g;document.addEventListener?g=function(){document.removeEventListener("DOMContentLoaded",g,r);a()}:document.attachEvent&&(g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),a())});(function(){if(!e)if(e=p,"complete"===document.readyState)a.t=p;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
g,r),window.addEventListener("load",a,r);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);window.attachEvent("onload",a);var b=r;try{b=window.frameElement==q}catch(n){}document.documentElement.doScroll&&b&&d()}})();return function(d){a.t?d():b.push(d)}}()).t=r;mt.event={};mt.event.e=function(a,d,e){a.attachEvent?a.attachEvent("on"+d,function(b){e.call(a,b)}):a.addEventListener&&a.addEventListener(d,e,r)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=r};mt.l={};mt.l.parse=function(){return(new Function('return (" + source + ")'))()};
mt.l.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function d(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(b){switch(typeof b){case "undefined":return"undefined";case "number":return isFinite(b)?String(b):"null";case "string":return a(b);case "boolean":return String(b);
default:if(b===q)return"null";if(b instanceof Array){var e=["["],m=b.length,n,f,l;for(f=0;f<m;f++)switch(l=b[f],typeof l){case "undefined":case "function":case "unknown":break;default:n&&e.push(","),e.push(mt.l.stringify(l)),n=1}e.push("]");return e.join("")}if(b instanceof Date)return'"'+b.getFullYear()+"-"+d(b.getMonth()+1)+"-"+d(b.getDate())+"T"+d(b.getHours())+":"+d(b.getMinutes())+":"+d(b.getSeconds())+'"';n=["{"];f=mt.l.stringify;for(m in b)if(Object.prototype.hasOwnProperty.call(b,m))switch(l=
b[m],typeof l){case "undefined":case "unknown":case "function":break;default:e&&n.push(","),e=1,n.push(f(m)+":"+f(l))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.d=function(a,d){return"[object "+d+"]"==={}.toString.call(a)};mt.lang.Ga=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.Ia=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.A=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return r}return p};
mt.localStorage.set=function(a,d,e){var b=new Date;b.setTime(b.getTime()+e||31536E6);try{window.localStorage?(d=b.getTime()+"|"+d,window.localStorage.setItem(a,d)):mt.localStorage.A()&&(mt.localStorage.f.expires=b.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,d),mt.localStorage.f.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var d=a.indexOf("|"),e=a.substring(0,d)-0;if(e&&e>(new Date).getTime())return a.substring(d+1)}}else if(mt.localStorage.A())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(b){}return q};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.A())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(d){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,d){if(window.sessionStorage)try{window.sessionStorage.setItem(a,d)}catch(e){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):q};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.Q={};mt.Q.log=function(a,d){var e=new Image,b="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[b]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=q;e=window[b]=q;d&&d(a)};e.src=a};mt.z={};
mt.z.ea=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var d=navigator.plugins["Shockwave Flash"];d&&d.description&&(a=d.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=d.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.z.W=function(a,d,e,b,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+b+'"><param name="movie" value="'+d+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+b+'" src="'+d+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.i=function(a,d){var e=a.match(RegExp("(^|&|\\?|#)("+d+")=([^&#]*)(&|$|#)",""));return e?e[3]:q};mt.url.Ea=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:q};mt.url.ba=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):q};mt.url.K=function(a){return(a=mt.url.ba(a))?a.replace(/:\d+$/,""):a};mt.url.Da=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):q};
h.n={la:"http://tongji.baidu.com/hm-web/welcome/ico",P:"log.hm.baidu.com/hm.gif",T:"baidu.com",ha:"hmmd",ia:"hmpl",ga:"hmkw",fa:"hmci",ka:"hmsr",m:0,h:Math.round(+new Date/1E3),protocol:"https:"==document.location.protocol?"https:":"http:",Ha:0,xa:6E5,ya:10,za:1024,wa:1,O:2147483647,R:"cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")};
(function(){var a={k:{},e:function(a,e){this.k[a]=this.k[a]||[];this.k[a].push(e)},q:function(a,e){this.k[a]=this.k[a]||[];for(var b=this.k[a].length,g=0;g<b;g++)this.k[a][g](e)}};return h.r=a})();
(function(){function a(a,b){var g=document.createElement("script");g.charset="utf-8";d.d(b,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=q,b()}:g.onload=function(){b()});g.src=a;var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(g,m)}var d=mt.lang;return h.load=a})();
(function(){var a=h.n,d=mt.z,e={init:function(){if(""!==c.icon){var b;b=c.icon.split("|");var e=a.la+"?s="+c.id,m=("http:"==a.protocol?"http://eiv":"https://bs")+".baidu.com"+b[0]+"."+b[1];switch(b[1]){case "swf":b=d.W("HolmesIcon"+a.h,m,b[2],b[3],"s="+e);break;case "gif":b='<a href="'+e+'" target="_blank"><img border="0" src="'+m+'" width="'+b[2]+'" height="'+b[3]+'"></a>';break;default:b='<a href="'+e+'" target="_blank">'+b[0]+"</a>"}document.write(b)}}};h.r.e("pv-b",e.init);return e})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.B.ca()+","+h.B.aa();h.b.g()}}function d(){clearTimeout(x);var a;w&&(a="visible"==document[w]);y&&(a=!document[y]);f="undefined"==typeof a?p:a;if((!n||!l)&&f&&k)v=p,u=+new Date;else if(n&&l&&(!f||!k))v=r,s+=+new Date-u;n=f;l=k;x=setTimeout(d,100)}function e(a){var u=document,l="";if(a in u)l=a;else for(var s=["webkit","ms","moz","o"],b=0;b<s.length;b++){var d=s[b]+a.charAt(0).toUpperCase()+a.slice(1);if(d in u){l=
d;break}}return l}function b(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))k="focus"==a.type||"focusin"==a.type?p:r,d()}var g=mt.event,m=h.r,n=p,f=p,l=p,k=p,t=+new Date,u=t,s=0,v=p,w=e("visibilityState"),y=e("hidden"),x;d();(function(){var a=w.replace(/[vV]isibilityState/,"visibilitychange");g.e(document,a,d);g.e(window,"pageshow",d);g.e(window,"pagehide",d);"object"==typeof document.onfocusin?(g.e(document,"focusin",b),g.e(document,"focusout",b)):(g.e(window,"focus",b),
g.e(window,"blur",b))})();h.B={ca:function(){return+new Date-t},aa:function(){return v?+new Date-u+s:s}};m.e("pv-b",function(){g.e(window,"unload",a())});return h.B})();
(function(){var a=mt.lang,d=h.n,e=h.load,b={ma:function(b){if((void 0===window._dxt||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var m=h.b.D();e([d.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(m)].join(""),b)}},va:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.X=b})();
(function(){function a(l){for(var b in l)if({}.hasOwnProperty.call(l,b)){var d=l[b];e.d(d,"Object")||e.d(d,"Array")?a(d):l[b]=String(d)}}function d(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var e=mt.lang,b=mt.l,g=h.n,m=h.r,n=h.X,f={L:q,o:[],w:0,M:r,init:function(){f.c=0;f.L={push:function(){f.H.apply(f,arguments)}};m.e("pv-b",function(){f.Y();f.Z()});m.e("pv-d",f.$);m.e("stag-b",function(){h.b.a.api=f.c||f.w?f.c+"_"+f.w:""});m.e("stag-d",function(){h.b.a.api=
0;f.c=0;f.w=0})},Y:function(){var a=window._hmt;if(a&&a.length)for(var b=0;b<a.length;b++){var d=a[b];switch(d[0]){case "_setAccount":1<d.length&&/^[0-9a-z]{32}$/.test(d[1])&&(f.c|=1,window._bdhm_account=d[1]);break;case "_setAutoPageview":if(1<d.length&&(d=d[1],r===d||p===d))f.c|=2,window._bdhm_autoPageview=d}}},Z:function(){if("undefined"===typeof window._bdhm_account||window._bdhm_account===c.id){window._bdhm_account=c.id;var a=window._hmt;if(a&&a.length)for(var b=0,d=a.length;b<d;b++)e.d(a[b],
"Array")&&"_trackEvent"!==a[b][0]&&"_trackRTEvent"!==a[b][0]?f.H(a[b]):f.o.push(a[b]);window._hmt=f.L}},$:function(){if(0<f.o.length)for(var a=0,b=f.o.length;a<b;a++)f.H(f.o[a]);f.o=q},H:function(a){if(e.d(a,"Array")){var b=a[0];if(f.hasOwnProperty(b)&&e.d(f[b],"Function"))f[b](a)}},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"==a[1].charAt(0)){f.c|=4;h.b.a.et=0;h.b.a.ep="";h.b.F?(h.b.a.nv=0,h.b.a.st=4):h.b.F=p;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=g.protocol+"//"+document.location.host+a[1];
f.M||(h.b.a.su=document.location.href);h.b.g();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(f.c|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=d(a[1])+"*"+d(a[2])+(a[3]?"*"+d(a[3]):"")+(a[4]?"*"+d(a[4]):""),h.b.g())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){f.w++;for(var u=(h.b.a.cv||"*").split("!"),s=u.length;s<b-1;s++)u.push("*");u[b-1]=e+"*"+d(a[2])+"*"+d(a[3]);h.b.a.cv=u.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.oa("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"==a[1].charAt(0)?g.protocol+"//"+window.location.host+a[1]:a[1],f.M=p)},_trackOrder:function(d){d=d[1];e.d(d,"Object")&&(a(d),f.c|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=b.stringify(d),h.b.g())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.c|=32,h.b.a.et=93,h.b.a.ep=a,h.b.g()},_trackRTPageview:function(d){d=
d[1];e.d(d,"Object")&&(a(d),d=b.stringify(d),512>=encodeURIComponent(d).length&&(f.c|=64,h.b.a.rt=d))},_trackRTEvent:function(d){d=d[1];if(e.d(d,"Object")){a(d);d=encodeURIComponent(b.stringify(d));var k=function(a){var b=h.b.a.rt;f.c|=128;h.b.a.et=90;h.b.a.rt=a;h.b.g();h.b.a.rt=b},t=d.length;if(900>=t)k.call(this,d);else for(var t=Math.ceil(t/900),u="block|"+Math.round(Math.random()*g.O).toString(16)+"|"+t+"|",s=[],v=0;v<t;v++)s.push(v),s.push(d.substring(900*v,900*v+900)),k.call(this,u+s.join("|")),
s=[]}},_setUserId:function(a){a=a[1];n.ma();n.va(a)}};f.init();h.U=f;return h.U})();
(function(){function a(){"undefined"==typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=p,this.a={},this.F=r,this.init())}var d=mt.url,e=mt.Q,b=mt.z,g=mt.lang,m=mt.cookie,n=mt.j,f=mt.localStorage,l=mt.sessionStorage,k=h.n,t=h.r;a.prototype={G:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length==a.length},N:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},s:function(a){for(var b=0;b<c.dm.length;b++)if(-1<
c.dm[b].indexOf("/")){if(this.N(a,c.dm[b]))return p}else{var e=d.K(a);if(e&&this.G(e,c.dm[b]))return p}return r},D:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.G(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},J:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.N(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},da:function(){if(!document.referrer)return k.h-k.m>c.vdur?1:4;var a=
r;this.s(document.referrer)&&this.s(document.location.href)?a=p:(a=d.K(document.referrer),a=this.G(a||"",document.location.hostname));return a?k.h-k.m>c.vdur?1:4:3},getData:function(a){try{return m.get(a)||l.get(a)||f.get(a)}catch(b){}},setData:function(a,b,d){try{m.set(a,b,{domain:this.D(),path:this.J(),C:d}),d?f.set(a,b,d):l.set(a,b)}catch(e){}},oa:function(a){try{m.set(a,"",{domain:this.D(),path:this.J(),C:-1}),l.remove(a),f.remove(a)}catch(b){}},ta:function(){var a,b,d,e,f;k.m=this.getData("Hm_lpvt_"+
c.id)||0;13==k.m.length&&(k.m=Math.round(k.m/1E3));b=this.da();a=4!=b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13==e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<k.h-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(k.h);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=k.h,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,k.h);d=k.h==this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.s(document.location.href)&&
(""===document.referrer||this.s(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},sa:function(){for(var a=[],b=0,d=k.R.length;b<d;b++){var e=k.R[b],f=this.a[e];"undefined"!=typeof f&&""!==f&&a.push(e+"="+encodeURIComponent(f))}b=this.a.et;this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},ua:function(){this.ta();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.pa;this.a.cl=n.colorDepth+"-bit";
this.a.ln=n.language;this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"==typeof _bdhm_top?1:0;this.a.fl=b.ea();this.a.v="1.0.92";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");1==this.a.nv&&(this.a.tt=document.title||"");var a=document.location.href;this.a.cm=d.i(a,k.ha)||"";this.a.cp=d.i(a,k.ia)||"";this.a.cw=d.i(a,k.ga)||"";this.a.ci=d.i(a,k.fa)||"";this.a.cf=d.i(a,k.ka)||""},init:function(){try{this.ua(),0===this.a.nv?this.ra():this.I(".*"),h.b=this,this.V(),
t.q("pv-b"),this.qa()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(k.protocol+"//"+k.P+"?"+b.join("&"))}},qa:function(){function a(){t.q("pv-d")}"undefined"===typeof window._bdhm_autoPageview||window._bdhm_autoPageview===p?(this.F=p,this.a.et=0,this.a.ep="",this.g(a)):a()},g:function(a){var b=this;b.a.rnd=Math.round(Math.random()*k.O);t.q("stag-b");var d=k.protocol+"//"+
k.P+"?"+b.sa();t.q("stag-d");b.S(d);e.log(d,function(d){b.I(d);g.d(a,"Function")&&a.call(b)})},V:function(){var a=document.location.hash.substring(1),b=RegExp(c.id),e=-1<document.referrer.indexOf(k.T)?p:r,f=d.i(a,"jn"),t=/^heatlink$|^select$/.test(f);a&&(b.test(a)&&e&&t)&&(a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,
f))},S:function(a){var b=l.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");l.set("Hm_unsent_"+c.id,b)},I:function(a){var b=l.get("Hm_unsent_"+c.id)||"";b&&((b=b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?l.set("Hm_unsent_"+c.id,b):l.remove("Hm_unsent_"+c.id))},ra:function(){var a=this,b=l.get("Hm_unsent_"+
c.id);if(b)for(var b=b.split(","),d=function(b){e.log(k.protocol+"//"+decodeURIComponent(b).replace(/^https?:\/\//,""),function(b){a.I(b)})},f=0,t=b.length;f<t;f++)d(b[f])}};return new a})();
(function(){var a=mt.p,d=mt.event,e=mt.url,b=mt.l;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var g=+new Date,m=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},n=q;a.na(function(){n=+new Date});var f=function(){var a,d,f;f=m("navigation");d=m("request");f={netAll:d.start-f.start,netDns:m("domainLookup").value,netTcp:m("connect").value,srv:m("response").start-d.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:m("loadEvent").end-f.start};a=document.referrer;var s=q;d=q;if("www.baidu.com"===(a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[])[2])s=e.i(a,"qid"),d=e.i(a,"click_t");a=s;f.qid=a!=q?a:"";d!=q?(f.bdDom=n?n-d:0,f.bdRun=g-d,f.bdDef=m("navigation").start-d):(f.bdDom=0,f.bdRun=0,f.bdDef=0);h.b.a.et=87;h.b.a.ep=b.stringify(f);h.b.g()};d.e(window,"load",function(){setTimeout(f,500)})}}catch(l){}})();
(function(){var a=h.n,d={init:function(){try{if("http:"===a.protocol){var b=document.createElement("IFRAME");b.setAttribute("src","http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");b.style.display="none";b.style.width="1";b.style.height="1";b.Aa="0";document.body.appendChild(b)}}catch(d){}}},e=navigator.userAgent.toLowerCase();-1<e.indexOf("android")&&-1===e.indexOf("micromessenger")&&d.init()})();
(function(){var a=mt.lang,d=mt.event;if(c.comm&&"undefined"!==typeof h.b){var e=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},b=/.*\/swt(\/)?([\?|#].*)?$/i,g={click:function(){for(var a=[],d=e(document.getElementsByTagName("a")),d=[].concat.apply(d,e(document.getElementsByTagName("area"))),d=[].concat.apply(d,e(document.getElementsByTagName("img"))),f=/openZoosUrl\(/,g=/\/LR\/Chatpre\.aspx/,k=0,m=d.length;k<m;k++){var l=d[k],n=l.getAttribute("onclick"),
l=l.getAttribute("href");(f.test(n)||g.test(l)||b.test(l))&&a.push(d[k])}return a}},m=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===r)return r},n=function(a,d){if(d&&b.test(d.getAttribute("href"))){var e=d.getAttribute("href");a=["swt",e.replace?e.replace(/'/g,"'0").replace(/\*/g,"'1"):e,a].join("*")}h.b.a.et=86;h.b.a.ep=a;h.b.g();for(e=+new Date;500>=+new Date-e;);},f,l="/zoosnet"+(/\/$/.test("/zoosnet")?"":"/"),k=function(b,d){if(f===d)return n(l+b,d),r;if(a.d(d,"Array")||
a.d(d,"NodeList"))for(var e=0,g=d.length;e<g;e++)if(f===d[e])return n(l+b+"/"+(e+1),d[e]),r};d.e(document,"click",function(b){b=b||window.event;f=b.target||b.srcElement;var d={};for(m(g,function(b,e){d[b]=a.d(e,"Function")?e():document.getElementById(e)});f&&f!==document&&m(d,k)!==r;)f=f.parentNode})}})();})();

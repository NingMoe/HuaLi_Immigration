(function(){var h={},mt={},c={id:"a278f83dba9eb0cf90af5ed568197413",dm:["immi.com.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'/hmt/icon/21|gif|20|20',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:1466827,lxb:1466827,conv:0,comm:0,apps:''};var q=!0,r=null,s=!1;mt.l={};mt.l.wa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.l.cookieEnabled=navigator.cookieEnabled;mt.l.javaEnabled=navigator.javaEnabled();mt.l.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.l.Aa=(window.screen.width||0)+"x"+(window.screen.height||0);mt.l.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,d,e){var b;e.H&&(b=new Date,b.setTime(b.getTime()+e.H));document.cookie=a+"="+d+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(b?"; expires="+b.toGMTString():"")+(e.Va?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:r};mt.s={};mt.s.Oa=function(a){return document.getElementById(a)};mt.s.Pa=function(a,d){for(d=d.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return r};
(mt.s.ya=function(){function a(){if(!a.B){a.B=q;for(var d=0,f=b.length;d<f;d++)b[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(d,1);return}a()}var e=s,b=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,s);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!e)if(e=q,"complete"===document.readyState)a.B=q;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
f,s),window.addEventListener("load",a,s);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",a);var b=s;try{b=window.frameElement==r}catch(p){}document.documentElement.doScroll&&b&&d()}})();return function(d){a.B?d():b.push(d)}}()).B=s;mt.event={};mt.event.c=function(a,d,e){a.attachEvent?a.attachEvent("on"+d,function(b){e.call(a,b)}):a.addEventListener&&a.addEventListener(d,e,s)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=s};mt.o={};mt.o.parse=function(){return(new Function('return (" + source + ")'))()};
mt.o.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function d(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(b){switch(typeof b){case "undefined":return"undefined";case "number":return isFinite(b)?String(b):"null";case "string":return a(b);case "boolean":return String(b);
default:if(b===r)return"null";if(b instanceof Array){var f=["["],e=b.length,p,g,l;for(g=0;g<e;g++)switch(l=b[g],typeof l){case "undefined":case "function":case "unknown":break;default:p&&f.push(","),f.push(mt.o.stringify(l)),p=1}f.push("]");return f.join("")}if(b instanceof Date)return'"'+b.getFullYear()+"-"+d(b.getMonth()+1)+"-"+d(b.getDate())+"T"+d(b.getHours())+":"+d(b.getMinutes())+":"+d(b.getSeconds())+'"';p=["{"];g=mt.o.stringify;for(e in b)if(Object.prototype.hasOwnProperty.call(b,e))switch(l=
b[e],typeof l){case "undefined":case "unknown":case "function":break;default:f&&p.push(","),f=1,p.push(g(e)+":"+g(l))}p.push("}");return p.join("")}}}();mt.lang={};mt.lang.e=function(a,d){return"[object "+d+"]"==={}.toString.call(a)};mt.lang.Sa=function(a){return mt.lang.e(a,"Number")&&isFinite(a)};mt.lang.Ua=function(a){return mt.lang.e(a,"String")};mt.localStorage={};
mt.localStorage.F=function(){if(!mt.localStorage.g)try{mt.localStorage.g=document.createElement("input"),mt.localStorage.g.type="hidden",mt.localStorage.g.style.display="none",mt.localStorage.g.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g)}catch(a){return s}return q};
mt.localStorage.set=function(a,d,e){var b=new Date;b.setTime(b.getTime()+e||31536E6);try{window.localStorage?(d=b.getTime()+"|"+d,window.localStorage.setItem(a,d)):mt.localStorage.F()&&(mt.localStorage.g.expires=b.toUTCString(),mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.setAttribute(a,d),mt.localStorage.g.save(document.location.hostname))}catch(f){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var d=a.indexOf("|"),e=a.substring(0,d)-0;if(e&&e>(new Date).getTime())return a.substring(d+1)}}else if(mt.localStorage.F())try{return mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.getAttribute(a)}catch(b){}return r};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.F())try{mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.removeAttribute(a),mt.localStorage.g.save(document.location.hostname)}catch(d){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,d){if(window.sessionStorage)try{window.sessionStorage.setItem(a,d)}catch(e){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):r};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.O={};mt.O.log=function(a,d){var e=new Image,b="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[b]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=r;e=window[b]=r;d&&d(a)};e.src=a};mt.D={};
mt.D.ma=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var d=navigator.plugins["Shockwave Flash"];d&&d.description&&(a=d.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=d.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.D.aa=function(a,d,e,b,f){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+b+'"><param name="movie" value="'+d+'" /><param name="flashvars" value="'+(f||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+b+'" src="'+d+'" flashvars="'+(f||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.k=function(a,d){var e=a.match(RegExp("(^|&|\\?|#)("+d+")=([^&#]*)(&|$|#)",""));return e?e[3]:r};mt.url.Ra=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:r};mt.url.ha=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):r};mt.url.Q=function(a){return(a=mt.url.ha(a))?a.replace(/:\d+$/,""):a};mt.url.Qa=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):r};
h.j={ta:"http://tongji.baidu.com/hm-web/welcome/ico",V:"hm.baidu.com/hm.gif",Y:"baidu.com",qa:"hmmd",ra:"hmpl",pa:"hmkw",na:"hmci",sa:"hmsr",oa:"hmcu",q:0,m:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",Ta:0,Ka:6E5,La:10,Ma:1024,Ja:1,L:2147483647,W:"cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")};
(function(){var a={p:{},c:function(a,e){this.p[a]=this.p[a]||[];this.p[a].push(e)},w:function(a,e){this.p[a]=this.p[a]||[];for(var b=this.p[a].length,f=0;f<b;f++)this.p[a][f](e)}};return h.z=a})();
(function(){function a(a,b){var f=document.createElement("script");f.charset="utf-8";d.e(b,"Function")&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=r,b()}:f.onload=function(){b()});f.src=a;var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(f,m)}var d=mt.lang;return h.load=a})();
(function(){var a=h.j,d=mt.D,e={init:function(){if(""!==c.icon){var b;b=c.icon.split("|");var f=a.ta+"?s="+c.id,e=("http:"==a.protocol?"http://eiv":"https://bs")+".baidu.com"+b[0]+"."+b[1];switch(b[1]){case "swf":b=d.aa("HolmesIcon"+a.m,e,b[2],b[3],"s="+f);break;case "gif":b='<a href="'+f+'" target="_blank"><img border="0" src="'+e+'" width="'+b[2]+'" height="'+b[3]+'"></a>';break;default:b='<a href="'+f+'" target="_blank">'+b[0]+"</a>"}document.write(b)}}};h.z.c("pv-b",e.init);return e})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.G.ka()+","+h.G.ga();h.b.i()}}function d(){clearTimeout(A);var a;y&&(a="visible"==document[y]);B&&(a=!document[B]);g="undefined"==typeof a?q:a;if((!p||!l)&&g&&k)u=q,n=+new Date;else if(p&&l&&(!g||!k))u=s,t+=+new Date-n;p=g;l=k;A=setTimeout(d,100)}function e(a){var n=document,l="";if(a in n)l=a;else for(var t=["webkit","ms","moz","o"],b=0;b<t.length;b++){var d=t[b]+a.charAt(0).toUpperCase()+a.slice(1);if(d in n){l=
d;break}}return l}function b(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))k="focus"==a.type||"focusin"==a.type?q:s,d()}var f=mt.event,m=h.z,p=q,g=q,l=q,k=q,v=+new Date,n=v,t=0,u=q,y=e("visibilityState"),B=e("hidden"),A;d();(function(){var a=y.replace(/[vV]isibilityState/,"visibilitychange");f.c(document,a,d);f.c(window,"pageshow",d);f.c(window,"pagehide",d);"object"==typeof document.onfocusin?(f.c(document,"focusin",b),f.c(document,"focusout",b)):(f.c(window,"focus",b),
f.c(window,"blur",b))})();h.G={ka:function(){return+new Date-v},ga:function(){return u?+new Date-n+t:t}};m.c("pv-b",function(){f.c(window,"unload",a())});return h.G})();
(function(){var a=mt.lang,d=h.j,e=h.load,b={ua:function(b){if((void 0===window._dxt||a.e(window._dxt,"Array"))&&"undefined"!==typeof h.b){var m=h.b.I();e([d.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(m)].join(""),b)}},Ha:function(b){if(a.e(b,"String")||a.e(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.ba=b})();
(function(){function a(l){for(var b in l)if({}.hasOwnProperty.call(l,b)){var d=l[b];e.e(d,"Object")||e.e(d,"Array")?a(d):l[b]=String(d)}}function d(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var e=mt.lang,b=mt.o,f=h.j,m=h.z,p=h.ba,g={r:[],C:0,T:s,init:function(){g.d=0;m.c("pv-b",function(){g.ca();g.da()});m.c("pv-d",g.ea);m.c("stag-b",function(){h.b.a.api=g.d||g.C?g.d+"_"+g.C:""});m.c("stag-d",function(){h.b.a.api=0;g.d=0;g.C=0})},ca:function(){var a=window._hmt||
[];if(!a||e.e(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var n=arguments[b];e.e(n,"Array")&&(a.cmd[a.id].push(n),"_setAccount"===n[0]&&(1<n.length&&/^[0-9a-f]{32}$/.test(n[1]))&&(n=n[1],a.id=n,a.cmd[n]=a.cmd[n]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},da:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,n=0,t=b.length;n<t;n++){var f=b[n];
d.test(f[0])?g.r.push(f):g.M(f)}a.cmd[c.id]={push:g.M}},ea:function(){if(0<g.r.length)for(var a=0,b=g.r.length;a<b;a++)g.M(g.r[a]);g.r=r},M:function(a){var b=a[0];if(g.hasOwnProperty(b)&&e.e(g[b],"Function"))g[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(g.d|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],s===a||q===a))g.d|=2,h.b.R=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){g.d|=4;h.b.a.et=0;h.b.a.ep="";h.b.J?(h.b.a.nv=0,h.b.a.st=
4):h.b.J=q;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=f.protocol+"//"+document.location.host+a[1];g.T||(h.b.a.su=document.location.href);h.b.i();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(g.d|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=d(a[1])+"*"+d(a[2])+(a[3]?"*"+d(a[3]):"")+(a[4]?"*"+d(a[4]):""),h.b.i())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],f=a[4]||3;if(0<b&&6>b&&0<f&&4>f){g.C++;for(var n=(h.b.a.cv||"*").split("!"),t=n.length;t<b-1;t++)n.push("*");n[b-1]=f+"*"+d(a[2])+
"*"+d(a[3]);h.b.a.cv=n.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.za("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?f.protocol+"//"+window.location.host+a[1]:a[1],g.T=q)},_trackOrder:function(d){d=d[1];e.e(d,"Object")&&(a(d),g.d|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=b.stringify(d),h.b.i())},_trackMobConv:function(a){if(a={webim:1,
tel:2,map:3,sms:4,callback:5,share:6}[a[1]])g.d|=32,h.b.a.et=93,h.b.a.ep=a,h.b.i()},_trackRTPageview:function(d){d=d[1];e.e(d,"Object")&&(a(d),d=b.stringify(d),512>=encodeURIComponent(d).length&&(g.d|=64,h.b.a.rt=d))},_trackRTEvent:function(d){d=d[1];if(e.e(d,"Object")){a(d);d=encodeURIComponent(b.stringify(d));var k=function(a){var n=h.b.a.rt;g.d|=128;h.b.a.et=90;h.b.a.rt=a;h.b.i();h.b.a.rt=n},m=d.length;if(900>=m)k.call(this,d);else for(var m=Math.ceil(m/900),n="block|"+Math.round(Math.random()*
f.L).toString(16)+"|"+m+"|",t=[],u=0;u<m;u++)t.push(u),t.push(d.substring(900*u,900*u+900)),k.call(this,n+t.join("|")),t=[]}},_setUserId:function(a){a=a[1];p.ua();p.Ha(a)}};g.init();h.Z=g;return h.Z})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=q,this.a={},this.R=q,this.J=s,this.init())}var d=mt.url,e=mt.O,b=mt.D,f=mt.lang,m=mt.cookie,p=mt.l,g=mt.localStorage,l=mt.sessionStorage,k=h.j,v=h.z;a.prototype={K:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},U:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},A:function(a){for(var b=0;b<c.dm.length;b++)if(-1<
c.dm[b].indexOf("/")){if(this.U(a,c.dm[b]))return q}else{var f=d.Q(a);if(f&&this.K(f,c.dm[b]))return q}return s},I:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.K(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},P:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.U(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},la:function(){if(!document.referrer)return k.m-k.q>c.vdur?1:4;var a=
s;this.A(document.referrer)&&this.A(document.location.href)?a=q:(a=d.Q(document.referrer),a=this.K(a||"",document.location.hostname));return a?k.m-k.q>c.vdur?1:4:3},getData:function(a){try{return m.get(a)||l.get(a)||g.get(a)}catch(b){}},setData:function(a,b,d){try{m.set(a,b,{domain:this.I(),path:this.P(),H:d}),d?g.set(a,b,d):l.set(a,b)}catch(f){}},za:function(a){try{m.set(a,"",{domain:this.I(),path:this.P(),H:-1}),l.remove(a),g.remove(a)}catch(b){}},Fa:function(){var a,b,d,f,e;k.q=this.getData("Hm_lpvt_"+
c.id)||0;13===k.q.length&&(k.q=Math.round(k.q/1E3));b=this.la();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){f=d.split(",");for(e=f.length-1;0<=e;e--)13===f[e].length&&(f[e]=""+Math.round(f[e]/1E3));for(;2592E3<k.m-f[0];)f.shift();e=4>f.length?2:3;for(1===a&&f.push(k.m);4<f.length;)f.shift();d=f.join(",");f=f[f.length-1]}else d=k.m,f="",e=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,k.m);d=k.m===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.A(document.location.href)&&
(""===document.referrer||this.A(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=f;this.a.lv=e},Da:function(){for(var a=[],b=0,d=k.W.length;b<d;b++){var f=k.W[b],e=this.a[f];"undefined"!==typeof e&&""!==e&&a.push(f+"="+encodeURIComponent(e))}b=this.a.et;this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},Ga:function(){this.Fa();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=p.Aa;this.a.cl=p.colorDepth+"-bit";
this.a.ln=p.language;this.a.ja=p.javaEnabled?1:0;this.a.ck=p.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=b.ma();this.a.v="1.1.11";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");1===this.a.nv&&(this.a.tt=document.title||"");var a=document.location.href;this.a.cm=d.k(a,k.qa)||"";this.a.cp=d.k(a,k.ra)||"";this.a.cw=d.k(a,k.pa)||"";this.a.ci=d.k(a,k.na)||"";this.a.cf=d.k(a,k.sa)||"";this.a.cu=d.k(a,k.oa)||""},init:function(){try{this.Ga(),0===this.a.nv?this.Ca():
this.N(".*"),h.b=this,this.$(),v.w("pv-b"),this.Ba()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(k.protocol+"//"+k.V+"?"+b.join("&"))}},Ba:function(){function a(){v.w("pv-d")}this.R?(this.J=q,this.a.et=0,this.a.ep="",this.i(a)):a()},i:function(a){var b=this;b.a.rnd=Math.round(Math.random()*k.L);v.w("stag-b");var d=k.protocol+"//"+k.V+"?"+b.Da();v.w("stag-d");b.X(d);
e.log(d,function(d){b.N(d);f.e(a,"Function")&&a.call(b)})},$:function(){var a=document.location.hash.substring(1),b=RegExp(c.id),f=-1<document.referrer.indexOf(k.Y),e=d.k(a,"jn"),g=/^heatlink$|^select$/.test(e);a&&(b.test(a)&&f&&g)&&(this.a.rnd=Math.round(Math.random()*k.L),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",k.protocol+"//"+c.js+e+".js?"+this.a.rnd),e=document.getElementsByTagName("script")[0],e.parentNode.insertBefore(a,
e))},X:function(a){var b=l.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");l.set("Hm_unsent_"+c.id,b)},N:function(a){var b=l.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?l.set("Hm_unsent_"+c.id,b):l.remove("Hm_unsent_"+c.id))},Ca:function(){var a=this,b=
l.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),d=function(b){e.log(k.protocol+"//"+decodeURIComponent(b),function(b){a.N(b)})},f=0,g=b.length;f<g;f++)d(b[f])}};return new a})();var w=h.j,x=h.load;if(c.apps){var z=[w.protocol,"//ers.baidu.com/app/s.js?"];z.push(c.apps);x(z.join(""))}var C=h.j,D=h.load;if(c.conv&&"http:"===C.protocol){var E=["http://page.baidu.com/conversion_js.php?sid="];E.push(c.conv);D(E.join(""))}var F=h.j,G=h.load;c.lxb&&G([F.protocol,"//lxbjs.baidu.com/lxb.js?sid=",c.lxb].join(""));
var H=h.load,I=h.j.protocol;if(c.qiao){for(var J=[I+"//goutong.baidu.com/site/"],K=c.id,L=5381,M=K.length,N=0;N<M;N++)L=(33*L+Number(K.charCodeAt(N)))%4294967296;2147483648<L&&(L-=2147483648);J.push(L%1E3+"/");J.push(c.id+"/b.js");J.push("?siteId="+c.qiao);H(J.join(""))}
(function(){var a=mt.s,d=mt.event,e=mt.url,b=mt.o;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var f=+new Date,m=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},p=r;a.ya(function(){p=+new Date});var g=function(){var a,d,g;g=m("navigation");d=m("request");g={netAll:d.start-g.start,netDns:m("domainLookup").value,netTcp:m("connect").value,srv:m("response").start-d.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:m("loadEvent").end-g.start};a=document.referrer;var t=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],u=r;d=r;if("www.baidu.com"===t[2]||"m.baidu.com"===t[2])u=e.k(a,"qid"),d=e.k(a,"click_t");a=u;g.qid=a!=r?a:"";d!=r?(g.bdDom=p?p-d:0,g.bdRun=f-d,g.bdDef=m("navigation").start-d):(g.bdDom=0,g.bdRun=0,g.bdDef=0);h.b.a.et=87;h.b.a.ep=b.stringify(g);h.b.i()};d.c(window,"load",function(){setTimeout(g,500)})}}catch(l){}})();
(function(){var a=h.j,d={init:function(){try{if("http:"===a.protocol){var b=document.createElement("IFRAME");b.setAttribute("src","http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");b.style.display="none";b.style.width="1";b.style.height="1";b.Na="0";document.body.appendChild(b)}}catch(d){}}},e=navigator.userAgent.toLowerCase();-1<e.indexOf("android")&&-1===e.indexOf("micromessenger")&&d.init()})();
(function(){var a=mt.lang,d=mt.event,e=mt.o;if(c.comm&&"undefined"!==typeof h.b){var b=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},f=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],d=b(document.getElementsByTagName("a")),d=[].concat.apply(d,b(document.getElementsByTagName("area"))),d=[].concat.apply(d,b(document.getElementsByTagName("img"))),e=0,g=d.length;e<g;e++){var m=d[e],
k=m.getAttribute("onclick"),m=m.getAttribute("href");(f.test(k)||f.test(m))&&a.push(d[e])}return a}},p=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===s)return s},g=function(b,d){var g={n:"swt",t:"clk"};g.v=b;if(d){var m=d.getAttribute("href"),k=d.getAttribute("onclick")?""+d.getAttribute("onclick"):r,l=d.getAttribute("id")||"";f.test(m)?(g.sn="mediate",g.snv=m):a.e(k,"String")&&f.test(k)&&(g.sn="wrap",g.snv=k);g.id=l}h.b.a.et=86;h.b.a.ep=e.stringify(g);h.b.i();for(g=+new Date;500>=
+new Date-g;);},l,k="/zoosnet"+(/\/$/.test("/zoosnet")?"":"/"),v=function(b,d){if(l===d)return g(k+b,d),s;if(a.e(d,"Array")||a.e(d,"NodeList"))for(var f=0,e=d.length;f<e;f++)if(l===d[f])return g(k+b+"/"+(f+1),d[f]),s};d.c(document,"click",function(b){b=b||window.event;l=b.target||b.srcElement;var d={};for(p(m,function(b,f){d[b]=a.e(f,"Function")?f():document.getElementById(f)});l&&l!==document&&p(d,v)!==s;)l=l.parentNode})}})();
(function(){var a=mt.event,d=mt.o;if(c.comm&&"undefined"!==typeof h.b){var e=+new Date,b={n:"anti",sb:0,kb:0,clk:0},f=function(){h.b.a.et=86;h.b.a.ep=d.stringify(b);h.b.i()};a.c(document,"click",function(){b.clk++});a.c(document,"keyup",function(){b.kb=1});a.c(window,"scroll",function(){b.sb++});a.c(window,"unload",function(){b.t=+new Date-e;f()});a.c(window,"load",function(){setTimeout(f,5E3)})}})();
(function(){function a(){this.f=r}var d=mt.O,e=mt.l;a.prototype={va:function(a){if(this.f)this.h(a,0);else if(this.isSupported()){try{this.f=new ActiveXObject("BDEXIE.BDExExtension.1"),this.S=q}catch(b){this.S=s}this.S?this.h(a,0):this.h(a,-1)}else this.h(a,-1)},Ia:function(){this.f&&delete this.f;this.f=r},Ea:function(a,b,d){if(this.f&&"SetLocalCache"in this.f)try{void 0===this.f.SetLocalCache(a,b)&&this.h(d,0)}catch(e){this.h(d,-1)}else this.h(d,-1)},ia:function(a,b){if(this.f&&"GetLocalCache"in
this.f)try{this.h(b,this.f.GetLocalCache(a))}catch(d){this.h(b,"")}else this.h(b,"")},fa:function(a){if(this.f&&"GetCryptStr"in this.f)try{this.h(a,this.f.GetCryptStr("strEncryptID1"))}catch(b){this.h(a,"")}else this.h(a,"")},h:function(a,b){"function"===typeof a&&a(b,this)},isSupported:function(){if(window.ActiveXObject||"ActiveXObject"in window)try{return!!new ActiveXObject("BDEXIE.BDExExtension.1")}catch(a){}return s},xa:function(){var a=this;this.fa(function(b){void 0!==b&&""!==b&&(d.log("//datax.baidu.com/x.gif?dm="+
encodeURIComponent("datax.baidu.com/webadapter/guid")+"&ac="+encodeURIComponent(b)+"&v=hm-webadapter-0.0.1&rnd="+Math.round(2147483647*Math.random())),a.Ea("hmKey",+new Date,function(){a.Ia()}))})}};if(e.wa&&/^http(s)?:$/.test(document.location.protocol)){var b=new a;b.va(function(a){0===a&&b.ia("hmKey",function(a){a=+a;(isNaN(a)||6048E5<+new Date-a)&&b.xa()})})}})();})();

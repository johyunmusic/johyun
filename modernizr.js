/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms3d-flexbox-pointerevents-preserve3d-svgclippaths-touchevents-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
 !function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;
    for(var u in w)if(w.hasOwnProperty(u)){
        if(e=[],t=w[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))
        for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());
        for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),S.push((o?"":"no-")+a.join("-"))}}function i(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(T&&(t=t.baseVal),Modernizr._config.enableJSClass){
            var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?b.className.baseVal=t:b.className=t)}function s(e,t){
                if("object"==typeof e)
                for(var n in e)E(e,n)&&s(n,e[n]);
            else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];
            if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)
        return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}
        return Modernizr}function a(){
            return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function u(){var e=t.body;
            return e||(e=a(T?"svg":"body"),e.fake=!0),e}function l(e,n,r,o){var i,s,l,f,d="modernizr",p=a("div"),c=u();
            if(parseInt(r,10))
            for(;r--;)l=a("div"),l.id=o?o[r]:d+(r+1),p.appendChild(l);
            return i=a("style"),i.type="text/css",i.id="s"+d,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=b.style.overflow,b.style.overflow="hidden",b.appendChild(c)),s=n(p,e),c.fake?(c.parentNode.removeChild(c),b.style.overflow=f,b.offsetHeight):p.parentNode.removeChild(p),!!s}function f(e,t){
                return!!~(""+e).indexOf(t)}function d(e){
                    return e.replace(/([a-z])-([a-z])/g,function(e,t,n){
                return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t){
                    return function(){
                    return e.apply(t,arguments)}}function c(e,t,n){var o;
                for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?p(o,n||t):o);
                return!1}function h(e){
                    return e.replace(/([A-Z])/g,function(e,t){
                return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var o;
                if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;
                    if(null!==o)r&&(o=o.getPropertyValue(r));
                    else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}
                    else o=!n&&t.currentStyle&&t.currentStyle[r];
                    return o}function v(t,r){var o=t.length;
                        if("CSS"in e&&"supports"in e.CSS){
                        for(;o--;)if(e.CSS.supports(h(t[o]),r))return!0;
                        return!1}
                        if("CSSSupportsRule"in e){
                            for(var i=[];o--;)i.push("("+h(t[o])+":"+r+")");
                            return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){
                                return"absolute"==m(e,null,"position")})}
                                return n}function g(e,t,o,i){function s(){l&&(delete O.style,delete O.modElem)}
                                if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=v(e,o);
                if(!r(u,"undefined"))
                return u}
                for(var l,p,c,h,m,g=["modernizr","tspan","samp"];!O.style&&g.length;)l=!0,O.modElem=a(g.shift()),O.style=O.modElem.style;
                for(c=e.length,p=0;c>p;p++)if(h=e[p],m=O.style[h],f(h,"-")&&(h=d(h)),O.style[h]!==n){
                    if(i||r(o,"undefined"))
                return s(),"pfx"==t?h:!0;
                try{O.style[h]=o}
                catch(y){}if(O.style[h]!=m)
                return s(),"pfx"==t?h:!0}
                return s(),!1}function y(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+B.join(s+" ")+s).split(" ");
                return r(t,"string")||r(t,"undefined")?g(a,t,o,i):(a=(e+" "+z.join(s+" ")+s).split(" "),c(a,t,n))}function C(e,t,r){
                    return y(e,n,n,t,r)}
                    var S=[],w=[],_={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){
                        var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr;
                    
                    var x=_._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];_._prefixes=x;
                    var b=t.documentElement,T="svg"===b.nodeName.toLowerCase(),P="Moz O ms Webkit",z=_._config.usePrefixes?P.toLowerCase().split(" "):[];_._domPrefixes=z;var E;!function(){
                        var e={}.hasOwnProperty;E=r(e,"undefined")||r(e.call,"undefined")?function(e,t){
                        return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){
                        return e.call(t,n)}}(),_._l={},_.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},_._trigger=function(e,t){
                        if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;
                            for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){_.addTest=s});
                            var k=function(){function e(e,t){
                                var o;
                    return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);
                    return e}();_.hasEvent=k,Modernizr.addTest("pointerevents",function(){
                        var e=!1,t=z.length;
                        for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)k(z[t]+"pointerdown")&&(e=!0);
                    return e});var j=function(e,t){var n=!1,r=a("div"),o=r.style;
                    if(e in o){var i=z.length;
                        for(o[e]=t,n=o[e];i--&&!n;)o[e]="-"+z[i]+"-"+t,n=o[e]}
                    return""===n&&(n=!1),n};_.prefixedCSSValue=j,Modernizr.addTest("preserve3d",function(){var t,n,r=e.CSS,o=!1;
                        return r&&r.supports&&r.supports("(transform-style: preserve-3d)")?!0:(t=a("a"),n=a("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),b.appendChild(t),o=n.getBoundingClientRect(),b.removeChild(t),o=o.width&&o.width<4)});
                        var N={}.toString;Modernizr.addTest("svgclippaths",function(){
                            return!!t.createElementNS&&/SVGClipPath/.test(N.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))});
                            var A=function(){var t=e.matchMedia||e.msMatchMedia;
                            return t?function(e){var n=t(e);
                            return n&&n.matches||!1}:function(t){var n=!1;
                        return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();_.mq=A;var q=_.testStyles=l;Modernizr.addTest("touchevents",function(){var n;
                        if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;
                        else{var r=["@media (",x.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");q(r,function(e){n=9===e.offsetTop})}
                    return n});var B=_._config.usePrefixes?P.split(" "):[];_._cssomPrefixes=B;var L={elem:a("modernizr")};Modernizr._q.push(function(){delete L.elem});
                    var O={style:L.elem.style};Modernizr._q.unshift(function(){delete O.style});_.testProp=function(e,t,r){return g([e],n,t,r)};_.testAllProps=y,_.testAllProps=C,Modernizr.addTest("flexbox",C("flexBasis","1px",!0));
                    var V="CSS"in e&&"supports"in e.CSS,M="supportsCSS"in e;Modernizr.addTest("supports",V||M),Modernizr.addTest("csstransforms3d",function(){
                        var e=!!C("perspective","1px",!0),t=Modernizr._config.usePrefixes;
                    if(e&&(!t||"webkitPerspective"in b.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",q(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}
                    return e}),o(),i(S),delete _.addTest,delete _.addAsyncTest;
 for(var R=0;R<Modernizr._q.length;R++)Modernizr._q[R]();e.Modernizr=Modernizr}(window,document);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Cl(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const np="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ip=Cl(np);function jh(i){return!!i||i===""}function Ll(i){if(ze(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Et(n)?op(n):Ll(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Et(i))return i;if(ht(i))return i}}const rp=/;(?![^(]*\))/g,sp=/:(.+)/;function op(i){const e={};return i.split(rp).forEach(t=>{if(t){const n=t.split(sp);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Pl(i){let e="";if(Et(i))e=i;else if(ze(i))for(let t=0;t<i.length;t++){const n=Pl(i[t]);n&&(e+=n+" ")}else if(ht(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const nt={},gr=[],pn=()=>{},ap=()=>!1,lp=/^on[^a-z]/,zo=i=>lp.test(i),Dl=i=>i.startsWith("onUpdate:"),Tt=Object.assign,Rl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},cp=Object.prototype.hasOwnProperty,Xe=(i,e)=>cp.call(i,e),ze=Array.isArray,ss=i=>Uo(i)==="[object Map]",up=i=>Uo(i)==="[object Set]",Ve=i=>typeof i=="function",Et=i=>typeof i=="string",Il=i=>typeof i=="symbol",ht=i=>i!==null&&typeof i=="object",qh=i=>ht(i)&&Ve(i.then)&&Ve(i.catch),hp=Object.prototype.toString,Uo=i=>hp.call(i),fp=i=>Uo(i).slice(8,-1),dp=i=>Uo(i)==="[object Object]",Fl=i=>Et(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,uo=Cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bo=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},pp=/-(\w)/g,br=Bo(i=>i.replace(pp,(e,t)=>t?t.toUpperCase():"")),mp=/\B([A-Z])/g,Dr=Bo(i=>i.replace(mp,"-$1").toLowerCase()),Yh=Bo(i=>i.charAt(0).toUpperCase()+i.slice(1)),ia=Bo(i=>i?`on${Yh(i)}`:""),yo=(i,e)=>!Object.is(i,e),ra=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Mo=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},gp=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Ac;const _p=()=>Ac||(Ac=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _n;class vp{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=_n,!e&&_n&&(this.index=(_n.scopes||(_n.scopes=[])).push(this)-1)}run(e){if(this.active){const t=_n;try{return _n=this,e()}finally{_n=t}}}on(){_n=this}off(){_n=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function xp(i,e=_n){e&&e.active&&e.effects.push(i)}const Ol=i=>{const e=new Set(i);return e.w=0,e.n=0,e},$h=i=>(i.w&ui)>0,Zh=i=>(i.n&ui)>0,yp=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=ui},Mp=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];$h(r)&&!Zh(r)?r.delete(i):e[t++]=r,r.w&=~ui,r.n&=~ui}e.length=t}},Ja=new WeakMap;let Qr=0,ui=1;const Qa=30;let hn;const Ii=Symbol(""),el=Symbol("");class Nl{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,xp(this,n)}run(){if(!this.active)return this.fn();let e=hn,t=oi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=hn,hn=this,oi=!0,ui=1<<++Qr,Qr<=Qa?yp(this):Cc(this),this.fn()}finally{Qr<=Qa&&Mp(this),ui=1<<--Qr,hn=this.parent,oi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){hn===this?this.deferStop=!0:this.active&&(Cc(this),this.onStop&&this.onStop(),this.active=!1)}}function Cc(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let oi=!0;const Kh=[];function Rr(){Kh.push(oi),oi=!1}function Ir(){const i=Kh.pop();oi=i===void 0?!0:i}function jt(i,e,t){if(oi&&hn){let n=Ja.get(i);n||Ja.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=Ol()),Jh(r)}}function Jh(i,e){let t=!1;Qr<=Qa?Zh(i)||(i.n|=ui,t=!$h(i)):t=!i.has(hn),t&&(i.add(hn),hn.deps.push(i))}function Vn(i,e,t,n,r,s){const o=Ja.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ze(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ze(i)?Fl(t)&&a.push(o.get("length")):(a.push(o.get(Ii)),ss(i)&&a.push(o.get(el)));break;case"delete":ze(i)||(a.push(o.get(Ii)),ss(i)&&a.push(o.get(el)));break;case"set":ss(i)&&a.push(o.get(Ii));break}if(a.length===1)a[0]&&tl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);tl(Ol(l))}}function tl(i,e){const t=ze(i)?i:[...i];for(const n of t)n.computed&&Lc(n);for(const n of t)n.computed||Lc(n)}function Lc(i,e){(i!==hn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const bp=Cl("__proto__,__v_isRef,__isVue"),Qh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Il)),wp=zl(),Sp=zl(!1,!0),Tp=zl(!0),Pc=Ep();function Ep(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Qe(this);for(let s=0,o=this.length;s<o;s++)jt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(Qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Rr();const n=Qe(this)[e].apply(this,t);return Ir(),n}}),i}function zl(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Gp:sf:e?rf:nf).get(n))return n;const o=ze(n);if(!i&&o&&Xe(Pc,r))return Reflect.get(Pc,r,s);const a=Reflect.get(n,r,s);return(Il(r)?Qh.has(r):bp(r))||(i||jt(n,"get",r),e)?a:Rt(a)?o&&Fl(r)?a:a.value:ht(a)?i?of(a):kl(a):a}}const Ap=ef(),Cp=ef(!0);function ef(i=!1){return function(t,n,r,s){let o=t[n];if(cs(o)&&Rt(o)&&!Rt(r))return!1;if(!i&&(!nl(r)&&!cs(r)&&(o=Qe(o),r=Qe(r)),!ze(t)&&Rt(o)&&!Rt(r)))return o.value=r,!0;const a=ze(t)&&Fl(n)?Number(n)<t.length:Xe(t,n),l=Reflect.set(t,n,r,s);return t===Qe(s)&&(a?yo(r,o)&&Vn(t,"set",n,r):Vn(t,"add",n,r)),l}}function Lp(i,e){const t=Xe(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Vn(i,"delete",e,void 0),n}function Pp(i,e){const t=Reflect.has(i,e);return(!Il(e)||!Qh.has(e))&&jt(i,"has",e),t}function Dp(i){return jt(i,"iterate",ze(i)?"length":Ii),Reflect.ownKeys(i)}const tf={get:wp,set:Ap,deleteProperty:Lp,has:Pp,ownKeys:Dp},Rp={get:Tp,set(i,e){return!0},deleteProperty(i,e){return!0}},Ip=Tt({},tf,{get:Sp,set:Cp}),Ul=i=>i,ko=i=>Reflect.getPrototypeOf(i);function Ds(i,e,t=!1,n=!1){i=i.__v_raw;const r=Qe(i),s=Qe(e);t||(e!==s&&jt(r,"get",e),jt(r,"get",s));const{has:o}=ko(r),a=n?Ul:t?Hl:Gl;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function Rs(i,e=!1){const t=this.__v_raw,n=Qe(t),r=Qe(i);return e||(i!==r&&jt(n,"has",i),jt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function Is(i,e=!1){return i=i.__v_raw,!e&&jt(Qe(i),"iterate",Ii),Reflect.get(i,"size",i)}function Dc(i){i=Qe(i);const e=Qe(this);return ko(e).has.call(e,i)||(e.add(i),Vn(e,"add",i,i)),this}function Rc(i,e){e=Qe(e);const t=Qe(this),{has:n,get:r}=ko(t);let s=n.call(t,i);s||(i=Qe(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?yo(e,o)&&Vn(t,"set",i,e):Vn(t,"add",i,e),this}function Ic(i){const e=Qe(this),{has:t,get:n}=ko(e);let r=t.call(e,i);r||(i=Qe(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&Vn(e,"delete",i,void 0),s}function Fc(){const i=Qe(this),e=i.size!==0,t=i.clear();return e&&Vn(i,"clear",void 0,void 0),t}function Fs(i,e){return function(n,r){const s=this,o=s.__v_raw,a=Qe(o),l=e?Ul:i?Hl:Gl;return!i&&jt(a,"iterate",Ii),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function Os(i,e,t){return function(...n){const r=this.__v_raw,s=Qe(r),o=ss(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Ul:e?Hl:Gl;return!e&&jt(s,"iterate",l?el:Ii),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function qn(i){return function(...e){return i==="delete"?!1:this}}function Fp(){const i={get(s){return Ds(this,s)},get size(){return Is(this)},has:Rs,add:Dc,set:Rc,delete:Ic,clear:Fc,forEach:Fs(!1,!1)},e={get(s){return Ds(this,s,!1,!0)},get size(){return Is(this)},has:Rs,add:Dc,set:Rc,delete:Ic,clear:Fc,forEach:Fs(!1,!0)},t={get(s){return Ds(this,s,!0)},get size(){return Is(this,!0)},has(s){return Rs.call(this,s,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:Fs(!0,!1)},n={get(s){return Ds(this,s,!0,!0)},get size(){return Is(this,!0)},has(s){return Rs.call(this,s,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:Fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=Os(s,!1,!1),t[s]=Os(s,!0,!1),e[s]=Os(s,!1,!0),n[s]=Os(s,!0,!0)}),[i,t,e,n]}const[Op,Np,zp,Up]=Fp();function Bl(i,e){const t=e?i?Up:zp:i?Np:Op;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Xe(t,r)&&r in n?t:n,r,s)}const Bp={get:Bl(!1,!1)},kp={get:Bl(!1,!0)},Vp={get:Bl(!0,!1)},nf=new WeakMap,rf=new WeakMap,sf=new WeakMap,Gp=new WeakMap;function Hp(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wp(i){return i.__v_skip||!Object.isExtensible(i)?0:Hp(fp(i))}function kl(i){return cs(i)?i:Vl(i,!1,tf,Bp,nf)}function Xp(i){return Vl(i,!1,Ip,kp,rf)}function of(i){return Vl(i,!0,Rp,Vp,sf)}function Vl(i,e,t,n,r){if(!ht(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=Wp(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function _r(i){return cs(i)?_r(i.__v_raw):!!(i&&i.__v_isReactive)}function cs(i){return!!(i&&i.__v_isReadonly)}function nl(i){return!!(i&&i.__v_isShallow)}function af(i){return _r(i)||cs(i)}function Qe(i){const e=i&&i.__v_raw;return e?Qe(e):i}function lf(i){return Mo(i,"__v_skip",!0),i}const Gl=i=>ht(i)?kl(i):i,Hl=i=>ht(i)?of(i):i;function jp(i){oi&&hn&&(i=Qe(i),Jh(i.dep||(i.dep=Ol())))}function qp(i,e){i=Qe(i),i.dep&&tl(i.dep)}function Rt(i){return!!(i&&i.__v_isRef===!0)}function Yp(i){return Rt(i)?i.value:i}const $p={get:(i,e,t)=>Yp(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Rt(r)&&!Rt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function cf(i){return _r(i)?i:new Proxy(i,$p)}var uf;class Zp{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[uf]=!1,this._dirty=!0,this.effect=new Nl(e,()=>{this._dirty||(this._dirty=!0,qp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=Qe(this);return jp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}uf="__v_isReadonly";function Kp(i,e,t=!1){let n,r;const s=Ve(i);return s?(n=i,r=pn):(n=i.get,r=i.set),new Zp(n,r,s||!r,t)}function ai(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){Vo(s,e,t)}return r}function tn(i,e,t,n){if(Ve(i)){const s=ai(i,e,t,n);return s&&qh(s)&&s.catch(o=>{Vo(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(tn(i[s],e,t,n));return r}function Vo(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ai(l,null,10,[i,o,a]);return}}Jp(i,t,r,n)}function Jp(i,e,t,n=!0){console.error(i)}let us=!1,il=!1;const St=[];let bn=0;const vr=[];let Nn=null,Ai=0;const hf=Promise.resolve();let Wl=null;function Qp(i){const e=Wl||hf;return i?e.then(this?i.bind(this):i):e}function em(i){let e=bn+1,t=St.length;for(;e<t;){const n=e+t>>>1;hs(St[n])<i?e=n+1:t=n}return e}function Xl(i){(!St.length||!St.includes(i,us&&i.allowRecurse?bn+1:bn))&&(i.id==null?St.push(i):St.splice(em(i.id),0,i),ff())}function ff(){!us&&!il&&(il=!0,Wl=hf.then(pf))}function tm(i){const e=St.indexOf(i);e>bn&&St.splice(e,1)}function nm(i){ze(i)?vr.push(...i):(!Nn||!Nn.includes(i,i.allowRecurse?Ai+1:Ai))&&vr.push(i),ff()}function Oc(i,e=us?bn+1:0){for(;e<St.length;e++){const t=St[e];t&&t.pre&&(St.splice(e,1),e--,t())}}function df(i){if(vr.length){const e=[...new Set(vr)];if(vr.length=0,Nn){Nn.push(...e);return}for(Nn=e,Nn.sort((t,n)=>hs(t)-hs(n)),Ai=0;Ai<Nn.length;Ai++)Nn[Ai]();Nn=null,Ai=0}}const hs=i=>i.id==null?1/0:i.id,im=(i,e)=>{const t=hs(i)-hs(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function pf(i){il=!1,us=!0,St.sort(im);const e=pn;try{for(bn=0;bn<St.length;bn++){const t=St[bn];t&&t.active!==!1&&ai(t,null,14)}}finally{bn=0,St.length=0,df(),us=!1,Wl=null,(St.length||vr.length)&&pf()}}function rm(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||nt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||nt;f&&(r=t.map(p=>p.trim())),h&&(r=t.map(gp))}let a,l=n[a=ia(e)]||n[a=ia(br(e))];!l&&s&&(l=n[a=ia(Dr(e))]),l&&tn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,tn(c,i,6,r)}}function mf(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Ve(i)){const l=c=>{const u=mf(c,e,!0);u&&(a=!0,Tt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(ht(i)&&n.set(i,null),null):(ze(s)?s.forEach(l=>o[l]=null):Tt(o,s),ht(i)&&n.set(i,o),o)}function Go(i,e){return!i||!zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Xe(i,e[0].toLowerCase()+e.slice(1))||Xe(i,Dr(e))||Xe(i,e))}let Tn=null,gf=null;function bo(i){const e=Tn;return Tn=i,gf=i&&i.type.__scopeId||null,e}function sm(i,e=Tn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Xc(-1);const s=bo(e);let o;try{o=i(...r)}finally{bo(s),n._d&&Xc(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function sa(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:m}=i;let d,_;const w=bo(i);try{if(t.shapeFlag&4){const b=r||n;d=yn(u.call(b,b,h,s,p,f,g)),_=l}else{const b=e;d=yn(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),_=e.props?l:om(l)}}catch(b){os.length=0,Vo(b,i,1),d=Fi(Bn)}let y=d;if(_&&m!==!1){const b=Object.keys(_),{shapeFlag:M}=y;b.length&&M&7&&(o&&b.some(Dl)&&(_=am(_,o)),y=hi(y,_))}return t.dirs&&(y=hi(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),d=y,bo(w),d}const om=i=>{let e;for(const t in i)(t==="class"||t==="style"||zo(t))&&((e||(e={}))[t]=i[t]);return e},am=(i,e)=>{const t={};for(const n in i)(!Dl(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function lm(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Nc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Go(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Nc(n,o,c):!0:!!o;return!1}function Nc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Go(t,s))return!0}return!1}function cm({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const um=i=>i.__isSuspense;function hm(i,e){e&&e.pendingBranch?ze(i)?e.effects.push(...i):e.effects.push(i):nm(i)}function fm(i,e){if(xt){let t=xt.provides;const n=xt.parent&&xt.parent.provides;n===t&&(t=xt.provides=Object.create(n)),t[i]=e}}function oa(i,e,t=!1){const n=xt||Tn;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Ve(e)?e.call(n.proxy):e}}const zc={};function aa(i,e,t){return _f(i,e,t)}function _f(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=nt){const a=xt;let l,c=!1,u=!1;if(Rt(i)?(l=()=>i.value,c=nl(i)):_r(i)?(l=()=>i,n=!0):ze(i)?(u=!0,c=i.some(_=>_r(_)||nl(_)),l=()=>i.map(_=>{if(Rt(_))return _.value;if(_r(_))return dr(_);if(Ve(_))return ai(_,a,2)})):Ve(i)?e?l=()=>ai(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),tn(i,a,3,[f])}:l=pn,e&&n){const _=l;l=()=>dr(_())}let h,f=_=>{h=d.onStop=()=>{ai(_,a,4)}};if(ds)return f=pn,e?t&&tn(e,a,3,[l(),u?[]:void 0,f]):l(),pn;let p=u?[]:zc;const g=()=>{if(!!d.active)if(e){const _=d.run();(n||c||(u?_.some((w,y)=>yo(w,p[y])):yo(_,p)))&&(h&&h(),tn(e,a,3,[_,p===zc?void 0:p,f]),p=_)}else d.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>zt(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>Xl(g));const d=new Nl(l,m);return e?t?g():p=d.run():r==="post"?zt(d.run.bind(d),a&&a.suspense):d.run(),()=>{d.stop(),a&&a.scope&&Rl(a.scope.effects,d)}}function dm(i,e,t){const n=this.proxy,r=Et(i)?i.includes(".")?vf(n,i):()=>n[i]:i.bind(n,n);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=xt;wr(this);const a=_f(r,s.bind(n),t);return o?wr(o):Oi(),a}function vf(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function dr(i,e){if(!ht(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Rt(i))dr(i.value,e);else if(ze(i))for(let t=0;t<i.length;t++)dr(i[t],e);else if(up(i)||ss(i))i.forEach(t=>{dr(t,e)});else if(dp(i))for(const t in i)dr(i[t],e);return i}function pm(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jl(()=>{i.isMounted=!0}),bf(()=>{i.isUnmounting=!0}),i}const $t=[Function,Array],mm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},setup(i,{slots:e}){const t=ig(),n=pm();let r;return()=>{const s=e.default&&yf(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==Bn){o=m;break}}const a=Qe(i),{mode:l}=a;if(n.isLeaving)return la(o);const c=Uc(o);if(!c)return la(o);const u=rl(c,a,n,t);sl(c,u);const h=t.subTree,f=h&&Uc(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();r===void 0?r=m:m!==r&&(r=m,p=!0)}if(f&&f.type!==Bn&&(!Ci(c,f)||p)){const m=rl(f,a,n,t);if(sl(f,m),l==="out-in")return n.isLeaving=!0,m.afterLeave=()=>{n.isLeaving=!1,t.update()},la(o);l==="in-out"&&c.type!==Bn&&(m.delayLeave=(d,_,w)=>{const y=xf(n,f);y[String(f.key)]=f,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},gm=mm;function xf(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function rl(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:d,onAfterAppear:_,onAppearCancelled:w}=e,y=String(i.key),b=xf(t,i),M=(v,A)=>{v&&tn(v,n,9,A)},C=(v,A)=>{const D=A[1];M(v,A),ze(v)?v.every(Z=>Z.length<=1)&&D():v.length<=1&&D()},R={mode:s,persisted:o,beforeEnter(v){let A=a;if(!t.isMounted)if(r)A=m||a;else return;v._leaveCb&&v._leaveCb(!0);const D=b[y];D&&Ci(i,D)&&D.el._leaveCb&&D.el._leaveCb(),M(A,[v])},enter(v){let A=l,D=c,Z=u;if(!t.isMounted)if(r)A=d||l,D=_||c,Z=w||u;else return;let oe=!1;const B=v._enterCb=F=>{oe||(oe=!0,F?M(Z,[v]):M(D,[v]),R.delayedLeave&&R.delayedLeave(),v._enterCb=void 0)};A?C(A,[v,B]):B()},leave(v,A){const D=String(i.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return A();M(h,[v]);let Z=!1;const oe=v._leaveCb=B=>{Z||(Z=!0,A(),B?M(g,[v]):M(p,[v]),v._leaveCb=void 0,b[D]===i&&delete b[D])};b[D]=i,f?C(f,[v,oe]):oe()},clone(v){return rl(v,e,t,n)}};return R}function la(i){if(Ho(i))return i=hi(i),i.children=null,i}function Uc(i){return Ho(i)?i.children?i.children[0]:void 0:i}function sl(i,e){i.shapeFlag&6&&i.component?sl(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function yf(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===xn?(o.patchFlag&128&&r++,n=n.concat(yf(o.children,e,a))):(e||o.type!==Bn)&&n.push(a!=null?hi(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}const ho=i=>!!i.type.__asyncLoader,Ho=i=>i.type.__isKeepAlive;function _m(i,e){Mf(i,"a",e)}function vm(i,e){Mf(i,"da",e)}function Mf(i,e,t=xt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Wo(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Ho(r.parent.vnode)&&xm(n,e,t,r),r=r.parent}}function xm(i,e,t,n){const r=Wo(e,i,n,!0);wf(()=>{Rl(n[e],r)},t)}function Wo(i,e,t=xt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Rr(),wr(t);const a=tn(e,t,i,o);return Oi(),Ir(),a});return n?r.unshift(s):r.push(s),s}}const Xn=i=>(e,t=xt)=>(!ds||i==="sp")&&Wo(i,(...n)=>e(...n),t),ym=Xn("bm"),jl=Xn("m"),Mm=Xn("bu"),bm=Xn("u"),bf=Xn("bum"),wf=Xn("um"),wm=Xn("sp"),Sm=Xn("rtg"),Tm=Xn("rtc");function Em(i,e=xt){Wo("ec",i,e)}function xi(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Rr(),tn(l,t,8,[i.el,a,i,e]),Ir())}}const Am=Symbol(),ol=i=>i?Ff(i)?Kl(i)||i.proxy:ol(i.parent):null,wo=Tt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>ol(i.parent),$root:i=>ol(i.root),$emit:i=>i.emit,$options:i=>ql(i),$forceUpdate:i=>i.f||(i.f=()=>Xl(i.update)),$nextTick:i=>i.n||(i.n=Qp.bind(i.proxy)),$watch:i=>dm.bind(i)}),Cm={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(n!==nt&&Xe(n,e))return o[e]=1,n[e];if(r!==nt&&Xe(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Xe(c,e))return o[e]=3,s[e];if(t!==nt&&Xe(t,e))return o[e]=4,t[e];al&&(o[e]=0)}}const u=wo[e];let h,f;if(u)return e==="$attrs"&&jt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==nt&&Xe(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Xe(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return r!==nt&&Xe(r,e)?(r[e]=t,!0):n!==nt&&Xe(n,e)?(n[e]=t,!0):Xe(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==nt&&Xe(i,o)||e!==nt&&Xe(e,o)||(a=s[0])&&Xe(a,o)||Xe(n,o)||Xe(wo,o)||Xe(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Xe(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let al=!0;function Lm(i){const e=ql(i),t=i.proxy,n=i.ctx;al=!1,e.beforeCreate&&Bc(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:w,destroyed:y,unmounted:b,render:M,renderTracked:C,renderTriggered:R,errorCaptured:v,serverPrefetch:A,expose:D,inheritAttrs:Z,components:oe,directives:B,filters:F}=e;if(c&&Pm(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const X in o){const V=o[X];Ve(V)&&(n[X]=V.bind(t))}if(r){const X=r.call(t,t);ht(X)&&(i.data=kl(X))}if(al=!0,s)for(const X in s){const V=s[X],z=Ve(V)?V.bind(t,t):Ve(V.get)?V.get.bind(t,t):pn,G=!Ve(V)&&Ve(V.set)?V.set.bind(t):pn,se=cg({get:z,set:G});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>se.value,set:re=>se.value=re})}if(a)for(const X in a)Sf(a[X],n,t,X);if(l){const X=Ve(l)?l.call(t):l;Reflect.ownKeys(X).forEach(V=>{fm(V,X[V])})}u&&Bc(u,i,"c");function j(X,V){ze(V)?V.forEach(z=>X(z.bind(t))):V&&X(V.bind(t))}if(j(ym,h),j(jl,f),j(Mm,p),j(bm,g),j(_m,m),j(vm,d),j(Em,v),j(Tm,C),j(Sm,R),j(bf,w),j(wf,b),j(wm,A),ze(D))if(D.length){const X=i.exposed||(i.exposed={});D.forEach(V=>{Object.defineProperty(X,V,{get:()=>t[V],set:z=>t[V]=z})})}else i.exposed||(i.exposed={});M&&i.render===pn&&(i.render=M),Z!=null&&(i.inheritAttrs=Z),oe&&(i.components=oe),B&&(i.directives=B)}function Pm(i,e,t=pn,n=!1){ze(i)&&(i=ll(i));for(const r in i){const s=i[r];let o;ht(s)?"default"in s?o=oa(s.from||r,s.default,!0):o=oa(s.from||r):o=oa(s),Rt(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Bc(i,e,t){tn(ze(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Sf(i,e,t,n){const r=n.includes(".")?vf(t,n):()=>t[n];if(Et(i)){const s=e[i];Ve(s)&&aa(r,s)}else if(Ve(i))aa(r,i.bind(t));else if(ht(i))if(ze(i))i.forEach(s=>Sf(s,e,t,n));else{const s=Ve(i.handler)?i.handler.bind(t):e[i.handler];Ve(s)&&aa(r,s,i)}}function ql(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>So(l,c,o,!0)),So(l,e,o)),ht(e)&&s.set(e,l),l}function So(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&So(i,s,t,!0),r&&r.forEach(o=>So(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Dm[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Dm={data:kc,props:Si,emits:Si,methods:Si,computed:Si,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Si,directives:Si,watch:Im,provide:kc,inject:Rm};function kc(i,e){return e?i?function(){return Tt(Ve(i)?i.call(this,this):i,Ve(e)?e.call(this,this):e)}:e:i}function Rm(i,e){return Si(ll(i),ll(e))}function ll(i){if(ze(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Ct(i,e){return i?[...new Set([].concat(i,e))]:e}function Si(i,e){return i?Tt(Tt(Object.create(null),i),e):e}function Im(i,e){if(!i)return e;if(!e)return i;const t=Tt(Object.create(null),i);for(const n in e)t[n]=Ct(i[n],e[n]);return t}function Fm(i,e,t,n=!1){const r={},s={};Mo(s,Xo,1),i.propsDefaults=Object.create(null),Tf(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Xp(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Om(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=Qe(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Go(i.emitsOptions,f))continue;const p=e[f];if(l)if(Xe(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=br(f);r[g]=cl(l,a,g,p,i,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Tf(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Xe(e,h)&&((u=Dr(h))===h||!Xe(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=cl(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Xe(e,h)&&!0)&&(delete s[h],c=!0)}c&&Vn(i,"set","$attrs")}function Tf(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(uo(l))continue;const c=e[l];let u;r&&Xe(r,u=br(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Go(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Qe(t),c=a||nt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=cl(r,l,h,c[h],i,!Xe(c,h))}}return o}function cl(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Xe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ve(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(wr(r),n=c[t]=l.call(null,e),Oi())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Dr(t))&&(n=!0))}return n}function Ef(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Ve(i)){const u=h=>{l=!0;const[f,p]=Ef(h,e,!0);Tt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return ht(i)&&n.set(i,gr),gr;if(ze(s))for(let u=0;u<s.length;u++){const h=br(s[u]);Vc(h)&&(o[h]=nt)}else if(s)for(const u in s){const h=br(u);if(Vc(h)){const f=s[u],p=o[h]=ze(f)||Ve(f)?{type:f}:f;if(p){const g=Wc(Boolean,p.type),m=Wc(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||Xe(p,"default"))&&a.push(h)}}}const c=[o,a];return ht(i)&&n.set(i,c),c}function Vc(i){return i[0]!=="$"}function Gc(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function Hc(i,e){return Gc(i)===Gc(e)}function Wc(i,e){return ze(e)?e.findIndex(t=>Hc(t,i)):Ve(e)&&Hc(e,i)?0:-1}const Af=i=>i[0]==="_"||i==="$stable",Yl=i=>ze(i)?i.map(yn):[yn(i)],Nm=(i,e,t)=>{if(e._n)return e;const n=sm((...r)=>Yl(e(...r)),t);return n._c=!1,n},Cf=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Af(r))continue;const s=i[r];if(Ve(s))e[r]=Nm(r,s,n);else if(s!=null){const o=Yl(s);e[r]=()=>o}}},Lf=(i,e)=>{const t=Yl(e);i.slots.default=()=>t},zm=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Qe(e),Mo(e,"_",t)):Cf(e,i.slots={})}else i.slots={},e&&Lf(i,e);Mo(i.slots,Xo,1)},Um=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=nt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Tt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Cf(e,r)),o=e}else e&&(Lf(i,e),o={default:1});if(s)for(const a in r)!Af(a)&&!(a in o)&&delete r[a]};function Pf(){return{app:null,config:{isNativeTag:ap,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bm=0;function km(i,e){return function(n,r=null){Ve(n)||(n=Object.assign({},n)),r!=null&&!ht(r)&&(r=null);const s=Pf(),o=new Set;let a=!1;const l=s.app={_uid:Bm++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:ug,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ve(c.install)?(o.add(c),c.install(l,...u)):Ve(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Fi(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Kl(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function ul(i,e,t,n,r=!1){if(ze(i)){i.forEach((f,p)=>ul(f,e&&(ze(e)?e[p]:e),t,n,r));return}if(ho(n)&&!r)return;const s=n.shapeFlag&4?Kl(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Et(c)?(u[c]=null,Xe(h,c)&&(h[c]=null)):Rt(c)&&(c.value=null)),Ve(l))ai(l,a,12,[o,u]);else{const f=Et(l),p=Rt(l);if(f||p){const g=()=>{if(i.f){const m=f?Xe(h,l)?h[l]:u[l]:l.value;r?ze(m)&&Rl(m,s):ze(m)?m.includes(s)||m.push(s):f?(u[l]=[s],Xe(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,Xe(h,l)&&(h[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,zt(g,t)):g()}}}const zt=hm;function Vm(i){return Gm(i)}function Gm(i,e){const t=_p();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=pn,insertStaticContent:g}=i,m=(E,P,W,Q=null,K=null,ue=null,he=!1,ie=null,fe=!!P.dynamicChildren)=>{if(E===P)return;E&&!Ci(E,P)&&(Q=Fe(E),re(E,K,ue,!0),E=null),P.patchFlag===-2&&(fe=!1,P.dynamicChildren=null);const{type:ae,ref:S,shapeFlag:x}=P;switch(ae){case $l:d(E,P,W,Q);break;case Bn:_(E,P,W,Q);break;case ca:E==null&&w(P,W,Q,he);break;case xn:oe(E,P,W,Q,K,ue,he,ie,fe);break;default:x&1?M(E,P,W,Q,K,ue,he,ie,fe):x&6?B(E,P,W,Q,K,ue,he,ie,fe):(x&64||x&128)&&ae.process(E,P,W,Q,K,ue,he,ie,fe,Ae)}S!=null&&K&&ul(S,E&&E.ref,ue,P||E,!P)},d=(E,P,W,Q)=>{if(E==null)n(P.el=a(P.children),W,Q);else{const K=P.el=E.el;P.children!==E.children&&c(K,P.children)}},_=(E,P,W,Q)=>{E==null?n(P.el=l(P.children||""),W,Q):P.el=E.el},w=(E,P,W,Q)=>{[E.el,E.anchor]=g(E.children,P,W,Q,E.el,E.anchor)},y=({el:E,anchor:P},W,Q)=>{let K;for(;E&&E!==P;)K=f(E),n(E,W,Q),E=K;n(P,W,Q)},b=({el:E,anchor:P})=>{let W;for(;E&&E!==P;)W=f(E),r(E),E=W;r(P)},M=(E,P,W,Q,K,ue,he,ie,fe)=>{he=he||P.type==="svg",E==null?C(P,W,Q,K,ue,he,ie,fe):A(E,P,K,ue,he,ie,fe)},C=(E,P,W,Q,K,ue,he,ie)=>{let fe,ae;const{type:S,props:x,shapeFlag:N,transition:Y,dirs:ee}=E;if(fe=E.el=o(E.type,ue,x&&x.is,x),N&8?u(fe,E.children):N&16&&v(E.children,fe,null,Q,K,ue&&S!=="foreignObject",he,ie),ee&&xi(E,null,Q,"created"),x){for(const ge in x)ge!=="value"&&!uo(ge)&&s(fe,ge,null,x[ge],ue,E.children,Q,K,$);"value"in x&&s(fe,"value",null,x.value),(ae=x.onVnodeBeforeMount)&&gn(ae,Q,E)}R(fe,E,E.scopeId,he,Q),ee&&xi(E,null,Q,"beforeMount");const ce=(!K||K&&!K.pendingBranch)&&Y&&!Y.persisted;ce&&Y.beforeEnter(fe),n(fe,P,W),((ae=x&&x.onVnodeMounted)||ce||ee)&&zt(()=>{ae&&gn(ae,Q,E),ce&&Y.enter(fe),ee&&xi(E,null,Q,"mounted")},K)},R=(E,P,W,Q,K)=>{if(W&&p(E,W),Q)for(let ue=0;ue<Q.length;ue++)p(E,Q[ue]);if(K){let ue=K.subTree;if(P===ue){const he=K.vnode;R(E,he,he.scopeId,he.slotScopeIds,K.parent)}}},v=(E,P,W,Q,K,ue,he,ie,fe=0)=>{for(let ae=fe;ae<E.length;ae++){const S=E[ae]=ie?ii(E[ae]):yn(E[ae]);m(null,S,P,W,Q,K,ue,he,ie)}},A=(E,P,W,Q,K,ue,he)=>{const ie=P.el=E.el;let{patchFlag:fe,dynamicChildren:ae,dirs:S}=P;fe|=E.patchFlag&16;const x=E.props||nt,N=P.props||nt;let Y;W&&yi(W,!1),(Y=N.onVnodeBeforeUpdate)&&gn(Y,W,P,E),S&&xi(P,E,W,"beforeUpdate"),W&&yi(W,!0);const ee=K&&P.type!=="foreignObject";if(ae?D(E.dynamicChildren,ae,ie,W,Q,ee,ue):he||V(E,P,ie,null,W,Q,ee,ue,!1),fe>0){if(fe&16)Z(ie,P,x,N,W,Q,K);else if(fe&2&&x.class!==N.class&&s(ie,"class",null,N.class,K),fe&4&&s(ie,"style",x.style,N.style,K),fe&8){const ce=P.dynamicProps;for(let ge=0;ge<ce.length;ge++){const L=ce[ge],U=x[L],_e=N[L];(_e!==U||L==="value")&&s(ie,L,U,_e,K,E.children,W,Q,$)}}fe&1&&E.children!==P.children&&u(ie,P.children)}else!he&&ae==null&&Z(ie,P,x,N,W,Q,K);((Y=N.onVnodeUpdated)||S)&&zt(()=>{Y&&gn(Y,W,P,E),S&&xi(P,E,W,"updated")},Q)},D=(E,P,W,Q,K,ue,he)=>{for(let ie=0;ie<P.length;ie++){const fe=E[ie],ae=P[ie],S=fe.el&&(fe.type===xn||!Ci(fe,ae)||fe.shapeFlag&70)?h(fe.el):W;m(fe,ae,S,null,Q,K,ue,he,!0)}},Z=(E,P,W,Q,K,ue,he)=>{if(W!==Q){if(W!==nt)for(const ie in W)!uo(ie)&&!(ie in Q)&&s(E,ie,W[ie],null,he,P.children,K,ue,$);for(const ie in Q){if(uo(ie))continue;const fe=Q[ie],ae=W[ie];fe!==ae&&ie!=="value"&&s(E,ie,ae,fe,he,P.children,K,ue,$)}"value"in Q&&s(E,"value",W.value,Q.value)}},oe=(E,P,W,Q,K,ue,he,ie,fe)=>{const ae=P.el=E?E.el:a(""),S=P.anchor=E?E.anchor:a("");let{patchFlag:x,dynamicChildren:N,slotScopeIds:Y}=P;Y&&(ie=ie?ie.concat(Y):Y),E==null?(n(ae,W,Q),n(S,W,Q),v(P.children,W,S,K,ue,he,ie,fe)):x>0&&x&64&&N&&E.dynamicChildren?(D(E.dynamicChildren,N,W,K,ue,he,ie),(P.key!=null||K&&P===K.subTree)&&Df(E,P,!0)):V(E,P,W,S,K,ue,he,ie,fe)},B=(E,P,W,Q,K,ue,he,ie,fe)=>{P.slotScopeIds=ie,E==null?P.shapeFlag&512?K.ctx.activate(P,W,Q,he,fe):F(P,W,Q,K,ue,he,fe):q(E,P,fe)},F=(E,P,W,Q,K,ue,he)=>{const ie=E.component=ng(E,Q,K);if(Ho(E)&&(ie.ctx.renderer=Ae),rg(ie),ie.asyncDep){if(K&&K.registerDep(ie,j),!E.el){const fe=ie.subTree=Fi(Bn);_(null,fe,P,W)}return}j(ie,E,P,W,K,ue,he)},q=(E,P,W)=>{const Q=P.component=E.component;if(lm(E,P,W))if(Q.asyncDep&&!Q.asyncResolved){X(Q,P,W);return}else Q.next=P,tm(Q.update),Q.update();else P.el=E.el,Q.vnode=P},j=(E,P,W,Q,K,ue,he)=>{const ie=()=>{if(E.isMounted){let{next:S,bu:x,u:N,parent:Y,vnode:ee}=E,ce=S,ge;yi(E,!1),S?(S.el=ee.el,X(E,S,he)):S=ee,x&&ra(x),(ge=S.props&&S.props.onVnodeBeforeUpdate)&&gn(ge,Y,S,ee),yi(E,!0);const L=sa(E),U=E.subTree;E.subTree=L,m(U,L,h(U.el),Fe(U),E,K,ue),S.el=L.el,ce===null&&cm(E,L.el),N&&zt(N,K),(ge=S.props&&S.props.onVnodeUpdated)&&zt(()=>gn(ge,Y,S,ee),K)}else{let S;const{el:x,props:N}=P,{bm:Y,m:ee,parent:ce}=E,ge=ho(P);if(yi(E,!1),Y&&ra(Y),!ge&&(S=N&&N.onVnodeBeforeMount)&&gn(S,ce,P),yi(E,!0),x&&Ge){const L=()=>{E.subTree=sa(E),Ge(x,E.subTree,E,K,null)};ge?P.type.__asyncLoader().then(()=>!E.isUnmounted&&L()):L()}else{const L=E.subTree=sa(E);m(null,L,W,Q,E,K,ue),P.el=L.el}if(ee&&zt(ee,K),!ge&&(S=N&&N.onVnodeMounted)){const L=P;zt(()=>gn(S,ce,L),K)}(P.shapeFlag&256||ce&&ho(ce.vnode)&&ce.vnode.shapeFlag&256)&&E.a&&zt(E.a,K),E.isMounted=!0,P=W=Q=null}},fe=E.effect=new Nl(ie,()=>Xl(ae),E.scope),ae=E.update=()=>fe.run();ae.id=E.uid,yi(E,!0),ae()},X=(E,P,W)=>{P.component=E;const Q=E.vnode.props;E.vnode=P,E.next=null,Om(E,P.props,Q,W),Um(E,P.children,W),Rr(),Oc(),Ir()},V=(E,P,W,Q,K,ue,he,ie,fe=!1)=>{const ae=E&&E.children,S=E?E.shapeFlag:0,x=P.children,{patchFlag:N,shapeFlag:Y}=P;if(N>0){if(N&128){G(ae,x,W,Q,K,ue,he,ie,fe);return}else if(N&256){z(ae,x,W,Q,K,ue,he,ie,fe);return}}Y&8?(S&16&&$(ae,K,ue),x!==ae&&u(W,x)):S&16?Y&16?G(ae,x,W,Q,K,ue,he,ie,fe):$(ae,K,ue,!0):(S&8&&u(W,""),Y&16&&v(x,W,Q,K,ue,he,ie,fe))},z=(E,P,W,Q,K,ue,he,ie,fe)=>{E=E||gr,P=P||gr;const ae=E.length,S=P.length,x=Math.min(ae,S);let N;for(N=0;N<x;N++){const Y=P[N]=fe?ii(P[N]):yn(P[N]);m(E[N],Y,W,null,K,ue,he,ie,fe)}ae>S?$(E,K,ue,!0,!1,x):v(P,W,Q,K,ue,he,ie,fe,x)},G=(E,P,W,Q,K,ue,he,ie,fe)=>{let ae=0;const S=P.length;let x=E.length-1,N=S-1;for(;ae<=x&&ae<=N;){const Y=E[ae],ee=P[ae]=fe?ii(P[ae]):yn(P[ae]);if(Ci(Y,ee))m(Y,ee,W,null,K,ue,he,ie,fe);else break;ae++}for(;ae<=x&&ae<=N;){const Y=E[x],ee=P[N]=fe?ii(P[N]):yn(P[N]);if(Ci(Y,ee))m(Y,ee,W,null,K,ue,he,ie,fe);else break;x--,N--}if(ae>x){if(ae<=N){const Y=N+1,ee=Y<S?P[Y].el:Q;for(;ae<=N;)m(null,P[ae]=fe?ii(P[ae]):yn(P[ae]),W,ee,K,ue,he,ie,fe),ae++}}else if(ae>N)for(;ae<=x;)re(E[ae],K,ue,!0),ae++;else{const Y=ae,ee=ae,ce=new Map;for(ae=ee;ae<=N;ae++){const ye=P[ae]=fe?ii(P[ae]):yn(P[ae]);ye.key!=null&&ce.set(ye.key,ae)}let ge,L=0;const U=N-ee+1;let _e=!1,Me=0;const ve=new Array(U);for(ae=0;ae<U;ae++)ve[ae]=0;for(ae=Y;ae<=x;ae++){const ye=E[ae];if(L>=U){re(ye,K,ue,!0);continue}let Pe;if(ye.key!=null)Pe=ce.get(ye.key);else for(ge=ee;ge<=N;ge++)if(ve[ge-ee]===0&&Ci(ye,P[ge])){Pe=ge;break}Pe===void 0?re(ye,K,ue,!0):(ve[Pe-ee]=ae+1,Pe>=Me?Me=Pe:_e=!0,m(ye,P[Pe],W,null,K,ue,he,ie,fe),L++)}const Se=_e?Hm(ve):gr;for(ge=Se.length-1,ae=U-1;ae>=0;ae--){const ye=ee+ae,Pe=P[ye],Be=ye+1<S?P[ye+1].el:Q;ve[ae]===0?m(null,Pe,W,Be,K,ue,he,ie,fe):_e&&(ge<0||ae!==Se[ge]?se(Pe,W,Be,2):ge--)}}},se=(E,P,W,Q,K=null)=>{const{el:ue,type:he,transition:ie,children:fe,shapeFlag:ae}=E;if(ae&6){se(E.component.subTree,P,W,Q);return}if(ae&128){E.suspense.move(P,W,Q);return}if(ae&64){he.move(E,P,W,Ae);return}if(he===xn){n(ue,P,W);for(let x=0;x<fe.length;x++)se(fe[x],P,W,Q);n(E.anchor,P,W);return}if(he===ca){y(E,P,W);return}if(Q!==2&&ae&1&&ie)if(Q===0)ie.beforeEnter(ue),n(ue,P,W),zt(()=>ie.enter(ue),K);else{const{leave:x,delayLeave:N,afterLeave:Y}=ie,ee=()=>n(ue,P,W),ce=()=>{x(ue,()=>{ee(),Y&&Y()})};N?N(ue,ee,ce):ce()}else n(ue,P,W)},re=(E,P,W,Q=!1,K=!1)=>{const{type:ue,props:he,ref:ie,children:fe,dynamicChildren:ae,shapeFlag:S,patchFlag:x,dirs:N}=E;if(ie!=null&&ul(ie,null,W,E,!0),S&256){P.ctx.deactivate(E);return}const Y=S&1&&N,ee=!ho(E);let ce;if(ee&&(ce=he&&he.onVnodeBeforeUnmount)&&gn(ce,P,E),S&6)we(E.component,W,Q);else{if(S&128){E.suspense.unmount(W,Q);return}Y&&xi(E,null,P,"beforeUnmount"),S&64?E.type.remove(E,P,W,K,Ae,Q):ae&&(ue!==xn||x>0&&x&64)?$(ae,P,W,!1,!0):(ue===xn&&x&384||!K&&S&16)&&$(fe,P,W),Q&&le(E)}(ee&&(ce=he&&he.onVnodeUnmounted)||Y)&&zt(()=>{ce&&gn(ce,P,E),Y&&xi(E,null,P,"unmounted")},W)},le=E=>{const{type:P,el:W,anchor:Q,transition:K}=E;if(P===xn){pe(W,Q);return}if(P===ca){b(E);return}const ue=()=>{r(W),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(E.shapeFlag&1&&K&&!K.persisted){const{leave:he,delayLeave:ie}=K,fe=()=>he(W,ue);ie?ie(E.el,ue,fe):fe()}else ue()},pe=(E,P)=>{let W;for(;E!==P;)W=f(E),r(E),E=W;r(P)},we=(E,P,W)=>{const{bum:Q,scope:K,update:ue,subTree:he,um:ie}=E;Q&&ra(Q),K.stop(),ue&&(ue.active=!1,re(he,E,P,W)),ie&&zt(ie,P),zt(()=>{E.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},$=(E,P,W,Q=!1,K=!1,ue=0)=>{for(let he=ue;he<E.length;he++)re(E[he],P,W,Q,K)},Fe=E=>E.shapeFlag&6?Fe(E.component.subTree):E.shapeFlag&128?E.suspense.next():f(E.anchor||E.el),Te=(E,P,W)=>{E==null?P._vnode&&re(P._vnode,null,null,!0):m(P._vnode||null,E,P,null,null,null,W),Oc(),df(),P._vnode=E},Ae={p:m,um:re,m:se,r:le,mt:F,mc:v,pc:V,pbc:D,n:Fe,o:i};let xe,Ge;return e&&([xe,Ge]=e(Ae)),{render:Te,hydrate:xe,createApp:km(Te,xe)}}function yi({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Df(i,e,t=!1){const n=i.children,r=e.children;if(ze(n)&&ze(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ii(r[s]),a.el=o.el),t||Df(o,a))}}function Hm(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Wm=i=>i.__isTeleport,xn=Symbol(void 0),$l=Symbol(void 0),Bn=Symbol(void 0),ca=Symbol(void 0),os=[];let fn=null;function Xm(i=!1){os.push(fn=i?null:[])}function jm(){os.pop(),fn=os[os.length-1]||null}let fs=1;function Xc(i){fs+=i}function qm(i){return i.dynamicChildren=fs>0?fn||gr:null,jm(),fs>0&&fn&&fn.push(i),i}function Ym(i,e,t,n,r,s){return qm(If(i,e,t,n,r,s,!0))}function $m(i){return i?i.__v_isVNode===!0:!1}function Ci(i,e){return i.type===e.type&&i.key===e.key}const Xo="__vInternal",Rf=({key:i})=>i!=null?i:null,fo=({ref:i,ref_key:e,ref_for:t})=>i!=null?Et(i)||Rt(i)||Ve(i)?{i:Tn,r:i,k:e,f:!!t}:i:null;function If(i,e=null,t=null,n=0,r=null,s=i===xn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Rf(e),ref:e&&fo(e),scopeId:gf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Zl(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),fs>0&&!o&&fn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&fn.push(l),l}const Fi=Zm;function Zm(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Am)&&(i=Bn),$m(i)){const a=hi(i,e,!0);return t&&Zl(a,t),fs>0&&!s&&fn&&(a.shapeFlag&6?fn[fn.indexOf(i)]=a:fn.push(a)),a.patchFlag|=-2,a}if(lg(i)&&(i=i.__vccOpts),e){e=Km(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=Pl(a)),ht(l)&&(af(l)&&!ze(l)&&(l=Tt({},l)),e.style=Ll(l))}const o=Et(i)?1:um(i)?128:Wm(i)?64:ht(i)?4:Ve(i)?2:0;return If(i,e,t,n,r,o,s,!0)}function Km(i){return i?af(i)||Xo in i?Tt({},i):i:null}function hi(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?Qm(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Rf(a),ref:e&&e.ref?t&&r?ze(r)?r.concat(fo(e)):[r,fo(e)]:fo(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==xn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&hi(i.ssContent),ssFallback:i.ssFallback&&hi(i.ssFallback),el:i.el,anchor:i.anchor}}function Jm(i=" ",e=0){return Fi($l,null,i,e)}function yn(i){return i==null||typeof i=="boolean"?Fi(Bn):ze(i)?Fi(xn,null,i.slice()):typeof i=="object"?ii(i):Fi($l,null,String(i))}function ii(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:hi(i)}function Zl(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Zl(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Xo in e)?e._ctx=Tn:r===3&&Tn&&(Tn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:Tn},t=32):(e=String(e),n&64?(t=16,e=[Jm(e)]):t=8);i.children=e,i.shapeFlag|=t}function Qm(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Pl([e.class,n.class]));else if(r==="style")e.style=Ll([e.style,n.style]);else if(zo(r)){const s=e[r],o=n[r];o&&s!==o&&!(ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function gn(i,e,t,n=null){tn(i,e,7,[t,n])}const eg=Pf();let tg=0;function ng(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||eg,s={uid:tg++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ef(n,r),emitsOptions:mf(n,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:n.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=rm.bind(null,s),i.ce&&i.ce(s),s}let xt=null;const ig=()=>xt||Tn,wr=i=>{xt=i,i.scope.on()},Oi=()=>{xt&&xt.scope.off(),xt=null};function Ff(i){return i.vnode.shapeFlag&4}let ds=!1;function rg(i,e=!1){ds=e;const{props:t,children:n}=i.vnode,r=Ff(i);Fm(i,t,r,e),zm(i,n);const s=r?sg(i,e):void 0;return ds=!1,s}function sg(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=lf(new Proxy(i.ctx,Cm));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?ag(i):null;wr(i),Rr();const s=ai(n,i,0,[i.props,r]);if(Ir(),Oi(),qh(s)){if(s.then(Oi,Oi),e)return s.then(o=>{jc(i,o,e)}).catch(o=>{Vo(o,i,0)});i.asyncDep=s}else jc(i,s,e)}else Of(i,e)}function jc(i,e,t){Ve(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ht(e)&&(i.setupState=cf(e)),Of(i,t)}let qc;function Of(i,e,t){const n=i.type;if(!i.render){if(!e&&qc&&!n.render){const r=n.template||ql(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Tt(Tt({isCustomElement:s,delimiters:a},o),l);n.render=qc(r,c)}}i.render=n.render||pn}wr(i),Rr(),Lm(i),Ir(),Oi()}function og(i){return new Proxy(i.attrs,{get(e,t){return jt(i,"get","$attrs"),e[t]}})}function ag(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=og(i))},slots:i.slots,emit:i.emit,expose:e}}function Kl(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(cf(lf(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in wo)return wo[t](i)}}))}function lg(i){return Ve(i)&&"__vccOpts"in i}const cg=(i,e)=>Kp(i,e,ds),ug="3.2.41",hg="http://www.w3.org/2000/svg",Li=typeof document<"u"?document:null,Yc=Li&&Li.createElement("template"),fg={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Li.createElementNS(hg,i):Li.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Li.createTextNode(i),createComment:i=>Li.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Li.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Yc.innerHTML=n?`<svg>${i}</svg>`:i;const a=Yc.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function dg(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function pg(i,e,t){const n=i.style,r=Et(t);if(t&&!r){for(const s in t)hl(n,s,t[s]);if(e&&!Et(e))for(const s in e)t[s]==null&&hl(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const $c=/\s*!important$/;function hl(i,e,t){if(ze(t))t.forEach(n=>hl(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=mg(i,e);$c.test(t)?i.setProperty(Dr(n),t.replace($c,""),"important"):i[n]=t}}const Zc=["Webkit","Moz","ms"],ua={};function mg(i,e){const t=ua[e];if(t)return t;let n=br(e);if(n!=="filter"&&n in i)return ua[e]=n;n=Yh(n);for(let r=0;r<Zc.length;r++){const s=Zc[r]+n;if(s in i)return ua[e]=s}return e}const Kc="http://www.w3.org/1999/xlink";function gg(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Kc,e.slice(6,e.length)):i.setAttributeNS(Kc,e,t);else{const s=ip(e);t==null||s&&!jh(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function _g(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=jh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function vg(i,e,t,n){i.addEventListener(e,t,n)}function xg(i,e,t,n){i.removeEventListener(e,t,n)}function yg(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Mg(e);if(n){const c=s[e]=Sg(n,r);vg(i,a,c,l)}else o&&(xg(i,a,o,l),s[e]=void 0)}}const Jc=/(?:Once|Passive|Capture)$/;function Mg(i){let e;if(Jc.test(i)){e={};let n;for(;n=i.match(Jc);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Dr(i.slice(2)),e]}let ha=0;const bg=Promise.resolve(),wg=()=>ha||(bg.then(()=>ha=0),ha=Date.now());function Sg(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;tn(Tg(n,t.value),e,5,[n])};return t.value=i,t.attached=wg(),t}function Tg(i,e){if(ze(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Qc=/^on[a-z]/,Eg=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?dg(i,n,r):e==="style"?pg(i,t,n):zo(e)?Dl(e)||yg(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ag(i,e,n,r))?_g(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),gg(i,e,n,r))};function Ag(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Qc.test(e)&&Ve(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Qc.test(e)&&Et(t)?!1:e in i}const Cg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};gm.props;const Lg=Tt({patchProp:Eg},fg);let eu;function Pg(){return eu||(eu=Vm(Lg))}const Dg=(...i)=>{const e=Pg().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Rg(n);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Rg(i){return Et(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="146",ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ig=0,tu=1,Fg=2,Nf=1,Og=2,es=3,Sr=0,nn=1,ri=2,li=0,xr=1,nu=2,iu=3,ru=4,Ng=5,cr=100,zg=101,Ug=102,su=103,ou=104,Bg=200,kg=201,Vg=202,Gg=203,zf=204,Uf=205,Hg=206,Wg=207,Xg=208,jg=209,qg=210,Yg=0,$g=1,Zg=2,fl=3,Kg=4,Jg=5,Qg=6,e0=7,jo=0,t0=1,n0=2,kn=0,i0=1,r0=2,s0=3,o0=4,a0=5,Bf=300,Tr=301,Er=302,To=303,dl=304,qo=306,ps=1e3,Ht=1001,pl=1002,bt=1003,au=1004,lu=1005,Jt=1006,l0=1007,Yo=1008,Ui=1009,c0=1010,u0=1011,kf=1012,h0=1013,Di=1014,si=1015,ms=1016,f0=1017,d0=1018,yr=1020,p0=1021,m0=1022,Qt=1023,g0=1024,_0=1025,Ni=1026,Ar=1027,v0=1028,x0=1029,y0=1030,M0=1031,b0=1033,fa=33776,da=33777,pa=33778,ma=33779,cu=35840,uu=35841,hu=35842,fu=35843,w0=36196,du=37492,pu=37496,mu=37808,gu=37809,_u=37810,vu=37811,xu=37812,yu=37813,Mu=37814,bu=37815,wu=37816,Su=37817,Tu=37818,Eu=37819,Au=37820,Cu=37821,Lu=36492,Eo=2300,Ao=2301,ga=2302,Pu=2400,Du=2401,Ru=2402,S0=2500,Bi=3e3,tt=3001,T0=3200,E0=3201,Ql=0,A0=1,zn="srgb",Ri="srgb-linear",_a=7680,C0=519,Iu=35044,Fu="300 es",ml=1035;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ou=1234567;const Mr=Math.PI/180,gs=180/Math.PI;function di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function ec(i,e){return(i%e+e)%e}function L0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function P0(i,e,t){return i!==e?(t-i)/(e-i):0}function as(i,e,t){return(1-t)*i+t*e}function D0(i,e,t,n){return as(i,e,1-Math.exp(-t*n))}function R0(i,e=1){return e-Math.abs(ec(i,e*2)-e)}function I0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function F0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function O0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function N0(i,e){return i+Math.random()*(e-i)}function z0(i){return i*(.5-Math.random())}function U0(i){i!==void 0&&(Ou=i);let e=Ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function B0(i){return i*Mr}function k0(i){return i*gs}function gl(i){return(i&i-1)===0&&i!==0}function Vf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Co(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function V0(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ts(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var wn=Object.freeze({__proto__:null,DEG2RAD:Mr,RAD2DEG:gs,generateUUID:di,clamp:vt,euclideanModulo:ec,mapLinear:L0,inverseLerp:P0,lerp:as,damp:D0,pingpong:R0,smoothstep:I0,smootherstep:F0,randInt:O0,randFloat:N0,randFloatSpread:z0,seededRandom:U0,degToRad:B0,radToDeg:k0,isPowerOfTwo:gl,ceilPowerOfTwo:Vf,floorPowerOfTwo:Co,setQuaternionFromProperEuler:V0,normalize:Ot,denormalize:ts});class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],m=r[0],d=r[3],_=r[6],w=r[1],y=r[4],b=r[7],M=r[2],C=r[5],R=r[8];return s[0]=o*m+a*w+l*M,s[3]=o*d+a*y+l*C,s[6]=o*_+a*b+l*R,s[1]=c*m+u*w+h*M,s[4]=c*d+u*y+h*C,s[7]=c*_+u*b+h*R,s[2]=f*m+p*w+g*M,s[5]=f*d+p*y+g*C,s[8]=f*_+p*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(r*c-u*n)*m,e[2]=(a*n-r*o)*m,e[3]=f*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Gf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function po(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const va={[zn]:{[Ri]:zi},[Ri]:{[zn]:po}},an={legacyMode:!0,get workingColorSpace(){return Ri},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(va[e]&&va[e][t]!==void 0){const n=va[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ft={r:0,g:0,b:0},ln={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function xa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function zs(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ri){return this.r=e,this.g=t,this.b=n,an.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ri){if(e=ec(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xa(o,s,e+1/3),this.g=xa(o,s,e),this.b=xa(o,s,e-1/3)}return an.toWorkingColorSpace(this,r),this}setStyle(e,t=zn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,an.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,an.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,an.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,an.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=zn){const n=Hf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return an.fromWorkingColorSpace(zs(this,ft),e),vt(ft.r*255,0,255)<<16^vt(ft.g*255,0,255)<<8^vt(ft.b*255,0,255)<<0}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ri){an.fromWorkingColorSpace(zs(this,ft),t);const n=ft.r,r=ft.g,s=ft.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ri){return an.fromWorkingColorSpace(zs(this,ft),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=zn){return an.fromWorkingColorSpace(zs(this,ft),e),e!==zn?`color(${e} ${ft.r} ${ft.g} ${ft.b})`:`rgb(${ft.r*255|0},${ft.g*255|0},${ft.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(ln),ln.h+=e,ln.s+=t,ln.l+=n,this.setHSL(ln.h,ln.s,ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(Ns);const n=as(ln.h,Ns.h,t),r=as(ln.s,Ns.s,t),s=as(ln.l,Ns.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}De.NAMES=Hf;let Yi;class Wf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=_s("canvas")),Yi.width=e.width,Yi.height=e.height;const n=Yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Xf{constructor(e=null){this.isSource=!0,this.uuid=di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ya(r[o].image)):s.push(ya(r[o]))}else s=ya(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G0=0;class Ft extends Vi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=Ht,r=Ht,s=Jt,o=Yo,a=Qt,l=Ui,c=1,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=di(),this.name="",this.source=new Xf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Bf;class Ye{constructor(e=0,t=0,n=0,r=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(p+1)/2,M=(_+1)/2,C=(u+f)/4,R=(h+m)/4,v=(g+d)/4;return y>b&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=C/n,s=R/n):b>M?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=C/r,s=v/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=R/s,r=v/s),this.set(n,r,s,t),this}let w=Math.sqrt((d-g)*(d-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(d-g)/w,this.y=(h-m)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ki extends Vi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Ft(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jf extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class H0 extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==p||u!==g){let d=1-a;const _=l*f+c*p+u*g+h*m,w=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const M=Math.sqrt(y),C=Math.atan2(M,_*w);d=Math.sin(d*C)/M,a=Math.sin(a*C)/M}const b=a*w;if(l=l*d+f*b,c=c*d+p*b,u=u*d+g*b,h=h*d+m*b,d===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new I,Nu=new en;class Ss{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Mi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Mi)}else n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox),ba.applyMatrix4(e.matrixWorld),this.union(ba);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Us.subVectors(this.max,qr),$i.subVectors(e.a,qr),Zi.subVectors(e.b,qr),Ki.subVectors(e.c,qr),Yn.subVectors(Zi,$i),$n.subVectors(Ki,Zi),bi.subVectors($i,Ki);let t=[0,-Yn.z,Yn.y,0,-$n.z,$n.y,0,-bi.z,bi.y,Yn.z,0,-Yn.x,$n.z,0,-$n.x,bi.z,0,-bi.x,-Yn.y,Yn.x,0,-$n.y,$n.x,0,-bi.y,bi.x,0];return!wa(t,$i,Zi,Ki,Us)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,$i,Zi,Ki,Us))?!1:(Bs.crossVectors(Yn,$n),t=[Bs.x,Bs.y,Bs.z],wa(t,$i,Zi,Ki,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Mi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new I,new I,new I,new I,new I,new I,new I,new I],Mi=new I,ba=new Ss,$i=new I,Zi=new I,Ki=new I,Yn=new I,$n=new I,bi=new I,qr=new I,Us=new I,Bs=new I,wi=new I;function wa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){wi.fromArray(i,s);const a=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const W0=new Ss,Yr=new I,Sa=new I;class Ts{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):W0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Yr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(Sa)),this.expandByPoint(Yr.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new I,Ta=new I,ks=new I,Zn=new I,Ea=new I,Vs=new I,Aa=new I;class $o{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.direction).multiplyScalar(t).add(this.origin),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ta.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(Ta);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ks),a=Zn.dot(this.direction),l=-Zn.dot(ks),c=Zn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(ks).multiplyScalar(f).add(Ta),p}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),r=Dn.dot(Dn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,r,s){Ea.subVectors(t,e),Vs.subVectors(n,e),Aa.crossVectors(Ea,Vs);let o=this.direction.dot(Aa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,e);const l=a*this.direction.dot(Vs.crossVectors(Zn,Vs));if(l<0)return null;const c=a*this.direction.dot(Ea.cross(Zn));if(c<0||l+c>o)return null;const u=-a*Zn.dot(Aa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,h,f,p,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X0,e,j0)}lookAt(e,t,n){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Kn.crossVectors(n,Vt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Kn.crossVectors(n,Vt)),Kn.normalize(),Gs.crossVectors(Vt,Kn),r[0]=Kn.x,r[4]=Gs.x,r[8]=Vt.x,r[1]=Kn.y,r[5]=Gs.y,r[9]=Vt.y,r[2]=Kn.z,r[6]=Gs.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],m=n[6],d=n[10],_=n[14],w=n[3],y=n[7],b=n[11],M=n[15],C=r[0],R=r[4],v=r[8],A=r[12],D=r[1],Z=r[5],oe=r[9],B=r[13],F=r[2],q=r[6],j=r[10],X=r[14],V=r[3],z=r[7],G=r[11],se=r[15];return s[0]=o*C+a*D+l*F+c*V,s[4]=o*R+a*Z+l*q+c*z,s[8]=o*v+a*oe+l*j+c*G,s[12]=o*A+a*B+l*X+c*se,s[1]=u*C+h*D+f*F+p*V,s[5]=u*R+h*Z+f*q+p*z,s[9]=u*v+h*oe+f*j+p*G,s[13]=u*A+h*B+f*X+p*se,s[2]=g*C+m*D+d*F+_*V,s[6]=g*R+m*Z+d*q+_*z,s[10]=g*v+m*oe+d*j+_*G,s[14]=g*A+m*B+d*X+_*se,s[3]=w*C+y*D+b*F+M*V,s[7]=w*R+y*Z+b*q+M*z,s[11]=w*v+y*oe+b*j+M*G,s[15]=w*A+y*B+b*X+M*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*p-n*l*p)+m*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+d*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+_*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],_=e[15],w=h*d*c-m*f*c+m*l*p-a*d*p-h*l*_+a*f*_,y=g*f*c-u*d*c-g*l*p+o*d*p+u*l*_-o*f*_,b=u*m*c-g*h*c+g*a*p-o*m*p-u*a*_+o*h*_,M=g*h*l-u*m*l-g*a*f+o*m*f+u*a*d-o*h*d,C=t*w+n*y+r*b+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=w*R,e[1]=(m*f*s-h*d*s-m*r*p+n*d*p+h*r*_-n*f*_)*R,e[2]=(a*d*s-m*l*s+m*r*c-n*d*c-a*r*_+n*l*_)*R,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*R,e[4]=y*R,e[5]=(u*d*s-g*f*s+g*r*p-t*d*p-u*r*_+t*f*_)*R,e[6]=(g*l*s-o*d*s-g*r*c+t*d*c+o*r*_-t*l*_)*R,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*R,e[8]=b*R,e[9]=(g*h*s-u*m*s-g*n*p+t*m*p+u*n*_-t*h*_)*R,e[10]=(o*m*s-g*a*s+g*n*c-t*m*c-o*n*_+t*a*_)*R,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*R,e[12]=M*R,e[13]=(u*m*r-g*h*r+g*n*f-t*m*f-u*n*d+t*h*d)*R,e[14]=(g*a*r-o*m*r-g*n*l+t*m*l+o*n*d-t*a*d)*R,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,m=o*u,d=o*h,_=a*h,w=l*c,y=l*u,b=l*h,M=n.x,C=n.y,R=n.z;return r[0]=(1-(m+_))*M,r[1]=(p+b)*M,r[2]=(g-y)*M,r[3]=0,r[4]=(p-b)*C,r[5]=(1-(f+_))*C,r[6]=(d+w)*C,r[7]=0,r[8]=(g+y)*R,r[9]=(d-w)*R,r[10]=(1-(f+m))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const o=Ji.set(r[4],r[5],r[6]).length(),a=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const c=1/s,u=1/o,h=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new I,cn=new Ce,X0=new I(0,0,0),j0=new I(1,1,1),Kn=new I,Gs=new I,Vt=new I,zu=new Ce,Uu=new en;class Xt{constructor(e=0,t=0,n=0,r=Xt.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Xt.DefaultOrder="XYZ";Xt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q0=0;const Bu=new I,Qi=new en,Rn=new Ce,Hs=new I,$r=new I,Y0=new I,$0=new en,ku=new I(1,0,0),Vu=new I(0,1,0),Gu=new I(0,0,1),Z0={type:"added"},Hu={type:"removed"};class st extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DefaultUp.clone();const e=new I,t=new Xt,n=new en,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Wt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=st.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=st.DefaultMatrixWorldAutoUpdate,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hs.copy(e):Hs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt($r,Hs,this.up):Rn.lookAt(Hs,$r,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Z0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Hu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,$0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}st.DefaultUp=new I(0,1,0);st.DefaultMatrixAutoUpdate=!0;st.DefaultMatrixWorldAutoUpdate=!0;const un=new I,In=new I,Ca=new I,Fn=new I,er=new I,tr=new I,Wu=new I,La=new I,Pa=new I,Da=new I;class Sn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){un.subVectors(r,t),In.subVectors(n,t),Ca.subVectors(e,t);const o=un.dot(un),a=un.dot(In),l=un.dot(Ca),c=In.dot(In),u=In.dot(Ca),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Fn),Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Fn),l.set(0,0),l.addScaledVector(s,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l}static isFrontFacing(e,t,n,r){return un.subVectors(n,t),In.subVectors(e,t),un.cross(In).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),In.subVectors(this.a,this.b),un.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Sn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;er.subVectors(r,n),tr.subVectors(s,n),La.subVectors(e,n);const l=er.dot(La),c=tr.dot(La);if(l<=0&&c<=0)return t.copy(n);Pa.subVectors(e,r);const u=er.dot(Pa),h=tr.dot(Pa);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(er,o);Da.subVectors(e,s);const p=er.dot(Da),g=tr.dot(Da);if(g>=0&&p<=g)return t.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(tr,a);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return Wu.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Wu,a);const _=1/(d+m+f);return o=m*_,a=f*_,t.copy(n).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let K0=0;class pi extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=di(),this.name="",this.type="Material",this.blending=xr,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=zf,this.blendDst=Uf,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_a,this.stencilZFail=_a,this.stencilZPass=_a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==Sr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qf extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new I,Ws=new Ie;class Ut{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Iu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Iu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class nc extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yf extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wt extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let J0=0;const Zt=new Ce,Ra=new st,nr=new I,Gt=new Ss,Zr=new Ss,gt=new I;class It extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gf(e)?Yf:nc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Wt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Gt.min,Zr.min),Gt.expandByPoint(gt),gt.addVectors(Gt.max,Zr.max),Gt.expandByPoint(gt)):(Gt.expandByPoint(Zr.min),Gt.expandByPoint(Zr.max))}Gt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(e,c),gt.add(nr)),r=Math.max(r,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new I,u[D]=new I;const h=new I,f=new I,p=new I,g=new Ie,m=new Ie,d=new Ie,_=new I,w=new I;function y(D,Z,oe){h.fromArray(r,D*3),f.fromArray(r,Z*3),p.fromArray(r,oe*3),g.fromArray(o,D*2),m.fromArray(o,Z*2),d.fromArray(o,oe*2),f.sub(h),p.sub(h),m.sub(g),d.sub(g);const B=1/(m.x*d.y-d.x*m.y);!isFinite(B)||(_.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(B),w.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(B),c[D].add(_),c[Z].add(_),c[oe].add(_),u[D].add(w),u[Z].add(w),u[oe].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let D=0,Z=b.length;D<Z;++D){const oe=b[D],B=oe.start,F=oe.count;for(let q=B,j=B+F;q<j;q+=3)y(n[q+0],n[q+1],n[q+2])}const M=new I,C=new I,R=new I,v=new I;function A(D){R.fromArray(s,D*3),v.copy(R);const Z=c[D];M.copy(Z),M.sub(R.multiplyScalar(R.dot(Z))).normalize(),C.crossVectors(v,Z);const B=C.dot(u[D])<0?-1:1;l[D*4]=M.x,l[D*4+1]=M.y,l[D*4+2]=M.z,l[D*4+3]=B}for(let D=0,Z=b.length;D<Z;++D){const oe=b[D],B=oe.start,F=oe.count;for(let q=B,j=B+F;q<j;q+=3)A(n[q+0]),A(n[q+1]),A(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new Ut(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xu=new Ce,ir=new $o,Ia=new Ts,Jn=new I,Qn=new I,ei=new I,Fa=new I,Oa=new I,Na=new I,Xs=new I,js=new I,qs=new I,Ys=new Ie,$s=new Ie,Zs=new Ie,za=new I,Ks=new I;class dn extends st{constructor(e=new It,t=new qf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),e.ray.intersectsSphere(Ia)===!1)||(Xu.copy(s).invert(),ir.copy(e.ray).applyMatrix4(Xu),n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,d=p.length;m<d;m++){const _=p[m],w=r[_.materialIndex],y=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let M=y,C=b;M<C;M+=3){const R=a.getX(M),v=a.getX(M+1),A=a.getX(M+2);o=Js(this,w,e,ir,l,c,u,h,f,R,v,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=m,w=d;_<w;_+=3){const y=a.getX(_),b=a.getX(_+1),M=a.getX(_+2);o=Js(this,r,e,ir,l,c,u,h,f,y,b,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,d=p.length;m<d;m++){const _=p[m],w=r[_.materialIndex],y=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=y,C=b;M<C;M+=3){const R=M,v=M+1,A=M+2;o=Js(this,w,e,ir,l,c,u,h,f,R,v,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,w=d;_<w;_+=3){const y=_,b=_+1,M=_+2;o=Js(this,r,e,ir,l,c,u,h,f,y,b,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Q0(i,e,t,n,r,s,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==ri,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:i}}function Js(i,e,t,n,r,s,o,a,l,c,u,h){Jn.fromBufferAttribute(r,c),Qn.fromBufferAttribute(r,u),ei.fromBufferAttribute(r,h);const f=i.morphTargetInfluences;if(s&&f){Xs.set(0,0,0),js.set(0,0,0),qs.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const d=f[g],_=s[g];d!==0&&(Fa.fromBufferAttribute(_,c),Oa.fromBufferAttribute(_,u),Na.fromBufferAttribute(_,h),o?(Xs.addScaledVector(Fa,d),js.addScaledVector(Oa,d),qs.addScaledVector(Na,d)):(Xs.addScaledVector(Fa.sub(Jn),d),js.addScaledVector(Oa.sub(Qn),d),qs.addScaledVector(Na.sub(ei),d)))}Jn.add(Xs),Qn.add(js),ei.add(qs)}i.isSkinnedMesh&&(i.boneTransform(c,Jn),i.boneTransform(u,Qn),i.boneTransform(h,ei));const p=Q0(i,e,t,n,Jn,Qn,ei,za);if(p){a&&(Ys.fromBufferAttribute(a,c),$s.fromBufferAttribute(a,u),Zs.fromBufferAttribute(a,h),p.uv=Sn.getUV(za,Jn,Qn,ei,Ys,$s,Zs,new Ie)),l&&(Ys.fromBufferAttribute(l,c),$s.fromBufferAttribute(l,u),Zs.fromBufferAttribute(l,h),p.uv2=Sn.getUV(za,Jn,Qn,ei,Ys,$s,Zs,new Ie));const g={a:c,b:u,c:h,normal:new I,materialIndex:0};Sn.getNormal(Jn,Qn,ei,g.normal),p.face=g}return p}class Es extends It{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(h,2));function g(m,d,_,w,y,b,M,C,R,v,A){const D=b/R,Z=M/v,oe=b/2,B=M/2,F=C/2,q=R+1,j=v+1;let X=0,V=0;const z=new I;for(let G=0;G<j;G++){const se=G*Z-B;for(let re=0;re<q;re++){const le=re*D-oe;z[m]=le*w,z[d]=se*y,z[_]=F,c.push(z.x,z.y,z.z),z[m]=0,z[d]=0,z[_]=C>0?1:-1,u.push(z.x,z.y,z.z),h.push(re/R),h.push(1-G/v),X+=1}}for(let G=0;G<v;G++)for(let se=0;se<R;se++){const re=f+se+q*G,le=f+se+q*(G+1),pe=f+(se+1)+q*(G+1),we=f+(se+1)+q*G;l.push(re,le,we),l.push(le,pe,we),V+=6}a.addGroup(p,V,A),p+=V,f+=X}}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Cr(i[t]);for(const r in n)e[r]=n[r]}return e}function e_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const t_={clone:Cr,merge:Lt};var n_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n_,this.fragmentShader=i_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=e_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $f extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends $f{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=90,sr=1;class r_ extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Pt(rr,sr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(1,0,0)),this.add(r);const s=new Pt(rr,sr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const o=new Pt(rr,sr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new I(0,1,0)),this.add(o);const a=new Pt(rr,sr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new I(0,-1,0)),this.add(a);const l=new Pt(rr,sr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const c=new Pt(rr,sr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=kn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Zf extends Ft{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Tr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s_ extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Es(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:li});s.uniforms.tEquirect.value=t;const o=new dn(r,s),a=t.minFilter;return t.minFilter===Yo&&(t.minFilter=Jt),new r_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ua=new I,o_=new I,a_=new Wt;class Ti{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ua.subVectors(n,t).cross(o_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ua),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||a_.getNormalMatrix(e),r=this.coplanarPoint(Ua).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Ts,Qs=new I;class ic{constructor(e=new Ti,t=new Ti,n=new Ti,r=new Ti,s=new Ti,o=new Ti){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],m=n[11],d=n[12],_=n[13],w=n[14],y=n[15];return t[0].setComponents(a-r,h-l,m-f,y-d).normalize(),t[1].setComponents(a+r,h+l,m+f,y+d).normalize(),t[2].setComponents(a+s,h+c,m+p,y+_).normalize(),t[3].setComponents(a-s,h-c,m-p,y-_).normalize(),t[4].setComponents(a-o,h-u,m-g,y-w).normalize(),t[5].setComponents(a+o,h+u,m+g,y+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Qs.x=r.normal.x>0?e.max.x:e.min.x,Qs.y=r.normal.y>0?e.max.y:e.min.y,Qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function l_(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class rc extends It{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const w=_*f-o;for(let y=0;y<c;y++){const b=y*h-s;g.push(b,-w,0),m.push(0,0,1),d.push(y/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<a;w++){const y=w+c*_,b=w+c*(_+1),M=w+1+c*(_+1),C=w+1+c*_;p.push(y,b,C),p.push(b,M,C)}this.setIndex(p),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(m,3)),this.setAttribute("uv",new wt(d,2))}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var c_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,u_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,f_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m_="vec3 transformed = vec3( position );",g_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,__=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,v_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,C_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,L_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,P_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O_="gl_FragColor = linearToOutputTexel( gl_FragColor );",N_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,U_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,G_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,K_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,J_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Q_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ev=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,iv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,rv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ov=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,av=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,lv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_v=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,wv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Av=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gv=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Hv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,jv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Qv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ex=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,tx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,nx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ix=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,rx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,sx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ex=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Bx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:c_,alphamap_pars_fragment:u_,alphatest_fragment:h_,alphatest_pars_fragment:f_,aomap_fragment:d_,aomap_pars_fragment:p_,begin_vertex:m_,beginnormal_vertex:g_,bsdfs:__,iridescence_fragment:v_,bumpmap_pars_fragment:x_,clipping_planes_fragment:y_,clipping_planes_pars_fragment:M_,clipping_planes_pars_vertex:b_,clipping_planes_vertex:w_,color_fragment:S_,color_pars_fragment:T_,color_pars_vertex:E_,color_vertex:A_,common:C_,cube_uv_reflection_fragment:L_,defaultnormal_vertex:P_,displacementmap_pars_vertex:D_,displacementmap_vertex:R_,emissivemap_fragment:I_,emissivemap_pars_fragment:F_,encodings_fragment:O_,encodings_pars_fragment:N_,envmap_fragment:z_,envmap_common_pars_fragment:U_,envmap_pars_fragment:B_,envmap_pars_vertex:k_,envmap_physical_pars_fragment:J_,envmap_vertex:V_,fog_vertex:G_,fog_pars_vertex:H_,fog_fragment:W_,fog_pars_fragment:X_,gradientmap_pars_fragment:j_,lightmap_fragment:q_,lightmap_pars_fragment:Y_,lights_lambert_fragment:$_,lights_lambert_pars_fragment:Z_,lights_pars_begin:K_,lights_toon_fragment:Q_,lights_toon_pars_fragment:ev,lights_phong_fragment:tv,lights_phong_pars_fragment:nv,lights_physical_fragment:iv,lights_physical_pars_fragment:rv,lights_fragment_begin:sv,lights_fragment_maps:ov,lights_fragment_end:av,logdepthbuf_fragment:lv,logdepthbuf_pars_fragment:cv,logdepthbuf_pars_vertex:uv,logdepthbuf_vertex:hv,map_fragment:fv,map_pars_fragment:dv,map_particle_fragment:pv,map_particle_pars_fragment:mv,metalnessmap_fragment:gv,metalnessmap_pars_fragment:_v,morphcolor_vertex:vv,morphnormal_vertex:xv,morphtarget_pars_vertex:yv,morphtarget_vertex:Mv,normal_fragment_begin:bv,normal_fragment_maps:wv,normal_pars_fragment:Sv,normal_pars_vertex:Tv,normal_vertex:Ev,normalmap_pars_fragment:Av,clearcoat_normal_fragment_begin:Cv,clearcoat_normal_fragment_maps:Lv,clearcoat_pars_fragment:Pv,iridescence_pars_fragment:Dv,output_fragment:Rv,packing:Iv,premultiplied_alpha_fragment:Fv,project_vertex:Ov,dithering_fragment:Nv,dithering_pars_fragment:zv,roughnessmap_fragment:Uv,roughnessmap_pars_fragment:Bv,shadowmap_pars_fragment:kv,shadowmap_pars_vertex:Vv,shadowmap_vertex:Gv,shadowmask_pars_fragment:Hv,skinbase_vertex:Wv,skinning_pars_vertex:Xv,skinning_vertex:jv,skinnormal_vertex:qv,specularmap_fragment:Yv,specularmap_pars_fragment:$v,tonemapping_fragment:Zv,tonemapping_pars_fragment:Kv,transmission_fragment:Jv,transmission_pars_fragment:Qv,uv_pars_fragment:ex,uv_pars_vertex:tx,uv_vertex:nx,uv2_pars_fragment:ix,uv2_pars_vertex:rx,uv2_vertex:sx,worldpos_vertex:ox,background_vert:ax,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:ux,cube_vert:hx,cube_frag:fx,depth_vert:dx,depth_frag:px,distanceRGBA_vert:mx,distanceRGBA_frag:gx,equirect_vert:_x,equirect_frag:vx,linedashed_vert:xx,linedashed_frag:yx,meshbasic_vert:Mx,meshbasic_frag:bx,meshlambert_vert:wx,meshlambert_frag:Sx,meshmatcap_vert:Tx,meshmatcap_frag:Ex,meshnormal_vert:Ax,meshnormal_frag:Cx,meshphong_vert:Lx,meshphong_frag:Px,meshphysical_vert:Dx,meshphysical_frag:Rx,meshtoon_vert:Ix,meshtoon_frag:Fx,points_vert:Ox,points_frag:Nx,shadow_vert:zx,shadow_frag:Ux,sprite_vert:Bx,sprite_frag:kx},me={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Wt},uv2Transform:{value:new Wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}}},Mn={basic:{uniforms:Lt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Lt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new De(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Lt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Lt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Lt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new De(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Lt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Lt([me.points,me.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Lt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Lt([me.common,me.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Lt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Lt([me.sprite,me.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Lt([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Lt([me.lights,me.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Mn.physical={uniforms:Lt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};function Vx(i,e,t,n,r,s,o){const a=new De(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(d,_){let w=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y));const b=i.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?m(a,l):y&&y.isColor&&(m(y,1),w=!0),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===qo)?(u===void 0&&(u=new dn(new Es(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Cr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(h!==y||f!==y.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new dn(new rc(2,2),new Gn({name:"BackgroundMaterial",uniforms:Cr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,_){n.buffers.color.setClear(d.r,d.g,d.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(d,_=1){a.set(d),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,m(a,l)},render:g}}function Gx(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function h(F,q,j,X,V){let z=!1;if(o){const G=m(X,j,q);c!==G&&(c=G,p(c.object)),z=_(F,X,j,V),z&&w(F,X,j,V)}else{const G=q.wireframe===!0;(c.geometry!==X.id||c.program!==j.id||c.wireframe!==G)&&(c.geometry=X.id,c.program=j.id,c.wireframe=G,z=!0)}V!==null&&t.update(V,34963),(z||u)&&(u=!1,v(F,q,j,X),V!==null&&i.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(F){return n.isWebGL2?i.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function m(F,q,j){const X=j.wireframe===!0;let V=a[F.id];V===void 0&&(V={},a[F.id]=V);let z=V[q.id];z===void 0&&(z={},V[q.id]=z);let G=z[X];return G===void 0&&(G=d(f()),z[X]=G),G}function d(F){const q=[],j=[],X=[];for(let V=0;V<r;V++)q[V]=0,j[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:j,attributeDivisors:X,object:F,attributes:{},index:null}}function _(F,q,j,X){const V=c.attributes,z=q.attributes;let G=0;const se=j.getAttributes();for(const re in se)if(se[re].location>=0){const pe=V[re];let we=z[re];if(we===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(we=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(we=F.instanceColor)),pe===void 0||pe.attribute!==we||we&&pe.data!==we.data)return!0;G++}return c.attributesNum!==G||c.index!==X}function w(F,q,j,X){const V={},z=q.attributes;let G=0;const se=j.getAttributes();for(const re in se)if(se[re].location>=0){let pe=z[re];pe===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(pe=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(pe=F.instanceColor));const we={};we.attribute=pe,pe&&pe.data&&(we.data=pe.data),V[re]=we,G++}c.attributes=V,c.attributesNum=G,c.index=X}function y(){const F=c.newAttributes;for(let q=0,j=F.length;q<j;q++)F[q]=0}function b(F){M(F,0)}function M(F,q){const j=c.newAttributes,X=c.enabledAttributes,V=c.attributeDivisors;j[F]=1,X[F]===0&&(i.enableVertexAttribArray(F),X[F]=1),V[F]!==q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,q),V[F]=q)}function C(){const F=c.newAttributes,q=c.enabledAttributes;for(let j=0,X=q.length;j<X;j++)q[j]!==F[j]&&(i.disableVertexAttribArray(j),q[j]=0)}function R(F,q,j,X,V,z){n.isWebGL2===!0&&(j===5124||j===5125)?i.vertexAttribIPointer(F,q,j,V,z):i.vertexAttribPointer(F,q,j,X,V,z)}function v(F,q,j,X){if(n.isWebGL2===!1&&(F.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const V=X.attributes,z=j.getAttributes(),G=q.defaultAttributeValues;for(const se in z){const re=z[se];if(re.location>=0){let le=V[se];if(le===void 0&&(se==="instanceMatrix"&&F.instanceMatrix&&(le=F.instanceMatrix),se==="instanceColor"&&F.instanceColor&&(le=F.instanceColor)),le!==void 0){const pe=le.normalized,we=le.itemSize,$=t.get(le);if($===void 0)continue;const Fe=$.buffer,Te=$.type,Ae=$.bytesPerElement;if(le.isInterleavedBufferAttribute){const xe=le.data,Ge=xe.stride,E=le.offset;if(xe.isInstancedInterleavedBuffer){for(let P=0;P<re.locationSize;P++)M(re.location+P,xe.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let P=0;P<re.locationSize;P++)b(re.location+P);i.bindBuffer(34962,Fe);for(let P=0;P<re.locationSize;P++)R(re.location+P,we/re.locationSize,Te,pe,Ge*Ae,(E+we/re.locationSize*P)*Ae)}else{if(le.isInstancedBufferAttribute){for(let xe=0;xe<re.locationSize;xe++)M(re.location+xe,le.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<re.locationSize;xe++)b(re.location+xe);i.bindBuffer(34962,Fe);for(let xe=0;xe<re.locationSize;xe++)R(re.location+xe,we/re.locationSize,Te,pe,we*Ae,we/re.locationSize*xe*Ae)}}else if(G!==void 0){const pe=G[se];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(re.location,pe);break;case 3:i.vertexAttrib3fv(re.location,pe);break;case 4:i.vertexAttrib4fv(re.location,pe);break;default:i.vertexAttrib1fv(re.location,pe)}}}}C()}function A(){oe();for(const F in a){const q=a[F];for(const j in q){const X=q[j];for(const V in X)g(X[V].object),delete X[V];delete q[j]}delete a[F]}}function D(F){if(a[F.id]===void 0)return;const q=a[F.id];for(const j in q){const X=q[j];for(const V in X)g(X[V].object),delete X[V];delete q[j]}delete a[F.id]}function Z(F){for(const q in a){const j=a[q];if(j[F.id]===void 0)continue;const X=j[F.id];for(const V in X)g(X[V].object),delete X[V];delete j[F.id]}}function oe(){B(),u=!0,c!==l&&(c=l,p(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:oe,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:Z,initAttributes:y,enableAttribute:b,disableUnusedAttributes:C}}function Hx(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Wx(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),w=i.getParameter(36349),y=f>0,b=o||e.has("OES_texture_float"),M=y&&b,C=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:C}}function Xx(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ti,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||n!==0||r;return r=f,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,_=i.get(h);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const w=s?0:n,y=w*4;let b=_.clippingState||null;l.value=b,b=u(g,f,y,p);for(let M=0;M!==y;++M)b[M]=t[M];_.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const m=h!==null?h.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(d===null||d.length<_)&&(d=new Float32Array(_));for(let y=0,b=p;y!==m;++y,b+=4)o.copy(h[y]).applyMatrix4(w,a),o.normal.toArray(d,b),d[b+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function jx(i){let e=new WeakMap;function t(o,a){return a===To?o.mapping=Tr:a===dl&&(o.mapping=Er),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===To||a===dl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new s_(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class sc extends $f{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pr=4,ju=[.125,.215,.35,.446,.526,.582],Pi=20,Ba=new sc,qu=new De;let ka=null;const Ei=(1+Math.sqrt(5))/2,ar=1/Ei,Yu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ei,ar),new I(0,Ei,-ar),new I(ar,0,Ei),new I(-ar,0,Ei),new I(Ei,ar,0),new I(-Ei,ar,0)];class $u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ka=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka),e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:ms,format:Qt,encoding:Bi,depthBuffer:!1},r=Zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qx(s)),this._blurMaterial=Yx(s,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,n,r){const a=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(qu),u.toneMapping=kn,u.autoClear=!1;const p=new qf({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new dn(new Es,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(qu),m=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):w===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const y=this._cubeSize;eo(r,w*y,_>2?y:0,y,y),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Tr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;eo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yu[(r-1)%Yu.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new dn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Pi-1),m=s/g,d=isFinite(s)?1+Math.floor(u*m):Pi;d>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Pi}`);const _=[];let w=0;for(let R=0;R<Pi;++R){const v=R/m,A=Math.exp(-v*v/2);_.push(A),R===0?w+=A:R<d&&(w+=2*A)}for(let R=0;R<_.length;R++)_[R]=_[R]/w;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const b=this._sizeLods[r],M=3*b*(r>y-pr?r-y+pr:0),C=4*(this._cubeSize-b);eo(t,M,C,3*b,2*b),l.setRenderTarget(t),l.render(h,Ba)}}function qx(i){const e=[],t=[],n=[];let r=i;const s=i-pr+1+ju.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-pr?l=ju[o-i+pr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,d=2,_=1,w=new Float32Array(m*g*p),y=new Float32Array(d*g*p),b=new Float32Array(_*g*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,v=C>2?0:-1,A=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];w.set(A,m*g*C),y.set(f,d*g*C);const D=[C,C,C,C,C,C];b.set(D,_*g*C)}const M=new It;M.setAttribute("position",new Ut(w,m)),M.setAttribute("uv",new Ut(y,d)),M.setAttribute("faceIndex",new Ut(b,_)),e.push(M),r>pr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zu(i,e,t){const n=new ki(i,e,t);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function eo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Yx(i,e,t){const n=new Float32Array(Pi),r=new I(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ku(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ju(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $x(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===To||l===dl,u=l===Tr||l===Er;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new $u(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new $u(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Kx(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const w=p.array;m=p.version;for(let y=0,b=w.length;y<b;y+=3){const M=w[y+0],C=w[y+1],R=w[y+2];f.push(M,C,C,R,R,M)}}else{const w=g.array;m=g.version;for(let y=0,b=w.length/3-1;y<b;y+=3){const M=y+0,C=y+1,R=y+2;f.push(M,C,C,R,R,M)}}const d=new(Gf(f)?Yf:nc)(f,1);d.version=m;const _=s.get(h);_&&e.remove(_),s.set(h,d)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Jx(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(s,p,a,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let m,d;if(r)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,p,a,f*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Qx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ey(i,e){return i[0]-e[0]}function ty(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ny(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ye,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==d){let j=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",j)};var g=j;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let D=0;b===!0&&(D=1),M===!0&&(D=2),C===!0&&(D=3);let Z=u.attributes.position.count*D,oe=1;Z>e.maxTextureSize&&(oe=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const B=new Float32Array(Z*oe*4*d),F=new jf(B,Z,oe,d);F.type=si,F.needsUpdate=!0;const q=D*4;for(let X=0;X<d;X++){const V=R[X],z=v[X],G=A[X],se=Z*oe*4*X;for(let re=0;re<V.count;re++){const le=re*q;b===!0&&(o.fromBufferAttribute(V,re),B[se+le+0]=o.x,B[se+le+1]=o.y,B[se+le+2]=o.z,B[se+le+3]=0),M===!0&&(o.fromBufferAttribute(z,re),B[se+le+4]=o.x,B[se+le+5]=o.y,B[se+le+6]=o.z,B[se+le+7]=0),C===!0&&(o.fromBufferAttribute(G,re),B[se+le+8]=o.x,B[se+le+9]=o.y,B[se+le+10]=o.z,B[se+le+11]=G.itemSize===4?o.w:1)}}_={count:d,texture:F,size:new Ie(Z,oe)},s.set(u,_),u.addEventListener("dispose",j)}let w=0;for(let b=0;b<p.length;b++)w+=p[b];const y=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==m){d=[];for(let M=0;M<m;M++)d[M]=[M,0];n[u.id]=d}for(let M=0;M<m;M++){const C=d[M];C[0]=M,C[1]=p[M]}d.sort(ty);for(let M=0;M<8;M++)M<m&&d[M][1]?(a[M][0]=d[M][0],a[M][1]=d[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(ey);const _=u.morphAttributes.position,w=u.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const C=a[M],R=C[0],v=C[1];R!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+M)!==_[R]&&u.setAttribute("morphTarget"+M,_[R]),w&&u.getAttribute("morphNormal"+M)!==w[R]&&u.setAttribute("morphNormal"+M,w[R]),r[M]=v,y+=v):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),w&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const b=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function iy(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Jf=new Ft,Qf=new jf,ed=new H0,td=new Zf,Qu=[],eh=[],th=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function Fr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Qu[r];if(s===void 0&&(s=new Float32Array(r),Qu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zo(i,e){let t=eh[e];t===void 0&&(t=new Int32Array(e),eh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ry(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function oy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function ay(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function ly(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;ih.set(n),i.uniformMatrix2fv(this.addr,!1,ih),pt(t,n)}}function cy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;nh.set(n),i.uniformMatrix3fv(this.addr,!1,nh),pt(t,n)}}function uy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;th.set(n),i.uniformMatrix4fv(this.addr,!1,th),pt(t,n)}}function hy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function dy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function py(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function my(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function _y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function vy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function xy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Jf,r)}function yy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ed,r)}function My(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||td,r)}function by(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Qf,r)}function wy(i){switch(i){case 5126:return ry;case 35664:return sy;case 35665:return oy;case 35666:return ay;case 35674:return ly;case 35675:return cy;case 35676:return uy;case 5124:case 35670:return hy;case 35667:case 35671:return fy;case 35668:case 35672:return dy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return _y;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return by}}function Sy(i,e){i.uniform1fv(this.addr,e)}function Ty(i,e){const t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ey(i,e){const t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ay(i,e){const t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Cy(i,e){const t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ly(i,e){const t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Py(i,e){const t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Dy(i,e){i.uniform1iv(this.addr,e)}function Ry(i,e){i.uniform2iv(this.addr,e)}function Iy(i,e){i.uniform3iv(this.addr,e)}function Fy(i,e){i.uniform4iv(this.addr,e)}function Oy(i,e){i.uniform1uiv(this.addr,e)}function Ny(i,e){i.uniform2uiv(this.addr,e)}function zy(i,e){i.uniform3uiv(this.addr,e)}function Uy(i,e){i.uniform4uiv(this.addr,e)}function By(i,e,t){const n=this.cache,r=e.length,s=Zo(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Jf,s[o])}function ky(i,e,t){const n=this.cache,r=e.length,s=Zo(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ed,s[o])}function Vy(i,e,t){const n=this.cache,r=e.length,s=Zo(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||td,s[o])}function Gy(i,e,t){const n=this.cache,r=e.length,s=Zo(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Qf,s[o])}function Hy(i){switch(i){case 5126:return Sy;case 35664:return Ty;case 35665:return Ey;case 35666:return Ay;case 35674:return Cy;case 35675:return Ly;case 35676:return Py;case 5124:case 35670:return Dy;case 35667:case 35671:return Ry;case 35668:case 35672:return Iy;case 35669:case 35673:return Fy;case 5125:return Oy;case 36294:return Ny;case 36295:return zy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Gy}}class Wy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=wy(t.type)}}class Xy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Hy(t.type)}}class jy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function rh(i,e){i.seq.push(e),i.map[e.id]=e}function qy(i,e,t){const n=i.name,r=n.length;for(Va.lastIndex=0;;){const s=Va.exec(n),o=Va.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){rh(t,c===void 0?new Wy(a,i,e):new Xy(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new jy(a),rh(t,h)),t=h}}}class mo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);qy(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function sh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Yy=0;function $y(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Zy(i){switch(i){case Bi:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function oh(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$y(i.getShaderSource(e),o)}else return r}function Ky(i,e){const t=Zy(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Jy(i,e){let t;switch(e){case i0:t="Linear";break;case r0:t="Reinhard";break;case s0:t="OptimizedCineon";break;case o0:t="ACESFilmic";break;case a0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qy(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function eM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tM(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ns(i){return i!==""}function ah(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nM=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(nM,iM)}function iM(i,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _l(t)}const rM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(i){return i.replace(rM,sM)}function sM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Og?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===es&&(e="SHADOWMAP_TYPE_VSM"),e}function aM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Tr:case Er:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function cM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jo:e="ENVMAP_BLENDING_MULTIPLY";break;case t0:e="ENVMAP_BLENDING_MIX";break;case n0:e="ENVMAP_BLENDING_ADD";break}return e}function uM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hM(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=oM(t),c=aM(t),u=lM(t),h=cM(t),f=uM(t),p=t.isWebGL2?"":Qy(t),g=eM(s),m=r.createProgram();let d,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(ns).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(ns).join(`
`),_.length>0&&(_+=`
`)):(d=[uh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),_=[p,uh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==kn?Jy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,Ky("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),o=_l(o),o=ah(o,t),o=lh(o,t),a=_l(a),a=ah(a,t),a=lh(a,t),o=ch(o),a=ch(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=w+d+o,b=w+_+a,M=sh(r,35633,y),C=sh(r,35632,b);if(r.attachShader(m,M),r.attachShader(m,C),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),i.debug.checkShaderErrors){const A=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(M).trim(),Z=r.getShaderInfoLog(C).trim();let oe=!0,B=!0;if(r.getProgramParameter(m,35714)===!1){oe=!1;const F=oh(r,M,"vertex"),q=oh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+F+`
`+q)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(D===""||Z==="")&&(B=!1);B&&(this.diagnostics={runnable:oe,programLog:A,vertexShader:{log:D,prefix:d},fragmentShader:{log:Z,prefix:_}})}r.deleteShader(M),r.deleteShader(C);let R;this.getUniforms=function(){return R===void 0&&(R=new mo(r,m)),R};let v;return this.getAttributes=function(){return v===void 0&&(v=tM(r,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Yy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=C,this}let fM=0;class dM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pM(e),t.set(e,n)),n}}class pM{constructor(e){this.id=fM++,this.code=e,this.usedTimes=0}}function mM(i,e,t,n,r,s,o){const a=new tc,l=new dM,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,A,D,Z,oe){const B=Z.fog,F=oe.geometry,q=v.isMeshStandardMaterial?Z.environment:null,j=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),X=!!j&&j.mapping===qo?j.image.height:null,V=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,G=z!==void 0?z.length:0;let se=0;F.morphAttributes.position!==void 0&&(se=1),F.morphAttributes.normal!==void 0&&(se=2),F.morphAttributes.color!==void 0&&(se=3);let re,le,pe,we;if(V){const Ge=Mn[V];re=Ge.vertexShader,le=Ge.fragmentShader}else re=v.vertexShader,le=v.fragmentShader,l.update(v),pe=l.getVertexShaderID(v),we=l.getFragmentShaderID(v);const $=i.getRenderTarget(),Fe=v.alphaTest>0,Te=v.clearcoat>0,Ae=v.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:v.type,vertexShader:re,fragmentShader:le,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:we,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:oe.isInstancedMesh===!0,instancingColor:oe.isInstancedMesh===!0&&oe.instanceColor!==null,supportsVertexTextures:f,outputEncoding:$===null?i.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:Bi,map:!!v.map,matcap:!!v.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:X,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===A0,tangentSpaceNormalMap:v.normalMapType===Ql,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===tt,clearcoat:Te,clearcoatMap:Te&&!!v.clearcoatMap,clearcoatRoughnessMap:Te&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Te&&!!v.clearcoatNormalMap,iridescence:Ae,iridescenceMap:Ae&&!!v.iridescenceMap,iridescenceThicknessMap:Ae&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===xr,alphaMap:!!v.alphaMap,alphaTest:Fe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!F.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!B,useFog:v.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:oe.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:se,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:kn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ri,flipSided:v.side===nn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)A.push(D),A.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(A,v),w(A,v),A.push(i.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function _(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function w(v,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),v.push(a.mask)}function y(v){const A=g[v.type];let D;if(A){const Z=Mn[A];D=t_.clone(Z.uniforms)}else D=v.uniforms;return D}function b(v,A){let D;for(let Z=0,oe=c.length;Z<oe;Z++){const B=c[Z];if(B.cacheKey===A){D=B,++D.usedTimes;break}}return D===void 0&&(D=new hM(i,A,v,s),c.push(D)),D}function M(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:R}}function gM(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function _M(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function hh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,g,m,d){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:d},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=d),e++,_}function a(h,f,p,g,m,d){const _=o(h,f,p,g,m,d);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):t.push(_)}function l(h,f,p,g,m,d){const _=o(h,f,p,g,m,d);p.transmission>0?n.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||_M),n.length>1&&n.sort(f||hh),r.length>1&&r.sort(f||hh)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function vM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new fh,i.set(n,[o])):r>=s.length?(o=new fh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function xM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new De};break;case"SpotLight":t={position:new I,direction:new I,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function yM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let MM=0;function bM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wM(i,e){const t=new xM,n=yM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new Ce,a=new Ce;function l(u,h){let f=0,p=0,g=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let m=0,d=0,_=0,w=0,y=0,b=0,M=0,C=0,R=0,v=0;u.sort(bM);const A=h!==!0?Math.PI:1;for(let Z=0,oe=u.length;Z<oe;Z++){const B=u[Z],F=B.color,q=B.intensity,j=B.distance,X=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=F.r*q*A,p+=F.g*q*A,g+=F.b*q*A;else if(B.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(B.sh.coefficients[V],q);else if(B.isDirectionalLight){const V=t.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity*A),B.castShadow){const z=B.shadow,G=n.get(B);G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,r.directionalShadow[m]=G,r.directionalShadowMap[m]=X,r.directionalShadowMatrix[m]=B.shadow.matrix,b++}r.directional[m]=V,m++}else if(B.isSpotLight){const V=t.get(B);V.position.setFromMatrixPosition(B.matrixWorld),V.color.copy(F).multiplyScalar(q*A),V.distance=j,V.coneCos=Math.cos(B.angle),V.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),V.decay=B.decay,r.spot[_]=V;const z=B.shadow;if(B.map&&(r.spotLightMap[R]=B.map,R++,z.updateMatrices(B),B.castShadow&&v++),r.spotLightMatrix[_]=z.matrix,B.castShadow){const G=n.get(B);G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,r.spotShadow[_]=G,r.spotShadowMap[_]=X,C++}_++}else if(B.isRectAreaLight){const V=t.get(B);V.color.copy(F).multiplyScalar(q),V.halfWidth.set(B.width*.5,0,0),V.halfHeight.set(0,B.height*.5,0),r.rectArea[w]=V,w++}else if(B.isPointLight){const V=t.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity*A),V.distance=B.distance,V.decay=B.decay,B.castShadow){const z=B.shadow,G=n.get(B);G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,G.shadowCameraNear=z.camera.near,G.shadowCameraFar=z.camera.far,r.pointShadow[d]=G,r.pointShadowMap[d]=X,r.pointShadowMatrix[d]=B.shadow.matrix,M++}r.point[d]=V,d++}else if(B.isHemisphereLight){const V=t.get(B);V.skyColor.copy(B.color).multiplyScalar(q*A),V.groundColor.copy(B.groundColor).multiplyScalar(q*A),r.hemi[y]=V,y++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==m||D.pointLength!==d||D.spotLength!==_||D.rectAreaLength!==w||D.hemiLength!==y||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==C||D.numSpotMaps!==R)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=w,r.point.length=d,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=C+R-v,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=v,D.directionalLength=m,D.pointLength=d,D.spotLength=_,D.rectAreaLength=w,D.hemiLength=y,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=C,D.numSpotMaps=R,r.version=MM++)}function c(u,h){let f=0,p=0,g=0,m=0,d=0;const _=h.matrixWorldInverse;for(let w=0,y=u.length;w<y;w++){const b=u[w];if(b.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),f++}else if(b.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),p++}else if(b.isHemisphereLight){const M=r.hemi[d];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function dh(i,e){const t=new wM(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function SM(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new dh(i,e),t.set(s,[l])):o>=a.length?(l=new dh(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class TM extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EM extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const AM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LM(i,e,t){let n=new ic;const r=new Ie,s=new Ie,o=new Ye,a=new TM({depthPacking:E0}),l=new EM,c={},u=t.maxTextureSize,h={0:nn,1:Sr,2:ri},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:AM,fragmentShader:CM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new dn(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nf,this.render=function(b,M,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const R=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),D=i.state;D.setBlending(li),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let Z=0,oe=b.length;Z<oe;Z++){const B=b[Z],F=B.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const q=F.getFrameExtents();if(r.multiply(q),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,F.mapSize.y=s.y)),F.map===null){const X=this.type!==es?{minFilter:bt,magFilter:bt}:{};F.map=new ki(r.x,r.y,X),F.map.texture.name=B.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const j=F.getViewportCount();for(let X=0;X<j;X++){const V=F.getViewport(X);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),D.viewport(o),F.updateMatrices(B,X),n=F.getFrustum(),y(M,C,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===es&&_(F,C),F.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(R,v,A)};function _(b,M){const C=e.update(m);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ki(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(M,null,C,f,m,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(M,null,C,p,m,null)}function w(b,M,C,R,v,A){let D=null;const Z=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(Z!==void 0?D=Z:D=C.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const oe=D.uuid,B=M.uuid;let F=c[oe];F===void 0&&(F={},c[oe]=F);let q=F[B];q===void 0&&(q=D.clone(),F[B]=q),D=q}return D.visible=M.visible,D.wireframe=M.wireframe,A===es?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:h[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,C.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(C.matrixWorld),D.nearDistance=R,D.farDistance=v),D}function y(b,M,C,R,v){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===es)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const Z=e.update(b),oe=b.material;if(Array.isArray(oe)){const B=Z.groups;for(let F=0,q=B.length;F<q;F++){const j=B[F],X=oe[j.materialIndex];if(X&&X.visible){const V=w(b,X,R,C.near,C.far,v);i.renderBufferDirect(C,null,Z,V,b,j)}}}else if(oe.visible){const B=w(b,oe,R,C.near,C.far,v);i.renderBufferDirect(C,null,Z,B,b,null)}}const D=b.children;for(let Z=0,oe=D.length;Z<oe;Z++)y(D[Z],M,C,R,v)}}function PM(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const te=new Ye;let de=null;const be=new Ye(0,0,0,0);return{setMask:function(Ee){de!==Ee&&!O&&(i.colorMask(Ee,Ee,Ee,Ee),de=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,$e,mt,yt,gi){gi===!0&&(Ee*=yt,$e*=yt,mt*=yt),te.set(Ee,$e,mt,yt),be.equals(te)===!1&&(i.clearColor(Ee,$e,mt,yt),be.copy(te))},reset:function(){O=!1,de=null,be.set(-1,0,0,0)}}}function s(){let O=!1,te=null,de=null,be=null;return{setTest:function(Ee){Ee?Fe(2929):Te(2929)},setMask:function(Ee){te!==Ee&&!O&&(i.depthMask(Ee),te=Ee)},setFunc:function(Ee){if(de!==Ee){switch(Ee){case Yg:i.depthFunc(512);break;case $g:i.depthFunc(519);break;case Zg:i.depthFunc(513);break;case fl:i.depthFunc(515);break;case Kg:i.depthFunc(514);break;case Jg:i.depthFunc(518);break;case Qg:i.depthFunc(516);break;case e0:i.depthFunc(517);break;default:i.depthFunc(515)}de=Ee}},setLocked:function(Ee){O=Ee},setClear:function(Ee){be!==Ee&&(i.clearDepth(Ee),be=Ee)},reset:function(){O=!1,te=null,de=null,be=null}}}function o(){let O=!1,te=null,de=null,be=null,Ee=null,$e=null,mt=null,yt=null,gi=null;return{setTest:function(rt){O||(rt?Fe(2960):Te(2960))},setMask:function(rt){te!==rt&&!O&&(i.stencilMask(rt),te=rt)},setFunc:function(rt,Ln,qt){(de!==rt||be!==Ln||Ee!==qt)&&(i.stencilFunc(rt,Ln,qt),de=rt,be=Ln,Ee=qt)},setOp:function(rt,Ln,qt){($e!==rt||mt!==Ln||yt!==qt)&&(i.stencilOp(rt,Ln,qt),$e=rt,mt=Ln,yt=qt)},setLocked:function(rt){O=rt},setClear:function(rt){gi!==rt&&(i.clearStencil(rt),gi=rt)},reset:function(){O=!1,te=null,de=null,be=null,Ee=null,$e=null,mt=null,yt=null,gi=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,m=[],d=null,_=!1,w=null,y=null,b=null,M=null,C=null,R=null,v=null,A=!1,D=null,Z=null,oe=null,B=null,F=null;const q=i.getParameter(35661);let j=!1,X=0;const V=i.getParameter(7938);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=X>=2);let z=null,G={};const se=i.getParameter(3088),re=i.getParameter(2978),le=new Ye().fromArray(se),pe=new Ye().fromArray(re);function we(O,te,de){const be=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(O,Ee),i.texParameteri(O,10241,9728),i.texParameteri(O,10240,9728);for(let $e=0;$e<de;$e++)i.texImage2D(te+$e,0,6408,1,1,0,6408,5121,be);return Ee}const $={};$[3553]=we(3553,3553,1),$[34067]=we(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(2929),l.setFunc(fl),K(!1),ue(tu),Fe(2884),W(li);function Fe(O){f[O]!==!0&&(i.enable(O),f[O]=!0)}function Te(O){f[O]!==!1&&(i.disable(O),f[O]=!1)}function Ae(O,te){return p[O]!==te?(i.bindFramebuffer(O,te),p[O]=te,n&&(O===36009&&(p[36160]=te),O===36160&&(p[36009]=te)),!0):!1}function xe(O,te){let de=m,be=!1;if(O)if(de=g.get(te),de===void 0&&(de=[],g.set(te,de)),O.isWebGLMultipleRenderTargets){const Ee=O.texture;if(de.length!==Ee.length||de[0]!==36064){for(let $e=0,mt=Ee.length;$e<mt;$e++)de[$e]=36064+$e;de.length=Ee.length,be=!0}}else de[0]!==36064&&(de[0]=36064,be=!0);else de[0]!==1029&&(de[0]=1029,be=!0);be&&(t.isWebGL2?i.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function Ge(O){return d!==O?(i.useProgram(O),d=O,!0):!1}const E={[cr]:32774,[zg]:32778,[Ug]:32779};if(n)E[su]=32775,E[ou]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(E[su]=O.MIN_EXT,E[ou]=O.MAX_EXT)}const P={[Bg]:0,[kg]:1,[Vg]:768,[zf]:770,[qg]:776,[Xg]:774,[Hg]:772,[Gg]:769,[Uf]:771,[jg]:775,[Wg]:773};function W(O,te,de,be,Ee,$e,mt,yt){if(O===li){_===!0&&(Te(3042),_=!1);return}if(_===!1&&(Fe(3042),_=!0),O!==Ng){if(O!==w||yt!==A){if((y!==cr||C!==cr)&&(i.blendEquation(32774),y=cr,C=cr),yt)switch(O){case xr:i.blendFuncSeparate(1,771,1,771);break;case nu:i.blendFunc(1,1);break;case iu:i.blendFuncSeparate(0,769,0,1);break;case ru:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case xr:i.blendFuncSeparate(770,771,1,771);break;case nu:i.blendFunc(770,1);break;case iu:i.blendFuncSeparate(0,769,0,1);break;case ru:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,M=null,R=null,v=null,w=O,A=yt}return}Ee=Ee||te,$e=$e||de,mt=mt||be,(te!==y||Ee!==C)&&(i.blendEquationSeparate(E[te],E[Ee]),y=te,C=Ee),(de!==b||be!==M||$e!==R||mt!==v)&&(i.blendFuncSeparate(P[de],P[be],P[$e],P[mt]),b=de,M=be,R=$e,v=mt),w=O,A=null}function Q(O,te){O.side===ri?Te(2884):Fe(2884);let de=O.side===nn;te&&(de=!de),K(de),O.blending===xr&&O.transparent===!1?W(li):W(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const be=O.stencilWrite;c.setTest(be),be&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Fe(32926):Te(32926)}function K(O){D!==O&&(O?i.frontFace(2304):i.frontFace(2305),D=O)}function ue(O){O!==Ig?(Fe(2884),O!==Z&&(O===tu?i.cullFace(1029):O===Fg?i.cullFace(1028):i.cullFace(1032))):Te(2884),Z=O}function he(O){O!==oe&&(j&&i.lineWidth(O),oe=O)}function ie(O,te,de){O?(Fe(32823),(B!==te||F!==de)&&(i.polygonOffset(te,de),B=te,F=de)):Te(32823)}function fe(O){O?Fe(3089):Te(3089)}function ae(O){O===void 0&&(O=33984+q-1),z!==O&&(i.activeTexture(O),z=O)}function S(O,te,de){de===void 0&&(z===null?de=33984+q-1:de=z);let be=G[de];be===void 0&&(be={type:void 0,texture:void 0},G[de]=be),(be.type!==O||be.texture!==te)&&(z!==de&&(i.activeTexture(de),z=de),i.bindTexture(O,te||$[O]),be.type=O,be.texture=te)}function x(){const O=G[z];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function N(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function U(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(O){le.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),le.copy(O))}function ye(O){pe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),pe.copy(O))}function Pe(O,te){let de=h.get(te);de===void 0&&(de=new WeakMap,h.set(te,de));let be=de.get(O);be===void 0&&(be=i.getUniformBlockIndex(te,O.name),de.set(O,be))}function Be(O,te){const be=h.get(te).get(O);u.get(O)!==be&&(i.uniformBlockBinding(te,be,O.__bindingPointIndex),u.set(O,be))}function et(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},z=null,G={},p={},g=new WeakMap,m=[],d=null,_=!1,w=null,y=null,b=null,M=null,C=null,R=null,v=null,A=!1,D=null,Z=null,oe=null,B=null,F=null,le.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Fe,disable:Te,bindFramebuffer:Ae,drawBuffers:xe,useProgram:Ge,setBlending:W,setMaterial:Q,setFlipSided:K,setCullFace:ue,setLineWidth:he,setPolygonOffset:ie,setScissorTest:fe,activeTexture:ae,bindTexture:S,unbindTexture:x,compressedTexImage2D:N,compressedTexImage3D:Y,texImage2D:Me,texImage3D:ve,updateUBOMapping:Pe,uniformBlockBinding:Be,texStorage2D:U,texStorage3D:_e,texSubImage2D:ee,texSubImage3D:ce,compressedTexSubImage2D:ge,compressedTexSubImage3D:L,scissor:Se,viewport:ye,reset:et}}function DM(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(S,x){return _?new OffscreenCanvas(S,x):_s("canvas")}function y(S,x,N,Y){let ee=1;if((S.width>Y||S.height>Y)&&(ee=Y/Math.max(S.width,S.height)),ee<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ce=x?Co:Math.floor,ge=ce(ee*S.width),L=ce(ee*S.height);m===void 0&&(m=w(ge,L));const U=N?w(ge,L):m;return U.width=ge,U.height=L,U.getContext("2d").drawImage(S,0,0,ge,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ge+"x"+L+")."),U}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function b(S){return gl(S.width)&&gl(S.height)}function M(S){return a?!1:S.wrapS!==Ht||S.wrapT!==Ht||S.minFilter!==bt&&S.minFilter!==Jt}function C(S,x){return S.generateMipmaps&&x&&S.minFilter!==bt&&S.minFilter!==Jt}function R(S){i.generateMipmap(S)}function v(S,x,N,Y,ee=!1){if(a===!1)return x;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ce=x;return x===6403&&(N===5126&&(ce=33326),N===5131&&(ce=33325),N===5121&&(ce=33321)),x===33319&&(N===5126&&(ce=33328),N===5131&&(ce=33327),N===5121&&(ce=33323)),x===6408&&(N===5126&&(ce=34836),N===5131&&(ce=34842),N===5121&&(ce=Y===tt&&ee===!1?35907:32856),N===32819&&(ce=32854),N===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function A(S,x,N){return C(S,N)===!0||S.isFramebufferTexture&&S.minFilter!==bt&&S.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function D(S){return S===bt||S===au||S===lu?9728:9729}function Z(S){const x=S.target;x.removeEventListener("dispose",Z),B(x),x.isVideoTexture&&g.delete(x)}function oe(S){const x=S.target;x.removeEventListener("dispose",oe),q(x)}function B(S){const x=n.get(S);if(x.__webglInit===void 0)return;const N=S.source,Y=d.get(N);if(Y){const ee=Y[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&F(S),Object.keys(Y).length===0&&d.delete(N)}n.remove(S)}function F(S){const x=n.get(S);i.deleteTexture(x.__webglTexture);const N=S.source,Y=d.get(N);delete Y[x.__cacheKey],o.memory.textures--}function q(S){const x=S.texture,N=n.get(S),Y=n.get(x);if(Y.__webglTexture!==void 0&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)i.deleteFramebuffer(N.__webglFramebuffer[ee]),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[ee]);else{if(i.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let ee=0;ee<N.__webglColorRenderbuffer.length;ee++)N.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[ee]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ee=0,ce=x.length;ee<ce;ee++){const ge=n.get(x[ee]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(x[ee])}n.remove(x),n.remove(S)}let j=0;function X(){j=0}function V(){const S=j;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),j+=1,S}function z(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.encoding),x.join()}function G(S,x){const N=n.get(S);if(S.isVideoTexture&&fe(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){const Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(N,S,x);return}}t.bindTexture(3553,N.__webglTexture,33984+x)}function se(S,x){const N=n.get(S);if(S.version>0&&N.__version!==S.version){Te(N,S,x);return}t.bindTexture(35866,N.__webglTexture,33984+x)}function re(S,x){const N=n.get(S);if(S.version>0&&N.__version!==S.version){Te(N,S,x);return}t.bindTexture(32879,N.__webglTexture,33984+x)}function le(S,x){const N=n.get(S);if(S.version>0&&N.__version!==S.version){Ae(N,S,x);return}t.bindTexture(34067,N.__webglTexture,33984+x)}const pe={[ps]:10497,[Ht]:33071,[pl]:33648},we={[bt]:9728,[au]:9984,[lu]:9986,[Jt]:9729,[l0]:9985,[Yo]:9987};function $(S,x,N){if(N?(i.texParameteri(S,10242,pe[x.wrapS]),i.texParameteri(S,10243,pe[x.wrapT]),(S===32879||S===35866)&&i.texParameteri(S,32882,pe[x.wrapR]),i.texParameteri(S,10240,we[x.magFilter]),i.texParameteri(S,10241,we[x.minFilter])):(i.texParameteri(S,10242,33071),i.texParameteri(S,10243,33071),(S===32879||S===35866)&&i.texParameteri(S,32882,33071),(x.wrapS!==Ht||x.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,10240,D(x.magFilter)),i.texParameteri(S,10241,D(x.minFilter)),x.minFilter!==bt&&x.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(x.type===si&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===ms&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(S,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Fe(S,x){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",Z));const Y=x.source;let ee=d.get(Y);ee===void 0&&(ee={},d.set(Y,ee));const ce=z(x);if(ce!==S.__cacheKey){ee[ce]===void 0&&(ee[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ee[ce].usedTimes++;const ge=ee[S.__cacheKey];ge!==void 0&&(ee[S.__cacheKey].usedTimes--,ge.usedTimes===0&&F(x)),S.__cacheKey=ce,S.__webglTexture=ee[ce].texture}return N}function Te(S,x,N){let Y=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=35866),x.isData3DTexture&&(Y=32879);const ee=Fe(S,x),ce=x.source;t.bindTexture(Y,S.__webglTexture,33984+N);const ge=n.get(ce);if(ce.version!==ge.__version||ee===!0){t.activeTexture(33984+N),i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const L=M(x)&&b(x.image)===!1;let U=y(x.image,L,!1,u);U=ae(x,U);const _e=b(U)||a,Me=s.convert(x.format,x.encoding);let ve=s.convert(x.type),Se=v(x.internalFormat,Me,ve,x.encoding,x.isVideoTexture);$(Y,x,_e);let ye;const Pe=x.mipmaps,Be=a&&x.isVideoTexture!==!0,et=ge.__version===void 0||ee===!0,O=A(x,U,_e);if(x.isDepthTexture)Se=6402,a?x.type===si?Se=36012:x.type===Di?Se=33190:x.type===yr?Se=35056:Se=33189:x.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ni&&Se===6402&&x.type!==kf&&x.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Di,ve=s.convert(x.type)),x.format===Ar&&Se===6402&&(Se=34041,x.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=yr,ve=s.convert(x.type))),et&&(Be?t.texStorage2D(3553,1,Se,U.width,U.height):t.texImage2D(3553,0,Se,U.width,U.height,0,Me,ve,null));else if(x.isDataTexture)if(Pe.length>0&&_e){Be&&et&&t.texStorage2D(3553,O,Se,Pe[0].width,Pe[0].height);for(let te=0,de=Pe.length;te<de;te++)ye=Pe[te],Be?t.texSubImage2D(3553,te,0,0,ye.width,ye.height,Me,ve,ye.data):t.texImage2D(3553,te,Se,ye.width,ye.height,0,Me,ve,ye.data);x.generateMipmaps=!1}else Be?(et&&t.texStorage2D(3553,O,Se,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,Me,ve,U.data)):t.texImage2D(3553,0,Se,U.width,U.height,0,Me,ve,U.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Be&&et&&t.texStorage3D(35866,O,Se,Pe[0].width,Pe[0].height,U.depth);for(let te=0,de=Pe.length;te<de;te++)ye=Pe[te],x.format!==Qt?Me!==null?Be?t.compressedTexSubImage3D(35866,te,0,0,0,ye.width,ye.height,U.depth,Me,ye.data,0,0):t.compressedTexImage3D(35866,te,Se,ye.width,ye.height,U.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,te,0,0,0,ye.width,ye.height,U.depth,Me,ve,ye.data):t.texImage3D(35866,te,Se,ye.width,ye.height,U.depth,0,Me,ve,ye.data)}else{Be&&et&&t.texStorage2D(3553,O,Se,Pe[0].width,Pe[0].height);for(let te=0,de=Pe.length;te<de;te++)ye=Pe[te],x.format!==Qt?Me!==null?Be?t.compressedTexSubImage2D(3553,te,0,0,ye.width,ye.height,Me,ye.data):t.compressedTexImage2D(3553,te,Se,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,te,0,0,ye.width,ye.height,Me,ve,ye.data):t.texImage2D(3553,te,Se,ye.width,ye.height,0,Me,ve,ye.data)}else if(x.isDataArrayTexture)Be?(et&&t.texStorage3D(35866,O,Se,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,Me,ve,U.data)):t.texImage3D(35866,0,Se,U.width,U.height,U.depth,0,Me,ve,U.data);else if(x.isData3DTexture)Be?(et&&t.texStorage3D(32879,O,Se,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,Me,ve,U.data)):t.texImage3D(32879,0,Se,U.width,U.height,U.depth,0,Me,ve,U.data);else if(x.isFramebufferTexture){if(et)if(Be)t.texStorage2D(3553,O,Se,U.width,U.height);else{let te=U.width,de=U.height;for(let be=0;be<O;be++)t.texImage2D(3553,be,Se,te,de,0,Me,ve,null),te>>=1,de>>=1}}else if(Pe.length>0&&_e){Be&&et&&t.texStorage2D(3553,O,Se,Pe[0].width,Pe[0].height);for(let te=0,de=Pe.length;te<de;te++)ye=Pe[te],Be?t.texSubImage2D(3553,te,0,0,Me,ve,ye):t.texImage2D(3553,te,Se,Me,ve,ye);x.generateMipmaps=!1}else Be?(et&&t.texStorage2D(3553,O,Se,U.width,U.height),t.texSubImage2D(3553,0,0,0,Me,ve,U)):t.texImage2D(3553,0,Se,Me,ve,U);C(x,_e)&&R(Y),ge.__version=ce.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Ae(S,x,N){if(x.image.length!==6)return;const Y=Fe(S,x),ee=x.source;t.bindTexture(34067,S.__webglTexture,33984+N);const ce=n.get(ee);if(ee.version!==ce.__version||Y===!0){t.activeTexture(33984+N),i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const ge=x.isCompressedTexture||x.image[0].isCompressedTexture,L=x.image[0]&&x.image[0].isDataTexture,U=[];for(let te=0;te<6;te++)!ge&&!L?U[te]=y(x.image[te],!1,!0,c):U[te]=L?x.image[te].image:x.image[te],U[te]=ae(x,U[te]);const _e=U[0],Me=b(_e)||a,ve=s.convert(x.format,x.encoding),Se=s.convert(x.type),ye=v(x.internalFormat,ve,Se,x.encoding),Pe=a&&x.isVideoTexture!==!0,Be=ce.__version===void 0||Y===!0;let et=A(x,_e,Me);$(34067,x,Me);let O;if(ge){Pe&&Be&&t.texStorage2D(34067,et,ye,_e.width,_e.height);for(let te=0;te<6;te++){O=U[te].mipmaps;for(let de=0;de<O.length;de++){const be=O[de];x.format!==Qt?ve!==null?Pe?t.compressedTexSubImage2D(34069+te,de,0,0,be.width,be.height,ve,be.data):t.compressedTexImage2D(34069+te,de,ye,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+te,de,0,0,be.width,be.height,ve,Se,be.data):t.texImage2D(34069+te,de,ye,be.width,be.height,0,ve,Se,be.data)}}}else{O=x.mipmaps,Pe&&Be&&(O.length>0&&et++,t.texStorage2D(34067,et,ye,U[0].width,U[0].height));for(let te=0;te<6;te++)if(L){Pe?t.texSubImage2D(34069+te,0,0,0,U[te].width,U[te].height,ve,Se,U[te].data):t.texImage2D(34069+te,0,ye,U[te].width,U[te].height,0,ve,Se,U[te].data);for(let de=0;de<O.length;de++){const Ee=O[de].image[te].image;Pe?t.texSubImage2D(34069+te,de+1,0,0,Ee.width,Ee.height,ve,Se,Ee.data):t.texImage2D(34069+te,de+1,ye,Ee.width,Ee.height,0,ve,Se,Ee.data)}}else{Pe?t.texSubImage2D(34069+te,0,0,0,ve,Se,U[te]):t.texImage2D(34069+te,0,ye,ve,Se,U[te]);for(let de=0;de<O.length;de++){const be=O[de];Pe?t.texSubImage2D(34069+te,de+1,0,0,ve,Se,be.image[te]):t.texImage2D(34069+te,de+1,ye,ve,Se,be.image[te])}}}C(x,Me)&&R(34067),ce.__version=ee.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function xe(S,x,N,Y,ee){const ce=s.convert(N.format,N.encoding),ge=s.convert(N.type),L=v(N.internalFormat,ce,ge,N.encoding);n.get(x).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,L,x.width,x.height,x.depth,0,ce,ge,null):t.texImage2D(ee,0,L,x.width,x.height,0,ce,ge,null)),t.bindFramebuffer(36160,S),ie(x)?f.framebufferTexture2DMultisampleEXT(36160,Y,ee,n.get(N).__webglTexture,0,he(x)):(ee===3553||ee>=34069&&ee<=34074)&&i.framebufferTexture2D(36160,Y,ee,n.get(N).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ge(S,x,N){if(i.bindRenderbuffer(36161,S),x.depthBuffer&&!x.stencilBuffer){let Y=33189;if(N||ie(x)){const ee=x.depthTexture;ee&&ee.isDepthTexture&&(ee.type===si?Y=36012:ee.type===Di&&(Y=33190));const ce=he(x);ie(x)?f.renderbufferStorageMultisampleEXT(36161,ce,Y,x.width,x.height):i.renderbufferStorageMultisample(36161,ce,Y,x.width,x.height)}else i.renderbufferStorage(36161,Y,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,S)}else if(x.depthBuffer&&x.stencilBuffer){const Y=he(x);N&&ie(x)===!1?i.renderbufferStorageMultisample(36161,Y,35056,x.width,x.height):ie(x)?f.renderbufferStorageMultisampleEXT(36161,Y,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,S)}else{const Y=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ee=0;ee<Y.length;ee++){const ce=Y[ee],ge=s.convert(ce.format,ce.encoding),L=s.convert(ce.type),U=v(ce.internalFormat,ge,L,ce.encoding),_e=he(x);N&&ie(x)===!1?i.renderbufferStorageMultisample(36161,_e,U,x.width,x.height):ie(x)?f.renderbufferStorageMultisampleEXT(36161,_e,U,x.width,x.height):i.renderbufferStorage(36161,U,x.width,x.height)}}i.bindRenderbuffer(36161,null)}function E(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const Y=n.get(x.depthTexture).__webglTexture,ee=he(x);if(x.depthTexture.format===Ni)ie(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Y,0,ee):i.framebufferTexture2D(36160,36096,3553,Y,0);else if(x.depthTexture.format===Ar)ie(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Y,0,ee):i.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function P(S){const x=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");E(x.__webglFramebuffer,S)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ge(x.__webglDepthbuffer[Y],S,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Ge(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function W(S,x,N){const Y=n.get(S);x!==void 0&&xe(Y.__webglFramebuffer,S,S.texture,36064,3553),N!==void 0&&P(S)}function Q(S){const x=S.texture,N=n.get(S),Y=n.get(x);S.addEventListener("dispose",oe),S.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,o.memory.textures++);const ee=S.isWebGLCubeRenderTarget===!0,ce=S.isWebGLMultipleRenderTargets===!0,ge=b(S)||a;if(ee){N.__webglFramebuffer=[];for(let L=0;L<6;L++)N.__webglFramebuffer[L]=i.createFramebuffer()}else{if(N.__webglFramebuffer=i.createFramebuffer(),ce)if(r.drawBuffers){const L=S.texture;for(let U=0,_e=L.length;U<_e;U++){const Me=n.get(L[U]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&ie(S)===!1){const L=ce?x:[x];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let U=0;U<L.length;U++){const _e=L[U];N.__webglColorRenderbuffer[U]=i.createRenderbuffer(),i.bindRenderbuffer(36161,N.__webglColorRenderbuffer[U]);const Me=s.convert(_e.format,_e.encoding),ve=s.convert(_e.type),Se=v(_e.internalFormat,Me,ve,_e.encoding,S.isXRRenderTarget===!0),ye=he(S);i.renderbufferStorageMultisample(36161,ye,Se,S.width,S.height),i.framebufferRenderbuffer(36160,36064+U,36161,N.__webglColorRenderbuffer[U])}i.bindRenderbuffer(36161,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,Y.__webglTexture),$(34067,x,ge);for(let L=0;L<6;L++)xe(N.__webglFramebuffer[L],S,x,36064,34069+L);C(x,ge)&&R(34067),t.unbindTexture()}else if(ce){const L=S.texture;for(let U=0,_e=L.length;U<_e;U++){const Me=L[U],ve=n.get(Me);t.bindTexture(3553,ve.__webglTexture),$(3553,Me,ge),xe(N.__webglFramebuffer,S,Me,36064+U,3553),C(Me,ge)&&R(3553)}t.unbindTexture()}else{let L=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?L=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,Y.__webglTexture),$(L,x,ge),xe(N.__webglFramebuffer,S,x,36064,L),C(x,ge)&&R(L),t.unbindTexture()}S.depthBuffer&&P(S)}function K(S){const x=b(S)||a,N=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Y=0,ee=N.length;Y<ee;Y++){const ce=N[Y];if(C(ce,x)){const ge=S.isWebGLCubeRenderTarget?34067:3553,L=n.get(ce).__webglTexture;t.bindTexture(ge,L),R(ge),t.unbindTexture()}}}function ue(S){if(a&&S.samples>0&&ie(S)===!1){const x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],N=S.width,Y=S.height;let ee=16384;const ce=[],ge=S.stencilBuffer?33306:36096,L=n.get(S),U=S.isWebGLMultipleRenderTargets===!0;if(U)for(let _e=0;_e<x.length;_e++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),i.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){ce.push(36064+_e),S.depthBuffer&&ce.push(ge);const Me=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(Me===!1&&(S.depthBuffer&&(ee|=256),S.stencilBuffer&&(ee|=1024)),U&&i.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[_e]),Me===!0&&(i.invalidateFramebuffer(36008,[ge]),i.invalidateFramebuffer(36009,[ge])),U){const ve=n.get(x[_e]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,ve,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,ee,9728),p&&i.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),U)for(let _e=0;_e<x.length;_e++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+_e,36161,L.__webglColorRenderbuffer[_e]);const Me=n.get(x[_e]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),i.framebufferTexture2D(36009,36064+_e,3553,Me,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function he(S){return Math.min(h,S.samples)}function ie(S){const x=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function fe(S){const x=o.render.frame;g.get(S)!==x&&(g.set(S,x),S.update())}function ae(S,x){const N=S.encoding,Y=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===ml||N!==Bi&&(N===tt?a===!1?e.has("EXT_sRGB")===!0&&Y===Qt?(S.format=ml,S.minFilter=Jt,S.generateMipmaps=!1):x=Wf.sRGBToLinear(x):(Y!==Qt||ee!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),x}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.setTexture2D=G,this.setTexture2DArray=se,this.setTexture3D=re,this.setTextureCube=le,this.rebindTextures=W,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ie}function RM(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Ui)return 5121;if(s===f0)return 32819;if(s===d0)return 32820;if(s===c0)return 5120;if(s===u0)return 5122;if(s===kf)return 5123;if(s===h0)return 5124;if(s===Di)return 5125;if(s===si)return 5126;if(s===ms)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===p0)return 6406;if(s===Qt)return 6408;if(s===g0)return 6409;if(s===_0)return 6410;if(s===Ni)return 6402;if(s===Ar)return 34041;if(s===v0)return 6403;if(s===m0)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ml)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===x0)return 36244;if(s===y0)return 33319;if(s===M0)return 33320;if(s===b0)return 36249;if(s===fa||s===da||s===pa||s===ma)if(o===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ma)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cu||s===uu||s===hu||s===fu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===cu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===w0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===du||s===pu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===du)return o===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===pu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===mu||s===gu||s===_u||s===vu||s===xu||s===yu||s===Mu||s===bu||s===wu||s===Su||s===Tu||s===Eu||s===Au||s===Cu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===mu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_u)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Su)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Eu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Au)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Lu)return o===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===yr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class IM extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mr extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const w=new mr;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[m.jointName]=w,c.add(w)}const _=c.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class OM extends Ft{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ni,u!==Ni&&u!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ni&&(n=Di),n===void 0&&u===Ar&&(n=yr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1}}class NM extends Vi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],w=[],y=new Pt;y.layers.enable(1),y.viewport=new Ye;const b=new Pt;b.layers.enable(2),b.viewport=new Ye;const M=[y,b],C=new IM;C.layers.enable(1),C.layers.enable(2);let R=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let G=_[z];return G===void 0&&(G=new Ga,_[z]=G),G.getTargetRaySpace()},this.getControllerGrip=function(z){let G=_[z];return G===void 0&&(G=new Ga,_[z]=G),G.getGripSpace()},this.getHand=function(z){let G=_[z];return G===void 0&&(G=new Ga,_[z]=G),G.getHandSpace()};function A(z){const G=w.indexOf(z.inputSource);if(G===-1)return;const se=_[G];se!==void 0&&se.dispatchEvent({type:z.type,data:z.inputSource})}function D(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",Z);for(let z=0;z<_.length;z++){const G=w[z];G!==null&&(w[z]=null,_[z].disconnect(G))}R=null,v=null,e.setRenderTarget(m),f=null,h=null,u=null,r=null,d=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",D),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:f}),d=new ki(f.framebufferWidth,f.framebufferHeight,{format:Qt,type:Ui,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let G=null,se=null,re=null;g.depth&&(re=g.stencil?35056:33190,G=g.stencil?Ar:Ni,se=g.stencil?yr:Di);const le={colorFormat:32856,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(le),r.updateRenderState({layers:[h]}),d=new ki(h.textureWidth,h.textureHeight,{format:Qt,type:Ui,depthTexture:new OM(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const pe=e.properties.get(d);pe.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function Z(z){for(let G=0;G<z.removed.length;G++){const se=z.removed[G],re=w.indexOf(se);re>=0&&(w[re]=null,_[re].dispatchEvent({type:"disconnected",data:se}))}for(let G=0;G<z.added.length;G++){const se=z.added[G];let re=w.indexOf(se);if(re===-1){for(let pe=0;pe<_.length;pe++)if(pe>=w.length){w.push(se),re=pe;break}else if(w[pe]===null){w[pe]=se,re=pe;break}if(re===-1)break}const le=_[re];le&&le.dispatchEvent({type:"connected",data:se})}}const oe=new I,B=new I;function F(z,G,se){oe.setFromMatrixPosition(G.matrixWorld),B.setFromMatrixPosition(se.matrixWorld);const re=oe.distanceTo(B),le=G.projectionMatrix.elements,pe=se.projectionMatrix.elements,we=le[14]/(le[10]-1),$=le[14]/(le[10]+1),Fe=(le[9]+1)/le[5],Te=(le[9]-1)/le[5],Ae=(le[8]-1)/le[0],xe=(pe[8]+1)/pe[0],Ge=we*Ae,E=we*xe,P=re/(-Ae+xe),W=P*-Ae;G.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(W),z.translateZ(P),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Q=we+P,K=$+P,ue=Ge-W,he=E+(re-W),ie=Fe*$/K*Q,fe=Te*$/K*Q;z.projectionMatrix.makePerspective(ue,he,ie,fe,Q,K)}function q(z,G){G===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(G.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;C.near=b.near=y.near=z.near,C.far=b.far=y.far=z.far,(R!==C.near||v!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),R=C.near,v=C.far);const G=z.parent,se=C.cameras;q(C,G);for(let le=0;le<se.length;le++)q(se[le],G);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),z.matrix.copy(C.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const re=z.children;for(let le=0,pe=re.length;le<pe;le++)re[le].updateMatrixWorld(!0);se.length===2?F(C,y,b):C.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(z){h!==null&&(h.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)};let j=null;function X(z,G){if(c=G.getViewerPose(l||o),p=G,c!==null){const se=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let re=!1;se.length!==C.cameras.length&&(C.cameras.length=0,re=!0);for(let le=0;le<se.length;le++){const pe=se[le];let we=null;if(f!==null)we=f.getViewport(pe);else{const Fe=u.getViewSubImage(h,pe);we=Fe.viewport,le===0&&(e.setRenderTargetTextures(d,Fe.colorTexture,h.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(d))}let $=M[le];$===void 0&&($=new Pt,$.layers.enable(le),$.viewport=new Ye,M[le]=$),$.matrix.fromArray(pe.transform.matrix),$.projectionMatrix.fromArray(pe.projectionMatrix),$.viewport.set(we.x,we.y,we.width,we.height),le===0&&C.matrix.copy($.matrix),re===!0&&C.cameras.push($)}}for(let se=0;se<_.length;se++){const re=w[se],le=_[se];re!==null&&le!==void 0&&le.update(re,G,l||o)}j&&j(z,G),p=null}const V=new Kf;V.setAnimationLoop(X),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}}function zM(i,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,_,w,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),p(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,_,w):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===nn&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===nn&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const b=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let w;d.map?w=d.map:d.specularMap?w=d.specularMap:d.displacementMap?w=d.displacementMap:d.normalMap?w=d.normalMap:d.bumpMap?w=d.bumpMap:d.roughnessMap?w=d.roughnessMap:d.metalnessMap?w=d.metalnessMap:d.alphaMap?w=d.alphaMap:d.emissiveMap?w=d.emissiveMap:d.clearcoatMap?w=d.clearcoatMap:d.clearcoatNormalMap?w=d.clearcoatNormalMap:d.clearcoatRoughnessMap?w=d.clearcoatRoughnessMap:d.iridescenceMap?w=d.iridescenceMap:d.iridescenceThicknessMap?w=d.iridescenceThicknessMap:d.specularIntensityMap?w=d.specularIntensityMap:d.specularColorMap?w=d.specularColorMap:d.transmissionMap?w=d.transmissionMap:d.thicknessMap?w=d.thicknessMap:d.sheenColorMap?w=d.sheenColorMap:d.sheenRoughnessMap&&(w=d.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uv2Transform.value.copy(y.matrix))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,_,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=w*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===nn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function UM(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(w,y){const b=y.program;n.uniformBlockBinding(w,b)}function c(w,y){let b=r[w.id];b===void 0&&(g(w),b=u(w),r[w.id]=b,w.addEventListener("dispose",d));const M=y.program;n.updateUBOMapping(w,M);const C=e.render.frame;s[w.id]!==C&&(f(w),s[w.id]=C)}function u(w){const y=h();w.__bindingPointIndex=y;const b=i.createBuffer(),M=w.__size,C=w.usage;return i.bindBuffer(35345,b),i.bufferData(35345,M,C),i.bindBuffer(35345,null),i.bindBufferBase(35345,y,b),b}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const y=r[w.id],b=w.uniforms,M=w.__cache;i.bindBuffer(35345,y);for(let C=0,R=b.length;C<R;C++){const v=b[C];if(p(v,C,M)===!0){const A=v.value,D=v.__offset;typeof A=="number"?(v.__data[0]=A,i.bufferSubData(35345,D,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):A.toArray(v.__data),i.bufferSubData(35345,D,v.__data))}}i.bindBuffer(35345,null)}function p(w,y,b){const M=w.value;if(b[y]===void 0)return typeof M=="number"?b[y]=M:b[y]=M.clone(),!0;if(typeof M=="number"){if(b[y]!==M)return b[y]=M,!0}else{const C=b[y];if(C.equals(M)===!1)return C.copy(M),!0}return!1}function g(w){const y=w.uniforms;let b=0;const M=16;let C=0;for(let R=0,v=y.length;R<v;R++){const A=y[R],D=m(A);if(A.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,R>0){C=b%M;const Z=M-C;C!==0&&Z-D.boundary<0&&(b+=M-C,A.__offset=b)}b+=D.storage}return C=b%M,C>0&&(b+=M-C),w.__size=b,w.__cache={},this}function m(w){const y=w.value,b={boundary:0,storage:0};return typeof y=="number"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function d(w){const y=w.target;y.removeEventListener("dispose",d);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function _(){for(const w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function BM(){const i=_s("canvas");return i.style.display="block",i}function nd(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:BM(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Bi,this.physicallyCorrectLights=!1,this.toneMapping=kn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,w=0,y=null,b=-1,M=null;const C=new Ye,R=new Ye;let v=null,A=e.width,D=e.height,Z=1,oe=null,B=null;const F=new Ye(0,0,A,D),q=new Ye(0,0,A,D);let j=!1;const X=new ic;let V=!1,z=!1,G=null;const se=new Ce,re=new Ie,le=new I,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return y===null?Z:1}let $=t;function Fe(T,H){for(let J=0;J<T.length;J++){const k=T[J],ne=e.getContext(k,H);if(ne!==null)return ne}return null}try{const T={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jl}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",Pe,!1),$===null){const H=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&H.shift(),$=Fe(H,T),$===null)throw Fe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Te,Ae,xe,Ge,E,P,W,Q,K,ue,he,ie,fe,ae,S,x,N,Y,ee,ce,ge,L,U,_e;function Me(){Te=new Zx($),Ae=new Wx($,Te,i),Te.init(Ae),L=new RM($,Te,Ae),xe=new PM($,Te,Ae),Ge=new Qx,E=new gM,P=new DM($,Te,xe,E,Ae,L,Ge),W=new jx(m),Q=new $x(m),K=new l_($,Ae),U=new Gx($,Te,K,Ae),ue=new Kx($,K,Ge,U),he=new iy($,ue,K,Ge),ee=new ny($,Ae,P),x=new Xx(E),ie=new mM(m,W,Q,Te,Ae,U,x),fe=new zM(m,E),ae=new vM,S=new SM(Te,Ae),Y=new Vx(m,W,Q,xe,he,u,o),N=new LM(m,he,Ae),_e=new UM($,Ge,Ae,xe),ce=new Hx($,Te,Ge,Ae),ge=new Jx($,Te,Ge,Ae),Ge.programs=ie.programs,m.capabilities=Ae,m.extensions=Te,m.properties=E,m.renderLists=ae,m.shadowMap=N,m.state=xe,m.info=Ge}Me();const ve=new NM(m,$);this.xr=ve,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const T=Te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(A,D,!1))},this.getSize=function(T){return T.set(A,D)},this.setSize=function(T,H,J){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=T,D=H,e.width=Math.floor(T*Z),e.height=Math.floor(H*Z),J!==!1&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(A*Z,D*Z).floor()},this.setDrawingBufferSize=function(T,H,J){A=T,D=H,Z=J,e.width=Math.floor(T*J),e.height=Math.floor(H*J),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,H,J,k){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,H,J,k),xe.viewport(C.copy(F).multiplyScalar(Z).floor())},this.getScissor=function(T){return T.copy(q)},this.setScissor=function(T,H,J,k){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,H,J,k),xe.scissor(R.copy(q).multiplyScalar(Z).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(T){xe.setScissorTest(j=T)},this.setOpaqueSort=function(T){oe=T},this.setTransparentSort=function(T){B=T},this.getClearColor=function(T){return T.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(T=!0,H=!0,J=!0){let k=0;T&&(k|=16384),H&&(k|=256),J&&(k|=1024),$.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Pe,!1),ae.dispose(),S.dispose(),E.dispose(),W.dispose(),Q.dispose(),he.dispose(),U.dispose(),_e.dispose(),ie.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",be),ve.removeEventListener("sessionend",Ee),G&&(G.dispose(),G=null),$e.stop()};function Se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=Ge.autoReset,H=N.enabled,J=N.autoUpdate,k=N.needsUpdate,ne=N.type;Me(),Ge.autoReset=T,N.enabled=H,N.autoUpdate=J,N.needsUpdate=k,N.type=ne}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Be(T){const H=T.target;H.removeEventListener("dispose",Be),et(H)}function et(T){O(T),E.remove(T)}function O(T){const H=E.get(T).programs;H!==void 0&&(H.forEach(function(J){ie.releaseProgram(J)}),T.isShaderMaterial&&ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,J,k,ne,Le){H===null&&(H=pe);const Re=ne.isMesh&&ne.matrixWorld.determinant()<0,Ue=Jd(T,H,J,k,ne);xe.setMaterial(k,Re);let Oe=J.index;const Ze=J.attributes.position;if(Oe===null){if(Ze===void 0||Ze.count===0)return}else if(Oe.count===0)return;let He=1;k.wireframe===!0&&(Oe=ue.getWireframeAttribute(J),He=2),U.setup(ne,k,Ue,J,Oe);let je,ot=ce;Oe!==null&&(je=K.get(Oe),ot=ge,ot.setIndex(je));const _i=Oe!==null?Oe.count:Ze.count,Hi=J.drawRange.start*He,Wi=J.drawRange.count*He,mn=Le!==null?Le.start*He:0,Ke=Le!==null?Le.count*He:1/0,Xi=Math.max(Hi,mn),ct=Math.min(_i,Hi+Wi,mn+Ke)-1,Yt=Math.max(0,ct-Xi+1);if(Yt!==0){if(ne.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*we()),ot.setMode(1)):ot.setMode(4);else if(ne.isLine){let jn=k.linewidth;jn===void 0&&(jn=1),xe.setLineWidth(jn*we()),ne.isLineSegments?ot.setMode(1):ne.isLineLoop?ot.setMode(2):ot.setMode(3)}else ne.isPoints?ot.setMode(0):ne.isSprite&&ot.setMode(4);if(ne.isInstancedMesh)ot.renderInstances(Xi,Yt,ne.count);else if(J.isInstancedBufferGeometry){const jn=Math.min(J.instanceCount,J._maxInstanceCount);ot.renderInstances(Xi,Yt,jn)}else ot.render(Xi,Yt)}},this.compile=function(T,H){function J(k,ne,Le){k.transparent===!0&&k.side===ri?(k.side=nn,k.needsUpdate=!0,qt(k,ne,Le),k.side=Sr,k.needsUpdate=!0,qt(k,ne,Le),k.side=ri):qt(k,ne,Le)}f=S.get(T),f.init(),g.push(f),T.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(m.physicallyCorrectLights),T.traverse(function(k){const ne=k.material;if(ne)if(Array.isArray(ne))for(let Le=0;Le<ne.length;Le++){const Re=ne[Le];J(Re,T,k)}else J(ne,T,k)}),g.pop(),f=null};let te=null;function de(T){te&&te(T)}function be(){$e.stop()}function Ee(){$e.start()}const $e=new Kf;$e.setAnimationLoop(de),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(T){te=T,ve.setAnimationLoop(T),T===null?$e.stop():$e.start()},ve.addEventListener("sessionstart",be),ve.addEventListener("sessionend",Ee),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(H),H=ve.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,H,y),f=S.get(T,g.length),f.init(),g.push(f),se.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),X.setFromProjectionMatrix(se),z=this.localClippingEnabled,V=x.init(this.clippingPlanes,z,H),h=ae.get(T,p.length),h.init(),p.push(h),mt(T,H,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(oe,B),V===!0&&x.beginShadows();const J=f.state.shadowsArray;if(N.render(J,T,H),V===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(h,T),f.setupLights(m.physicallyCorrectLights),H.isArrayCamera){const k=H.cameras;for(let ne=0,Le=k.length;ne<Le;ne++){const Re=k[ne];yt(h,T,Re,Re.viewport)}}else yt(h,T,H);y!==null&&(P.updateMultisampleRenderTarget(y),P.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(m,T,H),U.resetDefaultState(),b=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function mt(T,H,J,k){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){k&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const Re=he.update(T),Ue=T.material;Ue.visible&&h.push(T,Re,Ue,J,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ge.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ge.render.frame),!T.frustumCulled||X.intersectsObject(T))){k&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const Re=he.update(T),Ue=T.material;if(Array.isArray(Ue)){const Oe=Re.groups;for(let Ze=0,He=Oe.length;Ze<He;Ze++){const je=Oe[Ze],ot=Ue[je.materialIndex];ot&&ot.visible&&h.push(T,Re,ot,J,le.z,je)}}else Ue.visible&&h.push(T,Re,Ue,J,le.z,null)}}const Le=T.children;for(let Re=0,Ue=Le.length;Re<Ue;Re++)mt(Le[Re],H,J,k)}function yt(T,H,J,k){const ne=T.opaque,Le=T.transmissive,Re=T.transparent;f.setupLightsView(J),Le.length>0&&gi(ne,H,J),k&&xe.viewport(C.copy(k)),ne.length>0&&rt(ne,H,J),Le.length>0&&rt(Le,H,J),Re.length>0&&rt(Re,H,J),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function gi(T,H,J){const k=Ae.isWebGL2;G===null&&(G=new ki(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?ms:Ui,minFilter:Yo,samples:k&&s===!0?4:0})),m.getDrawingBufferSize(re),k?G.setSize(re.x,re.y):G.setSize(Co(re.x),Co(re.y));const ne=m.getRenderTarget();m.setRenderTarget(G),m.clear();const Le=m.toneMapping;m.toneMapping=kn,rt(T,H,J),m.toneMapping=Le,P.updateMultisampleRenderTarget(G),P.updateRenderTargetMipmap(G),m.setRenderTarget(ne)}function rt(T,H,J){const k=H.isScene===!0?H.overrideMaterial:null;for(let ne=0,Le=T.length;ne<Le;ne++){const Re=T[ne],Ue=Re.object,Oe=Re.geometry,Ze=k===null?Re.material:k,He=Re.group;Ue.layers.test(J.layers)&&Ln(Ue,H,J,Oe,Ze,He)}}function Ln(T,H,J,k,ne,Le){T.onBeforeRender(m,H,J,k,ne,Le),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ne.onBeforeRender(m,H,J,k,T,Le),ne.transparent===!0&&ne.side===ri?(ne.side=nn,ne.needsUpdate=!0,m.renderBufferDirect(J,H,k,ne,T,Le),ne.side=Sr,ne.needsUpdate=!0,m.renderBufferDirect(J,H,k,ne,T,Le),ne.side=ri):m.renderBufferDirect(J,H,k,ne,T,Le),T.onAfterRender(m,H,J,k,ne,Le)}function qt(T,H,J){H.isScene!==!0&&(H=pe);const k=E.get(T),ne=f.state.lights,Le=f.state.shadowsArray,Re=ne.state.version,Ue=ie.getParameters(T,ne.state,Le,H,J),Oe=ie.getProgramCacheKey(Ue);let Ze=k.programs;k.environment=T.isMeshStandardMaterial?H.environment:null,k.fog=H.fog,k.envMap=(T.isMeshStandardMaterial?Q:W).get(T.envMap||k.environment),Ze===void 0&&(T.addEventListener("dispose",Be),Ze=new Map,k.programs=Ze);let He=Ze.get(Oe);if(He!==void 0){if(k.currentProgram===He&&k.lightsStateVersion===Re)return Tc(T,Ue),He}else Ue.uniforms=ie.getUniforms(T),T.onBuild(J,Ue,m),T.onBeforeCompile(Ue,m),He=ie.acquireProgram(Ue,Oe),Ze.set(Oe,He),k.uniforms=Ue.uniforms;const je=k.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(je.clippingPlanes=x.uniform),Tc(T,Ue),k.needsLights=ep(T),k.lightsStateVersion=Re,k.needsLights&&(je.ambientLightColor.value=ne.state.ambient,je.lightProbe.value=ne.state.probe,je.directionalLights.value=ne.state.directional,je.directionalLightShadows.value=ne.state.directionalShadow,je.spotLights.value=ne.state.spot,je.spotLightShadows.value=ne.state.spotShadow,je.rectAreaLights.value=ne.state.rectArea,je.ltc_1.value=ne.state.rectAreaLTC1,je.ltc_2.value=ne.state.rectAreaLTC2,je.pointLights.value=ne.state.point,je.pointLightShadows.value=ne.state.pointShadow,je.hemisphereLights.value=ne.state.hemi,je.directionalShadowMap.value=ne.state.directionalShadowMap,je.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,je.spotShadowMap.value=ne.state.spotShadowMap,je.spotLightMatrix.value=ne.state.spotLightMatrix,je.spotLightMap.value=ne.state.spotLightMap,je.pointShadowMap.value=ne.state.pointShadowMap,je.pointShadowMatrix.value=ne.state.pointShadowMatrix);const ot=He.getUniforms(),_i=mo.seqWithValue(ot.seq,je);return k.currentProgram=He,k.uniformsList=_i,He}function Tc(T,H){const J=E.get(T);J.outputEncoding=H.outputEncoding,J.instancing=H.instancing,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Jd(T,H,J,k,ne){H.isScene!==!0&&(H=pe),P.resetTextureUnits();const Le=H.fog,Re=k.isMeshStandardMaterial?H.environment:null,Ue=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Bi,Oe=(k.isMeshStandardMaterial?Q:W).get(k.envMap||Re),Ze=k.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,He=!!k.normalMap&&!!J.attributes.tangent,je=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,_i=!!J.morphAttributes.color,Hi=k.toneMapped?m.toneMapping:kn,Wi=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,mn=Wi!==void 0?Wi.length:0,Ke=E.get(k),Xi=f.state.lights;if(V===!0&&(z===!0||T!==M)){const kt=T===M&&k.id===b;x.setState(k,T,kt)}let ct=!1;k.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Xi.state.version||Ke.outputEncoding!==Ue||ne.isInstancedMesh&&Ke.instancing===!1||!ne.isInstancedMesh&&Ke.instancing===!0||ne.isSkinnedMesh&&Ke.skinning===!1||!ne.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Oe||k.fog===!0&&Ke.fog!==Le||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==x.numPlanes||Ke.numIntersection!==x.numIntersection)||Ke.vertexAlphas!==Ze||Ke.vertexTangents!==He||Ke.morphTargets!==je||Ke.morphNormals!==ot||Ke.morphColors!==_i||Ke.toneMapping!==Hi||Ae.isWebGL2===!0&&Ke.morphTargetsCount!==mn)&&(ct=!0):(ct=!0,Ke.__version=k.version);let Yt=Ke.currentProgram;ct===!0&&(Yt=qt(k,H,ne));let jn=!1,jr=!1,ea=!1;const At=Yt.getUniforms(),vi=Ke.uniforms;if(xe.useProgram(Yt.program)&&(jn=!0,jr=!0,ea=!0),k.id!==b&&(b=k.id,jr=!0),jn||M!==T){if(At.setValue($,"projectionMatrix",T.projectionMatrix),Ae.logarithmicDepthBuffer&&At.setValue($,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,jr=!0,ea=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const kt=At.map.cameraPosition;kt!==void 0&&kt.setValue($,le.setFromMatrixPosition(T.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&At.setValue($,"isOrthographic",T.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||ne.isSkinnedMesh)&&At.setValue($,"viewMatrix",T.matrixWorldInverse)}if(ne.isSkinnedMesh){At.setOptional($,ne,"bindMatrix"),At.setOptional($,ne,"bindMatrixInverse");const kt=ne.skeleton;kt&&(Ae.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),At.setValue($,"boneTexture",kt.boneTexture,P),At.setValue($,"boneTextureSize",kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ta=J.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0&&Ae.isWebGL2===!0)&&ee.update(ne,J,k,Yt),(jr||Ke.receiveShadow!==ne.receiveShadow)&&(Ke.receiveShadow=ne.receiveShadow,At.setValue($,"receiveShadow",ne.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(vi.envMap.value=Oe,vi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),jr&&(At.setValue($,"toneMappingExposure",m.toneMappingExposure),Ke.needsLights&&Qd(vi,ea),Le&&k.fog===!0&&fe.refreshFogUniforms(vi,Le),fe.refreshMaterialUniforms(vi,k,Z,D,G),mo.upload($,Ke.uniformsList,vi,P)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(mo.upload($,Ke.uniformsList,vi,P),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&At.setValue($,"center",ne.center),At.setValue($,"modelViewMatrix",ne.modelViewMatrix),At.setValue($,"normalMatrix",ne.normalMatrix),At.setValue($,"modelMatrix",ne.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const kt=k.uniformsGroups;for(let na=0,tp=kt.length;na<tp;na++)if(Ae.isWebGL2){const Ec=kt[na];_e.update(Ec,Yt),_e.bind(Ec,Yt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yt}function Qd(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function ep(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,H,J){E.get(T.texture).__webglTexture=H,E.get(T.depthTexture).__webglTexture=J;const k=E.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=J===void 0,k.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const J=E.get(T);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,J=0){y=T,_=H,w=J;let k=!0,ne=null,Le=!1,Re=!1;if(T){const Oe=E.get(T);Oe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),k=!1):Oe.__webglFramebuffer===void 0?P.setupRenderTarget(T):Oe.__hasExternalTextures&&P.rebindTextures(T,E.get(T.texture).__webglTexture,E.get(T.depthTexture).__webglTexture);const Ze=T.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Re=!0);const He=E.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ne=He[H],Le=!0):Ae.isWebGL2&&T.samples>0&&P.useMultisampledRTT(T)===!1?ne=E.get(T).__webglMultisampledFramebuffer:ne=He,C.copy(T.viewport),R.copy(T.scissor),v=T.scissorTest}else C.copy(F).multiplyScalar(Z).floor(),R.copy(q).multiplyScalar(Z).floor(),v=j;if(xe.bindFramebuffer(36160,ne)&&Ae.drawBuffers&&k&&xe.drawBuffers(T,ne),xe.viewport(C),xe.scissor(R),xe.setScissorTest(v),Le){const Oe=E.get(T.texture);$.framebufferTexture2D(36160,36064,34069+H,Oe.__webglTexture,J)}else if(Re){const Oe=E.get(T.texture),Ze=H||0;$.framebufferTextureLayer(36160,36064,Oe.__webglTexture,J||0,Ze)}b=-1},this.readRenderTargetPixels=function(T,H,J,k,ne,Le,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=E.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){xe.bindFramebuffer(36160,Ue);try{const Oe=T.texture,Ze=Oe.format,He=Oe.type;if(Ze!==Qt&&L.convert(Ze)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=He===ms&&(Te.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Te.has("EXT_color_buffer_float"));if(He!==Ui&&L.convert(He)!==$.getParameter(35738)&&!(He===si&&(Ae.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-k&&J>=0&&J<=T.height-ne&&$.readPixels(H,J,k,ne,L.convert(Ze),L.convert(He),Le)}finally{const Oe=y!==null?E.get(y).__webglFramebuffer:null;xe.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(T,H,J=0){const k=Math.pow(2,-J),ne=Math.floor(H.image.width*k),Le=Math.floor(H.image.height*k);P.setTexture2D(H,0),$.copyTexSubImage2D(3553,J,0,0,T.x,T.y,ne,Le),xe.unbindTexture()},this.copyTextureToTexture=function(T,H,J,k=0){const ne=H.image.width,Le=H.image.height,Re=L.convert(J.format),Ue=L.convert(J.type);P.setTexture2D(J,0),$.pixelStorei(37440,J.flipY),$.pixelStorei(37441,J.premultiplyAlpha),$.pixelStorei(3317,J.unpackAlignment),H.isDataTexture?$.texSubImage2D(3553,k,T.x,T.y,ne,Le,Re,Ue,H.image.data):H.isCompressedTexture?$.compressedTexSubImage2D(3553,k,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Re,H.mipmaps[0].data):$.texSubImage2D(3553,k,T.x,T.y,Re,Ue,H.image),k===0&&J.generateMipmaps&&$.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(T,H,J,k,ne=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=T.max.x-T.min.x+1,Re=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,Oe=L.convert(k.format),Ze=L.convert(k.type);let He;if(k.isData3DTexture)P.setTexture3D(k,0),He=32879;else if(k.isDataArrayTexture)P.setTexture2DArray(k,0),He=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,k.flipY),$.pixelStorei(37441,k.premultiplyAlpha),$.pixelStorei(3317,k.unpackAlignment);const je=$.getParameter(3314),ot=$.getParameter(32878),_i=$.getParameter(3316),Hi=$.getParameter(3315),Wi=$.getParameter(32877),mn=J.isCompressedTexture?J.mipmaps[0]:J.image;$.pixelStorei(3314,mn.width),$.pixelStorei(32878,mn.height),$.pixelStorei(3316,T.min.x),$.pixelStorei(3315,T.min.y),$.pixelStorei(32877,T.min.z),J.isDataTexture||J.isData3DTexture?$.texSubImage3D(He,ne,H.x,H.y,H.z,Le,Re,Ue,Oe,Ze,mn.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(He,ne,H.x,H.y,H.z,Le,Re,Ue,Oe,mn.data)):$.texSubImage3D(He,ne,H.x,H.y,H.z,Le,Re,Ue,Oe,Ze,mn),$.pixelStorei(3314,je),$.pixelStorei(32878,ot),$.pixelStorei(3316,_i),$.pixelStorei(3315,Hi),$.pixelStorei(32877,Wi),ne===0&&k.generateMipmaps&&$.generateMipmap(He),xe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){_=0,w=0,y=null,xe.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class kM extends nd{}kM.prototype.isWebGL1Renderer=!0;class VM extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const ph=new I,mh=new Ye,gh=new Ye,GM=new I,_h=new Ce;class HM extends dn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;mh.fromBufferAttribute(r.attributes.skinIndex,e),gh.fromBufferAttribute(r.attributes.skinWeight,e),ph.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=gh.getComponent(s);if(o!==0){const a=mh.getComponent(s);_h.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(GM.copy(ph).applyMatrix4(_h),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class vl extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class WM extends Ft{constructor(e=null,t=1,n=1,r,s,o,a,l,c=bt,u=bt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vh=new Ce,XM=new Ce;class ac{constructor(e=[],t=[]){this.uuid=di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:XM;vh.multiplyMatrices(a,t[s]),vh.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ac(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Vf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new WM(t,e,e,Qt,si);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new vl),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class id extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xh=new I,yh=new I,Mh=new Ce,Ha=new $o,to=new Ts;class rd extends st{constructor(e=new It,t=new id){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)xh.fromBufferAttribute(t,r-1),yh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=xh.distanceTo(yh);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(r),to.radius+=s,e.ray.intersectsSphere(to)===!1)return;Mh.copy(r).invert(),Ha.copy(e.ray).applyMatrix4(Mh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,f=new I,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let y=_,b=w-1;y<b;y+=p){const M=g.getX(y),C=g.getX(y+1);if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,C),Ha.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),w=Math.min(d.count,o.start+o.count);for(let y=_,b=w-1;y<b;y+=p){if(c.fromBufferAttribute(d,y),u.fromBufferAttribute(d,y+1),Ha.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const bh=new I,wh=new I;class jM extends rd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)bh.fromBufferAttribute(t,r),wh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+bh.distanceTo(wh);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sd extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sh=new Ce,xl=new $o,no=new Ts,io=new I;class qM extends st{constructor(e=new It,t=new sd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;Sh.copy(r).invert(),xl.copy(e.ray).applyMatrix4(Sh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,m=p;g<m;g++){const d=c.getX(g);io.fromBufferAttribute(h,d),Th(io,d,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p;g<m;g++)io.fromBufferAttribute(h,g),Th(io,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Th(i,e,t,n,r,s,o){const a=xl.distanceSqToPoint(i);if(a<t){const l=new I;xl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class YM{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ie:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,r=[],s=[],o=[],a=new I,l=new Ce;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(vt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(vt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}const ro=new I,so=new I,Wa=new I,oo=new Sn;class $M extends It{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Mr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:m,b:d,c:_}=oo;if(m.fromBufferAttribute(a,c[0]),d.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),oo.getNormal(Wa),h[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[1]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,h[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){const y=(w+1)%3,b=h[w],M=h[y],C=oo[u[w]],R=oo[u[y]],v=`${b}_${M}`,A=`${M}_${b}`;A in f&&f[A]?(Wa.dot(f[A].normal)<=s&&(p.push(C.x,C.y,C.z),p.push(R.x,R.y,R.z)),f[A]=null):v in f||(f[v]={index0:c[w],index1:c[y],normal:Wa.clone()})}}for(const g in f)if(f[g]){const{index0:m,index1:d}=f[g];ro.fromBufferAttribute(a,m),so.fromBufferAttribute(a,d),p.push(ro.x,ro.y,ro.z),p.push(so.x,so.y,so.z)}this.setAttribute("position",new wt(p,3))}}}class Xa extends pi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ZM extends pi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ti(i,e,t){return od(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function ao(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function od(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function KM(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Eh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function ad(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Ko{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class JM extends Ko{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pu,endingEnd:Pu}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Du:s=e,a=2*t-n;break;case Ru:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Du:o=e,l=2*n-t;break;case Ru:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),m=g*g,d=m*g,_=-f*d+2*f*m-f*g,w=(1+f)*d+(-1.5-2*f)*m+(-.5+f)*g+1,y=(-1-p)*d+(1.5+p)*m+.5*g,b=p*d-p*m;for(let M=0;M!==a;++M)s[M]=_*o[u+M]+w*o[c+M]+y*o[l+M]+b*o[h+M];return s}}class QM extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class eb extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ao(t,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ao(e.times,Array),values:ao(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new QM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new JM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Eo:t=this.InterpolantFactoryMethodDiscrete;break;case Ao:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return Ao;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=ti(n,s,o),this.values=ti(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&od(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ti(this.times),t=ti(this.values),n=this.getValueSize(),r=this.getInterpolation()===ga,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ti(e,0,o),this.values=ti(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ti(this.times,0),t=ti(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Ao;class Or extends Cn{}Or.prototype.ValueTypeName="bool";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=Eo;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;class ld extends Cn{}ld.prototype.ValueTypeName="color";class vs extends Cn{}vs.prototype.ValueTypeName="number";class tb extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)en.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Nr extends Cn{InterpolantFactoryMethodLinear(e){return new tb(this.times,this.values,this.getValueSize(),e)}}Nr.prototype.ValueTypeName="quaternion";Nr.prototype.DefaultInterpolation=Ao;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends Cn{}zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=Eo;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Cn{}xs.prototype.ValueTypeName="vector";class nb{constructor(e,t=-1,n,r=S0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=di(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(rb(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Cn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=KM(l);l=Eh(l,1,u),c=Eh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new vs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,m){if(p.length!==0){const d=[],_=[];ad(p,d,_,g),d.length!==0&&m.push(new h(f,d,_))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)p[f[g].morphTargets[m]]=-1;for(const m in p){const d=[],_=[];for(let w=0;w!==f[g].morphTargets.length;++w){const y=f[g];d.push(y.time),_.push(y.morphTarget===m?1:0)}r.push(new vs(".morphTargetInfluence["+m+"]",d,_))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(xs,p+".position",f,"pos",r),n(Nr,p+".quaternion",f,"rot",r),n(xs,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ib(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vs;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return ld;case"quaternion":return Nr;case"bool":case"boolean":return Or;case"string":return zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function rb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ib(i.type);if(i.times===void 0){const t=[],n=[];ad(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Lo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class sb{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const ob=new sb;class Jo{constructor(e){this.manager=e!==void 0?e:ob,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const On={};class ab extends Error{constructor(e,t){super(e),this.response=t}}class lb extends Jo{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Lo.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(On[e]!==void 0){On[e].push({onLoad:t,onProgress:n,onError:r});return}On[e]=[],On[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=On[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(_){w();function w(){h.read().then(({done:y,value:b})=>{if(y)_.close();else{m+=b.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let C=0,R=u.length;C<R;C++){const v=u[C];v.onProgress&&v.onProgress(M)}_.enqueue(b),w()}})}}});return new Response(d)}else throw new ab(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Lo.add(e,c);const u=On[e];delete On[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=On[e];if(u===void 0)throw this.manager.itemError(e),c;delete On[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class cb extends Jo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Lo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=_s("img");function l(){u(),Lo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class cd extends Jo{constructor(e){super(e)}load(e,t,n,r){const s=new Ft,o=new cb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Qo extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ja=new Ce,Ah=new I,Ch=new I;class lc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ic,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ah),Ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ch),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ub extends lc{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=gs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hb extends Qo{constructor(e,t,n=0,r=Math.PI/3,s=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ub}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Lh=new Ce,Kr=new I,qa=new I;class fb extends lc{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Kr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Kr),qa.copy(n.position),qa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qa),n.updateMatrixWorld(),r.makeTranslation(-Kr.x,-Kr.y,-Kr.z),Lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh)}}class Ph extends Qo{constructor(e,t,n=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new fb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class db extends lc{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ud extends Qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.target=new st,this.shadow=new db}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hd extends Qo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class pb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Dh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Dh(){return(typeof performance>"u"?Date:performance).now()}const uc="\\[\\]\\.:\\/",mb=new RegExp("["+uc+"]","g"),hc="[^"+uc+"]",gb="[^"+uc.replace("\\.","")+"]",_b=/((?:WC+[\/:])*)/.source.replace("WC",hc),vb=/(WCOD+)?/.source.replace("WCOD",gb),xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),yb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),Mb=new RegExp("^"+_b+vb+xb+yb+"$"),bb=["material","materials","bones","map"];class wb{constructor(e,t,n){const r=n||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class qe{constructor(e,t,n){this.path=t,this.parsedPath=n||qe.parseTrackName(t),this.node=qe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new qe.Composite(e,t,n):new qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mb,"")}static parseTrackName(e){const t=Mb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);bb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=qe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qe.Composite=wb;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Sb{constructor(e,t,n=0,r=1/0){this.ray=new $o(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yl(e,this,n,t),n.sort(Rh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)yl(e[r],this,n,t);return n.sort(Rh),n}}function Rh(i,e){return i.distance-e.distance}function yl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)yl(r[s],e,t,!0)}}class Ih{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Fh={},Ml=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))},fd=function(i){return new Worker(i)};try{URL.revokeObjectURL(Ml(""))}catch{Ml=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},fd=function(e){return new Worker(e,{type:"module"})}}var Tb=function(i,e,t,n,r){var s=fd(Fh[e]||(Fh[e]=Ml(i)));return s.onerror=function(o){return r(o.error,null)},s.onmessage=function(o){return r(null,o.data)},s.postMessage(t,n),s},We=Uint8Array,_t=Uint16Array,Hn=Uint32Array,Ur=new We([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Br=new We([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ys=new We([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),dd=function(i,e){for(var t=new _t(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Hn(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return[t,r]},pd=dd(Ur,2),fc=pd[0],Po=pd[1];fc[28]=258,Po[258]=28;var md=dd(Br,0),gd=md[0],bl=md[1],Ms=new _t(32768);for(var it=0;it<32768;++it){var ni=(it&43690)>>>1|(it&21845)<<1;ni=(ni&52428)>>>2|(ni&13107)<<2,ni=(ni&61680)>>>4|(ni&3855)<<4,Ms[it]=((ni&65280)>>>8|(ni&255)<<8)>>>1}var rn=function(i,e,t){for(var n=i.length,r=0,s=new _t(e);r<n;++r)++s[i[r]-1];var o=new _t(e);for(r=0;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new _t(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],h=o[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Ms[h]>>>l]=c}else for(a=new _t(n),r=0;r<n;++r)i[r]&&(a[r]=Ms[o[i[r]-1]++]>>>15-i[r]);return a},Wn=new We(288);for(var it=0;it<144;++it)Wn[it]=8;for(var it=144;it<256;++it)Wn[it]=9;for(var it=256;it<280;++it)Wn[it]=7;for(var it=280;it<288;++it)Wn[it]=8;var Lr=new We(32);for(var it=0;it<32;++it)Lr[it]=5;var _d=rn(Wn,9,0),vd=rn(Wn,9,1),xd=rn(Lr,5,0),yd=rn(Lr,5,1),go=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Kt=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},_o=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},As=function(i){return(i/8|0)+(i&7&&1)},sn=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof _t?_t:i instanceof Hn?Hn:We)(t-e);return n.set(i.subarray(e,t)),n},Cs=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new We(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new We(n*3));var o=function($){var Fe=e.length;if($>Fe){var Te=new We(Math.max(Fe*2,$));Te.set(e),e=Te}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,f=t.m,p=t.n,g=n*8;do{if(!u){t.f=a=Kt(i,l,1);var m=Kt(i,l+1,3);if(l+=3,m)if(m==1)u=vd,h=yd,f=9,p=5;else if(m==2){var y=Kt(i,l,31)+257,b=Kt(i,l+10,15)+4,M=y+Kt(i,l+5,31)+1;l+=14;for(var C=new We(M),R=new We(19),v=0;v<b;++v)R[ys[v]]=Kt(i,l+v*3,7);l+=b*3;for(var A=go(R),D=(1<<A)-1,Z=rn(R,A,1),v=0;v<M;){var oe=Z[Kt(i,l,D)];l+=oe&15;var d=oe>>>4;if(d<16)C[v++]=d;else{var B=0,F=0;for(d==16?(F=3+Kt(i,l,3),l+=2,B=C[v-1]):d==17?(F=3+Kt(i,l,7),l+=3):d==18&&(F=11+Kt(i,l,127),l+=7);F--;)C[v++]=B}}var q=C.subarray(0,y),j=C.subarray(y);f=go(q),p=go(j),u=rn(q,f,1),h=rn(j,p,1)}else throw"invalid block type";else{var d=As(l)+4,_=i[d-4]|i[d-3]<<8,w=d+_;if(w>n){if(s)throw"unexpected EOF";break}r&&o(c+_),e.set(i.subarray(d,w),c),t.b=c+=_,t.p=l=w*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}r&&o(c+131072);for(var X=(1<<f)-1,V=(1<<p)-1,z=l;;z=l){var B=u[_o(i,l)&X],G=B>>>4;if(l+=B&15,l>g){if(s)throw"unexpected EOF";break}if(!B)throw"invalid length/literal";if(G<256)e[c++]=G;else if(G==256){z=l,u=null;break}else{var se=G-254;if(G>264){var v=G-257,re=Ur[v];se=Kt(i,l,(1<<re)-1)+fc[v],l+=re}var le=h[_o(i,l)&V],pe=le>>>4;if(!le)throw"invalid distance";l+=le&15;var j=gd[pe];if(pe>3){var re=Br[pe];j+=_o(i,l)&(1<<re)-1,l+=re}if(l>g){if(s)throw"unexpected EOF";break}r&&o(c+131072);for(var we=c+se;c<we;c+=4)e[c]=e[c-j],e[c+1]=e[c+1-j],e[c+2]=e[c+2-j],e[c+3]=e[c+3-j];c=we}}t.l=u,t.p=z,t.b=c,u&&(a=1,t.m=f,t.d=h,t.n=p)}while(!a);return c==e.length?e:sn(e,0,c)},vn=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8},ur=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8,i[n+2]|=t>>>16},vo=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return[Un,0];if(r==1){var o=new We(t[0].s+1);return o[t[0].s]=1,[o,1]}t.sort(function(M,C){return M.f-C.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=s[0].s,n=1;n<r;++n)s[n].s>f&&(f=s[n].s);var p=new _t(f+1),g=Do(t[u-1],p,0);if(g>e){var n=0,m=0,d=g-e,_=1<<d;for(s.sort(function(C,R){return p[R.s]-p[C.s]||C.f-R.f});n<r;++n){var w=s[n].s;if(p[w]>e)m+=_-(1<<g-p[w]),p[w]=e;else break}for(m>>>=d;m>0;){var y=s[n].s;p[y]<e?m-=1<<e-p[y]++-1:++n}for(;n>=0&&m;--n){var b=s[n].s;p[b]==e&&(--p[b],++m)}g=e}return[new We(p),g]},Do=function(i,e,t){return i.s==-1?Math.max(Do(i.l,e,t+1),Do(i.r,e,t+1)):e[i.s]=t},wl=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new _t(++e),n=0,r=i[0],s=1,o=function(l){t[n++]=l},a=1;a<=e;++a)if(i[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=i[a]}return[t.subarray(0,n),e]},hr=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},ls=function(i,e,t){var n=t.length,r=As(e+2);i[r]=n&255,i[r+1]=n>>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},Sl=function(i,e,t,n,r,s,o,a,l,c,u){vn(e,u++,t),++r[256];for(var h=vo(r,15),f=h[0],p=h[1],g=vo(s,15),m=g[0],d=g[1],_=wl(f),w=_[0],y=_[1],b=wl(m),M=b[0],C=b[1],R=new _t(19),v=0;v<w.length;++v)R[w[v]&31]++;for(var v=0;v<M.length;++v)R[M[v]&31]++;for(var A=vo(R,7),D=A[0],Z=A[1],oe=19;oe>4&&!D[ys[oe-1]];--oe);var B=c+5<<3,F=hr(r,Wn)+hr(s,Lr)+o,q=hr(r,f)+hr(s,m)+o+14+3*oe+hr(R,D)+(2*R[16]+3*R[17]+7*R[18]);if(B<=F&&B<=q)return ls(e,u,i.subarray(l,l+c));var j,X,V,z;if(vn(e,u,1+(q<F)),u+=2,q<F){j=rn(f,p,0),X=f,V=rn(m,d,0),z=m;var G=rn(D,Z,0);vn(e,u,y-257),vn(e,u+5,C-1),vn(e,u+10,oe-4),u+=14;for(var v=0;v<oe;++v)vn(e,u+3*v,D[ys[v]]);u+=3*oe;for(var se=[w,M],re=0;re<2;++re)for(var le=se[re],v=0;v<le.length;++v){var pe=le[v]&31;vn(e,u,G[pe]),u+=D[pe],pe>15&&(vn(e,u,le[v]>>>5&127),u+=le[v]>>>12)}}else j=_d,X=Wn,V=xd,z=Lr;for(var v=0;v<a;++v)if(n[v]>255){var pe=n[v]>>>18&31;ur(e,u,j[pe+257]),u+=X[pe+257],pe>7&&(vn(e,u,n[v]>>>23&31),u+=Ur[pe]);var we=n[v]&31;ur(e,u,V[we]),u+=z[we],we>3&&(ur(e,u,n[v]>>>5&8191),u+=Br[we])}else ur(e,u,j[n[v]]),u+=X[n[v]];return ur(e,u,j[256]),u+X[256]},Md=new Hn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Un=new We(0),bd=function(i,e,t,n,r,s){var o=i.length,a=new We(n+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(n,a.length-r),c=0;if(!e||o<8)for(var u=0;u<=o;u+=65535){var h=u+65535;h<o?c=ls(l,c,i.subarray(u,h)):(l[u]=s,c=ls(l,c,i.subarray(u,o)))}else{for(var f=Md[e-1],p=f>>>13,g=f&8191,m=(1<<t)-1,d=new _t(32768),_=new _t(m+1),w=Math.ceil(t/3),y=2*w,b=function(W){return(i[W]^i[W+1]<<w^i[W+2]<<y)&m},M=new Hn(25e3),C=new _t(288),R=new _t(32),v=0,A=0,u=0,D=0,Z=0,oe=0;u<o;++u){var B=b(u),F=u&32767,q=_[B];if(d[F]=q,_[B]=F,Z<=u){var j=o-u;if((v>7e3||D>24576)&&j>423){c=Sl(i,l,0,M,C,R,A,D,oe,u-oe,c),D=v=A=0,oe=u;for(var X=0;X<286;++X)C[X]=0;for(var X=0;X<30;++X)R[X]=0}var V=2,z=0,G=g,se=F-q&32767;if(j>2&&B==b(u-se))for(var re=Math.min(p,j)-1,le=Math.min(32767,u),pe=Math.min(258,j);se<=le&&--G&&F!=q;){if(i[u+V]==i[u+V-se]){for(var we=0;we<pe&&i[u+we]==i[u+we-se];++we);if(we>V){if(V=we,z=se,we>re)break;for(var $=Math.min(se,we-2),Fe=0,X=0;X<$;++X){var Te=u-se+X+32768&32767,Ae=d[Te],xe=Te-Ae+32768&32767;xe>Fe&&(Fe=xe,q=Te)}}}F=q,q=d[F],se+=F-q+32768&32767}if(z){M[D++]=268435456|Po[V]<<18|bl[z];var Ge=Po[V]&31,E=bl[z]&31;A+=Ur[Ge]+Br[E],++C[257+Ge],++R[E],Z=u+V,++v}else M[D++]=i[u],++C[i[u]]}}c=Sl(i,l,s,M,C,R,A,D,oe,u-oe,c),!s&&c&7&&(c=ls(l,c+1,Un))}return sn(a,0,n+As(c)+r)},wd=function(){for(var i=new Hn(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;i[e]=t}return i}(),kr=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=wd[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},dc=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length,o=0;o!=s;){for(var a=Math.min(o+2655,s);o<a;++o)r+=n+=t[o];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|i>>>8<<16|(e&255)<<8|e>>>8}}},Gi=function(i,e,t,n,r){return bd(i,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):12+e.mem,t,n,!r)},Ls=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Oh=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/ /g,"").split(","),o=0;o<n.length;++o){var a=n[o],l=s[o];if(typeof a=="function"){e+=";"+l+"=";var c=a.toString();if(a.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;e+=c.slice(u,c.indexOf("(",u))}else{e+=c;for(var h in a.prototype)e+=";"+l+".prototype."+h+"="+a.prototype[h].toString()}else e+=c}else t[l]=a}return[e,t]},lo=[],Eb=function(i){var e=[];for(var t in i)(i[t]instanceof We||i[t]instanceof _t||i[t]instanceof Hn)&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},Sd=function(i,e,t,n){var r;if(!lo[t]){for(var s="",o={},a=i.length-1,l=0;l<a;++l)r=Oh(i[l],s,o),s=r[0],o=r[1];lo[t]=Oh(i[a],s,o)}var c=Ls({},lo[t][1]);return Tb(lo[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,Eb(c),n)},Vr=function(){return[We,_t,Hn,Ur,Br,ys,fc,gd,vd,yd,Ms,rn,go,Kt,_o,As,sn,Cs,Xr,mi,pc]},Gr=function(){return[We,_t,Hn,Ur,Br,ys,Po,bl,_d,Wn,xd,Lr,Ms,Md,Un,rn,vn,ur,vo,Do,wl,hr,ls,Sl,As,sn,bd,Gi,Ps,mi]},Td=function(){return[mc,_c,Je,kr,wd]},Ed=function(){return[gc,Ld]},Ad=function(){return[vc,Je,dc]},Cd=function(){return[Pd]},mi=function(i){return postMessage(i,[i.buffer])},pc=function(i){return i&&i.size&&new We(i.size)},Hr=function(i,e,t,n,r,s){var o=Sd(t,n,r,function(a,l){o.terminate(),s(a,l)});return o.postMessage([i,e],e.consume?[i.buffer]:[]),function(){o.terminate()}},on=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){return i.push(e.data[0],e.data[1])}},Wr=function(i,e,t,n,r){var s,o=Sd(i,n,r,function(a,l){a?(o.terminate(),e.ondata.call(e,a)):(l[1]&&o.terminate(),e.ondata.call(e,a,l[0],l[1]))});o.postMessage(t),e.push=function(a,l){if(s)throw"stream finished";if(!e.ondata)throw"no stream handler";o.postMessage([a,s=l],[a.buffer])},e.terminate=function(){o.terminate()}},Dt=function(i,e){return i[e]|i[e+1]<<8},lt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Ya=function(i,e){return lt(i,e)+lt(i,e+4)*4294967296},Je=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},mc=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&Je(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},gc=function(i){if(i[0]!=31||i[1]!=139||i[2]!=8)throw"invalid gzip data";var e=i[3],t=10;e&4&&(t+=i[10]|(i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},Ld=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},_c=function(i){return 10+(i.filename&&i.filename.length+1||0)},vc=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;i[0]=120,i[1]=n<<6|(n?32-2*n:1)},Pd=function(i){if((i[0]&15)!=8||i[0]>>>4>7||(i[0]<<8|i[1])%31)throw"invalid zlib data";if(i[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function xc(i,e){return!e&&typeof i=="function"&&(e=i,i={}),this.ondata=e,i}var En=function(){function i(e,t){!t&&typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{}}return i.prototype.p=function(e,t){this.ondata(Gi(e,this.o,0,0,!t),t)},i.prototype.push=function(e,t){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";this.d=t,this.p(e,t||!1)},i}(),Dd=function(){function i(e,t){Wr([Gr,function(){return[on,En]}],this,xc.call(this,e,t),function(n){var r=new En(n.data);onmessage=on(r)},6)}return i}();function Rd(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Hr(i,e,[Gr],function(n){return mi(Ps(n.data[0],n.data[1]))},0,t)}function Ps(i,e){return Gi(i,e||{},0,0)}var Bt=function(){function i(e){this.s={},this.p=new We(0),this.ondata=e}return i.prototype.e=function(e){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";var t=this.p.length,n=new We(t+e.length);n.set(this.p),n.set(e,t),this.p=n},i.prototype.c=function(e){this.d=this.s.i=e||!1;var t=this.s.b,n=Cs(this.p,this.o,this.s);this.ondata(sn(n,t,this.s.b),this.d),this.o=sn(n,this.s.b-32768),this.s.b=this.o.length,this.p=sn(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i}(),yc=function(){function i(e){this.ondata=e,Wr([Vr,function(){return[on,Bt]}],this,0,function(){var t=new Bt;onmessage=on(t)},7)}return i}();function Mc(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Hr(i,e,[Vr],function(n){return mi(Xr(n.data[0],pc(n.data[1])))},1,t)}function Xr(i,e){return Cs(i,e)}var Ro=function(){function i(e,t){this.c=kr(),this.l=0,this.v=1,En.call(this,e,t)}return i.prototype.push=function(e,t){En.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){this.c.p(e),this.l+=e.length;var n=Gi(e,this.o,this.v&&_c(this.o),t&&8,!t);this.v&&(mc(n,this.o),this.v=0),t&&(Je(n,n.length-8,this.c.d()),Je(n,n.length-4,this.l)),this.ondata(n,t)},i}(),Nh=function(){function i(e,t){Wr([Gr,Td,function(){return[on,En,Ro]}],this,xc.call(this,e,t),function(n){var r=new Ro(n.data);onmessage=on(r)},8)}return i}();function zh(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Hr(i,e,[Gr,Td,function(){return[Io]}],function(n){return mi(Io(n.data[0],n.data[1]))},2,t)}function Io(i,e){e||(e={});var t=kr(),n=i.length;t.p(i);var r=Gi(i,e,_c(e),8),s=r.length;return mc(r,e),Je(r,s-8,t.d()),Je(r,s-4,n),r}var Fo=function(){function i(e){this.v=1,Bt.call(this,e)}return i.prototype.push=function(e,t){if(Bt.prototype.e.call(this,e),this.v){var n=this.p.length>3?gc(this.p):4;if(n>=this.p.length&&!t)return;this.p=this.p.subarray(n),this.v=0}if(t){if(this.p.length<8)throw"invalid gzip stream";this.p=this.p.subarray(0,-8)}Bt.prototype.c.call(this,t)},i}(),Id=function(){function i(e){this.ondata=e,Wr([Vr,Ed,function(){return[on,Bt,Fo]}],this,0,function(){var t=new Fo;onmessage=on(t)},9)}return i}();function Fd(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Hr(i,e,[Vr,Ed,function(){return[Oo]}],function(n){return mi(Oo(n.data[0]))},3,t)}function Oo(i,e){return Cs(i.subarray(gc(i),-8),e||new We(Ld(i)))}var Tl=function(){function i(e,t){this.c=dc(),this.v=1,En.call(this,e,t)}return i.prototype.push=function(e,t){En.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){this.c.p(e);var n=Gi(e,this.o,this.v&&2,t&&4,!t);this.v&&(vc(n,this.o),this.v=0),t&&Je(n,n.length-4,this.c.d()),this.ondata(n,t)},i}(),Ab=function(){function i(e,t){Wr([Gr,Ad,function(){return[on,En,Tl]}],this,xc.call(this,e,t),function(n){var r=new Tl(n.data);onmessage=on(r)},10)}return i}();function Cb(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Hr(i,e,[Gr,Ad,function(){return[El]}],function(n){return mi(El(n.data[0],n.data[1]))},4,t)}function El(i,e){e||(e={});var t=dc();t.p(i);var n=Gi(i,e,2,4);return vc(n,e),Je(n,n.length-4,t.d()),n}var No=function(){function i(e){this.v=1,Bt.call(this,e)}return i.prototype.push=function(e,t){if(Bt.prototype.e.call(this,e),this.v){if(this.p.length<2&&!t)return;this.p=this.p.subarray(2),this.v=0}if(t){if(this.p.length<4)throw"invalid zlib stream";this.p=this.p.subarray(0,-4)}Bt.prototype.c.call(this,t)},i}(),Od=function(){function i(e){this.ondata=e,Wr([Vr,Cd,function(){return[on,Bt,No]}],this,0,function(){var t=new No;onmessage=on(t)},11)}return i}();function Nd(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Hr(i,e,[Vr,Cd,function(){return[bs]}],function(n){return mi(bs(n.data[0],pc(n.data[1])))},5,t)}function bs(i,e){return Cs((Pd(i),i.subarray(2,-4)),e)}var zd=function(){function i(e){this.G=Fo,this.I=Bt,this.Z=No,this.ondata=e}return i.prototype.push=function(e,t){if(!this.ondata)throw"no stream handler";if(this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new We(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var r=this,s=function(){r.ondata.apply(r,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(s):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(s):new this.Z(s),this.s.push(this.p,t),this.p=null}}},i}(),Lb=function(){function i(e){this.G=Id,this.I=yc,this.Z=Od,this.ondata=e}return i.prototype.push=function(e,t){zd.prototype.push.call(this,e,t)},i}();function Pb(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return i[0]==31&&i[1]==139&&i[2]==8?Fd(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Mc(i,e,t):Nd(i,e,t)}function Db(i,e){return i[0]==31&&i[1]==139&&i[2]==8?Oo(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Xr(i,e):bs(i,e)}var bc=function(i,e,t,n){for(var r in i){var s=i[r],o=e+r;s instanceof We?t[o]=[s,n]:Array.isArray(s)?t[o]=[s[0],Ls(n,s[1])]:bc(s,o+"/",t,n)}},Uh=typeof TextEncoder<"u"&&new TextEncoder,Al=typeof TextDecoder<"u"&&new TextDecoder,Ud=0;try{Al.decode(Un,{stream:!0}),Ud=1}catch{}var Bd=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return[e,sn(i,t-1)];r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},Rb=function(){function i(e){this.ondata=e,Ud?this.t=new TextDecoder:this.p=Un}return i.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(t=!!t,this.t){if(this.ondata(this.t.decode(e,{stream:!0}),t),t){if(this.t.decode().length)throw"invalid utf-8 data";this.t=null}return}if(!this.p)throw"stream finished";var n=new We(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=Bd(n),s=r[0],o=r[1];if(t){if(o.length)throw"invalid utf-8 data";this.p=null}else this.p=o;this.ondata(s,t)},i}(),Ib=function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(this.d)throw"stream finished";this.ondata(fi(e),this.d=t||!1)},i}();function fi(i,e){if(e){for(var t=new We(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Uh)return Uh.encode(i);for(var r=i.length,s=new We(i.length+(i.length>>1)),o=0,a=function(u){s[o++]=u},n=0;n<r;++n){if(o+5>s.length){var l=new We(o+8+(r-n<<1));l.set(s),s=l}var c=i.charCodeAt(n);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1023<<10)|i.charCodeAt(++n)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return sn(s,0,o)}function wc(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Al)return Al.decode(i);var r=Bd(i),s=r[0],o=r[1];if(o.length)throw"invalid utf-8 data";return s}}var kd=function(i){return i==1?3:i<6?2:i==9?1:0},Vd=function(i,e){return e+30+Dt(i,e+26)+Dt(i,e+28)},Gd=function(i,e,t){var n=Dt(i,e+28),r=wc(i.subarray(e+46,e+46+n),!(Dt(i,e+8)&2048)),s=e+46+n,o=lt(i,e+20),a=t&&o==4294967295?Hd(i,s):[o,lt(i,e+24),lt(i,e+42)],l=a[0],c=a[1],u=a[2];return[Dt(i,e+10),l,c,r,s+Dt(i,e+30)+Dt(i,e+32),u]},Hd=function(i,e){for(;Dt(i,e)!=1;e+=4+Dt(i,e+2));return[Ya(i,e+12),Ya(i,e+4),Ya(i,e+20)]},ci=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},Pr=function(i,e,t,n,r,s,o,a){var l=n.length,c=t.extra,u=a&&a.length,h=ci(c);Je(i,e,o!=null?33639248:67324752),e+=4,o!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s==null&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),p=f.getFullYear()-1980;if(p<0||p>119)throw"date not in range 1980-2099";if(Je(i,e,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>>1),e+=4,s!=null&&(Je(i,e,t.crc),Je(i,e+4,s),Je(i,e+8,t.size)),Je(i,e+12,l),Je(i,e+14,h),e+=16,o!=null&&(Je(i,e,u),Je(i,e+6,t.attrs),Je(i,e+10,o),e+=14),i.set(n,e),e+=l,h)for(var g in c){var m=c[g],d=m.length;Je(i,e,+g),Je(i,e+2,d),i.set(m,e+4),e+=4+d}return u&&(i.set(a,e),e+=u),e},Sc=function(i,e,t,n,r){Je(i,e,101010256),Je(i,e+8,t),Je(i,e+10,t),Je(i,e+12,n),Je(i,e+16,r)},ws=function(){function i(e){this.filename=e,this.c=kr(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i}(),Fb=function(){function i(e,t){var n=this;t||(t={}),ws.call(this,e),this.d=new En(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=kd(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){ws.prototype.push.call(this,e,t)},i}(),Ob=function(){function i(e,t){var n=this;t||(t={}),ws.call(this,e),this.d=new Dd(t,function(r,s,o){n.ondata(r,s,o)}),this.compression=8,this.flag=kd(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){ws.prototype.push.call(this,e,t)},i}(),Nb=function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.d&2)throw"stream finished";var n=fi(e.filename),r=n.length,s=e.comment,o=s&&fi(s),a=r!=e.filename.length||o&&s.length!=o.length,l=r+ci(e.extra)+30;if(r>65535)throw"filename too long";var c=new We(l);Pr(c,0,e,n,a);var u=[c],h=function(){for(var d=0,_=u;d<_.length;d++){var w=_[d];t.ondata(null,w,!1)}u=[]},f=this.d;this.d=0;var p=this.u.length,g=Ls(e,{f:n,u:a,o,t:function(){e.terminate&&e.terminate()},r:function(){if(h(),f){var d=t.u[p+1];d?d.r():t.d=1}f=1}}),m=0;e.ondata=function(d,_,w){if(d)t.ondata(d,_,w),t.terminate();else if(m+=_.length,u.push(_),w){var y=new We(16);Je(y,0,134695760),Je(y,4,e.crc),Je(y,8,m),Je(y,12,e.size),u.push(y),g.c=m,g.b=l+m+16,g.crc=e.crc,g.size=e.size,f&&g.r(),f=1}else f&&h()},this.u.push(g)},i.prototype.end=function(){var e=this;if(this.d&2)throw this.d&1?"stream finishing":"stream finished";this.d?this.e():this.u.push({r:function(){!(e.d&1)||(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var o=s[r];n+=46+o.f.length+ci(o.extra)+(o.o?o.o.length:0)}for(var a=new We(n+22),l=0,c=this.u;l<c.length;l++){var o=c[l];Pr(a,e,o,o.f,o.u,o.c,t,o.o),e+=46+o.f.length+ci(o.extra)+(o.o?o.o.length:0),t+=o.b}Sc(a,e,this.u.length,n,t),this.ondata(null,a,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i}();function zb(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";var n={};bc(i,"",n,e);var r=Object.keys(n),s=r.length,o=0,a=0,l=s,c=new Array(s),u=[],h=function(){for(var m=0;m<u.length;++m)u[m]()},f=function(){var m=new We(a+22),d=o,_=a-o;a=0;for(var w=0;w<l;++w){var y=c[w];try{var b=y.c.length;Pr(m,a,y,y.f,y.u,b);var M=30+y.f.length+ci(y.extra),C=a+M;m.set(y.c,C),Pr(m,o,y,y.f,y.u,b,a,y.m),o+=16+M+(y.m?y.m.length:0),a=C+b}catch(R){return t(R,null)}}Sc(m,o,c.length,_,d),t(null,m)};s||f();for(var p=function(m){var d=r[m],_=n[d],w=_[0],y=_[1],b=kr(),M=w.length;b.p(w);var C=fi(d),R=C.length,v=y.comment,A=v&&fi(v),D=A&&A.length,Z=ci(y.extra),oe=y.level==0?0:8,B=function(F,q){if(F)h(),t(F,null);else{var j=q.length;c[m]=Ls(y,{size:M,crc:b.d(),c:q,f:C,m:A,u:R!=d.length||A&&v.length!=D,compression:oe}),o+=30+R+Z+j,a+=76+2*(R+Z)+(D||0)+j,--s||f()}};if(R>65535&&B("filename too long",null),!oe)B(null,w);else if(M<16e4)try{B(null,Ps(w,y))}catch(F){B(F,null)}else u.push(Rd(w,y,B))},g=0;g<l;++g)p(g);return h}function Ub(i,e){e||(e={});var t={},n=[];bc(i,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,h=fi(o),f=h.length,p=c.comment,g=p&&fi(p),m=g&&g.length,d=ci(c.extra);if(f>65535)throw"filename too long";var _=u?Ps(l,c):l,w=_.length,y=kr();y.p(l),n.push(Ls(c,{size:l.length,crc:y.d(),c:_,f:h,m:g,u:f!=o.length||g&&p.length!=m,o:r,compression:u})),r+=30+f+d+w,s+=76+2*(f+d)+(m||0)+w}for(var b=new We(s+22),M=r,C=s-r,R=0;R<n.length;++R){var h=n[R];Pr(b,h.o,h,h.f,h.u,h.c.length);var v=30+h.f.length+ci(h.extra);b.set(h.c,h.o+v),Pr(b,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+v+(h.m?h.m.length:0)}return Sc(b,r,n.length,C,M),b}var Wd=function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i}(),Bb=function(){function i(){var e=this;this.i=new Bt(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,e,t)}},i.compression=8,i}(),kb=function(){function i(e,t){var n=this;t<32e4?this.i=new Bt(function(r,s){n.ondata(null,r,s)}):(this.i=new yc(function(r,s,o){n.ondata(r,s,o)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=sn(e,0)),this.i.push(e,t)},i.compression=8,i}(),Vb=function(){function i(e){this.onfile=e,this.k=[],this.o={0:Wd},this.p=Un}return i.prototype.push=function(e,t){var n=this;if(!this.onfile)throw"no callback";if(!this.p)throw"stream finished";if(this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var o=0,a=0,l=void 0,c=void 0;this.p.length?e.length?(c=new We(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var u=c.length,h=this.c,f=h&&this.d,p=function(){var _,w=lt(c,a);if(w==67324752){o=1,l=a,g.d=null,g.c=0;var y=Dt(c,a+6),b=Dt(c,a+8),M=y&2048,C=y&8,R=Dt(c,a+26),v=Dt(c,a+28);if(u>a+30+R+v){var A=[];g.k.unshift(A),o=2;var D=lt(c,a+18),Z=lt(c,a+22),oe=wc(c.subarray(a+30,a+=30+R),!M);D==4294967295?(_=C?[-2]:Hd(c,a),D=_[0],Z=_[1]):C&&(D=-1),a+=v,g.c=D;var B,F={name:oe,compression:b,start:function(){if(!F.ondata)throw"no callback";if(!D)F.ondata(null,Un,!0);else{var q=n.o[b];if(!q)throw"unknown compression type "+b;B=D<0?new q(oe):new q(oe,D,Z),B.ondata=function(z,G,se){F.ondata(z,G,se)};for(var j=0,X=A;j<X.length;j++){var V=X[j];B.push(V,!1)}n.k[0]==A&&n.c?n.d=B:B.push(Un,!0)}},terminate:function(){B&&B.terminate&&B.terminate()}};D>=0&&(F.size=D,F.originalSize=Z),g.onfile(F)}return"break"}else if(h){if(w==134695760)return l=a+=12+(h==-2&&8),o=3,g.c=0,"break";if(w==33639248)return l=a-=4,o=3,g.c=0,"break"}},g=this;a<u-4;++a){var m=p();if(m==="break")break}if(this.p=Un,h<0){var d=o?c.subarray(0,l-12-(h==-2&&8)-(lt(c,l-16)==134695760&&4)):c.subarray(0,a);f?f.push(d,!!o):this.k[+(o==2)].push(d)}if(o&2)return this.push(c.subarray(a),t);this.p=c.subarray(a)}if(t){if(this.c)throw"invalid zip file";this.p=null}},i.prototype.register=function(e){this.o[e.compression]=e},i}();function Gb(i,e){if(typeof e!="function")throw"no callback";for(var t=[],n=function(){for(var f=0;f<t.length;++f)t[f]()},r={},s=i.length-22;lt(i,s)!=101010256;--s)if(!s||i.length-s>65558){e("invalid zip file",null);return}var o=Dt(i,s+8);o||e(null,{});var a=o,l=lt(i,s+16),c=l==4294967295;if(c){if(s=lt(i,s-12),lt(i,s)!=101075792){e("invalid zip file",null);return}a=o=lt(i,s+32),l=lt(i,s+48)}for(var u=function(f){var p=Gd(i,l,c),g=p[0],m=p[1],d=p[2],_=p[3],w=p[4],y=p[5],b=Vd(i,y);l=w;var M=function(R,v){R?(n(),e(R,null)):(r[_]=v,--o||e(null,r))};if(!g)M(null,sn(i,b,b+m));else if(g==8){var C=i.subarray(b,b+m);if(m<32e4)try{M(null,Xr(C,new We(d)))}catch(R){M(R,null)}else t.push(Mc(C,{size:d},M))}else M("unknown compression type "+g,null)},h=0;h<a;++h)u();return n}function Hb(i){for(var e={},t=i.length-22;lt(i,t)!=101010256;--t)if(!t||i.length-t>65558)throw"invalid zip file";var n=Dt(i,t+8);if(!n)return{};var r=lt(i,t+16),s=r==4294967295;if(s){if(t=lt(i,t-12),lt(i,t)!=101075792)throw"invalid zip file";n=lt(i,t+32),r=lt(i,t+48)}for(var o=0;o<n;++o){var a=Gd(i,r,s),l=a[0],c=a[1],u=a[2],h=a[3],f=a[4],p=a[5],g=Vd(i,p);if(r=f,!l)e[h]=sn(i,g,g+c);else if(l==8)e[h]=Xr(i.subarray(g,g+c),new We(u));else throw"unknown compression type "+l}return e}const Wb=Object.freeze(Object.defineProperty({__proto__:null,Deflate:En,AsyncDeflate:Dd,deflate:Rd,deflateSync:Ps,Inflate:Bt,AsyncInflate:yc,inflate:Mc,inflateSync:Xr,Gzip:Ro,AsyncGzip:Nh,gzip:zh,gzipSync:Io,Gunzip:Fo,AsyncGunzip:Id,gunzip:Fd,gunzipSync:Oo,Zlib:Tl,AsyncZlib:Ab,zlib:Cb,zlibSync:El,Unzlib:No,AsyncUnzlib:Od,unzlib:Nd,unzlibSync:bs,compress:zh,AsyncCompress:Nh,compressSync:Io,Compress:Ro,Decompress:zd,AsyncDecompress:Lb,decompress:Pb,decompressSync:Db,DecodeUTF8:Rb,EncodeUTF8:Ib,strToU8:fi,strFromU8:wc,ZipPassThrough:ws,ZipDeflate:Fb,AsyncZipDeflate:Ob,Zip:Nb,zip:zb,zipSync:Ub,UnzipPassThrough:Wd,UnzipInflate:Bb,AsyncUnzipInflate:kb,Unzip:Vb,unzip:Gb,unzipSync:Hb},Symbol.toStringTag,{value:"Module"}));function Xd(i,e,t){const n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let r=i,s=n,o=Math.floor((r+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function Xb(i,e,t,n){const r=[],s=[],o=[];r[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[i+1-a],o[a]=n[i+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=s[a-c],f=r[c]/(u+h);r[c]=l+u*f,l=h*f}r[a]=l}return r}function jb(i,e,t,n){const r=Xd(i,n,e),s=Xb(r,n,i,e),o=new Ye(0,0,0,0);for(let a=0;a<=i;++a){const l=t[r-i+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function qb(i,e,t,n,r){const s=[];for(let h=0;h<=t;++h)s[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=s.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-r[i+1-h],c[h]=r[i+h]-e;let f=0;for(let p=0;p<h;++p){const g=c[p+1],m=l[h-p];a[h][p]=g+m;const d=a[p][h-1]/a[h][p];a[p][h]=f+g*d,f=m*d}a[h][h]=f}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,p=1;const g=[];for(let m=0;m<=t;++m)g[m]=s.slice(0);g[0][0]=1;for(let m=1;m<=n;++m){let d=0;const _=h-m,w=t-m;h>=m&&(g[p][0]=g[f][0]/a[w+1][_],d=g[p][0]*a[_][w]);const y=_>=-1?1:-_,b=h-1<=w?m-1:t-h;for(let C=y;C<=b;++C)g[p][C]=(g[f][C]-g[f][C-1])/a[w+1][_+C],d+=g[p][C]*a[_+C][w];h<=w&&(g[p][m]=-g[f][m-1]/a[w+1][h],d+=g[p][m]*a[h][w]),o[m][h]=d;const M=f;f=p,p=M}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)o[h][f]*=u;u*=t-h}return o}function Yb(i,e,t,n,r){const s=r<i?r:i,o=[],a=Xd(i,n,e),l=qb(a,n,i,s,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=s;++u){const h=c[a-i].clone().multiplyScalar(l[u][0]);for(let f=1;f<=i;++f)h.add(c[a-i+f].clone().multiplyScalar(l[u][f]));o[u]=h}for(let u=s+1;u<=r+1;++u)o[u]=new Ye(0,0,0);return o}function $b(i,e){let t=1;for(let r=2;r<=i;++r)t*=r;let n=1;for(let r=2;r<=e;++r)n*=r;for(let r=2;r<=i-e;++r)n*=r;return t/n}function Zb(i){const e=i.length,t=[],n=[];for(let s=0;s<e;++s){const o=i[s];t[s]=new I(o.x,o.y,o.z),n[s]=o.w}const r=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar($b(s,a)*n[a]));r[s]=o.divideScalar(n[0])}return r}function Kb(i,e,t,n,r){const s=Yb(i,e,t,n,r);return Zb(s)}class Bh extends YM{constructor(e,t,n,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new Ye(a.x,a.y,a.z,a.w)}}getPoint(e,t=new I){const n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=jb(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new I){const n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=Kb(this.degree,this.knots,this.controlPoints,r,1);return n.copy(s[1]).normalize(),n}}let ke,at,Nt;class Jb extends Jo{constructor(e){super(e)}load(e,t,n,r){const s=this,o=s.path===""?cc.extractUrlBase(e):s.path,a=new lb(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e,t){if(rw(e))ke=new iw().parse(e);else{const r=$d(e);if(!sw(r))throw new Error("THREE.FBXLoader: Unknown format.");if(Vh(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Vh(r));ke=new nw().parse(r)}const n=new cd(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Qb(n,this.manager).parse(ke)}}class Qb{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){at=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),s=new ew().parse(r);return this.parseScene(r,s,n),Nt}parseConnections(){const e=new Map;return"Connections"in ke&&ke.Connections.connections.forEach(function(n){const r=n[0],s=n[1],o=n[2];e.has(r)||e.set(r,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in ke.Objects){const n=ke.Objects.Video;for(const r in n){const s=n[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const r=e[n];t[r]!==void 0?e[n]=t[r]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in ke.Objects){const n=ke.Objects.Texture;for(const r in n){const s=this.parseTexture(n[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?ps:Ht,n.wrapT=a===0?ps:Ht,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const r=this.textureLoader.path,s=at.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new Ft):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new Ft):o=this.textureLoader.load(n);return this.textureLoader.setPath(r),o}parseMaterials(e){const t=new Map;if("Material"in ke.Objects){const n=ke.Objects.Material;for(const r in n){const s=this.parseMaterial(n[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const n=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!at.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(s.toLowerCase()){case"phong":a=new Xa;break;case"lambert":a=new ZM;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new Xa;break}return a.setValues(o),a.name=r,a}parseParameters(e,t,n){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new De().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=new De().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new De().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=new De().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new De().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=new De().fromArray(e.SpecularColor.value));const s=this;return at.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,o.ID),r.map!==void 0&&(r.map.encoding=tt);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,o.ID),r.emissiveMap!==void 0&&(r.emissiveMap.encoding=tt);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,o.ID),r.envMap!==void 0&&(r.envMap.mapping=To,r.envMap.encoding=tt);break;case"SpecularColor":r.specularMap=s.getTexture(t,o.ID),r.specularMap!==void 0&&(r.specularMap.encoding=tt);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,t){return"LayeredTexture"in ke.Objects&&t in ke.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=at.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in ke.Objects){const n=ke.Objects.Deformer;for(const r in n){const s=n[r],o=at.get(parseInt(r));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){const a={id:r};a.rawTargets=this.parseMorphTargets(o,n),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const o={ID:r.ID,indices:[],weights:[],transformLink:new Ce().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=at.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Nt=new mr;const r=this.parseModels(e.skeletons,t,n),s=ke.Objects.Model,o=this;r.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),at.get(l.ID).parents.forEach(function(h){const f=r.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&Nt.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.createAmbientLight(),Nt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=qd(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new tw().parse();Nt.children.length===1&&Nt.children[0].isGroup&&(Nt.children[0].animations=a,Nt=Nt.children[0]),Nt.animations=a}parseModels(e,t,n){const r=new Map,s=ke.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=at.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new vl;break;case"Null":default:u=new mr;break}u.name=l.attrName?qe.sanitizeNodeName(l.attrName):"",u.ID=a}this.getTransformData(u,l),r.set(a,u)}return r}buildSkeleton(e,t,n,r){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=s;s=new vl,s.matrixWorld.copy(c.transformLink),s.name=r?qe.sanitizeNodeName(r):"",s.ID=n,l.bones[u]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(r){const s=ke.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new st;else{let r=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(r=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(r){case 0:t=new Pt(u,c,s,o),h!==null&&t.setFocalLength(h);break;case 1:t=new sc(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new st;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(r){const s=ke.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new st;else{let r;n.LightType===void 0?r=0:r=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new De().fromArray(n.Color.value));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new Ph(s,o,a,l);break;case 1:t=new ud(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=wn.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=wn.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new hb(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Ph(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Xa({color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(r=new HM(s,o),r.normalizeSkinWeights()):r=new dn(s,o),r}createCurve(e,t){const n=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),r=new id({color:3342591,linewidth:1});return new rd(n,r)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Yd(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&at.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=ke.Objects.Model[r.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Nt.add(e.target)):e.lookAt(new I().fromArray(o))}}})}bindSkeleton(e,t,n){const r=this.parsePoseNodes();for(const s in e){const o=e[s];at.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;at.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new ac(o.bones),r[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in ke.Objects){const t=ke.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new Ce().fromArray(s.Matrix.a)}):e[r.Node]=new Ce().fromArray(r.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in ke&&"AmbientColor"in ke.GlobalSettings){const e=ke.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){const s=new De(t,n,r);Nt.add(new hd(s,1))}}}}class ew{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in ke.Objects){const n=ke.Objects.Geometry;for(const r in n){const s=at.get(parseInt(r)),o=this.parseGeometry(s,n[r],e);t.set(parseInt(r),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const r=n.skeletons,s=[],o=e.parents.map(function(h){return ke.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,f){return r[f.ID]!==void 0&&(h=r[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&s.push(n.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Yd(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=qd(c);return this.genGeometry(t,a,s,u)}genGeometry(e,t,n,r){const s=new It;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new wt(a.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new wt(a.colors,3)),t&&(s.setAttribute("skinIndex",new nc(a.weightsIndices,4)),s.setAttribute("skinWeight",new wt(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new Wt().getNormalMatrix(r),u=new wt(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){let h="uv"+(u+1).toString();u===0&&(h="uv"),s.setAttribute(h,new wt(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==c&&(s.addGroup(u,f-u,c),c=h,u=f)}),s.groups.length>0){const h=s.groups[s.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&s.addGroup(f,a.materialIndex.length-f,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,r),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:r.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,r=0,s=!1,o=[],a=[],l=[],c=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(p,g){let m,d=!1;p<0&&(p=p^-1,d=!0);let _=[],w=[];if(o.push(p*3,p*3+1,p*3+2),e.color){const y=co(g,n,p,e.color);l.push(y[0],y[1],y[2])}if(e.skeleton){if(e.weightTable[p]!==void 0&&e.weightTable[p].forEach(function(y){w.push(y.weight),_.push(y.id)}),w.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const y=[0,0,0,0],b=[0,0,0,0];w.forEach(function(M,C){let R=M,v=_[C];b.forEach(function(A,D,Z){if(R>A){Z[D]=R,R=A;const oe=y[D];y[D]=v,v=oe}})}),_=y,w=b}for(;w.length<4;)w.push(0),_.push(0);for(let y=0;y<4;++y)u.push(w[y]),h.push(_[y])}if(e.normal){const y=co(g,n,p,e.normal);a.push(y[0],y[1],y[2])}e.material&&e.material.mappingType!=="AllSame"&&(m=co(g,n,p,e.material)[0],m<0&&(f.negativeMaterialIndices=!0,m=0)),e.uv&&e.uv.forEach(function(y,b){const M=co(g,n,p,y);c[b]===void 0&&(c[b]=[]),c[b].push(M[0]),c[b].push(M[1])}),r++,d&&(f.genFace(t,e,o,m,a,l,c,u,h,r),n++,r=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}genFace(e,t,n,r,s,o,a,l,c,u){for(let h=2;h<u;h++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(h-1)*3]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(h-1)*4]),e.weightsIndices.push(c[(h-1)*4+1]),e.weightsIndices.push(c[(h-1)*4+2]),e.weightsIndices.push(c[(h-1)*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(h-1)*3]),e.colors.push(o[(h-1)*3+1]),e.colors.push(o[(h-1)*3+2]),e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(h-1)*3]),e.normal.push(s[(h-1)*3+1]),e.normal.push(s[(h-1)*3+2]),e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2])),t.uv&&t.uv.forEach(function(f,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(a[p][0]),e.uvs[p].push(a[p][1]),e.uvs[p].push(a[p][(h-1)*2]),e.uvs[p].push(a[p][(h-1)*2+1]),e.uvs[p].push(a[p][h*2]),e.uvs[p].push(a[p][h*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=ke.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,a.name)})})}genMorphGeometry(e,t,n,r,s){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const m=l[g]*3;u[m]=a[g*3],u[m+1]=a[g*3+1],u[m+2]=a[g*3+2]}const h={vertexIndices:o,vertexPositions:u},f=this.genBuffers(h),p=new wt(f.vertex,3);p.name=s||n.attrName,p.applyMatrix4(r),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a;let s=[];return n==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){if(Bh===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new It;const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new It;const n=t-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let h=0,f=o.length;h<f;h+=4)s.push(new Ye().fromArray(o,h));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=r.length-1-a;for(let h=0;h<n;++h)s.push(s[h])}const u=new Bh(n,r,s,a,l).getPoints(s.length*12);return new It().setFromPoints(u)}}class tw{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const r=t[n],s=this.addClip(r);e.push(s)}return e}parseClips(){if(ke.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=ke.Objects.AnimationCurveNode,t=new Map;for(const n in e){const r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=ke.Objects.AnimationCurve;for(const n in t){const r={id:t[n].id,times:t[n].KeyTime.a.map(ow),values:t[n].KeyValueFloat.a},s=at.get(r.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){const t=ke.Objects.AnimationLayer,n=new Map;for(const r in t){const s=[],o=at.get(parseInt(r));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const h=at.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=ke.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const p={modelName:f.attrName?qe.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Nt.traverse(function(g){g.ID===f.id&&(p.transform=g.matrix,g.userData.transformData&&(p.eulerOrder=g.userData.transformData.eulerOrder))}),p.transform||(p.transform=new Ce),"PreRotation"in f&&(p.preRotation=f.PreRotation.value),"PostRotation"in f&&(p.postRotation=f.PostRotation.value),s[c]=p}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const h=at.get(l.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,f=at.get(h).parents[0].ID,p=at.get(f).parents[0].ID,g=at.get(p).parents[0].ID,m=ke.Objects.Model[g],d={modelName:m.attrName?qe.sanitizeNodeName(m.attrName):"",morphName:ke.Objects.Deformer[h].attrName};s[c]=d}s[c][u.attr]=u}}}),n.set(parseInt(r),s))}return n}parseAnimStacks(e){const t=ke.Objects.AnimationStack,n={};for(const r in t){const s=at.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);n[r]={name:t[r].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(r){t=t.concat(n.generateTracks(r))}),new nb(e.name,-1,t)}generateTracks(e){const t=[];let n=new I,r=new en,s=new I;if(e.transform&&e.transform.decompose(n,r,s),n=n.toArray(),r=new Xt().setFromQuaternion(r,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,r,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,r){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,n);return new xs(e+"."+r,s,o)}generateRotationTrack(e,t,n,r,s,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(wn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(wn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(wn.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);r!==void 0&&(r=r.map(wn.degToRad),r.push(o),r=new Xt().fromArray(r),r=new en().setFromEuler(r)),s!==void 0&&(s=s.map(wn.degToRad),s.push(o),s=new Xt().fromArray(s),s=new en().setFromEuler(s).invert());const c=new en,u=new Xt,h=[];for(let f=0;f<l.length;f+=3)u.set(l[f],l[f+1],l[f+2],o),c.setFromEuler(u),r!==void 0&&c.premultiply(r),s!==void 0&&c.multiply(s),c.toArray(h,f/3*4);return new Nr(e+".quaternion",a,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),r=Nt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new vs(e.modelName+".morphTargetInfluences["+r+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,r){return n-r}),t.length>1){let n=1,r=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==r&&(t[n]=o,r=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const r=n,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];s.push(u),r[0]=u}else s.push(r[0]);if(a!==-1){const u=t.y.values[a];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){const u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],r=e.values[t]-n,s=Math.abs(r);if(s>=180){const o=s/180,a=r/o;let l=n+a;const c=e.times[t-1],h=(e.times[t]-c)/o;let f=c+h;const p=[],g=[];for(;f<e.times[t];)p.push(f),f+=h,g.push(l),l+=a;e.times=Gh(e.times,t,p),e.values=Gh(e.values,t,g)}}}}class nw{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new jd,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(r,s){const o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,n[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",r="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=s.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),r="connections",s=[c,u],lw(s,h),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=Za(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Za(t.a))}parseNodeSpecialProperty(e,t,n){const r=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],l=r[3];let c=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Za(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class iw{parse(e){const t=new kh(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const r=new jd;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(r===0)return null;const l=[];for(let f=0;f<s;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const r=n.propertyList[0];Array.isArray(r)?(t[n.name]=n,n.a=r):t[n.name]=r}else if(e==="Connections"&&n.name==="C"){const r=[];n.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let r=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[r]={type:s,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}typeof Wb>"u"&&console.error("THREE.FBXLoader: External library fflate.min.js required.");const a=bs(new Uint8Array(e.getArrayBuffer(o))),l=new kh(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class kh{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let r=0;r<e;r++)t[r]=this.getUint8();const n=t.indexOf(0);return n>=0&&(t=t.slice(0,n)),cc.decodeText(new Uint8Array(t))}}class jd{add(e,t){this[e]=t}}function rw(i){const e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===$d(i,0,e.length)}function sw(i){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(r){const s=i[r-1];return i=i.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(n(1)===e[r])return!1;return!0}function Vh(i){const e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function ow(i){return i/46186158e3}const aw=[];function co(i,e,t,n){let r;switch(n.mappingType){case"ByPolygonVertex":r=i;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(r=n.indices[r]);const s=r*n.dataSize,o=s+n.dataSize;return cw(aw,n.buffer,s,o)}const $a=new Xt,lr=new I;function qd(i){const e=new Ce,t=new Ce,n=new Ce,r=new Ce,s=new Ce,o=new Ce,a=new Ce,l=new Ce,c=new Ce,u=new Ce,h=new Ce,f=new Ce,p=i.inheritType?i.inheritType:0;if(i.translation&&e.setPosition(lr.fromArray(i.translation)),i.preRotation){const D=i.preRotation.map(wn.degToRad);D.push(i.eulerOrder||Xt.DefaultOrder),t.makeRotationFromEuler($a.fromArray(D))}if(i.rotation){const D=i.rotation.map(wn.degToRad);D.push(i.eulerOrder||Xt.DefaultOrder),n.makeRotationFromEuler($a.fromArray(D))}if(i.postRotation){const D=i.postRotation.map(wn.degToRad);D.push(i.eulerOrder||Xt.DefaultOrder),r.makeRotationFromEuler($a.fromArray(D)),r.invert()}i.scale&&s.scale(lr.fromArray(i.scale)),i.scalingOffset&&a.setPosition(lr.fromArray(i.scalingOffset)),i.scalingPivot&&o.setPosition(lr.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(lr.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(lr.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(h.copy(i.parentMatrix),u.copy(i.parentMatrixWorld));const g=t.clone().multiply(n).multiply(r),m=new Ce;m.extractRotation(u);const d=new Ce;d.copyPosition(u);const _=d.clone().invert().multiply(u),w=m.clone().invert().multiply(_),y=s,b=new Ce;if(p===0)b.copy(m).multiply(g).multiply(w).multiply(y);else if(p===1)b.copy(m).multiply(w).multiply(g).multiply(y);else{const Z=new Ce().scale(new I().setFromMatrixScale(h)).clone().invert(),oe=w.clone().multiply(Z);b.copy(m).multiply(g).multiply(oe).multiply(y)}const M=c.clone().invert(),C=o.clone().invert();let R=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(r).multiply(M).multiply(a).multiply(o).multiply(s).multiply(C);const v=new Ce().copyPosition(R),A=u.clone().multiply(v);return f.copyPosition(A),R=f.clone().multiply(b),R.premultiply(u.invert()),R}function Yd(i){i=i||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function Za(i){return i.split(",").map(function(t){return parseFloat(t)})}function $d(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),cc.decodeText(new Uint8Array(i,e,t))}function lw(i,e){for(let t=0,n=i.length,r=e.length;t<r;t++,n++)i[n]=e[t]}function cw(i,e,t,n){for(let r=t,s=0;r<n;r++,s++)i[s]=e[r];return i}function Gh(i,e,t){return i.slice(0,e).concat(t).concat(i.slice(e))}const uw=new Jb,hw=i=>new Promise((e,t)=>{uw.load(i,n=>{e(n)},()=>{},n=>{t(n)})});var xo={Linear:{None:function(i){return i}},Quadratic:{In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}},Cubic:{In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}},Quartic:{In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}},Quintic:{In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}},Sinusoidal:{In:function(i){return 1-Math.cos(i*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.cos(Math.PI*i))}},Exponential:{In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}},Circular:{In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}},Elastic:{In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}},Back:{In:function(i){var e=1.70158;return i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}},Bounce:{In:function(i){return 1-xo.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?xo.Bounce.In(i*2)*.5:xo.Bounce.Out(i*2-1)*.5+.5}}},is;typeof self>"u"&&typeof process<"u"&&process.hrtime?is=function(){var i=process.hrtime();return i[0]*1e3+i[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?is=self.performance.now.bind(self.performance):Date.now!==void 0?is=Date.now:is=function(){return new Date().getTime()};var fr=is,fw=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},i.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},i.prototype.update=function(e,t){e===void 0&&(e=fr()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var s=this._tweens[n[r]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),rs={Linear:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),s=rs.Utils.Linear;return e<0?s(i[0],i[1],n):e>1?s(i[t],i[t-1],t-n):s(i[r],i[r+1>t?t:r+1],n-r)},Bezier:function(i,e){for(var t=0,n=i.length-1,r=Math.pow,s=rs.Utils.Bernstein,o=0;o<=n;o++)t+=r(1-e,n-o)*r(e,o)*i[o]*s(n,o);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),s=rs.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(r=Math.floor(n=t*(1+e))),s(i[(r-1+t)%t],i[r],i[(r+1)%t],i[(r+2)%t],n-r)):e<0?i[0]-(s(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(s(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):s(i[r?r-1:0],i[r],i[t<r+1?t:r+1],i[t<r+2?t:r+2],n-r)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=rs.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,r){var s=(t-i)*.5,o=(n-e)*.5,a=r*r,l=r*a;return(2*e-2*t+s+o)*l+(-3*e+3*t-2*s-o)*a+s*r+e}}},Zd=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),Kd=new fw,Hh=function(){function i(e,t){t===void 0&&(t=Kd),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=xo.Linear.None,this._interpolationFunction=rs.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=Zd.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},i.prototype.duration=function(e){return this._duration=e,this},i.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?fr()+parseFloat(e):e:fr(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},i.prototype._setupProperties=function(e,t,n,r){for(var s in n){var o=e[s],a=Array.isArray(o),l=a?"array":typeof o,c=!a&&Array.isArray(n[s]);if(!(l==="undefined"||l==="function")){if(c){var u=n[s];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,o)),n[s]=[o].concat(u)}if((l==="object"||a)&&o&&!c){t[s]=a?[]:{};for(var h in o)t[s][h]=o[h];r[s]=a?[]:{},this._setupProperties(o,t[s],n[s],r[s])}else typeof t[s]>"u"&&(t[s]=o),a||(t[s]*=1),c?r[s]=n[s].slice().reverse():r[s]=t[s]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(e){return e===void 0&&(e=fr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},i.prototype.resume=function(e){return e===void 0&&(e=fr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return this._group=e,this},i.prototype.delay=function(e){return this._delayTime=e,this},i.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return this._yoyo=e,this},i.prototype.easing=function(e){return this._easingFunction=e,this},i.prototype.interpolation=function(e){return this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){if(e===void 0&&(e=fr()),t===void 0&&(t=!0),this._isPaused)return!0;var n,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,r){for(var s in n)if(t[s]!==void 0){var o=t[s]||0,a=n[s],l=Array.isArray(e[s]),c=Array.isArray(a),u=!l&&c;u?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i}();Zd.nextId;var An=Kd;An.getAll.bind(An);An.removeAll.bind(An);An.add.bind(An);An.remove.bind(An);An.update.bind(An);const Jr={mesh:"#1B3045",head:"#ffffff",soundLine:"#4f90bb",risingColor:"#5588AA",liveColor:"#ffffff",radarColor:"#ff8800",wall:"#fab73f",circle:"#00bbff",ball:"#fab73f",cone:"#ffff00",fly:"#00bbff"};class dw{constructor(e,t,n,r){this.height=n,this.scene=e,this.child=t,this.time=r,this.createMesh(),this.createLine()}computedMesh(){this.child.geometry.computeBoundingBox(),this.child.geometry.computeBoundingSphere()}createMesh(){this.computedMesh();const{max:e,min:t}=this.child.geometry.boundingBox,n=e.z-t.z,r=new Gn({uniforms:{u_height:this.height,u_up_color:{value:new De(Jr.risingColor)},u_city_color:{value:new De(Jr.mesh)},u_head_color:{value:new De(Jr.head)},u_size:{value:n},u_time:this.time},vertexShader:`
        uniform float u_time;
        varying vec3 v_position;
        
        void main() {
          // \u53D8\u5316\u7684\u65F6\u95F4 
          float uMax = 4.0;
        
          v_position = position;
          
          // \u53D8\u5316\u7684\u6BD4\u4F8B
          float rate = u_time / uMax * 2.0;
          
          // \u8FB9\u754C\u6761\u4EF6
          if (rate > 1.0) {
            rate = 1.0;
          }
          
          float z = position.z * rate;
        
          gl_Position = projectionMatrix * modelViewMatrix * vec4(vec2(position), z, 1.0);
        }
      `,fragmentShader:`
        varying vec3 v_position;
        
        uniform vec3 u_city_color;
        uniform vec3 u_head_color;
        uniform float u_size;
        
        uniform vec3 u_up_color;
        uniform float u_height;
        
        void main() {
          vec3 base_color = u_city_color;
          base_color = mix(base_color, u_head_color, v_position.z / u_size);
        
          // \u4E0A\u5347\u7EBF\u6761\u7684\u9AD8\u5EA6\u662F\u591A\u5C11
          if (u_height > v_position.z && u_height < v_position.z + 6.0) {
            float f_index = (u_height - v_position.z) / 3.0;
            base_color = mix(u_up_color, base_color, abs(f_index - 1.0));
          }
        
          gl_FragColor = vec4(base_color, 1.0);
        }
      `}),s=new dn(this.child.geometry,r);s.position.copy(this.child.position),s.rotation.copy(this.child.rotation),s.scale.copy(this.child.scale),this.scene.add(s)}createLine(){const e=new $M(this.child.geometry),{max:t,min:n}=this.child.geometry.boundingBox,r=new Gn({uniforms:{line_color:{value:new De(Jr.soundLine)},u_time:this.time,u_max:{value:t},u_min:{value:n},live_color:{value:new De(Jr.liveColor)}},vertexShader:`
        uniform float u_time;
        uniform vec3 live_color;
        uniform vec3 line_color;
        uniform vec3 u_max;
        uniform vec3 u_min;
        
        varying vec3 v_color;
        
        void main() {
          float uMax = 4.0;
          
          float rate = u_time / uMax * 2.0;
          
          if (rate > 1.0) {
            rate = 1.0;
          }
          
          float z = position.z * rate;
        
          float new_time = mod(u_time * 0.1, 1.0);
          // \u626B\u63CF\u7684\u4F4D\u7F6E
          float rangeY = mix(u_min.y, u_max.y, new_time);
          
          // \u5F53\u524D\u5728\u8FD9\u4E2A\u533A\u95F4\u5185\uFF0C\u663E\u793A\u626B\u63CF\u5149\u5E26
          if (rangeY < position.y && rangeY > position.y - 200.0) {
            float f_index = 1.0 - sin((position.y - rangeY) / 200.0 * 3.14);
            float r = mix(live_color.r, line_color.r, f_index);
            float g = mix(live_color.g, line_color.g, f_index);
            float b = mix(live_color.b, line_color.b, f_index);
            
            v_color = vec3(r,g,b);
          } else {
            v_color = line_color;
          }
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(vec2(position), z, 1.0);
        }
      `,fragmentShader:`
        varying vec3 v_color;
      
        void main() {
           gl_FragColor = vec4(v_color, 1.0);
        }
      `}),s=new jM(e,r);s.scale.copy(this.child.scale),s.rotation.copy(this.child.rotation),s.position.copy(this.child.position),this.scene.add(s)}}class pw{constructor(e){this.scene=e,this.smokes=[],this.init()}init(){this.geometry=new It,this.material=new sd({size:50,map:new cd().load("../../src/assets/smoke.png"),transparent:!0,depthWrite:!1}),this.material.onBeforeCompile=function(e){const t=`
        attribute float a_opacity;
        attribute float a_size;
        attribute float a_scale;
        varying float v_opacity;
        
        void main() {
          v_opacity = a_opacity;
      `,n=`
        gl_PointSize = a_size * a_scale;
      `;e.vertexShader=e.vertexShader.replace("void main() {",t),e.vertexShader=e.vertexShader.replace("gl_PointSize = size",n);const r=`
        varying float v_opacity;
      
        void main() {
      `,s=`
        gl_FragColor = vec4(outgoingLight, diffuseColor.a * v_opacity);
      `;e.fragmentShader=e.fragmentShader.replace("void main() {",r),e.fragmentShader=e.fragmentShader.replace("gl_FragColor = vec4(outgoingLight, diffuseColor.a);",s)},this.points=new qM(this.geometry,this.material),this.scene.add(this.points)}createParticle(){this.smokes.push({size:50,opacity:1,x:0,y:0,z:0,speed:{x:Math.random(),y:Math.random()+.3,z:Math.random()},scale:1})}setAttribute(e,t,n,r){this.geometry.setAttribute("position",new Ut(new Float32Array(e),3)),this.geometry.setAttribute("a_opacity",new Ut(new Float32Array(t),1)),this.geometry.setAttribute("a_size",new Ut(new Float32Array(n),1)),this.geometry.setAttribute("a_scale",new Ut(new Float32Array(r),1))}update(){const e=[],t=[],n=[],r=[];this.smokes=this.smokes.filter(s=>s.opacity<0?!1:(s.opacity-=.01,s.x=s.x+s.speed.x,s.y=s.y+s.speed.y,s.z=s.z+s.speed.z,s.scale+=.01,e.push(s.x,s.y,s.z),t.push(s.size),n.push(s.scale),r.push(s.opacity),!0)),this.setAttribute(e,r,t,n)}animation(){this.createParticle(),this.update()}}class mw{constructor(e,t,n){this.scene=e,this.camera=t,this.controls=n,this.tweenPosition=null,this.tweenRotation=null,this.height={value:5},this.top={value:0},this.flag=!1,this.time={value:0},this.effect={},this.loadCity()}loadCity(){hw("/src/model/beijing.fbx").then(e=>{e.traverse(t=>{t.isMesh&&new dw(this.scene,t,this.height,this.time)}),this.initEffect()})}initEffect(){this.effect.smoke=new pw(this.scene),this.addClick()}addWheel(){const e=document.body;e.onmousewheel=t=>{const r=t.clientX/window.innerWidth*2-1,s=-(t.clientY/window.innerHeight)*2+1,o=new I(r,s,.5);o.unproject(this.camera),o.sub(this.camera.position).normalize(),t.wheelDelta>0?(this.camera.position.x+=o.x*30,this.camera.position.y+=o.y*30,this.camera.position.z+=o.z*30,this.controls.target.x+=o.x*30,this.controls.target.y+=o.y*30,this.controls.target.z+=o.z*30):(this.camera.position.x-=o.x*30,this.camera.position.y-=o.y*30,this.camera.position.z-=o.z*30,this.controls.target.x-=o.x*30,this.controls.target.y-=o.y*30,this.controls.target.z-=o.z*30)}}addClick(){let e=!0;document.onmousedown=()=>{e=!0,document.onmousemove=()=>{e=!1}},document.onmouseup=t=>{e&&this.clickEvent(t),document.onmousemove=null}}clickEvent(e){const t=e.clientX/window.innerWidth*2-1,n=-(e.clientY/window.innerHeight)*2+1,o=new I(t,n,.5).unproject(this.camera).sub(this.camera.position).normalize(),l=new Sb(this.camera.position,o).intersectObjects(this.scene.children,!0);let c=null;l.length&&(c=l[0]),c&&(this.tweenPosition=new Hh(this.camera.position).to({x:c.point.x*3,y:c.point.y*3,z:c.point.z*3},1e3).start(),this.tweenRotation=new Hh(this.camera.rotation).to({x:this.camera.rotation.x,y:this.camera.rotation.y,z:this.camera.rotation.z},1e3).start())}start(e){for(const t in this.effect)this.effect[t]&&this.effect[t].animation();this.tweenPosition&&this.tweenRotation&&(this.tweenPosition.update(),this.tweenRotation.update()),this.time.value+=e,this.height.value+=.4,this.height.value>160&&(this.height.value=5),(this.top.value>15||this.top.value<0)&&(this.flag=!this.flag),this.top.value+=this.flag?-.8:.8}}const Wh={type:"change"},Ka={type:"start"},Xh={type:"end"};class gw extends Vi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ae),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Wh),n.update(),s=r.NONE},this.update=function(){const L=new I,U=new en().setFromUnitVectors(e.up,new I(0,1,0)),_e=U.clone().invert(),Me=new I,ve=new en,Se=2*Math.PI;return function(){const Pe=n.object.position;L.copy(Pe).sub(n.target),L.applyQuaternion(U),a.setFromVector3(L),n.autoRotate&&s===r.NONE&&A(R()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Be=n.minAzimuthAngle,et=n.maxAzimuthAngle;return isFinite(Be)&&isFinite(et)&&(Be<-Math.PI?Be+=Se:Be>Math.PI&&(Be-=Se),et<-Math.PI?et+=Se:et>Math.PI&&(et-=Se),Be<=et?a.theta=Math.max(Be,Math.min(et,a.theta)):a.theta=a.theta>(Be+et)/2?Math.max(Be,a.theta):Math.min(et,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(_e),Pe.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Me.distanceToSquared(n.object.position)>o||8*(1-ve.dot(n.object.quaternion))>o?(n.dispatchEvent(Wh),Me.copy(n.object.position),ve.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",N),n.domElement.removeEventListener("pointerdown",W),n.domElement.removeEventListener("pointercancel",ue),n.domElement.removeEventListener("wheel",fe),n.domElement.removeEventListener("pointermove",Q),n.domElement.removeEventListener("pointerup",K),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ae)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Ih,l=new Ih;let c=1;const u=new I;let h=!1;const f=new Ie,p=new Ie,g=new Ie,m=new Ie,d=new Ie,_=new Ie,w=new Ie,y=new Ie,b=new Ie,M=[],C={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function A(L){l.theta-=L}function D(L){l.phi-=L}const Z=function(){const L=new I;return function(_e,Me){L.setFromMatrixColumn(Me,0),L.multiplyScalar(-_e),u.add(L)}}(),oe=function(){const L=new I;return function(_e,Me){n.screenSpacePanning===!0?L.setFromMatrixColumn(Me,1):(L.setFromMatrixColumn(Me,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(_e),u.add(L)}}(),B=function(){const L=new I;return function(_e,Me){const ve=n.domElement;if(n.object.isPerspectiveCamera){const Se=n.object.position;L.copy(Se).sub(n.target);let ye=L.length();ye*=Math.tan(n.object.fov/2*Math.PI/180),Z(2*_e*ye/ve.clientHeight,n.object.matrix),oe(2*Me*ye/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Z(_e*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),oe(Me*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(L){f.set(L.clientX,L.clientY)}function X(L){w.set(L.clientX,L.clientY)}function V(L){m.set(L.clientX,L.clientY)}function z(L){p.set(L.clientX,L.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const U=n.domElement;A(2*Math.PI*g.x/U.clientHeight),D(2*Math.PI*g.y/U.clientHeight),f.copy(p),n.update()}function G(L){y.set(L.clientX,L.clientY),b.subVectors(y,w),b.y>0?F(v()):b.y<0&&q(v()),w.copy(y),n.update()}function se(L){d.set(L.clientX,L.clientY),_.subVectors(d,m).multiplyScalar(n.panSpeed),B(_.x,_.y),m.copy(d),n.update()}function re(L){L.deltaY<0?q(v()):L.deltaY>0&&F(v()),n.update()}function le(L){let U=!1;switch(L.code){case n.keys.UP:B(0,n.keyPanSpeed),U=!0;break;case n.keys.BOTTOM:B(0,-n.keyPanSpeed),U=!0;break;case n.keys.LEFT:B(n.keyPanSpeed,0),U=!0;break;case n.keys.RIGHT:B(-n.keyPanSpeed,0),U=!0;break}U&&(L.preventDefault(),n.update())}function pe(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),U=.5*(M[0].pageY+M[1].pageY);f.set(L,U)}}function we(){if(M.length===1)m.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),U=.5*(M[0].pageY+M[1].pageY);m.set(L,U)}}function $(){const L=M[0].pageX-M[1].pageX,U=M[0].pageY-M[1].pageY,_e=Math.sqrt(L*L+U*U);w.set(0,_e)}function Fe(){n.enableZoom&&$(),n.enablePan&&we()}function Te(){n.enableZoom&&$(),n.enableRotate&&pe()}function Ae(L){if(M.length==1)p.set(L.pageX,L.pageY);else{const _e=ge(L),Me=.5*(L.pageX+_e.x),ve=.5*(L.pageY+_e.y);p.set(Me,ve)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const U=n.domElement;A(2*Math.PI*g.x/U.clientHeight),D(2*Math.PI*g.y/U.clientHeight),f.copy(p)}function xe(L){if(M.length===1)d.set(L.pageX,L.pageY);else{const U=ge(L),_e=.5*(L.pageX+U.x),Me=.5*(L.pageY+U.y);d.set(_e,Me)}_.subVectors(d,m).multiplyScalar(n.panSpeed),B(_.x,_.y),m.copy(d)}function Ge(L){const U=ge(L),_e=L.pageX-U.x,Me=L.pageY-U.y,ve=Math.sqrt(_e*_e+Me*Me);y.set(0,ve),b.set(0,Math.pow(y.y/w.y,n.zoomSpeed)),F(b.y),w.copy(y)}function E(L){n.enableZoom&&Ge(L),n.enablePan&&xe(L)}function P(L){n.enableZoom&&Ge(L),n.enableRotate&&Ae(L)}function W(L){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Q),n.domElement.addEventListener("pointerup",K)),Y(L),L.pointerType==="touch"?S(L):he(L))}function Q(L){n.enabled!==!1&&(L.pointerType==="touch"?x(L):ie(L))}function K(L){ee(L),M.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Q),n.domElement.removeEventListener("pointerup",K)),n.dispatchEvent(Xh),s=r.NONE}function ue(L){ee(L)}function he(L){let U;switch(L.button){case 0:U=n.mouseButtons.LEFT;break;case 1:U=n.mouseButtons.MIDDLE;break;case 2:U=n.mouseButtons.RIGHT;break;default:U=-1}switch(U){case ji.DOLLY:if(n.enableZoom===!1)return;X(L),s=r.DOLLY;break;case ji.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;V(L),s=r.PAN}else{if(n.enableRotate===!1)return;j(L),s=r.ROTATE}break;case ji.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;j(L),s=r.ROTATE}else{if(n.enablePan===!1)return;V(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ka)}function ie(L){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;z(L);break;case r.DOLLY:if(n.enableZoom===!1)return;G(L);break;case r.PAN:if(n.enablePan===!1)return;se(L);break}}function fe(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(Ka),re(L),n.dispatchEvent(Xh))}function ae(L){n.enabled===!1||n.enablePan===!1||le(L)}function S(L){switch(ce(L),M.length){case 1:switch(n.touches.ONE){case qi.ROTATE:if(n.enableRotate===!1)return;pe(),s=r.TOUCH_ROTATE;break;case qi.PAN:if(n.enablePan===!1)return;we(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case qi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Fe(),s=r.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ka)}function x(L){switch(ce(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ae(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;xe(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;E(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;P(L),n.update();break;default:s=r.NONE}}function N(L){n.enabled!==!1&&L.preventDefault()}function Y(L){M.push(L)}function ee(L){delete C[L.pointerId];for(let U=0;U<M.length;U++)if(M[U].pointerId==L.pointerId){M.splice(U,1);return}}function ce(L){let U=C[L.pointerId];U===void 0&&(U=new Ie,C[L.pointerId]=U),U.set(L.pageX,L.pageY)}function ge(L){const U=L.pointerId===M[0].pointerId?M[1]:M[0];return C[U.pointerId]}n.domElement.addEventListener("contextmenu",N),n.domElement.addEventListener("pointerdown",W),n.domElement.addEventListener("pointercancel",ue),n.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}}const _w=()=>{const i=document.getElementById("webgl"),e=new VM,t=new Pt(45,window.innerWidth/window.innerHeight,1,1e5);t.position.set(1e3,500,100),e.add(t);const n=new gw(t,i);n.enableDamping=!0,n.enableZoom=!1,n.minDistance=100,n.maxDistance=2e3,n.enablePan=!0,e.add(new hd(11382189));const r=new ud(16777215);r.position.set(0,0,0),e.add(r);const s=new nd({canvas:i});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setClearColor(new De(0),1);const o=new mw(e,t,n),a=new pb,l=()=>{o.start(a.getDelta()),n.update(),s.render(e,t),requestAnimationFrame(l)};l(),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2))})},vw={id:"webgl"},xw={__name:"App",setup(i){return jl(()=>{_w()}),(e,t)=>(Xm(),Ym("canvas",vw,"\u6D4F\u89C8\u5668\u4E0D\u652F\u6301canvas\uFF0C\u8BF7\u5207\u6362\u6D4F\u89C8\u5668\u91CD\u8BD5"))}};Dg(xw).mount("#app");

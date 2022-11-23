(function(){"use strict";var t={1284:function(t,e,r){var n=r(9242),s=r(3396);function o(t,e,r,n,o,i){const l=(0,s.up)("ProductGrid");return(0,s.wg)(),(0,s.j4)(l)}const i={class:"w-auto justify-center items-center min-h-screen bg-white min-w-[95%]"},l={class:"h-auto transition-all md:w-full align-top"},c={class:"bd-white md:flex md:justify-center p-4"},a={class:"w-full md:flex md:justify-center bg-[#FAFAFA] pb-10"},u={class:"w-[90%] pl-10 pr-10 ml-auto mr-auto"},d={class:"content-center md:flex md:justify-center md:flex-wrap gap-6"},f=(0,s._)("div",{class:"w-full text-[48px] text-w-700 block"},[(0,s._)("h1",{class:"text-left"},"Results")],-1),p={class:"w-full block"};function v(t,e,r,o,v,w){const h=(0,s.up)("Search"),m=(0,s.up)("ProductsList");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",l,[(0,s._)("div",c,[(0,s.Wm)(h)]),(0,s._)("div",a,[(0,s._)("div",u,[(0,s._)("div",null,[(0,s._)("div",d,[f,((0,s.wg)(),(0,s.j4)(s.n4,null,{fallback:(0,s.w5)((()=>[(0,s.Uk)(" Loading... ")])),default:(0,s.w5)((()=>[(0,s.Wm)(m)])),_:1})),(0,s._)("div",p,[(0,s._)("a",{href:"#",onClick:e[0]||(e[0]=(0,n.iM)(((...t)=>w.showMore&&w.showMore(...t)),["prevent"])),class:"text-[20px] text-w-500 text-[#1AB76C] hover:underline"},"Show More")])])])])])])])}r(7658);const w={class:"relative w-full"},h=(0,s._)("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[(0,s._)("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,s._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1);function m(t,e,r,n,o,i){return(0,s.wg)(),(0,s.iD)("div",w,[h,(0,s._)("input",{onChange:e[0]||(e[0]=(...t)=>i.search&&i.search(...t)),onKeyup:e[1]||(e[1]=(...t)=>i.search&&i.search(...t)),class:"w-full h-12 text-sm outline-none border rounded-lg transition-all pl-10 pr-20 focus:border-blue-600",type:"text",placeholder:"Search"},null,32)])}var g=r(354),x=r.n(g),b=r(4870);const C=(0,b.qj)({products:[],offset:0,offsetStep:12,page:1,searchTerm:""});function y(t,e){const r=(0,b.iH)(),n=async()=>{const n=await fetch(t,e);r.value=await n.json()};return{response:r,request:n}}async function k(t){const e=(0,b.iH)(!1);let r={};C.offset>0&&(r.offset=C.offset),t&&(r={...r,filters:t});const n=new URLSearchParams(r).toString(),{response:s,request:o}=y("//productcataloglatest-env.eba-fyratyyu.us-east-1.elasticbeanstalk.com/?"+n);e.value||(await o(),e.value=!0);const i=s.value;return{products:i}}var _={name:"SearchProducts",methods:{search:x()((async function(t){const e=t.target.value.trim();C.offset=0;const{products:r}=await k(e);C.products=r}),250)}},j=r(89);const S=(0,j.Z)(_,[["render",m]]);var H=S,M=r(7139);function P(t,e,r,n,o,i){const l=(0,s.up)("Card");return(0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.store.products,(t=>((0,s.wg)(),(0,s.j4)(l,(0,M.vs)((0,s.dG)({key:t.id},t)),null,16)))),128)}const Z={class:"w-full h-84 p-3 border bg-white mt-5 rounded-[24px] md:w-80"},O={class:"grid grid-cols-1"},V={class:"h-56"},D={class:"mx-auto flex justify-center h-32"},F=["src","alt"],U={class:"text-lg text-black-500 font-semibold mt-1"},z={class:"text-[16px] mt-3 text-black-500 text-left"},A={key:0},G={class:"text-sm mt-3 text-black-500 pb-5 text-left"},L={key:1,class:"text-sm mt-3 text-black-500 pb-5 text-left"},B={class:"text-red-400 stroke-current pr-2"},q={class:"line-through"},N=(0,s.uE)('<div class="h-24 border-y-2"><div class="flex justify-between items-center mt-6 align-baseline"><div class="flex items-center gap-2"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.90909 11.25C3.34091 11.25 2.85795 11.0586 2.46023 10.6758C2.0625 10.293 1.86364 9.82812 1.86364 9.28125H0.5V2.0625C0.5 1.70156 0.633636 1.39269 0.900909 1.13587C1.16773 0.878625 1.48864 0.75 1.86364 0.75H11.4091V3.375H13.4545L15.5 6V9.28125H14.1364C14.1364 9.82812 13.9375 10.293 13.5398 10.6758C13.142 11.0586 12.6591 11.25 12.0909 11.25C11.5227 11.25 11.0398 11.0586 10.642 10.6758C10.2443 10.293 10.0455 9.82812 10.0455 9.28125H5.95455C5.95455 9.82812 5.75568 10.293 5.35795 10.6758C4.96023 11.0586 4.47727 11.25 3.90909 11.25ZM3.90909 9.9375C4.10227 9.9375 4.26432 9.8745 4.39523 9.7485C4.52568 9.62294 4.59091 9.46719 4.59091 9.28125C4.59091 9.09531 4.52568 8.93956 4.39523 8.814C4.26432 8.688 4.10227 8.625 3.90909 8.625C3.71591 8.625 3.55386 8.688 3.42295 8.814C3.2925 8.93956 3.22727 9.09531 3.22727 9.28125C3.22727 9.46719 3.2925 9.62294 3.42295 9.7485C3.55386 9.8745 3.71591 9.9375 3.90909 9.9375ZM12.0909 9.9375C12.2841 9.9375 12.4459 9.8745 12.5764 9.7485C12.7073 9.62294 12.7727 9.46719 12.7727 9.28125C12.7727 9.09531 12.7073 8.93956 12.5764 8.814C12.4459 8.688 12.2841 8.625 12.0909 8.625C11.8977 8.625 11.7359 8.688 11.6055 8.814C11.4745 8.93956 11.4091 9.09531 11.4091 9.28125C11.4091 9.46719 11.4745 9.62294 11.6055 9.7485C11.7359 9.8745 11.8977 9.9375 12.0909 9.9375ZM11.4091 6.65625H14.3068L12.7727 4.6875H11.4091V6.65625Z" fill="#9C9C9C"></path></svg><p class="text-gray-400 font-semibold text-[10px]">Free shipping</p><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.15 1.95156C10.15 2.69715 9.54554 3.30156 8.79995 3.30156H7.44995V1.95156C7.44995 1.20598 8.05437 0.601562 8.79995 0.601562C9.54554 0.601562 10.15 1.20598 10.15 1.95156ZM1.69995 4.20156C1.14767 4.20156 0.699951 4.64928 0.699951 5.20156V9.50156C0.699951 10.0538 1.14767 10.5016 1.69995 10.5016H6.54995V4.20156H1.69995ZM7.44995 4.20156V10.5016H12.3C12.8522 10.5016 13.3 10.0538 13.3 9.50156V5.20156C13.3 4.64928 12.8522 4.20156 12.3 4.20156H7.44995ZM5.19995 3.30156C4.45437 3.30156 3.84995 2.69715 3.84995 1.95156C3.84995 1.20598 4.45437 0.601562 5.19995 0.601562C5.94554 0.601562 6.54995 1.20598 6.54995 1.95156V3.30156H5.19995Z" fill="#9C9C9C"></path></svg><p class="text-gray-400 font-semibold text-[10px]">Free Gift</p></div></div><button class="btn bg-[#1AB76C] uppercase hover:underline text-white font-bold py-2 px-4 rounded-full mt-4 align-bottom w-full"> View Details </button></div>',1);function $(t,e,r,n,o,i){return(0,s.wg)(),(0,s.iD)("div",Z,[(0,s._)("div",O,[(0,s._)("div",V,[(0,s._)("section",D,[(0,s._)("img",{src:r.image,width:"132",class:"items-center",alt:r.title},null,8,F)]),(0,s._)("p",U,(0,M.zw)(r.vendor.title),1),(0,s._)("p",z,(0,M.zw)(t.$filters.str_limit(r.title,60)),1)]),(0,s._)("div",null,[void 0==r.strikedPrice?((0,s.wg)(),(0,s.iD)("div",A,[(0,s._)("p",G,(0,M.zw)(t.$filters.currencyUSD(r.price)),1)])):void 0!==r.strikedPrice?((0,s.wg)(),(0,s.iD)("div",L,[(0,s._)("span",B,(0,M.zw)(r.price),1),(0,s._)("span",q,(0,M.zw)(t.$filters.currencyUsd(r.strikedPrice)),1)])):(0,s.kq)("",!0)]),N])])}var T={name:"ProductGridCard",props:{title:String,price:Number,strikedPrice:Number||null,image:String,vendor:{id:Number,title:String}}};const E=(0,j.Z)(T,[["render",$]]);var K=E,R={components:{Card:K},data(){return{store:C}},async setup(){const{products:t}=await k();C.products=t}};const W=(0,j.Z)(R,[["render",P]]);var I=W,Y={name:"ProductGrid",methods:{async showMore(){C.page++,C.offset=C.page*C.offsetStep;const{products:t}=await k();C.products.push(...t)}},components:{Search:H,ProductsList:I}};const J=(0,j.Z)(Y,[["render",v]]);var Q=J,X={name:"App",components:{ProductGrid:Q}};const tt=(0,j.Z)(X,[["render",o]]);var et=tt;const rt=(0,n.ri)(et),nt=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});rt.config.globalProperties.$filters={str_limit(t,e){return t?(t=t.toString(),t.length<=e?t:t.substr(0,e)+"..."):""},currencyUSD(t){return nt.format(t)}},rt.mount("#app")}},e={};function r(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,n,s,o){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],o=t[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(l=!1,o<i&&(i=o));if(l){t.splice(u--,1);var a=s();void 0!==a&&(e=a)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[n,s,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,i=n[0],l=n[1],c=n[2],a=0;if(i.some((function(e){return 0!==t[e]}))){for(s in l)r.o(l,s)&&(r.m[s]=l[s]);if(c)var u=c(r)}for(e&&e(n);a<i.length;a++)o=i[a],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},n=self["webpackChunkspotter"]=self["webpackChunkspotter"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(1284)}));n=r.O(n)})();
//# sourceMappingURL=app.b3f40d8c.js.map
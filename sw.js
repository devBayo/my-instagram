if(!self.define){let e,c={};const s=(s,r)=>(s=new URL(s+".js",r).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(c[d])return;let o={};const n=e=>s(e,d),a={module:{uri:d},exports:o,require:n};c[d]=Promise.all(r.map((e=>a[e]||n(e)))).then((e=>(i(...e),o)))}}define(["./workbox-69ae947a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"package-lock.json",revision:"82dba09cdb9f0e711b3a478d4f9a4331"},{url:"package.json",revision:"a3b21119997a88712d00b342ddf2f8ba"},{url:"public/favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"public/index.html",revision:"82d3804b1d85e676df83f1b17c9b8e0b"},{url:"public/logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"public/logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"public/manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"public/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"README.md",revision:"33822368bfb3ad3de6fceb9cd76aa0dd"},{url:"src/App.js",revision:"a8c5e01f42d644700150da96758d7ef6"},{url:"src/assets/instagram.png",revision:"d2e0232de53371e24375ab5de5ec48be"},{url:"src/assets/pexels4.jpeg",revision:"e31adc05b8af95f4d088df163ba9e6e5"},{url:"src/assets/profileIcon.svg",revision:"b9870f212c1ac59b050b38bd5de6cba6"},{url:"src/components/Bio.jsx",revision:"8a0c5e5af6b08c7ca8a4297867f668cb"},{url:"src/components/Gallery.jsx",revision:"69c622b8923c9cd4072b53b384184fb0"},{url:"src/components/index.js",revision:"dede57a35d9c6b5d2c337ec6176f8c75"},{url:"src/components/Nav.jsx",revision:"02eabc7c8f757f969bc9de92c132ff17"},{url:"src/css/App.css",revision:"ef23d7e0d77e473406cdc652e010f4cc"},{url:"src/css/Queries.css",revision:"54b9d9acf1ad1de1a753bac30d204917"},{url:"src/dexie.js",revision:"877dd414e8d853a83a2eb3ea627b0ae4"},{url:"src/index.js",revision:"a9041bd4fab741d3360ee568d569c956"},{url:"task.txt",revision:"fff332cc16c63d4854b8f243cbfa14ea"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
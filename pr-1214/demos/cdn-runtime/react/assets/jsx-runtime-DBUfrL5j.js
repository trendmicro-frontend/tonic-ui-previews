var u={exports:{}},e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i;function j(){if(i)return e;i=1;var a=Symbol.for("react.transitional.element"),v=Symbol.for("react.fragment");function x(d,r,t){var s=null;if(t!==void 0&&(s=""+t),r.key!==void 0&&(s=""+r.key),"key"in r){t={};for(var n in r)n!=="key"&&(t[n]=r[n])}else t=r;return r=t.ref,{$$typeof:a,type:d,key:s,ref:r!==void 0?r:null,props:t}}return e.Fragment=v,e.jsx=x,e.jsxs=x,e}var R;function l(){return R||(R=1,u.exports=j()),u.exports}var o=l();const p=o.Fragment,E=o.jsx,_=o.jsxs;export{p as Fragment,E as jsx,_ as jsxs};

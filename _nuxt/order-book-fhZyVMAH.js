(function(){"use strict";let i=null,r=null;onmessage=function(e){const{symbol:s,lastUpdateId:a,asks:o,bids:d}=e.data;i&&i.close(1e3,"Work complete"),i=new WebSocket(`wss://stream.binance.com:9443/ws/${s.ws}@depth`),i.onmessage=c=>{const t=JSON.parse(c.data);t.u<=a||(!r&&t.U<=a+1&&t.u>=a+1&&n(t,{asks:o,bids:d}),r&&t.U==r.u+1&&n(t,{asks:o,bids:d}),r=t,this.postMessage({asks:o,bids:d}))}};function n(e,s){p(e.a,s.asks),p(e.b,s.bids)}function p(e,s){e.forEach(a=>{f(s,a)}),s.sort((a,o)=>parseFloat(o[0])-parseFloat(a[0]))}function f(e,s){const a=e.findIndex(o=>o[0]==s[0]);return a>=0?parseFloat(s[1])?e[a][1]=s[1]:e.splice(a,1):parseFloat(s[1])&&e.push(s),e}})();

if(window.self!=window.top&&window.location.href.search("file://")==0&&window.location.href.search("gimmeSource=1")!=-1){var getSource=function(a){if(a.childNodes.length>0){return getSource(a.childNodes[a.childNodes.length-1])
}else{return a.innerText}};var sendResp=function(d){var e=JSON.parse(d.data);
var c=null;if(document.body){c=document.body.innerText
}else{c=getSource(document)}var a=JSON.stringify({content:c,id:e.id});
var b={method:"localFileCB",data:a};chrome.extension.sendMessage(b,function(){});
window.removeEventListener("message",sendResp,false)
};window.addEventListener("message",sendResp,false)
}else{var _background=true;var _webRequest={};var Converter;
var Eventing;var D=false;var V=false;var EV=false;var EMV=false;
var ENV=false;var TS=false;var CV=false;(function(){var r="DOMAttrModified";
var t=window.XMLHttpRequest;var u={safeContext:true,scriptBlocker:false};
var f=null;var n=false;var x=false;var e=false;var B=false;
var G=[];var b=function(){D|=(f>=60);V|=(f>=80);EV|=(f>=100);
ENV|=(f>=100);EMV|=(f>=100);TS|=(f>=100)};Registry.require("xmlhttprequest");
Registry.require("convert");Registry.require("helper");
var m=null;var y=null;var c="";var g=Registry.get("xmlhttprequest");
var a=g.run;var F=Registry.get("helper");Converter=Registry.get("convert");
var l=function(){if(V||EV||D){console.log("content: detected DOMContentLoaded "+Eventing.contextId)
}e=true;if(n){p.sendMessage("domContentLoaded = true; if (typeof runAllLoadListeners !== 'undefined') runAllLoadListeners();")
}};var j=function(H){if(!B){if(V||EV||D){console.log("content: first DOMNodeInserted "+Eventing.contextId)
}B=true}};var p={responses:{},initstate:0,sendMessage:function(J){var I="";
if(this.initstate==0){this.initstate=1}else{if(this.initstate==1){I+="var ENV = "+(ENV?"true":"false")+";\n";
I+="var TS = "+(TS?"true":"false")+";\n";I+="var Converter = "+F.serialize(Converter)+";\n";
I+="var TMwin = { backup: {}, use: "+JSON.stringify(u)+" };\n";
I+="var TMJSON = JSON;\n";I+="var _background = false;\n";
I+="var console = window['console'];\n";I+="var JSON = window['JSON'];\n";
I+="function JSONcheck() {\n";I+="        if (!JSON.parse || JSON.parse != 'function parse() { [native code] }') {\n";
I+="              if (TMJSON && TMJSON.parse == 'function parse() { [native code] }') {\n";
I+="                  JSON = TMJSON;\n";I+="                  console.log('page: use JSON backup');\n";
I+="              } else {\n";I+="                  JSON = window.JSON;\n";
I+="                  console.log('page: use JSON fallback');\n";
I+="              }\n";I+="        } else if (ENV) { \n";
I+="            console.log('page: JSON is fine');\n";
I+="        }\n";I+="};\n";I+="JSONcheck();\n";I+="var Eventing = "+F.serialize(Eventing).replace("___eval___","eval")+";\n";
I+="Eventing.init();\n";I+="function cleanup(evt) {\n";
I+="    Eventing.cleanup();\n";I+="    window.removeEventListener('unload', cleanup, false);\n";
I+="    delete Eventing;\n";I+="    delete TMJSON;\n";
I+="    delete TMwin;\n";I+="    delete Converter;\n";
I+="    delete TS;\n";I+="    delete ENV;\n";I+="};\n";
I+="window.addEventListener('unload', cleanup, false);\n";
I+="if (ENV) console.log('page: env initialized ("+Eventing.contextId+")');\n";
if(!u.safeContext){I+="function removeScriptTag() {\n";
I+="    var st = document.getElementById('TM_script_tag_"+Eventing.contextId+"');\n";
I+="    if (st && st.parentNode) {\n";I+="        if (ENV) console.log('page: script tag cleanup ("+Eventing.contextId+")');\n";
I+="        st.parentNode.removeChild(st);\n";I+="    }\n";
I+="};\n";I+="removeScriptTag();\n";var H=document.createElement("script");
H.textContent="(function TM_mother() { "+I+"\n"+J+"})();";
H.setAttribute("name","TM_internal");H.setAttribute("id","TM_script_tag_"+Eventing.contextId);
(document.head||document.body||document.documentElement||document).appendChild(H)
}else{window["eval"]("(function TM_mother() { "+I+"\n"+J+"})();")
}this.initstate=2}else{if(this.initstate==2){Eventing.fireEvent(J)
}}}},getResponseId:function(I){var H=0;if(I){while(H==0||p.responses[H]!=undefined){H=(new Date()).getTime()+Math.floor(Math.random()*6121983+1)
}p.responses[H]=I;if(V){console.log("content: registerResponseId "+H)
}}return H},runResponse:function(H,J){if(V){console.log("content: runResponse "+H+" -> "+Converter.decode(J))
}for(var I in p.responses){if(I==H){var L="";try{L=JSON.parse(Converter.decode(J));
if(!p.responses[I]){console.log("Warn: content: responseId "+I+" is undefined!!!")
}else{p.responses[I](L)}}catch(K){console.log("content: Json parse error (runResponse):"+K+"\n"+J)
}p.responses[I]=null;return}}console.log("WARN: responseId "+H+" not found!")
}};var E={ports:{},log:function(H){if(_background){console.log("content: "+H)
}else{Eventing.fireEvent({fn:"log",args:"page: "+H})
}},onContentResponse:function(L,J,I,K){if(_background){if(V){this.log("onContentResponse "+this.id+" "+I+" "+K)
}p.runResponse(I,Converter.encode(K))}else{var H=arguments;
Eventing.fireEvent({fn:"onContentResponse",args:H})
}},onResponse:function(N,L,J,M){if(_background){try{if(V){this.log("onResponse "+this.id+" "+J+" "+M)
}var K=Converter.encode(M);var I="if (TMwin.chromeEmu) TMwin.chromeEmu.runResponse("+J+', "'+K+'")';
p.sendMessage(I);K="";I=""}catch(O){console.log("Error: processing onResponse")
}}else{var H=arguments;Eventing.fireEvent({fn:"onResponse",args:H})
}},onConnectResponse:function(N,L,J,M){if(_background){try{if(V){this.log("onConnectResponse "+this.id+" "+J+" "+M)
}var K=Converter.encode(M);var I="if (TMwin.chromeEmu) TMwin.chromeEmu.runConnectResponse("+J+', "'+K+'")';
p.sendMessage(I);K="";I=""}catch(O){console.log("Error: processing onConnectResponse")
}}else{var H=arguments;Eventing.fireEvent({fn:"onConnectResponse",args:H})
}},onContentRequest:function(L,K,I){if(_background){if(V){this.log("onContentRequest "+this.id+" "+I+" "+JSON.stringify(L))
}if(L.id&&this.id&&L.id!=this.id){if(V){this.log("filter: "+L.id+"!="+this.id)
}return}var J=Converter.encode(JSON.stringify({sender:K,request:L}));
var H="if (TMwin.chromeEmu) TMwin.chromeEmu.runContentRequest("+I+', "'+J+'", 0);';
p.sendMessage(H);J="";H=""}else{console.log("Warn: onContentRequest from non BG not supported")
}},onMessage:function(L,K,I){if(_background){if(V){this.log("onMessage "+this.id+" "+I+" "+JSON.stringify(L))
}if(L.id&&this.id&&L.id!=this.id){if(V){this.log("filter: "+L.id+"!="+this.id)
}return}var J=Converter.encode(JSON.stringify({sender:K,request:L}));
var H="if (TMwin.chromeEmu) TMwin.chromeEmu.runRequest("+I+', "'+J+'", 0)';
p.sendMessage(H);J="";H=""}else{console.log("Warn: onMessage from non BG not supported")
}},xmlHttpRequest:function(Q,H,J){if(_background){if(V){this.log("xmlHttpRequest "+this.id+" "+J+" "+JSON.stringify(H))
}var L=JSON.parse(H);if(L.q_id){var I=L.q_id;L=window[I];
delete window[I]}var P=function(R){var S="__x__"+Math.floor(Math.random()*6121983+1);
window[S]=R.response;R.response=null;E.onConnectResponse(Q,0,J,JSON.stringify({onLoad:true,response:R,r_id:S}))
};var M=function(R){E.onConnectResponse(Q,0,J,JSON.stringify({onReadyStateChange:true,response:R}))
};var N=function(R){E.onConnectResponse(Q,0,J,JSON.stringify({onError:true,response:R}))
};var K=function(R){E.onConnectResponse(Q,0,J,JSON.stringify({onDone:true,onDisconnect:true,response:R}))
};a(L,P,M,N,K)}else{var O=arguments;Eventing.fireEvent({fn:"xmlHttpRequest",args:O})
}},runUpdateListener:function(){console.log("WARN: not supported!")
},getUrl:function(){console.log("WARN: not supported!")
},sendExtensionMessage:function(L,K,I){if(_background){if(V){this.log("sendExtensionMessage "+this.id+" "+I+" "+K)
}var J=function(N){E.onResponse(L,0,I,JSON.stringify(N))
};var M=JSON.parse(K);M.responseId=I;chrome.extension.sendMessage(M,J);
M=null}else{var H=arguments;Eventing.fireEvent({fn:"sendExtensionMessage",args:H})
}},sendExtensionConnect:function(M,L,I){if(_background){var O=JSON.parse(L);
O.responseId=I;if(V){this.log("sendExtensionConnect "+this.id+" "+I+" "+L)
}var N=function(P){E.onConnectResponse(M,0,I,JSON.stringify({onMessage:true,msg:P}))
};var K=function(P){E.onConnectResponse(M,0,I,JSON.stringify({onDisconnect:true}));
O=null};var J=chrome.extension.connect({name:O});J.onMessage.addListener(N);
J.onDisconnect.addListener(K);E.ports[I]=J}else{var H=arguments;
Eventing.fireEvent({fn:"sendExtensionConnect",args:H})
}},sendExtensionPortMessage:function(L,K,I){if(_background){if(V){this.log("sendExtensionPortMessage "+this.id+" "+I+" "+K)
}var J=E.ports[I];if(!J){this.log("Error: sendExtensionPortMessage unable to find port "+I)
}else{var M=JSON.parse(K);M.responseId=I;J.postMessage(M);
M=null}}else{var H=arguments;Eventing.fireEvent({fn:"sendExtensionPortMessage",args:H})
}},sendTabsRequest:function(){console.log("WARN: not supported!")
},createTab:function(){console.log("WARN: not supported!")
},getSelected:function(){console.log("WARN: not supported!")
},updateTab:function(){console.log("WARN: not supported!")
},onUpdated:function(){console.log("WARN: not supported!")
},getMessage:function(){console.log("WARN: not supported!")
},storageKey:function(){console.log("WARN: not supported!")
},storageRemoveItem:function(){console.log("WARN: not supported!")
},storageSetItem:function(){console.log("WARN: not supported!")
},storageGetItem:function(){console.log("WARN: not supported!")
},storageLength:function(){console.log("WARN: not supported!")
}};var i=function(){if(u.safeContext){var R="";var Y={window:{forceUnsafe:true},top:{forceUnsafe:true},frames:{},parent:{},opener:{}};
var L="";var X=0;for(var S in Y){if(!Y.hasOwnProperty(S)){continue
}if(X!=0){L+=", "}L+=S+":"+S;X++}var M=document.createElement("div");
var J=null;try{M.setAttribute("onclick","return {"+L+"};");
var Z=M.onclick();J=Z.window}catch(U){J=window;u.scriptBlocker=true;
console.log("content: unsafeWindow retrieval failed! Do you use a script blocker like ScriptNo?");
var I=function(aa){if(aa.alert){alert(aa.alert)}};var H={method:"scriptBlockerDetected",id:Eventing.contextId,url:window.location.origin+window.location.pathname,params:window.location.search+window.location.hash};
chrome.extension.sendMessage(H,I)}M.setAttribute("onclick",null);
M.onclick=null;M=null;var O="__o__"+R;var T="window."+O+" = {"+L+"};";
var N="";N+="function eventHandler(evt) {\n";N+="    try {\n";
N+="        eval(decodeURI(evt.attrName))\n";N+="    } catch (e) {}\n";
N+="    evt = null;\n";N+="};\n";N+="document.addEventListener('TM_do"+Eventing.contextId+"', eventHandler, false);\n";
T+=N;var Q=J.document.createElement("script");Q.setAttribute("name","TM_internal");
Q.innerHTML=T;var W=J.document;(W.documentElement||W).appendChild(Q);
var Z=J[O]||{window:window,top:top,frames:frames,parent:parent,opener:opener};
delete J[O];Q.parentNode.removeChild(Q);if(D){console.log("env: init "+window.location.href)
}for(var K in Y){if(!Y.hasOwnProperty(K)){continue}var P=function(){var ab=K;
var ac=Z[ab];var ae=Object.getOwnPropertyDescriptor(window,ab);
var aa=false;if(!Y[ab].forceUnsafe){try{if(ae){if(ae.writable){window[ab]=ac;
aa=true;if(D){console.log("env: write "+ab)}G.push(function(){if(CV){console.log("clean: window["+ab+"]")
}delete window[ab]})}else{if(ae.configurable){var ag={};
ae.value=ac;ag[ab]=ae;Object.defineProperties(window,ag);
aa=true;if(D){console.log("env: redefine "+ab)}G.push(function(){if(CV){console.log("clean: prop window["+ab+"]")
}ag[ab].value=null;Object.defineProperties(window,ag)
})}}}else{var ag={};ag[ab]={value:ac,enumerable:true,writable:false,configurable:true};
Object.defineProperties(window,ag);aa=true;if(D){console.log("env: define "+ab+" to "+JSON.stringify(ae))
}G.push(function(){if(CV){console.log("clean: prop window["+ab+"]")
}ag[ab].value=null;Object.defineProperties(window,ag)
})}}catch(ad){console.log(ad.message)}}if(!aa){var af=ab.replace(/^(.)/g,function(ah){return ah.toUpperCase()
});if(D){console.log("env: create unsafe"+af)}var ag={};
ag["unsafe"+af]={value:ac,enumerable:true,writable:false,configurable:true};
Object.defineProperties(window,ag);G.push(function(){if(CV){console.log("clean: prop window[unsafe"+af+"]")
}ag["unsafe"+af].value=null;Object.defineProperties(window,ag)
})}};P()}}};var o=function(I){if(u.safeContext){var H=document.createEvent("MutationEvent");
H.initMutationEvent("TM_do"+Eventing.contextId,false,false,null,null,null,encodeURI(I),H.ADDITION);
document.dispatchEvent(H);return H.returnValue}else{console.log("ERROR: assert(use.safeContext)")
}};function z(){return;if(u.safeContext){var J="__o__"+Eventing.contextId;
var I="window."+J+" = { XMLHttpRequest: XMLHttpRequest };";
o(I);var H=unsafeWindow[J];delete unsafeWindow[J];if(H.XMLHttpRequest){window.XMLHttpRequest=H.XMLHttpRequest;
if(D){console.log("content: XMLHttpRequest overwritten")
}}}}function s(){var H=[window.HTMLElement.prototype,document.__proto__];
for(var J=0;J<H.length;J++){var I=function(){var K=H[J];
var L=Object.getOwnPropertyDescriptor(K,"wrappedJSObject");
if(!L){var M={wrappedJSObject:{get:function(){return this
},enumerable:false,configurable:true},};Object.defineProperties(K,M);
G.push(function(){if(CV){console.log("clean: "+F.toType(K)+"[wrappedJSObject]")
}delete K.wrappedJSObject})}};I()}}function v(){var J=false;
var M=true;var K=function(){var O=document.createElement("p");
var N=false;O.addEventListener("DOMAttrModified",function(){N=true
},false);O.setAttribute("class","trigger");return N
};if(K()){return}var H=[window.HTMLElement.prototype,document.__proto__];
for(var L=0;L<H.length;L++){var I=H[L];if(!I.___addEventListener){I.___addEventListener=I.addEventListener;
I.___removeEventListener=I.removeEventListener;I.removeEventListener=function(P,O,N){this.___removeEventListener(P,O,N)
};I.addEventListener=function(N,Y,S){if(N==r){if(this.outerHTML){var P=this.outerHTML.split(">")[0]+" />";
var T=this;var Q;if(this.parentNode){Q=this.parentNode
}else{Q=this}var Z=function(ad,ac,ae,ab){var aa=document.createEvent("MutationEvent");
aa.initMutationEvent("DOMAttrModified",true,false,ad,ae||"",ab||"",ac,(ae==null)?aa.ADDITION:(ab==null)?aa.REMOVAL:aa.MODIFICATION);
ad.dispatchEvent(aa)};try{var O=function(ab){for(var ad in ab){if(!ab.hasOwnProperty(ad)){continue
}var aa=ab[ad];if(aa.attributeName!=""&&aa.target){var ae=aa.oldValue;
var ac=aa.target.getAttribute(aa.attributeName);if(ae!=ac){Z(T,aa.attributeName,ae,ac)
}}}};var X=new WebKitMutationObserver(O);X.observe(T,{childList:false,subtree:false,attributeOldValue:true,attributes:true})
}catch(W){var R=function(ad,ac){if(ac==undefined){ac={}
}var aa=ad.replace(/\\\"/g,"").replace(/".*?"/g,"").replace(/^<[a-zA-b0-9]* |>$/g,"").split(" ");
for(var ab in aa){if(!aa.hasOwnProperty(ab)){continue
}var ae=aa[ab];if(ae.substr(ae.length-1,1)=="="){ac[ae.substr(0,ae.length-1)]=null
}}return ac};var U=function(ah){if(ah.target==T){var ab=ah.target.outerHTML.split(">")[0]+" />";
if(P!=ab){var aa=document.createElement("div");aa.innerHTML=P;
var aj=aa.childNodes[0];var af=document.createElement("div");
af.innerHTML=ab;var ad=af.childNodes[0];var ai=R(P,R(ab));
for(var ae in ai){if(!ai.hasOwnProperty(ae)){continue
}var ac=aj.getAttribute(ae);var ag=ad.getAttribute(ae);
if(ac!=ag){Z(T,ae,ac,ag)}}P=ab}}};M=false;if(!J){console.log("content: WARN unable to use MutationObserver -> fallback to DOMSubtreeModified event")
}J=true;Q.addEventListener("DOMSubtreeModified",U,true)
}}}this.___addEventListener(N,Y,S)};G.push(function(){I.removeEventListener=I.___removeEventListener;
I.addEventListener=I.___addEventListener})}}}Eventing={contextId:null,rEventId:null,sEventId:null,eventSource:null,generateScriptId:function(){var H="";
H+=Math.floor(Math.random()*6121983+1);H+=((new Date()).getTime().toString()).substr(10,7);
return H},log:function(H){console.log((_background?"content":"page")+": "+H)
},alternativeEventSource:{dispatchEvent:function(H){if(!window.AltEventing){window.AltEventing={}
}if(window.AltEventing[H.type]){window.AltEventing[H.type](H)
}},addEventListener:function(I,H){if(!window.AltEventing){window.AltEventing={}
}window.AltEventing[I]=H},removeEventListener:function(H){if(!window.AltEventing){window.AltEventing={}
}delete window.AltEventing[H]}},init:function(){if(!Eventing.contextId){Eventing.log("Eventing.init() failed!!!");
return}var I="TM_toPage";var J="TM_toContent";var H={};
if(_background){H=u;Eventing.rEventId=J;Eventing.sEventId=I;
Eventing.eventHandler=Eventing.eventHandlerContent}else{H=TMwin.use;
Eventing.rEventId=I;Eventing.sEventId=J;Eventing.eventHandler=Eventing.eventHandlerPage
}if(H.safeContext&&H.scriptBlocker){if(D){Eventing.log("Eventing: use scriptBlocker workaround!")
}Eventing.eventSource=Eventing.alternativeEventSource
}else{Eventing.eventSource=document}if(V){Eventing.log("Eventing initialized ("+Eventing.contextId+")")
}Eventing.registerListener()},fireEvent:function(J,H){if(H==undefined){H=Eventing.sEventId+Eventing.contextId
}if(ENV){Eventing.log("fireEvent "+H+" -> "+JSON.stringify(J))
}try{var I=document.createEvent("MutationEvent");I.initMutationEvent(H,false,false,null,null,null,Converter.encodeR(JSON.stringify(J)),I.ADDITION);
Eventing.eventSource.dispatchEvent(I)}catch(K){Eventing.log("Error: fire event "+H+" -> "+JSON.stringify(J)+" "+K)
}},registerListener:function(){if(ENV){Eventing.log("registerListener "+Eventing.rEventId+Eventing.contextId)
}if(_background){Eventing.eventSource.addEventListener(Eventing.rEventId+Eventing.contextId,Eventing.eventHandler,false)
}else{Eventing.eventSource.addEventListener(Eventing.rEventId+Eventing.contextId,Eventing.eventHandler,false)
}},eventHandlerPage:function(H){try{if(ENV){Eventing.log("Event received "+Eventing.rEventId+Eventing.contextId+" "+H.attrName)
}var I=JSON.parse(Converter.decodeR(H.attrName));try{___eval___(I);
if(TS){Eventing.log("it took "+((new Date()).getTime()-H.timeStamp)+" ms to process this event ->"+I.fn)
}}catch(J){console.log("page:Error: processing event ("+I+")! "+J.message)
}I=""}catch(J){Eventing.log("Error: retrieving event! "+J.message);
Eventing.log("Error: "+H.attrName)}H=null},eventHandlerContent:function(H){try{if(V){Eventing.log("Event received "+Eventing.rEventId+Eventing.contextId+" "+H.attrName)
}var I=JSON.parse(Converter.decodeR(H.attrName));try{E[I.fn](I.args[0],I.args[1],I.args[2],I.args[3],I.args[4],I.args[5],I.args[6],I.args[7]);
if(TS){Eventing.log("it took "+((new Date()).getTime()-H.timeStamp)+" ms to process this event ->"+I.fn)
}}catch(J){Eventing.log("Error: processing event ("+I.fn+")! "+JSON.stringify(J))
}I=""}catch(J){Eventing.log("Error: retrieving event! "+J.message);
Eventing.log("Error: "+H.attrName)}H=null},cleanup:function(){if(Eventing.eventSource){Eventing.eventSource.removeEventListener(Eventing.rEventId+Eventing.contextId,Eventing.eventHandler,false)
}}};Eventing.contextId=Eventing.generateScriptId();
E.id=Eventing.contextId;var q={init:function(){window.addEventListener("load",q.runHlp,false);
window.addEventListener("DOMNodeInserted",q.runHlp,false);
window.addEventListener("DOMContentLoaded",q.runHlp,false)
},runHlp:function(H){if(!n){if(!document.head&&!document.body){if(H==undefined){window.setTimeout(q.runHlp,100)
}return}else{q.cleanupHlp();q.run()}}},run:function(){if(!n&&y&&m){var I="var V = "+(V?"true":"false")+";\n";
I+="var EV = "+(EV?"true":"false")+";\n";I+="var ENV = "+(ENV?"true":"false")+";\n";
I+="var EMV = "+(EMV?"true":"false")+";\n";I+="var logLevel = "+f+";\n";
var H="var tmCE = "+F.serialize(E)+";\nvar Event = function() {};\n";
var J="var TM_context_id = '"+Eventing.contextId+"';\n";
var K="";p.sendMessage("console.log('Tampermonkey started');");
if(e){K="TMwin.loadHappened = true;\n";K="TMwin.domContentLoaded = true;\n";
if(V||EV||D){console.log("content: Start ENV with DOMContentLoaded "+Eventing.contextId)
}}else{if(B){K="TMwin.loadHappened = true;\n";if(V||EV||D){console.log("content: Start ENV with loadHappened "+Eventing.contextId)
}}}if(K!=""&&(V||EV)){console.log("content: Start ENV normally "+Eventing.contextId)
}var L="(function () { "+I+J+c+H+m+y+K+"})();";p.sendMessage(L);
y=null;m=null;H=null;n=true}},cleanupHlp:function(){if(!n){window.removeEventListener("load",q.runHlp,false);
window.removeEventListener("DOMNodeInserted",q.runHlp,false);
window.removeEventListener("DOMContentLoaded",q.runHlp,false)
}}};function k(){if(V){console.log("content: cleanup!")
}var I={method:"unLoad",id:Eventing.contextId,topframe:window.self==window.top,url:window.location.origin+window.location.pathname,params:window.location.search+window.location.hash};
chrome.extension.sendMessage(I,function(K){});try{Eventing.cleanup();
q.cleanupHlp()}catch(J){console.log("cleanup: Error: "+J.message)
}window.removeEventListener("DOMContentLoaded",l,false);
window.removeEventListener("DOMNodeInserted",j,false);
window.removeEventListener("unload",k,false);if(G!=null){for(var H=0;
H<G.length;H++){G[H]()}G=null}else{console.log("content: Warning: multiple unload events detected!!!")
}}i();v();s();z();window.addEventListener("unload",k,false);
window.addEventListener("DOMContentLoaded",l,false);
window.addEventListener("DOMNodeInserted",j,false);
function d(J,I,H){if(!n){window.setTimeout(function(){d(J,I,H)
},10);return true}if(x){var K=p.getResponseId(H);E.onContentRequest(J,I,K)
}return true}chrome.extension.onMessage.addListener(d);
p.sendMessage();var A=2;var h=function(){if(D){console.log("content: create test XHR to check whether webRequest API is working")
}var J={method:"GET",url:"http://tampermonkey.net/empty.html",headers:{Referer:"http://doesnt.matter.com"},};
var I=function(K){if(K.webRequest){_webRequest=K.webRequest;
g.setWebRequest(_webRequest)}if(V){console.log("content: updated webRequest info")
}};var H=function(){var K={method:"getWebRequestInfo",id:Eventing.contextId};
chrome.extension.sendMessage(K,I)};a(J,null,null,null,H)
};var C=1;var w=function(){var J="emulation.js";var K="environment.js";
var H=function(N){if(N===undefined){if(D){console.log("content: _early_ execution, connection to bg failed -> retry!")
}window.setTimeout(w,C);C*=2;return}Eventing.init();
f=N.logLevel;b();if(V||D){console.log("content: Started ("+Eventing.contextId+", "+window.location.origin+window.location.pathname+")")
}if(n){p.sendMessage("TMwin.adjustLogLevel("+f+");\n")
}if(N.enabledScriptsCount){if(V||D){console.log("content: start event processing for "+Eventing.contextId+" ("+N.enabledScriptsCount+" to run)")
}x=true;if(N.webRequest){_webRequest=N.webRequest;g.setWebRequest(_webRequest);
if(_webRequest.headers&&!_webRequest.verified&&A-->0){h()
}}q.runHlp()}else{if(V||D){console.log("content: disable event processing for "+Eventing.contextId)
}x=false;n=true;q.cleanupHlp();k()}};var I=[];try{m="("+Registry.getRaw(J)+")();\n";
y="("+Registry.getRaw(K)+")();\n"}catch(M){}var L={method:"prepare",id:Eventing.contextId,raw:I,topframe:window.self==window.top,url:window.location.origin+window.location.pathname,params:window.location.search+window.location.hash};
chrome.extension.sendMessage(L,H)};w()})()};
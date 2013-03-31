
var V=false;(function(){Registry.require("pingpong");
Registry.require("crcrc");Registry.require("htmlutil");
Registry.require("i18n");var e=Registry.get("crcrc").cr;
var d=Registry.get("crcrc").crc;var h=Registry.get("htmlutil");
var b=Registry.get("pingpong");var g=Registry.get("i18n");
var a=function(B){var I=document.getElementById("action");
var E=I.parentNode;E.removeChild(I);I=e("span");I.setAttribute("id","action");
E.appendChild(I);var O=d("table","actiontable","actiontable");
for(var H in B){var L=B[H];var m=d("tr","actiontr");
var K;var C;if(L.divider){var y=d("tr","filler");var P=d("td","filler ");
P.setAttribute("colspan","3");var z=d("div","actiondivider","divider",H.toString());
P.appendChild(z);y.appendChild(P);O.appendChild(y)}else{var q=d("td","imagetd actionimagetd");
var o=d("td","actiontd");var r=d("div","actionitem",L.name,L.id,"ai",true);
o.appendChild(r);if(L.image){C=h.createImage(L.image,L.name,L.id,null,"");
q.appendChild(C)}if(L.checkbox){var x=document.createElement("input");
x.type="checkbox";x.name=L.name;x.id="enabled";x.checked=L.enabled;
var G=function(){k(this.name,this.id,this.checked)};
x.addEventListener("click",G);K=document.createElement("span");
K.textContent=L.name;r.appendChild(x);r.appendChild(K)
}else{if(L.url||L.urls){var u=L.urls||[L];o.setAttribute("colspan","2");
for(var N=0;N<u.length;N++){var J=u[N];K=document.createElement("a");
K.href="javascript://nop/";K.url=J.url;K.newtab=J.newtab;
var w=function(){c(this.url,this.newtab)};K.addEventListener("click",w);
K.setAttribute("class",o.setAttribute("class")+" clickable");
K.textContent=J.name;r.appendChild(K);if(N<u.length-1){var D=document.createElement("span");
D.textContent=" | ";r.appendChild(D)}}}else{if(L.menucmd){var Q=document.createElement("a");
Q.href="javascript://nop/";o.id=L.id;var G=function(){j(this.id)
};o.addEventListener("click",G);o.setAttribute("class",o.setAttribute("class")+" clickable");
Q.textContent=L.name;o.setAttribute("colspan","2");
r.appendChild(Q)}else{if(L.runUpdate){var Q=document.createElement("a");
Q.href="javascript://nop/";o.id=L.id;var v=function(){i(this.id)
};o.addEventListener("click",v);o.setAttribute("class",o.setAttribute("class")+" clickable");
Q.textContent=L.name;o.setAttribute("colspan","2");
r.appendChild(Q)}else{if(L.userscript||L.user_agent){if(L.id){var R=L.enabled?chrome.extension.getURL("images/greenled.png"):chrome.extension.getURL("images/redled.png");
var n=function(p){if(p&&p.button&2||p.button&1||p.ctrlKey){window.open(chrome.extension.getURL("options.html")+"?open="+this.key);
p.stopPropagation()}else{k(this.name,"enabled",!this.oldvalue)
}};var F=(L.position>0)?((L.position<10)?" "+L.position:L.position):null;
var M=h.createImageText(R,L.name,"enabled","enabled",L.enabled?g.getMessage("Enabled"):g.getMessage("Disabled"),n,F);
M.oldvalue=L.enabled;q.appendChild(M);r.name=L.name;
r.oldvalue=L.enabled;r.key=L.id;r.addEventListener("click",n)
}K=document.createElement("span");K.textContent=L.name;
o.setAttribute("colspan","2");r.appendChild(K)}else{K=document.createElement("span");
K.textContent=L.name;o.setAttribute("colspan","2");
r.appendChild(K)}}}}}if(L.tamperfire){var A=function(){var t=K;
var s=C;var S=L.doneImage;var p=function(T,U){if(t){if(U){t.textContent=U
}else{t.textContent=t.textContent.replace("?",Number(T))
}}if(s){s.setAttribute("src",S)}};if(L.tabid){l(L.tabid,p)
}else{q=null;o=null}};A()}if(q){m.appendChild(q)}if(o){m.appendChild(o)
}}O.appendChild(m)}I.appendChild(O)};var c=function(n,m){try{var p=function(q){chrome.tabs.sendMessage(q.id,{method:"loadUrl",url:n,newtab:m},function(r){})
};if(m){chrome.extension.sendMessage({method:"openInTab",url:n},function(q){})
}else{chrome.tabs.getSelected(null,p)}}catch(o){console.log(o)
}};var i=function(){try{chrome.extension.sendMessage({method:"runScriptUpdates"},function(n){})
}catch(m){console.log(m)}};var j=function(n){try{chrome.extension.sendMessage({method:"execMenuCmd",id:n},function(o){})
}catch(m){console.log(m)}};var l=function(n,m){try{var p=function(r){var t=null;
if(r.progress){var q=r.progress.action+"... ";if(!q||q==""){q=""
}var s="";if(r.progress.state&&r.progress.state.of){s=" "+Math.round(r.progress.state.n*100/r.progress.state.of)+"%"
}t=(q!=""||s!="")?q+s:null}m(r.cnt,t)};chrome.extension.sendMessage({method:"getFireItems",countonly:true,tabid:n},p)
}catch(o){console.log(o)}};var k=function(m,q,o){try{var n={method:"modifyScriptOptions",name:m};
if(q&&q!=""){n[q]=o}chrome.extension.sendMessage(n,function(r){if(r){if(r.i18n){g.setLocale(r.i18n)
}if(r.items){a(r.items)}}});document.getElementById("action").innerHTML=g.getMessage("Please_ wait___")
}catch(p){console.log("mSo: "+p.message)}};chrome.extension.onMessage.addListener(function(o,n,m){if(V){console.log("a: method "+o.method)
}if(false&&o.method=="updateActions"){a(o.items);m({})
}else{if(V){console.log("a: "+g.getMessage("Unknown_method_0name0",o.method))
}}});var f=function(){window.removeEventListener("DOMContentLoaded",f,false);
window.removeEventListener("load",f,false);var r=null;
var p=null;var n=function(){if(r){window.clearTimeout(r)
}r=null;if(p){p.parentNode.remove(p)}p=null};var m=function(){p=document.createElement("img");
p.setAttribute("src","images/large-loading.gif");document.getElementById("action").appendChild(p)
};var q=function(){n();k(null,false)};var o=function(){n();
if(confirm(g.getMessage("An_internal_error_occured_Do_you_want_to_visit_the_forum_"))){window.open("http://tampermonkey.net/bug")
}};r=window.setTimeout(m,500);b.ping(q,o)};window.addEventListener("DOMContentLoaded",f,false);
window.addEventListener("load",f,false)})();
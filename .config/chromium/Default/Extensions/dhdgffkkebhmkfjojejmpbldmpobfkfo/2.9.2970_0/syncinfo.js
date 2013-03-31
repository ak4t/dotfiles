
(function(){Registry.require("xmlhttprequest");var b=Registry.get("xmlhttprequest").run;
var g=true;var i="@us";var x=false;var p=1;var f=null;
var w=0;var k=null;var d={ePASTEBIN:1,eCHROMESYNC:2};
var l={};var a=[];var p=3;var c=60*1000;var q=false;
var E=null;var n=[{method:"HEAD",url:"http://www.google.com",extract:function(N,F){try{var M=F?F.split("\n"):null;
for(var G in M){var H=M[G].split(":");var I=H.shift()||"";
var L=H.join(":")||"";if(I.trim().toLowerCase()=="date"&&L){var K=new Date(L);
if(K){return K.getTime()-(new Date()).getTime()}}}}catch(J){}return null
}},{method:"GET",url:"http://json-time.appspot.com/time.json",extract:function(J,I){try{var F=JSON.parse(J);
if(!F.error&&F.datetime){var G=new Date(F.datetime);
if(G){return G.getTime()-(new Date()).getTime()}}}catch(H){}return null
}}];l[d.ePASTEBIN]="http://pastebin.com/raw.php?i=%s";
l[d.eCHROMESYNC]="";var v=function(F,H){a=[];var G=false;
f=H;w=F;if(F==d.eCHROMESYNC){m();G=true}else{if(l[w]&&f){k=l[w].replace("%s",H);
G=true}}return G};var A=function(){return(new Date()).getTime()+E
};var u=function(K){var G=0;var I=function(){G++;window.setTimeout(J,1)
};var H=function(){E=0;console.log("si: time offset  detection failed!");
if(K){K(false)}};var F=function(L){E=L;console.log("si: detected a time offset of "+L+" ms");
if(K){K(true)}};var J=function(){if(G<n.length){var N=n[G];
var M={method:N.method,url:N.url,};var L=function(P){if(P.readyState==4){if(P.status==200){var O=N.extract(P.responseText,P.responseHeaders);
if(O===null){I()}else{F(O)}}else{I()}}};if(g){console.log("si: determine time offset with server "+N.url)
}b(M,L)}else{H()}};J()};var m=function(){if(x){return
}x=true;chrome.storage.onChanged.addListener(o)};var o=function(K,J){if(w==d.eCHROMESYNC&&J=="sync"){if(E===null){var F=function(){o(K,J)
};u(F);return}var I=new RegExp(i+"$");for(var H in K){var L=K[H];
if(g){console.log('si: storage key "%s" in namespace "%s" changed. Old value was "%s", new value is "%s".',H,J,L.oldValue,L.newValue)
}if(H.search(I)==-1){if(g){console.log("si:   ^^ ignore cause it is not a script!")
}continue}for(var G=0;G<a.length;G++){if(j[H]){if(g){console.log("si:   ^^ ignore cause object is going to be changed right now or was changed by me!")
}}else{a[G](H,L.oldValue,L.newValue)}}}}};var s=function(K,I){var N=[];
try{K=K.replace(/\t/g,"    ");K=K.replace(/\r/g,"\n");
K=K.replace(/\n\n+/g,"\n");var Q=K.split("\n");for(var L=0;
L<Q.length;L++){var H=Q[L];var P=H.split("|");if(P.length>3){console.log("si: can't handle line: "+H);
continue}var G=P[P.length-1];var O=null;var F=null;
if(P.length>1){for(var J=P.length-2;J>=0;J--){try{O=JSON.parse(P[J])
}catch(M){F=P[J]}}}N.push({name:F,url:G,options:(O||{})})
}}catch(M){console.log("si: unable to parse data: "+K)
}if(I){I(N)}};var h=function(H){if(!k){if(H){H([])}return
}var G={method:"GET",retries:p,url:k,};var F=function(I){if(I.readyState==4){if(I.status==200){s(I.responseText,H)
}else{if(H){H([])}}}};b(G,F)};var e=function(J){var F=arguments;
var H=function(){F.callee.apply(this,F)};if(q){window.setTimeout(H,500);
return}var G=new RegExp(i+"$");var I=function(L){var N=[];
for(var K in L){if(K.search(G)==-1){continue}var P=K.replace(G,"");
var M=null;try{if(j[K]){M=JSON.parse(j[K])}else{M=JSON.parse(L[K])
}}catch(O){}if(!M||!M.url){if(g){console.log("si: unable to parse extended info of "+K)
}continue}N.push({id:P,name:P.replace(/20/g," "),url:M.url,options:M.options?M.options:{}})
}q=false;if(J){J(N)}};q=true;chrome.storage.sync.get(null,I);
return null};var t=null;var j={};var r=function(G,F){j[G.id+i]=JSON.stringify({url:G.url});
if(t){window.clearTimeout(t)}t=window.setTimeout(y,3000);
if(F){F()}};var D=function(G,F){j[G.id+i]=JSON.stringify({url:G.url,options:{removed:A()}});
if(t){window.clearTimeout(t)}t=window.setTimeout(y,3000);
if(F){F()}};var B=function(F){var H=arguments;var I=function(){H.callee.apply(this,H)
};if(q){window.setTimeout(I,500);return}q=true;var G=function(){j={};
q=false;if(F){F()}};chrome.storage.sync.clear(G)};var y=function(K,G){var H=arguments;
var I=function(){H.callee.apply(this,H)};if(q){window.setTimeout(I,500);
return}if(G===undefined){G=p}var F=function(L){var M=chrome.runtime?chrome.runtime.lastError:L;
if(M){console.log("si: error on write "+M.message);
if(--G>0){window.setTimeout(I,c)}}else{j={}}q=false
};q=true;try{chrome.storage.sync.set(j,F)}catch(J){F(J)
}};var z=function(G){if(E===null){var F=function(){z(G)
};u(F);return}if(w==d.eCHROMESYNC){return e(G)}else{return h(G)
}};var C=function(F){a.push(F)};Registry.register("syncinfo",{init:v,list:z,add:r,reset:B,getTime:A,remove:D,addChangeListener:C,types:d})
})();
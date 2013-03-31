
Registry.registerRaw("environment.js",function(){var q="DOMContentLoaded";
var x="load";var L="DOMNodeInserted";var z=0;var C=1;
var d="TM_internal";TMwin.domContentLoaded=false;TMwin.loadHappened=false;
TMwin.domNodeInserted=false;TMwin.props={};TMwin.adjustLogLevel=function(S){if(S!==undefined){logLevel=S
}D|=(logLevel>=60);V|=(logLevel>=80);EV|=(logLevel>=100);
EMV|=(logLevel>=100)};Clean=[];TMwin.adjustLogLevel();
var B=TMwin.chromeEmu;var t=function(S){return({}).toString.apply(S).match(/\s([a-z|A-Z]+)/)[1]
};var g=function(S){var T=document.createElement("div");
T.appendChild(S.cloneNode(true));return T.innerHTML
};var H=function(T,S){if(S==undefined){S=100}return(S&&T&&(T==document||(H(T.parentNode,S-1))))
};var M=function(aq,Z,W,U){var X=null;try{var ak=U.context;
var ad="";var al="";if(!ak.__TMbackref){ak.__TMbackref={}
}for(var ag in U.elements){if(!U.elements.hasOwnProperty(ag)){continue
}var ae=U.elements[ag];if(ae.name){if(ae.overwrite){ad+="var "+ae.name+" = "+ae.value+";\n"
}else{if(ae.scriptid){ak.__TMbackref[ae.name+"_"+ae.scriptid]=ae.value;
ad+="var "+ae.name+" = this.__TMbackref."+ae.name+"_"+ae.scriptid+";\n"
}else{ak[ae.name]=ae.value;ad+="var "+ae.name+" = this."+ae.name+";\n"
}}}else{if(D){console.log("env: WARN: unexpected item in props elem: "+JSON.stringify(ae))
}}}var ab=function(au){var at="";at+="try {\n";at+=W+au+"\n";
at+="} catch (e) {\n";at+="    console.log(\"ERROR: Execution of script '"+aq.name+"' failed! \" + e.message); \n";
at+='    console.log(e.stack.replace(/\\(eval at <anonymous> /g, "").replace(/<anonymous>:/g, "").replace(/chrome-extension:\\/\\/[\\w]{32}\\/content\\.js:\\d*:\\d*\\)*, /g, ""))\n';
at+="}\n";return at};al='arguments.callee.setID({ id: "'+aq.id+'", run_at: "'+aq.options.run_at+'", ns: "'+aq.namespace+'" });\n';
X=al+ad+ab(Z);var am=new Function(X);am.apply(ak,[])
}catch(ao){var af={maxerr:999,newcap:true,es5:true,sloppy:true,browser:true,white:true,plusplus:true,nomen:true,"continue":true,todo:true,eqeq:true,passfail:false,unparam:true,devel:true};
var aa=null;try{aa=JSLINT}catch(ar){}var ac=aa?aa(X,af):true;
var an="";if(ac){an=ad+Z}else{var T=(al+ad).split("\n").length+2;
var S=W.split("\n").length;var ap="";for(var aj in JSLINT.errors){var ai=JSLINT.errors[aj];
if(ai&&ai.line>=T){var ah=ai.line-T+1;ap+=ah>S?"script: ":"require: ";
ap+=ai.reason.replace(/.$/,"")+" on line: "+ah+" at character: "+ai.character+"\n"
}}an="JSLINT output:\n"+ap}if(D||ac){console.log("env: ERROR: Syntax error @ '"+aq.name+"'!\n##########################\n"+an+"##########################\nERROR: "+ao.message+"\n");
console.log(ao.stack)}else{console.log("env: ERROR: Syntax error @ '"+aq.name+"'!\n"+ao.message+"\n");
console.log(ao.stack)}var Y=function(){if(D){B.extension.sendMessage({method:"copyToClipboard",data:{content:Z,type:"test"},id:"42"},function(){})
}throw ao};window.setTimeout(Y,1);return}};var F=[];
var k={events:[],done:{},running:null};var v=[];var b=function(Z,X,W,Y){var U={attrChange:0,attrName:null,bubbles:true,cancelBubble:false,cancelable:false,clipboardData:undefined,currentTarget:null,defaultPrevented:false,eventPhase:0,newValue:null,prevValue:null,relatedNode:null,returnValue:true,srcElement:null,target:null,timeStamp:(new Date()).getTime()};
var T=new Event();for(var S in U){T[S]=U[S]}for(var S in X){T[S]=X[S]
}T.type=Z;W.apply(Y,[T])};var m=function(S,T){if(V||EV){console.log("env: postLoadEvent!")
}var U={attrName:"null",newValue:"null",prevValue:"null",eventPhase:window.Event.AT_TARGET,attrChange:MutationEvent.ADDITION,target:document,relatedNode:document,srcElement:document};
b(x,U,S,T)};var J=function(S,T){if(V||EV){console.log("env: postDomEventListener!")
}var U={attrName:"null",newValue:"null",prevValue:"null",eventPhase:window.Event.AT_TARGET,attrChange:MutationEvent.ADDITION,target:document,relatedNode:document,srcElement:document};
b(q,U,S,T)};var R=function(W,X,S,Z){if(!k){return}if(V||EV){console.log("env: refireAllNodeInserts!")
}var T=k.events.length;for(var U=0;U<T;U++){if(!Z||k.events[U].domContentLoaded){var Y={attrName:"",newValue:"",prevValue:"",eventPhase:window.Event.AT_TARGET,target:k.events[U].event.target,relatedNode:k.events[U].event.relatedNode,srcElement:k.events[U].event.srcElement};
b(L,Y,W,X)}if(!k.running){return}}};var l=function(S){TMwin.loadHappened=true;
TMwin.domContentLoaded=true;if(V||EV||D){console.log("env: DOMContentLoaded Event!")
}u()};var P=function(S){if(!TMwin.domNodeInserted&&(V||EV||D)){console.log("env: first DOMNodeInserted Event!")
}TMwin.loadHappened=true;TMwin.domNodeInserted=true;
if(k){k.events.push({event:S,domContentLoaded:TMwin.domContentLoaded})
}};var I=function(S){TMwin.loadHappened=true;if(V||EV||D){console.log("env: load Event!")
}};var a=function(){document.removeEventListener(L,P,false);
document.removeEventListener(q,l,false);document.removeEventListener(x,I,false);
window.removeEventListener("unload",a,false);for(var S=0;
S<Clean.length;S++){Clean[S]()}Clean=null;if(B.clean){B.clean()
}};var u=function(){if(!TMwin.domContentLoaded){if(V||EV||D){console.log("env: Content not loaded, schedule loadListeners run!")
}return -1}var S=F.length;while(F.length>0){var T=function(){var U=F.shift();
try{window.setTimeout(U.fn,1)}catch(W){console.log("ERROR: Execution (loadListener) of script env "+U.name+" failed!"+W.message)
}};T()}return S};var i=function(T,S){T()};var y=function(T,S){if(!document.body){var U=function(){document.removeEventListener("load",U,false);
document.removeEventListener("DOMNodeInserted",U,false);
document.removeEventListener("DOMContentLoaded",U,false);
y(T,S)};document.addEventListener("load",U,false);document.addEventListener("DOMNodeInserted",U,false);
document.addEventListener("DOMContentLoaded",U,false)
}else{var W=function(){T()};window.setTimeout(W,1)}};
var A=function(W,T,U){var S=function(){W()};F.push({fn:S,name:U});
if(!TMwin.domNodeInserted&&!TMwin.domContentLoaded){if(V||EV||D){console.log("env: schedule for node Insert Event!")
}}else{u()}};function h(){var T=[window.HTMLDocument.prototype,window.__proto__];
var S=[];for(var W=0;W<T.length;W++){var U=function(){var X=T[W];
if(!X.__addEventListener){X.__addEventListener=X.addEventListener;
X.__removeEventListener=X.removeEventListener;X.removeEventListener=function(aa,Z,Y){if(aa==L){if(k&&k.running==Z){if(EV){console.log("env: detected removeEventListener while refireAllNodeInserts")
}k.running=null}}this.__removeEventListener(aa,Z,Y)
};X.addEventListener=function(Y,ag,ad){if(V||EV){console.log("env: addEventListener "+Y)
}var ah=true;if(Y==x||Y==q||Y==L){var Z=null;var ae=this;
try{Z=arguments.callee.getID?arguments.callee.getID():0
}catch(af){if(D){console.log("env: Error: event "+Y);
console.log(af)}}if(V||EV){console.log("env: sid done "+Y)
}var ai=null;if(Z){var ab=null;for(var ac in TMwin.props){if(!TMwin.props.hasOwnProperty(ac)){continue
}if(TMwin.props[ac].scriptid==Z.id){ai=ac;break}}if(Y==x){if(TMwin.loadHappened){ab=function(){m(ag,ae)
};ah=false;S.splice(1,0,ab)}}else{if(Y==q){if(TMwin.domContentLoaded){ab=function(){J(ag,ae)
};ah=false;S.push(ab)}}else{if(Y==L){if(k&&!k.done[Z]){k.done[Z]=true;
ab=function(){var aj=Z.run_at!="document-start"&&Z.run_at!="document-body";
k.running=ag;R(ag,ae,Z,aj);if(k.running){ae.__addEventListener(Y,ag,ad)
}k.running=null};S.push(ab)}}}}if(ab){var aa=function(){if(S.length){var aj=S[0];
S=S.slice(1);aj()}};window.setTimeout(aa,1);ah=false
}}}if(ah){this.__addEventListener(Y,ag,ad)}};Clean.push(function(){X.removeEventListener=X.__removeEventListener;
X.addEventListener=X.__addEventListener})}};U()}}var f=function(S){if(S===undefined){S=20
}if(S==0){return null}if(!this.__tmid&&this.caller&&this.caller.getID){var T=this.caller.getID(S-1);
return T}return this.__tmid};var N=function(S){this.__tmid=S;
return this};function p(){if(!Function.prototype.getID){Function.prototype.getID=f;
Function.prototype.setID=N}}function O(){var S="HTMLDocument";
if(!window[S].prototype.__evaluate){window[S].prototype.__evaluate=window[S].prototype.evaluate;
window[S].prototype.evaluate=function(ac,U,Z,Y,X){if(V){console.log("env: document.evaluate "+ac)
}if(!U){U=this}var ab;if(typeof XPathResult!="undefined"){var T=null;
var ad=ac;try{ab=this.__evaluate(ad,U,Z,Y,X)}catch(aa){if(V){console.log("env: Error: document.evaluate "+JSON.stringify(aa))
}}var W=true;try{W&=!ab.snapshotLength}catch(aa){}try{W&=!ab.singleNodeValue
}catch(aa){}if(W&&ac.charAt(0)!="."&&!H(U)){if(V){console.log("env: query added elem for "+ad)
}ad=(ac.charAt(0)=="/"?".":"./")+ac;ab=this.__evaluate(ad,U,Z,Y,X)
}else{if(V){console.log("env: queried document for "+ad)
}}if(V){console.log("env: query returned ");console.log(ab)
}}else{if(V){console.log("env: XPathResult == undefined, but selectNodes via "+xpathExpr)
}ab=U.selectNodes(xpathExpr)}return ab};Clean.push(function(){window[S].prototype.evaluate=window[S].prototype.__evaluate
})}}function r(){if(TMwin.use.safeContext){window.open=function(T){var W="__o__"+TM_context_id;
var U="window."+W+' = window.open(decodeURI("'+encodeURI(T)+'"));';
K(U);var S=unsafeWindow[W];delete unsafeWindow[W];return S
};Clean.push(function(){window.open=null})}}function e(){if(!TMwin.use.safeContext||window.__setTimeout){return
}window.__setTimeout=window.setTimeout;window.__setInterval=window.setInterval;
window.setTimeout=function(){var S=arguments;var T=S[0];
if(typeof T==="string"){S[0]=function(){K(T)}}return __setTimeout.apply(this,S)
};window.setInterval=function(){var S=arguments;var T=S[0];
if(typeof T==="string"){S[0]=function(){K(T)}}return __setInterval.apply(this,S)
};Clean.push(function(){window.setTimeout=window.__setTimeout;
window.setInterval=window.__setInterval})}var K=function(T){if(TMwin.use.safeContext){var S=document.createEvent("MutationEvent");
S.initMutationEvent("TM_do"+TM_context_id,false,false,null,null,null,encodeURI(T),S.ADDITION);
document.dispatchEvent(S);return S.returnValue}else{console.log("env: ERROR: assert(use.safeContext)")
}};var o=function(S,U){var X=TM_context_id+"#"+S;var T=function(){if(V){console.log("env: unRegisterMenuCMD due to unload "+U.toString())
}B.extension.sendMessage({method:"unRegisterMenuCmd",name:S,id:X},function(Y){})
};var W=function(Y){window.removeEventListener("unload",T,false);
if(Y.run){if(V){console.log("env: execMenuCmd "+U.toString())
}window.setTimeout(function(){U()},1);o(S,U)}};window.addEventListener("unload",T,false);
if(V){console.log("env: registerMenuCmd "+U.toString())
}B.extension.sendMessage({method:"registerMenuCmd",name:S,id:TM_context_id,menuId:X},W)
};var w=function(U,T){var S=null;var X=function(){if(S===null){window.setTimeout(X,500)
}else{if(S>0){B.extension.sendMessage({method:"closeTab",tabId:S,id:TM_context_id},W);
S=undefined}else{if(D){console.log("env: attempt to close already closed tab!")
}}}};var W=function(Y){S=Y.tabId};if(U&&U.search(/^\/\//)==0){U=location.protocol+U
}B.extension.sendMessage({method:"openInTab",url:U,id:TM_context_id,options:T},W);
return{close:X}};var c=function(S){var T=false;var Z=function(ae,ad){var af=function(){ae(ad)
};if(ae&&!T){window.setTimeout(af,1)}};var X=!!S.responseType;
if(X){var ac=function(ad){Z(S.onload,ad)};var Y=function(ad){Z(S.onreadystatechange,ad)
};var aa=function(ad){Z(S.onerror,ad)};B.xmlHttpRequest(S,ac,Y,aa)
}else{var U=B.extension.connect("xhr_"+TM_context_id);
U.postMessage({method:"xhr",details:S,id:TM_context_id});
var ab=function(ad){try{if(ad.success){if(S.onload){if(ad.data.responseXML){ad.data.responseXML=unescape(ad.data.responseXML)
}Z(S.onload,ad.data)}}else{if(ad.change){if(S.onreadystatechange){Z(S.onreadystatechange,ad.data)
}}else{if(S.onerror){Z(S.onerror,ad.data)}}}}catch(ae){console.log("env: Error: TM_xmlhttpRequest - "+ae.message+"\n"+JSON.stringify(S))
}};U.onMessage.addListener(ab);var W=function(ad){console.log("env: onDisconnect! :)")
};if(V){U.onDisconnect.addListener(W)}}return{abort:function(){T=true
}}};var E=function(S){B.extension.sendMessage({method:"getTab",id:TM_context_id},function(T){if(S){S(T.data)
}})};var G=function(S){B.extension.sendMessage({method:"saveTab",id:TM_context_id,tab:S},function(T){})
};var s=function(S){B.extension.sendMessage({method:"getTabs",id:TM_context_id},function(T){if(S){S(T.data)
}})};var Q=function(T,S){B.extension.sendMessage({method:"scriptClick",url:T,id:TM_context_id},function(U){if(S){S(U)
}})};var j=function(){var S="";S+=((new Date()).getTime().toString());
S+=Math.floor(Math.random()*6121983+1);return S};var n=function(aa){var au=[];
var al=aa.storage;var W=aa.script.name;var X=aa.script;
var ab=function(aC){};var Y=null;var aA=function(){var aE={observers:1,id:1,enabled:1,hash:1,fileURL:1};
var aD={script:{}};for(var aC in X){if(!X.hasOwnProperty(aC)||aE[aC]){continue
}aD.script[aC]=X[aC]}aD.script["run-at"]=X.options.override.run_at||X.options.run_at;
aD.script.excludes=X.options.override.orig_excludes;
aD.script.includes=X.options.override.orig_includes;
aD.script.matches=X.options.override.orig_includes;
aD.script.unwrap=false;aD.scriptMetaStr=aa.header;aD.scriptSource=aa.code;
aD.scriptWillUpdate=!!(X.options.fileURL&&X.options.fileURL!="");
aD.scriptUpdateURL=X.options.fileURL;aD.version=aa.version;
aD.scriptHandler="Tampermonkey";return aD};var aB=function(){var aD=function(aF){if(aF.storage){for(var aE in aF.storage.data){if(!aF.storage.data.hasOwnProperty(aE)){continue
}var aG=function(){var aH=aE;var aI=al.data[aE];al.data[aE]=aF.storage.data[aE];
var aJ=al.data[aE];if(V){console.log("env: storageListener - config key "+aH+": "+aI+" -> "+aJ)
}ae(aH,aI,aJ,true)};aG()}}if(aF.removed){al[aF.removed]=ac
}if(aF.error){console.log("env: Error: storage listener... :(")
}};Y=B.extension.connect("storageListener_"+TM_context_id);
Y.onMessage.addListener(aD);var aC=function(aE){console.log("env: storageListener onDisconnect! :)")
};if(V){Y.onDisconnect.addListener(aC)}Y.postMessage({method:"addStorageListener",name:W,id:TM_context_id})
};aB();var ap=function(){Y.postMessage({method:"removeStorageListener",name:W,storage:al,id:TM_context_id})
};var ao=function(aC){Y.postMessage({method:"saveStorageKey",name:W,key:aC,value:al.data[aC],id:TM_context_id,ts:al.ts});
if(V){console.log("env: saveStorageKey - config key "+aC+": "+al.data[aC])
}};var aw=function(aC){ao(aC)};var ae=function(aE,aC,aD,aG){if(aC==aD){return
}for(var aF in au){if(!au.hasOwnProperty(aF)){continue
}var aI=au[aF];if(aI&&aI.key==aE){if(aI.cb){try{aI.cb(aE,aC,aD,aG)
}catch(aH){if(D){console.log("env: value change listener of '"+aE+"' failed with: "+aH.message)
}}}}}};var ag=function(aD,aC){var aH=0;for(var aG in au){if(!au.hasOwnProperty(aG)){continue
}var aE=au[aG];if(aG.id>aH){aH=aG.id}}aH++;var aF={id:aH,key:aD,cb:aC};
au.push(aF);return aH};var T=function(aE){for(var aD in au){if(!au.hasOwnProperty(aD)){continue
}var aC=au[aD];if(aD.id==aE){delete au[aD];return true
}}};var am=function(aD){var aC=al.data[aD];al.ts=(new Date()).getTime();
delete al.data[aD];aw(aD);ae(aD,aC,al.data[aD],false)
};var ah=function(){var aC=new Array();for(var aD in al.data){if(!al.data.hasOwnProperty(aD)){continue
}aC.push(aD)}return aC};var at=function(aD,aC){var aF=al.data[aD];
if(!aF){return aC}var aE=aF[0];aF=aF.substring(1);switch(aE){case"b":return aF=="true";
case"n":return Number(aF);case"o":try{return JSON.parse(aF)
}catch(aG){console.log("env: TM_getValue: "+aG);return aC
}default:return aF}};var ar=function(aD,aF){var aC=al.data[aD];
var aE=(typeof aF)[0];switch(aE){case"o":try{aF=aE+JSON.stringify(aF)
}catch(aG){console.log(aG);return}break;default:aF=aE+aF
}al.ts=(new Date()).getTime();al.data[aD]=aF;aw(aD);
ae(aD,aC,al.data[aD],false)};var U=function(aD){for(var aC in X.resources){var aE=X.resources[aC];
if(aE.name==aD){return aE.resText}}return null};var ak=function(aD){for(var aC in X.resources){var aE=X.resources[aC];
if(aE.name==aD){return aE.resURL}}return null};var Z=function(aC){if(window.console){window.console.log(aC)
}else{console.log(aC)}};var ad=function(aC){try{var aD=document.createElement("style");
aD.textContent=aC;(document.head||document.body||document.documentElement||document).appendChild(aD)
}catch(aE){console.log("Error: env: adding style "+aE)
}};var aj=function(aH,aG,aF,aC,aE){if(!aG){aG=W}if(aF==ac){aF=aa.script.icon?aa.script.icon:aa.script.icon64
}var aD=function(aI){if(aI.clicked&&aC){aC()}};B.extension.sendMessage({method:"notification",delay:aE,msg:aH,image:aF,title:aG,id:TM_context_id},aD)
};var S=function(aF,aE,aC){if(!aE){aE="text"}var aD=function(aG){if(aC){aC()
}};B.extension.sendMessage({method:"copyToClipboard",data:{content:aF,type:aE},id:TM_context_id},aD)
};var ay=function(aD,aC){return ax(aD,aC)};var ax=function(aD,aC){var aF="__u__"+Math.floor(Math.random()*6121983+1);
unsafeWindow[aF]=aD;unsafeWindow[aF+"_"]=aC;var aE=K('window["'+aF+'"].apply(this, window["'+aF+'_"])');
delete unsafeWindow[aF];return aE};var af=function(){this.GM_addStyle=function(aC){return ad(aC)
};this.GM_deleteValue=function(aC){return am(aC)};this.GM_listValues=function(){return ah()
};this.GM_getValue=function(aD,aC){return at(aD,aC)
};this.GM_addValueChangeListener=function(aD,aC){return ag(aD,aC)
};this.GM_removeValueChangeListener=function(aC){return T(aC)
};this.GM_log=function(aC){return Z(aC)};this.GM_registerMenuCommand=function(aC,aD){return o(aC,aD)
};this.GM_openInTab=function(aD,aC){return w(aD,aC)
};this.GM_setValue=function(aC,aD){return ar(aC,aD)
};this.GM_xmlhttpRequest=function(aC){return c(aC)};
this.GM_getResourceText=function(aC){return U(aC)};
this.GM_getResourceURL=function(aC){return ak(aC)};
this.GM_notification=function(aF,aE,aD,aG,aC){return aj(aF,aE,aD,aG,aC)
};this.GM_installScript=function(aC,aD){return Q(aC,aD)
};this.GM_getTab=function(aC){return E(aC)};this.GM_saveTab=function(aC){return G(aC)
};this.GM_getTabs=function(aC){return s(aC)};this.GM_setClipboard=function(aD,aC,aE){return S(aD,aC,aE)
};this.GM_info=aA()};var ac=TMwin.undefined;if(TMwin.props[X.namespace]==ac){TMwin.props[X.namespace]={scriptid:aa.script.id,context:function(){},elements:[]};
Clean.push(function(){TMwin.props[X.namespace]=null
})}if(!TMwin.use.safeContext){var aq={window:window};
for(var av in aq){if(!aq.hasOwnProperty(av)){continue
}var an=function(){var aC=av.replace(/^(.)/g,function(aD){return aD.toUpperCase()
});TMwin.props[X.namespace].elements.push({name:"unsafe"+aC,value:aq[av]})
};an()}}TMwin.props[X.namespace].elements.push({name:"CDATA",value:function(aC){this.src=aC;
this.toString=function(){return this.src};this.toXMLString=this.toString
}});TMwin.props[X.namespace].elements.push({name:"uneval",value:function(aC){try{return"$1 = "+JSON.stringify(aC)+";"
}catch(aD){console.log(aD)}}});TMwin.props[X.namespace].elements.push({name:"console",value:console,type:C});
TMwin.props[X.namespace].elements.push({name:"JSON",value:JSON,type:C});
TMwin.props[X.namespace].elements.push({name:"document",value:window.document,type:C});
TMwin.props[X.namespace].elements.push({name:"location",value:window.location,type:C});
TMwin.props[X.namespace].elements.push({name:"undefined",value:ac,type:C});
TMwin.props[X.namespace].elements.push({name:"top",value:"window.unsafeTop",overwrite:true});
TMwin.props[X.namespace].elements.push({name:"TM_addStyle",value:ad});
TMwin.props[X.namespace].elements.push({name:"TM_deleteValue",value:am});
TMwin.props[X.namespace].elements.push({name:"TM_listValues",value:ah});
TMwin.props[X.namespace].elements.push({name:"TM_getValue",value:at});
TMwin.props[X.namespace].elements.push({name:"TM_log",value:Z});
TMwin.props[X.namespace].elements.push({name:"TM_registerMenuCommand",value:o});
TMwin.props[X.namespace].elements.push({name:"TM_openInTab",value:w});
TMwin.props[X.namespace].elements.push({name:"TM_setValue",value:ar});
TMwin.props[X.namespace].elements.push({name:"TM_addValueChangeListener",value:ag});
TMwin.props[X.namespace].elements.push({name:"TM_removeValueChangeListener",value:T});
TMwin.props[X.namespace].elements.push({name:"TM_xmlhttpRequest",value:c});
TMwin.props[X.namespace].elements.push({name:"TM_setClipboard",value:S});
TMwin.props[X.namespace].elements.push({name:"TM_getTab",value:E});
TMwin.props[X.namespace].elements.push({name:"TM_saveTab",value:G});
TMwin.props[X.namespace].elements.push({name:"TM_getTabs",value:s});
TMwin.props[X.namespace].elements.push({name:"TM_installScript",value:Q});
TMwin.props[X.namespace].elements.push({name:"TM_runNative",value:ay});
TMwin.props[X.namespace].elements.push({name:"TM_execUnsafe",value:ax});
TMwin.props[X.namespace].elements.push({name:"TM_notification",value:aj});
TMwin.props[X.namespace].elements.push({name:"TM_getResourceText",value:U,scriptid:X.id});
TMwin.props[X.namespace].elements.push({name:"TM_getResourceURL",value:ak,scriptid:X.id});
var az=new af();for(var av in az){TMwin.props[X.namespace].elements.push({name:av,value:az[av]})
}if(X.options.compat_prototypes){if(V||D){console.log("env: option: add toSource")
}if(!Object.prototype.toSource){Object.defineProperties(Object.prototype,{toSource:{value:function(){return"JSON.parse(unescape('"+escape(JSON.stringify(this))+"'));"
},enumerable:false,writable:true,configurable:true,},})
}if(V||D){console.log("env: option: add some array generics")
}var ai=["indexOf","lastIndexOf","filter","forEach","every","map","some","slice"];
ai.forEach(function(aD){if(typeof Array[aD]!=="function"){var aC={};
aC[aD]={value:function(aE){return Array.prototype[aD].apply(aE,Array.prototype.slice.call(arguments,1))
},enumerable:false,writable:true,configurable:true,};
Object.defineProperties(Array,aC)}})}if(V||D){console.log("env: execute script "+X.name+" now!")
}M(X,aa.code,aa.requires,TMwin.props[X.namespace]);
Clean.push(function(){ap();try{Y.disconnect();Y=null
}catch(aC){}au=null;aa=null});return X.options.used_events
};B.extension.onMessage.addListener(function(W,Y,U){if(V||EV){console.log("env: request.method "+W.method+" id: "+W.id)
}if(W.id&&W.id!=TM_context_id){console.log("env: Not for me! "+TM_context_id+"!="+W.id);
return}var aa=window.self==window.top;if(W.method=="executeScript"){var S=function(){n(W);
U({})};if(W.script.options.run_at=="document-start"){if(D){console.log("env: run '"+W.script.name+"' ASAP -> document-start")
}i(S,W.script.id)}else{if(W.script.options.run_at=="document-body"){if(D){console.log("env: schedule '"+W.script.name+"' for document-body")
}y(S,W.script.id)}else{if(D){console.log("env: schedule '"+W.script.name+"' for document-end")
}A(S,W.script.id,W.script.name)}}}else{if(W.method=="onLoad"){TMwin.domContentLoaded=true;
u();U({});window.setTimeout(function(){if(V||EV){console.log("env: disable nodeInserts magic!")
}k=null},2000)}else{if(aa){if(W.method=="loadUrl"){window.location=W.url;
U({})}else{if(W.method=="reload"){window.location.reload();
U({})}else{if(W.method=="confirm"){var X=function(){var ac=confirm(W.msg);
U({confirm:ac})};window.setTimeout(X,100)}else{if(W.method=="showMsg"){var X=function(){var ac=function(){alert(W.msg)
};window.setTimeout(ac,1);U({})};window.setTimeout(X,100)
}else{if(W.method=="getSrc"){var ab="";var T=document.getElementsByTagName("body");
if(T.length>0){var Z=T[0];ab=Z.innerText}else{ab=document.innerHTML
}U({src:ab})}else{console.log("env: unknown method "+W.method)
}}}}}}}}});O();p.apply(window,[]);h();r();e();document.addEventListener(L,P,false);
document.addEventListener(q,l,false);document.addEventListener(x,I,false);
window.addEventListener("unload",a,false);if(V||D){console.log("env: initialized (content, id:"+TM_context_id+", "+window.location.origin+window.location.pathname+") ")
}});
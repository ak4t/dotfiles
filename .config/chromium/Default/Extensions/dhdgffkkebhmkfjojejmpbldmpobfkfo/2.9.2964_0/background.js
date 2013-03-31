
var trup=null;var rase=null;var rsse=null;var init=null;
var fire=null;var exte=null;var lfgs=null;var sycl=null;
var cfgo=null;var D=false;var V=false;var T=false;var EV=true;
var MV=false;var UV=false;var SV=false;var CV=false;
var NV=false;var RV=false;Registry.require("convert");
Registry.require("xmlhttprequest");Registry.require("compat");
Registry.require("parser");Registry.require("helper");
Registry.require("syncinfo");Registry.require("i18n");
(function(){var R=function(a8){D|=(a8>=60);V|=(a8>=80);
RV|=(a8>=80);EV|=(a8>=100);MV|=(a8>=100);UV|=(a8>=100);
SV|=(a8>=100);CV|=(a8>=100);NV|=(a8>=100)};const l=-2;
const n=-1;const I=0;const aj=1;const s="uso:hash";
const g="uso:timestamp";const az="uso:script";var A=true;
var av=5;var y=1;var a4={use:true,headers:true,verified:false,verifyCnt:20,id:0,prefix:"TM_",testprefix:"foobar"};
var M=(new Date()).getTime()+Math.floor(Math.random()*61283+1);
var aF={};var ae=[];var a5={};var aT=null;var H=false;
var U="@re";var aA="@st";var aL="@source";var aM="@header";
var ao={};if(D||V){console.log("Starting background fred @"+M)
}var Z=function(bd,bc){if(V){console.log("versionCmp: "+bd+" : "+bc)
}var ba=bd.split(".");var a9=bc.split(".");var a8=ba.length<a9.length?ba.length:a9.length;
for(var bb=0;bb<a8;bb++){if(ba.length<a8){ba[bb]=0}if(a9.length<a8){a9[bb]=0
}if(Number(ba[bb])>Number(a9[bb])){return aj}else{if(Number(ba[bb])<Number(a9[bb])){return n
}}}return I};chrome.extension.getVersion=function(){if(!chrome.extension.version_){var a8=chrome.extension.getURL("manifest.json");
try{var a9;if(a8&&a8.search("{")!=-1){a9=JSON.parse(a8)
}else{var bb=new XMLHttpRequest();bb.open("GET",a8,false);
bb.send(null);a9=JSON.parse(bb.responseText)}chrome.extension.version_=a9.version;
chrome.extension.updateurl_=a9.update_url}catch(ba){console.log("getVersion"+ba);
chrome.extension.version_="0.0.0.0";chrome.extension.updateurl_=null
}}return chrome.extension.version_};chrome.extension.getID=function(){var a9=chrome.extension.getURL("/");
var a8=a9.replace(/\//gi,"").split(":");return(a8.length<2)?"":a8[1]
};chrome.extension.id=chrome.extension.getID();var aN=function(a8){var bh=function(){var bk="0.0.0.0";
var bj=bk;if(A){var bj=F.getValue("TM_version",bk);
if(bk==bj){A=false;bj=F.getValue("TM_version",bk);A=true
}}return bj};var bi=chrome.extension.getVersion();var bf=bh();
var bg=function(bq,bj){var bp=new G.Script();var bo=aa();
var bm=1;var bk=function(){if(--bm==0&&bj){window.setTimeout(bj,1)
}};for(var bl in bo){var bn=function(){var bv=bo[bl];
var br=J(bv);if(!br.script||!br.cond){console.log(aX.getMessage("fatal_error")+" ("+bv+")!!!");
return}for(var bs in bp.options){if(!bp.options.hasOwnProperty(bs)){continue
}if(br.script.options[bs]===undefined){console.log("set option "+bs+" to "+JSON.stringify(bp.options[bs]));
br.script.options[bs]=bp.options[bs]}}for(var bu in bp.options.override){if(br.script.options.override[bu]===undefined){console.log("set option.override."+bu+" to "+JSON.stringify(bp.options.override[bu]));
br.script.options.override[bu]=bp.options.override[bu]
}}var bt=function(){br.script=b(br.script);if(bq){var bw={url:br.script.fileURL,src:br.script.textContent,ask:false,cb:function(){},hash:br.script.hash};
ad(bw)}else{br.script.id=G.getScriptId(br.script.name);
r(br.script.name,br.script,false)}bk()};if(bj){bm++;
window.setTimeout(bt,10)}else{bt()}};bn()}bk()};var bd=function(){bg(true)
};var bb=Z(bi,bf)==aj;var ba=[];var a9=0;var be=false;
var bc=function(){if(a9<ba.length){var bj=function(){window.setTimeout(bc,y)
};if(ba[a9].cond){ba[a9].fn(bj)}else{bj()}a9++}};ba=[{cond:bb&&Z("1.0.0.4",bf)==aj,fn:function(bj){console.log("Update config from "+bf+" to 1.0.0.4");
aq(null,null);window.setTimeout(bj,y)}},{cond:bb&&A&&Z("1.2",bf)==aj,fn:function(bj){console.log("Update config from "+bf+" to 1.2");
var bn=[];for(var bl=0;bl<localStorage.length;bl++){var bk=localStorage.key(bl);
A=false;var bm=F.getValue(bk,null);A=true;if(bm){if(V){console.log("Copy from localStorage: "+bk+" -> "+bm)
}F.setValue(bk,bm)}bn.push(bk)}for(var bl=0;bl<bn.length;
bl++){localStorage.removeItem(bn[bl])}window.setTimeout(bj,y)
}},{cond:bb&&Z("2.0.2316",bf)==aj,fn:function(bj){console.log("Update config from "+bf+" to 2.0.2316");
bg(false);window.setTimeout(bj,y)}},{cond:bb&&Z("2.3",bf)==aj,fn:function(bj){console.log("Update config from "+bf+" to 2.3");
bd();window.setTimeout(bj,y)}},{cond:bb&&Z("2.3.2597",bf)==aj,fn:function(bj){console.log("Update config from "+bf+" to 2.3.2597");
var bk=a6();bk.fire.last=0;bk.fire.db_version=0;bk.fire.entries=0;
k(bk);window.setTimeout(bj,y)}},{cond:bb&&Z("2.3.2660",bf)==aj,fn:function(bj){console.log("Update config from "+bf+" to 2.3.2660");
u("TamperScript");window.setTimeout(bj,y)}},{cond:bb&&Z("2.5.61",bf)==aj,fn:function(bj){console.log("Update config from "+bf+" to 2.5.61");
var bm=aa();for(var bk in bm){var bo=bm[bk];var bl=J(bo);
if(!bl.script||!bl.cond){console.log(aX.getMessage("fatal_error")+" ("+bo+")!!!");
continue}bl.script.options.do_sync=bl.script.options.sync;
delete bl.script.options.sync;bl.script.id=G.getScriptId(bl.script.name);
r(bl.script.name,bl.script,false)}var bn=F.getValue("TM_config",null);
if(bn){for(var bl in bn){if(!bn.hasOwnProperty(bl)){continue
}if(bl=="fire_updateURL"){bn[bl]="http://fire.tampermonkey.net/update.php"
}else{if(bl=="sync_URL"){bn[bl]=""}}}F.setValue("TM_config",bn)
}window.setTimeout(bj,y)}},{cond:bb&&Z("2.6.83",bf)==aj,fn:function(bj){console.log("Update config from "+bf+" to 2.6.83");
bg(false,bj)}},{cond:bb&&Z("2.9.2943",bf)==aj,fn:function(bj){console.log("Update config from "+bf+" to 2.9.2943");
var bm=aa();for(var bk in bm){var bn=bm[bk];var bl=J(bn);
if(!bl.script||!bl.cond){console.log(aX.getMessage("fatal_error")+" ("+bn+")!!!");
continue}bl.script.options.compatopts_for_requires=bl.script.options.compat_for_requires;
r(bl.script.name,bl.script,false)}window.setTimeout(bj,y)
}},{cond:bb,fn:function(bj){console.log("First run of version "+bi+"!");
aT=bi;F.setValue("TM_version",bi);window.setTimeout(bj,y)
}},{cond:true,fn:function(bj){if(a8){a8()}window.setTimeout(bj,y)
}}];bc();rase=bg;rsse=bd};var N=30*60*1000;var z=3*60*1000;
var K=function(a8,a9,ba){if(V||CV){console.log("cache: add '"+a8+"'")
}ao[a8]={ts:(new Date()).getTime(),content:a9,headers:ba}
};var ax=function(a9){var a8=ao[a9];if(a8){ao[a9].ts=(new Date()).getTime()
}if(V||CV){console.log("cache: "+(a8?"found":"missed")+" '"+a9+"'")
}return a8};var O=function(){if(V||CV){console.log("cache: check")
}var ba=(new Date()).getTime()-N;var bb=[];for(var a8 in ao){if(!ao.hasOwnProperty(a8)){continue
}var a9=ao[a8];if(a9&&a9.ts){if(a9.ts<ba){bb.push(a8)
}}}for(var a8 in bb){if(!bb.hasOwnProperty(a8)){continue
}delete ao[bb[a8]];if(V||CV){console.log("cache: remove '"+bb[a8]+"'")
}}window.setTimeout(O,z)};O();var Y={n:{},has:function(a8){return(!!Y.n[a8])
},reset:function(a8){if(V||UV){console.log("ctxReg: reset ctxRegistry["+a8+"]")
}Y.init(a8)},assert:function(a8,a9){if(a9===undefined){a9=true
}if(!Y.has(a8)){if(a9){console.log("ctxReg: assert ctxRegistry["+a8+"]")
}Y.init(a8)}},init:function(a8){Y.n[a8]={ts:(new Date()).getTime(),urls:{},fire_cnt:null,empty:true,user_agent:null,blocker:false,stats:{running:0,disabled:0,executed:{}}}
},remove:function(a8){if(Y.has(a8)){delete Y.n[a8]}},addUrl:function(ba,bc,a9,bb){if(V||UV||EV){console.log("ctxReg: add to ctxRegistry["+ba+"] -> "+a9+" ua: "+JSON.stringify(bb))
}Y.assert(ba,false);if(Y.n[ba].urls[a9]==undefined){Y.n[ba].urls[a9]=0
}Y.n[ba].urls[a9]++;Y.n[ba].empty=false;for(var a8 in bb){if(!bb.hasOwnProperty(a8)){continue
}if(!Y.n[ba].user_agent){Y.n[ba].user_agent={}}Y.n[ba].user_agent[a9]=bb[a8]
}},setCache:function(ba,bb,a9,a8){if(V||UV||EV){console.log("ctxReg: setCache to ctxRegistry["+ba+"] -> "+a9)
}Y.assert(ba,false);Y.n[ba].cache=a8},clearCache:function(a8,a9){if(V||UV||EV){console.log("ctxReg: clearCache to ctxRegistry["+a8+"]")
}if(Y.has(a8)){delete Y.n[a8].cache}},removeUrl:function(ba,bb,a9){if(!Y.has(ba)){return
}if(--Y.n[ba].urls[a9]==0){if(V||UV||EV){console.log("ctxReg: remove from ctxRegistry["+ba+"] -> "+a9)
}delete Y.n[ba].urls[a9];if(Y.n[ba].user_agent){delete Y.n[ba].user_agent[a9]
}Y.n[ba].empty=true;for(var a8 in Y.n[ba].urls){if(!Y.n[ba].urls.hasOwnProperty(a8)){continue
}Y.n[ba].empty=false;break}}},isEmpty:function(a8){if(!Y.has(a8)){return true
}return Y.n[a8].empty},setFireCnt:function(a8,a9){Y.assert(a8,false);
Y.n[a8].fire_cnt=a9},getFireCnt:function(a8){if(!Y.has(a8)){return null
}return Y.n[a8].fire_cnt},getInfo:function(a8){return Y.n[a8]
},getRunning:function(a8){if(!Y.has(a8)){return null
}return Y.n[a8].stats.running},iterateTabs:function(a9){for(var a8 in Y.n){if(!Y.n.hasOwnProperty(a8)){continue
}if(a9(a8,Y.n[a8])){break}}},iterateUrls:function(a8,a9){return Y.iterate(a8,"urls",a9)
},iterate:function(a9,ba,bb){if(!Y.has(a9)){return null
}for(var a8 in Y.n[a9][ba]){if(!Y.n[a9][ba].hasOwnProperty(a8)){continue
}if(bb(a8,Y.n[a9][ba][a8])){break}}return true}};var p={getScriptRunInfo:function(a8,bd){var bb=a7(a8);
var bf=[];var bc=0;var a9={};var bg={};for(var ba=0;
ba<bb.length;ba++){var be=bb[ba];if(V){console.log("check "+be.name+" for enabled:"+be.enabled)
}if(!be.enabled){bc++;continue}if(be.options.noframes&&bd!=0){continue
}if(be.options.user_agent&&be.options.user_agent!=""){bg[bd]=be.options.user_agent
}a9[be.name]=true;bf.push(be)}return{runners:bf,disabled:bc,script_map:a9,user_agent:bg}
},prepare:function(ba,a8){var a9=p.getScriptRunInfo(ba.url,ba.frameId);
Y.addUrl(ba.tabId,ba.frameId,ba.url,a9.user_agent);
if(a8){a8(a9.runners.length,a9.disabled)}return a9},runScripts:function(be,bf,bb){var a8=function(){if(--bd==0&&bb){bb()
}};var bd=1;var a9=false;if(!bf&&Y.has(be.tabId)){bf=Y.n[be.tabId].cache;
a9=true}if(bf){for(var bc=0;bc<bf.runners.length;bc++){var bg=bf.runners[bc];
if(!bg.options.user_agent){var ba=new ay();bd++;ba.contentLoad(be,bg,a8)
}}if(a9){Y.clearCache(be.tabId,be.frameId)}}else{console.log("bg: ERROR: runInfo neither given nor found in cache!!!!")
}a8()},reset:function(a8,a9){Y.reset(a8);q.clearByTabId(a8);
o(null,null,a8,false);if(a9){}else{aD(a8)}}};var aI={isScriptUrl:function(a9){if(!a9){return false
}var a8=a9.split(/[\?#$]/)[0];var ba=a8.search(/\.user\.(js\#|js\?|js$)/)!=-1||a8.search(/\.tamper\.(js\#|js\?|js$)/)!=-1;
if(!ba){return ba}var bb=(a8.search(/^htt[ps]{1,2}:\/\/code\.google\.com/)!=-1)||(a8.search(/^htt[ps]{1,2}:\/\/github\.com/)!=-1&&a8.search(/^htt[ps]{1,2}:\/\/github\.com\/[a-zA-Z0-9%-]\/[a-zA-Z0-9%-]\/raw\//)==-1);
return !bb}};var a={id:0,useXmlHttpReq:true,useIframeMessage:false,callbacks:{},listener:function(a8,bc){bc=a8?a8.data:bc;
try{var a9=JSON.parse(bc);var bb=a.callbacks[a9.id];
if(bb){if(V){console.log("localFile: retrieval of '"+bb.url+"' took "+((new Date()).getTime()-bb.ts)+"ms")
}if(bb.cb){bb.cb(a9.content)}if(bb.iframe){bb.iframe.parentNode.removeChild(bb.iframe)
}delete a.callbacks[a9.id]}else{console.log("localFile: WARN: getSource callback "+a9.id+" not found!")
}}catch(ba){console.log("localFile: ERR: getSource processing of "+bc+" failed!")
}},initialize:function(){if(a.useIframeMessage){window.addEventListener("message",a.listener,false);
window.addEventListener("unload",a.clean,false)}},clean:function(){if(a.useIframeMessage){window.removeEventListener("message",a.listener,false);
window.removeEventListener("unload",a.clean,false)}a.callbacks={}
},getSource:function(a9,a8){if(a.useXmlHttpReq){return a.getSourceXmlHttp(a9,a8)
}else{return a.getSourceIframe(a9,a8)}},getSourceXmlHttp:function(a9,a8){var bb=(new Date()).getTime();
a9+=(a9.search("\\?")!=-1)?"&":"?";a9+="ts="+bb;var bc=function(bd){a8(bd.responseText)
};var ba={method:"GET",retries:0,url:a9,};t(ba,bc,null,null,null,true)
},getSourceIframe:function(a9,a8){if(a.id==0){a.initialize()
}var ba=document.createElement("iframe");ba.src=a9+"?gimmeSource=1";
document.getElementsByTagName("body")[0].appendChild(ba);
var bc=JSON.stringify({id:a.id});a.callbacks[a.id]={cb:a8,ts:(new Date()).getTime(),iframe:ba,url:a9};
var bb=function(){var be=a.id;var bd=function(){if(be==null){return
}if(a.callbacks[be]){a.listener(null,JSON.stringify({id:be,content:null}))
}be=null};var bf=function(){if(be==null){return}try{ba.contentWindow.postMessage(bc,ba.src);
be=null}catch(bg){if(D){console.log("localFile: ERROR:"+bg.message)
}}};ba.onload=bf;window.setTimeout(bd,3000)};bb();a.id++
}};lfgs=a;var a6=function(){var ba={db_version:0,last:0,entries:0};
var a9={scripts:0,fire:ba};var a8=F.getValue("TM_update_check",a9);
if(!a8){a8=a9}if(a8.fire==undefined){a8.fire=ba}if(a8.scripts==undefined){a8.scripts=0
}return a8};var k=function(a8){if(a8){F.setValue("TM_update_check",a8)
}};var ag=function(a8){return a8};var am={fireDB:null,status:{initialized:false,action:"Initializing"},resetStatus:function(a8){if(a8==undefined){a8=true
}am.status={initialized:a8,update:false,download:false,action:"",error:"",progress:{n:0,of:0}}
},isReady:function(){return am.status.initialized&&!am.status.update&&!am.status.download
},checkUpdate:function(bb,bf,bj,bd){var a9=bb||bf;if(!a9&&(aK.values.fire_updatePeriod==0||!aK.values.fire_enabled)){return
}var bg=a6();var be=function(){if(bd){bd(am.status.error=="")
}};if(am.status.update||am.status.download){if(bj){bj(true)
}var bi=function(){if(am.isReady()){be()}else{window.setTimeout(bi,1000)
}};if(bd){bi()}return}if(a9||((new Date()).getTime()-bg.fire.last)>aK.values.fire_updatePeriod){var bh=0;
var ba=function(){var bk=function(bl){if(am.status.error==""){bg.fire.last=(new Date()).getTime();
bg.fire.db_version=bh;bg.fire.entries=bl;k(bg)}be()
};am.update(bk)};var bc=function(bk){if(bk.readyState==4){if(bk.status=200){try{var bn=JSON.parse(bk.responseText);
bh=bn.db_version}catch(bm){console.log("bg: fire: unable to parse DB version response! "+bk.responseText)
}console.log("bg: fire: local DB version: "+bg.fire.db_version+" remote: "+bh);
var bl=bh>bg.fire.db_version||bf;if(bj){bj(bl)}if(bl){ba();
return}}be()}};var a8={method:"GET",url:am.updateURL()+"&db_version=get",retries:av,overrideMimeType:"text/plain; charset=x-user-defined"};
at(a8,bc)}else{be()}},updateURL:function(){return aK.values.fire_updateURL+"?ts=0"
},update:function(bb){var ba=null;var bh=1;var bg=null;
var be=function(){if(ba){window.clearTimeout(ba)}ba=null
};var bd=function(){be();ba=window.setTimeout(bg,2*60*1000)
};var a9={method:"GET",url:am.updateURL(),retries:av,overrideMimeType:"text/plain; charset=x-user-defined"};
var bf=function(bi){be();am.resetStatus();am.status.error=bi;
if(bb){bb()}aS.show("TamperFire",aX.getMessage("TamperFire_update_failed___"),chrome.extension.getURL("images/icon128.png"))
};var a8=function(bi){bd();if(bi.progress){am.status.progress={n:bi.progress.total,of:bi.progress.totalSize*6}
}};var bc=function(bm){bd();if(bm.readyState==4){if(bm.status=200){be();
am.resetStatus();am.status.update=true;am.status.action=aX.getMessage("Update_in_progress");
var bp={};var bq=bm.responseText;try{bp=JSON.parse(bq)
}catch(bl){var bk="<body>";var bj="</body>";if(bq.search(bk)!=-1){var bo=bq.indexOf(bk);
var bn=bq.lastIndexOf(bj);if(bo!=-1&&bn!=-1){bq=bq.substr(bo+bk.length,bn-(bo+bk.length))
}}try{bp=JSON.parse(bq)}catch(bl){bf("Parse Error! Update URL: "+am.updateURL());
return}}bq=null;if(!bp.scripts){bf("Invalid Content! Update URL: "+am.updateURL());
return}var br=function(){am.status.update=true;var bs=function(bt){am.resetStatus();
if(bb){bb(bt)}};am.insertValuesFromJSON(bp,bs)};var bi=function(){am.initTables(br)
};am.clean(bi)}else{bf("Update URL: "+bm.status);return
}}else{console.log(bm)}};bg=function(){if(bh>0){am.status.action=aX.getMessage("Downloading");
am.status.download=true;bd();at(a9,bc,a8);bh--}else{bf("Download failed!")
}};aS.show("TamperFire",aX.getMessage("TamperFire_update_started"),chrome.extension.getURL("images/icon128.png"));
bg()},init:function(a8){var a9=function(ba){var bb=ba!==false;
if(a8){a8(bb)}if(bb){window.setTimeout(am.checkUpdate,20000)
}};am.resetStatus(false);am.initTables(a9)},clean:function(a9){var bb=function(){if(a9){a9()
}};var be=function(){am.fireDB.db.transaction(function(bf){bf.executeSql("DROP TABLE scripts",[],bb,bb)
})};var a8=function(){am.fireDB.db.transaction(function(bf){bf.executeSql("DROP TABLE excludes",[],be,be)
})};var ba=function(){am.fireDB.db.transaction(function(bf){bf.executeSql("DROP TABLE includes",[],a8,a8)
})};var bc=function(){am.fireDB.db.transaction(function(bf){bf.executeSql("DROP TABLE scriptexcludes",[],ba,ba)
})};var bd=function(){am.fireDB.db.transaction(function(bf){bf.executeSql("DROP TABLE scriptincludes",[],bc,bc)
})};bd()},initTables:function(a8){var a9=function(){am.status.initialized=true;
if(a8){a8()}};am.fireDB={db:openDatabase("tmFire","1.0","TamperFire",40*1024*1024),onSuccess:function(bg,bf){if(V){console.log("fireDB Success ")
}},onError:function(bf,bg){console.log("fireDB Error "+JSON.stringify(bg))
},createScriptTable:function(bg){var bf=function(bh,bi){am.fireDB.onError(bh,bi);
if(a8){a8(false)}};am.fireDB.db.transaction(function(bh){bh.executeSql("CREATE TABLE IF NOT EXISTS scripts(sid INTEGER PRIMARY KEY ASC, value TEXT)",[],bg,bf)
})},createScriptIncludesTable:function(bg){var bf=function(bh,bi){am.fireDB.onError(bh,bi);
if(a8){a8(false)}};am.fireDB.db.transaction(function(bh){bh.executeSql("CREATE TABLE IF NOT EXISTS scriptincludes(iid INTEGER, sid INTEGER, FOREIGN KEY(sid) REFERENCES scripts(sid),FOREIGN KEY(iid) REFERENCES includes(iid))",[],bg,bf)
})},createIncludesTable:function(bg){var bf=function(bh,bi){am.fireDB.onError(bh,bi);
if(a8){a8(false)}};am.fireDB.db.transaction(function(bh){bh.executeSql("CREATE TABLE IF NOT EXISTS includes(iid INTEGER PRIMARY KEY ASC, generic BOOLEAN, regex TEXT)",[],bg,bf)
})},createScriptExcludesTable:function(bg){var bf=function(bh,bi){am.fireDB.onError(bh,bi);
if(a8){a8(false)}};am.fireDB.db.transaction(function(bh){bh.executeSql("CREATE TABLE IF NOT EXISTS scriptexcludes(eid INTEGER, sid INTEGER, FOREIGN KEY(sid) REFERENCES scripts(sid),FOREIGN KEY(eid) REFERENCES excludes(eid))",[],bg,bf)
})},createExcludesTable:function(bg){var bf=function(bh,bi){am.fireDB.onError(bh,bi);
if(a8){a8(false)}};am.fireDB.db.transaction(function(bh){bh.executeSql("CREATE TABLE IF NOT EXISTS excludes(eid INTEGER PRIMARY KEY ASC, regex TEXT)",[],bg,bf)
})}};var ba=function(){am.fireDB.createScriptExcludesTable(a9)
};var bb=function(){am.fireDB.createScriptIncludesTable(ba)
};var bc=function(){am.fireDB.createExcludesTable(bb)
};var bd=function(){am.fireDB.createIncludesTable(bc)
};var be=function(){am.fireDB.createScriptTable(bd)
};be()},insertValuesFromJSON:function(br,bi){var bd=[];
var bp=10000;var bc=[];var bj={};var a9={};var bm=[];
var bv=[];var bf=[];var bl=[];var ba=0;var bs=0;aS.show("TamperFire",aX.getMessage("TamperFire_import_started"),chrome.extension.getURL("images/icon128.png"));
for(var bk in br.scripts){if(!br.scripts.hasOwnProperty(bk)){continue
}bd.push(bk)}am.status.action=aX.getMessage("Processing_scripts");
am.status.progress={n:0,of:bd.length};var bo=0;var bn;
var bu=0;var a8=function(){for(var bw in bj){var bx=ba++;
bm.push([bw,bj[bw].generic,bx]);for(var by in bj[bw].sids){bf.push([bx,bj[bw].sids[by]])
}}};var bt=function(){for(var bx in a9){var bw=bs++;
bv.push([bx,bw]);for(var by in a9[bx].sids){bl.push([bw,a9[bx].sids[by]])
}}};var bq=function(bz,bB,bC,bw){if(bC.length){am.resetStatus();
am.status.update=true;am.status.action=aX.getMessage("Writing_scripts");
am.status.progress={n:bz,of:bm.length+bv.length+bf.length+bl.length}
}else{if(bw){bw()}return}var bA=function(){bq(bz,bB,bC,bw)
};var by=function(){if(bn>=bC.length-1){if(bw){bw()
}}else{window.setTimeout(bA,0)}};var bx=bC.length-1;
if((bx-bn)>bp){bx=bn+bp}if(D){console.log("bg: write TF "+bx)
}bB(bC.slice(bn,bx),by);bn=bx;am.status.progress.n=bz+bn
};var bh=function(bw){if(bc.length){am.scripts.setValues(bc,bw);
bc=[]}else{if(bw){bw()}}};var bg=function(){var by=function(){if(bi){bi(bd.length)
}aS.show("TamperFire",aX.getMessage("TamperFire_is_up_to_date"),chrome.extension.getURL("images/icon128.png"))
};var bz=function(){bn=0;bq(bu,am.scriptExcludes.setValues,bl,by);
bu+=bl.length};var bA=function(){bn=0;bq(bu,am.scriptIncludes.setValues,bf,bz);
bu+=bf.length};var bw=function(){bn=0;bq(bu,am.excludes.setValues,bv,bA);
bu+=bv.length};var bx=function(){bn=0;bq(bu,am.includes.setValues,bm,bw);
bu+=bm.length};a8();bt();bh(bx)};var bb=function(){if(bc.length>bp){bh(bb);
return}bo++;if(bo%96==0){window.setTimeout(be,0)}else{be()
}};var be=function(){if(D&&bo%2048==0){console.log("bg: import TF script "+bd[bo])
}am.status.progress.n=bo;if(bo<bd.length){var bA=br.scripts[bd[bo]];
bc.push([bd[bo],JSON.stringify(bA)]);for(var bx=0;bx<bA.excludes.length;
bx++){var bw=ai.getRegExpFromUrl(bA.excludes[bx],aK,true);
if(!a9[bw]){a9[bw]={sids:[]}}a9[bw].sids.push(bd[bo])
}for(var bx=0;bx<bA.includes.length;bx++){var bz=bA.includes[bx].trim();
var bw=ai.getRegExpFromUrl(bz,aK,true);if(!bj[bw]){var by=0;
if(bz.search("^[https*]]{1,}[://]{0,}[w.]{0,4}[*|.]{1,}[$|/]")!=-1||bz.search("^[.*/]{1,}$")!=-1||bz.search("^[https*]{1,}[://]{0,}[w.]{0,4}[.|*|/]{1,}$")!=-1||bz.search("^"+ai.escapeForRegExp("*://*[$|/]"))!=-1||bz.replace(new RegExp("(https|http|\\*).://\\*"),"")==""||bz=="*"){by=1
}bj[bw]={sids:[],generic:by.toString()}}bj[bw].sids.push(bd[bo])
}bb()}else{bg()}};be()},count:function(bb,bc,ba,a8){var a9=function(bd){a8(bd.length)
};am.getValues(bb,bc,[ba],a9)},setValue:function(bb,bd,ba,a9,bc,a8){am.setValues(bb,[bd,a9],[a9,bc],a8)
},setValues:function(bg,bh,ba,bc){if(V){console.log("TM_fire.setValues")
}var be=0;var bd=function(){if(bc){bc()}};var a9=[];
var bf=[];for(var a8=0;a8<bh.length;a8++){a9.push(bh[a8]);
bf.push("?")}var bb=function(bi){if(be<ba.length){bi.executeSql("INSERT INTO "+bg+"("+a9.join(", ")+") VALUES ("+bf.join(", ")+");",ba[be],bb,am.fireDB.onError);
be++}else{bd()}};am.fireDB.db.transaction(bb)},getValues:function(bh,bc,bf,a9){if(V){console.log("TM_fire.getValues")
}var ba=0;var bb=null;var bd=[];var be=20;var bg=function(bi,bk){if(bk.rows){for(var bj=0;
bj<bk.rows.length;bj++){bd.push(bk.rows.item(bj))}}if(ba<bf.length){a8()
}else{a9(bd)}};var a8=function(bj){if(!bb){bb=bj}var bi=[];
var bj=[];for(var bk=ba;bk<bf.length&&bk-ba<be;bk++){bj.push(bc+"=?");
bi.push(bf[bk])}bb.executeSql("SELECT * FROM "+bh+" WHERE "+bj.join(" OR "),bi,bg,am.fireDB.onError);
ba+=be};am.fireDB.db.transaction(a8)},getMax:function(ba,a9,a8){var bd='MAX("'+a9+'")';
var bc=function(be,bg){var bf=0;if(bg.rows&&bg.rows.length){bf=bg.rows.item(0)[bd]
}a8(bf)};var bb=function(be){be.executeSql("SELECT "+bd+' FROM "'+ba+'"',[],bc,am.fireDB.onError)
};am.fireDB.db.transaction(bb)},tab:{getItems:function(a9,bb){var ba=0;
var a8={};var bf=[];var be=1;var bc=function(){for(var bh in a8){if(!a8.hasOwnProperty(bh)){continue
}bf.push(a8[bh])}if(bb){bb(bf)}};var bg=function(bi){for(var bh=0;
bh<bi.length;bh++){a8[bi[bh][az]]=bi[bh]}if(--be==0){bc()
}};if(Y.has(a9)){var bd=function(bi,bh){be++;am.url.getItems(bi,bg)
};Y.iterateUrls(a9,bd)}else{bb(bf)}be--},getCount:function(bb,a8){var a9=function(bc){Y.setFireCnt(bc.length);
if(a8){a8(bc.length)}};var ba=Y.getFireCnt(bb);if(ba){a8(ba)
}else{am.tab.getItems(bb,a9)}}},url:{getCount:function(a9,a8){if(D){console.log("bg: TF: get count for URL "+a9)
}var bc="count(*)";var bb=function(bd,bf){var be=0;
if(bf.rows&&bf.rows.length){be=bf.rows.item(0)[bc]}a8(be)
};var ba="";ba+="SELECT "+bc+" FROM scripts WHERE sid IN ";
ba+="    (SELECT sid FROM scriptincludes WHERE iid IN (SELECT iid FROM includes WHERE generic=0 AND ? REGEXP regex)) ";
ba+="AND NOT sid IN ";ba+="    (SELECT sid FROM scriptexcludes WHERE eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex)) ";
am.fireDB.db.transaction(function(bd){bd.executeSql(ba,[a9,a9],bb,am.fireDB.onError)
})},getItems:function(a9,bc){if(D){console.log("bg: TF: get scripts for URL "+a9)
}var bg=[];var bb="";var bi=1,bf=0,be=0;if(bi==0){bb+="SELECT DISTINCT t1.* FROM scripts T1 JOIN scriptincludes T2 ON T1.sid=T2.sid WHERE T2.iid IN ";
bb+="    (SELECT iid FROM includes WHERE generic=0 AND ? REGEXP regex) ";
bb+="AND NOT T1.sid IN ";bb+="    (SELECT T4.sid FROM excludes T3 JOIN scriptexcludes T4 ON T3.eid=T4.eid WHERE T3.eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex))"
}else{if(bi==1){bb+="SELECT * FROM scripts T1 WHERE T1.sid IN ";
bb+="    (SELECT sid FROM scriptincludes WHERE iid IN (SELECT iid FROM includes WHERE generic=0 AND ? REGEXP regex)) ";
bb+="AND NOT T1.sid IN ";bb+="    (SELECT sid FROM scriptexcludes WHERE eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex)) "
}else{if(bi==2){bb+="SELECT DISTINCT t1.* FROM scripts T1 JOIN scriptincludes T2 ON T1.sid=T2.sid WHERE EXISTS";
bb+="    (SELECT iid FROM includes I1 WHERE T2.iid=I1.iid AND generic=0 AND ? REGEXP regex) ";
bb+="AND NOT T1.sid IN ";bb+="    (SELECT T4.sid FROM excludes T3 JOIN scriptexcludes T4 ON T3.eid=T4.eid WHERE T3.eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex))"
}else{if(bi==3){bb+="SELECT DISTINCT t1.* FROM scripts T1 JOIN scriptincludes T2 ON T1.sid=T2.sid JOIN includes I1 ON I1.iid=T2.iid WHERE I1.generic=0 AND ? REGEXP I1.regex ";
bb+="AND NOT T1.sid IN ";bb+="    (SELECT T4.sid FROM excludes T3 JOIN scriptexcludes T4 ON T3.eid=T4.eid WHERE T3.eid IN (SELECT eid FROM excludes WHERE ? REGEXP regex))"
}}}}var a8="SELECT DISTINCT t1.value, t1.sid FROM scripts T1 JOIN scriptincludes T2 ON T1.sid=T2.sid WHERE T2.iid IN (SELECT iid FROM includes WHERE generic=0)";
var bh=(a9=="*");var ba=(bh?a8:bb);var bd=function(bj,bm){be=(new Date()).getTime();
if(D){console.log("bg: TF db access: "+bi+" -> "+(be-bf)+"ms")
}if(bm.rows&&bm.rows.length){for(var bk=0;bk<bm.rows.length;
bk++){try{var bn=bm.rows.item(bk).value;bg.push(JSON.parse(bn))
}catch(bl){console.log("bg: error parsing TamperFire entry "+item[bk])
}}bc(bg)}else{console.log("bg: warn: no scripts entry");
bc(bg)}};am.fireDB.db.transaction(function(bj){bf=(new Date()).getTime();
bj.executeSql(ba,bh?[]:[a9,a9],bd,am.fireDB.onError)
})}},ids:{getItems:function(bb,a8){var ba=[];var a9=function(bd){if(bd&&bd.length){for(var bc=0;
bc<bd.length;bc++){try{ba.push(JSON.parse(bd[bc]))}catch(be){console.log("bg: error parsing TamperFire entry "+bd)
}}a8(ba)}else{console.log("bg: warn: no scripts entry");
a8(ba)}};if(bb.length){am.scripts.getValues(bb,null,a9)
}else{a8(ba)}}},includes:{setValues:function(a9,a8){am.setValues("includes",["regex","generic","iid"],a9,a8)
}},scriptIncludes:{setValues:function(a9,a8){am.setValues("scriptincludes",["iid","sid"],a9,a8)
}},excludes:{setValues:function(a9,a8){am.setValues("excludes",["regex","eid"],a9,a8)
}},scriptExcludes:{setValues:function(a9,a8){am.setValues("scriptexcludes",["eid","sid"],a9,a8)
}},scripts:{getValues:function(bb,ba,a8){var a9=function(bc){var bd=[];
for(var be=0;be<bc.length;be++){bd.push(bc[be]["value"])
}a8(bd)};am.getValues("scripts","sid",bb,a9)},setValue:function(a9,ba,a8){am.setValue("scripts","sid",a9,"value",ba,a8)
},setValues:function(a9,a8){am.setValues("scripts",["sid","value"],a9,a8)
}}};fire=am;var F={cacheDB:null,localDB:null,init:function(a9){if(V){console.log("bg: TM_storage.init() "+A)
}if(A){var ba=function(bb,bd){F.cacheDB={};if(bd){for(var bc=0;
bc<bd.rows.length;bc++){F.cacheDB[bd.rows.item(bc).name]=bd.rows.item(bc).value
}}F.initialized=true;if(a9){a9()}};var a8=function(){if(SV){console.log("bg: init storage cache")
}F.localDB.db.transaction(function(bb){bb.executeSql("SELECT * FROM config",[],ba,F.localDB.onError)
})};F.localDB={db:openDatabase("tmStorage","1.0","TM Storage",30*1024*1024),onSuccess:function(bc,bb){if(SV){console.log("bg: storage: localDB Success ")
}},onError:function(bb,bc){console.log("bg: storage: localDB Error "+JSON.stringify(bc))
},createTable:function(bb){F.localDB.db.transaction(function(bc){bc.executeSql("CREATE TABLE IF NOT EXISTS config(ID INTEGER PRIMARY KEY ASC, name TEXT, value TEXT)",[],bb,F.localDB.onError)
})}};F.localDB.createTable(a8)}else{F.initialized=true;
if(a9){a9()}}},setValue:function(bd,bb,a8){if(SV){console.log("TM_storage.setValue -> "+bd)
}var ba=(typeof bb)[0];var a9=ag(bd);switch(ba){case"o":try{bb=ba+JSON.stringify(bb)
}catch(bc){console.log("bg: storage: setValue ERROR: "+bc.message);
return}break;default:bb=ba+bb}if(A){if(F.getValue(a9,null)){F.localDB.db.transaction(function(be){be.executeSql("UPDATE config SET value=? WHERE name=?",[bb,a9],a8?a8:F.localDB.onSuccess,F.localDB.onError)
})}else{F.localDB.db.transaction(function(be){be.executeSql("INSERT INTO config(name, value) VALUES (?,?)",[a9,bb],a8?a8:F.localDB.onSuccess,F.localDB.onError)
})}F.cacheDB[a9]=bb}else{localStorage.setItem(a9,bb)
}},getValue:function(bb,a8){if(SV){console.log("TM_storage.getValue -> "+bb)
}var ba=ag(bb);var a9=function(be,bc){if(!be){return bc
}var bd=be[0];be=be.substring(1);switch(bd){case"b":return be=="true";
case"n":return Number(be);case"o":try{return JSON.parse(be)
}catch(bf){console.log("bg: storage: getValue ERROR: "+bf.message);
return bc}default:return be}};if(A){return a9(F.cacheDB[ba],a8)
}else{return a9(localStorage.getItem(ba,a8),a8)}},deleteAll:function(a8){if(SV){console.log("TM_storage.deleteAll()")
}if(A){F.cacheDB={};F.localDB.db.transaction(function(bb){bb.executeSql("DROP TABLE config",[],a8,F.localDB.onError)
})}else{var ba=F.listValues();for(var a9=0;a9<ba.length;
a9++){localStorage.removeItem(ba[a9])}}},deleteValue:function(ba,a8){if(SV){console.log("TM_storage.deleteValue -> "+ba)
}var a9=ag(ba);if(A){F.cacheDB[a9]=null;delete F.cacheDB[a9];
F.localDB.db.transaction(function(bb){bb.executeSql("DELETE FROM config WHERE name=?",[a9],a8,F.localDB.onError)
})}else{localStorage.removeItem(a9)}},listValues:function(){if(SV){console.log("TM_storage.listValues")
}if(A){var a8=[];for(var a9 in F.cacheDB){if(!F.cacheDB.hasOwnProperty(a9)){continue
}a8.push(a9)}return a8}else{var a8=[];for(var a9=0;
a9<localStorage.length;a9++){a8.push(localStorage.key(a9))
}return a8}}};var W=function(){var a8=[];var ba=[];
for(var bb=0;bb<a8.length;bb++){var a9="system/"+a8[bb]+".tamper.js";
var bc=Registry.getRaw(a9);if(bc){ba.push(bc)}}return ba
};var ap={initialized:false,enabled:false,syncing:0,period:null,syncDoneListener:[],scheduled:{to:null,force:null,t:0},createTeslaData:function(a8){var ba=[];
var bb=ap.getLocalScriptList();for(var a9=0;a9<bb.length;
a9++){if(bb[a9].url){var bc=bb[a9].name.replace(/\|/g,"!")+"|{}|"+bb[a9].url.replace(/\|/g,"%7C");
ba.push(bc)}}if(a8){a8(ba)}},enable:function(a8){if(ap.enabled){if(D){console.log("sync: reenable?")
}}else{if(aK.values.sync_type==0){ap.enabled=false}else{ap.enabled=SyncInfo.init(aK.values.sync_type,aK.values.sync_id)
}}if(!ap.initialized){SyncInfo.addChangeListener(ap.remoteChangeCb);
ap.initialized=true}if(a8){a8(ap.enabled)}},finalize:function(){},reset:function(a8){SyncInfo.reset(a8)
},addSyncDoneListener:function(a8){ap.syncDoneListener.push(a8);
if(V){console.log("sync: addSyncDoneListener() -> "+ap.syncDoneListener.length)
}},runAllSyncDoneListeners:function(a9){if(V){console.log("sync: runAllSyncDoneListeners() -> "+ap.syncDoneListener.length)
}while(ap.syncDoneListener.length){var a8=ap.syncDoneListener.splice(0,1);
a8[0](a9)}},scheduleSync:function(a9,ba){var bd=(new Date()).getTime();
ba=ap.scheduled.force||ba;if(ap.scheduled.to){window.clearTimeout(ap.scheduled.to);
if(ap.scheduled.ts<(bd+a9)){a9=ap.scheduled.ts-bd;if(a9<1){a9=1
}if(V){console.log("sync: re-schedule sync for run in "+a9+" ms")
}}}else{if(D){console.log("sync: schedule sync for run in "+a9+" ms")
}}var bb=function(){ap.sync(ap.scheduled.force);ap.scheduled.to=null;
ap.scheduled.force=null};var bc=function(){ap.scheduled.to=null;
ap.scheduled.force=null};var a8=function(){if(aK.values.sync_type==SyncInfo.types.eCHROMESYNC){var be=function(bf,bg){if(bf){bb()
}else{console.log("sync: storage permission is needed in order to use Google Sync!");
bc()}};h.requestPermissionEx(be)}else{bb()}};ap.scheduled.to=window.setTimeout(a8,a9);
ap.scheduled.force=ba;ap.scheduled.ts=bd+a9},schedulePeriodicalCheck:function(){if(ap.period){return
}var a8=18000000;if(D){console.log("sync: schedule sync for periodical run every "+a8+" ms")
}ap.period=window.setInterval(ap.sync,a8)},disablePeriodicalCheck:function(){if(ap.period){if(D){console.log("sync: disable periodical sync")
}window.clearInterval(ap.period);ap.period=null}},getLocalObjFromScript:function(a9){var bc=(a9.id||G.getScriptId(a9.name));
var a8=a9.downloadURL?a9.downloadURL.split("#")[0]:null;
var bb=a9.fileURL?a9.fileURL.split("#")[0]:null;var ba=bb||a8;
return{id:bc,name:a9.name,durl:a8,furl:bb,url:ba}},getLocalScriptList:function(){var a9=[];
var bb=aa();for(var a8 in bb){var bc=bb[a8];var ba=J(bc);
if(!ba.script||!ba.cond){continue}a9.push(ap.getLocalObjFromScript(ba.script))
}return a9},getRemoteScriptList:function(a8){SyncInfo.list(a8)
},checkSyncAccount:function(ba,a8,a9){var bc=null;var bb=function(bd){if(bc==null){var be=function(){ap.enable(function(){aV();
ap.scheduleSync(3000,bd)});bc=null};bc=window.setTimeout(be,200)
}};if(ba=="sync_enabled"){if(a9){if(aK.values.sync_type==SyncInfo.types.ePASTEBIN){ap.schedulePeriodicalCheck()
}bb()}else{ap.enabled=false;ap.disablePeriodicalCheck()
}}else{if(ba=="sync_type"){if(a9==SyncInfo.types.ePASTEBIN){ap.schedulePeriodicalCheck()
}else{if(a9==SyncInfo.types.eCHROMESYNC){ap.disablePeriodicalCheck()
}}bb()}else{if(ba=="sync_id"){if(aK.values.sync_type==SyncInfo.types.ePASTEBIN){bb()
}}}}},sync:function(a8){if(ap.syncing>0){if(a8){var bd=function(bp){if(bp){ap.scheduleSync(50,a8)
}};ap.addSyncDoneListener(bd)}return}if(!ap.enabled){return
}ap.syncing++;if(V){console.log("sync: start syncing = "+ap.syncing)
}var bl=null;var a9=null;var bc=[];var bk=false;var bn=true;
var bm={};var bf=function(){if(bc.length>0){var bp=bc.splice(0,1);
window.setTimeout(bp[0],1)}};var bh=function(){bn=false;
be()};var bb=function(){ap.getRemoteScriptList(bj);
bl=ap.getLocalScriptList()};var bj=function(bp){a9=bp;
if(a9){bf()}else{if(D){console.log("sync: unable to get remotelist!")
}bh()}};bc.push(bb);var ba=function(bq){if(bq){bq=bq.split("#")[0];
for(var bp=0;bp<bl.length;bp++){if(bl[bp].furl==bq||bl[bp].durl==bq){return bl[bp]
}}}return null};var bi=function(bq){if(bq){bq=bq.split("#")[0];
for(var bp=0;bp<a9.length;bp++){if(a9[bp].url==bq){return a9[bp]
}}}return null};var bg=function(){var br=1;var bq=function(){if(--br==0){bf()
}};for(var bs=0;bs<a9.length;bs++){var bu=a9[bs];var bt=false;
var bp=ba(bu.url);if(bp){bt=true;bm[bu.url]=true}if(bt&&bu.options.removed){bk=true;
if(D){console.log("sync: remove local script "+(bu.name||bu.url))
}r(bp.name,null,false)}if(!bt&&!bu.options.removed){br++;
bk=true;ap.importScript(bu,bq)}}bq()};bc.push(bg);var bo=function(){var br=1;
var bq=function(){if(--br==0){bf()}};for(var bs=0;bs<bl.length;
bs++){var bp=false;var bv=bl[bs];var bt=bv.url;if(!bt||bm[bt]){continue
}var bu=bi(bt);if(bu){bp=true}if(!bp){br++;bk=true;
ap.exportScript(bv,bq)}}bq()};bc.push(bo);var be=function(){if(D){console.log("sync: finished")
}if(--ap.syncing==0){ap.runAllSyncDoneListeners(bn)
}if(bk){aV()}};bc.push(be);bf()},importScript:function(bb,a8){if(D){console.log("sync: import "+(bb.name||bb.url))
}var ba={imported:aK.values.sync_type};var a9={ask:false,sync:ba,save:true};
c(bb.url,a9,a8)},exportScript:function(a9,a8){if(D){console.log("sync: export "+(a9.name||a9.url))
}SyncInfo.add(a9,a8)},removeScript:function(a9,a8){if(D){console.log("sync: remove "+(a9.name||a9.url))
}SyncInfo.remove(a9,a8)},remoteChangeCb:function(a9,a8){if(!ap.enabled||aK.values.sync_type!=SyncInfo.types.eCHROMESYNC){return
}if(V){console.log("sync: remoteChangeCb()")}ap.scheduleSync(500,true)
},scriptAddedCb:function(a9,a8){if(!ap.enabled){return
}if(V){console.log("sync: scriptAddedCb()")}var ba=ap.getLocalObjFromScript(a8);
if(ba.url){ap.exportScript(ba)}},scriptChangedCb:function(a9,a8){if(!ap.enabled){return
}},scriptRemovedCb:function(a9,a8){if(!ap.enabled){return
}if(V){console.log("sync: scriptRemovedCb()")}var ba=ap.getLocalObjFromScript(a8);
if(ba.url){ap.removeScript(ba)}}};sycl=ap;var aD=function(ba,bd){if(bd==undefined){bd=aK
}var bb;var a8=false;var a9=false;if(ba&&Y.has(ba)){a8=Y.n[ba].blocker;
a9=Y.getRunning(ba)}if(a8){bd.images.icon="images/icon_grey_blocker.png"
}else{if(a9){bd.images.icon="images/icon.png"}else{bd.images.icon="images/icon_grey.png"
}}bb={path:chrome.extension.getURL(bd.images.icon)};
if(ba!=null){bb.tabId=ba}try{chrome.browserAction.setIcon(bb)
}catch(bc){console.log("bg: ERROR while setIcon! "+bc.message)
}};var E=function(a8){aK.addChangeListener("scriptblocker_overwrite",an.init);
aK.addChangeListener("sync_enabled",ap.checkSyncAccount);
aK.addChangeListener("sync_type",ap.checkSyncAccount);
aK.addChangeListener("sync_id",ap.checkSyncAccount);
aK.addChangeListener("fire_enabled",function(bb,ba,a9){if(a9&&!am.status.initialized){am.init()
}});aK.addChangeListener("logLevel",function(){R(aK.values.logLevel)
});aK.addChangeListener("i18n",function(){aX.setLocale(aK.values.i18n)
})};var B=function(ba){var bc=this;var bb="";bb+="// ==UserScript==\n";
bb+="// @name       My Fancy New Userscript\n";bb+="// @namespace  http://use.i.E.your.homepage/\n";
bb+="// @version    0.1\n";bb+="// @description  enter something useful\n";
bb+="// @match      http://*/*\n";bb+="// @copyright  2012+, You\n";
bb+="// ==/UserScript==\n\n";this.changeListeners={};
var a9={};var be={configMode:0,safeUrls:true,tryToFixUrl:true,debug:false,logLevel:0,showFixedSrc:false,firstRun:true,webrequest_use:"yes",webrequest_modHeaders:"yes",webrequest_fixCSP:"yes",scriptblocker_overwrite:"yes",notification_showTMUpdate:true,notification_silentScriptUpdate:true,scriptTemplate:bb,scriptUpdateCheckPeriod:12*60*60*1000,scriptUpdateHideNotificationAfter:15*1000,scriptUpdateCheckDisabled:false,autoReload:false,appearance_badges:"running",fire_enabled:false,fire_sort_cache_enabled:true,fire_updateURL:"http://fire.tampermonkey.net/update.php",fire_updatePeriod:14*24*60*60*1000,editor_enabled:true,editor_keyMap:"windows",editor_indentUnit:4,editor_indentWithTabs:false,editor_tabMode:"smart",editor_enterMode:"indent",editor_electricChars:true,editor_lineNumbers:true,editor_autoSave:false,editor_easySave:false,i18n:null,sync_enabled:false,sync_type:0,sync_id:"",require_blacklist:["/^https?:\\/\\/sizzlemctwizzle.com\\/.*/"],forbiddenPages:["*.paypal.tld/*","https://*deutsche-bank-24.tld/*","https://*bankamerica.tld/*","*://plusone.google.com/*/fastbutton*","*://www.facebook.com/plugins/*","*://platform.twitter.com/widgets/*"]};
this.addChangeListener=function(bh,bg){if(!bc.changeListeners[bh]){bc.changeListeners[bh]=[]
}bc.changeListeners[bh].push(bg)};this.load=function(bg){var bl=W();
for(var bh in bl){var bj=bl[bh];window.setTimeout(function(){ad({tabid:null,url:null,src:bj,ask:false,defaultscript:true})
},1)}bc.defaults=be;bc.values={};for(var bk in be){if(!be.hasOwnProperty(bk)){continue
}(function bi(){var bo=bk;var bn=function(){return a9[bo]
};var bp=function(bq){bf(bo,bq)};bc.values.__defineGetter__(bo,bn);
bc.values.__defineSetter__(bo,bp)})();a9[bk]=be[bk]
}var bm=F.getValue("TM_config",bc.defaults);for(var bk in bm){if(!bm.hasOwnProperty(bk)){continue
}bc.values[bk]=bm[bk]}bg()};var bf=function(bg,bj){if(bc.changeListeners[bg]&&(a9[bg])!=bj){for(var bh=0;
bh<bc.changeListeners[bg].length;bh++){(function bi(){var bo=bg;
var bn=bc.values[bo];var bm=bj;if(bn!=bm){var bl=bc.changeListeners[bo][bh];
var bk=function(){bl(bo,bn,bm)};window.setTimeout(bk,1)
}})()}}a9[bg]=bj};this.save=function(bg){if(bg==undefined){bg=true
}var bh=bc.values;bh.firstRun=false;F.setValue("TM_config",bh)
};var a8=function(){if(bc.values.firstRun){bc.save(false)
}bc.images={};bc.images.icon="images/icon.png";bc.initialized=true;
if(bc.values.notification_showTMUpdate&&aT){var bh="version="+chrome.extension.getVersion()+"&ext="+chrome.extension.getID().substr(0,4);
var bg="http://tampermonkey.net/changelog.php?"+bh;
aS.showUpdate(aX.getMessage("Updated_to__0version0",(aT||chrome.extension.getVersion())),null,chrome.extension.getURL("images/icon128.png"),{text:aX.getMessage("Click_here_to_see_the_recent_changes"),src:bg})
}if(ba){ba()}};var bd=function(bg){if(!F.initialized){window.setTimeout(function(){bd(bg)
},10);return}var bh=function(){bc.load(bg)};aN(bh)};
bd(a8);return this};var at=function(ba,bc,bb,a9,a8){return t(ba,bc,bb,a9,a8,true)
};var ay=function(){var a8=this;this.getNextResource=function(bb,a9){var bc=function(bl,bj){bj.loaded=true;
bj.resURL="";bj.resText="";var bo=null;var bi=bl.responseHeaders?bl.responseHeaders.split("\n"):null;
for(var bh in bi){var bn=bi[bh].split(":");var bk=bn.shift()||"";
var bm=bn.join(":")||"";if(V){console.log("Header: "+JSON.stringify(bk))
}if(bk.trim().toLowerCase()=="content-type"&&bm.search("image")!=-1){bo=bk[1].trim();
break}}if(bl.readyState==4){if(bl.status==200||bl.status==0){bj.resText=bl.responseText;
if(!bo){if(bj.url.search(".ico$")!=-1||bj.url.search(".jpg$")!=-1){bo="image/x-icon"
}else{if(bj.url.search(".gif$")!=-1){bo="image/gif"
}else{if(bj.url.search(".png$")!=-1){bo="image/png"
}else{if(ai.isLocalImage(bj.url)){bo="image/x-icon"
}}}}}if(bl.status==200){K(bj.url,bl.responseText,bl.responseHeaders)
}if(!bo){bj.resURL=P.Base64.encode(bl.responseText)
}else{bj.resURL="data:"+bo+";base64,"+P.Base64.encode(bl.responseText)
}a9(bb)}else{if(D||V){console.log("getRes: Failed to load: '"+bj.url+"' "+bl.status+" "+bl.statusText)
}a9(bb)}}};for(var ba in bb.resources){var bf=bb.resources[ba];
if(!bf.loaded){if(bf.url.length>8&&bf.url.substr(0,8)=="/images/"&&bf.url.search("\\.\\.")==-1){bf.url=chrome.extension.getURL(bf.url)
}var be=ax(bf.url);if(be){bc({readyState:4,status:200,responseText:be.content,responseHeaders:be.headers},bf)
}else{if(bf.url.search("^file://")==0){var bg=function(bh){bc({readyState:4,status:bh?0:404,responseText:bh},bf)
};a.getSource(bf.url,bg)}else{var bd={method:"GET",url:bf.url,retries:av,overrideMimeType:"text/plain; charset=x-user-defined"};
if(V){console.log("getRes: request "+bf.url)}t(bd,function(bh){bc(bh,bf)
},null,null,null,true)}}return true}}return false};
this.isBlacklisted=function(ba){var bb=false;var a9=function(bd){var bc=false;
if(!bd.length){return}if(bd.substr(0,1)=="/"){bc=a2(ba,bd)
}else{bc=(ba.search(bd)!=-1)}if(D&&bc){console.log('bg: require blacklist entry "'+bd+'" matched')
}bb|=bc};ai.forEach(aK.values.require_blacklist,a9);
return bb};this.getRequires=function(bf,bc){var bg=function(bj,bi){ba.loaded=true;
if(bj.readyState==4&&bj.status==200||bj.status==0){ba.textContent=bj.responseText;
if(bj.status!=0){K(ba.url,bj.responseText)}}};for(var bd in bf.requires){var ba=bf.requires[bd];
if(!ba.loaded&&ba.url){var bh=null;if(a8.isBlacklisted(ba.url)){bh={content:'// this @require ("'+encodeURIComponent(ba.url)+'") is blacklisted!\n'}
}else{bh=ax(ba.url)}if(bh){bg({readyState:4,status:200,responseText:bh.content},ba);
a8.getRequires(bf,bc)}else{if(V){console.log("requires "+ba.url)
}var bb=function(bi){bg(bi,ba);a8.getRequires(bf,bc)
};if(ba.url.search("^file://")==0){var be=function(bi){bb({readyState:4,status:bi?0:404,responseText:bi})
};a.getSource(ba.url,be)}else{var a9={method:"GET",retries:av,url:ba.url,};
t(a9,bb,null,null,null,true)}}return true}}bc()};this.contentLoad=function(bc,ba,a9){if(a8.getNextResource(ba,function(bd){a8.contentLoad(bc,bd,a9)
})){return}a8.info=bc;if(typeof aF[bc.tabId]=="undefined"){aF[bc.tabId]={storage:{}}
}var bb=function(){var bd=[];bd.push(ba);console.log(aX.getMessage("run_script_0url0___0name0",[bc.url,ba.name]));
a8.injectScript(bd,a9)};a8.getRequires(ba,bb)};this.getUrlContents=function(a9){var ba="";
var bb=new XMLHttpRequest();bb.open("GET","/"+a9,false);
bb.send(null);ba=bb.responseText;return ba};this.createEnv=function(ba,a9){ba=a0.mkCompat(ba,a9);
if(aK.values.debug){console.log(aX.getMessage("env_option__debug_scripts"));
ba="debugger;\n"+ba}return ba};this.injectScript=function(bb,a9){var be;
if(a9==undefined){a9=function(){}}for(var bc=0;be=bb[bc];
bc++){var bg=[];be.requires.forEach(function(bj){var bi=bj.textContent;
bi=a0.mkCompat(bi,be.options.compatopts_for_requires?be:null);
bg.push(bi)});var bf="\n"+bg.join("\n")+"\n";var bd=aO(be.name);
var bh={};for(var ba in be){if(ba=="includes"||ba=="matches"||ba=="requires"||ba=="excludes"||ba=="textContent"){continue
}bh[ba]=be[ba]}chrome.tabs.sendMessage(a8.info.tabId,{method:"executeScript",header:be.header,code:a8.createEnv(be.textContent,be),requires:bf,version:chrome.extension.getVersion(),storage:bd,script:bh,id:a8.info.scriptId},a9)
}}};var u=function(a8){r(a8,null);aB(a8,null)};var ab=function(a8){if(a8){a8+=(a8.search("\\?")==-1?"?":"&")+"ts="+(new Date()).getTime()
}return a8};var a1=function(ba,a9){if(!ba){return null
}var a8=null;if(ba.fileURL&&ba.fileURL.search("^file://"==-1)){a8=ba.fileURL
}if(ba.downloadURL&&ba.downloadURL.search("^file://"==-1)){a8=ba.downloadURL
}if(a8&&a9){a8=ab(a8)}return a8};var i=function(bc,bb){if(!bc){return null
}var ba=null,a8=null;if(bc.fileURL&&bc.fileURL.search("^file://"==-1)){ba=bc.fileURL
}if(bc.downloadURL&&bc.downloadURL.search("^file://"==-1)){ba=bc.downloadURL
}if(bc.updateURL&&bc.updateURL.search("^file://"==-1)){a8=bc.updateURL
}if(a8){return bb?ab(a8):a8}if(ba){var a9=null;a9=ba.replace(".user.js",".meta.js");
if(a9==ba){a9=ba.replace(".tamper.js",".meta.js")}if(a9==ba){a9=null
}return bb?ab(a9):a9}return null};var aw=function(bb,bc){var ba=i(bb,true);
if(ba){var a9={method:"GET",retries:0,url:ba,};var a8=function(bd){bb.meta=null;
if(bd.readyState==4&&bd.status==200){var be=G.processMetaHeader(bd.responseText);
bb.meta=be;bb.metasrc=bd.responseText}else{console.log("bg: unable to find meta data @ "+ba+" req.status = "+bd.status)
}bc(bb)};t(a9,a8);return}bb.meta=null;bc(bb)};var b=function(a9){var bb,ba=a9.options.override;
a9.includes=ba.merge_includes&&ba.orig_includes?ba.orig_includes.slice():[];
a9.excludes=ba.merge_excludes&&ba.orig_excludes?ba.orig_excludes.slice():[];
a9.matches=ba.merge_matches&&ba.orig_matches?ba.orig_matches.slice():[];
for(bb=0;bb<ba.use_includes.length;bb++){var a8=a9.excludes.indexOf(ba.use_includes[bb]);
if(a8>=0){a9.excludes.splice(a8,1)}a9.includes.push(ba.use_includes[bb])
}if(typeof ba.use_matches!=="undefined"){for(bb=0;bb<ba.use_matches.length;
bb++){a8=a9.excludes.indexOf(ba.use_matches[bb]);if(a8>=0){a9.excludes.splice(a8,1)
}a9.matches.push(ba.use_matches[bb])}}for(bb=0;bb<ba.use_excludes.length;
bb++){a9.excludes.push(ba.use_excludes[bb])}return a9
};var aV=function(){aq();var a8=function(a9){chrome.extension.sendMessage({method:"updateOptions",items:a9},function(ba){})
};f(a8)};var ad=function(bf){var bp=false;var bo=false;
var bm=false;if(bf.name==undefined){bf.name=null}if(bf.clean==undefined){bf.clean=false
}if(bf.defaultscript==undefined){bf.defaultscript=false
}if(bf.ask==undefined){bf.ask=true}if(bf.url==undefined||bf.url==null){bf.url=""
}if(bf.save==undefined){bf.save=false}if(bf.hash==undefined){bf.hash=""
}if(bf.force_url==""){bf.force_url=null}var bq=G.createScriptFromSrc(bf.src);
if(bf.name&&bf.name!=bq.name){console.log("bg: addNewUserScript() Names do not match!");
return false}if(!bq.name||bq.name==""||(bq.version==undefined)){chrome.tabs.sendMessage(bf.tabid,{method:"showMsg",msg:aX.getMessage("Invalid_UserScript__Sry_")},function(br){});
return false}var bc=F.getValue(bq.name,null);var a9="";
if(!bf.clean&&bc&&bc.system&&!bf.defaultscript){return false
}if(bq.options.compat_uW_gmonkey){chrome.tabs.sendMessage(bf.tabid,{method:"showMsg",msg:aX.getMessage("This_script_uses_uW_gm_api_")},function(br){});
return false}if(bc){bm=(bf.hash&&bc.hash!=bf.hash)}bq.hash=bf.hash?bf.hash:(bc?bc.hash:null);
bq.lastUpdated=(new Date()).getTime();bq.system=bf.defaultscript;
bq.fileURL=bf.url;if(!bf.clean&&bf.force_url){bq.updateURL=null;
bq.downloadURL=bf.force_url}bq.position=bc?bc.position:C()+1;
if(bq.name.search("\n")!=-1){chrome.tabs.sendMessage(bf.tabid,{method:"showMsg",msg:aX.getMessage("Invalid_UserScript_name__Sry_")},function(br){});
return false}else{if(!bf.clean&&bc&&bq.version==bc.version&&!bm){if(bf.defaultscript||bf.noreinstall){return null
}if(bf.save){a9+=aX.getMessage("You_are_about_to_modify_a_UserScript_")+"     \n"
}else{a9+=aX.getMessage("You_are_about_to_reinstall_a_UserScript_")+"     \n";
bp=true;a9+="\n"+aX.getMessage("All_script_settings_will_be_reset_")+"!!\n"
}a9+="\n"+aX.getMessage("Name_")+"\n";a9+="    "+bq.name+((bq.version!="")?" v"+bq.version:"")+"\n";
a9+="\n"+aX.getMessage("Installed_Version_")+"\n";a9+="    v"+bq.version+"\n"
}else{if(!bf.clean&&bc&&Z(bq.version,bc.version)==n){a9+=aX.getMessage("You_are_about_to_downgrade_a_UserScript")+"     \n";
a9+="\n"+aX.getMessage("Name_")+"\n";a9+="    "+bq.name+((bq.version!="")?" v"+bq.version:"")+"\n";
a9+="\n"+aX.getMessage("Installed_Version_")+"\n";a9+="    v"+bc.version+"\n"
}else{if(!bf.clean&&bc){a9+=aX.getMessage("You_are_about_to_update_a_UserScript_")+"     \n";
a9+="\n"+aX.getMessage("Name_")+"\n";a9+="    "+bq.name+((bq.version!="")?" v"+bq.version:"")+"\n";
a9+="\n"+aX.getMessage("Installed_Version_")+"\n";a9+="    v"+bc.version+"\n";
bo=true}else{a9+=aX.getMessage("You_are_about_to_install_a_UserScript_")+"     \n";
a9+="\n"+aX.getMessage("Name_")+"\n";a9+="    "+bq.name+((bq.version!="")?" v"+bq.version:"")+"\n"
}}}}if(!bf.clean&&bc){bq.options.override=bc.options.override;
bq.options.comment=bc.options.comment}bq.options.override.orig_includes=bq.includes;
bq.options.override.orig_excludes=bq.excludes;bq.options.override.orig_matches=bq.matches;
bq=b(bq);if(bc){if(bc.sync){bq.sync=bc.sync}}if(!bp&&!bf.clean&&bc){bq.enabled=bc.enabled;
if(!bq.options.awareOfChrome){bq.options.compat_forvarin=bc.options.compat_forvarin;
if(bq.options.run_at==""){bq.options.run_at=bc.options.run_at
}}var bi=i(bc);var a8=i(bq);if(bi!=a8){a9+="\n"+aX.getMessage("The_update_url_has_changed_from_0oldurl0_to__0newurl0",[bi,a8]);
bo=false}}if(!bf.clean&&bf.sync){bq.sync=bf.sync}if(!bq.includes.length&&!bq.matches.length){a9+="\n"+aX.getMessage("Note_")+"\n";
a9+="    "+aX.getMessage("This_script_does_not_provide_any__include_information_")+"\n";
a9+="    "+aX.getMessage("Tampermonkey_assumes_0urlAllHttp0_in_order_to_continue_",ai.urlAllHttp)+"    \n";
bq.includes.push(ai.urlAllHttp)}if(!bq.options.awareOfChrome){if(bf.src.search("DOMContentLoaded")!=-1){if(bq.options.run_at==""){bq.options.run_at="document-start"
}}}if(bq.options.run_at==""){bq.options.run_at="document-end"
}var bl=bq.excludes.length+bq.includes.length+bq.matches.lenght;
var bn=0;var bg=4;var ba="";ba+="\n"+aX.getMessage("Include_s__");
if(bq.options.override.includes||bq.options.override.matches){ba+=" ("+aX.getMessage("overwritten_by_user")+")"
}ba+="\n";var bh=0,be=0;for(bh=0;bh<bq.includes.length;
bh++,be++){ba+="    "+bq.includes[bh];ba+=(bl<15)?"\n":(bn<bg)?";":"\n";
if(bn++>=bg){bn=0}if(be>13){ba+="\n"+aX.getMessage("Attention_Can_not_display_all_includes_")+"\n";
break}}for(bh=0;bh<bq.matches.length;bh++,be++){ba+="    "+bq.matches[bh];
ba+=(bl<15)?"\n":(bn<bg)?";":"\n";if(bn++>=bg){bn=0
}if(be>13){ba+="\n"+aX.getMessage("Attention_Can_not_display_all_includes_")+"\n";
break}}var bb="";bn=0;if(bq.excludes.length){bb+="\n"+aX.getMessage("Exclude_s__");
if(bq.options.override.excludes){bb+=" ("+aX.getMessage("overwritten_by_user")+")"
}bb+="\n";for(var bh=0;bh<bq.excludes.length;bh++){bb+="    "+bq.excludes[bh];
bb+=(bl<15)?"\n":(bn<bg)?";":"\n";if(bn++>=bg){bn=0
}if(bh>13){bb+="\n"+aX.getMessage("Attention_Can_not_display_all_excludes_")+"\n";
break}}}a9+=ba+bb;var bj=false;for(var bk in bq.options){if(bk.search("compat_")!=-1&&bq.options[bk]===true){bj=true;
break}}if(bj){a9+="\n"+aX.getMessage("Note__A_recheck_of_the_GreaseMonkey_FF_compatibility_options_may_be_required_in_order_to_run_this_script_")+"\n\n"
}if(bf.clean){a9+="\n"+aX.getMessage("Do_you_really_want_to_factory_reset_this_script_")+"    "
}else{a9+="\n"+aX.getMessage("Do_you_want_to_continue_")
}var bd=function(){r(bq.name,bq);if(!bc||bf.clean){aB(bq.name,{ts:(new Date()).getTime()})
}if(!bf.cb){aV()}if(false){var br=function(bs){if(!bs){return
}console.log("bg: disable extension "+bs.name);d.setEnabled(bs,false)
};d.getUserscriptByName(bq.name,br)}};if(!bf.ask||(bo&&aK.values.notification_silentScriptUpdate)){bd();
if(bf.cb){bf.cb(true)}}else{chrome.tabs.sendMessage(bf.tabid,{method:"confirm",msg:a9},function(br){if(br.confirm){bd()
}if(bf.cb){bf.cb(br.confirm)}})}return true};var c=function(a9,bb,a8){var ba={method:"GET",retries:av,url:a9,};
var bc=function(be){if(be.readyState==4){if(be.status==200){var bg=function(bh){if(a8){a8(true,bh)
}};var bf={url:a9,src:be.responseText,ask:true,cb:bg};
if(bb){for(var bd in bb){if(!bb.hasOwnProperty(bd)){continue
}bf[bd]=bb[bd]}}if(!ad(bf)){if(a8){a8(false,false)}}}else{if(V){console.log("scriptClick: "+a9+" req.status = "+be.status)
}if(a8){a8(false,false)}}}};t(ba,bc)};var m=function(bb,a8){var a9=function(bd){if(!bb){return false
}for(var bc=0;bc<bb.length;bc++){if(bb[bc]==bd){return true
}}return false};var ba=function(be){var bh=0;if(!be||!be.id||!Y.has(be.id)){var bc=0;
var bf=0;var bd=function(bj,bi){if(bf==0||bi.ts<bf){if(!a9(bj)){bf=bi.ts;
bc=bj}}};Y.iterateTabs(bd);bh=Number(bc)}else{if(!a9(be.id)){bh=be.id
}}if(bh==0){var bg=function(bi){bh=bi.id;var bk=function(){chrome.tabs.remove(bh)
};var bj=function(){a8(bh,bk)};window.setTimeout(bj,100)
};chrome.tabs.create({url:chrome.extension.getURL("ask.html")+"?i18n="+aK.values.i18n},bg)
}else{a8(bh,null)}};chrome.tabs.getSelected(null,ba)
};var aS={responses:{},getNotifyId:function(a9){var a8=0;
if(a9){while(a8==0||aS.responses[a8]!=undefined){a8=((new Date()).getTime()+Math.floor(Math.random()*6121983+1)).toString()
}aS.responses[a8]=a9;if(NV){console.log("bg: registerNotifyId "+a8)
}}return a8},notify:function(bg,bk,ba,bd,bb,bf,bj){var bi=bj?aS.getNotifyId(bj):null;
var be="notify=1&title="+encodeURIComponent(bg);if(bk){be+="&text="+encodeURIComponent(bk)
}if(ba){be+="&image="+encodeURIComponent(ba)}if(bd){bd=Number(bd);
be+="&delay="+encodeURIComponent(bd)}if(bb||bi){if(bb){be+="&requestPerm="+bb+";"+encodeURIComponent(bi)
}else{be+="&notifyId="+encodeURIComponent(bi)}var bh=null;
var bc=null;var a9=function(bl){if(NV){console.log("bg: received click -> notifyId: "+bi)
}bc();bj(!bb||bl.attrName=="true")};bc=function(){if(NV){console.log("bg: remove listener -> notifyId: "+bi)
}window.removeEventListener("notify_"+bi,a9,false);
if(bh){window.clearTimeout(bh)}};window.addEventListener("notify_"+bi,a9,false);
bh=window.setTimeout(function(){bh=null;bc();bj(false)
},bd?bd+5000:10*60*1000)}if(bf){be+="&link="+encodeURIComponent(bf.text)+";"+encodeURIComponent(bf.src)
}var a8=webkitNotifications.createHTMLNotification("notification.html?"+be);
a8.show()},getPermission:function(bc,bb,ba,a8,a9,bd){aS.notify(bc,bb,ba,a8,a9,null,bd)
},showUpdate:function(bb,ba,a9,a8){aS.notify(bb,ba,a9,300000,null,a8,null)
},show:function(bb,ba,a9,a8,bc){aS.notify(bb,ba,a9,a8,null,null,bc)
}};var ak={check:function(ba,bb,bd,bc){if(!ba&&aK.values.scriptUpdateCheckPeriod==0){return
}var a8=function(bf){if(bb){var bg=aX.getMessage("Script_Update");
var bh=aX.getMessage("Check_for_userscripts_updates")+"...";
aS.show(bg,bh,chrome.extension.getURL("images/icon128.png"),5000)
}console.log("bg: check for script updates "+(bd?" for "+bd:""));
var be=function(bj,bm){if(bj){try{var bk=function(bo){if(bo){var bp=function(bs,br){var bq={tabid:bs,url:bm.url,src:bm.code,ask:true,cb:br,hash:bm.newhash!==undefined?bm.newhash:null};
ad(bq)};m(null,bp)}};var bn=aX.getMessage("There_is_an_update_for_0name0_avaiable_",bm.name)+"\n"+aX.getMessage("Click_here_to_install_it_");
var bi=aX.getMessage("Just_another_service_provided_by_your_friendly_script_updater_");
if(aK.values.notification_silentScriptUpdate){bk(true)
}else{aS.show(bi,bn,chrome.extension.getURL("images/icon128.png"),aK.values.scriptUpdateHideNotificationAfter,bk)
}}catch(bl){console.log("bg: notification error "+bl.message)
}}if(bc){bc(bj)}};ak.updateUserscripts(0,bb,bd,be)};
var a9=function(){var bf=a6();if(ba||((new Date()).getTime()-bf.scripts)>aK.values.scriptUpdateCheckPeriod){var be=function(){a8();
bf.scripts=(new Date()).getTime();k(bf)};if(ap.enabled){ap.addSyncDoneListener(be);
ap.scheduleSync(50,false)}else{be()}}else{if(bc){console.log("bg: WARN ScriptUpdater.check -> no force but callback");
window.setTimeout(bc,1)}}};a9();window.setTimeout(ak.check,5*60*1000)
},srcCmp:function(ba){var a8=G.createScriptFromSrc(ba);
if(!a8.name||a8.name==""||(a8.version==undefined)){return l
}var a9=F.getValue(a8.name,null);if(a9&&a9.system){return null
}if(a8.options.compat_uW_gmonkey){return l}if(a8.name.search("@")!=-1){return l
}else{if(a9&&a8.version==a9.version){return I}else{if(a9&&Z(a8.version,a9.version)==n){return n
}else{if(a9){return aj}else{return aj}}}}return aj},updateUserscripts:function(a9,ba,bm,bl){var bi=aa();
var bg=1;var bn=0;var be=function(){if(bg==0&&bn==0){if(ba){if(D||V||UV){console.log("No update found")
}aS.show("Narf!",aX.getMessage("No_update_found__sry_"),chrome.extension.getURL("images/icon128.png"))
}if(bl){window.setTimeout(bl,1)}}};var bk=function(bp){var bo={method:"GET",retries:av,url:a1(bp.script,true),};
bg++;(function(){var bs={tabid:a9,r:bp};var br=a1(bs.r.script);
var bq=function(bv){bg--;if(bv.readyState==4&&bv.status==200){if(V){console.log(br)
}var bu=function(){if(bs.r.meta){if(V||UV){console.log("bg: update hash of script "+bp.script.name+" to "+bs.r.meta[s])
}bs.r.script.hash=bs.r.meta[s];r(bs.r.script.name,bs.r.script,false)
}};var bt=ak.srcCmp(bv.responseText);if(bt==aj||bp.hash_different){bn++;
if(bl){bl(true,{name:bs.r.script.name,url:br,code:bv.responseText,newhash:bs.r.meta[s]})
}return}else{if(bt==I){if(V||UV){console.log("bg: found same version @ "+br)
}bu()}}}else{console.log(aX.getMessage("UpdateCheck_of_0name0_Url_0url0_failed_",[bs.r.script.name,br]))
}be()};t(bo,bq)})()};var bh=function(bp){bg++;var bo=function(bt){var bu=!!bt.meta;
var br=bu&&!!bt.meta[s]&&bt.meta[s]!=bp.script.hash;
var bq=bu&&!!bt.meta.version;var bs=bq&&(!bp.script.version||Z(bt.meta.version,bp.script.version)==aj);
if(!bu||br||!bq||bs){if(V||UV){console.log("bg: hash of script "+bp.script.name+" has changed or does not exist! running version check!")
}bp.meta=bt.meta;bp.metasrc=bt.metasrc;bp.hash_different=br;
bk(bp)}else{if(V||UV){console.log("bg: hash of script "+bp.script.name+" has NOT changed ("+bt.meta[s]+").")
}}bg--;be()};aw(bp.script,bo)};var bf=false;for(var bd in bi){var bc=bi[bd];
var a8=J(bc);if(!a8.script||!a8.cond){console.log(aX.getMessage("fatal_error")+"("+bc+")!!!");
continue}var bj=bm&&a8.script.id!=bm;var bb=!aK.values.scriptUpdateCheckDisabled&&!a8.script.enabled&&!bm;
if(bj||bb||!(i(a8.script)||a1(a8.script))){continue
}bf=true;bh(a8)}if(!bf&&bm&&bl){window.setTimeout(bl,1)
}bg--}};trup=ak;var C=function(){var bb=aa();var bd=0;
for(var a8 in bb){var bc=bb[a8];var ba=J(bc);if(!ba.script||!ba.cond){console.log("fatal error ("+bc+")!!!");
continue}if(ba.script.position&&ba.script.position>bd){bd=ba.script.position
}}var a9=new G.Script();if(a9.position>bd){bd=a9.position
}return bd};var a2=function(a8,bc,a9){var ba=function(be){return be.replace(/\/$/,"")
};var bd;if(!a9&&bc.length>1&&bc.substr(0,1)=="/"){bd=new RegExp(".*"+bc.replace(/^\//g,"").replace(/\/$/g,"")+".*","i")
}else{var bb=ai.getRegExpFromUrl(bc,aK,false,a9);if(a9){bd=new RegExp(bb)
}else{bd=new RegExp(bb,"i")}}return a8.replace(bd,"")==""
};var aJ=function(a8,ba,bc){var a9,bb=false;if(ba.inc||ba.match){for(a9 in ba.inc){if(typeof ba.inc[a9]!=="string"){console.log("bg: WARN: include["+a9+"] '"+ba.inc[a9]+"' "+(bc?"@"+bc+" ":"")+"can't be compared to '"+a8+"'")
}else{if(a2(a8,ba.inc[a9])){if(D){console.log("bg: @include '"+ba.inc[a9]+"' matched"+(bc?" ("+bc+")":""))
}bb=true;break}}}if(ba.match){for(a9 in ba.match){if(typeof ba.match[a9]!=="string"){console.log("bg: WARN: match["+a9+"] '"+ba.match[a9]+"' "+(bc?"@"+bc+" ":"")+"can't be compared to '"+a8+"'")
}else{if(a2(a8,ba.match[a9],true)){if(D){console.log("bg: @match '"+ba.match[a9]+"' matched"+(bc?" ("+bc+")":""))
}bb=true;break}}}}if(!bb){return bb}}else{bb=true}for(a9 in ba.exc){if(a2(a8,ba.exc[a9])){if(D){console.log("bg: @exclude '"+ba.exc[a9]+"' matched"+(bc?" ("+bc+")":""))
}bb=false;break}}return bb};var aa=function(){var ba=F.listValues();
var bb=[];for(var a9 in ba){var a8=ba[a9];if(a8.search(/@re$/)==-1){continue
}var bc=a8.replace(/@re$/,"");bb.push(bc)}return bb
};var aq=function(a9,be){var a8=a7();for(var ba=0;ba<a8.length;
ba++){var bb=a8[ba];if(bb.name==a9){var bc=(bb.position<be)?0.5:-0.5;
bb.position=(Number(be)+bc)}}a8=aC(a8);var bd=1;for(var ba=0;
ba<a8.length;ba++){var bb=a8[ba];bb.position=bd++;r(bb.name,bb,false)
}};var aC=function(a8){var a9=function(bb,ba){return bb.position-ba.position
};a8.sort(a9);return a8};var a7=function(a9){var bd=aa();
var ba=[];if(D||V){console.log("determineScriptsToRun @"+a9)
}for(var a8 in bd){var be=bd[a8];if(a9){var bb=F.getValue(be+U,null);
if(!bb){continue}if(!aJ(a9,bb,be)){continue}}var bc=J(be);
if(!bc.script||!bc.cond){console.log("fatal error ("+be+")!!!");
continue}if(V){console.log("bg: determineScriptsToRun: found script "+be)
}ba.push(bc.script)}return aC(ba)};var aO=function(a8){var a9=F.getValue(a8+aA,{ts:0,data:{}});
if(typeof a9.ts==="undefined"){a9.ts=0}if(typeof a9.data==="undefined"){a9.data={}
}return a9};var aB=function(a8,a9){if(a9){F.setValue(a8+aA,a9)
}else{F.deleteValue(a8+aA)}};var J=function(a8){var a9=F.getValue(a8,null);
if(a9){a9.textContent=F.getValue(a8+aL,a9.textContent);
if(!a9.textContent){a9=null}}return{script:a9,cond:F.getValue(a8+U,null)}
};var r=function(a9,a8,ba){if(ba===undefined){ba=true
}if(a8){var bc=!F.getValue(a9);var be;F.setValue(a9+U,{inc:a8.includes,match:a8.matches,exc:a8.excludes});
F.setValue(a9+aL,a8.textContent);var bb=a8;bb.textContent=null;
F.setValue(a9,bb);if(ba){if(bc){ap.scriptAddedCb(a9,a8)
}else{ap.scriptChangedCb(a9,a8)}}}else{var bd=J(a9);
F.deleteValue(a9+U);F.deleteValue(a9+aL);F.deleteValue(a9);
if(ba&&bd.script&&bd.cond){ap.scriptRemovedCb(a9,bd.script)
}}};var o=function(a9,bg,a8,bc){if(bc===undefined){bc=true
}if(bg===undefined){bg=null}var bb=ae;ae=[];for(var bd in bb){var bf=bb[bd];
try{if(a9&&bf.name==a9){if(V||SV){console.log("storage notify "+a9)
}if(bc){if(bg){var bh={data:{},ts:0};var bi=aO(bf.name);
bh.data[bg]=bi.data[bg];bh.ts=bi.ts;var ba={storage:bh};
if(bi.data[bg]===undefined){ba.removed=bg}bf.response(ba)
}else{bf.response({storage:aO(bf.name)})}}ae.push(bf)
}else{if(a8!=undefined&&bf.tabid==a8){if(V||SV){console.log("storage refresh/remove listeners of tab "+a8)
}if(bc){bf.response({refresh:true})}}else{ae.push(bf)
}}}catch(be){console.log("Storage listener notification for script "+a9+" failed! Page reload?!")
}}};var aH=function(ba,be,bc){if(bc===undefined){bc=true
}var a8=ae;ae=[];for(var a9 in a8){var bd=a8[a9];try{if(bd.name==ba&&bd.id==be){if(V||SV){console.log("send empty response "+ba+" "+be)
}if(bc){bd.response({})}}else{ae.push(bd)}}catch(bb){if(D){console.log("Storage listener clear for script "+ba+" failed! Page reload?!")
}}}};var aZ=function(a9){if(!H){window.setTimeout(function(){aZ(a9)
},10);return}var a8=function(bd){var bh=null;var bf=a9.sender;
var bc=function(bk){try{a9.postMessage(bk)}catch(bj){console.log("bg: Error sending port ("+a9.name+") message: "+JSON.stringify(bk))
}};if(bd.method=="xhr"){var be=function(){a9.disconnect()
};var ba=function(bj){bc({error:true,data:bj})};var bg=function(bj){bc({success:true,data:bj})
};var bb=function(bj){bc({change:true,data:bj})};t(bd.details,bg,bb,ba,be)
}else{if(bd.method=="addStorageListener"){if(typeof bf.tab!="undefined"){if(V||SV){console.log("storage add listener "+bd.name+" "+bd.id)
}ae.push({tabid:bf.tab.id,id:bd.id,name:bd.name,time:(new Date()).getTime(),response:bc});
bh=function(){aH(bd.name,bd.id,false)}}else{console.log(aX.getMessage("Unable_to_load_storage_due_to_empty_tabID_"));
bc({error:true})}}else{if(bd.method=="removeStorageListener"){if(typeof bf.tab!="undefined"){if(V){console.log("storage remove listener "+bd.name+" "+bd.id)
}aH(bd.name,bd.id);bc({error:false})}else{console.log("Unable to remove storage listener due to empty tabID!");
bc({error:true})}}else{if(bd.method=="saveStorageKey"){if(typeof bf.tab!="undefined"){if(bd.name){var bi=aO(bd.name);
if(V||SV){console.log("storage ("+bd.name+"): set key "+bd.key+" to '"+bd.value+"'")
}bi.data[bd.key]=bd.value;bi.ts=bd.ts;aB(bd.name,bi);
o(bd.name,bd.key)}}else{console.log(aX.getMessage("Unable_to_save_storage_due_to_empty_tabID_"))
}bc({})}}}}if(bh){a9.onDisconnect.addListener(bh)}};
a9.onMessage.addListener(a8)};var aU={ping:{allow:{insecure:true},exec:function(ba,a9,a8){a8({pong:true,instanceID:M})
}},openInTab:{allow:{script:true,extpage:true},exec:function(bc,ba,a8){var a9=function(bf){a5[bf.id]=true;
a8({tabId:bf.id})};var bb=["active"];var bd={url:bc.url};
if(bc.options){for(var be=0;be<bb.length;be++){if(bc.options[bb[be]]!==undefined){bd[bb[be]]=bc.options[bb[be]]
}}if(bc.options.insert){bd.index=ba.tab.index+1}}chrome.tabs.create(bd,a9)
}},closeTab:{allow:{script:true,extpage:true},exec:function(ba,a9,a8){if(ba.tabId&&a5[ba.tabId]){chrome.tabs.remove(ba.tabId)
}a8({})}},getTab:{allow:{script:true},exec:function(bb,a9,a8){if(typeof a9.tab!="undefined"){if(typeof aF[a9.tab.id]=="undefined"){aF[a9.tab.id]={storage:{}}
}var ba=aF[a9.tab.id];a8({data:ba})}else{console.log(aX.getMessage("Unable_to_deliver_tab_due_to_empty_tabID_"));
a8({data:null})}}},getTabs:{allow:{script:true},exec:function(ba,a9,a8){a8({data:aF})
}},saveTab:{allow:{script:true},exec:function(bc,ba,a8){if(typeof ba.tab!="undefined"){var bb={};
for(var a9 in bc.tab){bb[a9]=bc.tab[a9]}aF[ba.tab.id]=bb
}else{console.log(aX.getMessage("Unable_to_save_tab_due_to_empty_tabID_"))
}a8({})}},copyToClipboard:{allow:{script:true,extpage:true},exec:function(ba,a9,a8){if(typeof a9.tab!="undefined"){aW.copy(ba.data)
}else{console.log("bg: unable to process request!")
}a8({})}},setOption:{allow:{extpage:true},exec:function(bc,ba,a8){var bb=(ba.extpage=="options");
aK.values[bc.name]=bc.value;aK.save();var a9=function(bd){if(bb){a8({items:bd})
}else{aV();a8({})}};f(a9)}},buttonPress:{allow:{extpage:true},exec:function(bd,bb,a9){var bc=(bb.extpage=="options");
var ba=function(){a9({})};if(bd.name=="reset_simple"){au.reset(ba)
}else{if(bd.name=="reset_factory"){au.factoryReset(ba)
}else{if(bd.name=="create_tesla_data"){var a8=function(be){aW.copy({content:P.UTF8.encode(be.join("<br>")),type:"html"});
ba()};ap.createTeslaData(a8)}else{if(bd.name=="reset_chrome_sync"){ap.reset(ba)
}else{console.log("bg: Warning: unnknown button "+name);
a9({})}}}}}},modifyScriptOptions:{allow:{extpage:true},exec:function(bf,bg,ba){var bi=(bg.extpage=="options");
var a8=(bf.reload==undefined||bf.reload==true);var bc=function(){if(bf.reorder){aq()
}if(V){console.log("modifyScriptOptions "+bi)}if(a8){if(bi){var bj=function(bl){ba({items:bl,i18n:aK.values.i18n})
};f(bj)}else{if(bf.name){window.setTimeout(aV,100)}var bk=function(bm){var bl=e(bm);
ba({items:bl,i18n:aK.values.i18n});if(bf.name&&aK.values.autoReload){chrome.tabs.sendMessage(bm.id,{method:"reload"},function(bn){})
}};chrome.tabs.getSelected(null,bk)}}else{ba({})}};
if(bf.name&&bf.method=="modifyScriptOptions"){var a9=J(bf.name);
if(a9.script&&a9.cond){var bb=false;var bh=new G.Script();
for(var bd in bh.options){if(!bh.options.hasOwnProperty(bd)){continue
}if(typeof bf[bd]!=="undefined"){a9.script.options[bd]=bf[bd]
}}for(var bd in bh.options.override){if(!bh.options.override.hasOwnProperty(bd)||bd.search("merge_")==-1){continue
}if(typeof bf[bd]!=="undefined"){a9.script.options.override[bd]=bf[bd];
bb=true}}if(typeof bf.enabled!=="undefined"){a9.script.enabled=bf.enabled
}if(typeof bf.includes!=="undefined"){a9.script.options.override.use_includes=bf.includes;
a9.script.options.override.use_excludes=bf.excludes;
a9.script.options.override.use_matches=bf.matches;bb=true
}if(bb){a9.script=b(a9.script)}r(a9.script.name,a9.script);
if(typeof bf.position!=="undefined"&&a8){aq(bf.name,bf.position)
}}}else{if(bf.nid&&bf.method=="modifyNativeScript"){var be=function(bj){if(bj){if(bf.actionid=="installed"){if(bf.value=="false"){d.uninstall(bj,bc);
return true}}else{if(bf.actionid=="enabled"){d.setEnabled(bj,bf.value,bc);
return true}}bc()}};d.getUserscriptById(bf.nid,be);
return true}}bc()}},modifyNativeScript:{allow:{extpage:true},exec:function(ba,a9,a8){return aU.modifyScriptOptions.exec(ba,a9,a8)
}},saveScript:{allow:{extpage:true},exec:function(be,bb,a9){var bd=(be.reload==undefined||be.reload==true);
var a8=function(bh){if(bd){var bg=function(bi){a9({items:bi,installed:bh})
};f(bg)}else{a9({})}};if(be.clean){var bf=function(bh){var bg=function(bi){a9({cleaned:bh,items:bi});
if(bh){o(be.name,null)}};f(bg)};if(D){console.log("bg: clean userscript "+be.name)
}var bc=J(be.name);if(!bc.script||!bc.cond){console.log(aX.getMessage("fatal_error")+" ("+be.name+")!!!");
bf(false)}else{if(!ad({name:be.name,tabid:bb.tab.id,force_url:null,url:be.file_url,src:bc.script.textContent,clean:true,ask:true,save:true,cb:bf})){if(bf){bf(false)
}}}}else{if(be.code){var bf=function(bg){a9({installed:bg})
};if(be.reload==undefined||be.reload==true){bf=function(bg){aq();
a8(bg)}}be.force&=(bb.extpage=="options");var ba={tabid:bb.tab.id,force_url:be.force_url,url:be.file_url,src:be.code,ask:!aK.values.editor_easySave&&!be.force,save:true,cb:bf};
if(!ad(ba)){if(bf){bf(false)}}}else{u(be.name);aq();
a8()}}}},scriptClick:{allow:{insecure:true},exec:function(bb,ba,a9){if(typeof ba.tab!="undefined"){var a8=function(bd,bc){a9({data:null,found:bd,installed:bc});
if(bd){if(bc){aV()}}else{chrome.tabs.sendMessage(ba.tab.id,{method:"showMsg",msg:aX.getMessage("Unable_to_get_UserScript__Sry_"),id:bb.id},function(be){})
}};c(bb.url,{tabid:ba.tab.id},a8)}else{console.log(aX.getMessage("Unable_to_install_script_due_to_empty_tabID_"))
}}},registerMenuCmd:{allow:{script:true},exec:function(ba,a9,a8){if(typeof a9.tab!="undefined"){if(V||MV){console.log("MC add "+ba.id)
}q.add({tabId:a9.tab.id,url:a9.tab.url,name:ba.name,id:ba.menuId,response:a8})
}else{console.log("Unable to register menu cmd due to empty tabID!");
a8({run:false})}}},unRegisterMenuCmd:{allow:{script:true},exec:function(ba,a9,a8){if(V||MV){console.log("MC unreg "+ba.id)
}q.clearById(ba.id);a8({})}},execMenuCmd:{allow:{script:true},exec:function(ba,a9,a8){var bb=q.getById(ba.id);
if(bb){if(V||MV){console.log("MC exec "+bb.id)}bb.response({run:true,menuId:bb.id})
}else{console.log("bg: Error: unable to find MC id "+bb.id)
}a8({})}},runScriptUpdates:{allow:{extpage:true},exec:function(bb,ba,a8){if(bb.scriptid){var a9=function(bc){a8({scriptid:bb.scriptid,updatable:bc})
};ak.check(true,false,bb.scriptid,a9)}else{ak.check(true,true);
a8({})}}},getWebRequestInfo:{allow:{script:true},exec:function(bb,a9,a8){if(typeof a9.tab!="undefined"){var ba={webRequest:a4};
a8(ba)}else{console.log(aX.getMessage("Unable_to_run_scripts_due_to_empty_tabID_"));
a8({})}}},unLoad:{allow:{script:true},exec:function(bd,bb,a8){if(!bd.topframe&&(aK.values.appearance_badges=="running"||aK.values.appearance_badges=="disabled")){var bc=0;
var a9=bd.id;if(V||UV){console.log("unload check "+a9+" url: "+bd.url)
}if(a9&&Y.has(bb.tab.id)&&Y.n[bb.tab.id].stats.executed[a9]){Y.n[bb.tab.id].stats.running-=Y.n[bb.tab.id].stats.executed[a9].running;
Y.n[bb.tab.id].stats.disabled-=Y.n[bb.tab.id].stats.executed[a9].disabled;
if(Y.n[bb.tab.id].stats.running<0){Y.n[bb.tab.id].stats.running=0
}if(Y.n[bb.tab.id].stats.disabled<0){Y.n[bb.tab.id].stats.disabled=0
}var ba=bd.url+bd.params;Y.removeUrl(bb.tab.id,bc,ba);
ah(bb.tab.id)}}a8({})}},prepare:{allow:{script:true},exec:function(be,bd,a8){if(typeof bd.tab!="undefined"&&bd.tab.index>=0){var bb=(!bd.tab||!bd.tab.url||bd.tab.url.length<4)?null:bd.tab.url.substr(0,4);
if(bb=="file"||!Y.has(bd.tab.id)){p.reset(bd.tab.id,false);
if(be.topframe&&a4.headers&&a4.verified){if(!bb||(bb!="http"&&bb!="file")){console.log("bg: WARN: this should _NEVER_ happen!!!!!")
}else{var bc={tabId:bd.tab.id,frameId:be.topframe?0:1,scriptId:be.id,url:bd.tab.url};
Y.setCache(bc.tabId,bc.frameId,bc.url,p.prepare(bc))
}}}var ba=function(bh,bf){var bg={enabledScriptsCount:bh,raw:{},webRequest:a4,logLevel:aK.values.logLevel};
if(bh){if(be.raw){for(var bi=0;bi<be.raw.length;bi++){bg.raw[be.raw[bi]]=Registry.getRaw(be.raw[bi])
}}a8(bg)}else{a8({logLevel:aK.values.logLevel})}Y.n[bd.tab.id].stats.running+=bh;
Y.n[bd.tab.id].stats.disabled+=bf;Y.n[bd.tab.id].stats.executed[be.id]={disabled:bf,running:bh};
aD(bd.tab.id);if(aK.values.appearance_badges!="tamperfire"){ah(bd.tab.id)
}};var a9=function(){ah(bd.tab.id)};if(aK.values.forbiddenPages.length==0||aJ(be.url,{exc:aK.values.forbiddenPages})){bd.tab.frameId=be.topframe?0:1;
a3(bd.tab.id,{status:"complete"},bd.tab,be,ba,a9);Y.setFireCnt(bd.tab.id,null)
}else{console.log("Forbidden page: '"+be.url+"' -> Do nothing!");
a8({})}}else{a8({})}}},scriptBlockerDetected:{allow:{script:true},exec:function(bb,ba,a8){var a9=function(bd,be){var bc=(bd&&be)?aX.getMessage("Please_reload_this_page_in_order_to_run_your_userscripts_"):null;
a8({alert:bc})};an.requestPermissionEx(a9);if(Y.has(ba.tab.id)){Y.n[ba.tab.id].blocker=true;
aD(ba.tab.id)}}},startFireUpdate:{allow:{extpage:true},exec:function(bb,ba,a8){var a9=function(bc){a8({suc:bc})
};am.checkUpdate(true,bb.force,a9)}},getFireItems:{allow:{extpage:true},exec:function(bc,bb,a9){var ba=function(bh,bf,bg){if(bf==undefined){bf=null
}var be=function(bi){try{a9({image:bi,cnt:bh,scripts:bf,progress:bg});
bf=[]}catch(bj){console.log("bg: warn: action menu closed? "+JSON.stringify(bj))
}};if(bc.countonly){be(null)}else{af.createIconEx(bh,be)
}};if(!am.isReady()){ba(0,[],{action:am.status.action,state:am.status.progress});
return true}var bd=function(be){var bf=aP(bc,be);ba(be.length,bf)
};if(bc.tabid){if(bc.countonly){am.tab.getCount(bc.tabid,ba)
}else{am.tab.getItems(bc.tabid,bd)}}else{if(bc.url){if(bc.url=="*"){var a8=function(bg){var bf=[];
for(var be=0;be<1000;be++){bf.push(Math.floor(Math.random()*bg+1).toString())
}am.ids.getItems(bf,bd)};am.getMax("scripts","sid",a8)
}else{if(bc.countonly){am.url.getCount(bc.url,ba)}else{am.url.getItems(bc.url,bd)
}}}else{ba([],[])}}}},notification:{allow:{script:true,extpage:true},exec:function(bb,ba,a9){var bc=(bb.image&&bb.image!="")?bb.image:chrome.extension.getURL("images/icon128.png");
var a8=function(bd){a9({clicked:bd})};aS.show(bb.title,bb.msg,bc,bb.delay,a8)
}},localFileCB:{allow:{script:true},exec:function(ba,a9,a8){if(!a.useIframeMessage){a.listener(null,ba.data)
}a8({})}},handler:function(ba,bc,a8){if(!H){window.setTimeout(function(){requestHandler(ba,bc,a8)
},10);return true}if(V||EV||MV){console.log("back: request.method "+ba.method+" contextId "+ba.id+" tabId: "+(bc.tab?bc.tab.id:"unknown!!!"))
}var bi=aU[ba.method];if(bi){if(bi.allow&&bi.exec){var bb=chrome.extension.getID();
var be=(bc.id===bb);var bg=null;var a9=be&&bc.tab&&(bc.tab.url.search("chrome-extension")==0);
if(be&&a9){var bd=bc.tab.url.match(new RegExp("chrome-extension://"+bb+"/([a-zA-Z]*).html"));
if(bd.length==2){bg=bd[1]}bc.extpage=bg}var bj=(bg=="options");
var bh=be&&!a9;if((bi.allow.insecure)||(bi.allow.extpage&&a9)||(bi.allow.options&&bj)||(bi.allow.script&&bh)){var bf=bi.exec(ba,bc,a8);
if(bf!==undefined){return bf}}else{if(D){console.log("back: method "+ba.method+" doesn't have the permission to be called from this context")
}return false}}else{console.log("b: invalid implementation of "+ba.method);
return false}}else{console.log("b: "+aX.getMessage("Unknown_method_0name0",ba.method));
return false}if(V){console.log("back: request.method "+ba.method+" end!")
}return true}};var q={commands:[],add:function(a8){q.commands.push(a8)
},list:function(){var a9=[];for(var a8 in q.commands){if(!q.commands.hasOwnProperty(a8)){continue
}var ba=q.commands[a8];a9.push(ba)}return a9},listByTabId:function(bb){var ba=[];
for(var a8 in q.commands){if(!q.commands.hasOwnProperty(a8)){continue
}var bd=q.commands[a8];if(bd.tabId==bb){var a9=false;
for(var bc=0;bc<ba.length;bc++){if(ba[bc].name==bd.name){a9=true;
break}}if(!a9){ba.push(bd)}}}return ba},clearByTabId:function(a8){q.getByTabId(a8)
},getByTabId:function(bb){var ba=[];var a8=q.commands;
q.commands=[];for(var a9 in a8){if(!a8.hasOwnProperty(a9)){continue
}var bc=a8[a9];if(bc.tabId!=bb){q.commands.push(bc)
}else{ba.push(bc);if(V||MV){console.log("MC remove "+bc.id)
}}}return ba},clearById:function(a8){q.getById(a8)},getById:function(bc){var ba=null;
var a8=q.commands;q.commands=[];for(var a9 in a8){if(!a8.hasOwnProperty(a9)){continue
}var bb=a8[a9];if(bb.id!=bc){q.commands.push(bb)}else{ba=bb
}}if(V||MV){console.log("MC remove "+ba.id)}return ba
}};var aP=function(ba,be){var bc=[];var bh="http://...";
if(ba.tabid&&!Y.isEmpty(ba.tabid)){var bb=function(bj,bi){bh=bj;
return true};Y.iterateUrls(ba.tabid,bb)}else{if(ba.url){bh=ba.url
}}bc.push({name:aX.getMessage("Enable_Sort_Cache"),id:"fire_sort_cache_enabled",checkbox:true,option:true,enabled:aK.values.fire_sort_cache_enabled,desc:""});
var bf=be.length?" ("+be.length+")":"";bc.push({name:aX.getMessage("Available_Userscripts")+bf,heading:true,scriptTab:true});
bc=bc.concat(ac(be,true));bc.push({name:aX.getMessage("Settings"),heading:true});
bc.push({name:aX.getMessage("General"),section:true});
var bg="",bd="";var a9=a6();if(a9.fire.db_version==0){bd="?"
}else{var a8=a9.fire.db_version*1000;bd=new Date(a8).toString()
}bg+=aX.getMessage("Current_Index_")+"<br><br>";bg+=aX.getMessage("Date_")+" "+bd+"<br>";
bg+=aX.getMessage("Entries_")+" "+((a9.fire.entries)?a9.fire.entries:"?")+"<br><br><br>";
bc.push({name:"TamperFire DB",fire:true,fireInfo:true,value:bg,versionDB:a8});
bc.push({name:aX.getMessage("Check_for_Updates"),fname:aX.getMessage("Force_Update"),fire:true,fireUpdate:true});
bc.push({name:"Search by URL",id:"searchByURL",search:true,value:bh,desc:""});
return bc};var e=function(bb){var a9=bb?bb.url:null;
if(V){console.log("createActionMenuItems "+a9)}var a8=[];
var ba=[];if(aK.values.fire_enabled){ba.push({name:aX.getMessage("_0_scripts_found"),image:chrome.extension.getURL("images/download.gif"),doneImage:chrome.extension.getURL("images/fire.png"),tabid:bb.id,tamperfire:true,url:chrome.extension.getURL("fire.html?tab="+bb.id),newtab:true});
ba.push(ar())}ba=ba.concat(v(bb));if(!ba.length){if(aK.values.forbiddenPages.length==0||aJ(a9,{exc:aK.values.forbiddenPages})){ba.push({name:aX.getMessage("No_script_is_running"),image:chrome.extension.getURL("images/info.png")})
}else{ba.push({name:aX.getMessage("This_page_is_blacklisted_at_the_security_settings"),image:chrome.extension.getURL("images/critical.png")})
}}ba.push({name:aX.getMessage("Get_new_scripts___"),image:chrome.extension.getURL("images/script_download.png"),url:"http://userscripts.org",newtab:true});
ba.push({name:aX.getMessage("Add_new_script___"),image:chrome.extension.getURL("images/script_add.png"),url:chrome.extension.getURL("options.html")+"?open=0",newtab:true});
a8=a8.concat(ba);a8.push(ar());var bc=w(bb.id);if(bc.length){bc.push(ar())
}bc.push({name:aX.getMessage("Check_for_userscripts_updates"),image:chrome.extension.getURL("images/update.png"),runUpdate:true});
bc.push({name:aX.getMessage("Report_a_bug"),image:chrome.extension.getURL("images/bug.png"),url:"http://tampermonkey.net/bug",newtab:true});
bc.push({name:aX.getMessage("Please_consider_a_donation"),image:chrome.extension.getURL("images/amor.png"),url:"http://tampermonkey.net/donate.html",newtab:true});
if(bc.length){bc.push(ar())}bc.push({name:aX.getMessage("Options"),image:chrome.extension.getURL("images/agt_utilities.png"),url:chrome.extension.getURL("options.html"),newtab:true});
bc.push(aG());a8=a8.concat(bc);return a8};var f=function(a9){var bb=[];
var bd=[];var a8=1;bb.push({name:aX.getMessage("Installed_userscripts"),heading:true,scriptTab:true});
var bc=v(null,true);if(!bc.length){bc.push({name:aX.getMessage("No_script_is_installed"),image:chrome.extension.getURL("images/info.png")});
bc.push({name:aX.getMessage("Get_some_scripts___"),image:chrome.extension.getURL("images/edit_add.png"),url:"http://userscripts.org",newtab:true})
}else{a8=bc.length}var ba=function(bl){for(var bn=0;
bn<bl.length;bn++){var bj=bl[bn];var bm={name:bj.name,id:bj.id,icon:bj.icon,code:null,position:0,positionof:a8,enabled:bj.enabled,version:bj.version,description:bj.description,nativeScript:true};
bb.push(bm)}bb.push({name:"Version",id:null,version:true,value:chrome.extension.getVersion()});
bb.push({name:aX.getMessage("New_userscript"),id:null,image:chrome.extension.getURL("images/script_add.png"),icon:chrome.extension.getURL("images/txt.png"),code:aK.values.scriptTemplate,nnew:true,position:-1,positionof:a8,enabled:true,userscript:true});
bb=bb.concat(bc);bb.push(ar());bb.push({name:aX.getMessage("Settings"),heading:true});
var bp=[];var bq=[];var bh=[];var bg=[];var bi=[];var bo=[];
var bf=[];var be=[];var bk=[];bp.push({name:aX.getMessage("General"),section:true});
bp.push({name:aX.getMessage("Config_Mode"),id:"configMode",level:0,option:true,select:[{name:aX.getMessage("Novice"),value:0},{name:aX.getMessage("Beginner"),value:50},{name:aX.getMessage("Advanced"),value:100}],value:aK.values.configMode,desc:aX.getMessage("Changes_the_number_of_visible_config_options")});
bp.push({name:aX.getMessage("Language"),id:"i18n",level:0,option:true,reload:true,warning:aX.getMessage("A_reload_is_required"),select:[{name:"Browser Default",value:null},{name:aX.getOriginalMessage("English"),value:"en"},{name:aX.getOriginalMessage("German"),value:"de"},{name:aX.getOriginalMessage("French"),value:"fr"},{name:aX.getOriginalMessage("Spanish"),value:"es"},{name:aX.getOriginalMessage("Polish"),value:"pl"},{name:aX.getOriginalMessage("Chinese__Simplified_"),value:"zh_CN"},{name:aX.getOriginalMessage("Chinese__Traditional_"),value:"zh_TW"},{name:aX.getOriginalMessage("Japanese"),value:"ja"}],value:aK.values.i18n});
bp.push({name:aX.getMessage("Make_includes_more_safe"),id:"safeUrls",level:60,option:true,checkbox:true,enabled:aK.values.safeUrls,desc:aX.getMessage("Includes_more_safe_example")});
bp.push({name:aX.getMessage("Fix_includes"),id:"tryToFixUrl",level:60,option:true,checkbox:true,enabled:aK.values.tryToFixUrl,desc:aX.getMessage("Fix_includes_example")});
bp.push({name:aX.getMessage("Auto_reload_on_script_enabled"),level:20,id:"autoReload",option:true,checkbox:true,enabled:aK.values.autoReload,desc:aX.getMessage("Auto_reload_on_script_enabled_desc")});
bp.push({name:aX.getMessage("Debug_scripts"),level:100,id:"debug",option:true,checkbox:true,enabled:aK.values.debug,desc:""});
bp.push({name:aX.getMessage("Show_fixed_source"),level:100,id:"showFixedSrc",option:true,checkbox:true,enabled:aK.values.showFixedSrc,desc:""});
bp.push({name:"LogLevel",id:"logLevel",level:0,option:true,select:[{name:"Trace",value:100},{name:"Verbose",value:80},{name:"Debug",value:60},{name:"Error",value:0}],value:aK.values.logLevel,desc:""});
be.push({name:aX.getMessage("TESLA")+" BETA",section:true,level:50,needsave:true});
be.push({name:aX.getMessage("Enable_TESLA"),id:"sync_enabled",level:50,option:true,checkbox:true,enabled:aK.values.sync_enabled,desc:aX.getMessage("Tampermonkey_External_Script_List_Access")});
be.push({name:aX.getMessage("Sync_Type"),id:"sync_type",enabler:true,level:50,option:true,select:[{name:"pastebin.com",value:SyncInfo.types.ePASTEBIN},{name:"Chrome Sync (Beta)",value:SyncInfo.types.eCHROMESYNC,enable:{sync_id:0,create_tesla_data:0}}],value:aK.values.sync_type});
be.push({name:aX.getMessage("Sync_Id"),id:"sync_id",enabledBy:"sync_type",level:50,text:true,value:aK.values.sync_id,option:true});
be.push({name:aX.getMessage("Create_Exportable_Data"),id:"create_tesla_data",enabledBy:"sync_type",button:true,ignore:true,level:60,warning:aX.getMessage("Copy_exportable_data_to_clipboard_Ok_")});
bg.push({name:aX.getMessage("Appearance"),section:true,level:20});
bg.push({name:aX.getMessage("Update_Notification"),id:"notification_showTMUpdate",level:20,option:true,checkbox:true,enabled:aK.values.notification_showTMUpdate,desc:""});
bg.push({name:aX.getMessage("Icon_badge_info"),id:"appearance_badges",level:50,option:true,select:[{name:aX.getMessage("Off"),value:"off"},{name:aX.getMessage("Running_scripts"),value:"running"},{name:aX.getMessage("Unique_running_scripts"),value:"running_unique"},{name:aX.getMessage("Disabled_scripts"),value:"disabled"},{name:"TamperFire",value:"tamperfire"}],value:aK.values.appearance_badges,desc:""});
bo.push({name:aX.getMessage("TamperFire"),section:true});
bo.push({name:aX.getMessage("Enable_TamperFire"),id:"fire_enabled",level:0,option:true,checkbox:true,enabled:aK.values.fire_enabled,desc:""});
bo.push({name:aX.getMessage("Enable_Sort_Cache"),id:"fire_sort_cache_enabled",level:100,checkbox:true,option:true,enabled:aK.values.fire_sort_cache_enabled,desc:""});
bo.push({name:aX.getMessage("Update_interval"),id:"fire_updatePeriod",level:50,option:true,select:[{name:aX.getMessage("Never"),value:0},{name:aX.getMessage("Every_Day"),value:24*60*60*1000},{name:aX.getMessage("Every_Week"),value:7*24*60*60*1000},{name:aX.getMessage("Every_2_Weeks"),value:14*24*60*60*1000},{name:aX.getMessage("Every_Month"),value:30*24*60*60*1000}],value:aK.values.fire_updatePeriod,desc:""});
bq.push({name:aX.getMessage("Editor"),section:true,level:20});
bq.push({name:aX.getMessage("Enable_Editor"),id:"editor_enabled",level:100,option:true,checkbox:true,enabled:aK.values.editor_enabled,reload:true,warning:aX.getMessage("A_reload_is_required"),desc:""});
bq.push({name:aX.getMessage("Key_Mapping"),id:"editor_keyMap",level:50,option:true,reload:true,warning:aX.getMessage("A_reload_is_required"),select:[{name:aX.getMessage("Windows"),value:"windows"},{name:aX.getMessage("Emacs"),value:"emacs"},{name:aX.getMessage("Vim"),value:"vim"}],value:aK.values.editor_keyMap});
bq.push({name:aX.getMessage("Indentation_Width"),id:"editor_indentUnit",level:50,option:true,select:[{name:aX.getMessage("1"),value:1},{name:aX.getMessage("2"),value:2},{name:aX.getMessage("3"),value:3},{name:aX.getMessage("4"),value:4},{name:aX.getMessage("5"),value:5},{name:aX.getMessage("6"),value:6},{name:aX.getMessage("7"),value:7},{name:aX.getMessage("8"),value:8},{name:aX.getMessage("9"),value:9},{name:aX.getMessage("10"),value:10},{name:aX.getMessage("11"),value:11}],value:aK.values.editor_indentUnit,desc:""});
bq.push({name:aX.getMessage("Indent_with"),id:"editor_indentWithTabs",level:50,option:true,select:[{name:aX.getMessage("Tabs"),value:"tabs"},{name:aX.getMessage("Spaces"),value:"spaces"}],value:aK.values.editor_indentWithTabs,desc:""});
bq.push({name:aX.getMessage("TabMode"),id:"editor_tabMode",level:50,option:true,select:[{name:aX.getMessage("Classic"),value:"classic"},{name:aX.getMessage("Smart"),value:"smart"}],value:aK.values.editor_tabMode,desc:""});
bq.push({name:aX.getMessage("Reindent_on_typing"),id:"editor_electricChars",level:50,option:true,checkbox:true,enabled:aK.values.editor_electricChars,desc:""});
bq.push({name:aX.getMessage("Show_Line_Numbers"),id:"editor_lineNumbers",level:20,option:true,checkbox:true,enabled:aK.values.editor_lineNumbers,desc:""});
bq.push({name:aX.getMessage("Enable_easySave"),id:"editor_easySave",level:20,option:true,checkbox:true,enabled:aK.values.editor_easySave,desc:""});
bh.push({name:aX.getMessage("Script_Update"),section:true,level:0});
bh.push({name:aX.getMessage("Check_disabled_scripts"),id:"scriptUpdateCheckDisabled",level:0,option:true,checkbox:true,enabled:aK.values.scriptUpdateCheckDisabled,desc:""});
bh.push({name:aX.getMessage("Check_interval"),id:"scriptUpdateCheckPeriod",level:0,option:true,select:[{name:aX.getMessage("Never"),value:0},{name:aX.getMessage("Every_Hour"),value:1*60*60*1000},{name:aX.getMessage("Every_6_Hours"),value:6*60*60*1000},{name:aX.getMessage("Every_12_Hour"),value:12*60*60*1000},{name:aX.getMessage("Every_Day"),value:24*60*60*1000},{name:aX.getMessage("Every_Week"),value:7*24*60*60*1000}],value:aK.values.scriptUpdateCheckPeriod,desc:""});
bh.push({name:aX.getMessage("Dont_ask_me_for_simple_script_updates"),id:"notification_silentScriptUpdate",level:80,option:true,checkbox:true,enabled:aK.values.notification_silentScriptUpdate,desc:""});
bh.push({name:aX.getMessage("Hide_notification_after"),id:"scriptUpdateHideNotificationAfter",level:50,option:true,select:[{name:aX.getMessage("Never"),value:0},{name:aX.getMessage("15_Seconds"),value:15*1000},{name:aX.getMessage("30_Seconds"),value:30*1000},{name:aX.getMessage("1_Minute"),value:60*1000},{name:aX.getMessage("5_Minutes"),value:5*60*1000},{name:aX.getMessage("1_Hour"),value:60*60*1000}],value:aK.values.scriptUpdateHideNotificationAfter,desc:""});
bi.push({name:aX.getMessage("Security"),section:true,level:50});
bi.push({name:aX.getMessage("Allow_overwrite_javascript_settings"),id:"scriptblocker_overwrite",level:50,option:true,select:[{name:aX.getMessage("Yes"),value:"yes"},{name:aX.getMessage("No"),value:"no"}],value:aK.values.scriptblocker_overwrite,desc:aX.getMessage("Tampermonkey_can_not_work_when_javascript_is_disabled")});
bi.push({name:aX.getMessage("Add_TM_to_CSP"),id:"webrequest_fixCSP",level:50,option:true,select:[{name:aX.getMessage("Yes"),value:"yes"},{name:aX.getMessage("No"),value:"no"}],value:aK.values.webrequest_fixCSP,desc:aX.getMessage("Tampermonkey_might_not_be_able_to_provide_access_to_the_unsafe_context_when_this_is_disabled")});
bi.push({name:aX.getMessage("Allow_headers_to_be_modified_by_scripts"),id:"webrequest_modHeaders",level:50,option:true,select:[{name:aX.getMessage("Yes"),value:"yes"},{name:aX.getMessage("Auto"),value:"auto"},{name:aX.getMessage("No"),value:"no"}],value:aK.values.webrequest_modHeaders,desc:""});
bi.push({name:aX.getMessage("Forbidden_Pages"),id:"forbiddenPages",level:50,option:true,input:true,array:true,value:aK.values.forbiddenPages,desc:""});
bi.push({name:aX.getMessage("_require_blacklist"),id:"require_blacklist",level:80,option:true,input:true,array:true,value:aK.values.require_blacklist,desc:""});
bf.push({name:aX.getMessage("Userscripts"),section:true,level:80});
bf.push({name:aX.getMessage("New_script_template_"),id:"scriptTemplate",level:80,option:true,input:true,value:aK.values.scriptTemplate});
bk.push({name:aX.getMessage("Reset_Section"),section:true,level:50});
bk.push({name:aX.getMessage("Restart_Tampermonkey"),id:"reset_simple",level:50,button:true,reload:true,value:0,warning:aX.getMessage("This_will_restart_Tampermonkey_Ok_")});
bk.push({name:aX.getMessage("Factory_Reset"),id:"reset_factory",level:80,button:true,reload:true,value:0,warning:aX.getMessage("This_will_remove_all_scripts_and_reset_all_settings_Ok_")});
if(h.hasPermission){bk.push({name:aX.getMessage("Chrome_Sync_Reset"),id:"reset_chrome_sync",level:80,button:true,reload:false,value:0,warning:aX.getMessage("This_will_remove_all_stored_data_from_google_sync_Ok_")})
}bb=bb.concat(bp).concat(bg).concat(bh).concat(be).concat(bo).concat(bq).concat(bi).concat(bf).concat(bk);
bb.push({name:"EOS",section:true,endsection:true});
bb.push(ar());if(false){bb.push({name:aX.getMessage("Registered_menu_cmds"),heading:true});
bd=w();if(bd.length){bd.push(ar())}}bb=bb.concat(bd);
if(a9){a9(bb)}};d.getAllUserscripts(ba)};var ar=function(){return divider={name:"",divider:true}
};var aG=function(){var a8="version="+chrome.extension.getVersion()+"&ext="+chrome.extension.getID().substr(0,4);
return{image:chrome.extension.getURL("images/info.png"),urls:[{name:" "+aX.getMessage("About"),url:"http://tampermonkey.net/about.html?"+a8,newtab:true},{name:" "+aX.getMessage("Changelog"),url:"http://tampermonkey.net/changelog.php?"+a8,newtab:true}]}
};var w=function(bb){var ba=[];var a8=(bb==null||bb==undefined)?q.list():q.listByTabId(bb);
for(var a9 in a8){if(!a8.hasOwnProperty(a9)){continue
}var bd=a8[a9];var bc={name:bd.name,id:bd.id,image:chrome.extension.getURL("images/package_utilities.png"),menucmd:true};
ba.push(bc)}return ba};var ac=function(a8,bd){var bc=[];
for(var bb in a8){var ba=a8[bb];var be;if(bd){be=ba
}else{be={name:ba.name,id:ba.id,system:ba.system,enabled:ba.enabled,position:ba.position}
}be.file_url=ba.downloadURL||ba.fileURL;be.positionof=a8.length;
be.userscript=ba.options.user_agent?false:true;be.user_agent=ba.options.user_agent;
if(!ba.icon64&&!ba.icon){be.icon64=chrome.extension.getURL(be.user_agent?"images/user_agent.png":"images/txt.png")
}if(ba.options){var a9=new G.Script();for(var bf in a9.options){if(!a9.options.hasOwnProperty(bf)){continue
}be[bf]=ba.options[bf]}}if(bd){be.code=ba.textContent;
be.sync=ba.sync;if(aK.values.showFixedSrc){be.code=a0.mkCompat(ba.textContent,ba)
}}bc.push(be)}return bc};var v=function(bc,ba){if(ba==undefined){ba=false
}var a9=bc?bc.url:null;var a8=[];if(bc){if(!Y.isEmpty(bc.id)){var bb=function(bh,be){if(V||UV){console.log("Found at ctxRegistry["+bc.id+"].urls -> "+bh)
}var bi=a7(bh);for(var bg=0;bg<bi.length;bg++){var bf=false;
for(var bd=0;bd<a8.length;bd++){if(a8[bd].name==bi[bg].name){bf=true;
break}}if(!bf){a8.push(bi[bg])}}};Y.iterateUrls(bc.id,bb)
}else{console.log("bg: WARN: ctxRegistry["+bc.id+"].urls is empty!")
}}else{a8=a7(a9)}return ac(a8,ba)};var aW={copy:function(a9){var a8=document.createElement("iframe");
a8.setAttribute("sandbox","allow-same-origin");document.body.appendChild(a8);
try{if(a9.type=="html"){a8.contentDocument.documentElement.innerHTML=a9.content
}else{a8.contentDocument.documentElement.textContent=a9.content
}a8.contentDocument.designMode="on";a8.contentDocument.execCommand("selectAll",false,null);
a8.contentDocument.execCommand("copy",false,null);a8.contentDocument.designMode="off"
}catch(ba){console.log("bg: clipboard Error: "+ba.message)
}a8.parentNode.removeChild(a8);a8=null}};var x={permContentSettings:"contentSettings",permStorage:"storage",permissions:null,lock:false,clear:function(){if(x.lock){console.log("perm: clear, but locked")
}x.permissions=null},get:function(a8){var a9=function(ba){ai.forEach(ba.permissions,function(bc,bb){x.permissions[bc]=true
});x.lock=false;if(a8){a8()}};x.lock=true;x.permissions={};
chrome.permissions.getAll(a9)},has:function(ba,a8){if(x.lock){var bb=function(){x.has(ba,a8)
};window.setTimeout(bb,50);return}if(!x.permissions){var a9=function(){x.has(ba,a8)
};x.get(a9);return}if(a8){a8(!!x.permissions[ba])}},ask:function(bb,be,bd,a8){var bc=chrome.extension.getURL("images/icon128.png");
var ba=function(bf){if(a8){a8(bf)}};var a9=function(bf){if(bf){if(!x.permissions){x.permissions={}
}x.permissions[bb]=true;ba(bf);return}ba(false)};aS.getPermission(be,bd,bc,60000,bb,a9)
},remove:function(ba,a8){var a9=function(bb){if(x.permissions){x.permissions[ba]=false
}if(a8){a8(bb)}};chrome.permissions.remove({permissions:[ba]},a9)
}};var h={asked:false,hasPermission:null,init:function(){var a8=function(a9){h.hasPermission=a9;
if(D){console.log("bg: storagePermission: hasPermission = "+a9)
}};x.has(x.permStorage,a8)},askForPermission:function(a8){x.ask(x.permStorage,aX.getMessage("Storage_permission_is_needed_"),aX.getMessage("Click_here_to_allow_TM_to_use_Google_sync"),a8)
},requestPermissionEx:function(a8){var a9=function(bb){if(a8){a8(bb,true)
}if(bb&&!h.hasPermission){h.hasPermission=true;au.reset()
}};var ba=function(bb){if(h.asked){if(a8){a8(bb,false)
}}else{if(bb){a8(bb,false)}else{h.askForPermission(a9)
}}h.asked=true};x.has(x.permStorage,ba)},remove:function(a8){x.remove(x.permStorage,a8)
}};var an={asked:false,runCheck:false,hasPermission:false,init:function(){var a8=function(a9){an.hasPermission=a9;
an.runCheck=an.hasPermission&&(aK.values.scriptblocker_overwrite=="yes");
if(D){console.log("bg: contentSettings: runCheck = "+an.runCheck+" hasPerm = "+an.hasPermission)
}};x.has(x.permContentSettings,a8)},askForPermission:function(a8){x.ask(x.permContentSettings,aX.getMessage("A_script_blocker_was_detected_"),aX.getMessage("Click_here_to_allow_TM_to_override_the_script_blocker"),a8)
},requestPermissionEx:function(a8){if(aK.values.scriptblocker_overwrite!="yes"){if(a8){a8()
}return}var a9=function(bb){if(a8){a8(bb,true)}if(bb&&!an.runCheck){an.runCheck=true;
au.reset()}};var ba=function(bb){if(an.asked){if(a8){a8(bb,false)
}}else{if(bb){a8(bb,false)}else{an.askForPermission(a9)
}}an.asked=true};x.has(x.permContentSettings,ba)},remove:function(a8){x.remove(x.permContentSettings,a8)
}};var au={run:function(bf,a8){var bd=1;var be=function(){if(a8){a8()
}window.location.reload()};var a9=function(){if(--bd==0){be()
}};if(bf=="config"){var bc=F.listValues();for(var bb in bc){var ba=bc[bb];
if(ba.search(aL)==-1){continue}if(ba.search(U)==-1){continue
}if(ba.search(aA)==-1){continue}F.deleteValue(ba)}}else{if(bf=="factory"){if(am.isReady()){bd++;
am.clean(a9)}if(an.hasPermission){bd++;an.remove(a9)
}if(h.hasPermission){bd++;h.remove(a9)}bd++;F.deleteAll(a9)
}}a9()},reset:function(a8){au.run(null,a8)},factoryReset:function(a8){au.run("factory",a8)
},configReset:function(a8){au.run("config",a8)}};var d={getAll:function(a8){try{chrome.management.getAll(a8)
}catch(a9){a8([])}},getAllUserscripts:function(a8){var a9=function(bd){var bb=[];
for(var ba in bd){if(!bd.hasOwnProperty(ba)){continue
}var bc=bd[ba];if(bc.homepageUrl==""&&bc.hostPermissions.length==0&&bc.permissions.length==0&&!bc.icons&&!bc.updateUrl&&bc.isApp==false&&bc.optionsUrl==""&&bc.mayDisable==true){bc.icon="chrome://extension-icon/"+bc.id+"/48/1";
bb.push(bc)}}if(a8){a8(bb)}};chrome.management.getAll(a9)
},getUserscriptByName:function(a9,a8){var ba=function(bd){for(var bb=0;
bb<bd.length;bb++){var bc=bd[bb];if(bc.name==a9){a8(bc);
return}}a8(null)};this.getAllUserscripts(ba)},getUserscriptById:function(ba,a8){var a9=function(bd){for(var bb=0;
bb<bd.length;bb++){var bc=bd[bb];if(bc.id==ba){a8(bc);
return}}a8(null)};this.getAllUserscripts(a9)},setEnabled:function(ba,a9,a8){try{chrome.management.setEnabled(ba.id,a9,a8);
return}catch(bb){}if(a8){window.setTimeout(a8,1)}},uninstall:function(a9,a8){try{chrome.management.uninstall(a9.id,a8);
return}catch(ba){}if(a8){window.setTimeout(a8,1)}}};
exte=d;var af={initCanvas:function(a8){this.canvas=a8;
this.context=this.canvas.getContext("2d")},init:function(a8,ba){var a9=null;
if(this.canvas){a9=this.canvas}else{a9=document.createElement("canvas");
if(D){document.body.appendChild(a9)}}a9.height=ba;a9.width=a8;
this.initCanvas(a9)},initFromImage:function(bd,bf,be,bc,a8,bh,a9){var ba=document.createElement("img");
if(D){document.body.appendChild(ba)}var bg=this;var bb=function(){bg.init(bf,be);
if(bh){bg.context.scale(bh,bh)}bg.context.drawImage(ba,bc,a8);
bg.loaded=true;if(ba.parentNode){ba.parentNode.removeChild(ba)
}ba=null;if(a9){a9()}};ba.onload=bb;ba.src=bd},printNr:function(a8,bb,ba,a9){this.context.font="22pt Arial bold";
this.context.fillStyle="rgba("+a9.join(",")+", 1)";
this.context.fillText(ba,a8,bb)},circle:function(a8,bc,ba,a9){var bb="rgba("+a9.join(",")+", 1)";
this.context.fillStyle=bb;this.context.beginPath();
this.context.arc(a8,bc,ba,0,2*Math.PI,true);this.context.fill()
},rect:function(bc,bb,a8,ba,bd,a9){if(bd==null){bd=true
}if(bd){this.context.fillStyle="rgba("+a9.join(",")+", 0.99)";
this.context.fillRect(bc,bb,a8,ba)}else{this.context.fillStyle="rgb("+a9.join(",")+", 1)";
this.context.beginPath();this.context.moveTo(bc,bb);
this.context.lineTo(bc+a8,bb);this.context.lineTo(bc+a8,bb+ba);
this.context.lineTo(bc,bb+ba);this.context.lineTo(bc,bb);
this.context.stroke()}},rrect:function(a9,bd,a8,ba,be,bc){var bb=be;
this.circle(a9+bb,bd+bb,be,bc);this.circle(a8-bb,bd+bb,be,bc);
this.circle(a9+bb,ba-bb,be,bc);this.circle(a8-bb,ba-bb,be,bc);
this.rect(a9+be,bd,a8-a9-2*be,ba-bd,true,bc);this.rect(a9,bd+be,a8-a9,ba-bd-2*be,true,bc)
},createIconEx:function(bd,a8){var ba=140;var bc=140;
var be=this;var bb=1;var a9=function(){var bh=14;var bg=25;
var bf=116-(bd>10?bh:0)-(bd>100?bh:0)-(bd>1000?bh:0)-(bd>10000?bh:0);
af.rrect(bf,0,ba,bg,4,[200,0,0]);var bi=3;af.rrect(bf+bi,0+bi,bc-bi,bg-bi,4,[190,0,0]);
af.printNr(bf+4,bg-3,bd,[240,250,240]);if(a8){a8(be.canvas.toDataURL())
}};af.initFromImage(chrome.extension.getURL("images/icon128.png"),ba,bc,6,6,1,a9)
},toPNG:function(){return this.canvas.toDataURL()}};
var j=function(){chrome.browserAction.setIcon({path:chrome.extension.getURL("images/icon_grey.png")});
chrome.browserAction.setPopup({popup:"action.html"});
chrome.browserAction.setTitle({title:"Tampermonkey"})
};var ah=function(a9){var bb=0;var ba=function(){if(D){console.log("bg: setBadge: "+bb)
}if(bb==0){chrome.browserAction.setBadgeText({text:"",tabId:a9})
}else{chrome.browserAction.setBadgeText({text:bb.toString(),tabId:a9})
}};if(aK.values.appearance_badges=="off"){bb=0}else{if(aK.values.appearance_badges=="running"){if(a9&&Y.has(a9)){bb=Y.n[a9].stats.running
}}else{if(aK.values.appearance_badges=="running_unique"){if(a9&&Y.has(a9)&&Y.n[a9].cache){bb=Y.n[a9].cache.runners.length
}}else{if(aK.values.appearance_badges=="disabled"){if(a9&&Y.has(a9)){bb=Y.n[a9].stats.disabled
}}else{if(aK.values.appearance_badges=="tamperfire"){var a8=function(bc){bb=bc;
ba()};am.tab.getCount(a9,a8);return}}}}}ba()};var al={infoChanged:[],redirects:{},addInfoChangedListener:function(a8){al.infoChanged.push(a8)
},runInfoChangedListener:function(){for(var a8=0;a8<al.infoChanged.length;
a8++){al.infoChanged[a8](a4)}},headerCheck:function(ba){if(ba.tabId>=0&&a4.verified==false){if(D||UV){console.log("bg: verify that webRequest is working at "+ba.type+" to "+ba.url)
}var bd=false;var bc=new RegExp("^"+a4.testprefix);
for(var a9=0;a9<ba.requestHeaders.length;a9++){var bb=ba.requestHeaders[a9];
if(UV){console.log(" #: "+bb.name+" -> "+bb.value)}if(bb.name.search(bc)==0){if(D){console.log("bg: found "+bb.name+" @webRequest :)")
}bd=true}}if(!bd&&a4.verifyCnt-->0){return}a4.headers=bd;
a4.verified=true;al.runInfoChangedListener();if(D){console.log("bg: verified webRequest "+(a4.headers?"":"not ")+"being working")
}try{chrome.webRequest.onSendHeaders.removeListener(al.headerCheck)
}catch(a8){a4.headers=false;a4.verified=true;al.runInfoChangedListener()
}}},extractInfoFromURL:function(a9){var bb="";var ba="http";
if(a9){var a8=a9.toLowerCase();if(a8.indexOf("://")!=-1){ba=a8.substr(0,a9.indexOf("://"));
a8=a8.substr(a9.indexOf("://")+3)}if(a8.indexOf("/")!=-1){a8=a8.substr(0,a8.indexOf("/"))
}if(a8.indexOf("@")!=-1){a8=a8.substr(a8.indexOf("@")+1)
}if(a8.indexOf(":")>0){a8=a8.substr(0,a8.indexOf(":"))
}bb=a8}return{domain:bb,protocol:ba}},detectRedirect:function(a8){var bf=a8.responseHeaders;
var ba=a8.requestId;var bd=false;var be=false;var bg=(a8.type=="xmlhttprequest");
if(!bg&&!aK.values.webrequest_fixCSP){return{}}if(bg&&al.redirects[ba]){bd=true
}for(var bc=0;bc<bf.length;bc++){var bh=bf[bc];if(bg&&bh.name=="Location"){var a9=function(){var bi=ba;
if(bd){window.clearTimeout(al.redirects[ba].to)}var bj=function(){delete (al.redirects[bi])
};al.redirects[bi]={url:bh.value,to:window.setTimeout(bj,10000)}
};a9();break}else{if(aK.values.webrequest_fixCSP&&(bh.name=="X-WebKit-CSP"||bh.name=="X-Content-Security-Policy")){var bb=bh.value.replace(/script-src /,"script-src chrome-extension://"+chrome.extension.id+"/ 'unsafe-inline' 'unsafe-eval' ");
if(D){console.log('csp: replace "'+bh.value+'" with "'+bb+'"')
}bh.value=bb;bf[bc]=bh;be=true}}}if(bd){bf.push({name:"TM-finalURL",value:al.redirects[ba].url});
be=true}if(be){return{responseHeaders:bf}}return{}},headerFix:function(bm){if(V||UV){console.log(bm.type)
}var bq=Y.has(bm.tabId);var bb=bm.type=="main_frame";
var br=an.runCheck;var bg=bb||bm.type=="sub_frame";
if(bb){p.reset(bm.tabId,true);if(V||UV||EV){console.log("bg: create new ctxRegistry entry for URL "+bm.url)
}var a9={tabId:bm.tabId,frameId:0,scriptId:0,url:bm.url};
Y.setCache(a9.tabId,a9.frameId,a9.url,p.prepare(a9));
bq=true}if(bg&&br){var bn=al.extractInfoFromURL(bm.url);
var be=bn.protocol+"://"+bn.domain+"/*";chrome.contentSettings.javascript.set({primaryPattern:be,setting:"allow"});
if(V||UV||EV){var ba=function(){var bs=function(bt){console.log("contentSettings: ("+(new Date()).getTime()+") state: "+JSON.stringify(bt))
};chrome.contentSettings.javascript.get({primaryUrl:bm.url},bs)
};console.log("contentSettings: ("+(new Date()).getTime()+") allow URL "+be);
ba();window.setTimeout(ba,20)}}var bd=bq&&Y.n[bm.tabId].user_agent;
var a8=a4.headers&&bm.type=="xmlhttprequest";if(!bd&&!a8){return{}
}var bi=false;var bl={};var bf=[];var bh=new RegExp("^"+a4.prefix);
var bc;if(bd){for(var bj in Y.n[bm.tabId].user_agent){if(!Y.n[bm.tabId].user_agent.hasOwnProperty(bj)){continue
}bc=Y.n[bm.tabId].user_agent[bj]}if(V||UV){console.log("bg: userscript user-agent spoof enabled! ("+bc+")")
}}if(V||UV){console.log("bg: process request to "+bm.url);
console.log(bm.requestHeaders)}for(var bk=0;bk<bm.requestHeaders.length;
bk++){var bp=bm.requestHeaders[bk];if(bp.name.search(bh)==0){bf.push(bp)
}else{if(bd&&bp.name=="User-Agent"){bi=true;bl[bp.name]=bc
}else{bl[bp.name]=bp.value}}}if(a8){for(var bk=0;bk<bf.length;
bk++){var bp=bf[bk];bi=true;bl[bp.name.replace(bh,"")]=bp.value
}if(!a4.verified){bi=true;bl[a4.testprefix]="true"}}if(bi){var bo=[];
for(var bj in bl){if(!bl.hasOwnProperty(bj)){continue
}if(bj!=""){bo.push({name:bj,value:bl[bj]})}}if(V||UV){console.log(bo)
}return{requestHeaders:bo}}return{}},sucRequest:function(a8){if(a8.tabId>0){console.log("bg: "+a8.requestId+" print "+a8.type+" request of tabId "+a8.tabId+" to "+a8.url)
}},checkRequestForUserscript:function(bb){var a8=aI.isScriptUrl(bb.url);
var ba=bb.url.search(/\?/);var bc=bb.url.search(/\#/);
var bd=bb.url.search(/^file:\/\//);if(bb.tabId>0&&bb.type=="main_frame"&&bb.method!="POST"&&bd==-1&&a8==true&&(ba==-1||a8<ba)&&(bc==-1||a8<bc)&&bb.url.search(/\#bypass=true/)==-1){var a9=chrome.extension.getURL("ask.html")+"?script="+P.Base64.encode(bb.url)+"&i18n="+aK.values.i18n;
if(RV){console.log("bg: user script detected @ "+bb.url+" -> open tab with "+a9)
}chrome.tabs.create({url:a9},function(){});return{redirectUrl:"javascript:history.back()"}
}return{}},removeWebRequestListeners:function(){if(a4.use){try{chrome.webRequest.onBeforeRequest.removeListener(al.checkRequestForUserscript);
chrome.webRequest.onBeforeSendHeaders.removeListener(al.headerFix);
chrome.webRequest.onHeadersReceived.removeListener(al.detectRedirect);
if(a4.headers){if(a4.verified==false){chrome.webRequest.onSendHeaders.removeListener(al.headerCheck)
}if(V||UV){chrome.webRequest.onCompleted.removeListener(al.sucRequest)
}}}catch(a8){}}a4.headers=false;a4.verified=true;al.runInfoChangedListener()
},init:function(a9,bd){if(a4.use){try{var bc={urls:["http://*/*","https://*/*"],types:["xmlhttprequest"]};
var a8={urls:["http://*/*","https://*/*","file://*/*"]};
var ba={urls:["http://*/*","https://*/*"]};chrome.webRequest.onBeforeRequest.addListener(al.checkRequestForUserscript,a8,["blocking"]);
chrome.webRequest.onBeforeSendHeaders.addListener(al.headerFix,a8,["requestHeaders","blocking"]);
chrome.webRequest.onHeadersReceived.addListener(al.detectRedirect,ba,["responseHeaders","blocking"]);
if(bd){if(!a9){chrome.webRequest.onSendHeaders.addListener(al.headerCheck,bc,["requestHeaders"])
}if(V||UV){chrome.webRequest.onCompleted.addListener(al.sucRequest,bc,[])
}}chrome.webRequest.handlerBehaviorChanged();a4.verified=a9;
a4.headers=bd;a4.id=((new Date()).getTime()+Math.floor(Math.random()*6121983+1)).toString();
a4.testprefix=a4.prefix+(Math.floor(Math.random()*6121983+1)).toString();
a4.prefix=a4.prefix+a4.id+"_";al.runInfoChangedListener()
}catch(bb){if(D){console.log("bg: error initializing webRequests "+bb.message)
}al.removeWebRequestListeners()}}},finalize:function(){al.removeWebRequestListeners()
}};function aE(){if(D){console.log("bg: cleanup!")}al.finalize();
ap.finalize()}window.addEventListener("unload",aE,false);
var aR=null;var aQ=function(a8,a9,bb){if(!aK.initialized){window.setTimeout(function(){aQ(a8,a9,bb)
},100);return}if(V){console.log("loadListener "+bb.url+" "+a9.status)
}var ba=function(){aR=null;chrome.tabs.sendMessage(a8,{method:"getSrc"},function(bc){if(V){console.log("add script from "+bb.url)
}ad({tabid:bb.id,url:bb.url,src:bc.src})})};if(aI.isScriptUrl(bb.url)){if(V){console.log("found script @ "+bb.url)
}if(a9.status=="complete"){if(aR!=null){window.clearTimeout(aR);
aR=null}ba()}else{aR=window.setTimeout(ba,5000)}}else{if(a9.url){if(V||EV){console.log("bg: url of tab "+a8+"("+a9.status+") has changed to "+a9.url)
}}else{if(a9.status=="complete"){if(!Y.isEmpty(a8)){chrome.tabs.sendMessage(a8,{method:"onLoad"},function(bc){})
}if(an.runCheck){if(V||EV||UV){console.log("contentSettings: ("+(new Date()).getTime()+") javascript.clear({})")
}chrome.contentSettings.javascript.clear({})}}}}};var Q=function(a8){var a9=function(ba){if(a8.tabId!=ba.id){return
}aD(ba.id);ah(ba.id)};chrome.tabs.getSelected(null,a9)
};var a3=function(ba,be,bb,bd,bf,bc){if(!aK.initialized){window.setTimeout(function(){a3(ba,be,bb,bd,bf,bc)
},100);return}if(be.status=="complete"){var a8=0;var a9=bb.url;
if(bd){a9=bd.url+bd.params;a8=bd.id}var bg={tabId:ba,frameId:bb.frameId,scriptId:a8,url:a9};
var bh=null;if(bb.frameId>0||!Y.has(ba)||!Y.n[ba].cache){bh=p.prepare(bg,bf)
}else{if(bf){if(Y.has(ba)){var bh=Y.n[ba].cache;bf(bh.runners.length,bh.disabled)
}else{console.log("bg: WARN: this should _NEVER_ happen!!!!!")
}}}p.runScripts(bg,bh,bc)}};var X=function(a8,a9){};
var L=function(a9,a8){Y.remove(a9)};var S=function(){R(aK.values.logLevel);
aX.setLocale(aK.values.i18n);an.init();h.init();if(aK.values.sync_enabled&&aK.values.sync_type){ap.enable();
ap.scheduleSync(1000,true);ap.schedulePeriodicalCheck()
}if(aK.values.fire_enabled){am.init()}if(aK.values.webrequest_use!="no"){var a8=function(a9){if(V){console.log("bg: webRequest changed "+JSON.stringify(a9))
}};al.addInfoChangedListener(a8);al.init(aK.values.webrequest_modHeaders!="auto",aK.values.webrequest_modHeaders!="no")
}};var aK;var P;var t;var a0;var G;var ai;var aY;var aX;
init=function(){P=Registry.get("convert");aX=Registry.get("i18n");
t=Registry.get("xmlhttprequest").run;a0=Registry.get("compat");
G=Registry.get("parser");ai=Registry.get("helper");
SyncInfo=Registry.get("syncinfo");j();var bb=function(){S();
E();aD();a8()};var a9=function(){aK=new B(bb);cfgo=aK
};F.init(a9);var ba=function(){if(!chrome.webNavigation||!chrome.webNavigation.onCommitted){if(D||V){console.log("gb: waitForWebNav()")
}window.setTimeout(ba,300);return}chrome.webNavigation.onCommitted.addListener(Q)
};var a8=function(){window.setTimeout(ak.check,10000);
chrome.tabs.onUpdated.addListener(aQ);chrome.tabs.onRemoved.addListener(L);
chrome.tabs.onSelectionChanged.addListener(X);chrome.extension.onMessage.addListener(aU.handler);
chrome.extension.onConnect.addListener(aZ);chrome.extension.onConnectExternal.addListener(function(bc){bc.disconnect()
});ba();if(D||V){console.log("Listeners registered!")
}H=true}};window.setTimeout(init,1)})();
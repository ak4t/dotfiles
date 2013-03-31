
Registry.require("xmlhttprequest");Registry.require("pingpong");
Registry.require("crcrc");Registry.require("curtain");
Registry.require("tabview");Registry.require("htmlutil");
Registry.require("helper");Registry.require("convert");
Registry.require("i18n");Registry.require("syncinfo");
(function(){var c=false;if(!window.requestFileSystem){window.requestFileSystem=window.webkitRequestFileSystem
}if(!window.BlobBuilder){window.BlobBuilder=window.WebKitBlobBuilder
}var E=Registry.get("crcrc").cr;var r=Registry.get("crcrc").crc;
var u=Registry.get("curtain");var z=Registry.get("tabview");
var M=Registry.get("htmlutil");var P=Registry.get("helper");
var Y=Registry.get("convert");var q=Registry.get("pingpong");
var l=Registry.get("i18n");var n=Registry.get("syncinfo");
var o=false;var Q=null;var C={};var J=[];var W="0.0.0";
var p=false;var k={};var D=P.getUrlArgs();var X={};
var i=function(ab,V){if(X[ab]&&X[ab][V]){X[ab][V].apply(this,Array.prototype.slice.call(arguments,2))
}else{console.log("option: WARN: unable to find callback '"+V+"' for id '"+ab+"'")
}};var H=function(ao,ax){var ay=null;var aD=null;var ad=[];
var ag=function(a0){var aU,aF,a2,a4,a3,a1;var aV=[],aT=[];
a4=E("tbody",a0.name,a0.id,"body");a3=E("tfoot",a0.name,a0.id,"foot");
a1=E("thead",a0.name,a0.id,"head");if(a0.scriptTab){var aX=aa(a0);
aU=r("table","scripttable",a0.name,a0.id,"main");var aS=r("th","",a0.name,a0.id,"thead_sel");
aS.appendChild(aX.selAll);var aZ=r("td","",a0.name,a0.id,"tfoot_sel");
var aR=r("th","",a0.name,a0.id,"thead_en");var aY=r("td","",a0.name,a0.id,"tfoot_en");
aY.setAttribute("colspan","9");aY.appendChild(aX.actionBox);
var aQ=r("th","settingsth",a0.name,a0.id,"thead_name");
aQ.textContent=l.getMessage("Name");var aH=r("th","settingsth",a0.name,a0.id,"thead_ver");
aH.textContent=l.getMessage("Version");var aG=r("th","settingsth",a0.name,a0.id,"thead_type");
aG.textContent=l.getMessage("Type");var aE=r("th","settingsth",a0.name,a0.id,"thead_sync");
aE.textContent="";var aP=r("th","settingsth",a0.name,a0.id,"thead_sites");
aP.width="25%";aP.textContent=l.getMessage("Sites");
var aO=r("th","settingsth",a0.name,a0.id,"thead_features");
aO.textContent=l.getMessage("Features");var aN=r("th","settingsth",a0.name,a0.id,"thead_edit");
aN.textContent=l.getMessage("Homepage");var aL=r("th","settingsth",a0.name,a0.id,"thead_updated");
aL.textContent=l.getMessage("Last_Updated");var aK=r("th","settingsth",a0.name,a0.id,"thead_sort");
aK.textContent=l.getMessage("Sort");var aJ=r("th","settingsth",a0.name,a0.id,"thead_del");
aJ.textContent=l.getMessage("Delete");var aI=function(){if(C.sync_enabled){aE.textContent=l.getMessage("Imported")
}};J.push(aI);aV=aV.concat([aS,aR,aQ,aH,aG,aE,aP,aO,aN,aL,aK,aJ]);
aF=r("tr","settingstr filler",a0.name,a0.id,"filler");
for(var aW=0;aW<aV.length;aW++){aF.appendChild(aV[aW])
}aT=aT.concat([aZ,aY]);a2=r("tr","settingstr filler",a0.name,a0.id,"footer");
for(var aW=0;aW<aT.length;aW++){a2.appendChild(aT[aW])
}var aM=r("td","settingstd filler",a0.name,a0.id,"filler_td"+a0.id);
aF.appendChild(aM);a1.appendChild(aF);a3.appendChild(a2)
}else{aU=r("table","settingstable",a0.name,a0.id,"main");
aF=r("tr","settingstr filler",a0.name,a0.id,"filler");
a4.appendChild(aF)}aU.appendChild(a1);aU.appendChild(a4);
aU.appendChild(a3);return{table:aU,head:a1,body:a4,foot:a3}
};var ah=null;var am=null;var ak=false;for(var aq in ao){var av=ao[aq];
if(c){console.log("options: process Item "+av.name)
}var V=r("tr","settingstr",av.name,av.id,"outer");if(av.divider){V=null
}else{var aC=E("td",av.name,av.id,"0");V.appendChild(aC);
var ae=E("td",av.name,av.id,"1");if(av.image){ae.setAttribute("class","imagetd");
ae.appendChild(M.createImage(av.image,av.name,av.id))
}var ac=r("td","settingstd",av.name,av.id,"2");if(av.option){C[av.id]=av.checkbox?av.enabled:av.value
}if(av.checkbox){var ap=function(){enableScript(this.key,this.checked)
};var ar=function(){var aE=true;if(this.warning){aE=confirm(this.warning);
if(!aE){this.checked=!this.checked}}if(aE){w(this.key,this.checked,this.reload);
if(this.reload){window.location.reload()}}};if(ah&&ak){ap=null;
ar=null}var aj=M.createCheckbox(av.name,av,av.option?ar:ap);
if(ah){ah.appendChild(aj.elem);V=null}else{ac.appendChild(aj.elem)
}aj.elem.setAttribute("style",(av.level>C.configMode)?P.staticVars.invisible:P.staticVars.visible)
}else{if(av.button){var ar=function(){var aE=true;if(this.warning){aE=confirm(this.warning)
}if(aE){f(this.key,true,this.ignore,this.reload)}};
var aj=M.createButton(av.name,av,ar);if(ah){ah.appendChild(aj);
V=null}else{ac.appendChild(aj)}aj.setAttribute("style",(av.level>C.configMode)?P.staticVars.invisible:P.staticVars.visible)
}else{if(av.input){var aj=M.createTextarea(av.name,av);
if(ah){ah.appendChild(aj.elem);if(av.hint){var aw=E("span",av.name,av.id,"hint");
aw.textContent=av.hint;aj.elem.appendChild(aw)}V=null;
ak=true}else{ac.appendChild(aj.elem)}aj.elem.setAttribute("style",(av.level>C.configMode)?P.staticVars.invisible:P.staticVars.visible)
}else{if(av.text){var aj=M.createInput(av.name,av);
if(ah){ah.appendChild(aj.elem);if(av.hint){var aw=r("span","hint",av.name,av.id,"hint");
aw.textContent=av.hint;aj.elem.appendChild(aw)}V=null;
ak=true}else{ac.appendChild(aj.elem)}aj.elem.setAttribute("style",(av.level>C.configMode)?P.staticVars.invisible:P.staticVars.visible)
}else{if(av.password){var aj=M.createPassword(av.name,av);
if(ah){ah.appendChild(aj.elem);V=null;ak=true}else{ac.appendChild(aj.elem)
}aj.elem.setAttribute("style",(av.level>C.configMode)?P.staticVars.invisible:P.staticVars.visible)
}else{if(av.select){var ap=function(){var aE=true;if(this.warning){aE=confirm(this.warning);
if(!aE){this.value=this.oldvalue}}if(aE){w(this.key,this.value,this.reload);
if(this.reload){window.location.reload()}}};if(ah&&ak){ap=null;
if(av.enabler){ap=function(){var aG=document.getElementsByName("enabled_by_"+this.key);
var aE=(this.selectedIndex<this.options.length)?this.options[this.selectedIndex]:this.options[0];
var aF=aE.getAttribute("enables");var aH=aF?JSON.parse(aF):{};
P.forEach(aG,function(aI){if(aH[aI.key]===undefined||aH[aI.key]==1){aI.setAttribute("style",P.staticVars.visible)
}else{aI.setAttribute("style",P.staticVars.invisible)
}})}}}var aj=M.createDropDown(av.name,av,av.select,ap);
if(ah){ah.appendChild(aj.elem);V=null}else{ac.appendChild(aj.elem)
}aj.elem.setAttribute("style",(av.level>C.configMode)?P.staticVars.invisible:P.staticVars.visible);
if(ah&&av.enabler){var ai=function(){var aE=ap;var aF=aj;
J.push(function(){aE.apply(aF.select,[])})};ai()}}else{if(av.url){var aB=E("a",av.name,av.id);
aB.href="javascript://nop/";aB.url=av.url;aB.newtab=av.newtab;
if(!aB.inserted){var ap=function(){U(this.url,this.newtab)
};aB.addEventListener("click",ap)}aB.textContent=av.name;
if(ah){ah.appendChild(aB);V=null}else{ac.setAttribute("colspan","2");
ac.appendChild(aB)}}else{if(av.heading){var aw=E("span",av.name,av.id);
aw.textContent=av.name;ay=ag(av);aD=E("div",av.name,av.id,"tab_content");
aD.appendChild(ay.table);V=null;var ab=ax.appendTab(P.createUniqueId(av.name,av.id),aw,aD)
}else{if(av.section){if(ah&&ak){var aA=E("input",ah.name,ah.id,"Save");
if(!aA.inserted){aA.type="button";aA.section=ah;aA.value=l.getMessage("Save");
var an=function(){var aE=Array.prototype.slice.call(this.section.getElementsByTagName("textarea"));
var aI=function(aO){P.forEach(aO,function(aP){aE.push(aP)
})};aI(document.evaluate('//div[@id="'+this.section.id+'"]//input',this.section,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null));
aI(document.evaluate('//div[@id="'+this.section.id+'"]//select',this.section,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null));
for(var aF=0;aF<aE.length;aF++){var aG=null;var aJ=aE[aF];
var aM=aJ.key;if(aJ.tagName.toLowerCase()=="textarea"){if(aJ.array){var aL=aJ.value.split("\n");
var aH=[];for(var aN=0;aN<aL.length;aN++){if(aL[aN]&&aL[aN].trim()!=""){aH.push(aL[aN])
}}aG=aH}else{aG=aJ.value}}else{if(aJ.getAttribute("type")=="checkbox"){aG=aJ.checked
}else{if(aJ.getAttribute("type")=="select"){var aK=0;
if(aJ.selectedIndex>=0&&aJ.selectedIndex<aJ.options.length){aK=aJ.selectedIndex
}aG=aJ[aK]?aJ[aK].value:aJ.options[0].value}else{if(aJ.getAttribute("type")=="button"){}else{aG=aJ.value
}}}}if(aM){w(aM,aG)}}};aA.addEventListener("click",an,false)
}ah.appendChild(aA);V=null}if(av.endsection){continue
}var an=r("div","section",av.name,av.id);var aw=r("div","section_head",av.name,av.id,"head");
var az=r("div","section_content",av.name,av.id,"content");
aw.textContent=av.name;an.appendChild(aw);an.appendChild(az);
if(am==null){am=r("div","section_table","","");ac.appendChild(am);
ac.setAttribute("class","section_td")}else{V=null;ac=null
}ak=false;am.appendChild(an);an.setAttribute("style",(av.level>C.configMode)?P.staticVars.invisible:P.staticVars.visible);
ah=az;if(av.needsave){ak=true}ae=null}else{if(av.menucmd){var au=E("span",av.name,av.id,false,true);
au.textContent=av.name;ac.setAttribute("colspan","2");
ac.appendChild(au)}else{if(av.userscript||av.nativeScript||av.user_agent){ac.setAttribute("colspan","2");
var at=m(av,V,ax);V.setAttribute("class","scripttr");
if(av.nnew){V.setAttribute("style","display: none;")
}for(var al=0;al<at.length;al++){V.appendChild(at[al])
}if(av.userscript||av.user_agent){ad.push({script:V,pos:av.position,posof:av.positionof})
}ae=null}else{if(av.version){W=av.value;V=null;var af=r("div","version","version","version");
af.textContent="v"+W+" by Jan Biniok"}else{var au=E("span",av.name,av.id);
au.textContent=av.name;ac.setAttribute("colspan","2");
ac.appendChild(au)}}}}}}}}}}}}if(V){if(ae){V.insertBefore(ae,aC)
}if(ac){V.appendChild(ac,aC)}V.removeChild(aC)}}if(ay&&V){ay.body.appendChild(V)
}}b(ad);J.push(X.multiselect["single_click"])};var L=function(aB){var aA={name:"utils",id:"utils"};
var aC=E("div",aA.name,aA.id,"tab_util_h");aC.textContent=l.getMessage("Utilities");
var ae=E("div",aA.name,aA.id,"tab_util");var ag=aB.appendTab(P.createUniqueId(aA.name,aA.id),aC,ae);
if(50>C.configMode){ag.hide()}else{ag.show()}var ah=r("div","tv_util",aA.name,aA.id,"tab_util_cont");
var ak=function(){var aI={created_by:"Tampermonkey",version:"1",scripts:[]};
for(var aH in Q){var aJ=Q[aH];if((aJ.userscript||aA.user_agent)&&aJ.id&&!aJ.system){var aG={name:aJ.name,options:aJ.options,enabled:aJ.enabled,position:aJ.position};
if(aJ.file_url&&aJ.file_url.trim()!=""){aG.file_url=aJ.file_url
}if(aJ.code&&aJ.code.trim()!=""){aG.source=Y.Base64.encode(Y.UTF8.encode(aJ.code));
aI.scripts.push(aG)}else{console.log("options: Strange script: "+aJ.name)
}}}return JSON.stringify(aI)};var ax=function(aG){var aL=false;
var aJ=0;if(aG.trim()!=""){var aK=null;try{aK=JSON.parse(aG)
}catch(aP){var aO="<body>";var aN="</body>";if(aG.search(aO)!=-1){var aR=aG.indexOf(aO);
var aQ=aG.lastIndexOf(aN);if(aR!=-1&&aQ!=-1){aG=aG.substr(aR+aO.length,aQ-(aR+aO.length));
ax(aG)}}else{P.alert(l.getMessage("Unable_to_parse_this_"))
}return}var aM=function(aT){try{var aS=aT.name;var aV=Y.UTF8.decode(Y.Base64.decode(aT.source));
var aU=aT.file_url||aT.update_url;if(aV&&aV.trim()!=""){var aX=function(aY){if(aY.installed){var aZ=(aT.enable==undefined)?aT.enabled:aT.enable;
var a0=aT.options;a0.enabled=aZ;a0.position=aT.position;
j(aT.name,a0,false)}if(--aJ==0){v(null,false,null,true,true)
}};aJ++;chrome.extension.sendMessage({method:"saveScript",name:aS,code:aV,reload:false,file_url:aU},aX)
}}catch(aW){aL=true;console.log("options: Error while importing script "+aI.name)
}};var aH=aK.scripts;for(var aI=aH.length-1;aI>=0;aI--){aM(aH[aI])
}if(aL){P.alert(l.getMessage("An_error_occured_during_import_"))
}}};var am=function(aG){var aH="";switch(aG.code){case FileError.QUOTA_EXCEEDED_ERR:aH="QUOTA_EXCEEDED_ERR";
break;case FileError.NOT_FOUND_ERR:aH="NOT_FOUND_ERR";
break;case FileError.SECURITY_ERR:aH="SECURITY_ERR";
break;case FileError.INVALID_MODIFICATION_ERR:aH="INVALID_MODIFICATION_ERR";
break;case FileError.INVALID_STATE_ERR:aH="INVALID_STATE_ERR";
break;default:aH="Unknown Error";break}P.alert("Error: "+aH)
};var ap=function(){ax(an.value)};var au=function(){function aG(aH){aH.root.getFile("scripts.tmx",{},function(aI){aI.file(function(aK){var aJ=new FileReader();
aJ.onloadend=function(aL){ax(this.result)};aJ.readAsText(aK)
},am)},am)}window.requestFileSystem(window.PERSISTENT,1024*1024,aG,am)
};var ay=function(){var aG=ak();function aH(aI){aI.root.getFile("scripts.tmx",{create:true},function(aJ){aJ.createWriter(function(aK){aK.onwriteend=function(aM){console.log("Write completed.")
};aK.onerror=function(aM){console.log("Write failed: "+aM.toString())
};var aL=new BlobBuilder();aL.append(aG);aK.write(aL.getBlob("text/plain"))
},am)},am)}window.requestFileSystem(window.PERSISTENT,1024*1024,aH,am)
};var aq=function(){var aG=ak();var aH=new BlobBuilder();
aH.append(aG);saveAs(aH.getBlob("text/plain"),"tmScripts.txt")
};var at=function(){an.value=ak()};var az=M.createButton(aA.name,aA.id+"_i_ta",l.getMessage("Import_from_Textarea"),ap);
var av=M.createButton(aA.name,aA.id+"_i_ls",l.getMessage("Import_from_SandboxFS"),au);
var ai=E("input",aA.name,aA.id+"_i_file","file");var ad=function(aI){var aK=aI.target.files;
var aM=[];var aH=function(){ax(aM.pop())};for(var aJ=0,aL;
aL=aK[aJ];aJ++){var aG=new FileReader();aG.onload=(function(aN){return function(aO){aM.push(aO.target.result);
window.setTimeout(aH,10)}})(aL);aG.readAsText(aL)}};
if(!ai.inserted){ai.type="file";ai.addEventListener("change",ad,false)
}var ac=M.createButton(aA.name,aA.id+"_e_ta",l.getMessage("Export_to_Textarea"),at);
var ao=M.createButton(aA.name,aA.id+"_e_doc",l.getMessage("Export_to_file"),aq);
var aE=M.createButton(aA.name,aA.id+"_e_ls",l.getMessage("Export_to_SandboxFS"),ay);
var an=r("textarea","importta",aA.name,aA.id,"ta");
var ab=r("div","section",aA.name,aA.id,"ta");var aF=r("div","section_head",aA.name,aA.id,"head_ta");
var aj=r("div","section_content",aA.name,aA.id,"content_ta");
aF.textContent="TextArea";aj.appendChild(ac);aj.appendChild(az);
aj.appendChild(an);ab.appendChild(aF);ab.appendChild(aj);
var aw=r("div","section",aA.name,aA.id,"sb");var ar=r("div","section_head",aA.name,aA.id,"head_sb");
var aD=r("div","section_content",aA.name,aA.id,"content_sb");
ar.textContent="SandboxFS";aw.appendChild(ar);aw.appendChild(aD);
aD.appendChild(aE);aD.appendChild(av);var af=r("div","section",aA.name,aA.id,"fi");
var V=r("div","section_head",aA.name,aA.id,"head_fi");
var al=r("div","section_content",aA.name,aA.id,"content_fi");
V.textContent="File";af.appendChild(V);af.appendChild(al);
al.appendChild(ao);al.appendChild(ai);ah.appendChild(af);
ah.appendChild(aw);ah.appendChild(ab);ae.appendChild(ah)
};var K=function(aj,V){p=V;if(!aj){console.log("options: items is empty!");
return}Q=aj;var ac=document.getElementById("options");
var ae=r("div","main_container p100100","options","main");
if(ac){var ab=ac.parentNode;ab.removeChild(ac);ab.appendChild(ae);
document.body.setAttribute("class","main")}if(c){console.log("options: head")
}var am=r("div","head_container","opt","head_container");
var af=r("div","tv_container","opt","tv_container");
var ak=E("a","head_link","fire","head_link");ak.href="http://tampermonkey.net";
ak.target="_blank";var an=r("div","float margin4","fire","head1");
var ad=r("img","banner","fire");ad.src=chrome.extension.getURL("images/icon128.png");
var al=r("div","float head margin4","fire","head2");
var ap=E("div","fire");var ah=r("div","version","version","version");
ah.textContent=" by Jan Biniok";var ao=E("div","search","box","");
ap.textContent="Tampermonkey";an.appendChild(ad);al.appendChild(ap);
al.appendChild(ah);ak.appendChild(an);ak.appendChild(al);
am.appendChild(ak);am.appendChild(ao);ae.appendChild(am);
ae.appendChild(af);if(c){console.log("options: tabView")
}var ai=z.create("_main",af);if(c){console.log("options: itemsToMenu")
}H(aj,ai);if(c){console.log("options: utilTab")}L(ai);
p=null;o=true;u.hide();while(J.length){var ag=J.pop();
ag()}};var S=function(aB,ac,ae){var au=ac.item;var al=au.id+ac.id;
var aA=(ae?"orig_":"use_")+ac.id;var ai=function(aC){return"select_"+P.createUniqueId(aC,au.id)+"_sel1"
};var aj=r("div","cludes",aB,al,"cb1");if(document.getElementById(ai(aA))){return{elem:aj}
}var at=E("span",au.name,al,"cb2");if(ae){var af=function(){if(this.type=="checkbox"){v(this.name,this.key,!this.oldvalue)
}};var ab="merge_"+ac.id;var am=(au.options&&au.options.override&&au.options.override[ab])?true:false;
var ap=M.createCheckbox(aB,{id:ab,name:au.name,enabled:am},af);
at.appendChild(ap.elem)}else{at.textContent=aB}aj.title=au.desc?au.desc:"";
var V=(au.options&&au.options.override&&au.options.override[aA])?au.options.override[aA]:[];
var aq=r("select","cludes",aA,au.id,"sel1");aq.setAttribute("size","6");
for(var an=0;an<V.length;an++){var ah=document.createElement("option");
ah.value=ah.text=V[an];aq.appendChild(ah)}aj.appendChild(at);
aj.appendChild(aq);var aw=function(){var aC=ai("use_"+(ac.id=="excludes"?"includes":"excludes"));
var aD=document.getElementById(aC);var aE=aq.options[aq.selectedIndex];
if(aE&&!aD.querySelector('option[value="'+aE.value+'"]')){aD.appendChild(aE.cloneNode(true));
ax()}};var ad=function(){var aC=prompt(l.getMessage("Enter_the_new_rule"));
if(aC){var aD=document.createElement("option");aD.value=aD.text=aC.trim();
aq.appendChild(aD);ax()}};var ay=function(){var aD=aq.options[aq.selectedIndex];
if(!aD){return}var aC=prompt(l.getMessage("Enter_the_new_rule"),aD.value);
if(aC){aD.value=aD.text=aC.trim();ax()}};var ak=function(){var aC=aq.options[aq.selectedIndex];
if(!aC){return}aC.parentNode.removeChild(aC);ax()};
var ao=function(aD){var aC=[];for(var aE=0;aE<aD.options.length;
aE++){aC.push(aD.options[aE].value)}return aC};var ax=function(){var aC={includes:ao(document.getElementById(ai("use_includes"))),matches:ao(document.getElementById(ai("use_matches"))),excludes:ao(document.getElementById(ai("use_excludes")))};
j(au.name,aC);return true};if(ae){var ag=E("button",au.name,al,"btn1");
ag.innerHTML=l.getMessage("Add_as_0clude0",ae);ag.addEventListener("click",aw,false);
aj.appendChild(ag)}else{var az=E("button",au.name,al,"btn2");
az.innerHTML=l.getMessage("Add")+"...";az.addEventListener("click",ad,false);
aj.appendChild(az);var ar=E("button",au.name,al,"btn3");
ar.innerHTML=l.getMessage("Edit")+"...";ar.addEventListener("click",ay,false);
aj.appendChild(ar);var av=E("button",au.name,al,"btn4");
av.innerHTML=l.getMessage("Remove");av.addEventListener("click",ak,false);
aj.appendChild(av)}return{elem:aj}};var b=function(ac){var af=function(al,ak){if(al.tagName==ak){return al
}else{return(al.parentNode?af(al.parentNode,ak):null)
}};var ab=function(ak){var al=function(an,am){return an.position-am.position
};ak.sort(al);return ak};var aj=null;var ad=[];var ag=0;
for(var ae=0;ae<ac.length;ae++){var ah=ac[ae].script;
var ai=af(ah,"TR");if(ai){var V=af(ai,"TBODY");if(!aj){aj=V
}else{if(aj!=V){console.log("options: different parents?!?!")
}}ag++;ad.push({tr:ai,position:ah.pos?ah.pos:(1000+ag)});
ai.inserted=false;ai.parentNode.removeChild(ai)}else{console.log("options: unable to sort script at pos "+ah.pos)
}}ad=ab(ad);for(var ae=0;ae<ag;ae++){aj.appendChild(ad[ae].tr)
}};var B={};var R=function(ae,au,ad,al,am){var ao=r("div","",au.name,au.id,"script_tab_head");
var ac=ao.inserted;var aj=r("div","heading",au.name,"heading");
var aq=r("img","nameNicon64",au.name,"heading_icon");
var V=au.icon64?au.icon64:au.icon;aq.src=V;var at=r("div","nameNname64",au.name,"heading_name");
at.textContent=au.name;if(V){aj.appendChild(aq)}aj.appendChild(at);
var an=r("div","author",au.name,"author");if(au.author){an.textContent="by "+au.author
}else{if(au.copyright){an.innerHTML="&copy; ";an.textContent+=au.copyright
}}var ay=r("table","noborder p100100",au.name,"table");
var aB=r("tr","script_tab_head",au.name,"tr1");var aA=r("tr","details",au.name,"tr2");
var ai=r("td","",au.name,"td1");var aw=r("td","",au.name,"td2");
aj.appendChild(an);ao.appendChild(aj);ai.appendChild(ao);
aB.appendChild(ai);aA.appendChild(aw);ay.appendChild(aB);
ay.appendChild(aA);al.appendChild(ay);var av={tv:"tv tv_alt",tv_table:"tv_table tv_table_alt",tr_tabs:"tr_tabs tr_tabs_alt",tr_content:"tr_content tr_content_alt",td_content:"td_content td_content_alt",td_tabs:"td_tabs td_tabs_alt",tv_tabs_align:"tv_tabs_align tv_tabs_align_alt",tv_tabs_fill:"tv_tabs_fill tv_tabs_fill_alt",tv_tabs_table:"tv_tabs_table tv_tabs_table_alt",tv_contents:"tv_contents tv_contents_alt",tv_tab_selected:"tv_tab tv_selected tv_tab_alt tv_selected_alt",tv_tab_close:"",tv_tab:"tv_tab tv_tab_alt",tv_content:"tv_content tv_content_alt"};
var ah=z.create("_details"+P.createUniqueId(au.name,au.id),aw,av);
var ap=T(au,ah,am);var ak=!au.id||au.system?{}:t(au,ah);
if(ac){return k["tab"+au.name]}var ag=function(aD){var aC=false;
if(aD.type!="keydown"){return}if(aD.keyCode==27){if(C.editor_keyMap=="windows"){if(ae.isSelected()){am()
}aC=true}}if(aC){aD.stopPropagation()}};var ab=function(aD){var aC=false;
if(ak.beforeClose){aC|=ak.beforeClose(aD)}if(ap.beforeClose){aC|=ap.beforeClose(aD)
}return aC};var ar=function(){if(ak.onShow){ak.onShow()
}if(ap.onShow){ap.onShow()}window.addEventListener("keydown",ag,false)
};var af=function(aC){if(ak.onClose){if(ak.onClose(aC)){return true
}}if(ap.onClose){if(ap.onClose(aC)){return true}}window.removeEventListener("keydown",ag,false)
};var az=function(){if(ak.onSelect){if(ak.onSelect()){return true
}}if(ap.onClose){if(ap.onSelect()){return true}}};var ax={onShow:ar,onClose:af,onSelect:az,beforeClose:ab};
k["tab"+au.name]=ax;return ax};var t=function(aQ,aq){var ap=E("div",aQ.name,aQ.id,"script_setting_h");
var aK=ap.inserted;ap.textContent=l.getMessage("Settings");
var ar=E("td",aQ.name,aQ.id,"script_settings_c");var aA=function(){if(this.type=="checkbox"||this.type=="button"){v(this.name,this.key,!this.oldvalue)
}else{if(this.type=="text"||this.type=="textarea"||this.type=="select-one"){v(this.name,this.key,this.value)
}}};var aL=M.createPosition(l.getMessage("Position_")+": ",{id:"position",name:aQ.name,pos:aQ.position,posof:aQ.positionof},aA);
var aP=M.createScriptStartDropDown(l.getMessage("Run_at")+": ",{id:"run_at",name:aQ.name,value:aQ.run_at},aA);
var ad=S(l.getMessage("Original_includes"),{id:"includes",item:aQ},l.getMessage("User_excludes"));
var ab=S(l.getMessage("Original_matches"),{id:"matches",item:aQ},l.getMessage("User_excludes"));
var ag=S(l.getMessage("Original_excludes"),{id:"excludes",item:aQ},l.getMessage("User_includes"));
var aE=r("div","clear",aQ.name,aQ.id,"clear");var ah=S(l.getMessage("User_includes"),{id:"includes",item:aQ});
var ae=S(l.getMessage("User_matches"),{id:"matches",item:aQ});
var aj=S(l.getMessage("User_excludes"),{id:"excludes",item:aQ});
var aJ=M.createCheckbox(l.getMessage("Apply_compatibility_options_to_required_script_too"),{id:"compatopts_for_requires",name:aQ.name,enabled:aQ.compatopts_for_requires},aA);
var aw=M.createCheckbox(l.getMessage("Convert_CDATA_sections_into_a_chrome_compatible_format"),{id:"compat_metadata",name:aQ.name,enabled:aQ.compat_metadata},aA);
var aD=M.createCheckbox(l.getMessage("Replace_for_each_statements"),{id:"compat_foreach",name:aQ.name,enabled:aQ.compat_foreach},aA);
var ax=M.createCheckbox(l.getMessage("Fix_for_var_in_statements"),{id:"compat_forvarin",name:aQ.name,enabled:aQ.compat_forvarin},aA);
var ao=M.createCheckbox(l.getMessage("Convert_Array_Assignements"),{id:"compat_arrayleft",name:aQ.name,enabled:aQ.compat_arrayleft},aA);
var V=M.createCheckbox(l.getMessage("Add_toSource_function_to_Object_Prototype"),{id:"compat_prototypes",name:aQ.name,enabled:aQ.compat_prototypes},aA);
var aB=[aJ,aw,aD,ax,ao,V];var an=r("div","section",aQ.name,aQ.id,"ta_opt");
var am=r("div","section_head",aQ.name,aQ.id,"head_ta_opt");
var at=r("div","section_content",aQ.name,aQ.id,"content_ta_opt");
am.textContent=l.getMessage("Settings");an.appendChild(am);
an.appendChild(at);var au=r("div","section",aQ.name,aQ.id,"ta_cludes");
var aI=r("div","section_head",aQ.name,aQ.id,"head_ta_cludes");
var az=r("div","section_content",aQ.name,aQ.id,"content_ta_cludes");
aI.textContent=l.getMessage("Includes_Excludes");au.appendChild(aI);
au.appendChild(az);var ai=r("div","section",aQ.name,aQ.id,"ta_compat");
var av=r("div","section_head",aQ.name,aQ.id,"head_ta_compat");
var af=r("div","section_content",aQ.name,aQ.id,"content_ta_compat");
av.textContent=l.getMessage("GM_compat_options_");ai.appendChild(av);
ai.appendChild(af);at.appendChild(aL);if(!aQ.user_agent){at.appendChild(aP)
}az.appendChild(ad.elem);az.appendChild(ab.elem);az.appendChild(ag.elem);
az.appendChild(aE);az.appendChild(ah.elem);az.appendChild(ae.elem);
az.appendChild(aj.elem);var aR=E("span",aQ.name,aQ.id);
aR.textContent=l.getMessage("Settings");var ak=E("div",aQ.name,aQ.id,"tab_content_settings");
ak.appendChild(an);ak.appendChild(au);if(!aQ.user_agent){for(var aF=0;
aF<aB.length;aF++){af.appendChild(aB[aF].elem)}if(aQ.awareOfChrome){for(var aM in aB){aB[aM].input.setAttribute("disabled","disabled");
aB[aM].elem.setAttribute("title",l.getMessage("This_script_runs_in_Chrome_mode"))
}}ak.appendChild(ai)}var aG={name:aQ.name,id:"comment",value:aQ.options.comment};
var aH=M.createTextarea(null,aG);aH.elem.setAttribute("class","script_setting_wrapper");
var aT=function(){aA.apply(aH.textarea,[])};var ay=E("div",aQ.name,aQ.id,"save");
var al=M.createButton(aQ.name,aQ.id,l.getMessage("Save"),aT);
ay.appendChild(al);var aC=r("div","section",aQ.name,aQ.id,"ta_comment");
var ac=r("div","section_head",aQ.name,aQ.id,"head_ta_comment");
var aS=r("div","section_content",aQ.name,aQ.id,"content_ta_comment");
ac.textContent=l.getMessage("Comment");aC.appendChild(ac);
aC.appendChild(aS);aS.appendChild(aH.elem);aS.appendChild(ay);
ak.appendChild(aC);ar.appendChild(ak);var aO=aq.appendTab("script_settings_tab"+P.createUniqueId(aQ.name,aQ.id),ap,ar);
if(aK){return k["settings"+aQ.name]}var aN=function(){var aV=false;
if(ad.beforeClose){aV|=ad.beforeClose()}if(ab.beforeClose){aV|=ab.beforeClose()
}if(ag.beforeClose){aV|=ag.beforeClose()}if(ah.beforeClose){aV|=ah.beforeClose()
}if(ae.beforeClose){aV|=ae.beforeClose()}if(aj.beforeClose){aV|=aj.beforeClose()
}return aV};var aU={beforeClose:aN};k["settings"+aQ.name]=aU;
return aU};var T=function(ay,af,ak){var av=null;var ad=E("div",ay.name,ay.id,"script_editor_h");
var ab=ad.inserted;ad.textContent=l.getMessage("Editor");
var ag=E("td",ay.name,ay.id,"script_editor_c");var at=r("tr","editor_container p100100",ay.name,ay.id,"container");
var ai=r("tr","editormenubar",ay.name,ay.id,"container_menu");
var aB=r("table","editor_container_o p100100 noborder",ay.name,ay.id,"container_o");
aB.appendChild(ai);aB.appendChild(at);ag.appendChild(aB);
var aj=function(aE,aF){if(av){if(av(aF)){B[ay.id]=true;
if(at.editor&&C.editor_enabled){at.editor.mirror.clearHistory()
}}}};var al=function(aE,aF){if(ak){ak(aF)}};var ap=function(){var aE=null;
aE=function(aI){if(aI.cleaned){al()}};var aH=au.input?au.input.oldvalue:"";
var aG=au.input?au.input.value:"";var aF={old_url:aH,new_url:aG,clean:true,reload:true};
s(ay.name,null,aF,aE)};var am=function(){var aE=confirm(l.getMessage("Really_reset_all_changes_"));
if(aE){if(at.editor&&C.editor_enabled){at.editor.mirror.setValue(ay.code)
}else{ar.textContent=ay.code}}};var aD=function(){u.wait();
var aE=function(){G.run(at.editor);u.hide()};window.setTimeout(aE,1)
};var V=M.createImageButton(ay.name,"save",l.getMessage("Save"),chrome.extension.getURL("images/filesave.png"),aj);
var an=M.createImageButton(ay.name,"cancel",l.getMessage("Editor_reset"),chrome.extension.getURL("images/editor_cancel.png"),am);
var ah=M.createImageButton(ay.name,"reset",l.getMessage("Full_reset"),chrome.extension.getURL("images/script_cancel.png"),ap);
var aA=M.createImageButton(ay.name,"close_script",l.getMessage("Close"),chrome.extension.getURL("images/exit.png"),al);
var ao=M.createImageButton(ay.name,"lint_script",l.getMessage("Run_syntax_check"),chrome.extension.getURL("images/check.png"),aD);
var au=M.createInput(l.getMessage("Update_URL_"),{id:"file_url",name:ay.name,value:ay.file_url});
au.input.setAttribute("class","updateurl_input");au.elem.setAttribute("class","updateurl");
var ar=r("textarea","editorta",ay.name,ay.id);ar.setAttribute("wrap","off");
var aq=r("td","editor_outer",ay.name,ay.id,"edit");
var ax=r("div","editor",ay.name,ay.id,"edit");aq.appendChild(ax);
if(!p&&at.editor){if(B[ay.id]){B[ay.id]=false;return[]
}else{if(!ay.nnew){P.alert(l.getMessage("Script_modified_in_background"));
return[]}}}var ac=r("div","editormenu",ay.name,ay.id,"editormenu");
ai.appendChild(ac);ai.appendChild(au.elem);if(!at.inserted){ax.appendChild(ar);
at.appendChild(aq)}if(!ay.system){av=function(aK){var aF=true;
if(C.showFixedSrc&&!ay.user_agent){aF=confirm(l.getMessage("Do_you_really_want_to_store_fixed_code_",l.getMessage("Show_fixed_source")))
}var aJ=at.editor&&C.editor_enabled?at.editor.mirror.getValue():ar.value;
if(aF){var aE=null;if(ay.nnew){aE=function(aL){if(aL.installed){al()
}}}var aI=au.input?au.input.oldvalue:"";var aH=au.input?au.input.value:"";
var aG={old_url:aI,new_url:aH,clean:false,reload:true,force:aK};
s(ay.name,aJ,aG,aE)}return aF};ac.appendChild(V);ac.appendChild(an)
}if(!ay.nnew){ac.appendChild(ah)}ac.appendChild(aA);
if(!ay.system&&C.editor_enabled){ac.appendChild(ao)
}var ae=af.appendTab("script_editor_tab"+P.createUniqueId(ay.name,ay.id),ad,ag);
if(ab){return k["editor"+ay.name]}var aC=function(){if(at.editor){at.editor.mirror.refresh()
}};var aw=function(){var aE=ag.getElementsByTagName("textarea");
if(aE.length){var aF=aE[0];if(!at.editor){if(C.editor_enabled){var aG=aF.parentNode;
aG.removeChild(aF);at.editor=new MirrorFrame(aG,{value:ay.code,indentUnit:Number(C.editor_indentUnit),indentWithTabs:C.editor_indentWithTabs=="tabs",smartIndent:C.editor_tabMode!="classic",enterMode:C.editor_enterMode,electricChars:C.editor_electricChars.toString()=="true",lineNumbers:C.editor_lineNumbers.toString()=="true",extraKeys:{Enter:"newlineAndIndentContinueComment"},keyMap:C.editor_keyMap,gutter:true,matchBrackets:true},{save:aj,close:al,find:function(aH){at.editor.searchText=at.editor.search()
},findNext:function(aH){at.editor.searchText=at.editor.search(at.editor.searchText)
},})}else{aF.value=ay.code}}}};var az={onSelect:aC,onShow:aw,onClose:function(aH){var aE=function(){at.editor=null
};var aF=false;if(C.editor_enabled){if(at.editor){var aG=at.editor.mirror.historySize();
if(aG.undo){aF=true}}}else{aF=(ar.value!=ay.code)}if(aF&&!aH){var aI=confirm(l.getMessage("There_are_unsaved_changed_"));
if(aI){aE()}return !aI}else{aE();return false}}};k["editor"+ay.name]=az;
return az};var m=function(aK,aN,aj){if(!X[aK.id]){X[aK.id]={}
}var aI;var ai;var aG=aK.icon&&!aK.nativeScript;var aF=r("span","script_name"+(aK.nativeScript?"":" clickable"),aK.name,aK.id,"sname");
var ax=r("img","nameNicon16 icon16",aK.name,aK.id,"sname_img");
var ab=r("span",aG?"nameNname16":"",aK.name,aK.id,"sname_name");
var aJ=aK.homepage?aK.homepage:(aK.namespace&&aK.namespace.search("http://")==0?aK.namespace:null);
ab.textContent=(aK.name.length>35?aK.name.substr(0,35)+"...":aK.name);
var aL=E("span",aK.name,aK.id,"sversion");aL.textContent=aK.version?aK.version:"";
if(aG){ax.src=aK.icon;aF.appendChild(ax)}var aw=[];
var aB=function(aO,aS,aR,aQ){if(!aQ){aQ="scripttd"}var aP=r("td",aQ,aO.name,aO.id,aR);
if(aS){aP.appendChild(aS)}return aP};var ao=function(){if(aI){aI.remove();
aI=null}};var ar=function(){aF.parentNode.removeChild(aF)
};var ay=function(){var aO=function(){for(var aP in Q){var aQ=Q[aP];
if(aQ.id==aK.id&&aQ.name==aK.name){m(aQ,aN,aj);break
}}};window.setTimeout(aO,1)};var ad=function(aP){var aO=true;
if(ai.beforeClose){aO=!ai.beforeClose(aP)}if(ai.onClose&&ai.onClose(aP)){return
}ao();ar();if(aO){ay()}};var am=function(){if(ai.onSelect&&ai.onSelect()){return
}};var aC=function(){var aO=null;if(aK.nnew){aO=r("div","head_icon",aK.name,aK.id,"details_h");
aO.appendChild(M.createImage(aK.image,aK.name,aK.id,"new_script_head"))
}else{aO=r("div","",aK.name,aK.id,"details_h");aO.textContent=l.getMessage("Edit")+" - "+(aK.name.length>25?aK.name.substr(0,25)+"...":aK.name)
}var aP=E("td",aK.name,aK.id,"details_c");aI=aj.insertTab(null,"details_"+P.createUniqueId(aK.name,aK.id),aO,aP,am,aK.nnew?null:ad);
ai=R(aI,aK,aN,aP,ad)};var ae=function(aP,aO){if(!aI){aC()
}if(ai.onShow){ai.onShow()}aI.show();if((!aP||aP.button!=1)&&!aO){aI.select()
}ab.setAttribute("open","true")};if(ab.getAttribute("open")=="true"){ae(null,true)
}var at=E("span",aK.name,aK.id,"hp");if(aJ){var ap=E("a",aK.name,aK.id,"hp");
ap.setAttribute("href",aJ);ap.setAttribute("target","_blank");
var ak=M.createImage(chrome.extension.getURL("images/home.png"),aK.name,aK.id,"hp","");
ap.appendChild(ak);at.appendChild(ap)}var af=function(aY,aW){var aU=1000*60;
var aR=1000*60*60;var aP=1000*60*60*24;var aS=aY.getTime();
var aO=aW.getTime();var aX=Math.abs(aS-aO);var aQ=Math.round(aX/aU);
var aT=Math.round(aX/aR);var aV=Math.round(aX/aP);if(aQ<=60){return aQ+" min"
}else{if(aT<=48){return aT+" h"}else{return aV+" d"
}}};var aq=E("span",aK.name,aK.id,"last_updated");var av="";
if(aK.nativeScript||!aK.id||aK.system){av=""}else{var aE=function(){var aP=aq.textContent;
aq.textContent="";aq.appendChild(M.createImage("/images/download.gif",aK.name+"_down",aK.id));
var aO=function(aQ){aq.textContent=aP;if(aQ){aq.style.color="green";
aq.title=l.getMessage("There_is_an_update_for_0name0_avaiable_",aK.name);
ao();ar();v(null,false)}else{aq.style.color="red";aq.title=l.getMessage("No_update_found__sry_")
}};d(aK.id,aO)};if(!ab.inserted){aq.addEventListener("click",function(){i(aK.id,"scriptUpdate")
});aq.style.cursor="pointer";aq.title=l.getMessage("Check_for_Updates")
}X[aK.id]["scriptUpdate"]=aE;if(aK.lastUpdated){try{av=af(new Date(),new Date(aK.lastUpdated))
}catch(aM){console.log("o: error calculating time "+aM.message)
}}else{av="?"}}aq.textContent=av;var an=E("div",aK.name,aK.id,"imported");
var au="";var az=function(){if(C.sync_enabled){if(aK.nativeScript||!aK.id||aK.system){au=""
}else{if(aK.sync&&aK.sync.imported){if(aK.sync.imported===true||aK.sync.imported==n.types.ePASTEBIN){au='<img src="http://pastebin.com/favicon.ico" class="icon16" title="pastebin.com"/>'
}else{if(aK.sync.imported==n.types.eCHROMESYNC){au='<img src="http://www.google.com/images/icons/product/chrome-16.png" class="icon16" title="Google Sync"/>'
}else{au='<img src="images/update.png" class="icon16" />'
}}}else{au='<img src="images/no.png" class="icon16" />'
}}an.innerHTML=au;an=null}};J.push(az);if(aK.file_url&&aK.file_url.trim()!=""){var V=aK.file_url.match(new RegExp("http://userscripts.org/scripts/source/([0-9]{1,9}).user.js"));
if(V&&V.length==2){var ap=E("a",aK.name,aK.id,"hp");
ap.setAttribute("href","http://userscripts.org/scripts/show/"+V[1]);
ap.setAttribute("target","_blank");var aD=M.createImage(P.staticVars.USOicon,aK.name,aK.id,"uso","");
ap.appendChild(aD);at.appendChild(ap)}}X[aK.id]["deleteScript"]=function(aP,aR){if(aK.nativeScript){var aQ=aR||confirm(l.getMessage("Really_delete_this_extension__"));
if(aQ==true){O(aK.name,"installed",!aR);aN.parentNode.removeChild(aN)
}}else{var aQ=aR||confirm(l.getMessage("Really_delete_this_script__"));
if(aQ==true){var aO={reload:!aR};s(aK.name,null,aO);
aN.parentNode.removeChild(aN)}}};var al=M.createImage(chrome.extension.getURL("images/delete.png"),aK.nativeScript?aK.id:aK.name,"delete","delete",l.getMessage("Delete"),function(){i(aK.id,"deleteScript")
});var ag=function(){var aO=aK.enabled?chrome.extension.getURL("images/greenled.png"):chrome.extension.getURL("images/redled.png");
var aQ=aB(aK,aF,"script_td05","scripttd_enable");aQ.setAttribute("class","imagetd");
var aP=function(){i(aK.id,aK.nativeScript?"switchNativeEnabled":"switchEnabled")
};var aS=(aK.position>0)?((aK.position<10)?" "+aK.position:aK.position):null;
var aR=M.createImageText(aO,aK.nativeScript?aK.id:aK.name,"enabled","enabled",aK.enabled?l.getMessage("Enabled"):l.getMessage("Disabled"),aP,aK.nativeScript?"":aS);
X[aK.id]["switchEnabled"]=function(aU,aV,aT){if(aV===undefined){aV=!aK.enabled
}v(aK.name,"enabled",aV,aT)};X[aK.id]["switchNativeEnabled"]=function(aU,aV,aT){if(aV===undefined){aV=!aK.enabled
}O(aK.id,"enabled",aV,aT)};aQ.appendChild(aR);aR=null;
return aQ};if(!aF.inserted&&!aK.nativeScript){aF.addEventListener("click",ae)
}aF.appendChild(ab);var ac=aB(aK,aF,"script_td1","scripttd_name");
ac.title=aK.description?aK.name+"\n\n"+aK.description:aK.name;
var ah=aB(aK,aF,"script_td0","scripttd_sel");if(aK.id&&!aK.system){ah.appendChild(Z(aK))
}aw.push(ah);aw.push(ag());aw.push(ac);aw.push(aB(aK,aL,"script_td24","scripttd"));
aw.push(aB(aK,y(aK),"script_td25","scripttd"));aw.push(aB(aK,an,"script_td26","scripttd"));
aw.push(aB(aK,x(aK),"script_td3"));aw.push(aB(aK,A(aK),"script_td4"));
aw.push(aB(aK,at,"script_td5"));aw.push(aB(aK,aq,"script_td6"));
aw.push(aB(aK,N(aK),"script_td7"));aw.push(aB(aK,aK.id&&!aK.system?al:null,"script_td8"));
for(var aH=aw.length;aH<10;aH++){aw.push(E("td",aK.name,aK.id,"script_filler_"+aH))
}if(aK.nnew){var aA=function(){ae(null,true)};window.setTimeout(aA,100);
if(!o&&D.open==="0"){window.setTimeout(ae,1000)}}else{if(D.open){if(aK.id===D.open){window.setTimeout(ae,1000)
}}}return aw};var y=function(ab){var ac=E("span",ab.name,ab.id,"pos_type",true);
if(!ab.id){return ac}if(ab.user_agent){var V=M.createImage("images/user_agent.png",ab.name,ab.id,"user_agent",l.getMessage("This_only_changes_the_user_agent_string"));
ac.appendChild(V)}else{if(ab.nativeScript){var V=M.createImage(ab.icon,ab.name,ab.id,"chrome_ext",l.getMessage("This_is_a_chrome_extension"));
ac.appendChild(V)}else{if(ab.userscript){var V=M.createImage("images/txt.png",ab.name,ab.id,"user_agent",l.getMessage("This_is_a_userscript"));
ac.appendChild(V)}}}return ac};var A=function(ad){var ae=E("span",ad.name,ad.id,"pos_features",true);
if(!ad.id){return ae}if(ad.system){var V=M.createImage(chrome.extension.getURL("images/lock.png"),ad.name,ad.id,"lock",l.getMessage("This_is_a_system_script"));
ae.appendChild(V)}if(ad.awareOfChrome||ad.nativeScript){var V=M.createImage("http://www.google.com/images/icons/product/chrome-16.png",ad.name,ad.id,"chrome_mode",l.getMessage("This_script_runs_in_Chrome_mode"));
ae.appendChild(V)}if(ad.nativeScript){return ae}var af=false;
var ac={includes:true,matches:true};for(var ab in ac){if(!ad[ab]){continue
}for(var ag=0;ag<ad[ab].length;ag++){if(ad[ab][ag]&&(ad[ab][ag].search("https")!=-1||ad[ab][ag].search(/^\*:\/\//)!=-1)){var V=M.createImage(chrome.extension.getURL("images/halfencrypted.png"),ad.name,ad.id,"encrypt",l.getMessage("This_script_has_access_to_https_pages"));
ae.appendChild(V);af=true;break}}if(af){break}}if(ad.user_agent){return ae
}if(ad.code.search("GM_xmlhttpRequest")!=-1){var V=M.createImage(chrome.extension.getURL("images/web.png"),ad.name,ad.id,"web",l.getMessage("This_script_has_full_web_access"));
ae.appendChild(V)}if(ad.code.search("GM_setValue")!=-1){var V=M.createImage(chrome.extension.getURL("images/db.png"),ad.name,ad.id,"db",l.getMessage("This_script_stores_data"));
ae.appendChild(V)}if(ad.code.search("unsafeWindow")!=-1){var V=M.createImage(chrome.extension.getURL("images/resources.png"),ad.name,ad.id,"resource",l.getMessage("This_script_has_access_to_webpage_scripts"));
ae.appendChild(V)}for(var ab in ad.options){if(ab.search("compat_")!=-1&&ad.options[ab]){var V=M.createImage(chrome.extension.getURL("images/critical.png"),ad.name,ad.id,"crit",l.getMessage("One_or_more_compatibility_options_are_set"));
ae.appendChild(V);break}}return ae};var N=function(ad){var af=E("span",ad.name,ad.id,"pos_images",true);
if(!ad.id||ad.nativeScript){return af}var V=M.createImage(chrome.extension.getURL("images/2uparrow.png"),ad.name,"position","2up","2 Up",function(){v(this.name,this.key,1)
});var ab=M.createImage(chrome.extension.getURL("images/1downarrow.png"),ad.name,"position","1up","1 Up",function(){v(this.name,this.key,ad.position-1)
});var ae=M.createImage(chrome.extension.getURL("images/1downarrow1.png"),ad.name,"position","1down","1 Down",function(){v(this.name,this.key,ad.position+1)
});var ac=M.createImage(chrome.extension.getURL("images/2downarrow.png"),ad.name,"position","2down","2 Down",function(){v(this.name,this.key,ad.positionof)
});if(ad.position>1){if(false){af.appendChild(V)}af.appendChild(ab)
}if(ad.position<ad.positionof){af.appendChild(ae);if(false){af.appendChild(ac)
}}return af};var x=function(ao){var an=E("span",ao.name,ao.id,"site_images");
var ak=null;if(an.inserted){ak=an;ak.setAttribute("id",ak.id+"foo");
an=E("span",ao.name,ao.id,"site_images")}var ag=function(az){az=az.replace(/^\*:\/\//,"http://");
if(az.search("http")!=0){az="http://"+az}var av=az.split("/");
if(av.length<3){return null}var aB=av[2].split(".");
if(aB.length<2){return null}var aw=aB[aB.length-1];
var aA=aB[aB.length-2];var ay=[];for(var ax=aB.length-3;
ax>=0;ax--){if(aB[ax].search("\\*")!=-1){break}ay.push(aB[ax])
}return{tld:aw,dom:aA,predom:ay.reverse()}};if(ao.includes||ao.matches){var aq=0;
var ar=ao.includes.length?ao.includes:ao.matches;for(var am=0;
am<ar.length;am++){var aj=ar[am];if(!aj){console.log("o: Warn: script '"+ao.name+"' has invalid include (index: "+am+")");
continue}if(aj.search(/htt(ps|p):\/\/(\*\/\*|\*)*$/)!=-1||aj.search(/\*:\/\/(\*\/\*|\*)*$/)!=-1||aj=="*"){var au=M.createImage(chrome.extension.getURL("images/web.png"),ao.name,ao.id,aj,aj);
an.appendChild(au);break;continue}var af=ag(aj);if(af==null){var au=M.createFavicon("?",ao.name,ao.id,aj,aj);
if(au.inserted&&ak){au.parentNode.removeChild(au)}an.appendChild(au);
continue}var ae=false;for(var al=0;al<am;al++){var ab=ar[al];
if(ab){var V=ag(ab);if(V==null){continue}if(V.dom==af.dom){ae=true;
break}}}if(!ae){var ap="com";var at="";if(af.tld!="*"&&af.tld!="tld"){ap=af.tld
}if(af.predom.length){at=af.predom.join(".")+"."}var ac=("chrome://favicon/http://"+at+af.dom+"."+ap+"/").replace(/\*/g,"");
var ad=("http://"+at+af.dom+"."+ap+"/favicon.ico").replace(/\*/g,"");
var ai=[ad,ac];if(ad.search("http://userscripts.org/")==0||ad.search("http://userscripts.com/")==0){ai=P.staticVars.USOicon
}var au=M.createFavicon(ai,ao.name,ao.id,aj,aj);if(au.inserted&&ak){au.parentNode.removeChild(au)
}an.appendChild(au);aq++}if(aq>7){var ah=r("span",ao.name,ao.id,"tbc");
ah.textContent="...";if(ah.inserted&&ak){ah.parentNode.removeChild(ah)
}an.appendChild(ah);break}}}if(ak){ak.parentNode.removeChild(ak)
}return an};var e=function(){var ab=document.getElementsByName("scriptselectors");
var ac=0;for(var V=0;V<ab.length;V++){if(ab[V].checked){ac++
}}};var g=function(){var V=0;X.multiselect={};X.multiselect["single_click"]=function(){var ae=0;
var ai=document.getElementsByName("scriptselectors");
var ac=true;var ag=false;var aj=false;var ad=true;var ak=false;
var af=false;for(var ah=0;ah<ai.length;ah++){if(ai[ah].s_type=="n"){aj=true;
ac=ac&&ai[ah].checked;ag=ag||ai[ah].checked}else{if(ai[ah].s_type=="s"){af=true;
ad=ad&&ai[ah].checked;ak=ak||ai[ah].checked}}}if(aj){if(ac&&!ak){ae=1
}else{if(ad&&!ag&&ak){ae=2}}}else{if(af&&ad){ae=3}}if(ae!=V){V=ae;
var ab=E("input","sms","all");ab.checked=(ae!=0)}};
X.multiselect["un_selectAll"]=function(){if(++V>3){V=0
}var ad=false;var ac=document.getElementsByName("scriptselectors");
for(var ab=0;ab<ac.length;ab++){if(ab==0&&(V==1||V==3)&&ac[ab].s_type=="s"){if(++V>3){V=0
}}ad|=(ac[ab].s_type=="s");ac[ab].checked=(V==3||V==1&&ac[ab].s_type=="n"||V==2&&ac[ab].s_type=="s")
}if(V>1&&!ad){V=0}this.checked=(V!=0)}};var Z=function(ab){var V=E("input",ab.name,ab.id,"sel");
V.type="checkbox";V.s_id=ab.id;V.name="scriptselectors";
V.s_type=ab.nativeScript?"n":"s";if(!V.inserted){V.addEventListener("click",function(){X.multiselect["single_click"]()
})}return V};var aa=function(ac){var af=E("input","sms","all",null,true);
af.type="checkbox";af.mode=0;af.addEventListener("click",X.multiselect["un_selectAll"]);
var ai=0;var ag=[{name:l.getMessage("__Please_choose__"),value:0},{name:l.getMessage("Enable"),value:1},{name:l.getMessage("Disable"),value:2},{name:l.getMessage("Trigger_Update"),value:5},{name:l.getMessage("Remove"),value:6}];
var ae={value:0,id:"sms",name:"select"};var ad=function(){if(this.value==0){ah.setAttribute("disabled","true")
}else{ah.removeAttribute("disabled")}ai=this.value};
var aj=M.createDropDown(l.getMessage("Apply_this_action_to_the_selected_scripts"),ae,ag,ad);
aj.elem.setAttribute("class","float");var V=function(){if(ai==0){console.log("option: ?!?!");
return}if(ai==6){if(!confirm(l.getMessage("Really_delete_the_selected_items_"))){return
}}var ap=document.getElementsByName("scriptselectors");
var an=[];for(var ak=0;ak<ap.length;ak++){an.push(ap[ak])
}var am,ao=false,al=100;for(var ak=0;ak<an.length;ak++){if(!an[ak].checked){continue
}if(ai==1||ai==2){am=(an[ak].s_type=="n")?"switchNativeEnabled":"switchEnabled";
i(an[ak].s_id,am,null,(ai==1),false);ao=true}else{if(ai==5){am="scriptUpdate";
i(an[ak].s_id,am)}else{if(ai==6){am="deleteScript";
i(an[ak].s_id,am,null,true);ao=true;al=1500}}}}if(ao){u.wait(l.getMessage("Please_wait___"));
window.setTimeout(function(){v(null,false,null,true)
},al)}};var ah=M.createButton("MultiSelectButton","button",l.getMessage("Start"),V);
ah.setAttribute("disabled","true");ah.setAttribute("style","height: 19px; top: 2px; position: relative; padding-top: -1px;");
var ab=E("div",ac.name,ac.id,"actions");ab.appendChild(aj.elem);
ab.appendChild(ah);return{selAll:af,actionBox:ab}};
g();var G={options:{maxerr:999,newcap:true,es5:true,sloppy:true,browser:true,white:true,plusplus:true,nomen:true,"continue":true,todo:true,eqeq:true,passfail:false,unparam:true,devel:true},JSLINT_GLOBALS:["CDATA","XPathResult","xpath","uneval","escape","unescape","console","JSON","TM_info","GM_info","TM_addStyle","TM_deleteValue","TM_listValues","TM_getValue","TM_log","TM_registerMenuCommand","TM_openInTab","TM_setValue","TM_addValueChangeListener","TM_removeValueChangeListener","TM_xmlhttpRequest","TM_getTab","TM_saveTab","TM_getTabs","TM_installScript","TM_runNative","TM_execUnsafe","TM_notification","TM_getResourceText","TM_getResourceURL","GM_addStyle","GM_deleteValue","GM_listValues","GM_getValue","GM_log","GM_registerMenuCommand","GM_openInTab","GM_setValue","GM_addValueChangeListener","GM_removeValueChangeListener","GM_xmlhttpRequest","GM_getTab","GM_saveTab","GM_getTabs","GM_installScript","GM_runNative","GM_setClipboard","GM_execUnsafe","GM_notification","GM_getResourceText","GM_getResourceURL"],cleanGutters:function(ad,ab){for(var ac in ab){if(!ab.hasOwnProperty(ac)){continue
}ad.clearMarker(Number(ac)-1);if(ab[ac].marks){for(var V=0;
V<ab[ac].marks.length;V++){ab[ac].marks[V].clear()}}}},setGutters:function(ah,ai){for(var af in ai){if(!ai.hasOwnProperty(af)){continue
}var ae=ai[af];var V=0;var ag=null;var aj=[];ae.marks=[];
for(var ac=0;ac<ae.length;ac++){var ak="";var ab=ae[ac];
if(ab.stop){ag="no";V=3}else{if(ab.warn){if(V<1){ag="critical";
V=1}ak=l.getMessage("Warning")+": "}else{if(ab.info){if(V==0){ag="info"
}ak=l.getMessage("Info")+": "}else{if(V<2){ag="error";
V=2;ak=l.getMessage("Error")+": "}}}}aj.push(((ae.length>1)?ak:"")+ab.text.replace(/\"/g,'\\"'));
if(!ab.stop){ae.marks.push(ah.markText({line:ab.line-1,ch:ab.character-1},{line:ab.line-1,ch:ab.character-1+ab.evle},"CodeMirror-highlight-"+ag))
}}var ad='<span class="editor_gutter" title="'+aj.join("\n\n")+'"><span width="10px"><img class="editor_gutter_img" src="images/'+ag+'.png"/>&nbsp;&nbsp;</span>%N%</span>';
ah.setMarker(Number(af)-1,ad)}return ai},run:function(af){if(af.oldGutters){G.cleanGutters(af.mirror,af.oldGutters)
}var V=af.mirror.getValue();var ai=null;try{ai=JSLINT
}catch(aw){}var ab="/*global "+G.JSLINT_GLOBALS.join(": true, ")+"*/\n";
var aj=ai?ai(ab+V,G.options):true;if(aj){return}else{var ae={};
for(var aq in JSLINT.errors){var ap=JSLINT.errors[aq];
if(ap&&ap.line>1){var ao=ap.line-1;var ad=ap.character;
var au=0;var ac=(ap.reason.search("Mixed spaces and tabs")!=-1);
var ar=0;try{var ah=!!ap.evidence&&!ac;if(ah){for(var al=0,ag=0;
al<ad&&ag<ad;al++,ag++){if(ap.evidence.charCodeAt(al)==9){ag+=C.editor_indentUnit-1;
au+=1}}}var ax=au*(C.editor_indentUnit-1);ad-=ax;if(ah||ac){var ak=ap.evidence.length>ad?ap.evidence.substr(ad-1):"";
var an=ac?ak.match(/([ \t])*/):ak.match(/([a-zA-Z0-9_])*/);
ar=an.length?an[0].length:0}}catch(at){console.log("jslint: error parsing source "+at.message)
}var av=ar||1;var am={line:ao,stop:ap.reason.search("Stopping")==0,info:ac||ap.reason.search("Combine this with the previous 'var'")!=-1||ap.reason.search("Expected '{' and instead saw")!=-1||ap.reason.search("Move 'var' declarations to the top")!=-1,warn:ap.id!="(error)"||ap.reason.search("used before it was defined")!=-1,character:ad,evle:av,text:ap.reason.replace(/.$/,"")};
if(am.stop){ao++}if(!ae[ao]){ae[ao]=[]}ae[ao].push(am)
}}af.oldGutters=G.setGutters(af.mirror,ae)}}};var h=null;
var a=null;var F=function(V,ab){if(h!=null){window.clearTimeout(h);
h=null;F(V?V:a.items,ab||a.noWarn)}else{a={items:V,noWarn:ab};
h=window.setTimeout(function(){h=null;K(a.items,a.noWarn);
a=null},50)}};var U=function(ab,V){try{var ad=function(ae){chrome.tabs.sendMessage(ae.id,{method:"loadUrl",url:ab,newtab:V},function(af){})
};if(V){chrome.extension.sendMessage({method:"openInTab",url:ab},function(ae){})
}else{chrome.tabs.getSelected(null,ad)}}catch(ac){console.log("lU: "+ac.message)
}};var s=function(ad,af,ac,V){if(ac.reload===undefined){ac.reload=true
}try{var ae=ac.old_url?ac.old_url:"";var ab=(ac.new_url&&ac.new_url!=ac.old_url)?ac.new_url:"";
chrome.extension.sendMessage({method:"saveScript",name:ad,code:af,clean:ac.clean,force:ac.force,file_url:ae,force_url:ab,reload:ac.reload},function(ah){if(ah.items){F(ah.items,ad&&true)
}if(!af&&ac.reload){u.hide()}if(V){V(ah)}});u.wait(l.getMessage("Please_wait___"))
}catch(ag){console.log("sS: "+ag.message)}};var w=function(V,ab,ad){try{chrome.extension.sendMessage({method:"setOption",name:V,value:ab},function(ae){if(!ad){F(ae.items)
}});u.wait(l.getMessage("Please_wait___"))}catch(ac){console.log("sO: "+ac.message)
}};var f=function(V,ac,ae,ab){try{chrome.extension.sendMessage({method:"buttonPress",name:V},function(af){if(ab){window.location.reload()
}else{if(!ae){F(af.items)}else{u.hide()}}});u.wait(l.getMessage("Please_wait___"))
}catch(ad){console.log("sO: "+ad.message)}};var j=function(ad,ac,af,ab){if(c){console.log("run modifyScriptOptions")
}if(af==undefined){af=true}try{var ae={method:"modifyScriptOptions",name:ad,reload:af,reorder:ab};
for(var V in ac){if(!ac.hasOwnProperty(V)){continue
}ae[V]=ac[V]}if(c){console.log("modifyScriptOptions sendReq")
}chrome.extension.sendMessage(ae,function(ah){if(ah.items){F(ah.items,ad&&true)
}});u.wait(l.getMessage("Please_wait___"))}catch(ag){console.log("mSo: "+ag.message)
}};var v=function(ab,ag,ae,ad,V){if(c){console.log("run modifyScriptOption")
}if(ad===undefined){ad=true}try{var ac={method:"modifyScriptOptions",name:ab,reload:ad,reorder:V};
if(ag&&ag!=""){ac[ag]=ae}if(c){console.log("modifyScriptOption sendReq")
}chrome.extension.sendMessage(ac,function(ah){if(ah){if(ah.i18n){l.setLocale(ah.i18n)
}if(ah.items){F(ah.items,ab&&true)}}});u.wait(l.getMessage("Please_wait___"))
}catch(af){console.log("mSo: "+af.message)}};var O=function(af,ae,ac,ab){if(c){console.log("run modifyNativeScriptOption")
}if(ab===undefined){ab=true}try{var V={method:"modifyNativeScript",nid:af,actionid:ae,value:ac,reload:ab};
if(c){console.log("modifyNativeScriptOption sendReq")
}chrome.extension.sendMessage(V,function(ag){if(ag.items){F(ag.items,name&&true)
}});u.wait(l.getMessage("Please_wait___"))}catch(ad){console.log("mSo: "+ad.message)
}};var d=function(ad,V){try{var ab=function(ae){if(V){V(ae.updatable)
}};chrome.extension.sendMessage({method:"runScriptUpdates",scriptid:ad},ab)
}catch(ac){console.log("rSu: "+ac.message)}};chrome.extension.onMessage.addListener(function(ac,ab,V){if(c){console.log("o: method "+ac.method)
}if(ac.method=="updateOptions"){F(ac.items);V({})}else{if(ac.method=="confirm"){var ad=function(ae){V({confirm:ae})
};P.confirm(ac.msg,ad)}else{if(ac.method=="showMsg"){P.alert(ac.msg);
V({})}else{if(c){console.log("o: "+l.getMessage("Unknown_method_0name0",ac.method))
}return false}}}return true});if(c){console.log("Register request listener (options)")
}var I=function(){window.removeEventListener("DOMContentLoaded",I,false);
window.removeEventListener("load",I,false);var ab=function(){v(null,false,null,true)
};var V=function(){if(confirm(l.getOriginalMessage("An_internal_error_occured_Do_you_want_to_visit_the_forum_"))){window.location.href="http://tampermonkey.net/bug"
}};q.ping(ab,V);u.wait(l.getMessage("Please_wait___"))
};window.addEventListener("DOMContentLoaded",I,false);
window.addEventListener("load",I,false)})();
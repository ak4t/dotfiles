
var V=false;var D=false;var UV=false;(function(){var f=false;
var m=null;var e="0.0.0";var i=false;var o=null;var b="???";
if(!window.requestFileSystem){window.requestFileSystem=window.webkitRequestFileSystem
}if(!window.BlobBuilder){window.BlobBuilder=window.WebKitBlobBuilder
}Registry.require("convert");Registry.require("xmlhttprequest");
Registry.require("compat");Registry.require("parser");
Registry.require("crcrc");Registry.require("helper");
Registry.require("i18n");Registry.require("curtain");
Registry.require("tabview");var g=Registry.get("crcrc").cr;
var l=Registry.get("crcrc").crc;var r=Registry.get("convert");
var j=Registry.get("i18n");var q=Registry.get("curtain");
var p=Registry.get("helper");var c=Registry.get("tabview");
var a=Registry.get("xmlhttprequest").run;var n=function(){var z;
var t=document.getElementById("ask");var v=l("div","main_container p100100","ask","main");
if(t){var s=t.parentNode;s.removeChild(t);s.appendChild(v);
document.body.setAttribute("class","main")}if(V){console.log("ask: head")
}var C=l("div","head_container","ask","head_container");
var w=l("div","tv_container","ask","tv_container");
var A=g("a","head_link","ask","head_link");A.href="http://tampermonkey.net";
A.target="_blank";var E=l("div","float margin4","ask","head1");
var u=l("img","banner","ask");u.src=chrome.extension.getURL("images/icon128.png");
var B=l("div","float head margin4","ask","head2");var G=g("div","fire");
var x=l("div","version","version","version");x.textContent=" by Jan Biniok";
var F=g("div","search","box","");G.textContent="Tampermonkey";
E.appendChild(u);B.appendChild(G);B.appendChild(x);
A.appendChild(E);A.appendChild(B);C.appendChild(A);
C.appendChild(F);v.appendChild(C);v.appendChild(w);
var y=c.create("_main",w);z=k(y);f=true;q.hide();return z
};var k=function(t){var u={name:"main",id:"main"};var w=g("div",u.name,u.id,"tab_content_h");
w.textContent=b;var s=g("div",u.name,u.id,"tab_content");
var v=t.appendTab(p.createUniqueId(u.name,u.id),w,s);
return s};var h=function(){o=p.getUrlArgs();var u=function(y){window.location=y+"#bypass=true"
};if(o.i18n){j.setLocale(o.i18n)}if(o.script){o.script=r.Base64.decode(o.script);
b=j.getMessage("Install");var t=o.script;var x;q.wait(j.getMessage("Please_wait___"));
var w=function(E){var F=l("div","heading","indzsll","heading");
var y=l("div","nameNname64","install","heading_name");
y.textContent=o.script;F.appendChild(y);x.appendChild(F);
var A=l("div","editor_outer","","");var B=l("div","editor","","");
var z=l("textarea","editorta","","");z.setAttribute("wrap","off");
z.value=E.responseText;x.appendChild(A);A.appendChild(B);
B.appendChild(z);if(!o.nocm){var C=z.parentNode;C.removeChild(z);
x.editor=new MirrorFrame(C,{value:E.responseText,noButtons:true,matchBrackets:true})
}};var s=function(z){if(z.readyState==4){q.hide();if(z.status==200||z.status==0){var y=Registry.get("parser").createScriptFromSrc(z.responseText);
if(!y.name||y.name==""||(y.version==undefined)){window.close();
return}x=n();w(z);var A=function(){if(confirm(j.getMessage("Do_you_want_to_install_this_userscript_in_Tampermonkey_or_Chrome"))){q.wait(j.getMessage("Please_wait___"));
chrome.extension.sendMessage({method:"scriptClick",url:t,id:0},function(B){q.hide()
})}else{u(t)}};window.setTimeout(A,500)}else{p.alert(j.getMessage("Unable_to_load_script_from_url_0url0",t));
u()}}};var v={method:"GET",url:t,retries:3,overrideMimeType:"text/plain; charset=x-user-defined"};
a(v,s)}else{n()}};chrome.extension.onMessage.addListener(function(u,t,s){if(V){console.log("a: method "+u.method)
}if(u.method=="confirm"){var v=function(w){s({confirm:w})
};p.confirm(u.msg,v)}else{if(u.method=="showMsg"){p.alert(u.msg);
s({})}else{if(V){console.log("a: "+j.getMessage("Unknown_method_0name0",u.method))
}return false}}return true});if(V){console.log("Register request listener (ask)")
}var d=function(){window.removeEventListener("DOMContentLoaded",d,false);
window.removeEventListener("load",d,false);h()};window.addEventListener("DOMContentLoaded",d,false);
window.addEventListener("load",d,false)})();
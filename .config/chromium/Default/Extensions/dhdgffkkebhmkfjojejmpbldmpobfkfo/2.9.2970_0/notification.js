
Registry.require("helper");var Helper=Registry.get("helper");
function cleanup(){window.removeEventListener("load",load,false);
window.removeEventListener("DOMContentLoaded",load,false)
}function load(){cleanup();var i=Helper.getUrlArgs();
var f=10000;var j=0;if(i.title){var h=document.getElementById("title");
h.innerHTML=decodeURIComponent(i.title).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>");
h.setAttribute("style","display:block;")}if(i.text){var h=document.getElementById("text");
h.innerHTML=decodeURIComponent(i.text).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>");
h.setAttribute("style","display:block;")}if(i.link){var c=i.link.split(";");
var h=document.getElementById("link");h.setAttribute("style","display:block;");
var e=document.createElement("a");e.innerHTML=decodeURIComponent(c[0]);
e.setAttribute("href",decodeURIComponent(c[1]));e.setAttribute("target","_blank");
h.appendChild(e)}if(i.delay){f=Number(i.delay)}if(i.image){var h=document.getElementById("image");
h.src=decodeURIComponent(i.image);h.setAttribute("style","display:block; width: 48px; height: 48px;")
}if(i.notifyId){j=i.notifyId;document.body.addEventListener("click",function(){var a=chrome.extension.getBackgroundPage();
var b=document.createEvent("MutationEvent");b.initMutationEvent("notify_"+j,false,false,null,null,null,null,null);
a.dispatchEvent(b);window.close()})}if(i.requestPerm){var c=i.requestPerm.split(";");
var g=c[0];j=c[1];document.body.addEventListener("click",function(){var a=function(d){var k=chrome.extension.getBackgroundPage();
var l=document.createEvent("MutationEvent");l.initMutationEvent("notify_"+j,false,false,null,null,null,d?"true":"false",null);
k.dispatchEvent(l);window.close()};var b={permissions:[g]};
chrome.permissions.request(b,a)})}if(f){window.setTimeout(function(){window.close()
},f)}}window.addEventListener("load",load,false);window.addEventListener("DOMContentLoaded",load,false);

(function(){Registry.require("helper");var e=Registry.get("helper");
var a={};var c=function(g){var f=e.isLocalImage(g);
return(g&&g.length>4&&g.substr(0,4)=="http")||f};var b=function(f,s,n,u,l,m){if(window.chrome!=undefined&&window.chrome.xmlHttpRequest!=undefined){window.chrome.xmlHttpRequest(f,s);
return}var i=new XMLHttpRequest();var t=function(){var p="";
var w=f.url;if(i.readyState>2){p=i.getAllResponseHeaders();
if(i.readyState==4){if(p){p=p.replace(/TM-finalURL\: .*[\r\n]{1,2}/,"")
}var x=i.getResponseHeader("TM-finalURL");if(x){w=x
}}}var v={readyState:i.readyState,responseHeaders:p,finalUrl:w,status:(i.readyState==4?i.status:0),statusText:(i.readyState==4?i.statusText:"")};
if(i.readyState==4){if(!i.responseType||i.responseType==""){v.responseXML=(i.responseXML?escape(i.responseXML):null);
v.responseText=i.responseText;v.response=i.response
}else{v.responseXML=null;v.responseText=null;v.response=i.response
}}else{v.responseXML=null;v.responseText="";v.response=null
}return v};var k=function(){var p=t();if(p.readyState==4&&p.status!=200&&p.status!=0&&f.retries>0){f.retries--;
b(f,s,n,u,l,m);return}if(s){s(p)}if(l){l()}};var q=function(){var p=t();
if(p.readyState==4&&p.status!=200&&p.status!=0&&f.retries>0){f.retries--;
b(f,s,n,u,l,m);return}if(u){u(p)}else{if(s){s(p)}}if(l){l()
}delete i};var r=function(y){var w=t();if(n){try{if(y.lengthComputable||y.totalSize>0){w.progress={total:y.total,totalSize:y.totalSize}
}else{var v=Number(e.getStringBetweenTags(w.responseHeaders,"Content-Length:","\n").trim());
var p=i.responseText?i.responseText.length:0;if(v>0){w.progress={total:p,totalSize:v}
}}}catch(x){}n(w)}};i.onload=k;i.onerror=q;i.onreadystatechange=r;
try{if(!m&&!c(f.url)){throw new Error("Invalid scheme of url: "+f.url)
}i.open(f.method,f.url);if(f.headers){for(var g in f.headers){var h=g;
if(a.use&&(g.toLowerCase()=="user-agent"||g.toLowerCase()=="referer")){h=a.prefix+g
}i.setRequestHeader(h,f.headers[g])}}if(typeof(f.overrideMimeType)!=="undefined"){i.overrideMimeType(f.overrideMimeType)
}if(typeof(f.responseType)!=="undefined"){i.responseType=f.responseType
}if(typeof(f.data)!=="undefined"){i.send(f.data)}else{i.send()
}}catch(o){console.log("xhr: error: "+o.message);if(s){var j={responseXML:"",responseText:"",response:null,readyState:4,responseHeaders:"",status:403,statusText:"Forbidden"};
s(j)}if(l){l()}}};var d=function(f){a=f};Registry.register("xmlhttprequest",{run:b,setWebRequest:d})
})();

(function(){Registry.require("crcrc");Registry.require("helper");
var e=Registry.get("crcrc").cr;var h=Registry.get("crcrc").crc;
var q=Registry.get("helper");var l=function(t,u,w,y,B,v,D){var x=e("div",u,w,y,"wrap",true);
var z=e("image",u,w,y,true);var A;z.setAttribute("width","16px");
z.setAttribute("height","16px");z.setAttribute("src",t);
x.setAttribute("style","cursor: pointer;");if(B){x.title=B
}x.key=w;x.name=u;x.alt=" ?";x.appendChild(z);A=h("span","scriptpos",u,w,"spos");
A.textContent=D;x.appendChild(A);if(v&&!x.inserted){var C=function(E){v.apply(x,[E])
};x.addEventListener("click",C)}z.href="javascript://nop/";
return x};var i=function(x,u,A,z){var y=e("image",u,A,z.match(/[a-zA-Z0-9]/g).join(""));
if(y.inserted){return y}y.setAttribute("width","16px");
y.setAttribute("height","16px");var v=q.toType(x);if(v!=="Array"){x=[x]
}var w=function(){if(x.length==0){return}var t=x.splice(0,1);
y.setAttribute("src",t)};y.addEventListener("error",w);
w();if(z){y.title=z}y.alt=" ?";return y};var r=function(y,v,z,t,x,u){var w=e("image",v,z,t,true);
w.setAttribute("width","16px");w.setAttribute("height","16px");
w.setAttribute("src",y);if(u){w.setAttribute("style","cursor: pointer;")
}if(x){w.title=x}w.key=z;w.name=v;w.alt=" ?";if(u&&!w.inserted){w.addEventListener("click",u);
w.href="javascript://nop/"}return w};var g=function(v,w,t){var u=h("input","import","file",null,null,true);
if(!u.inserted){u.type="file";if(t){u.addEventListener("change",t)
}}return u};var c=function(y,w,t){var x=e("div",w.name,w.id,"textarea");
x.key=w.id;var u=h("textarea","settingsta",w.name,w.id,"textarea",true);
u.name=w.name;u.key=w.id;u.array=w.array;u.oldvalue=w.value;
u.value=(w.value!=undefined)?(w.array?w.value.join("\n"):w.value):"";
if(t&&!u.inserted){u.addEventListener("change",t)}var v=e("span",w.name,w.id,"s1");
if(y){v.textContent=y+":"}x.appendChild(v);x.appendChild(u);
return{elem:x,textarea:u}};var m=function(u,v,t){var w=o(u,v,t);
w.input.setAttribute("type","password");return w};var o=function(w,y,t){var z=e("div",y.name,y.id,"input");
z.key=y.id;var u=e("input",y.name,y.id,"input",true);
var A=w.split("##");u.name=y.name;u.key=y.id;u.oldvalue=y.value;
u.value=(y.value!=undefined)?y.value:"";u.type="text";
if(t&&!u.inserted){u.addEventListener("change",t)}var x=h("span","optiondesc",y.name,y.id,"s1");
var v=e("span",y.name,y.id,"s2");x.textContent=A[0]+":";
if(A.length>1){v.textContent=A[1]}z.appendChild(x);
z.appendChild(u);z.appendChild(v);if(y.enabledBy){z.setAttribute("name","enabled_by_"+y.enabledBy)
}return{elem:z,input:u}};var k=function(v,w,t){var y=h("div","checkbox",w.name,w.id,"cb1");
y.key=w.id;var u=e("input",w.name,w.id,"cb",true);u.title=w.desc?w.desc:"";
u.name=w.name;u.key=w.id;u.reload=w.reload;u.warning=w.warning;
u.oldvalue=w.enabled;u.checked=w.enabled;u.type="checkbox";
if(t&&!u.inserted){u.addEventListener("click",t)}var x=h("span","checkbox_desc",w.name,w.id,"cb2");
x.textContent=v;y.title=w.desc?w.desc:"";y.appendChild(u);
y.appendChild(x);return{elem:y,input:u}};var b=function(t,x,A,u){var B=e("div",x.name,x.id,"outer_dd");
B.key=x.id;var y=e("select",x.name,x.id,"dd",true);
for(var w in A){var v=e("option",A[w].name,A[w].name,"dd"+t);
v.textContent=q.decodeHtml(A[w].name);v.value=A[w].value;
if(A[w].enabledBy){v.setAttribute("name","enabled_by_"+A[w].enabledBy)
}if(x.enabler&&A[w].enable){v.setAttribute("enables",JSON.stringify(A[w].enable))
}if(A[w].value==x.value){v.selected=true}y.appendChild(v)
}y.key=x.id;y.name=x.name;y.reload=x.reload;y.warning=x.warning;
y.oldvalue=x.value;if(u&&!y.inserted){y.addEventListener("change",u)
}var z=h("span","optiondesc",x.name,x.id,"inner_dd");
z.textContent=t+": ";B.appendChild(z);B.appendChild(y);
B.title=x.desc?x.desc:"";if(x.enabledBy){B.setAttribute("name","enabled_by_"+x.enabledBy)
}return{elem:B,select:y}};var s=function(t,B,u){var E=e("div",B.name,B.id,"outer_dd");
var C=e("select",B.name,B.id,"dd",true);var y=e("option",B.name,B.id,"dd1");
var A="document-start";y.textContent=A;if(A==B.value){y.selected=true
}var w=e("option",B.name,B.id,"dd2");var z="document-body";
w.textContent=z;if(z==B.value){w.selected=true}var v=e("option",B.name,B.id,"dd3");
var x="document-end";v.textContent=x;if(x==B.value||(!y.selected&&!w.selected)){v.selected=true
}C.appendChild(y);C.appendChild(w);C.appendChild(v);
C.key=B.id;C.name=B.name;if(u&&!C.inserted){C.addEventListener("change",u)
}var D=e("span",B.name,B.id,"inner_dd");D.textContent=t;
E.appendChild(D);E.appendChild(C);return E};var p=function(w,A,y,v,u){var t=null;
var z=null;var x=null;t=h("input","imgbutton button",w,A,"bu",true);
z=h("div","imgbutton_container",w,A,"bu_container");
z.appendChild(t);t.name=w;t.key=A;t.type="button";x=h("img","imgbutton_image",w,A,"bu_img",true);
x.src=v;z.appendChild(x);t.setAttribute("title",y);
x.setAttribute("title",y);if(!t.inserted&&u){t.addEventListener("click",u);
x.addEventListener("click",u)}return z};var d=function(v,w,u){var t=null;
t=h("input","button",v,w.id,"bu",true);t.name=w.name;
t.key=w.id;t.type="button";t.value=w.name;t.reload=w.reload;
t.ignore=w.ignore||w.reload;t.warning=w.warning;if(w.enabledBy){t.setAttribute("name","enabled_by_"+w.enabledBy)
}if(!t.inserted&&u){t.addEventListener("click",u)}return t
};var f=function(v,y,x,u){var t=null;var w=null;t=h("input","button",v,y,"bu",true);
t.name=v;t.key=y;t.type="button";t.value=x;if(!t.inserted&&u){t.addEventListener("click",u)
}return t};var n=function(u,w,v,t){if(q.toType(w)==="Object"){return d.apply(this,arguments)
}else{return f.apply(this,arguments)}};var j=function(v,z,u){var y=e("div",z.name,z.id,"pos1");
var t=e("select",z.name,z.id,"pos",true);for(var w=1;
w<=z.posof;w++){var A=e("option",z.name,z.id,"opt"+w);
A.textContent=w;if(w==z.pos){A.selected=true}t.appendChild(A)
}t.key=z.id;t.name=z.name;if(u&&!t.inserted){t.addEventListener("change",u)
}var x=e("span",z.name,z.id,"pos2");x.textContent=v;
y.appendChild(x);y.appendChild(t);return y};var a=function(z){var v=h("div","searchbox","search_inner");
var u=h("div","searchbox_mv tv_tab","search_inner_mv");
var y=h("input","searchbox_input","search_input");var t=h("input","searchbox_button","search_button");
y.type="text";y.value=z;t.type="button";t.value="Go";
var w=function(){var A=y.value;window.location=window.location.origin+window.location.pathname+"?url="+encodeURI(A)
};var x=function(A){if(A&&A.keyCode==13){w()}};t.addEventListener("click",w);
y.addEventListener("keyup",x);u.appendChild(y);u.appendChild(t);
v.appendChild(u);return v};Registry.register("htmlutil",{createImageText:l,createImage:r,createFavicon:i,createFileInput:g,createTextarea:c,createInput:o,createPassword:m,createCheckbox:k,createDropDown:b,createScriptStartDropDown:s,createImageButton:p,createButton:n,createPosition:j,createSearchBox:a})
})();

var V;var RV=false;var RD=false;var Registry={objects:{},raw_objects:{},callbacks:[],loading:0,init:function(){},onLoad:function(){var a=Registry.callbacks.pop();
if(a){a()}},checkLoading:function(){var a=false;for(var b in Registry.objects){if(!Registry.objects.hasOwnProperty(b)){continue
}if(Registry.objects[b]===null){a=true;break}}if(!a){Registry.onLoad()
}},register:function(b,c,a){if(RD||RV||V){console.log("Registry.register "+b+" overwrite: "+a)
}if(!Registry.objects[b]||a){Registry.objects[b]=c;
Registry.checkLoading()}},registerRaw:function(b,c,a){if(RD||RV||V){console.log("Registry.registerRaw "+b+" overwrite: "+a)
}if(!Registry.raw_objects[b]||a){Registry.raw_objects[b]=c
}},require:function(a){if(RD||RV||V){console.log("Registry.require "+a)
}if(Registry.objects[a]===undefined){console.log("Error: need "+a+".js");
Registry.objects[a]=null;Registry.loadFile(a+".js")
}},getRaw:function(b){if(RD||RV||V){console.log("Registry.getRaw "+b)
}var c=null;if(Registry.raw_objects[b]!==undefined){c=Registry.raw_objects[b]
}else{var a=chrome.extension.getURL(b);try{var f=new XMLHttpRequest();
f.open("GET",a,false);f.send(null);c=f.responseText;
if(!c){console.log("WARN: content of "+b+" is null!")
}}catch(d){console.log("getRawContent "+d)}}return c
},loadFile:function(a,d){if(RV||V){console.log("Registry.loadFile "+a)
}try{if(d){var c=Registry.getRaw(a);d(c)}else{var b=document.createElement("script");
b.setAttribute("src",chrome.extension.getURL(a));(document.head||document.body||document.documentElement||document).appendChild(b)
}}catch(f){console.log("Error: Registry.load "+a+" failed! "+f.message)
}},get:function(a){if(RV||V){console.log("Registry.get "+a)
}var b=Registry.objects[a];if(b===undefined){console.log("Error: Registry.get "+a+" wasn't required or found!")
}return b},addLoadHandler:function(a){Registry.callbacks.push(a)
}};window.setTimeout(Registry.init,1);
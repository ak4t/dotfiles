
(function(){var a=false;var d=true;var c=1000;var b=null;
var f=5;var e=function(j,h){var g=function(){if(b!=null){window.clearTimeout(b)
}b=null};var k=function(){g();if(f-->0){if(a){console.log("pp: ping timed out! retries: "+f)
}e(j,h);return}if(h){h()}};var i=function(n){if(!n){if(d||a){console.log("pp: Warn: got pseudo response!")
}return}if(a){console.log("pp: ping succed! @"+n.instanceID)
}g();j()};var l={method:"ping"};try{chrome.extension.sendMessage(l,i)
}catch(m){}b=window.setTimeout(k,c)};Registry.register("pingpong",{ping:e})
})();

(function(){var i=undefined;var a="display: none;";
var r=undefined;var e="position:absolute; left: -20000px; top: -200000px; width: 1px; height: 1px;";
var c="http://userscripts.org/images/script_icon.png";
var y="*";var j="://*/*";var m="http"+j;var l="https"+j;
var p=".*/";var w=".tld/";var z="museum|travel|aero|arpa|coop|info|jobs|name|nvus|biz|com|edu|gov|int|mil|net|org|pro|xxx|ac|ad|ae|af|ag|ai|ak|al|al|am|an|ao|aq|ar|ar|as|at|au|aw|ax|az|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|co|cr|cs|ct|cu|cv|cx|cy|cz|dc|de|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fl|fm|fo|fr|ga|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gu|gw|gy|hi|hk|hm|hn|hr|ht|hu|ia|id|id|ie|il|il|im|in|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|ks|kw|ky|ky|kz|la|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|ma|mc|md|md|me|mg|mh|mi|mk|ml|mm|mn|mn|mo|mo|mp|mq|mr|ms|ms|mt|mt|mu|mv|mw|mx|my|mz|na|nc|nc|nd|ne|ne|nf|ng|nh|ni|nj|nl|nm|no|np|nr|nu|ny|nz|oh|ok|om|or|pa|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pr|ps|pt|pw|py|qa|re|ri|ro|ru|rw|sa|sb|sc|sc|sd|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|tn|to|tp|tr|tt|tv|tw|tx|tz|ua|ug|uk|um|us|ut|uy|uz|va|va|vc|ve|vg|vi|vi|vn|vt|vu|wa|wf|wi|ws|wv|wy|ye|yt|yu|za|zm|zw";
var h="de.net|gb.net|uk.net|dk.org|eu.org|asn.au|com.au|conf.au|csiro.au|edu.au|gov.au|id.au|info.au|net.au|org.au|otc.au|oz.au|telememo.au|ac.cn|ah.cn|bj.cn|com.cn|cq.cn|edu.cn|gd.cn|gov.cn|gs.cn|gx.cn|gz.cn|hb.cn|he.cn|hi.cn|hk.cn|hl.cn|hn.cn|jl.cn|js.cn|ln.cn|mo.cn|net.cn|nm.cn|nx.cn|org.cn|qh.cn|sc.cn|sh.cn|sn.cn|sx.cn|tj.cn|tw.cn|xj.cn|xz.cn|yn.cn|zj.cn|ac.jp|ad.jp|aichi.jp|akita.jp|aomori.jp|chiba.jp|co.jp|ed.jp|ehime.jp|fukui.jp|fukuoka.jp|fukushima.jp|gifu.jp|go.jp|gov.jp|gr.jp|gunma.jp|hiroshima.jp|hokkaido.jp|hyogo.jp|ibaraki.jp|ishikawa.jp|iwate.jp|kagawa.jp|kagoshima.jp|kanagawa.jp|kanazawa.jp|kawasaki.jp|kitakyushu.jp|kobe.jp|kochi.jp|kumamoto.jp|kyoto.jp|lg.jp|matsuyama.jp|mie.jp|miyagi.jp|miyazaki.jp|nagano.jp|nagasaki.jp|nagoya.jp|nara.jp|ne.jp|net.jp|niigata.jp|oita.jp|okayama.jp|okinawa.jp|or.jp|org.jp|osaka.jp|saga.jp|saitama.jp|sapporo.jp|sendai.jp|shiga.jp|shimane.jp|shizuoka.jp|takamatsu.jp|tochigi.jp|tokushima.jp|tokyo.jp|tottori.jp|toyama.jp|utsunomiya.jp|wakayama.jp|yamagata.jp|yamaguchi.jp|yamanashi.jp|yokohama.jp|ac.uk|co.uk|edu.uk|gov.uk|ltd.uk|me.uk|mod.uk|net.uk|nhs.uk|nic.uk|org.uk|plc.uk|police.uk|sch.uk|co.tv";
var f=("("+[z,h].join("|")+")").replace(/\./gi,"\\.");
var q=function(C,E){var D=(C!=undefined)?C.replace(/ /g,"_"):"null";
return D+"_"+E};var n=function(F,E,D){var C=F.search(t(E));
if(C==-1){return""}if(!D){return F.substr(C+E.length)
}var G=F.substr(C+E.length).search(t(D));if(G==-1){return""
}return F.substr(C+E.length,G)};var o=function(E,C){if(C==undefined){C=[]
}var D=new RegExp("(\\"+["/",".","+","?","|","(",")","[","]","{","}","\\"].concat(C).join("|\\")+")","g");
return E.replace(D,"\\$1")};var t=function(D,C){return o(D,["*"])
};var A=function(F,C,G,E){var D;if((C.values.tryToFixUrl||G)&&F==y){D=m
}else{if((C.values.safeUrls||G)&&F!=m&&F!=l&&F.search(o(p))!=-1){D=F.replace(o(p),w)
}else{D=F}}if(E){D=D.replace(/\*\.([a-z0-9A-Z\.%].*\/)/gi,"<>$1")
}D="^"+o(D);D=D.replace(/\*/gi,".*");D=D.replace(o(w),"."+f+"/");
D=D.replace(/(\^|:\/\/)\.\*/,"$1([^?#])*");D=D.replace("<>","([^/#?]*\\.)?");
return"("+D+")"};var v=function(D){var E="background.js";
var C=chrome.extension.getURL(E);C=C.replace(E,"")+"images/";
return(D.length>=C.length&&C==D.substr(0,C.length))
};var d=function(){var I={};var F=window.location.search.replace(/^\?/,"");
var C=F.split("&");var H;for(var D=0;D<C.length;D++){H=C[D].split("=");
if(H.length!=2){var G=H[0];var E=H.slice(1).join("=");
H=[G,E]}I[H[0]]=decodeURI(H[1])}return I};var b=function(D){var C=function(){alert(D)
};window.setTimeout(C,1)};var x=function(E,C){var D=function(){var F=confirm(E);
C(F)};window.setTimeout(D,1)};var g=function(C){return({}).toString.apply(C).match(/\s([a-z|A-Z]+)/)[1]
};var u=function(C,G){var F=g(C);if(F==="Array"||F==="NodeList"){for(var H=0;
H<C.length;H++){G(C[H],H)}}else{if(F==="XPathResult"){var E=C.iterateNext();
while(E){G(E);E=C.iterateNext()}}else{for(var D in C){if(!C.hasOwnProperty(D)){continue
}G(C[D],D)}}}};var s=function(E){var D="";for(var C in E){if(!E.hasOwnProperty(C)){continue
}if(D!=""){D+=","}if(g(E[C])=="Object"){D+=C+":"+s(E[C])
}else{if(E[C]===undefined){D+=C+":undefined"}else{if(E[C]===null){D+=C+":null"
}else{if(g(E[C])=="Function"){D+=C+":"+E[C].toString()
}else{D+=C+':"'+E[C].toString()+'"'}}}}}return"{"+D+"}"
};var B=function(C){return C.replace(/(?:&#x([a-fA-F0-9]+);|&#([0-9]+);)/g,function(F,E,D){if(E){return String.fromCharCode(parseInt(E,16))
}else{return String.fromCharCode(parseInt(D,10))}})
};var k=function(C){return C.replace(/[\u00A0-\u2666]/g,function(D){return"&#"+D.charCodeAt(0)+";"
})};Registry.register("helper",{createUniqueId:q,getStringBetweenTags:n,escapeForRegExpURL:o,escapeForRegExp:t,getRegExpFromUrl:A,isLocalImage:v,getUrlArgs:d,alert:b,confirm:x,serialize:s,toType:g,forEach:u,decodeHtml:B,encodeHtml:k,staticVars:{urlAllHttp:m,urlAllHttps:l,visible:i,invisible:a,visible_move:r,invisible_move:e,USOicon:c}})
})();
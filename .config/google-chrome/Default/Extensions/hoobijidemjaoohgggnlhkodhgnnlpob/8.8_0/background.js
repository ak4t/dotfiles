chrome.extension.onRequestExternal.addListener(
	function(a,b,c){
	if (b.id!='ckibcdccnfeookdmbahgiakhnjcddpki' && b.id!='pdfpofabeglhgfnoeiihflbkecgjijjg') return false;
			try
				{
				if (a.type=='checkExist') {c(); return;}
				}
			catch (e) {}
			chrome.tabs.getSelected(null, function (t)
					{
					chrome.tabs.sendRequest(t.id,a,c)
					})
	})
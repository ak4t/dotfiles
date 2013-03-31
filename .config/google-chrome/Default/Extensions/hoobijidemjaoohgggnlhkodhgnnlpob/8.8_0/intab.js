function runScript(a,b,c)
	{
	if(a.type=='runScript')
		{
		eval(a.text)
		c();
		}
	}
if(location.protocol=='file:')
	{
	try{	chrome.extension.onRequest.removeListener(runScript);	} catch(e){}
	try{	chrome.extension.onRequest.addListener(runScript);} catch (e) {}
	}
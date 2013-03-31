var plugin
function background2load()
{
plugin=document.createElement('embed');
plugin.width=plugin.height=1
plugin.type='application/x-webpagescreenshot';
document.body.appendChild(plugin)
alert(plugin.sendKey)
}
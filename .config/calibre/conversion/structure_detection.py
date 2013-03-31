{
	'chapter' : u"//*[((name()='h1' or name()='h2') and re:test(., 'chapter|book|section|part\\s+', 'i')) or @class = 'chapter']",
	'remove_first_image' : False,
	'chapter_mark' : u'pagebreak',
	'remove_footer' : False,
	'remove_header' : False,
	'footer_regex' : u'(?i)(?<=<hr>)((\\s*<a name=\\d+></a>((<img.+?>)*<br>\\s*)?\\d+<br>\\s*.*?\\s*)|(\\s*<a name=\\d+></a>((<img.+?>)*<br>\\s*)?.*?<br>\\s*\\d+))(?=<br>)',
	'insert_metadata' : False,
	'page_breaks_before' : u"//*[name()='h1' or name()='h2']",
	'preprocess_html' : False,
	'header_regex' : u'(?i)(?<=<hr>)((\\s*<a name=\\d+></a>((<img.+?>)*<br>\\s*)?\\d+<br>\\s*.*?\\s*)|(\\s*<a name=\\d+></a>((<img.+?>)*<br>\\s*)?.*?<br>\\s*\\d+))(?=<br>)',
}
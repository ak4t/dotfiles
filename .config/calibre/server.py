# Settings to control the calibre content server

### Begin group: DEFAULT
 
# port
# The port on which to listen. Default is 8080
port = 8080
 
# timeout
# The server timeout in seconds. Default is 120
timeout = 120
 
# thread pool
# The max number of worker threads to use. Default is 30
thread_pool = 30
 
# password
# Set a password to restrict access. By default access is unrestricted.
password = u'b00ks'
 
# username
# Username for access. By default, it is: 'calibre'
username = u'calibre'
 
# develop
# Development mode. Server automatically restarts on file changes and serves code files (html, css, js) from the file system instead of calibre's resource system.
develop = False
 
# max cover
# The maximum size for displayed covers. Default is '600x800'.
max_cover = u'600x800'
 
# max opds items
# The maximum number of matches to return per OPDS query. This affects Stanza, WordPlayer, etc. integration.
max_opds_items = 30
 
# max opds ungrouped items
# Group items in categories such as author/tags by first letter when there are more than this number of items. Default: 100. Set to a large number to disable grouping.
max_opds_ungrouped_items = 100
 



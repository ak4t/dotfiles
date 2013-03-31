# calibre wide preferences

### Begin group: DEFAULT
 
# database path
# Path to the database in which books are stored
database_path = '/home/ally/library1.db'
 
# filename pattern
# Pattern to guess metadata from filenames
filename_pattern = u'(?P<title>.+) - (?P<author>[^_]+)'
 
# isbndb com key
# Access key for isbndb.com
isbndb_com_key = ''
 
# network timeout
# Default timeout for network operations (seconds)
network_timeout = 5
 
# library path
# Path to directory in which your library of books is stored
library_path = u'/home/ally/kin/ebooks'
 
# language
# The language in which to display the user interface
language = 'en'
 
# output format
# The default output format for ebook conversions.
output_format = u'mobi'
 
# input format order
# Ordered list of formats to prefer for input.
input_format_order = cPickle.loads('\x80\x02]q\x01(X\x04\x00\x00\x00MOBIq\x02X\x04\x00\x00\x00EPUBq\x03X\x03\x00\x00\x00PDFq\x04X\x03\x00\x00\x00LITq\x05X\x03\x00\x00\x00PRCq\x06X\x03\x00\x00\x00FB2q\x07X\x04\x00\x00\x00HTMLq\x08X\x03\x00\x00\x00HTMq\tX\x04\x00\x00\x00XHTMq\nX\x05\x00\x00\x00SHTMLq\x0bX\x05\x00\x00\x00XHTMLq\x0cX\x03\x00\x00\x00ODTq\rX\x03\x00\x00\x00RTFq\x0eX\x03\x00\x00\x00TXTq\x0fX\x11\x00\x00\x00DOWNLOADED_RECIPEq\x10X\x06\x00\x00\x00RECIPEq\x11X\x03\x00\x00\x00CHMq\x12X\x03\x00\x00\x00PMLq\x13X\x04\x00\x00\x00SHTMq\x14X\x03\x00\x00\x00PDBq\x15X\x03\x00\x00\x00AZWq\x16X\x03\x00\x00\x00CBCq\x17X\x03\x00\x00\x00LRFq\x18X\x03\x00\x00\x00TCRq\x19X\x04\x00\x00\x00PMLZq\x1aX\x03\x00\x00\x00CBRq\x1bX\x03\x00\x00\x00OPFq\x1cX\x02\x00\x00\x00RBq\x1dX\x03\x00\x00\x00CBZq\x1eX\x03\x00\x00\x00ZIPq\x1fX\x03\x00\x00\x00DJVq X\x04\x00\x00\x00TEXTq!X\x03\x00\x00\x00SNBq"X\x04\x00\x00\x00DJVUq#X\x04\x00\x00\x00AZW4q$X\x03\x00\x00\x00RARq%X\x04\x00\x00\x00TXTZq&X\x05\x00\x00\x00HTMLZq\'e.')
 
# read file metadata
# Read metadata from files
read_file_metadata = True
 
# worker process priority
# The priority of worker processes. A higher priority means they run faster and consume more resources. Most tasks like conversion/news download/adding books/etc. are affected by this setting.
worker_process_priority = 'normal'
 
# swap author names
# Swap author first and last names when reading metadata
swap_author_names = False
 
# add formats to existing
# Add new formats to existing book records
add_formats_to_existing = True
 
# installation uuid
# Installation UUID
installation_uuid = '2b5dea39-78e3-4690-a9c9-d4934607d85e'
 
# new book tags
# Tags to apply to books added to the library
new_book_tags = cPickle.loads('\x80\x02]q\x01.')
 
# saved searches
# List of named saved searches
saved_searches = cPickle.loads('\x80\x02}q\x01.')
 
# user categories
# User-created tag browser categories
user_categories = cPickle.loads('\x80\x02}q\x01.')
 
# manage device metadata
# How and when calibre updates metadata on the device.
manage_device_metadata = 'manual'
 
# limit search columns
# When searching for text without using lookup prefixes, as for example, Red instead of title:Red, limit the columns searched to those named below.
limit_search_columns = False
 
# limit search columns to
# Choose columns to be searched when not using prefixes, as for example, when searching for Red instead of title:Red. Enter a list of search/lookup names separated by commas. Only takes effect if you set the option to limit search columns above.
limit_search_columns_to = cPickle.loads('\x80\x02]q\x01(U\x05titleq\x02U\x07authorsq\x03U\x04tagsq\x04U\x06seriesq\x05U\tpublisherq\x06e.')
 
# use primary find in search
# Characters typed in the search box will match their accented versions, based on the language you have chosen for the calibre interface. For example, in  English, searching for n will match ñ and n, but if your language is Spanish it will only match n. Note that this is much slower than a simple search on very large libraries.
use_primary_find_in_search = True
 
# migrated
# For Internal use. Don't modify.
migrated = False
 



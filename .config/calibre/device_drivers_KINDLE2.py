# settings for device drivers

### Begin group: DEFAULT
 
# format map
# Ordered list of formats the device will accept
format_map = cPickle.loads('\x80\x02]q\x01(X\x03\x00\x00\x00azwq\x02X\x04\x00\x00\x00azw1q\x03X\x04\x00\x00\x00azw3q\x04X\x04\x00\x00\x00azw4q\x05X\x04\x00\x00\x00mobiq\x06X\x03\x00\x00\x00prcq\x07X\x03\x00\x00\x00tpzq\x08X\x03\x00\x00\x00txtq\tX\x03\x00\x00\x00pdfq\nX\x04\x00\x00\x00pobiq\x0be.')
 
# use subdirs
# Place files in sub directories if the device supports them
use_subdirs = True
 
# read metadata
# Read metadata from files on device
read_metadata = True
 
# use author sort
# Use author sort instead of author
use_author_sort = False
 
# save template
# Template to control how books are saved
save_template = u'{author_sort}/{series}/{title} - {authors}'
 
# extra customization
# Extra customization
extra_customization = cPickle.loads('\x80\x02]q\x01(\x88\x88X\x00\x00\x00\x00e.')
 



" All system-wide defaults are set in $VIMRUNTIME/debian.vim (usually just
" /usr/share/vim/vimcurrent/debian.vim) and sourced by the call to :runtime
" you can find below.  If you wish to change any of those settings, you should
" do it in this file (/etc/vim/vimrc), since debian.vim will be overwritten
" everytime an upgrade of the vim packages is performed.  It is recommended to
" make changes after sourcing debian.vim since it alters the value of the
" 'compatible' option.

" This line should not be removed as it ensures that various options are
" properly set to work with the Vim-related packages available in Debian.
runtime! debian.vim

" Uncomment the next line to make Vim more Vi-compatible
" NOTE: debian.vim sets 'nocompatible'.  Setting 'compatible' changes numerous
" options, so any other options should be set AFTER setting 'compatible'.
"set compatible

" Vim5 and later versions support syntax highlighting. Uncommenting the following enables syntax highlighting by default.
if has("syntax")
  syntax on
endif

" Uncomment the following to have Vim jump to the last position when
" reopening a file
if has("autocmd")
  au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif
endif

" Uncomment the following to have Vim load indentation rules and plugins according to the detected filetype.
if has("autocmd")
  filetype plugin indent on
endif

"The following are commented out as they cause vim to behave a lot differently from regular Vi. They are highly recommended though.
"set showcmd		" Show (partial) command in status line.
"set ignorecase		" Do case insensitive matching
"set smartcase		" Do smart case matching
"set incsearch		" Incremental search
"set hidden         " Hide buffers when they are abandoned
set autowrite		" Automatically save before commands like :next and :make
set showmatch		" Show matching brackets.
set mouse=r		    " Enable mouse usage (all modes)
set smartindent     " indent smartly yo
set tabstop=4	    " tabs are 4 chars wide
set shiftwidth=4    " shifts are 4 chars wide
set expandtab		" tabs become spaces so retain size
set background=dark " use color scheme appropriate for dark bg
set pastetoggle=<F12>

" tab like irssi (and Chrome/Firefox)
:nmap <C-p> :tabprevious<cr>
:nmap <C-n> :tabnext<cr>
:nmap <C-t> :tabnew<cr>
:nmap <C-w> :tabclose<cr>

" show line numbers
set number  

" Use favorite color scheme
colorscheme relaxedgreen

" Highlight chars that go over the 80-column limit for certain filetypes
au FileType cpp       match ErrorMsg '\%>80v.\+' 
au FileType py        match ErrorMsg '\%>80v.\+' 

" Source a global configuration file if available
if filereadable("/etc/vim/vimrc.local")
  source /etc/vim/vimrc.local
endif


#
# ~/.bashrc
#

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    eval "`dircolors -b ~/.dircolorsrc`"
    alias ls='ls --color=auto'
    alias grep='grep --color=auto'
fi

#
# Alias definitions.
#

alias norsk='setxkbmap no'
alias eng='setxkbmap us'
alias cal='cal -3'
alias isomount='sudo mount -o loop,exec'
alias ll='ls -l'
alias la='ls -A'
alias l='ls -CF'

#
# Environment variables
#
# black = 0
# red = 1
# green = 2
# yellow = 3
# blue = 4
# magenta = 5
# cyan = 6
# white = 7
# gray = 8
#
#

export STEAMLIBS=${HOME}/steam-beta/lib
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:${STEAMLIBS}
export PS1="\[$(tput setaf 2)\][\t]\[$(tput setaf 8)\] | \[$(tput setaf 1)\][\h \w]\n\[$(tput setaf 1)\]> \[$(tput sgr0)\]"

#. ~/.utf8
[[ -f "/home/ally/.local/share/Steam/setup_debian_environment.sh" ]] && source "/home/ally/.local/share/Steam/setup_debian_environment.sh"

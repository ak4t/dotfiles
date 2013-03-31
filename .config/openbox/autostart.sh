# Run the system-wide support stuff
#. $GLOBALAUTOSTART

# Programs to launch at startup
# =============================

# Start session manager
lxsession &

# Set desktop wallpaper
nitrogen --restore &

# Set dual extended desktop
#dualmon.sh

# Start screensaver deamon
xscreensaver -nosplash &

# Launch Conky
conky -q &

# Start rtorrent
#screen rtorrent &

# Dropbox autostart doesn't, start it here
dropbox start


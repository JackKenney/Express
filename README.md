# Express
A basic express website using nodejs with a mysql database set up.
Use this for basic web dev / database interactions on a linux box.

Setup:
Install the things you will need:

    sudo apt-get install mysql-server nodejs git npm 
  *for mysql-server installation DO NOT FORGET ROOT PASSWORD once you set it

Copy this repository to your directory:

    git clone "https://github.com/JackKenney/Express.git"

Add package.json file:

    npm init

Then install all dependencies listed in package.json, 
after making sure that the versions listed are current:

    npm install express socket.io mysql --save 
  *this will save them to the dependencies in the package.json created with the init command.

This should now be all set to add to the public folder any site files to be used and to start any database interactions as well. Most commands for database will be through "mysql -u root -p" and a login there. 

    nodejs server.js 
will run the server on whatever port is listed in running, on box ip (in dev)

if you ever forget the mysql password, it can be changed with 

PLEASE REMEMBER TO SET A PASSWORD FOR THE MySQL root USER !
To do so, start the server, then issue the following commands:

    /usr/bin/mysqladmin -u root password 'new-password'
    /usr/bin/mysqladmin -u root -h ubuntu password 'new-password'
Alternatively, you can run:

    /usr/bin/mysql_secure_installation
which will also give you the option of removing the test databases and anonymous user created by default. 
This is strongly recommended for production servers.

USING DATABASE CLIENT:

To establish a HeidiSQL to MySQL Database connection, follow these steps:
Download plink.exe from the PuTTy Download page: http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html
Place in folder where it makes sense (and won't be moved)
If running linux or mac, install wine, then download Heidi and install it.

For development, use 
(under settings tab)
    Network Type:  MySQL (SSH Tunnel)
    Hostname/IP:  127.0.0.1
    User: root (Database)
    Password: password (Database)
    Port: 3306
    Databases: [database name]
(under SSH tunnel tab)
    plink.exe location: [wherever you put it]
    SSH host + port: Server IP (192.168.1... + 22)
    username: [server username]
    password: [server password]
*if using a private SSL key instead, there are other settings for that.
Click "Open" and it shouldn't give you any errors.
    if it does, this article may help: http://www.bramschoenmakers.nl/en/node/595

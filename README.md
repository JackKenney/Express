# Express
A basic express website using nodejs with a mysql database set up.
Use this for basic web dev / database interactions on a linux box.

Setup:
//Install the things you'll need//
sudo apt-get install mysql-server nodejs git npm 
  *for mysql-server installation DO NOT FORGET ROOT PASSWORD once you set it

//Copy this repository to your directory//
git clone "https://github.com/JackKenney/Express.git"

//Install npm defaults with
npm init

//Then install all dependencies listed in package.json, 
after making sure that the versions listed are current.
npm install
*Ensure that:
  express
  mysql
  socket.io
are in package.json.*
If any are missing, add to:
  npm install -g _______
and they will be installed

This should now be all set to add to the public folder any site files to be used and to start any database interactions as well. Most commands for database will be through "mysql -u root -p" and a login there. 

nodejs server.js will run the server on whatever port is listed in running, on box ip (in dev)

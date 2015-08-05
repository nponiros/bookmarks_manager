# Bookmarks Manager (WIP)
Offline (via appcache and indexeddb) bookmarks manager for the browser

## Usage

* Install dependencies with npm install
* Install grunt-cli (npm install -g grunt-cli)
* Run grunt to build the webapp
* Run npm start to run the http-server, navigate to localhost:8080 to start using the app
  * Optional: Use a different webserver. For this you need to set /dist as the root
  * Make sure the correct type is returned for the manifest.appcache file

## TODO

* Better architecture, probably using flux
  * Better split up components
* reset form on save
* validation
* Define props types

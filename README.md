# Bookmarks Manager (WIP)

[![Code Climate](https://codeclimate.com/github/nponiros/bookmarks_manager/badges/gpa.svg)](https://codeclimate.com/github/nponiros/bookmarks_manager)

## Synopsis

Offline (via appcache and indexeddb) bookmarks manager for the browser

## Features

* Has a list of bookmarks with each bookmark having a URL, Title, Author, Date, Description and Tags
* Bookmarks can be added, updated and deleted
* Tags can be added and can be assigned to bookmarks

## Usage

* Install dependencies with npm install
* Install grunt-cli (npm install -g grunt-cli)
* Run "grunt build-prod" to build the webapp
* Run npm start to run the http-server, navigate to localhost:8080 to start using the app
  * Optional: Use a different webserver. For this you need to set /dist as the root
  * Make sure the correct type is returned for the manifest.appcache file

## TODO

* Search/Filter functionality
* Offline/Online check (signal/plane glyphicons?)

## Possible TODOs

* Automatically delete tags without bookmarks
* Update tag name
* Delete tags
* Store list of bookmark ids in tags to improve filter/search performance
  * Must remove bookmark from list when a bookmark is deleted
  * Must add bookmark to list when a bookmark is added (during add we have no id!)
  * Must update list when bookmark's tags are changed

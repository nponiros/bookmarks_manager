# Bookmarks Manager (WIP)

[![Code Climate](https://codeclimate.com/github/nponiros/bookmarks_manager/badges/gpa.svg)](https://codeclimate.com/github/nponiros/bookmarks_manager)

## Synopsis

Offline (via appcache and IndexedDB) bookmarks manager for the browser.

## Features

* Has a list of bookmarks with each bookmark having a URL, Title, Author, Date, Description and Tags
* Bookmarks can be added, updated and deleted
* Tags can be added and can be assigned to bookmarks
* Can search by bookmark title. The search is case insensitive but the string must match exactly

## Usage

* Clone the repository
* Install dependencies with npm install
* Run npm start to run the http-server, navigate to localhost:8080 to start using the app
  * Optional: Use a different webserver. For this you need to set /dist as the root
  * Make sure the correct type is returned for the manifest.appcache file
* Optional: run [SyncServer](https://github.com/nponiros/sync_server) or similar to enable synchronization
  * Use the settings menu to add a server url and port (optional) to be used for synchronization and connection status check

## Import Google Chrome/Chromium bookmarks

In the settings tab you can select the Bookmarks file of Chrome/Chromium to import all bookmarks into the Bookmarks Manager. Under Linux you can find the file form Chromium in ~/.config/chromium/Default/Bookmarks and for Chrome in ~/.config/google-chrome/Default/Bookmarks. In both cases the default profile is assumed. If you have more profiles, you might need to replace "Default" with the correct profile name.

### Warnings

* It was only tested with a Bookmarks file with version 1. It might not work for different versions
* The operation took several seconds with ~ 500 bookmarks
* The import operation might crash the browser or make it unresponsive if you have more than 500 bookmarks or an old computer

## TODO

* Search/Filter functionality
* Show better message when localStorage is empty instead of a TypeError
* Loading is slow with many bookmarks
* Reset input field when tag is added
* Auto select newly added tag
* Maybe cut long bookmark titles using ellipsis
* Need some release process
* update deps
* Test if synchronization in progress is running correctly (seems to be very fast, need to make sure that it is done after we have actually saved stuff)
  * Cleanup indexeddb and use sync server to get all (also remove last update ts)

## Possible TODOs

* Define interval for connection checks in settings
* Automatically delete tags without bookmarks
* Update tag name
* Delete tags
* Store list of bookmark ids in tags to improve filter/search performance
  * Must remove bookmark from list when a bookmark is deleted
  * Must add bookmark to list when a bookmark is added (during add we have no id!)
  * Must update list when bookmark's tags are changed

## Browser Compatibility

The BookmarksManager was tested with newer versions of Chrome. Should also work in Firefox but was not explicitly tested there.

## Contributing

If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please open an [issue](https://github.com/nponiros/bookmarks_manager/issues) or [pull request](https://github.com/nponiros/bookmarks_manager/pulls).
If you have any questions feel free to open an [issue](https://github.com/nponiros/bookmarks_manager/issues) with your question.

## License
[MIT License](./LICENSE)

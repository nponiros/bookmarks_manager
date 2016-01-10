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

## TODO

* Search/Filter functionality

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

The webapp was tested with newer versions of Chrome. Should also work in Firefox but was not explicitly tested there.

## Contributing

If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please open an [issue](https://github.com/nponiros/bookmarks_manager/issues) or [pull request](https://github.com/nponiros/bookmarks_manager/pulls).
If you have any questions feel free to open an [issue](https://github.com/nponiros/bookmarks_manager/issues) with your question.

## License
[MIT License](./LICENSE)

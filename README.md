# Bookmarks Manager (WIP)

[![Code Climate](https://codeclimate.com/github/nponiros/bookmarks_manager/badges/gpa.svg)](https://codeclimate.com/github/nponiros/bookmarks_manager)

## Synopsis

Offline (via [Dexie](http://dexie.org) and IndexedDB) bookmarks manager for the browser.

## Features

* Support for folders and nested folders
* Support for tagging bookmarks
* Can synchronize the database contents using [SyncClient](https://github.com/nponiros/sync_client) and [SyncServer](https://github.com/nponiros/sync_server)

## Usage

* Clone the repository
* Install dependencies with `npm install`
* Run `npm start` and navigate to [localhost:3000](http://localhost:3000) to start using the app
  * Optional: Use a different webserver. For this you need to set /dist as the root
* Optional: run [SyncServer](https://github.com/nponiros/sync_server)
  * Use the settings menu to add a server url and port (optional) to be used for synchronization

## What can be saved for a bookmark

* URL
* Title
* Write date
* Author
* Description
* Tags
* Parent folder
* Flag to set the bookmark as read

## Browser Compatibility

The BookmarksManager was tested with newer versions of Chrome. Should also work in Firefox but was not explicitly tested there.

## Contributing

If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please open an [issue](https://github.com/nponiros/bookmarks_manager/issues) or [pull request](https://github.com/nponiros/bookmarks_manager/pulls).
If you have any questions feel free to open an [issue](https://github.com/nponiros/bookmarks_manager/issues) with your question.

## License

[MIT License](./LICENSE)

# Change Log
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

### Added

* Form to add server url and port for connection status check and synchronization
* Show more than just one alert if more errors/warnings happen before the alert is dismissed
* Favicon
* Manifest for "add to homepage" on android

### Changed

* Pass server url from localStorage to the synchronization code and connection check
* Automatically close the panel if the add/search operations succeed
* The error alert shows the name instead of "some error occurred" and the error message if available
* Show a gray syncing icon if we have no server connection
* Show warning when trying to sync without a server connection
* Activate the status checker only if we have a server url
* Show warning if we have no server url for the status checker
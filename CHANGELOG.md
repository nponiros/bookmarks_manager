# Change Log
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

### Added

* Form to add server url and port for connection status check and synchronization

### Changed

* Pass server url from localStorage to the synchronization code and connection check
* Automatically close the panel if the add/search operations succeed
* The error alert shows the name instead of "some error occurred" and the error message if available
* Show a gray syncing icon if we have no server connection
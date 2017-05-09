# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.2.2] - 2017-05-09
### Changed
- Fixed an issue (introduced in `0.2.1`) which caused `mk` to throw errors when parsing string values within template manifest files.

## [0.2.1] - 2017-05-09
### Changed
- Updated `git` `_manifest.json` and `.gitignore` files: removed leading '.' in order to prevent file from being converted to `.npmignore` on publish.
- Updated `lib/mk.js` with additional file read/write logic: program now able to read-in files with *no* leading '.'; add leading '.' at write time.

## [0.2.0] - 2017-05-08
### Added
- Added support for `git` (`templates/git/`). Running `mk git` now creates a `.gitignore` file in the current directory.
- Added support for `editorconfig` (`templates/editorconfig`). Running `mk editorconfig` now created a `.editorconfig` file in the current working directory.

### Changed
- Updated `lib/mk.js` to include documentation for all private functions.

## [0.1.0] - 2017-04-26
### Added
- Set up initial project configuration (`.git`, `.editorconfig`).
- Initialized project as NPM package; outlined dependencies.
- Added `README` and `CHANGELOG` files.
- Built out primary program logic (`lib/mk.js`).
- Built out supporting/'helper' methods (`lib/utils.js`).
- Built out program entry point (`index.js`).
- Created `templates/` directory.
- Added manifest/template files to `templates/gulp/` and `templates/jira`.
- Set up `jasmine` test framework; built out initial tests for `utils` module.

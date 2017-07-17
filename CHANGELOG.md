# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

##[0.7.1] - 2017-07-17
### Changed
- Fixed typo on `README.md` file.

##[0.7.0] - 2017-07-17
### Added
- Added support for `list` command. Running `mk list` now displays a list of all supported templates and template variants.

### Changed
- Removed case sensitivity for `{ SUBCOMMAND }`. Each of the following commands are now valid: `mk README`, `mk readme`, and `mk rEaDmE`.
- Added `.*.yml`-specific rules to default `.editorconfig` template.
- Added table of contents to `README` template file(s).
- Updated project `README.md` file with: new usage instructions; table of contents.

## [0.6.0] - 2017-06-27
### Added
- Added support for `outFile` option. When present, option overrides the default name of the template being created (eg. `--outFile=NEW_NAME.txt`).

### Changed
- Updated 'default' `README.md` file to include additional notes re: missing documentation.
- Updated 'default' `.gitignore` file with additional exclusions and notes.
- Updated 'default' `.gulpfile.js` file with initial imports and tasks.

## [0.5.0] - 2017-05-16
### Added
- Added support for `eslint` (`templates/eslint`). Running `mk eslint` now creates an `eslintrc.js` file in the current working directory.

## [0.4.0] - 2017-05-12
### Added
- Added support for `changelog` (`templates/changelog`). Running `mk changelog` now creates a `CHANGELOG.md` file in the current working directory.
- Added support for `readme` (`templates/readme`). Running `mk readme` now creates a `README.md` file in the current working directory.

### Changed
- Updated `README` file with overview of project, as well as installation, usage, and documenation info.

## [0.3.0] - 2017-05-10
### Added
- Added support for `npm` (`templates/npm`). Running `mk npm` now creates an `index.js` file in the current working directory.

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

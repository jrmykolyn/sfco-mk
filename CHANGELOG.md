# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- Added support for `git` (`templates/git/`). Running `mk git` now creates a `.gitignore` file in the current directory.

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

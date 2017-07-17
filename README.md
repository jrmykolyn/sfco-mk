# Short Future Co. - MK

## Table of Contents
- [About](#about)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
	- [Creating Templates](#creating-templates)
	- [Supporting Commands](#supporting commands)
- [Documentation](#documentation)

## About
`sfco-mk` is a command line utility that aims to simplify the process of 'bootstrapping'/'generating' common web dev. configuration and supporting files.

As with all open source software, this utility may be used by any interested parties. However, please note that `sfco-mk` is *highly* opinionated and, at the time of writing, *not configurable*.

## Installation
As a command line utility, `sfco-mk` is meant to be installed globally.

```
npm install -g sfco-mk
```

## Setup
N/A

## Usage
`sfco-mk` exposes the `mk` command. See the subsections below for additional usage information.

### Creating Templates
The primary use of the `mk` command is to create templates of a given type. The 'default' version of a given template can be created by running the following command.

```
mk { SUBCOMMAND }
mk readme // Creates a `README.md` file in the current directory.
```

If a given template has many 'variants' (eg. different versions of the template), then `mk` may be invoked with a `{ VARIANT }` option. When invoked correctly, the file which matches the specified `{ SUBCOMMAND }` and optional `{ VARIANT }` will be created in the current directory.

```
mk { SUBCOMMAND } { VARIANT }
mk readme alt // Creates a `README-ALT.md` file in the current directory.
```

If a value is provided for `{ VARIANT }`, it must match one of the keys within the `_manifest.json` file for the specified `{ SUBCOMMAND }`. If no value is provided for `{ VARIANT }`, then the `default` key is used.

### Supporting Commands
The following commands may be used to display additional information *about* `sfco-mk`. None of the following commands generate templates:

Command | Description
--- | ---
`list`  | *Display a list of templates and template variants.*

## Documentation
Currently, `sfco-mk` *does not* include any external documentation. 

For an overview of available commands, please see the `templates/` directory, as well as the `_manifest.json` file within each subdirectory.

For an overview of the project's evolution, please consult the `CHANGELOG`.

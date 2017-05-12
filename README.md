# Short Future Co. - MK

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
`sfco-mk` exposes the `mk` command, which can be invoked in a terminal shell as follows:

```
mk { SUBCOMMAND } { VARIANT }
```

`{ SUBCOMMAND }` is required, and must match one of the subdirectories within `templates/` (eg. `git`).

If a value is provided for `{ VARIANT }`, it must match one of the keys within the `_manifest.json` file for the specified `{ SUBCOMMAND }`. If no value is provided for `{ VARIANT }`, then the `default` key is used.

When invoked correctly, the file which matches the specified `{ SUBCOMMAND }` and optional `{ VARIANT }` will be created in the current directory. For example:

```
mk readme // Creates a `README.md` file in the current directory.
```

## Documentation
Currently, `sfco-mk` *does not* include any external documentation. 

For an overview of available commands, please see the `templates/` directory, as well as the `_manifest.json` file within each subdirectory.

For an overview of the project's evolution, please consult the `CHANGELOG`.

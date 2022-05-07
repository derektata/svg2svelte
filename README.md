# svg2svelte

Easily turn a SVG into a Svelte component.

## Dependencies

- svgo
- ripgrep

##### Note: This script has a prompt to install `svgo` via npm if it's not found, and will complain if it can't find `ripgrep`.

## How it works
It will first run the image through `svgo` to optimize it and remove any unnecessary data that may have been saved in it from the vector editor.

Then it uses `ripgrep` to look for id's in the file that contain `bind:` and converts them into variables that we can manipulate with an animation library later on.

##### Tested with SVGs from Adobe Illustrator & Inkscape.

## Setup
```bash
Install:
$   ./setup -i
$   ./setup install
```

This will put a `svgo` config file in in `$HOME/.config/svg2svelte`, and copy `svg2svelte` to `/usr/local/bin`

```bash
Remove:
$   ./setup -r
$   ./setup remove
```

This will remove the config file/directory and also remove `svg2svelte` from `/usr/local/bin`

## Usage:
```bash
svg2svelte [input file]

Examples:
$   svg2svelte shapes.svg
$   svg2svelte starball.svg
```

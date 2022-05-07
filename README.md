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

## Usage:
```bash
svg2svelte [input file]

Examples:
$   svg2svelte shapes.svg
$   svg2svelte starball.svg
```

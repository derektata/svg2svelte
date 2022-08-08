# svg2svelte

Easily turn a SVG into a Svelte component.

## Dependencies

- svgo

## How it works
It uses `grep` under the hood to look for id's in the file that contain `bind:` and converts them into variables that we can manipulate with an animation library later on.

It will then run the image through `svgo` to optimize it, remove any unnecessary data that may have been saved in it from the vector editor and spit out a new Svelte component.

##### Tested with SVGs from Adobe Illustrator & Inkscape.

## Usage:
```bash
svg2svelte [input file]

Examples:
$   svg2svelte shapes.svg -> Shapes.svelte
$   svg2svelte ball.svg -> Ball.svelte
```

## Shoutouts 📣
[@dceddia](https://github.com/dceddia) - Thank you for your awesome [video](https://www.youtube.com/watch?v=ePFw62HISRI) and explaining how the Ruby script worked. Unfortunately the script was tailored more for macOS, as well as an outdated version of `svgo` and wouldn't work in my use case. So this project was born.

You can find more info on his implementation [here](https://gist.github.com/dceddia/0a669466821b6f3c3dcbc2a5e2b3af04).

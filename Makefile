all:
	$(MAKE) -s clean
	./svg2svelte ./examples/shapes.svg

clean:
	rm -f *.bak *.min* *.svelte ./examples/*.min* ./examples/*.bak

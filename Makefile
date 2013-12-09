BUNDLE_DIRECTORY = SSOO-TP3
BUNDLE_FILENAME  = SSOO-TP3.tar.gz

.PHONY: all clean bundle

all: informe.pdf

informe.pdf: tex/*.tex
	cd tex; pdflatex -interactive=nonstopmode -halt-on-error informe.tex
	cd tex; pdflatex -interactive=nonstopmode -halt-on-error informe.tex
	cp tex/informe.pdf .

bundle:
	make informe.pdf
	mkdir $(BUNDLE_DIRECTORY)
	cp informe.pdf $(BUNDLE_DIRECTORY)
	make clean
	cp code data tex Makefile enunciado.pdf README.md $(BUNDLE_DIRECTORY) -r
	tar zcf $(BUNDLE_FILENAME) $(BUNDLE_DIRECTORY)
	rm -rf $(BUNDLE_DIRECTORY)

clean:
	rm -f informe.pdf tex/*.pdf tex/*.aux tex/*.log tex/*.toc
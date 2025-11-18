# Makefile for Hugo development
HUGO ?= hugo
PORT ?= 1313
BIND ?= 127.0.0.1
BASEURL ?= http://localhost:$(PORT)

# Development flags: include drafts, enable live reload, faster feedback
HUGOFLAGS ?= -D  --disableFastRender
SERVEFLAGS ?= server --bind $(BIND) --port $(PORT) --baseURL $(BASEURL) $(HUGOFLAGS)

.PHONY: help dev serve build preview clean new

help:
	@echo "Usage:"
	@echo "  make dev           # run hugo in dev mode (drafts, livereload)"
	@echo "  make serve         # alias for dev"
	@echo "  make build         # produce a production build (public/)"
	@echo "  make preview       # build including drafts"
	@echo "  make clean         # remove generated files"
	@echo "  make new NAME=foo  # create new content at content/<NAME>"

dev:
	$(HUGO) $(SERVEFLAGS)

serve: dev

build:
	$(HUGO) --gc --minify

preview:
	$(HUGO) -D --gc --minify

clean:
	@rm -rf public resources .hugo_build.lock $(HOME)/.cache/hugo || true

# create new content: make new NAME=posts/my-post.md
# or NAME=blog/my-slug.md
new:
ifndef NAME
	$(error NAME is not set. Usage: make new NAME=posts/my-post.md)
endif
	$(HUGO) new $(NAME)
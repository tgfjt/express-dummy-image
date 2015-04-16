BABEL = ./node_modules/.bin/babel

all: node

node: lib
	@rm -rf node
	@mkdir node
	$(BABEL) "lib/index.js" > "node/index.js"
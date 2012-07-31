#all:
#	make lint
#	make test

test:
	jasmine-node .

lint:
	gjslint *.js
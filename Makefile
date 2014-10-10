sass:
	@sass public/style/main.scss:public/main.css --watch

server:
	@python -m SimpleHTTPServer
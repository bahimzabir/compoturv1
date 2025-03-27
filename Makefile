NAME = computor

all: $(NAME)

$(NAME): node_modules
	npm run build
	chmod +x computor

node_modules:
	npm install

clean:
	rm -rf dist
	rm -rf node_modules

fclean: clean
	rm -f package-lock.json

re: fclean all

.PHONY: all clean fclean re 
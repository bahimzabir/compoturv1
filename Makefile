NAME = computor

all: $(NAME)

$(NAME): package.json
	npm install
	npm run build
	chmod +x computor

clean:
	rm -rf dist
	rm -rf node_modules

fclean: clean
	rm -f package-lock.json

re: fclean all

.PHONY: all clean fclean re 
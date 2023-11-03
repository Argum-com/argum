# argum

## Requirements

```bash
# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# restart terminal or run:
source ~/.bashrc # or ~/.zshrc
# install npm
nvm install node
# install yarn
npm install -g yarn
# install vite
yarn global add vite
```

## Project setup

```bash
# install dependencies
yarn
```

## Compiles and hot-reloads for development

```bash
# serve with hot reload at localhost:5173
yarn dev
```

## Docker

### Development

Build the Docker image:
```bash
docker build -t argum:local-dev -f Dockerfile .
```

Run Dev Docker image
```bash
docker run --name argum -d -p 80:5173 -v argum_node_modules:/app/node_modules -v $PWD:/app argum:local-dev
```

```bash
docker exec -it argum sh
```

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

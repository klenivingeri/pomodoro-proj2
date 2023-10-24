# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ESLint configuration

- npm i eslint -D
- npm i @rocketseat/eslint-config -D

Criar arquivo `.eslintrc.json`
```JSON
{
    "extends": "@rocketseat/eslint-config/react"
}
```
- executar: npx eslint src --ext .ts,.tsx

ou configurar `package.json`

```JSON
{
    "lint": "npx eslint src --ext .ts,.tsx"
}
```

- executar: npm run lint
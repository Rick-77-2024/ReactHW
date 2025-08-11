---First---
1. Menu File - New - Project.
	Look files:
	1. Создание проекта React+Vite Fin.jpg
	2. Создание проекта React+Vite Fin доп подтверждение.jpg

Add in file package.json in block "dependencies"the line:
	"react-router-dom": "^7.0.1" and install
 
 ---Dependencies---

Add to file in dependencies "react-router-dom": "7.0.1"
1. npm i
2. npm install react-router-dom --save
3. npm install axios
4. npm install -g react-devtools
5. npm eslint-plugin-react-dom
6. npm install --save-dev eslint-plugin-react-x
	
	npm install tailwindcss @tailwindcss/vite
   If you need eslint
3. 
   eslint-plugin-react-dom
4. npm install --save-dev eslint-plugin-react-dom
5. 
6. 
7. npm install react-hook-form
8. npm install @hookform/resolvers
9. npm install joi

Create Git repository from WebSrtorm:
Menu Git - GutHub - Share Project on GitHub
UnTap Private

- git remote add hw6.1 https://github.com/Rick-77-2024/ReactHW/
- git push --set-upstream ррhw6.1 ReactHW/hw6.1

FE. Frontend. ДЗ 6

Взяти приклад, який був на занятті, і розписати, що робить кожен рядок коду.
! Рекомендація: робити опис коду разом із відео по його ходу.
В ідеалі потім відкотити зміни і пройтись по коду ще раз самостійно (без відео).
Матеріали уроку
react auth.pdf
------------------------

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

git rm .idea/ -r --cached / git rm --cached -r .idea/
git add -u .idea/
git commit -m "Removed the .idea folder"

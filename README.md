---First---
1. Menu File - New - Project.
	Look files:
	1. Создание проекта React+Vite Fin.jpg
	2. Создание проекта React+Vite Fin доп подтверждение.jpg
 
---Dependencies---
1. npm i
2. npm install tailwindcss @tailwindcss/vite
   If you need eslint
3. npm install --save-dev eslint-plugin-react-x
   eslint-plugin-react-dom
4. npm install --save-dev eslint-plugin-react-dom 

Create Git repository from WebSrtorm:
Menu Git - GutHub - Share Project on GitHub
Untap Private


- git remote add hw2.1 https://github.com/Rick-77-2024/ReactHW/
- git push --set-upstream ррhw2.1 ReactHW/hw2.1

ReactHW2
------------------------
#ohm4AivCEBv

https://jsonplaceholder.typicode.com/todos – тут масив даних. Ознайомтесь з ним для початку
Створити компонент TodoComponent, який буде містити інформацію про окремий об’єкт з масиву.
Створити компонент TodoComponents, в якому відбувається ітерація масиву даних, отриманих з апі.
Кореневим компонентом є App
----------------------------------------------------------------------------------------------------- 

#x7sQQ3cJ3

https://jsonplaceholder.typicode.com/posts – тут масив даних. Ознайомтесь з ним для початку.
Створити необхідні моделі та компоненти та вивести всю інформацію за аналогією з попереднім завданням.
Додати мінімальну стилізацію
-----------------------------------------------------------------------------------------------------

#98uhQGhaN
https://jsonplaceholder.typicode.com/comments – тут масив даних.Ознайомтесь з ним для початку.
Створити необхідні моделі та компоненти та вивести всю інформацію за аналогією з попереднім завданням.
Додати мінімальну стилізацію
----------------------------------------------------------------------------------------------------- 

#UHbARYeyHp
Ознайомитись з документацією https://dummyjson.com/docs
-----------------------------------------------------------------------------------------------------

#q2faxfR
Те саме, що і попередні завдання, але дані отримати з апі – https://dummyjson.com
----------------------------------------------------------------------------------------------------- 

#hQj9gOH
**Те саме що і попередні завдання, але данні отримати з апі – https://dummyjson.com/products
-----------------------------------------------------------------------------------------

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

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

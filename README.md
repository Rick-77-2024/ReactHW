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
3. npm install react-redux
4. npm install @reduxjs/toolkit

/*
3. npm install axios
4. npm install -g react-devtools
5. npm eslint-plugin-react-dom
6. npm install --save-dev eslint-plugin-react-x
	
	npm install tailwindcss @tailwindcss/vite
   If you need eslint
3. 
   eslint-plugin-react-dom
4. npm install --save-dev eslint-plugin-react-dom
5. npm install react-hook-form
6. npm install @hookform/resolvers
7. npm install joi
*/

Create Git repository from WebSrtorm:
Menu Git - GutHub - Share Project on GitHub
UnTap Private

- git remote add hw8.1 https://github.com/Rick-77-2024/ReactHW/
- git push --set-upstream ррhw8.1 ReactHW/hw8.1

------------------------

FE. ДЗ 8

Створити стейт, який буде відповідати за пости та коментарі. (з jsonplaceholder)
Зробити відповідні роути.
Створити маршрут /complex при переході, на який відобразяться наступні дані: юзер + його пости + коментарі поста.
Перехід на даний роут можливий тільки якщо до цього моменту ви відвідали сторінку з юзерами, постами, коментарями і таким чином наповнили стор. 
Або продумати логіку, яка буде враховувати наявність або відсутність даних, та у випадку необхідності самостійно наповнювати стор.
Відповідно, дані отримати зі стору, а не тягнути зайвий раз з апі.

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

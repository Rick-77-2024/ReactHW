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
2. npm install tailwindcss @tailwindcss/vite
   If you need eslint
3. npm install --save-dev eslint-plugin-react-x
   eslint-plugin-react-dom
4. npm install --save-dev eslint-plugin-react-dom
5. 

Create Git repository from WebSrtorm:
Menu Git - GutHub - Share Project on GitHub
Untap Private


- git remote add hw3.1 https://github.com/Rick-77-2024/ReactHW/
- git push --set-upstream ррhw3.1 ReactHW/hw3.1

ReactHW3
------------------------
FE. ДЗ 3
#chszHaH9

Побудувати меню з можливістю переходу на наступні сторінки:
/users
/posts
/comments
/products
Контент на сторінках відсутній. Лише грамотна обробка роутів в двох варіантах (router object  та browser router (необов’язково, але рекомендовано))
------------------------
 
#qL0b5uh
Побудувати меню, з можливістю переходу на наступні маршрути:
/users/jsonplaceholder
/users/dummyjson
/posts/jsonplaceholder
/posts/dummyjson
/comments/jsonplaceholder
Контент на сторінках відсутній. Лише грамотна обробка роутів
------------------------

#Uyj2GjyDDF
Побудувати меню, з можливістю переходу на наступні маршрути:
/users/jsonplaceholder – відобразити всі об’єкти з  https://jsonplaceholder.typicode.com/users
/users/dummyjson – відобразити всі об’єкти з https://dummyjson.com/users
/posts/jsonplaceholder- відобразити всі об’єкти з  https://jsonplaceholder.typicode.com/posts
/posts/dummyjson – відобразити всі об’єкти з https://dummyjson.com/posts
/comments/jsonplaceholder – відобразити всі об’єкти з https://jsonplaceholder.typicode.com/comments
/comments/dummyjson – відобразити всі об’єкти з https://dummyjson.com/comments
------------------------ 

#tntlwuxFxI5
Маршрутизація.
Є наступні сторінки: UsersPage – відтворює користувачів з api dummyjson.com (довільна розмітка та кількість інфи про об’єкт) PostsPage – відтворює пости з  api dummyjson.com (довільна розмітка та кількість інфи про об’єкт)
Відтворювати тільки перший відданий пул об’єктів (30 об’єктів чи скільки віддає апі) (без пагінації і не звертаючи увагу на залишки)
------------------------
 
#z5PFSTAK
На головній сторінці вивести всіх користувачів з будь-якого апі.
При кліку на певного користувача вивести його корзини товарів, не заміняючи батьківський компонент (поруч з зі списком користувачів)
------------------------
 
#knZgVIwvqd
На головній сторінці вивести всіх користувачів з будь-якого апі.
При кліку на певного користувача вивести його корзини товарів, заміняючи(!!!!!) батьківський компонент списком з корзинами.
------------------------

# React + TypeScript + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
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

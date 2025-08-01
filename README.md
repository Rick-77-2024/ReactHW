---First---
1. Menu File - New - Project.
	Look files:
	1. Создание проекта React+Vite Fin.jpg
	2. Создание проекта React+Vite Fin доп подтверждение.jpg
	
	
1 Create MyFile(s) in src/components/MyFile.tsx
2 In MyFile.tsx create function fName()
3

1. Скопировал package.json + package-lock.json в свой проект.
2. npm i
3. npm install tailwindcss @tailwindcss/vite
4. 

Create Git repository from WebSrtorm:
Menu Git - GutHub - Share Project on GitHub
Untap Private


- git remote add hw3 https://github.com/Rick-77-2024/ReactHW/
- git push --set-upstream ррhw3 ReactHW/hw3




1 Create MyFile(s) in src/components/MyFile.tsx
2 In MyFile.tsx create function fName()
3

- Create app in App.tsx

ReactHW
------------------------
#gi01MZ6v
з arrays.js взяти масив coursesTitleArray. Вивести кожен його елемент, створивши необхідні моделі та компоненти
Стилізація довільна, але обов’язково підключена і мінімально зроблена (хоча б один стиль, який працює).

#Fs05Kiho
з arrays.js взяти масив coursesAndDurationArray.
Вивести кожен його елемент, створивши необхідні моделі та компоненти
Стилізація довільна, але обов’язково підключена і мінімально зроблена (хоча б один стиль, який працює).

 
#kLZQR7Q98
з arrays.js взяти масив simpsons.
Кореневим компонентом є App
Створити компонент CharacterComponent, який буде містити всю інформацію щодо окремого об’єкту масиву. Розмітка компонента довільна. Опис персонажу передати через children.
Створити компонент FamilyComponent, в якому буде відбуватись ітерація по масиву simpsons.
Стилізація довільна, але обов’язково підключена і мінімально зроблена (хоча б один стиль, який працює).


#yiugR7&TF
з arrays.js взяти масиви coursesArray. Створити необхідні моделі та компоненти для того, щоб повноцінно відобразити його
Стилізація довільна, але обов’язково підключена і мінімально зроблена (хоча б один стиль, який працює).

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

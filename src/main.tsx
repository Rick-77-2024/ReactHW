
import {createRoot} from 'react-dom/client' //Импортирует функцию для создания корневого React-узла.
import './index.css' //Импортирует глобальные стили.
import {RouterProvider} from "react-router-dom"; //Импортирует компонент маршрутизации.
import {routes} from "./routes/routes.tsx"; //Импортирует объект маршрутов приложения.

//Находит DOM-элемент с id root, создаёт корневой React-узел и рендерит в него приложение с маршрутизацией.
createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>)

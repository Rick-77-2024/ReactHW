import {createBrowserRouter, type RouteObject } from 'react-router-dom';
import ComplexPage from '../pages/ComplexPage.tsx';
import { CommentsPage } from '../pages/CommentsPage.tsx';
import { MainLayout } from '../layouts/MainLayout.tsx';
import { UsersPage } from '../pages/UsersPage.tsx';
import { UserPage } from '../pages/UserPage.tsx';
import { PostsPage } from '../pages/PostsPage.tsx';

const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'complex', element:<ComplexPage />}
        ]
    }
];

export const router = createBrowserRouter(routes);
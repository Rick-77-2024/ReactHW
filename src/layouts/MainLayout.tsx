
import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu";
import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { userSliceActions } from "../redux/slices/userSlice/userSlice";
import { postSliceActions } from "../redux/slices/postSlice/postSlice";
import { commentSliceActions } from "../redux/slices/commentSlice/commentSlice";

export const MainLayout = () => {
    const dispatch = useAppDispatch();
    const { loadState: usersLoaded } = useAppSelector(({ userSlice }) => userSlice);
    const { loadState: postsLoaded } = useAppSelector(({ postSlice }) => postSlice);
    const { loadState: commentsLoaded } = useAppSelector(({ commentSlice }) => commentSlice);

    useEffect(() => {
        if (!usersLoaded) dispatch(userSliceActions.loadUsers());
        if (!postsLoaded) dispatch(postSliceActions.loadPosts());
        if (!commentsLoaded) dispatch(commentSliceActions.loadComments());
    }, [usersLoaded, postsLoaded, commentsLoaded, dispatch]);

    return (
        <>
            <Menu />
            <Outlet />
        </>
    );
};


import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { userSliceActions } from "../redux/slices/userSlice/userSlice";

export const UsersPage = () => {
    const { users, loadState } = useAppSelector(({ userSlice }) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!loadState) {
            dispatch(userSliceActions.loadUsers());
        }
    }, [loadState, dispatch]);

    return (
        <div>
            {!loadState && <div>Loading...</div>}
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

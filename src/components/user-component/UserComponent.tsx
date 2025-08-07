
import {IUser} from "../../models/IUser.ts";

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div>
            Id {user.id} Name {user.firstName} SurName {user.lastName} Gender {user.gender}
        </div>
    );
};


import {IUser} from "../../models/IUser.ts";
import styles from './UserComponent.module.css';

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div>
            <span className={styles.label}>Id</span>
            <span className={styles.value}>{user.id}</span>
            <span className={styles.label}>Name</span>
            <span className={styles.value}>{user.firstName}</span>
            <span className={styles.label}>SurName</span>
            <span className={styles.value}>{user.lastName}</span>
            <span className={styles.label}>Gender</span>
            <span className={styles.value}>{user.gender}</span>
        </div>
    );
};


import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";

export const AA = () => {
    // деструктуризация перемеы темы = вызов контекста
    const {changeTheme} = useContext(ThemeContext);
    // хендлеры для светлой и тёмной тем
    const handlerLight = () => {
        changeTheme('light')
    };
    const handlerDark = () => {
        changeTheme('dark')
    };
    return (
        <div> AA
            <button onClick={handlerLight}>light</button>
            <button onClick={handlerDark}>Dark</button>
        </div>
    );
};

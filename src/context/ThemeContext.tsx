
import {createContext} from "react";

// типизация
type ContextValueType = {
    theme: string,
    changeTheme: (theme: string) => void
}

//дефолтное значение
const defaultValue: ContextValueType = {
    theme: 'light',
    changeTheme: (theme: string) => {
        console.log(theme)
    }
};

// создание контекста <типизация> (дефолтное значение)
export const ThemeContext = createContext<ContextValueType>(defaultValue)

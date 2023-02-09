import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (intialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", intialValue)
    
    return [darkMode, setDarkMode];
}
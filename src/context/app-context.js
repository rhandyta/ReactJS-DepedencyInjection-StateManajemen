import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
export const AppContext = createContext({});

export function useAppContext() {
    return useContext(AppContext);
}

export function AppProvider({ children }) {
    const [user, setUser] = useState({});
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const user = {
            name: "John Bre",
            avatar: "https://kerma.widyatama.ac.id/wp-content/uploads/2021/05/blank-profile-picture-973460_1280.png",
        };

        setUser(user);
    }, []);

    const appContextValue = {
        user,
        setUser,
        theme,
        setTheme,
    };

    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    );
}

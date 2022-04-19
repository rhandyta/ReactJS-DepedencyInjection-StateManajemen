import { useContext } from "react";
import { AppContext } from "./context/app-context";

export default function ToggleTheme() {
    const context = useContext(AppContext);
    console.log(context);
    return (
        <>
            <button
                type="button"
                onClick={(e) => {
                    context.setTheme(
                        context.theme === "light" ? "dark" : "light"
                    );
                }}
            >
                Toggle Theme
            </button>
        </>
    );
}

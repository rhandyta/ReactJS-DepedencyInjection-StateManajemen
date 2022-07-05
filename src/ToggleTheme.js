import { useAppContext } from "./context/app-context";
import React from "react";
export default function ToggleTheme() {
    const context = useAppContext();
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

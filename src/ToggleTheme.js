import { useAppContext } from "./context/app-context";

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

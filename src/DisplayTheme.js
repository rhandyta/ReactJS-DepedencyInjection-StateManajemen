import { useAppContext } from "./context/app-context";
import React from "react";
export default function DisplayTheme() {
    const context = useAppContext();
    return (
        <>
            <p>Tema: {context.theme}</p>
        </>
    );
}

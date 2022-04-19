import { useContext } from "react";
import { AppContext } from "./context/app-context";

export default function NavbarUserText() {
    const context = useContext(AppContext);
    return (
        <>
            <h1>Name: {context.user.name ?? ""}</h1>
        </>
    );
}

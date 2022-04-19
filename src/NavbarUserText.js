import { useAppContext } from "./context/app-context";

export default function NavbarUserText() {
    const context = useAppContext();
    return (
        <>
            <h1>Name: {context.user.name ?? ""}</h1>
        </>
    );
}

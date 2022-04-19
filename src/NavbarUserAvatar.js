import { useAppContext } from "./context/app-context";

export default function NavbarUserAvatar() {
    const context = useAppContext();
    return (
        <>
            <p>Gambar</p>
            <img
                src={context?.user?.avatar}
                style={{ width: "200px", height: "200px" }}
            />
        </>
    );
}

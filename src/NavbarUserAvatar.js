import { useContext } from "react";
import { AppContext } from "./context/app-context";

export default function NavbarUserAvatar() {
    const context = useContext(AppContext);
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

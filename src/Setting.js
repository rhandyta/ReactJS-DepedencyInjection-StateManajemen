import { useContext } from "react";
import { AppContext } from "./context/app-context";

export default function Setting() {
    const context = useContext(AppContext);
    return (
        <input
            type="text"
            placeholder="change name"
            onChange={(e) => {
                context.setUser({
                    ...context.user,
                    name: e.target.value,
                });
            }}
        />
    );
}

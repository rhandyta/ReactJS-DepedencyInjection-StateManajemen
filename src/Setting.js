import { useAppContext } from "./context/app-context";

export default function Setting() {
    const context = useAppContext();
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

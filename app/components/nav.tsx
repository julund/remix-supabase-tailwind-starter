import { useToggle } from "react-use";
import { IconMenu, IconX } from "~/components/icon";

export default function Nav({ children }: { children: React.ReactNode }) {
    const [expanded, toggle] = useToggle(false);

    return (
        <div className="flex grow justify-end relative">
            <button className="md:hidden p-2" aria-label="toggle" onClick={toggle}>
                { expanded ? <IconX /> : <IconMenu />}
            </button>
            <nav aria-labelledby="toggle" className="flex flex-col md:flex-row gap-4 absolute z-50 right-0 top-10 bg-base-100 rounded-sm px-6 py-4">
                {children}
            </nav>
        </div>
    );
}
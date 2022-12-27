import { IconMenu } from "./icon";

export default function Nav({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex grow justify-end relative">
            <button className="md:hidden" aria-label="toggle"><IconMenu /></button>
            <nav
                aria-labelledby="toggle"
                className="flex flex-col md:flex-row gap-4 absolute z-50 right-0 top-0"
            >
                {children}
            </nav>
        </div>
    )
}
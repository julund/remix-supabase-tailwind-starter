import { NavLink } from "@remix-run/react";

export default function Header() {
    return (
        <header className="flex p-6 gap-2 bg-base-100 rounded-sm">
            <NavLink className="shrink font-semibold" to="/">Remix starter</NavLink>
            <nav className="flex gap-4 grow justify-end">
                <NavLink to="/lorem">Lorem</NavLink>
                <NavLink to="/ipsum">Ipsum</NavLink>
            </nav>
        </header>
    )
}
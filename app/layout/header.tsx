import { NavLink } from "@remix-run/react";
import { IconAbacus, IconApiApp } from "~/components/icon";

export default function Header() {
    return (
        <header className="flex p-6 gap-2 bg-base-100 rounded-sm">
            <NavLink className="shrink font-semibold" to="/">Remix starter</NavLink>
            <nav className="flex gap-4 grow justify-end">
                <NavLink to="/lorem" className={ ({isActive}) => isActive ? "navlink active" : "navlink" }><IconAbacus/>Lorem</NavLink>
                <NavLink to="/ipsum" className={ ({isActive}) => isActive ? "navlink active" : "navlink" }><IconApiApp/>Ipsum</NavLink>
            </nav>
        </header>
    )
}
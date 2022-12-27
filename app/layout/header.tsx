import { NavLink } from "@remix-run/react";
import { IconInfo, IconQuestionMark } from "~/components/icon";
import Nav from "~/components/nav";

export default function Header() {
    return (
        <header className="flex p-6 gap-2 bg-base-100 rounded-sm">
            <NavLink className="shrink font-semibold" to="/">Remix starter</NavLink>
            <Nav>
                <NavLink to="/lorem" className={ ({isActive}) => isActive ? "navlink active" : "navlink" }><IconInfo/>Lorem</NavLink>
                <NavLink to="/ipsum" className={ ({isActive}) => isActive ? "navlink active" : "navlink" }><IconQuestionMark/>Ipsum</NavLink>
            </Nav>
        </header>
    )
}
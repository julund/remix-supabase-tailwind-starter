import { NavLink } from "@remix-run/react";
import { IconInfo, IconQuestionMark } from "~/components/icon";
import Nav from "~/components/nav";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex-grow-0 w-full flex p-6 gap-2 bg-base-50 rounded-sm shadow-sm">
            <NavLink className="shrink text-xl font-serif font-medium text-base-600 p-2" to="/">Remix starter</NavLink>
            <Nav>
                <NavLink to="/lorem" className={ ({isActive}) => isActive ? "navlink active" : "navlink" }><IconInfo/>Lorem</NavLink>
                <NavLink to="/ipsum" className={ ({isActive}) => isActive ? "navlink active" : "navlink" }><IconQuestionMark/>Ipsum</NavLink>
            </Nav>
        </header>
    );
}
import { NavLink } from "@remix-run/react";
import Nav from "~/components/nav";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex-grow-0 w-full flex p-6 gap-2 bg-base-50 rounded-sm shadow-sm">
            <NavLink className="shrink text-xl uppercase font-title font-black text-base-600 p-2" to="/">Remix Starter</NavLink>
            <Nav>
                <NavLink to="/lorem" className={ ({isActive}) => isActive ? "navlink active" : "navlink" }>Lorem</NavLink>
                <NavLink to="/ipsum" className={ ({isActive}) => isActive ? "navlink active" : "navlink" }>Ipsum</NavLink>
                <NavLink to="/dolar" className={ ({isActive}) => isActive ? "navlink active" : "navlink" }>Dolar</NavLink>
            </Nav>
        </header>
    );
}
import { NavLink } from "@remix-run/react";
import Nav from "~/components/nav2";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex-grow-0 p-6 border-b-2 border-base-100 bg-base-50/50 ">
            <div className="max-w-2xl mx-auto flex gap-4">
                <NavLink className="text-lg uppercase font-title min-w-max font-black text-base-600 py-2 shrink" to="/">
                    Remix Starter
                </NavLink>
                <Nav>
                    <NavLink to="/lorem" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Lorem</NavLink>
                    <NavLink to="/ipsum" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Ipsum</NavLink>
                    <NavLink to="/aliquid-repellat" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Aliquidrepellat</NavLink>
                    <NavLink to="/dolar" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Dolar</NavLink>
                </Nav>
            </div>
        </header>
    );
}
import clsx from "clsx";
import { useRef } from "react";
import { useClickAway, useToggle } from "react-use";
import { IconMenu, IconX } from "~/components/icon";

export default function Nav({ children }: { children: React.ReactNode }) {

    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropDownRef = useRef<HTMLDivElement>(null);
    const [expanded, toggle] = useToggle(false);

    useClickAway(dropDownRef, (event: Event & { target: HTMLButtonElement }) => {
        const buttonClicked = event.target === buttonRef.current;
        if (expanded && !buttonClicked) toggle(false);
    });

    return (
        <nav className="z-0 flex grow justify-end items-start relative py-2">
            <button ref={buttonRef} className="p-1 rounded-sm hover:bg-base-100 focus:bg-base-100 md:hidden" aria-label="toggle" onClick={toggle}>
                {expanded ? <IconX className="text-base-800" /> : <IconMenu className="text-base-800" />}
            </button>
                <div ref={dropDownRef} onClick={toggle} aria-labelledby="toggle" className={clsx(
                    expanded ?
                    "flex md:flex-row items-start flex-col flex-wrap gap-2 md:gap-4 absolute md:static top-10 rounded-sm md:bg-transparent bg-base-100 md:p-0 py-4 px-6" :
                    "gap-4 hidden md:flex","duration-100"
                    )}>
                    {children}
                </div>
        </nav>
    );
}
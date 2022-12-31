import clsx from "clsx";
import { useRef } from "react";
import { useClickAway, useMeasure, useToggle } from "react-use";
import { IconMenu, IconX } from "~/components/icon";

export default function Nav({ children }: { children: React.ReactNode }) {

    // const [ ref, { width }] = useMeasure<HTMLElement>();
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
                {expanded ? <IconX className="text-base-800 pointer-events-none" /> : <IconMenu className="text-base-800 pointer-events-none" />}
            </button>
            <div ref={dropDownRef} onAnimationEnd={() => !expanded && dropDownRef.current?.classList.add("hidden")} onClick={toggle} aria-labelledby="toggle" className={clsx(
                expanded ?
                    "animate-fadeInDown md:animate-none" :
                    "md:flex animate-fadeOutUp md:animate-none",
                "flex items-start gap-2 md:gap-4 flex-col md:flex-row absolute md:static top-10 rounded-sm md:bg-transparent bg-base-100 md:p-0 py-4 px-6"
            )}>
                {children}
            </div>
        </nav>
    );
}
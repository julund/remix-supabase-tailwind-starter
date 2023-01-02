import clsx from "clsx";
import { useRef } from "react";
import { useClickAway, useMeasure, useToggle } from "react-use";
import { IconMenu, IconX } from "~/components/icon";

export default function Nav({ children, className }: { children: React.ReactNode; className?: string; }) {

    const [ref, { width }] = useMeasure<HTMLElement>();
    const [innerRef, { width: innerWidth }] = useMeasure<HTMLDivElement>();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const showDropDown = width <= innerWidth;
    const [expanded, toggle] = useToggle(false);

    // useClickAway(buttonRef, (event: Event & { target: HTMLButtonElement }) => {
    //     const buttonClicked = event.target === buttonRef.current;
    //     if (showDropDown && expanded && !buttonClicked) toggle(false);
    // });

    return (
        <nav ref={ref} className={clsx("py-2 grow")}>
            <button
                ref={buttonRef}
                className={clsx(
                    "p-1 rounded-sm hover:bg-base-100 focus:bg-base-100 transition-all duration-500 absolute right-4",
                    showDropDown ? "opacity-100" : "opacity-0 invisible"
                )}
                aria-label="toggle"
                onClick={toggle}
            >
                {expanded ?
                    <IconX className="text-base-800 pointer-events-none" /> :
                    <IconMenu className="text-base-800 pointer-events-none" />
                }
            </button>
            {showDropDown ?
                <span className={clsx(
                    "max-w-max flex absolute top-16 right-4 flex-col gap-2 justify-items-end rounded-sm bg-base-100 py-4 px-6 transition-all duration-300",
                    expanded ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-[-8px]"
                )}>
                    {children}
                </span>
                :
                <span ref={innerRef} className="max-w-max flex gap-2 absolute right-4 transition-all duration-300">
                    {children}
                </span>
            }
        </nav >
    );

}
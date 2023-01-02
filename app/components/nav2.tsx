import clsx from "clsx";
import { useRef } from "react";
import { useClickAway, useMeasure, useToggle } from "react-use";
import { IconMenu, IconX } from "~/components/icon";

export default function Nav({ children }: { children: React.ReactNode; }) {

    const [ref, { width }] = useMeasure<HTMLElement>();
    const [innerRef, { width: innerWidth }] = useMeasure<HTMLDivElement>();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropDownRef = useRef<HTMLDivElement>(null);
    const showDropDown = width <= innerWidth;
    const [expanded, toggle] = useToggle(false);

    useClickAway(buttonRef, (event: Event & { target: HTMLElement }) => {
        const buttonClicked = event.target === buttonRef.current;
        const dropDownClicked = event.target === dropDownRef.current;
        const dropDownChildrenClicked = event.target.parentElement === dropDownRef.current;
        // console.log(buttonClicked, dropDownChildrenClicked); // todo: figure out logic...
        if (showDropDown && expanded && !buttonClicked && !dropDownClicked && !dropDownChildrenClicked) toggle(false);
    });

    return (
        <nav ref={ref} className={clsx("py-2 grow relative")}>
            <button
                ref={buttonRef}
                className={clsx(
                    "p-1 rounded-sm hover:bg-base-100 focus:bg-base-100 transition-all duration-300 absolute right-0",
                    showDropDown ? "opacity-100" : "opacity-0 scale-75 translate-x-8"
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
                <div
                    ref={dropDownRef}
                    className={clsx(
                        "flex absolute top-10 right-0 flex-col gap-2 rounded-sm bg-base-100 py-4 px-6 transition-all duration-300",
                        expanded ? "" : "opacity-0 scale-75 translate-y-[-8px] pointer-events-none"
                    )}>
                    {children}
                </div>
                :
                <div
                    ref={innerRef}
                    className="max-w-max flex gap-2 absolute right-0 transition-all duration-300"
                >
                    {children}
                </div>
            }
        </nav>
    );

}
import clsx from "clsx";
import { useRef } from "react";
import { useClickAway, useMeasure, useToggle } from "react-use";
import { IconMenu, IconX } from "~/components/icon";

export default function Nav({ children }: { children: React.ReactNode }) {

    const [parentRef, { width: parentWidth }] = useMeasure<HTMLElement>();
    const [innerRef, { width: innerWidth }] = useMeasure<HTMLDivElement>();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropDownRef = useRef<HTMLDivElement>(null);
    const [expanded, toggle] = useToggle(false);
    const showDropDown = parentWidth <= innerWidth;

    useClickAway(dropDownRef, (event: Event & { target: HTMLButtonElement }) => {
        const buttonClicked = event.target === buttonRef.current;
        if (showDropDown && expanded && !buttonClicked) toggle(false);
    });

    const dropDownClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent> & { target: HTMLDivElement }) => {
        const isHrefClick = !!(event.target.tagName === "A" && event.target.getAttribute("href"));
        const isHrefParentClick = event.target.parentElement && !!(event.target.parentElement.tagName === "A" && event.target.parentElement.getAttribute("href"));
        if ((event.target !== dropDownRef.current) && (isHrefClick || isHrefParentClick)) toggle();
    };

    return (
        <nav ref={parentRef} className={clsx("z-0 flex grow justify-end items-start relative py-2", showDropDown ? "" : "")}>
            {showDropDown &&
                <button ref={buttonRef} className="p-1" aria-label="toggle" onClick={toggle}>
                    {expanded ? <IconX /> : <IconMenu />}
                </button>
            }
            {showDropDown && expanded &&
                <div ref={dropDownRef} onClick={dropDownClick} aria-labelledby="toggle" className="flex flex-col gap-4 absolute top-10 right-0 border-base-200 border rounded-sm bg-base-50 py-4 px-6 min-w-max">
                    {children}
                </div>
            }
            {!showDropDown &&
                <div ref={innerRef} className="flex gap-4">
                    {children}
                </div>
            }
        </nav>
    );
}
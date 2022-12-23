import React from "react";
import { useTween } from "react-use";

export default function Container({ children }: { children: React.ReactNode }) {

    const opacity = useTween(undefined, 150, 0);
    const y = useTween(undefined, 250, 0) * 10 - 10;

    return (
        <div className="p-6 bg-base-50 max-w-2xl mx-auto rounded-sm grow transition-all duration-500" style={{ translate: `0px ${y}px`, opacity }}>
            {children}
        </div>
    )
}
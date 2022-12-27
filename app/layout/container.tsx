import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {

    return (
        <div className="p-6 bg-base-50 max-w-2xl mx-auto rounded-sm grow animate-fadeInDown">
            {children}
        </div>
    )
}
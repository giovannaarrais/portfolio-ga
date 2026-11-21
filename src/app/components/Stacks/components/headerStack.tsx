import React from "react";

interface HeaderStackProps {
    name: string;
    children: React.ReactNode;
}

const HeaderStack = ({ name, children }: HeaderStackProps) => {
    return (
        <div className="mb-7 flex items-center gap-2">
            <span className="rounded-xl bg-[var(--purple)] p-3 text-white">
                {children}
            </span>
            <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
        </div>
    );
};

export default HeaderStack;

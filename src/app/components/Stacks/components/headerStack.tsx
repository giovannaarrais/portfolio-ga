import React from 'react';

interface HeaderStackProps {
    name: string;
    children: React.ReactNode;
}

const HeaderStack = ({name, children}: HeaderStackProps) => {
    return (
        <div className='flex gap-2 items-center mb-7'>
            <span className='bg-[var(--orange)] text-white p-3 rounded-xl'>{children}</span>
            <h1 className='text-2xl font-bold tracking-tight'>{name}</h1>
        </div>
    );
};

export default HeaderStack;

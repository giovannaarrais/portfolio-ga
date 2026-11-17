import React from 'react';

interface ContainerProps {
    children: React.ReactNode
    classExtra?: string ;
}

const Container = ({children, classExtra}: ContainerProps) => {
    return (
        <div className={`max-w-6xl mx-auto py-20 space-y-10 px-5 ${classExtra ? classExtra : ''}`}>
            {children}
        </div>
    );
};

export default Container;
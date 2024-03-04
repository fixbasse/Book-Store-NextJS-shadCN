import React from "react";

type TypographyProps = {
    className: string;
    children: React.ReactNode
}

const Typography = ({
    className,
    children
}: TypographyProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Typography
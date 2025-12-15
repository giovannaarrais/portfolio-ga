import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <Link
            href="/"
        >
            <Image
                src="/logo_ga.png"
                alt=""
                width={80}
                height={50}
            />
        </Link>
    );
};

export default Logo;

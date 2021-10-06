import React from "react";
import Link from "next/link";

import { SCategory, SHead, SHomeDisplay, SLink, SRightIcon, STagline, STitle } from "./styles";

const HomeDisplay = ({ children, headContent, isDark }) => {
    return (
        <SHomeDisplay>
            <SHead>
                <SCategory>{headContent.category}</SCategory>
                <STitle>{headContent.title}</STitle>
                <STagline>{headContent.tagline}</STagline>
                <Link href={headContent.cta.href} passHref>
                    <SLink>
                        {headContent.cta.text}
                        <SRightIcon />
                    </SLink>
                </Link>
            </SHead>
            {children}
        </SHomeDisplay>
    );
};

HomeDisplay.defaultProps = {
    headContent: {
        category: "12 x 12",
        title: "Vinyl Art",
        tagline: "Framed with any backdrop color.",
        cta: {
            text: "Browse",
            href: "/products",
        },
    },
};

export default HomeDisplay;

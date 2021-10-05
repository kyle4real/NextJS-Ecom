import React from "react";
import Link from "next/link";

import { SCategory, SHead, SHomeDisplay, SLink, SRightIcon, STagline, STitle } from "./styles";

const HomeDisplay = ({ children }) => {
    return (
        <SHomeDisplay>
            <SHead>
                <SCategory>12 x 12</SCategory>
                <STitle>Vinyl Art</STitle>
                <STagline>Framed with a backdrop of your choice.</STagline>
                <Link href={"/products"} passHref>
                    <SLink>
                        Browse <SRightIcon />
                    </SLink>
                </Link>
            </SHead>
            {children}
        </SHomeDisplay>
    );
};

export default HomeDisplay;

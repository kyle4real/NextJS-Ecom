import React, { Fragment } from "react";
import Header from "./Header/Header";
import { SMain } from "./styles";

const headerData = {
    button: {
        text: "Sign In",
    },
    navLinks: [
        {
            text: "Collections",
            href: "/collections",
        },
        {
            text: "Products",
            href: "/products",
        },
        {
            text: "Custom Vinyl",
            href: "/custom",
        },
    ],
};

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header headerData={headerData} />
            <SMain>{children}</SMain>
        </Fragment>
    );
};

export default Layout;

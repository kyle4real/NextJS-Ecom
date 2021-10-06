import Head from "next/head";
import { Fragment } from "react";
import BackdropCycle from "../components/BackdropCycle/BackdropCycle";
import LimitedRunDisplay from "../components/LimitedRunDisplay/LimitedRunDisplay";

import HomeDisplay from "../components/UI/HomeDisplay/HomeDisplay";

const headContent1218 = {
    category: "12 x 18",
    title: "Limited Run",
    tagline: "Framed with album cover art",
    cta: {
        text: "Browse",
        href: "/products",
    },
};

const headContentCustom = {
    category: "CUSTOM",
    title: "Custom Design",
    tagline: "Framed with any backdrop color.",
    cta: {
        text: "Browse",
        href: "/products",
    },
};

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Astro Vinyl Art</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeDisplay>
                <BackdropCycle />
            </HomeDisplay>
            <HomeDisplay headContent={headContent1218}>
                <LimitedRunDisplay />
            </HomeDisplay>
            <HomeDisplay headContent={headContentCustom}></HomeDisplay>
        </Fragment>
    );
}

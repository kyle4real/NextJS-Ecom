import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
    SCategory,
    SHead,
    SHomeDisplay,
    SImageContainer,
    SImagesContainer,
    SLink,
    SRightIcon,
    STagline,
    STitle,
} from "./styles";

import vinyl from "./../../../public/vinyl.png";

import { colorData } from "../../../utils/colorData";

const initialColors = colorData.reduce(
    (r, v, i) => r.concat({ rgb: v.RGB.join(","), index: i }),
    []
);

const HomeDisplay = () => {
    const [colors, setColors] = useState(initialColors.slice(0, 5));

    const colorHandler = useCallback(() => {
        setColors((p) => {
            const newArray = [];
            for (let i = 0; i < p.length; i++) {
                let index;
                if (p[i].index >= initialColors.length - 1) index = 0;
                else index = p[i].index + 1;
                newArray[i] = initialColors[index];
            }
            return newArray;
        });
    }, []);

    useEffect(() => {
        const id = setInterval(colorHandler, 2500);
        return () => clearInterval(id);
    }, [colorHandler]);

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
            <SImagesContainer>
                {colors.map(({ rgb }, index) => (
                    <SImageContainer key={index} style={{ background: `rgb(${rgb})` }}>
                        <Image
                            src={vinyl}
                            alt={`Vinyl design`}
                            width={300}
                            height={300}
                            layout={"fixed"}
                        />
                    </SImageContainer>
                ))}
            </SImagesContainer>
        </SHomeDisplay>
    );
};

export default HomeDisplay;

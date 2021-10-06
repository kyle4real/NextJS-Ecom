import React from "react";
import Image from "next/image";

import {
    SCenterImage,
    SImageContainer,
    SLeftImage,
    SLeftImageContainer,
    SRelativeContainer,
    SRightImage,
    SRightImageContainer,
} from "./styles";

import JA from "./../../public/ja.jpg";
import LZ from "./../../public/lz.jpg";
import RS from "./../../public/rs.jpg";

const LimitedRunDisplay = () => {
    return (
        <SImageContainer>
            <SCenterImage>
                <Image src={RS} alt="rolling stones" />
            </SCenterImage>
            <SRelativeContainer>
                <SLeftImage>
                    <Image src={LZ} alt="Led zep" />
                </SLeftImage>
                <SRightImage>
                    <Image src={JA} alt="jefferson air" />
                </SRightImage>
            </SRelativeContainer>
        </SImageContainer>
    );
};

export default LimitedRunDisplay;

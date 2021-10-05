import React from "react";
import Image from "next/image";

import {
    SCenterImage,
    SImageContainer,
    SLeftImage,
    SLeftImageContainer,
    SRightImage,
    SRightImageContainer,
} from "./styles";

import JA from "./../../public/ja.jpg";
import LZ from "./../../public/lz.jpg";
import RS from "./../../public/rs.jpg";

const LimitedRunDisplay = () => {
    return (
        <SImageContainer>
            <SLeftImageContainer>
                <SLeftImage>
                    <Image src={LZ} alt="Led zep" />
                </SLeftImage>
            </SLeftImageContainer>
            <SCenterImage>
                <Image src={RS} alt="rolling stones" />
            </SCenterImage>
            <SRightImageContainer>
                <SRightImage>
                    <Image src={JA} alt="jefferson air" />
                </SRightImage>
            </SRightImageContainer>
        </SImageContainer>
    );
};

export default LimitedRunDisplay;

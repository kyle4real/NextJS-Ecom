import styled from "styled-components";

import { v } from "../../../styles/variables";

export const SProductGridItem = styled.div`
    width: 100%;
    justify-self: center;
    align-self: center;
`;

// VARIANT ONE
export const SProductContent = styled.div`
    padding: ${v.smSpacing};
`;
export const SSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const STag = styled.span`
    font-size: 14px;
`;
export const SProductPrice = styled.span`
    font-weight: 600;
    font-size: 17px;
`;
export const SProductName = styled.h3`
    font-size: 20px;
`;
export const SVariantSelection = styled.span`
    display: block;
    margin-top: ${v.smSpacing};
`;

// VARIANT TWO
export const SProductContent2 = styled.div`
    padding: ${v.mdSpacing};

    text-align: center;
`;

export const SVariantSelection2 = styled.span`
    margin-top: ${v.smSpacing};
    display: block;
`;

export const SProductPrice2 = styled.span`
    display: block;
    margin-top: ${v.mdSpacing};
    font-size: 14px;
`;

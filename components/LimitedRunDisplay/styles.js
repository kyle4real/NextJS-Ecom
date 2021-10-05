import styled from "styled-components";

import { v, b, s } from "../../styles/variables";

export const SImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: ${s.xl};
    margin: 0 auto;
    padding: ${v.smSpacing};

    @media ${b.sm} {
        padding: ${v.mdSpacing};
    }

    @media ${b.lg} {
        padding: ${v.lgSpacing};
        align-items: flex-end;
    }
`;

export const SCenterImage = styled.div`
    border: 6px solid black;
    order: 3;

    display: flex;

    box-shadow: ${v.buttonBoxShadow};
    width: 100%;
    margin-top: ${v.smSpacing};
    max-width: 325px;

    @media ${b.sm} {
        max-width: 400px;
    }

    @media ${b.lg} {
        margin: 0;
        order: initial;
    }
`;

export const SLeftImageContainer = styled.div`
    width: 50%;
    order: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: calc(${v.smSpacing} / 2);

    @media ${b.lg} {
        order: initial;
        flex: 1;
        position: relative;
        justify-content: flex-start;
    }
`;
export const SLeftImage = styled.div`
    max-width: 270px;
    display: flex;
    border: 6px solid black;
    box-shadow: ${v.buttonBoxShadow};

    @media ${b.lg} {
        position: absolute;
        bottom: 0;
    }
`;

export const SRightImageContainer = styled.div`
    width: 50%;
    order: 2;
    display: flex;
    justify-content: flex-start;
    padding-left: calc(${v.smSpacing} / 2);

    @media ${b.lg} {
        order: initial;
        flex: 1;
        position: relative;
        justify-content: flex-end;
    }
`;
export const SRightImage = styled.div`
    max-width: 270px;
    display: flex;

    border: 6px solid black;
    box-shadow: ${v.buttonBoxShadow};

    @media ${b.lg} {
        position: absolute;
        bottom: 0;
    }
`;

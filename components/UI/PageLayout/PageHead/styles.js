import styled from "styled-components";

import { v, b, s } from "../../../../styles/variables";

export const SPageHead = styled.section`
    width: 100%;
    height: 20vh;
    background: ${({ theme }) => theme.bg2};
`;

export const SPageHeadContent = styled.div`
    height: 100%;
    transition: 0.3s ease padding;
    padding: 0 ${v.mdSpacing};
    @media ${b.lg} {
        padding: 0 ${v.smSpacing};
        margin: 0 auto;
        width: 100%;
        max-width: ${s.lg};
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SCategory = styled.h1`
    font-size: 16px;
    margin-bottom: ${v.smSpacing};
`;

export const SCollection = styled.h2`
    font-size: 32px;
    text-transform: uppercase;
`;

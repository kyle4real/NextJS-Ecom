import styled from "styled-components";

import { v, b, s } from "../../styles/variables";

export const SImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: ${s.xl};
    margin: 0 auto;
    position: relative;
    padding: ${v.mdSpacing};

    @media ${b.lg} {
        flex-direction: row;
    }
`;

export const SCenterImage = styled.div`
    border: 6px solid black;
    display: flex;

    box-shadow: ${v.buttonBoxShadow};
    box-shadow: 0px 0px 4px ${({ theme }) => theme.primary};

    max-width: 350px;
    margin: ${v.smSpacing} 0;

    @media ${b.sm} {
        margin: ${v.mdSpacing} 0;
        max-width: 400px;
    }
`;

export const SRelativeContainer = styled.div`
    display: flex;
    justify-content: center;

    @media ${b.lg} {
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        margin-bottom: ${v.lgSpacing};
    }
`;

export const SLeftImage = styled.div`
    max-width: 275px;
    display: flex;

    border: 6px solid black;
    box-shadow: ${v.buttonBoxShadow};
    box-shadow: 0px 0px 4px ${({ theme }) => theme.primary};

    margin-right: ${v.smSpacing};

    @media ${b.sm} {
        margin-right: ${v.mdSpacing};
    }
    @media ${b.lg} {
        margin: 0;
    }
`;

export const SRightImage = styled.div`
    max-width: 275px;
    display: flex;

    border: 6px solid black;
    box-shadow: ${v.buttonBoxShadow};
    box-shadow: 0px 0px 4px ${({ theme }) => theme.primary};
`;

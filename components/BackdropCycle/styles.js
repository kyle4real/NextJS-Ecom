import styled from "styled-components";

import { v, b, s } from "../../styles/variables";

export const SImagesContainer = styled.div`
    width: 100%;
    max-width: ${s.xl};
    margin: 0 auto;

    display: grid;
    gap: ${v.smSpacing};
    padding: ${v.smSpacing};
    grid-template-columns: repeat(2, minmax(auto, 300px));
    justify-content: center;

    @media ${b.sm} {
        grid-template-columns: repeat(2, minmax(auto, 300px));
        gap: ${v.mdSpacing};
        padding: ${v.mdSpacing};
    }
    @media ${b.lg} {
        gap: ${v.mdSpacing};
        padding: ${v.lgSpacing};
        grid-template-columns: repeat(4, 1fr);
    }
`;
export const SImageContainer = styled.div`
    align-content: center;
    display: flex;
    border: 6px solid black;
    padding: 1px;
    box-shadow: ${v.buttonBoxShadow};
    /* min-height: 300px; */
    max-height: 300px;
    /* min-width: 300px; */
    max-width: 300px;
`;

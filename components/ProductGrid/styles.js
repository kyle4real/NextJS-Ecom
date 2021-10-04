import styled from "styled-components";

import { v, b } from "../../styles/variables";

export const SProductGrid = styled.div`
    display: grid;
    gap: ${v.lgSpacing} ${v.lgSpacing};
    @media ${b.sm} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${b.md} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${b.lg} {
        grid-template-columns: repeat(3, 1fr);
    }
    width: 100%;
`;

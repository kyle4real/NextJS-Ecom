import styled from "styled-components";

import { v, b, s } from "../../../styles/variables";

export const SPage = styled.main`
    transition: 0.3s ease padding;
    padding: ${v.lgSpacing} ${v.mdSpacing};

    @media ${b.lg} {
        padding: ${v.lgSpacing} ${v.smSpacing};
        margin: 0 auto;
        width: 100%;
        max-width: ${s.xl};
    }
`;

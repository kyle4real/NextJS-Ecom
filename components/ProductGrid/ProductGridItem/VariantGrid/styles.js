import styled from "styled-components";

import { v } from "../../../../styles/variables";

export const SVariantGrid = styled.div`
    display: grid;
    margin-top: ${v.smSpacing};
`;

export const SVariantGridItem = styled.div`
    height: 10px;
    width: 10px;

    justify-self: center;
    align-self: center;
    text-align: center;
`;

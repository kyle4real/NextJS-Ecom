import styled from "styled-components";

import { v } from "../../styles/variables";

export const SImagesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const SImageContainer = styled.div`
    display: flex;
    border: 8px solid black;
    margin: ${v.lgSpacing};
    padding: 1px;
    box-shadow: ${v.buttonBoxShadow};
`;

import styled, { css } from "styled-components";

import { v, b } from "../../../styles/variables";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export const SPagination = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    line-height: 100%;
    margin: ${v.lgSpacing} 0 ${v.mdSpacing};
`;
export const SPaginationNumber = styled.li``;
export const SPaginationLink = styled.button`
    outline: none;
    border: none;
    background: transparent;
    padding: ${v.smSpacing} 0;
    display: flex;
    width: 32px;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme, active }) => (!active ? theme.text : theme.primary)};
    cursor: ${({ dots }) => (dots ? "initial" : "pointer")};
    line-height: 100%;
    box-shadow: ${({ theme, active }) => (active ? `inset 0 -2px 0 ${theme.primary}` : "none")};
    :hover {
        background: ${({ theme, active, dots }) =>
            dots ? "transparent" : active ? theme.bg : theme.bg2};
    }

    @media ${b.md} {
        padding: ${v.smSpacing} 0;
        font-size: 14px;
    }
`;

export const SPaginationArrow = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${v.smSpacing} 4px;
    outline: none;
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    line-height: 100%;
    :disabled {
        cursor: initial;
        color: ${({ theme }) => theme.textGlass};
    }
`;

const iconStyle = css`
    font-size: 12px;
    color: inherit;

    @media ${b.md} {
        font-size: 10px;
    }
`;
export const SArrowLeft = styled(AiOutlineLeft)`
    ${iconStyle}
`;

export const SArrowRight = styled(AiOutlineRight)`
    ${iconStyle}
`;

export const SPageAmount = styled.div`
    display: flex;
    justify-content: center;
`;
export const SPageAmountSpan = styled.span`
    font-size: 14px;
`;

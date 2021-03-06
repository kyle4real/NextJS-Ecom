import styled from "styled-components";

import { v } from "../../../styles/variables";

import { AiOutlineRight } from "react-icons/ai";

export const SHomeDisplay = styled.div`
    padding: ${v.lgSpacing} 0;
    background: white;
    overflow: hidden;

    :not(:last-child) {
        border-bottom: ${v.mdSpacing} solid ${({ theme }) => theme.primary};
    }

    :nth-child(even) {
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.textInvert};
    }
`;

export const SHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: ${v.lgSpacing} 0;
    position: relative;
    z-index: 10;
`;

export const SCategory = styled.span`
    font-size: 14px;
`;
export const STitle = styled.h1`
    font-size: 42px;
`;
export const STagline = styled.span`
    margin-top: ${v.smSpacing};
    display: block;
    font-size: 22px;
`;

export const SLink = styled.a`
    margin-top: ${v.mdSpacing};
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    font-size: 20px;
    position: relative;

    :hover {
        text-decoration: underline;
    }
`;
export const SRightIcon = styled(AiOutlineRight)`
    font-size: 14px;
    position: absolute;
    right: -15px;
    top: calc(50% - 8px);
`;

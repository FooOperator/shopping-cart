import { css } from "styled-components";

export const NeutralLink = css<{ color?: string }>`
    &, &:active, &:visited {
        text-decoration: none;
    }
`;

export const Blurred = css`
    user-select: none;
    pointer-events: none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
`;
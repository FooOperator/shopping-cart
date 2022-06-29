import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        background-color: ${props => props.theme.background};
        color: ${({ theme }) => theme.lightText};
        height: 100vh;
        scroll-behavior: smooth;
    }

    #root {
        height: 100%;
    }

    * {
        box-sizing: border-box
    }

    button {
        cursor: pointer;
        :hover {
            color: ${props => props.theme.lightText};
            border-color: ${props => props.theme.secondary};
            background-color: ${props => props.theme.foreground};
        }
    }

    a {
        color: ${props => props.theme.secondary};
        :hover {
            color: ${props => props.theme.lightText};
        }
    }

    button {
        border: .1rem  ${({ theme }) => theme.border} solid;
        color: ${({ theme }) => theme.primary};
        background-color: ${({ theme }) => theme.background};
    }

    ul {
        list-style: none;
    }
`;
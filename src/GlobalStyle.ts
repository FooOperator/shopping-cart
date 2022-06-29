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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Rubik', sans-serif
    }

    :not(h1, h2, h3, h4, h5, h6) {
        font-family: 'Montserrat', sans-serif;
    }

    #root {
        height: 100%;
    }

    * {
        box-sizing: border-box
    }

    
    :disabled {
        cursor: not-allowed;
    }

    button {
        font-weight: 600;
        border: .1rem  ${({ theme }) => theme.border} solid;
        color: ${({ theme }) => theme.primary};
        background-color: ${({ theme }) => theme.background};
        cursor: pointer;
        :enabled:hover {
            color: ${props => props.theme.lightText};
            border-color: ${props => props.theme.secondary};
            background-color: ${props => props.theme.foreground};
        }
    }

    a {
        color: ${props => props.theme.secondary};
        :enabled:hover {
            color: ${props => props.theme.lightText};
        }
    }

    ul {
        list-style: none;
    }
`;
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        primary: string;
        secondary: string;
        darkText: string;
        lightText: string;
        background: string;
        foreground: string;
        border: string;
    }
}
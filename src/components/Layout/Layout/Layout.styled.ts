import styled, { css } from "styled-components";
import { Blurred } from "../../../style/mixins";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
`;


const Layout = styled.div<{ sidebarActive: boolean }>`
    display: flex;
    flex-direction: column;
    height: 100%;
    ${props => props.sidebarActive ? Blurred : ''}
`;


export default {
    Layout,
    Main
}
import styled, { css } from "styled-components"

const List = styled.ul`
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-left: 1rem;
    margin-right: auto;
`;

const StickyNav = css`
    padding: .1rem 1rem;
    position: sticky;
`;

const FixedNav = css`
    padding: .5rem 2rem;
    position: fixed;
`;

const RightSide = styled.div`
    display: flex;
`;

const Nav = styled.nav<{ atTheTop: boolean }>`
    display: flex;
    z-index: 1;
    width: 100%;
    transition: .3s ease-in-out;
    ${(props) => props.atTheTop ? StickyNav : FixedNav}
    background-color: ${({ theme }) => theme.foreground};
    align-items: baseline;
    vertical-align: middle;
    justify-content: space-between;
`;

export default {
    Nav,
    List,
    RightSide
}
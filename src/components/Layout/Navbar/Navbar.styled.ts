import styled, { css } from "styled-components"

const List = styled.ul`
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-left: 1rem;
`;

const Span = styled.span`
`;

const Cart = styled.button`
    display: flex;
    justify-content: space-between;
    padding: .4rem .5rem;
    min-width: 6rem;
    gap: 1rem;

`;

const StickyNav = css`
    padding: .1rem 1rem;
    position: sticky;

`;

const FixedNav = css`
    padding: .5rem 2rem;
    position: fixed;

`;

const Nav = styled.nav<{ atTheTop: boolean }>`
    display: flex;
    width: 100%;
    transition: .1s;
    ${(props) => props.atTheTop ? StickyNav : FixedNav}
    background-color: ${({ theme }) => theme.foreground};
    align-items: baseline;
    vertical-align: middle;

    ${Cart} {
        margin-left: auto;
    }

`;

export default {
    Nav,
    List,
    Span,
    Cart,
}
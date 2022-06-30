import styled, { css } from "styled-components"
import { Cart } from '@styled-icons/ionicons-outline/Cart';
import { ButtonWithIcon } from "../../styled-components";

const List = styled.ul`
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-left: 1rem;
`;

const BadgeOver99 = css`
    :before {
        content: '+'
    }
    left: 50%;
`;

const Badge = styled.span<{ over99: boolean }>`
    position: absolute;
    font-size: 1.4rem;

    ${({ over99 }) => over99 && BadgeOver99};
`;

const CartIcon = styled(Cart)`
`;

const CartButton = styled(ButtonWithIcon)`
    padding: 1rem 3rem;
    padding-top: 1.3rem;

    ${CartIcon} {
        top: 50%;
        left: 25%;
    }
    ${Badge} {
        top: 10%;
        right: 20%;
    }
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
    z-index: 1;
    width: 100%;
    transition: .3s ease-in-out;
    ${(props) => props.atTheTop ? StickyNav : FixedNav}
    background-color: ${({ theme }) => theme.foreground};
    align-items: baseline;
    vertical-align: middle;
    ${CartButton} {
        margin-left: auto;
        margin-top: .3rem;
        align-self: center;
    }
`;

export default {
    Nav,
    List,
    Badge,
    CartButton,
    CartIcon
}
import styled from "styled-components";
import { NeutralLink } from "../../style/mixins";

const LinkHolder = styled.div<{ color: string }>`
    color: ${props => props.color ?? props.theme.primary};
    a {
        ${NeutralLink}
    }

`;

const DecoratedLink = styled(LinkHolder)`
    font-size: 1rem;
`;

const NavLink = styled(LinkHolder)`
    font-size: 1.2rem;
    outline: 0 solid ${({ theme }) => theme.border};
    outline-offset: .3rem;
    transition: outline .1s linear;

    :hover {
        outline-width: .6rem;
    }
`;

const Brand = styled(LinkHolder)`
    font-size: 2rem;
`;

export default {
    NavLink,
    Brand,
    DecoratedLink
}
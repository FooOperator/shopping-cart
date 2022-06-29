import styled, { css } from "styled-components";
import { NeutralLink } from "../../shared/style/snippets";

const LinkHolder = css<{ color: string }>`
    color: ${props => props.color ?? props.theme.primary};
    a {
        ${NeutralLink}
    }
`;

const DecoratedLink = styled.span`
    color: ${props => props.color ?? props.theme.primary};
    font-size: 1rem;
`;

const NavLink = styled.span`
    ${LinkHolder}
    font-size: 1.2rem;
    outline: 0 solid ${({ theme }) => theme.border};
    outline-offset: .3rem;
    transition: outline .1s linear;
    text-transform: uppercase;
    :hover {
        outline-width: .3rem;
    }
`;

const Brand = styled.h1`
    ${LinkHolder}
    font-size: 2rem;
    margin: .3rem;
`;

export default {
    NavLink,
    Brand,
    DecoratedLink
}
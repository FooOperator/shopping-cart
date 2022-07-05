import { Cart } from "@styled-icons/ionicons-outline/Cart";
import styled, { css } from "styled-components";
import { ButtonWithIcon } from "../../../stateless";


const BadgeOver99 = css`
    :before {
        content: '+'
    }
    left: 50%;
`;
const CartIcon = styled(Cart)`
`;

const Badge = styled.span<{ over99: boolean }>`
    position: absolute;
    font-size: 1.4rem;

    ${({ over99 }) => over99 && BadgeOver99};
`;

// const CartButton = styled(ButtonWithIcon)`
//     padding: 1rem 3rem;
//     padding-top: 1.3rem;

//     ${CartIcon} {
//         top: 50%;
//         left: 25%;
//     }
//     ${Badge} {
//         top: 10%;
//         right: 20%;
//     }
// `;

const CartButton = styled(ButtonWithIcon)`
    padding: 1rem;
`;

export default {
    CartButton,
    Badge,
    CartIcon
}
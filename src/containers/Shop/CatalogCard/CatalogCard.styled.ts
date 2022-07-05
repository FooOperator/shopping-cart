import styled from "styled-components"
import { ButtonWithIcon } from "../../../components/stateless";

const Button = styled(ButtonWithIcon)`
    padding: .4rem .4rem;
`;

const AddToCart = styled(Button)`
`;

const CountButton = styled(Button)`
    display: block;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
`;

const DecreaseCount = styled(CountButton)`
`;

const IncreaseCount = styled(CountButton)`
`;

const Count = styled.span`
    font-size: 1.5rem;
`;

const ButtonsHolder = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    ${AddToCart} {
        flex: 1;
    }
    ${Count} {
        margin: 0 -5rem;
    }
    min-width: 100%;
`;

export default {
    AddToCart,
    IncreaseCount,
    DecreaseCount,
    Count,
    ButtonsHolder
}
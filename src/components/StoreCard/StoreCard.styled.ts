import styled from "styled-components"


const Button = styled.button`
    padding: .4rem;
`;

const AddToCart = styled(Button)`
`;

const CountButton = styled(Button)`

`;

const DecreaseCount = styled(CountButton)`

`;

const IncreaseCount = styled(CountButton)`

`;

const Count = styled.span`
    font-size: 1.4rem;
    margin-bottom: 1rem;
`;

const ButtonsHolder = styled.div`
    display: flex;
    > * {
        flex: 1;
    }
    align-items: baseline;
    text-align: center;
    min-height: 4%;
    min-width: 100%;
`;

export default {
    AddToCart,
    IncreaseCount,
    DecreaseCount,
    Count,
    ButtonsHolder
}
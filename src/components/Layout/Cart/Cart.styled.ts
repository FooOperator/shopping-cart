import styled, { css } from "styled-components";
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

const CloseButton = styled(CloseOutline)`
    align-self: flex-end;
    width: 4rem;
    cursor: pointer;
    :hover {
        color: ${({ theme }) => theme.secondary};
    }
`;

const Title = styled.h2`
    margin: .5rem;
    font-size: 2rem;
`;

const Warning = styled.h3`
    font-size: 4rem;
    margin: auto 0;
`;

const CartList = styled.ul`
    width: 100%;
    padding: 0;
`;

const Sidebar = styled.div`
    position: fixed;
    display: flex;
    z-index: 2;
    backdrop-filter: none;
    flex-direction: column;
    align-items: center;
    min-width: 40%;
    min-height: 100%;
    top: 0;
    right: 0;
    padding: 1rem;
    gap: .5rem;
    background-color: ${({ theme }) => theme.background};
`;

const CostLabel = styled.span`

`;

const Cost = styled.span`
    font-weight: 700;
`;


const CostGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    background-color: ${({ theme }) => theme.foreground};
    padding: .3rem 1rem;
`;

const Button = styled.button`
    font-size: 1rem;
`;

const ButtonsHolder = styled.div`
    display: flex;
    justify-content: space-around;
    gap: .1rem;
`;

export default {
    Sidebar,
    Title,
    ButtonsHolder,
    Button,
    CartList,
    CloseButton,
    CostGroup,
    CostLabel,
    Cost,
    Warning
}
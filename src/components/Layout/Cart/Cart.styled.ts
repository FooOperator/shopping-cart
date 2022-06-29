import styled from "styled-components";

const Title = styled.h2`

`;

const CartList = styled.ul`
    width: 100%;
    padding: 0;
`;

const Sidebar = styled.div`
    position: fixed;
    display: flex;
    backdrop-filter: none;
    flex-direction: column;
    align-items: center;
    min-width: 40%;
    min-height: 100%;
    top: 0;
    right: 0;
    padding: 1rem;
    background-color: ${({ theme }) => theme.background};
`;

const Button = styled.button`

`;

const ButtonsHolder = styled.div`
    display: flex;
    justify-content: space-around;
    gap: .1rem;
`;

const X = styled.button`
    padding: .2rem .7rem;
    align-self: flex-end;
`;

export default {
    Sidebar,
    Title,
    ButtonsHolder,
    Button,
    CartList,
    X
}
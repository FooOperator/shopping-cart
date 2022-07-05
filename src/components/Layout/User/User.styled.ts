import styled, { css } from "styled-components"
import { ButtonWithIcon } from "../../stateless";


const Icon = styled.img`

`;

const IconHolder = styled.div`

`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: .4rem 1rem;
`;

const ProfileButton = styled(ButtonWithIcon)`
    padding: 1rem;
`;

export default {
    IconHolder,
    Container,
    ProfileButton
}
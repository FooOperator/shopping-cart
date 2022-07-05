import { StyledIconBase } from '@styled-icons/styled-icon';
import styled from 'styled-components';

export const ButtonWithIcon = styled.button`
    position: relative;
    ${StyledIconBase} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;
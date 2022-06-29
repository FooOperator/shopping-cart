import styled, { css } from "styled-components"
import { Link as ReactRouterLink } from "react-router-dom";
import { NeutralLink } from "../../style/mixins";

const Thumbnail = styled.img<{ height: number }>`
    height: ${(props) => props.height}px;
    object-fit: cover;
`;

const Title = styled.span`
    font-size: 1.5rem;
`;

const Legend = styled.legend`
    font-size: 1.1rem;
    white-space: pre-wrap;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${Legend},
    ${Title} {
        text-indent: .2rem;
    }
`;

const RowCard = css`
    border-width: .01rem;

`;

const ColumnCard = css`
    flex-direction: column;
    border-width: .25rem;
`;

const Card = styled.div<{ variant: string }>`
    display: flex;
    border: 0 ${({ theme }) => theme.border} solid;
    ${(props) => props.variant === 'row' ? RowCard : ColumnCard}
    gap: .4rem;
    padding: .5rem;
    background-color: ${({ theme }) => theme.foreground};
    outline: 0 ${({ theme }) => theme.border} solid;
    transition: .2s linear;
    ${Thumbnail}, ${Title} {
        cursor: pointer;
    }
    ${Title}, ${Legend} {
        background: linear-gradient(to left, ${({ theme }) => theme.foreground} 50%, ${({ theme }) => theme.primary} 50%) right;
        background-size: 200%;
        transition: .5s ease-out;
    }

    :hover {
        border-color: ${({ theme }) => theme.secondary};
        ${Title}, ${Legend} {
            background-position: left;
            color: ${({ theme }) => theme.darkText};
        }

        
    }

`;

const Children = styled.div`
    display: flex;
    flex: 1;
`;

const Link = styled(ReactRouterLink) <{ color?: string }>`
    ${NeutralLink}
`;

export default {
    Card, Title, Thumbnail, Legend, Link, Children, InfoColumn
}
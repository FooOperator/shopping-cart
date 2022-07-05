import React from 'react'
import Card, { CardProps } from '../../../Card/Card'
import { default as S } from './Item.styled';


interface ItemProps extends Omit<CardProps, 'children'> { }

const Item: React.FC<ItemProps> = (props) => {
    return (
        <S.Container>
            <Card {...props} height={80} variant='row'>

            </Card>
        </S.Container>
    )
}

export default Item;